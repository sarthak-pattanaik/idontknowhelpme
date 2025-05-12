import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

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
      return apiRequest<LoginResponse>('/api/auth/verify-otp', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: (response) => {
      // Store token in localStorage if available
      if (response.token) {
        localStorage.setItem('authToken', response.token);
      }
      queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] });
    },
  });

  // Complete profile mutation
  const {
    mutate: completeProfile,
    isPending: completeProfileLoading,
  } = useMutation({
    mutationFn: async (data: { fullName: string; phoneNumber?: string }) => {
      return apiRequest<CompleteProfileResponse>('/api/auth/complete-profile', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] });
    },
  });

  // Logout mutation
  const {
    mutate: logout,
    isPending: logoutLoading,
  } = useMutation({
    mutationFn: async () => {
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