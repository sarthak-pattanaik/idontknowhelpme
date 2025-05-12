import React from 'react';
import { Link } from 'wouter';
import { Helmet } from 'react-helmet';
import Button from '@/components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <Helmet>
        <title>Page Not Found | idkhelpme</title>
        <meta
          name="description"
          content="We couldn't find the page you were looking for. Return to the idkhelpme homepage."
        />
      </Helmet>
      
      <div className="max-w-md w-full text-center">
        <div className="w-24 h-24 bg-electric-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          We can't seem to find the page you're looking for. The page might have been removed, 
          renamed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button href="/" variant="primary">
            Go back home
          </Button>
          <Button href="/product-overview" variant="outline">
            Explore products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
