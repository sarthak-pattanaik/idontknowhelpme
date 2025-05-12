import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

// Types
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

// Authentication hook
export function useAuth() {
  const queryClient = useQueryClient();
  
  // Get current user
  const { data: user, isLoading, error, isError } = useQuery({
    queryKey: ['/api/auth/me'],
    retry: false,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  // Request OTP
  const requestOtpMutation = useMutation({
    mutationFn: async (email: string): Promise<RequestOtpResponse> => {
      return apiRequest('/api/auth/request-otp', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
  });
  
  // Verify OTP
  const verifyOtpMutation = useMutation({
    mutationFn: async ({ email, otp }: { email: string; otp: string }): Promise<LoginResponse> => {
      return apiRequest('/api/auth/verify-otp', {
        method: 'POST',
        body: JSON.stringify({ email, otp }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/auth/me'] });
    },
  });
  
  // Complete profile
  const completeProfileMutation = useMutation({
    mutationFn: async ({ fullName, phoneNumber }: { fullName: string; phoneNumber?: string }): Promise<CompleteProfileResponse> => {
      return apiRequest('/api/auth/complete-profile', {
        method: 'POST',
        body: JSON.stringify({ fullName, phoneNumber }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/auth/me'] });
    },
  });
  
  // Logout
  const logoutMutation = useMutation({
    mutationFn: async (): Promise<{ message: string }> => {
      return apiRequest('/api/auth/logout', {
        method: 'POST',
      });
    },
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ['/api/auth/me'] });
    },
  });
  
  return {
    user: user?.user,
    isLoading,
    isError,
    error,
    isAuthenticated: !!user?.user,
    requestOtp: requestOtpMutation.mutate,
    requestOtpLoading: requestOtpMutation.isPending,
    requestOtpError: requestOtpMutation.error,
    verifyOtp: verifyOtpMutation.mutate,
    verifyOtpLoading: verifyOtpMutation.isPending,
    verifyOtpError: verifyOtpMutation.error,
    completeProfile: completeProfileMutation.mutate,
    completeProfileLoading: completeProfileMutation.isPending,
    completeProfileError: completeProfileMutation.error,
    logout: logoutMutation.mutate,
    logoutLoading: logoutMutation.isPending,
  };
}