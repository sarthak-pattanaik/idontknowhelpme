import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

// Helper function to get the base API URL
const getApiBaseUrl = () => {
  // Use the environment variable if available (for production)
  return import.meta.env.VITE_API_URL || '';
};

export async function apiRequest<T>(
  url: string, 
  options?: RequestInit
): Promise<T> {
  // Get auth token from localStorage
  const authToken = localStorage.getItem('authToken');
  
  // Add token to headers if available
  const headers = {
    ...options?.headers,
    ...(authToken && { 'Authorization': `Bearer ${authToken}` }),
  };

  // Debug log for auth requests
  if (url.includes('/api/auth/')) {
    console.log(`Making auth request to ${url}`, { 
      hasToken: !!authToken, 
      method: options?.method || 'GET' 
    });
  }

  // Construct full URL with base URL if it's an API call and has a base URL configured
  const apiBaseUrl = getApiBaseUrl();
  const fullUrl = url.startsWith('/api/') && apiBaseUrl 
    ? `${apiBaseUrl}${url}` 
    : url;

  const res = await fetch(fullUrl, {
    ...options,
    headers,
    credentials: 'include',
  });

  // Log response status for debugging
  if (url.includes('/api/auth/')) {
    console.log(`Response from ${url}:`, { 
      status: res.status, 
      statusText: res.statusText 
    });
  }

  await throwIfResNotOk(res);
  const data = await res.json();
  
  // Log successful auth responses
  if (url.includes('/api/auth/') && res.ok) {
    console.log(`Successful response data from ${url}:`, data);
  }
  
  return data;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const url = queryKey[0] as string;
    
    // Get auth token from localStorage
    const authToken = localStorage.getItem('authToken');
    
    // Add token to headers if available
    const headers: HeadersInit = {
      ...(authToken && { 'Authorization': `Bearer ${authToken}` }),
    };
    
    // Debug log for auth requests
    if (url.includes('/api/auth/')) {
      console.log(`[Query] Fetching ${url}`, { 
        hasToken: !!authToken
      });
    }
    
    // Construct full URL with base URL if it's an API call and has a base URL configured
    const apiBaseUrl = getApiBaseUrl();
    const fullUrl = url.startsWith('/api/') && apiBaseUrl 
      ? `${apiBaseUrl}${url}` 
      : url;
      
    const res = await fetch(fullUrl, {
      headers,
      credentials: "include",
    });
    
    // Log unauthorized responses
    if (res.status === 401) {
      console.warn(`[Query] Unauthorized access to ${url}`);
      if (unauthorizedBehavior === "returnNull") {
        return null;
      }
    }
    
    // Log response status for auth endpoints
    if (url.includes('/api/auth/')) {
      console.log(`[Query] Response from ${url}:`, { 
        status: res.status, 
        statusText: res.statusText 
      });
    }

    await throwIfResNotOk(res);
    const data = await res.json();
    
    return data;
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "returnNull" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000, // 1 minute
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
