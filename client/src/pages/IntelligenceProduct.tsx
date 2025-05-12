import { motion } from "framer-motion";
import GradientText from "@/components/common/GradientText";
import CTASection from "@/components/home/CTASection";
import { useState, useEffect } from "react";

const IntelligenceProduct = () => {
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    document.title = "Intelligence - Lead Scoring | idontknowhelpme";
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCsvFile(e.target.files[0]);
      setShowResults(false);
    }
  };

  const handleUpload = () => {
    if (!csvFile) return;
    
    setIsProcessing(true);
    setProcessingProgress(0);
    
    // Simulate processing
    const interval = setInterval(() => {
      setProcessingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setShowResults(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <>
      <section className="pt-16 pb-12 bg-gradient-to-br from-secondary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              <GradientText className="from-secondary-600 to-accent-600">Intelligence</GradientText>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Turn raw data into enriched, ranked, and qualified leads.
            </p>
            <div className="flex justify-center">
              <motion.div 
                className="h-16 w-16 bg-secondary-100 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2
                }}
              >
                <i className="ri-bar-chart-box-line text-secondary-600 text-2xl"></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Turn Your Lead List Into Sales Opportunities</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Stop wasting time on unqualified leads. Our AI analyzes and enriches your lead data, 
                  giving you complete profiles and scoring leads based on your ideal customer profile.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="ri-check-line text-secondary-600 mt-1 mr-3 text-xl"></i>
                    <span className="text-gray-700">Enrich lead data with company size, industry, technology stack, and more</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-secondary-600 mt-1 mr-3 text-xl"></i>
                    <span className="text-gray-700">Score leads from 1-100 based on your ideal customer profile</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-secondary-600 mt-1 mr-3 text-xl"></i>
                    <span className="text-gray-700">Export enriched data directly to your CRM</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6">Upload Your Lead List</h3>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">Upload a CSV file with your leads to see Intelligence in action.</p>
                  <label className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-secondary-400 transition">
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".csv"
                      onChange={handleFileChange}
                    />
                    <i className="ri-upload-cloud-line text-4xl text-gray-400 mb-2"></i>
                    <p className="text-gray-700">
                      {csvFile ? csvFile.name : 'Drag and drop your CSV file here or click to browse'}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      CSV file with columns for name, email, and company
                    </p>
                  </label>
                </div>
                <button 
                  className="w-full py-3 px-4 bg-secondary-600 text-white font-medium rounded-lg hover:bg-secondary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!csvFile || isProcessing}
                  onClick={handleUpload}
                >
                  {isProcessing ? 'Processing...' : 'Analyze Leads'}
                </button>
                
                {isProcessing && (
                  <div className="mt-4">
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-secondary-600 rounded-full" 
                        style={{ width: `${processingProgress}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 text-center">{processingProgress}% complete</p>
                  </div>
                )}
              </div>
            </div>
            
            {showResults && (
              <motion.div 
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6">Enriched Lead Results</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Industry</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Match Score</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">John Smith</td>
                        <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                        <td className="px-6 py-4 whitespace-nowrap">Acme Inc.</td>
                        <td className="px-6 py-4 whitespace-nowrap">SaaS</td>
                        <td className="px-6 py-4 whitespace-nowrap">50-100</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">92</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Sarah Johnson</td>
                        <td className="px-6 py-4 whitespace-nowrap">sarah@company.co</td>
                        <td className="px-6 py-4 whitespace-nowrap">Company Co.</td>
                        <td className="px-6 py-4 whitespace-nowrap">E-commerce</td>
                        <td className="px-6 py-4 whitespace-nowrap">200-500</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">78</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Michael Chen</td>
                        <td className="px-6 py-4 whitespace-nowrap">michael@tech.io</td>
                        <td className="px-6 py-4 whitespace-nowrap">Tech IO</td>
                        <td className="px-6 py-4 whitespace-nowrap">FinTech</td>
                        <td className="px-6 py-4 whitespace-nowrap">100-200</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">95</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 flex justify-end space-x-4">
                  <button className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                    Export CSV
                  </button>
                  <button className="py-2 px-4 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition">
                    Send to CRM
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center mb-4">
                  <i className="ri-database-2-line text-secondary-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Data Enrichment</h3>
                <p className="text-gray-600">Add 50+ data points to each lead including company size, funding, technologies used, and more.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center mb-4">
                  <i className="ri-filter-3-line text-secondary-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">ICP Match Scoring</h3>
                <p className="text-gray-600">Define your ideal customer profile and let our AI score leads based on how well they match.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center mb-4">
                  <i className="ri-exchange-line text-secondary-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">CRM Export</h3>
                <p className="text-gray-600">Seamlessly export enriched leads to Salesforce, HubSpot, Pipedrive, and other popular CRMs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default IntelligenceProduct;
