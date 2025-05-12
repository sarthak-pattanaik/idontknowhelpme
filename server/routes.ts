import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage, generateOTP, generateSessionToken } from "./storage";
import { z } from "zod";
import { insertUserSchema, updateUserSchema } from "@shared/schema";
import cors from "cors";
import { log } from "./vite";

// Constants
const OTP_EXPIRY_MINUTES = 10;
const SESSION_EXPIRY_DAYS = 7;

// Mock email sending (in production, would use a real email service)
async function sendOTPEmail(email: string, otp: string): Promise<void> {
  log(`[Email Service] Sending OTP ${otp} to ${email}`, "auth");
  // In production: integrate with real email service like SendGrid, Mailgun, etc.
}

// Middleware to authenticate requests based on session token
const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }
  
  try {
    // Get session from the database
    const session = await storage.getSessionByToken(token);
    if (!session) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
    
    // Get user from session
    const user = await storage.getUser(session.userId);
    if (!user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }
    
    // Attach user to request
    (req as any).user = user;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(403).json({ message: "Forbidden: Invalid token" });
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Enable CORS
  app.use(cors({
    origin: true,
    credentials: true,
  }));
  
  // Authentication routes
  
  // 1. Request OTP
  app.post('/api/auth/request-otp', async (req, res) => {
    try {
      // Validate email
      const validatedEmail = insertUserSchema.parse(req.body);
      const email = validatedEmail.email;
      
      // Generate OTP (6 digits)
      const otp = generateOTP(6);
      
      // Set expiration time (10 minutes from now)
      const expiresAt = new Date();
      expiresAt.setMinutes(expiresAt.getMinutes() + OTP_EXPIRY_MINUTES);
      
      // Store OTP in database
      await storage.createOtp({
        email,
        code: otp,
        expiresAt
      });
      
      // Send OTP to user's email (mock in development)
      await sendOTPEmail(email, otp);
      
      // In development, also return the OTP directly for testing
      const isDev = process.env.NODE_ENV === "development";
      
      res.status(200).json({
        message: "OTP sent successfully",
        email,
        ...(isDev && { otp }),
      });
      
    } catch (error) {
      console.error("Error requesting OTP:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid email address" });
      }
      res.status(500).json({ message: "Failed to send OTP" });
    }
  });
  
  // 2. Verify OTP and create/login user
  app.post('/api/auth/verify-otp', async (req, res) => {
    try {
      const { email, otp } = req.body;
      
      if (!email || !otp) {
        return res.status(400).json({ message: "Email and OTP are required" });
      }
      
      // Validate OTP
      const isValid = await storage.validateOtp(email, otp);
      
      if (!isValid) {
        return res.status(400).json({ message: "Invalid or expired OTP" });
      }
      
      // Check if user exists
      let user = await storage.getUserByEmail(email);
      let isNewUser = false;
      
      // If user doesn't exist, create them
      if (!user) {
        // Create new user
        user = await storage.createUser({ email });
        isNewUser = true;
      }
      
      // Create session token
      const token = generateSessionToken();
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + SESSION_EXPIRY_DAYS);
      
      await storage.createSession({
        userId: user.id,
        token,
        expiresAt,
      });
      
      // Set token in Authorization header
      res.setHeader('Authorization', `Bearer ${token}`);
      
      res.status(200).json({
        message: "Authentication successful",
        user,
        isNewUser,
      });
      
    } catch (error) {
      console.error("Error verifying OTP:", error);
      res.status(500).json({ message: "Failed to verify OTP" });
    }
  });
  
  // 3. Complete profile (for new users)
  app.post("/api/auth/complete-profile", authenticateToken, async (req: Request, res: Response) => {
    try {
      const user = (req as any).user;
      
      // Validate profile data
      const validatedProfile = updateUserSchema.parse(req.body);
      
      // Update user profile and set verified
      const updatedUser = await storage.updateUser(user.id, {
        ...validatedProfile,
        verified: true,
      } as any);
      
      res.status(200).json({
        message: "Profile completed successfully",
        user: updatedUser,
      });
      
    } catch (error) {
      console.error("Error completing profile:", error);
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid profile data" });
      }
      res.status(500).json({ message: "Failed to complete profile" });
    }
  });
  
  // 4. Get current user
  app.get("/api/auth/user", authenticateToken, async (req: Request, res: Response) => {
    res.status(200).json((req as any).user);
  });
  
  // 5. Logout
  app.post("/api/auth/logout", authenticateToken, async (req: Request, res: Response) => {
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader && authHeader.split(' ')[1];
      
      if (token) {
        await storage.deleteSession(token);
      }
      
      res.status(200).json({ message: "Logged out successfully" });
      
    } catch (error) {
      console.error("Error logging out:", error);
      res.status(500).json({ message: "Failed to logout" });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);
  return httpServer;
}