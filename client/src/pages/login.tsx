import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/hooks/useAuth';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';
import { Mail, Lock, ArrowRight, CheckCircle, AlertCircle, Loader } from 'lucide-react';

// Login Form Schemas
const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

const otpSchema = z.object({
  otp: z.string().length(6, 'OTP must be 6 digits'),
});

type EmailFormValues = z.infer<typeof emailSchema>;
type OtpFormValues = z.infer<typeof otpSchema>;

const LoginPage: React.FC = () => {
  const { requestOtp, requestOtpLoading, verifyOtp, verifyOtpLoading } = useAuth();
  const [, setLocation] = useLocation();
  
  // State management
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0);
  
  // Email form
  const emailForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });
  
  // OTP form
  const otpForm = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });
  
  // Handle email submit
  const onEmailSubmit = (data: EmailFormValues) => {
    setEmail(data.email);
    
    requestOtp(data.email, {
      onSuccess: () => {
        setStep('otp');
        setOtpSent(true);
        
        // Start countdown for resend button (60 seconds)
        setResendDisabled(true);
        setCountdown(60);
        
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              setResendDisabled(false);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      },
      onError: (error) => {
        console.error('Error requesting OTP:', error);
        emailForm.setError('email', {
          type: 'manual',
          message: 'Failed to send OTP. Please try again.',
        });
      },
    });
  };
  
  // Handle OTP submit
  const onOtpSubmit = (data: OtpFormValues) => {
    verifyOtp({ email, otp: data.otp }, {
      onSuccess: (response) => {
        if (response.isNewUser) {
          // Redirect to profile completion page
          setLocation('/complete-profile');
        } else {
          // Redirect to product access page
          setLocation('/product-access');
        }
      },
      onError: (error) => {
        console.error('Error verifying OTP:', error);
        otpForm.setError('otp', {
          type: 'manual',
          message: 'Invalid OTP. Please try again.',
        });
      },
    });
  };
  
  // Handle resend OTP
  const handleResendOtp = () => {
    if (resendDisabled) return;
    
    requestOtp(email, {
      onSuccess: () => {
        setOtpSent(true);
        
        // Reset countdown
        setResendDisabled(true);
        setCountdown(60);
        
        const timer = setInterval(() => {
          setCountdown((prev) => {
            if (prev <= 1) {
              clearInterval(timer);
              setResendDisabled(false);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      },
      onError: (error) => {
        console.error('Error resending OTP:', error);
      },
    });
  };
  
  // Handle back to email form
  const handleBackToEmail = () => {
    setStep('email');
    otpForm.reset();
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <Helmet>
        <title>Log In | idontknowhelpme</title>
        <meta
          name="description"
          content="Log in to access your idontknowhelpme account and get started with our AI tools."
        />
      </Helmet>
      
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Log in to your account to continue</p>
        </div>
        
        {/* Card */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          {/* Email Step */}
          {step === 'email' && (
            <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      {...emailForm.register('email')}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-electric-500 focus:border-electric-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  {emailForm.formState.errors.email && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {emailForm.formState.errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              
              <button
                type="submit"
                disabled={requestOtpLoading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-electric-600 hover:bg-electric-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {requestOtpLoading ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-2" />
                    Sending Code...
                  </>
                ) : (
                  <>
                    Continue with Email
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
              
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>
                  Don't have an account?{' '}
                  <a href="/signup" className="text-electric-600 hover:text-electric-700 font-medium">
                    Sign up
                  </a>
                </p>
              </div>
            </form>
          )}
          
          {/* OTP Step */}
          {step === 'otp' && (
            <form onSubmit={otpForm.handleSubmit(onOtpSubmit)} className="space-y-6">
              {otpSent && (
                <div className="rounded-lg bg-green-50 p-4 mb-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-green-800">
                        We've sent a verification code to <strong>{email}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                  Verification Code
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    autoComplete="one-time-code"
                    {...otpForm.register('otp')}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-electric-500 focus:border-electric-500"
                    placeholder="123456"
                  />
                </div>
                {otpForm.formState.errors.otp && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {otpForm.formState.errors.otp.message}
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={verifyOtpLoading}
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-electric-600 hover:bg-electric-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {verifyOtpLoading ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-2" />
                    Verifying...
                  </>
                ) : (
                  'Verify & Log In'
                )}
              </button>
              
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={handleBackToEmail}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Use a different email
                </button>
                
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendDisabled}
                  className={`text-sm ${
                    resendDisabled
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-electric-600 hover:text-electric-700'
                  }`}
                >
                  {resendDisabled
                    ? `Resend code in ${countdown}s`
                    : 'Resend code'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;