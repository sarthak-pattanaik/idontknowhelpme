import React, { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';
import { Loader, Rocket, AlertTriangle, LogOut } from 'lucide-react';

const ProductAccessPage: React.FC = () => {
  const { user, isLoading, isAuthenticated, logout } = useAuth();
  const [, setLocation] = useLocation();
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation('/login');
    }
  }, [isLoading, isAuthenticated, setLocation]);
  
  // Handle logout
  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        setLocation('/');
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
        <title>Product Access | idontknowhelpme</title>
        <meta
          name="description"
          content="Access the idontknowhelpme AI platform."
        />
      </Helmet>
      
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome, {user?.fullName || user?.email.split('@')[0]}!
          </h1>
          <p className="text-xl text-gray-600">
            You're now logged into the idontknowhelpme platform.
          </p>
        </div>
        
        {/* Coming Soon Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="h-2 w-full bg-gradient-to-r from-electric-500 via-purple-500 to-neon-500"></div>
          
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
              <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-100 text-purple-600">
                  <Rocket className="h-10 w-10" />
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center justify-center md:justify-start mb-3">
                  <div className="bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-xs font-medium inline-flex items-center">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Coming Soon
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  The full platform is coming soon. Stay tuned.
                </h2>
                
                <p className="text-gray-600 mb-6 max-w-2xl">
                  Thank you for signing up! We're working hard to bring you the best AI-powered tools for GTM teams. 
                  You'll be the first to know when our platform launches. In the meantime, check your email for updates and exclusive early access opportunities.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-electric-600 hover:bg-electric-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-500 shadow-sm"
                  >
                    Return to Homepage
                  </a>
                  
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-base font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-500 shadow-sm"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAccessPage;