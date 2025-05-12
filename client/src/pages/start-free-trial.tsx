import React from 'react';
import { useLocation } from 'wouter';
import { Helmet } from 'react-helmet';
import { Rocket, Check, ArrowRight } from 'lucide-react';

const StartFreeTrialPage: React.FC = () => {
  const [, setLocation] = useLocation();
  
  // Redirect to sign up
  const handleStartFreeTrial = () => {
    setLocation('/signup');
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <Helmet>
        <title>Start Free Trial | idontknowhelpme</title>
        <meta
          name="description"
          content="Start your free trial of idontknowhelpme AI tools for content creation, lead generation, outreach campaigns, and market signal analysis."
        />
      </Helmet>
      
      <div className="w-full max-w-4xl py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-100 text-electric-600 mb-6">
            <Rocket className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Start Your Free Trial Today</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get full access to all our AI-powered tools during your trial period.
            No credit card required.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          {/* Gradient border */}
          <div className="h-1 w-full bg-gradient-to-r from-electric-500 via-purple-500 to-neon-500"></div>
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Trial Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What's included in your trial</h2>
                
                <ul className="space-y-4 mt-6">
                  {[
                    'Full access to all AI tools in our suite',
                    'Email support from our team',
                    'Up to 100 AI requests per day',
                    'Integration with up to 3 services',
                    'Access to product tutorials and guides',
                    'Export capabilities for all your data'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1 mr-3">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Trial CTA */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-3xl font-bold text-gray-900">Free</span>
                      <span className="ml-2 text-gray-600">for 14 days</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      All features included. After trial, choose a plan that fits your needs.
                    </p>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      No credit card required
                    </div>
                  </div>
                  
                  <button
                    onClick={handleStartFreeTrial}
                    className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-white bg-electric-600 hover:bg-electric-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-500 transition-all"
                  >
                    <span className="text-lg font-medium">Start Free Trial</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
                
                <div className="mt-6 text-sm text-gray-600 text-center">
                  Already have an account?{' '}
                  <a href="/login" className="text-electric-600 hover:text-electric-700 font-medium">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartFreeTrialPage;