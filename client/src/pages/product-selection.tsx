import React from 'react';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';
import {
  Cpu,
  Calendar,
  MessageSquare,
  BarChart2,
  ArrowRight,
  LogOut
} from 'lucide-react';

// Product Selection Page - Shown after login/signup
const ProductSelectionPage: React.FC = () => {
  const [, setLocation] = useLocation();

  const handleLogout = () => {
    // Clear auth token and redirect to home
    localStorage.removeItem('authToken');
    setLocation('/');
  };

  // Product card data
  const products = [
    {
      id: 'homemaker',
      name: 'Homemaker',
      description: 'AI-powered content creation and scheduling platform',
      icon: <Calendar className="h-10 w-10 text-electric-600" />,
      color: 'bg-electric-50 border-electric-200',
      textColor: 'text-electric-700',
      buttonColor: 'bg-electric-600 hover:bg-electric-700',
      route: '/app/homemaker'
    },
    {
      id: 'intelligence',
      name: 'Intelligence',
      description: 'Lead scoring and customer data enrichment',
      icon: <Cpu className="h-10 w-10 text-purple-600" />,
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-700',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      route: '/app/intelligence'
    },
    {
      id: 'snipper',
      name: 'Snipper',
      description: 'AI-powered outreach and messaging platform',
      icon: <MessageSquare className="h-10 w-10 text-green-600" />,
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-700',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      route: '/app/snipper'
    },
    {
      id: 'signals',
      name: 'Signals',
      description: 'Buyer intent tracking and analytics',
      icon: <BarChart2 className="h-10 w-10 text-orange-600" />,
      color: 'bg-orange-50 border-orange-200',
      textColor: 'text-orange-700',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      route: '/app/signals'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Select a Product | idkhelpme</title>
        <meta name="description" content="Choose which idkhelpme product you want to use." />
      </Helmet>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Welcome to <span className="text-electric-600">idkhelpme</span>
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Select a product to get started
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`rounded-lg shadow-sm border ${product.color} overflow-hidden transition-all hover:shadow-md`}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4 p-3 rounded-full bg-white border border-gray-100 shadow-sm">
                    {product.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                    <p className={`text-sm ${product.textColor}`}>{product.description}</p>
                  </div>
                </div>
                
                <div className="mt-4 flex-grow flex flex-col justify-end">
                  <button
                    onClick={() => setLocation(product.route)}
                    className={`w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${product.buttonColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-500 mt-3`}
                  >
                    Launch {product.name}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-500"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSelectionPage;