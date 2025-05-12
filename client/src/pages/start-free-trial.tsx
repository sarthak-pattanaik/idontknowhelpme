import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/hooks/useAuth';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';
import { Mail, ArrowRight, CheckCircle, AlertCircle, Loader } from 'lucide-react';

// Signup Form Schema
const emailSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type EmailFormValues = z.infer<typeof emailSchema>;

const StartFreeTrialPage: React.FC = () => {
  const { requestOtp, requestOtpLoading } = useAuth();
  const [, setLocation] = useLocation();
  
  // State management
  const [step, setStep] = useState<'email' | 'success'>('email');
  const [email, setEmail] = useState('');
  
  // Email form
  const emailForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });
  
  // Handle email submit
  const onEmailSubmit = (data: EmailFormValues) => {
    setEmail(data.email);
    
    requestOtp(data.email, {
      onSuccess: () => {
        setStep('success');
      },
      onError: (error) => {
        console.error('Error requesting OTP:', error);
        emailForm.setError('email', {
          type: 'manual',
          message: 'Failed to start trial. Please try again.',
        });
      },
    });
  };
  
  // Redirect to signup page to complete the process
  const continueToSignup = () => {
    setLocation('/signup');
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <Helmet>
        <title>Start Your Free Trial | idontknowhelpme</title>
        <meta
          name="description"
          content="Start your free trial of idontknowhelpme's AI-powered tools. No credit card required."
        />
      </Helmet>
      
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Start Your Free Trial</h1>
          <p className="text-gray-600">Experience the power of AI for your marketing team - No credit card required</p>
        </div>
        
        {/* Card */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          {/* Email Step */}
          {step === 'email' && (
            <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email Address
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
                      placeholder="you@company.com"
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
                    Processing...
                  </>
                ) : (
                  <>
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
              
              <div className="pt-4 text-center text-sm">
                <p className="text-gray-500">
                  By signing up, you agree to our{' '}
                  <a href="/terms" className="text-electric-600 hover:text-electric-700">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="/privacy" className="text-electric-600 hover:text-electric-700">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </form>
          )}
          
          {/* Success Step */}
          {step === 'success' && (
            <div className="space-y-6">
              <div className="rounded-lg bg-green-50 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-800">
                      Success! We've sent a verification code to <strong>{email}</strong>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-900 mb-2">One more step to go</h3>
                <p className="text-gray-600 mb-6">
                  Please check your email for the verification code and complete the sign-up process.
                </p>
                
                <button
                  onClick={continueToSignup}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-electric-600 hover:bg-electric-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-500"
                >
                  Continue to verification
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Social Proof */}
        <div className="mt-8">
          <p className="text-center text-gray-500 mb-4">Trusted by marketing teams at</p>
          <div className="flex flex-wrap justify-center gap-6 opacity-70">
            <div className="text-sm font-medium text-gray-900">ACME Corp</div>
            <div className="text-sm font-medium text-gray-900">TechFlow</div>
            <div className="text-sm font-medium text-gray-900">GlobalSoft</div>
            <div className="text-sm font-medium text-gray-900">DataHive</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartFreeTrialPage;