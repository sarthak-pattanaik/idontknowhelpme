import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const Hero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] } },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-32 pb-20 md:pb-32">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Electric blue circle */}
        <motion.div
          className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full bg-electric-500 opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
        
        {/* Deep purple circle */}
        <motion.div
          className="absolute bottom-[10%] left-[5%] w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
        />
        
        {/* Neon accent */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-neon-500 opacity-20 blur-xl"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-6"
            variants={itemVariants}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-full py-1 px-4 border border-electric-100 shadow-sm">
              <span className="text-electric-600 font-medium text-sm inline-flex items-center">
                <span className="w-2 h-2 bg-electric-500 rounded-full mr-2"></span>
                Introducing idontknowhelpme 2.0
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6"
            variants={itemVariants}
          >
            AI that powers your 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-500 to-purple-500 mx-2">entire GTM</span> 
            strategy
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            The modern AI toolkit to enhance your content creation, lead generation, 
            outreach campaigns, and market signal analysis.
          </motion.p>

          {/* Feature badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            variants={itemVariants}
          >
            {['Advanced ML Models', 'Time-Saving Automation', 'Personalized Results', 'Actionable Insights'].map((feature, index) => (
              <span 
                key={index} 
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-800 border border-gray-200 shadow-sm"
              >
                <svg className="w-4 h-4 mr-1 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <Button
              variant="primary"
              size="xl"
              href="/signup"
              iconRight={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              }
            >
              Start free trial
            </Button>
            <Button
              variant="outline"
              size="xl"
              href="#products"
            >
              Explore platform
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero visual - Dashboard preview */}
        <motion.div
          className="mt-16 mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            {/* UI frame */}
            <div className="h-7 bg-gray-800 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="ml-4 bg-gray-700 rounded h-4 w-48"></div>
            </div>
            
            {/* Dashboard content frame */}
            <div className="bg-gray-50 h-[320px] sm:h-[400px] md:h-[460px] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full p-4 flex flex-col">
                <div className="bg-white w-full h-full rounded-lg shadow-sm p-5 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900">AI Campaign Dashboard</h3>
                      <p className="text-sm text-gray-500">Monitoring key metrics and performance</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-full bg-electric-500 flex items-center justify-center">
                        <span className="text-white font-medium text-sm">+</span>
                      </div>
                      <div className="h-8 w-20 bg-electric-100 rounded-md"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {[
                      { label: 'Content Generated', value: '243', color: 'bg-electric-100' },
                      { label: 'Leads Scored', value: '1,482', color: 'bg-purple-100' },
                      { label: 'Email Opens', value: '68.2%', color: 'bg-neon-100' },
                      { label: 'Buying Signals', value: '57', color: 'bg-gray-100' },
                    ].map((metric, idx) => (
                      <div key={idx} className={`${metric.color} rounded-lg p-3 flex flex-col justify-center`}>
                        <p className="text-sm text-gray-600 mb-1">{metric.label}</p>
                        <p className="text-xl font-bold text-gray-900">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex-grow bg-gray-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-full h-32 flex items-end justify-around px-6">
                        <div className="h-1/3 w-6 rounded-t-md bg-electric-300"></div>
                        <div className="h-2/3 w-6 rounded-t-md bg-electric-400"></div>
                        <div className="h-4/5 w-6 rounded-t-md bg-electric-500"></div>
                        <div className="h-full w-6 rounded-t-md bg-electric-600"></div>
                        <div className="h-3/4 w-6 rounded-t-md bg-electric-500"></div>
                        <div className="h-1/2 w-6 rounded-t-md bg-electric-400"></div>
                        <div className="h-2/5 w-6 rounded-t-md bg-electric-300"></div>
                      </div>
                      <div className="mt-4 text-gray-600 font-medium text-sm">Weekly Performance Trend</div>
                    </div>
                  </div>
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