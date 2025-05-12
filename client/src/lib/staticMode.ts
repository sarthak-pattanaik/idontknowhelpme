/**
 * Utility to detect if the application is running in static mode
 * Static mode means the application is running without a backend
 * and uses mock data for API responses
 */

export const isStaticMode = (): boolean => {
  return (
    // URL parameter for local testing
    (window.location.hostname === 'localhost' && 
     window.location.search.includes('static=true')) ||
    
    // Environment variable set during build
    import.meta.env.VITE_STATIC_MODE === 'true' ||
    
    // Production build not on Replit
    (process.env.NODE_ENV === 'production' && 
     !window.location.hostname.includes('replit')) ||
    
    // Static build indicator from HTML
    (window as any).IS_STATIC_BUILD === true
  );
};

// Export information about the static mode
export const staticModeInfo = {
  name: 'idkhelpme Static',
  version: '1.0.0',
  buildDate: new Date().toISOString(),
  description: 'Static version of idkhelpme SaaS platform',
  features: [
    'Homepage and product pages',
    'Simulated authentication',
    'Mock product interfaces',
    'No database or backend required'
  ]
};

export default isStaticMode;