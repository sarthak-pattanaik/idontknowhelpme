import { motion } from "framer-motion";
import GradientText from "@/components/common/GradientText";
import CTASection from "@/components/home/CTASection";
import { useState, useEffect } from "react";

const HomemakerProduct = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    document.title = "Homemaker - Content AI | idontknowhelpme";
  }, []);

  const handleGenerate = () => {
    if (input.trim() === "") return;
    
    setIsGenerating(true);
    setOutput("");
    
    // Simulate AI generation
    const sampleOutput = "# How to Optimize Your SaaS Marketing Strategy\n\nIn today's competitive landscape, SaaS companies need to differentiate themselves through strategic marketing efforts. Here are 5 key strategies to consider:\n\n## 1. Focus on Value-Based Messaging\nHighlight the tangible outcomes and ROI your solution provides rather than just listing features.\n\n## 2. Implement Product-Led Growth\nAllow users to experience your product through free trials and freemium models to reduce friction in the buyer's journey.\n\n## 3. Build a Community Around Your Product\nCreate spaces for users to connect, share best practices, and provide feedback.";
    
    let displayedText = "";
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex < sampleOutput.length) {
        displayedText += sampleOutput[currentIndex];
        setOutput(displayedText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsGenerating(false);
      }
    }, 20);
  };

  return (
    <>
      <section className="pt-16 pb-12 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              <GradientText className="from-primary-600 to-accent-600">Homemaker</GradientText>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Create high-quality content instantly for blogs, landing pages, social media, and more.
            </p>
            <div className="flex justify-center">
              <motion.div 
                className="h-16 w-16 bg-primary-100 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2
                }}
              >
                <i className="ri-home-4-line text-primary-600 text-2xl"></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How Homemaker Can Help You</h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <i className="ri-article-line text-primary-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2">Blog Posts</h3>
                <p className="text-gray-600">Generate complete blog posts with SEO-optimized structure and engaging content.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <i className="ri-layout-4-line text-primary-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2">Landing Pages</h3>
                <p className="text-gray-600">Create compelling landing page copy that converts visitors into customers.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <i className="ri-instagram-line text-primary-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2">Social Media</h3>
                <p className="text-gray-600">Craft engaging posts and captions for any social platform that resonate with your audience.</p>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <i className="ri-mail-line text-primary-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-bold mb-2">Email Content</h3>
                <p className="text-gray-600">Write newsletters and email campaigns that drive engagement and conversions.</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Try It Yourself</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    What would you like to create?
                  </label>
                  <textarea 
                    className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                    placeholder="e.g., Write a blog post about SaaS marketing strategies."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  ></textarea>
                  <button 
                    className="mt-4 bg-primary-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-primary-700 transition flex items-center justify-center w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleGenerate}
                    disabled={input.trim() === "" || isGenerating}
                  >
                    {isGenerating ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating...
                      </>
                    ) : (
                      'Generate Content'
                    )}
                  </button>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Generated Content:
                  </label>
                  <div className="w-full h-48 p-4 border border-gray-300 rounded-lg bg-white overflow-auto whitespace-pre-wrap">
                    {output || "Your generated content will appear here..."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <i className="ri-speed-line text-green-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Speed</h3>
                <p className="text-gray-600">Generate high-quality content in seconds, not hours. Save valuable time for other high-impact activities.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <i className="ri-check-double-line text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Accuracy</h3>
                <p className="text-gray-600">Our AI is trained on the latest marketing best practices to ensure your content is effective and accurate.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <i className="ri-equalizer-line text-purple-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Tone Customization</h3>
                <p className="text-gray-600">Adjust the tone to match your brand voice - professional, casual, enthusiastic, or anything in between.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default HomemakerProduct;
