import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuth } from '@/hooks/useAuth';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';
import { User, Phone, AlertCircle, Loader, CheckCircle } from 'lucide-react';

// Profile Form Schema
const profileSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters').max(100, 'Full name cannot exceed 100 characters'),
  phoneNumber: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const CompleteProfilePage: React.FC = () => {
  const { user, isLoading, isAuthenticated, completeProfile, completeProfileLoading } = useAuth();
  const [, setLocation] = useLocation();
  
  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
    },
  });
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation('/login');
    }
  }, [isLoading, isAuthenticated, setLocation]);
  
  // Redirect if already verified
  useEffect(() => {
    if (user && user.verified) {
      setLocation('/product-access');
    }
  }, [user, setLocation]);
  
  // Handle profile submission
  const onSubmit = (data: ProfileFormValues) => {
    completeProfile(data, {
      onSuccess: () => {
        setLocation('/product-access');
      },
      onError: (error) => {
        console.error('Error completing profile:', error);
      },
    });
  };
  
  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="flex items-center justify-center">
          <Loader className="animate-spin h-10 w-10 text-electric-600 mr-3" />
          <span className="text-xl text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <Helmet>
        <title>Complete Your Profile | idontknowhelpme</title>
        <meta
          name="description"
          content="Complete your profile to get full access to the idontknowhelpme platform."
        />
      </Helmet>
      
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-100 text-electric-600 mb-6">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">One Last Step</h1>
          <p className="text-gray-600">Complete your profile to get full access</p>
        </div>
        
        {/* Card */}
        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Success message if account was created */}
            <div className="rounded-lg bg-green-50 p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-800">
                    Your account has been created successfully. Please complete your profile to continue.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="fullName"
                    type="text"
                    autoComplete="name"
                    {...register('fullName')}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-electric-500 focus:border-electric-500"
                    placeholder="John Smith"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (Optional)
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phoneNumber"
                    type="tel"
                    autoComplete="tel"
                    {...register('phoneNumber')}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-electric-500 focus:border-electric-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={completeProfileLoading}
              className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-electric-600 hover:bg-electric-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {completeProfileLoading ? (
                <>
                  <Loader className="animate-spin h-5 w-5 mr-2" />
                  Saving...
                </>
              ) : (
                'Complete Profile'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfilePage;