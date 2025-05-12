import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

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

  const res = await fetch(url, {
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
    
    const res = await fetch(url, {
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
