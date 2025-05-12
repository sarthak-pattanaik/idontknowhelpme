import { motion } from "framer-motion";
import GradientText from "@/components/common/GradientText";
import CTASection from "@/components/home/CTASection";
import { useState, useEffect } from "react";

const SignalsProduct = () => {
  const [showDemoNotification, setShowDemoNotification] = useState(false);

  useEffect(() => {
    document.title = "Signals - Buyer Intent Engine | idontknowhelpme";
    
    // Display demo notification after 3 seconds
    const timer = setTimeout(() => {
      setShowDemoNotification(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="pt-16 pb-12 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              <GradientText className="from-green-600 to-accent-600">Signals</GradientText>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Real-time activity tracking from LinkedIn, email opens, and site visits – surfaced directly in your inbox or CRM.
            </p>
            <div className="flex justify-center">
              <motion.div 
                className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2
                }}
              >
                <i className="ri-radar-line text-green-600 text-2xl"></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Know When Buyers Are Ready to Purchase</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Stop guessing when to reach out. Signals monitors prospect behavior across channels and alerts you when they're showing buying intent.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mt-1 mr-3 text-xl"></i>
                    <span className="text-gray-700">Get real-time alerts when prospects visit your website, open emails, or engage with your content</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mt-1 mr-3 text-xl"></i>
                    <span className="text-gray-700">Track prospect activity directly in your CRM with our native integrations</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-green-600 mt-1 mr-3 text-xl"></i>
                    <span className="text-gray-700">Prioritize outreach based on intent scoring and engagement metrics</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="bg-white rounded-xl shadow-xl p-6 relative z-10">
                  <div className="p-4 bg-gray-100 rounded-lg mb-4">
                    <div className="flex items-center mb-2">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <i className="ri-user-3-line text-green-600"></i>
                      </div>
                      <h3 className="font-bold">Dashboard</h3>
                    </div>
                    <div className="h-48 bg-white rounded-lg"></div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-bold mb-2">Recent Activity</h4>
                    <div className="space-y-3">
                      <div className="p-3 border border-gray-200 rounded-lg flex items-center">
                        <div className="h-8 w-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                          <i className="ri-mail-open-line text-amber-600"></i>
                        </div>
                        <div>
                          <p className="font-medium">John Smith opened your email</p>
                          <p className="text-sm text-gray-500">2 minutes ago</p>
                        </div>
                      </div>
                      
                      <div className="p-3 border border-gray-200 rounded-lg flex items-center">
                        <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <i className="ri-linkedin-box-line text-blue-600"></i>
                        </div>
                        <div>
                          <p className="font-medium">Sarah Johnson viewed your LinkedIn profile</p>
                          <p className="text-sm text-gray-500">15 minutes ago</p>
                        </div>
                      </div>
                      
                      <div className="p-3 border border-gray-200 rounded-lg flex items-center">
                        <div className="h-8 w-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                          <i className="ri-global-line text-primary-600"></i>
                        </div>
                        <div>
                          <p className="font-medium">Michael Chen visited your pricing page</p>
                          <p className="text-sm text-gray-500">34 minutes ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Demo notification */}
                {showDemoNotification && (
                  <motion.div 
                    className="absolute top-4 right-4 z-20 bg-white rounded-lg shadow-lg p-4 border-l-4 border-green-500 max-w-xs"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <i className="ri-radar-line text-green-500 text-xl"></i>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">New Intent Signal!</h3>
                        <div className="mt-1 text-sm text-gray-500">
                          <p>Alex Rivera from Enterprise Cloud viewed your case studies page 30 seconds ago.</p>
                        </div>
                        <div className="mt-2 flex space-x-3">
                          <button className="text-sm font-medium text-green-600 hover:text-green-500">
                            View Details
                          </button>
                          <button 
                            className="text-sm text-gray-500 hover:text-gray-400"
                            onClick={() => setShowDemoNotification(false)}
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-md mt-16">
              <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="h-16 w-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-code-line text-green-600 text-xl"></i>
                  </div>
                  <h4 className="font-bold mb-2">1. Simple Installation</h4>
                  <p className="text-gray-600 text-sm">Add a tracking pixel to your website and connect your email and CRM systems.</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-user-search-line text-green-600 text-xl"></i>
                  </div>
                  <h4 className="font-bold mb-2">2. Prospect Tracking</h4>
                  <p className="text-gray-600 text-sm">Monitor prospects across email, LinkedIn, and your website in real-time.</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-notification-3-line text-green-600 text-xl"></i>
                  </div>
                  <h4 className="font-bold mb-2">3. Instant Alerts</h4>
                  <p className="text-gray-600 text-sm">Receive notifications when prospects show buying intent signals.</p>
                </div>
                
                <div className="text-center">
                  <div className="h-16 w-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <i className="ri-mail-send-line text-green-600 text-xl"></i>
                  </div>
                  <h4 className="font-bold mb-2">4. Timely Outreach</h4>
                  <p className="text-gray-600 text-sm">Strike when the iron is hot with perfectly timed follow-ups.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Integration Options</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-mail-line text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Email Alerts</h3>
                <p className="text-gray-600">Receive real-time email notifications when prospects take key actions on your site or open your emails.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-database-2-line text-primary-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">CRM Overlays</h3>
                <p className="text-gray-600">View full engagement history and intent signals directly in Salesforce, HubSpot, or Pipedrive.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-linkedin-box-line text-indigo-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">LinkedIn Plugin</h3>
                <p className="text-gray-600">See engagement data and intent scores while browsing LinkedIn prospects.</p>
              </div>
            </div>
            
            <div className="mt-12">
              <button className="bg-green-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-green-700 transition">
                Request Early Access
              </button>
              <p className="text-sm text-gray-500 mt-2">Limited spots available for beta access</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default SignalsProduct;
