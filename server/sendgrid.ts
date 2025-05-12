import { MailService } from '@sendgrid/mail';
import { log } from './vite';

// Check if SendGrid API key is available
const hasSendGridKey = !!process.env.SENDGRID_API_KEY;

// Log SendGrid status on startup
if (hasSendGridKey) {
  log("SendGrid API key found - email sending enabled", "auth");
} else {
  log("SendGrid API key not found - email sending will be simulated", "auth");
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Send an email using SendGrid
 * Falls back to logging in development if no API key is available
 */
export async function sendEmail(params: EmailParams): Promise<boolean> {
  // If we don't have a SendGrid API key in development mode, just log
  if (!hasSendGridKey) {
    log(`[DEV EMAIL] To: ${params.to}, Subject: ${params.subject}`, "auth");
    log(`[DEV EMAIL] ${params.text || params.html}`, "auth");
    return true;
  }

  try {
    // Check for API key
    if (!hasSendGridKey) {
      throw new Error('SendGrid API key is missing');
    }
    
    // Initialize SendGrid client with the API key
    const mailService = new MailService();
    mailService.setApiKey(process.env.SENDGRID_API_KEY as string);
    
    // Send email
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    
    log(`Email sent to ${params.to}`, "auth");
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

/**
 * Send OTP verification email
 */
export async function sendOTPEmail(email: string, otp: string): Promise<boolean> {
  // Set a default sender email address
  const fromEmail = 'noreply@idontknowhelpme.com';
  
  return sendEmail({
    to: email,
    from: fromEmail,
    subject: 'Your verification code for idontknowhelpme',
    text: `Your verification code is: ${otp}\n\nThis code will expire in 10 minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #3b82f6; margin-bottom: 5px;">idontknowhelpme</h1>
          <p style="color: #666; margin-top: 0;">AI-Powered GTM Tools</p>
        </div>
        
        <div style="background-color: #f9fafb; border-radius: 8px; padding: 25px; margin-bottom: 20px; border: 1px solid #e5e7eb;">
          <h2 style="margin-top: 0; color: #1f2937;">Your Verification Code</h2>
          <p>Use the following code to verify your email address:</p>
          
          <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 4px; padding: 15px; text-align: center; margin: 20px 0; font-size: 24px; letter-spacing: 4px; font-weight: bold; color: #3b82f6;">
            ${otp}
          </div>
          
          <p style="margin-bottom: 0; color: #6b7280; font-size: 14px;">This code will expire in 10 minutes.</p>
        </div>
        
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          If you didn't request this code, you can ignore this email.
        </p>
      </div>
    `,
  });
}