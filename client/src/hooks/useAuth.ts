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

export function useAuth() {
  const queryClient = useQueryClient();

  // Get the current user
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['/api/auth/user'],
    retry: false,
  });

  // Request OTP mutation
  const {
    mutate: requestOtp,
    isPending: requestOtpLoading,
  } = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest<RequestOtpResponse>('/api/auth/request-otp', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    },
  });

  // Verify OTP mutation (login/signup)
  const {
    mutate: verifyOtp,
    isPending: verifyOtpLoading,
  } = useMutation({
    mutationFn: async (data: { email: string; otp: string }) => {
      const response = await apiRequest<LoginResponse>('/api/auth/verify-otp', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] });
    },
  });

  // Complete profile mutation
  const {
    mutate: completeProfile,
    isPending: completeProfileLoading,
  } = useMutation({
    mutationFn: async (data: { fullName: string; phoneNumber?: string }) => {
      const response = await apiRequest<CompleteProfileResponse>('/api/auth/complete-profile', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
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
      const response = await apiRequest<{ message: string }>('/api/auth/logout', {
        method: 'POST',
      });
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/auth/user'] });
      queryClient.setQueryData(['/api/auth/user'], null);
    },
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
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