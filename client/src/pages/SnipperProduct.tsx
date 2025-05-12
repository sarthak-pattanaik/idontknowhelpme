import { motion } from "framer-motion";
import GradientText from "@/components/common/GradientText";
import CTASection from "@/components/home/CTASection";
import { useState, useEffect } from "react";

const SnipperProduct = () => {
  const [formData, setFormData] = useState({
    recipientName: "",
    recipientCompany: "",
    painPoint: "",
    tone: "friendly"
  });
  
  const [emailOutput, setEmailOutput] = useState("");
  const [callScriptOutput, setCallScriptOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    document.title = "Snipper - Outreach Automation | idontknowhelpme";
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.recipientName || !formData.recipientCompany || !formData.painPoint) {
      return;
    }
    
    setIsGenerating(true);
    setEmailOutput("");
    setCallScriptOutput("");
    
    // Simulate email generation
    const emailSample = `Subject: Solving ${formData.painPoint} at ${formData.recipientCompany}

Hi ${formData.recipientName},

I noticed that ${formData.recipientCompany} might be facing challenges with ${formData.painPoint}. Many of our clients had similar struggles before implementing our solution.

Our platform has helped companies like yours:
• Reduce time spent on this problem by 35%
• Increase team productivity by 28%
• Improve overall results by 40%

Would you be open to a quick 15-minute call next week to explore how we might be able to help?

Best regards,
Your Name
`;

    // Simulate call script generation
    const callScriptSample = `CALL SCRIPT FOR: ${formData.recipientName} at ${formData.recipientCompany}

Introduction:
"Hi [${formData.recipientName}], this is [Your Name] from idontknowhelpme. How are you doing today?"

Purpose:
"I'm reaching out because we've helped several companies in your industry overcome challenges with ${formData.painPoint}."

Value Proposition:
"Our AI platform has been shown to help teams reduce time spent on this issue by up to 35% while improving results."

Discovery Questions:
1. "Can you tell me a bit about how ${formData.painPoint} is currently affecting your team's performance?"
2. "What solutions have you tried so far to address this challenge?"
3. "How is this issue impacting your overall business goals?"

Next Steps:
"Based on what you've shared, I'd love to show you a quick demo of how our platform might help. Would you have 20 minutes this week for a more detailed conversation?"

Handling Objections:
If "no time": "I understand you're busy. Would it be better to schedule a brief 15-minute call next week instead?"
If "using another solution": "I'd be interested to hear what's working and what's not with your current solution. Many of our customers switched from similar tools for [specific benefit]."

Close:
"Great! I'll send a calendar invite right after this call. In the meantime, is there anyone else from your team who should join our discussion?"
`;
    
    // Simulate typing effect
    let emailDisplayedText = "";
    let emailIndex = 0;
    let callDisplayedText = "";
    let callIndex = 0;
    
    const emailTypingInterval = setInterval(() => {
      if (emailIndex < emailSample.length) {
        emailDisplayedText += emailSample[emailIndex];
        setEmailOutput(emailDisplayedText);
        emailIndex++;
      } else {
        clearInterval(emailTypingInterval);
        
        // Start generating call script after email is done
        const callTypingInterval = setInterval(() => {
          if (callIndex < callScriptSample.length) {
            callDisplayedText += callScriptSample[callIndex];
            setCallScriptOutput(callDisplayedText);
            callIndex++;
          } else {
            clearInterval(callTypingInterval);
            setIsGenerating(false);
          }
        }, 10);
      }
    }, 10);
  };
  
  return (
    <>
      <section className="pt-16 pb-12 bg-gradient-to-br from-accent-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              <GradientText className="from-accent-600 to-primary-600">Snipper</GradientText>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Autogenerate cold emails, follow-up sequences, and phone scripts with AI.
            </p>
            <div className="flex justify-center">
              <motion.div 
                className="h-16 w-16 bg-accent-100 rounded-full flex items-center justify-center"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2
                }}
              >
                <i className="ri-scissors-cut-line text-accent-600 text-2xl"></i>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Create Personalized Outreach That Converts</h2>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-6">Input Prospect Details</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Recipient Name</label>
                        <input 
                          type="text" 
                          name="recipientName"
                          value={formData.recipientName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent-500 focus:border-accent-500"
                          placeholder="e.g., John Smith"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                        <input 
                          type="text" 
                          name="recipientCompany"
                          value={formData.recipientCompany}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent-500 focus:border-accent-500"
                          placeholder="e.g., Acme Inc."
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Primary Pain Point</label>
                        <textarea 
                          name="painPoint"
                          value={formData.painPoint}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent-500 focus:border-accent-500 h-24"
                          placeholder="e.g., Spending too much time on manual lead qualification"
                        ></textarea>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Tone</label>
                        <select 
                          name="tone"
                          value={formData.tone}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-accent-500 focus:border-accent-500"
                        >
                          <option value="friendly">Friendly & Approachable</option>
                          <option value="professional">Professional & Formal</option>
                          <option value="direct">Direct & Concise</option>
                          <option value="enthusiastic">Enthusiastic & Energetic</option>
                        </select>
                      </div>
                    </div>
                    
                    <button 
                      type="submit"
                      className="mt-6 bg-accent-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-accent-700 transition flex items-center justify-center w-full disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isGenerating || !formData.recipientName || !formData.recipientCompany || !formData.painPoint}
                    >
                      {isGenerating ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Generating Content...
                        </>
                      ) : (
                        'Generate Personalized Outreach'
                      )}
                    </button>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-2">Email Template</h3>
                      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg h-64 overflow-auto whitespace-pre-wrap">
                        {emailOutput || "Your personalized email will appear here..."}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">Call Script</h3>
                      <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg h-64 overflow-auto whitespace-pre-wrap">
                        {callScriptOutput || "Your personalized call script will appear here..."}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-accent-100 flex items-center justify-center mb-4">
                  <i className="ri-mail-line text-accent-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Cold Emails</h3>
                <p className="text-gray-600">Generate personalized cold emails that resonate with your prospects' specific pain points and challenges.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-accent-100 flex items-center justify-center mb-4">
                  <i className="ri-chat-follow-up-line text-accent-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Follow-up Sequences</h3>
                <p className="text-gray-600">Create multi-touch follow-up sequences that maintain engagement without being repetitive.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-accent-100 flex items-center justify-center mb-4">
                  <i className="ri-phone-line text-accent-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Call Scripts</h3>
                <p className="text-gray-600">Generate dynamic call scripts with anticipated objection handling to help you navigate conversations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default SnipperProduct;
