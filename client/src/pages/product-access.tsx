import React, { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';
import { Loader, CheckCircle, Settings, Cpu, Zap, BarChart3 } from 'lucide-react';
import Button from '@/components/ui/Button';

const ProductAccessPage: React.FC = () => {
  const { user, isLoading, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation('/login');
    }
  }, [isLoading, isAuthenticated, setLocation]);

  const products = [
    {
      id: 'homemaker',
      name: 'Homemaker',
      description: 'AI-powered content generation for marketing teams',
      icon: <Settings className="h-6 w-6 text-electric-500" />,
      color: 'bg-electric-50 border-electric-100',
      textColor: 'text-electric-600',
      link: '/product/homemaker',
    },
    {
      id: 'intelligence',
      name: 'Intelligence',
      description: 'Lead scoring & enrichment using advanced AI models',
      icon: <Cpu className="h-6 w-6 text-purple-500" />,
      color: 'bg-purple-50 border-purple-100',
      textColor: 'text-purple-600',
      link: '/product/intelligence',
    },
    {
      id: 'sniper',
      name: 'Sniper',
      description: 'AI-powered outreach and conversation helper',
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      color: 'bg-amber-50 border-amber-100',
      textColor: 'text-amber-600',
      link: '/product/sniper',
    },
    {
      id: 'signals',
      name: 'Signals',
      description: 'Buyer intent tracking and engagement analytics',
      icon: <BarChart3 className="h-6 w-6 text-green-500" />,
      color: 'bg-green-50 border-green-100',
      textColor: 'text-green-600',
      link: '/product/signals',
    },
  ];

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="flex items-center justify-center">
          <Loader className="animate-spin h-10 w-10 text-electric-600 mr-3" />
          <span className="text-xl text-gray-600">Loading your dashboard...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Your Products | idontknowhelpme</title>
        <meta
          name="description"
          content="Access your idontknowhelpme AI-powered tools and manage your subscription."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        {/* Welcome section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-100 text-electric-600 mb-6">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome{user?.fullName ? `, ${user.fullName.split(' ')[0]}` : ''}!
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            You now have access to the idontknowhelpme suite of AI tools. 
            Select a product below to get started.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className={`p-3 rounded-lg ${product.color} mr-4`}>
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <Button 
                      href={product.link}
                      variant="outline" 
                      size="sm"
                      className={`border ${product.textColor}`}
                    >
                      Access {product.name}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Account Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Account</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-1">Email</p>
              <p className="text-gray-900">{user?.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Name</p>
              <p className="text-gray-900">{user?.fullName || 'Not provided'}</p>
            </div>
            {user?.phoneNumber && (
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone Number</p>
                <p className="text-gray-900">{user.phoneNumber}</p>
              </div>
            )}
          </div>
        </div>

        {/* Need Help */}
        <div className="bg-gradient-to-r from-electric-50 to-purple-50 rounded-xl p-6 border border-electric-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Need help getting started?
              </h3>
              <p className="text-gray-600">
                Our team is available to help you make the most of our AI tools.
              </p>
            </div>
            <Button href="/contact" variant="primary">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAccessPage;