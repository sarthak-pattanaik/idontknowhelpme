import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 via-white to-purple-500/10 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated circles */}
        <motion.div
          className="absolute top-10 right-[10%] w-64 h-64 rounded-full bg-electric-500/10 blur-3xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', delay: 1 }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Ready to Outperform Your Competition?
              </motion.h2>
              
              <motion.p
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Join the elite businesses using idkhelpme to crush their revenue targets and leave competitors wondering what happened.
              </motion.p>
            </div>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button
                variant="primary"
                size="lg"
                href="/start-free-trial"
                fullWidth
                iconRight={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                }
              >
                Start Dominating Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/demo"
                fullWidth
              >
                See Results in Action
              </Button>
            </motion.div>
            
            <motion.div
              className="mt-8 text-center text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p>Start instantly. No credit card required. See measurable results in just 14 days or walk away.</p>
            </motion.div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Military-Grade Security",
                description: "Bank-level protection with SOC 2 Type II compliance ensuring your data is more secure than Fort Knox.",
                icon: (
                  <svg className="w-6 h-6 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Relentless 24/7 Support",
                description: "Our elite team of AI experts works around the clock to ensure you're always crushing your targets.",
                icon: (
                  <svg className="w-6 h-6 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                title: "Bulletproof Reliability",
                description: "With 99.99% guaranteed uptime, our platform is more reliable than sunrise—your competitive edge never sleeps.",
                icon: (
                  <svg className="w-6 h-6 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="mb-3 p-3 bg-electric-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;