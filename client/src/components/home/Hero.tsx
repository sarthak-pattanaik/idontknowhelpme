import { Link } from "wouter";
import GradientText from "@/components/common/GradientText";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block">AI that builds your pipeline.</span>
            <GradientText className="block">And momentum.</GradientText>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-10">
            The modern toolkit for content, leads, outreach, and signals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="#" 
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium px-8 py-4 rounded-xl text-lg hover:opacity-90 transition shadow-lg shadow-primary-500/20"
            >
              Start Free
            </Link>
            <Link 
              href="#products" 
              className="bg-white text-gray-800 font-medium px-8 py-4 rounded-xl text-lg border border-gray-200 hover:border-gray-300 transition shadow-sm"
            >
              Explore Platform
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="mt-16 sm:mt-24 max-w-5xl mx-auto rounded-2xl bg-white p-4 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="aspect-[16/9] rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center">
            <div className="p-8 text-center">
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 inline-flex items-center justify-center rounded-full p-3 mb-4">
                <i className="ri-rocket-2-fill text-white text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete GTM AI Platform</h2>
              <p className="text-gray-600 mb-4">Transform your sales and marketing operations with our AI-powered suite</p>
              <div className="w-full h-10 bg-gray-200 rounded-full relative overflow-hidden">
                <div className="absolute inset-0 h-full w-3/4 bg-gradient-to-r from-primary-600 to-accent-600 flex items-center px-4">
                  <span className="text-white text-sm font-medium">Automating your workflow...</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
