import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

// Detect if we're in static mode (no backend)
const isStaticMode = window.location.hostname === 'localhost' && window.location.search.includes('static=true') || 
                     import.meta.env.VITE_STATIC_MODE === 'true' ||
                     process.env.NODE_ENV === 'production' && !window.location.hostname.includes('replit') || 
                     (window as any).IS_STATIC_BUILD === true;

// Type definitions
export interface User {
  id: number;
  email: string;
  fullName?: string;
  phoneNumber?: string;
  verified: boolean;
}

export interface LoginResponse {
  message: string;
  user: User;
  isNewUser: boolean;
  token?: string;
}

export interface RequestOtpResponse {
  message: string;
  email: string;
  otp?: string; // Only available in development mode
}

export interface CompleteProfileResponse {
  message: string;
  user: User;
}

export interface LogoutResponse {
  message: string;
}

export function useAuth() {
  const queryClient = useQueryClient();

  // Helper function to check if we have a token
  const getStoredToken = () => {
    return localStorage.getItem('authToken');
  };

  // Get the current user
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<User | null>({
    queryKey: ['/api/auth/user'],
    retry: false,
    enabled: !!getStoredToken(), // Only run the query if we have a token
  });

  // Request OTP mutation
  const {
    mutate: requestOtp,
    isPending: requestOtpLoading,
  } = useMutation({
    mutationFn: async (email: string) => {
      if (isStaticMode) {
        console.log('[Static Mode] Simulating OTP request for:', email);
        // Simulate API response in static mode
        return {
          message: 'OTP sent successfully',
          email: email,
          otp: '123456' // In static mode, we can use a fixed OTP
        } as RequestOtpResponse;
      }
      
      return apiRequest<RequestOtpResponse>('/api/auth/request-otp', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
  });

  // Verify OTP mutation (login/signup)
  const {
    mutate: verifyOtp,
    isPending: verifyOtpLoading,
  } = useMutation({
    mutationFn: async (data: { email: string; otp: string }) => {
      if (isStaticMode) {
        console.log('[Static Mode] Simulating OTP verification for:', data.email);
        // In static mode, accept any OTP input with our test OTP
        if (data.otp === '123456' || process.env.NODE_ENV === 'development') {
          // Simulate successful login
          return {
            message: 'Login successful',
            user: {
              id: 123,
              email: data.email,
              fullName: 'Demo User',
              verified: true
            },
            isNewUser: false,
            token: 'static-auth-token-123'
          } as LoginResponse;
        } else {
          throw new Error('Invalid OTP');
        }
      }
      
      return apiRequest<LoginResponse>('/api/auth/verify-otp', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: (response) => {
      console.log('OTP verification successful', response);
      
      // Store token in localStorage if available
      if (response.token) {
        localStorage.setItem('authToken', response.token);
        console.log('Auth token stored in localStorage');
      } else {
        console.warn('No auth token received from server');
      }
      
      // Update user in cache and refresh queries
      queryClient.setQueryData(['/api/auth/user'], response.user);
      queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] });
    },
  });

  // Complete profile mutation
  const {
    mutate: completeProfile,
    isPending: completeProfileLoading,
  } = useMutation({
    mutationFn: async (data: { fullName: string; phoneNumber?: string }) => {
      if (isStaticMode) {
        console.log('[Static Mode] Simulating profile completion:', data);
        // Simulate successful profile update
        return {
          message: 'Profile updated successfully',
          user: {
            id: 123,
            email: 'demo@example.com',
            fullName: data.fullName,
            phoneNumber: data.phoneNumber,
            verified: true
          }
        } as CompleteProfileResponse;
      }
      
      return apiRequest<CompleteProfileResponse>('/api/auth/complete-profile', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: (response) => {
      queryClient.setQueryData(['/api/auth/user'], response.user);
      queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] });
    },
  });

  // Logout mutation
  const {
    mutate: logout,
    isPending: logoutLoading,
  } = useMutation({
    mutationFn: async () => {
      if (isStaticMode) {
        console.log('[Static Mode] Simulating logout');
        return { message: 'Logged out successfully' } as LogoutResponse;
      }
      
      return apiRequest<LogoutResponse>('/api/auth/logout', {
        method: 'POST',
      });
    },
    onSuccess: () => {
      // Clear auth token from localStorage
      localStorage.removeItem('authToken');
      
      // Clear user data from cache
      queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] });
      queryClient.setQueryData(['/api/auth/user'], null);
      
      if (isStaticMode) {
        console.log('[Static Mode] Cleared auth state');
      }
    },
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!getStoredToken(),
    error,
    
    // Auth actions with loading states
    requestOtp,
    requestOtpLoading,
    
    verifyOtp,
    verifyOtpLoading,
    
    completeProfile,
    completeProfileLoading,
    
    logout,
    logoutLoading,
  };
}