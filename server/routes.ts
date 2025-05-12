import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage, generateOTP, generateSessionToken } from "./storage";
import { z } from "zod";
import { insertUserSchema, updateUserSchema } from "@shared/schema";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import cors from "cors";

// In a real production app, these would be sent via a real email service like SendGrid, Mailgun, etc.
// For demo purposes, we'll just log them to the console
async function sendOTPEmail(email: string, otp: string): Promise<void> {
  console.log(`[EMAIL SERVICE] Sending OTP ${otp} to ${email}`);
  // In production, implement actual email sending logic here
}

// JWT secret - in production, this should be a strong, secure value stored in environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = '7d'; // Token expiration time

// Middleware to verify authenticated sessions
const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.authToken || req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
    const user = await storage.getUser(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    // Attach user to request
    (req as any).user = user;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Middleware
  app.use(cookieParser());
  app.use(cors({
    origin: true,
    credentials: true,
  }));
  
  // Authentication routes
  
  // 1. Request OTP
  app.post('/api/auth/request-otp', async (req, res) => {
    try {
      // Validate email
      const emailSchema = z.object({
        email: z.string().email()
      });
      
      const result = emailSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: 'Invalid email address',
          errors: result.error.format() 
        });
      }
      
      const { email } = result.data;
      
      // Generate OTP (6 digits)
      const otp = generateOTP(6);
      
      // Set expiration time (10 minutes from now)
      const expiresAt = new Date();
      expiresAt.setMinutes(expiresAt.getMinutes() + 10);
      
      // Store OTP in database
      await storage.createOtp({
        email,
        code: otp,
        expiresAt
      });
      
      // In a real app, send email with OTP
      await sendOTPEmail(email, otp);
      
      res.status(200).json({ 
        message: 'OTP sent successfully',
        email,
        // Only include this in development - remove for production!
        otp: process.env.NODE_ENV === 'development' ? otp : undefined
      });
    } catch (error) {
      console.error('Error requesting OTP:', error);
      res.status(500).json({ message: 'Failed to send OTP' });
    }
  });
  
  // 2. Verify OTP and create/login user
  app.post('/api/auth/verify-otp', async (req, res) => {
    try {
      // Validate input
      const otpSchema = z.object({
        email: z.string().email(),
        otp: z.string().length(6)
      });
      
      const result = otpSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: 'Invalid input',
          errors: result.error.format() 
        });
      }
      
      const { email, otp } = result.data;
      
      // Verify OTP
      const isValid = await storage.validateOtp(email, otp);
      
      if (!isValid) {
        return res.status(400).json({ message: 'Invalid or expired OTP' });
      }
      
      // Check if user exists
      let user = await storage.getUserByEmail(email);
      let isNewUser = false;
      
      if (!user) {
        // Create new user
        user = await storage.createUser({ email });
        isNewUser = true;
      } else {
        // Update user's last login timestamp
        user = await storage.updateUser(user.id, { updatedAt: new Date() } as any);
      }
      
      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
      
      // Set token as httpOnly cookie
      res.cookie('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        sameSite: 'lax'
      });
      
      res.status(200).json({ 
        message: 'Authentication successful',
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          verified: user.verified
        },
        isNewUser
      });
    } catch (error) {
      console.error('Error verifying OTP:', error);
      res.status(500).json({ message: 'Failed to verify OTP' });
    }
  });
  
  // 3. Complete user profile (for new users)
  app.post('/api/auth/complete-profile', authenticateToken, async (req, res) => {
    try {
      const user = (req as any).user;
      
      // Validate input
      const profileSchema = z.object({
        fullName: z.string().min(3).max(100),
        phoneNumber: z.string().optional()
      });
      
      const result = profileSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: 'Invalid input',
          errors: result.error.format() 
        });
      }
      
      // Update user profile
      const updatedUser = await storage.updateUser(user.id, {
        ...result.data,
        verified: true
      } as any);
      
      res.status(200).json({
        message: 'Profile updated successfully',
        user: {
          id: updatedUser.id,
          email: updatedUser.email,
          fullName: updatedUser.fullName,
          phoneNumber: updatedUser.phoneNumber,
          verified: updatedUser.verified
        }
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ message: 'Failed to update profile' });
    }
  });
  
  // 4. Get current user
  app.get('/api/auth/me', authenticateToken, async (req, res) => {
    try {
      const user = (req as any).user;
      
      res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
          phoneNumber: user.phoneNumber,
          verified: user.verified
        }
      });
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Failed to fetch user data' });
    }
  });
  
  // 5. Logout
  app.post('/api/auth/logout', (req, res) => {
    res.clearCookie('authToken');
    res.status(200).json({ message: 'Logged out successfully' });
  });

  const httpServer = createServer(app);
  return httpServer;
}
