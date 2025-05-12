import {
  users,
  otpCodes,
  sessions,
  type User,
  type InsertUser,
  type UpdateUser,
  type OtpCode,
  type InsertOtp,
  type Session,
  type InsertSession,
} from "@shared/schema";
import { db } from "./db";
import { eq, and, gte } from "drizzle-orm";
import { randomBytes } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, user: UpdateUser): Promise<User>;
  
  // OTP operations
  createOtp(otp: InsertOtp): Promise<OtpCode>;
  validateOtp(email: string, code: string): Promise<boolean>;
  
  // Session operations
  createSession(session: InsertSession): Promise<Session>;
  getSessionByToken(token: string): Promise<Session | undefined>;
  deleteSession(token: string): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(userData: InsertUser): Promise<User> {
    const now = new Date();
    const [user] = await db
      .insert(users)
      .values({ ...userData, createdAt: now, updatedAt: now })
      .returning();
    return user;
  }

  async updateUser(id: number, userData: UpdateUser): Promise<User> {
    const [user] = await db
      .update(users)
      .set({ ...userData, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return user;
  }
  
  // OTP operations
  async createOtp(otpData: InsertOtp): Promise<OtpCode> {
    // First, mark any existing unused OTPs for this email as used
    await db
      .update(otpCodes)
      .set({ used: true })
      .where(
        and(
          eq(otpCodes.email, otpData.email),
          eq(otpCodes.used, false)
        )
      );
    
    // Then create a new OTP
    const [otp] = await db
      .insert(otpCodes)
      .values(otpData)
      .returning();
    return otp;
  }

  async validateOtp(email: string, code: string): Promise<boolean> {
    const now = new Date();
    
    // Find valid OTP
    const [otp] = await db
      .select()
      .from(otpCodes)
      .where(
        and(
          eq(otpCodes.email, email),
          eq(otpCodes.code, code),
          eq(otpCodes.used, false),
          gte(otpCodes.expiresAt, now)
        )
      );
    
    if (!otp) {
      return false;
    }
    
    // Mark OTP as used
    await db
      .update(otpCodes)
      .set({ used: true })
      .where(eq(otpCodes.id, otp.id));
    
    return true;
  }
  
  // Session operations
  async createSession(sessionData: InsertSession): Promise<Session> {
    const [session] = await db
      .insert(sessions)
      .values(sessionData)
      .returning();
    return session;
  }

  async getSessionByToken(token: string): Promise<Session | undefined> {
    const now = new Date();
    const [session] = await db
      .select()
      .from(sessions)
      .where(
        and(
          eq(sessions.token, token),
          gte(sessions.expiresAt, now)
        )
      );
    return session;
  }

  async deleteSession(token: string): Promise<void> {
    await db
      .delete(sessions)
      .where(eq(sessions.token, token));
  }
  
  // Backward compatibility
  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.getUserByEmail(username);
  }
}

// Helper functions
export function generateOTP(length: number = 6): string {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

export function generateSessionToken(): string {
  return randomBytes(32).toString('hex');
}

export const storage = new DatabaseStorage();
