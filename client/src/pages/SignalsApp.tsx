import React from 'react';
import { Helmet } from 'react-helmet';
import { BarChart2, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

const SignalsApp: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Signals App | idkhelpme</title>
        <meta
          name="description"
          content="Use Signals for buyer intent tracking and analytics"
        />
      </Helmet>

      <header className="bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setLocation('/product-selection')}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-orange-100 rounded-full">
              <BarChart2 className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Signals</h1>
          </div>
        </div>
        <div>
          <button 
            onClick={() => {
              localStorage.removeItem('authToken');
              setLocation('/login');
            }}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
            <div className="mx-auto w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <BarChart2 className="h-10 w-10 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Signals App</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              This is a placeholder for the Signals app interface. In a real implementation, this would contain buyer intent tracking and analytics tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <h3 className="text-lg font-medium text-orange-700 mb-3">Intent Dashboard</h3>
                <p className="text-gray-600">View real-time signals of buyer intent across your website and properties.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <h3 className="text-lg font-medium text-orange-700 mb-3">Opportunity Alerts</h3>
                <p className="text-gray-600">Receive alerts when high-intent activities are detected from potential buyers.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignalsApp;