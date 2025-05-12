import React from 'react';
import { Helmet } from 'react-helmet';
import { Cpu, ArrowLeft } from 'lucide-react';
import { useLocation } from 'wouter';

const IntelligenceApp: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Intelligence App | idkhelpme</title>
        <meta
          name="description"
          content="Use Intelligence for lead scoring and customer data enrichment"
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
            <div className="p-2 bg-purple-100 rounded-full">
              <Cpu className="h-6 w-6 text-purple-600" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Intelligence</h1>
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
            <div className="mx-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <Cpu className="h-10 w-10 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Intelligence App</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              This is a placeholder for the Intelligence app interface. In a real implementation, this would contain lead scoring and customer data enrichment tools.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <h3 className="text-lg font-medium text-purple-700 mb-3">Lead Scoring</h3>
                <p className="text-gray-600">Automatically score and prioritize your leads based on their likelihood to convert.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                <h3 className="text-lg font-medium text-purple-700 mb-3">Data Enrichment</h3>
                <p className="text-gray-600">Automatically enrich your customer data with additional information from multiple sources.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IntelligenceApp;