import React from 'react';
import { motion } from 'framer-motion';

const WorkflowSection: React.FC = () => {
  const funnelStages = [
    {
      id: 'awareness',
      label: 'Top of Funnel: Awareness',
      product: 'Homemaker',
      description: 'Create compelling content that attracts and engages your target audience',
      gradient: 'from-electric-500 to-neon-500',
      productPosition: 'right',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 'consideration',
      label: 'Middle of Funnel: Consideration',
      product: 'Intelligence',
      description: 'Identify and qualify leads most likely to convert using AI-powered analysis',
      gradient: 'from-neon-500 to-purple-500',
      productPosition: 'left',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 'decision',
      label: 'Bottom of Funnel: Decision',
      product: 'Sniper',
      description: 'Convert prospects with personalized outreach at scale',
      gradient: 'from-electric-500 to-neon-500',
      productPosition: 'right',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'retention',
      label: 'Retention & Growth',
      product: 'Signals',
      description: 'Monitor buying signals to identify growth opportunities and reduce churn',
      gradient: 'from-neon-500 to-purple-500',
      productPosition: 'left',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
            className="text-electric-600 font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            COMPLETE SOLUTION
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your Complete GTM Funnel
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our products work together to optimize every stage of your go-to-market strategy
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-electric-500 via-neon-500 to-purple-500 transform -translate-x-1/2 z-0"></div>

          {/* Funnel stages */}
          <div className="relative z-10 space-y-16">
            {funnelStages.map((stage, index) => (
              <FunnelStage 
                key={stage.id} 
                stage={stage} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface FunnelStageProps {
  stage: {
    id: string;
    label: string;
    product: string;
    description: string;
    gradient: string;
    productPosition: 'left' | 'right';
    icon: React.ReactNode;
  };
  index: number;
}

const FunnelStage: React.FC<FunnelStageProps> = ({ stage, index }) => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Stage node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stage.gradient} flex items-center justify-center shadow-lg`}>
          <div className="text-white">
            {stage.icon}
          </div>
        </div>
      </div>

      {/* Content container with responsive layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        {/* Product name - positioned left or right based on stage */}
        <div className={`${stage.productPosition === 'left' ? 'md:order-first' : 'md:order-last md:text-right'} md:col-span-1`}>
          <div className={`inline-block px-6 py-3 rounded-full bg-white shadow-md border border-gray-50 text-lg font-bold ${
            stage.product === 'Homemaker' ? 'text-electric-500' : 
            stage.product === 'Intelligence' ? 'text-purple-500' : 
            stage.product === 'Snipper' ? 'text-neon-600' : 
            'text-gray-700'
          }`}>
            {stage.product}
          </div>
        </div>

        {/* Stage information */}
        <div className="md:col-span-2 bg-white px-6 py-5 rounded-xl shadow-md border border-gray-50">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{stage.label}</h3>
          <p className="text-gray-600">{stage.description}</p>
        </div>
      </div>

      {/* Funnel shape - different for each stage */}
      <div className={`absolute ${
        index === 0 ? 'top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-electric-500 to-transparent' :
        index === funnelStages.length - 1 ? 'bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent' :
        'hidden'
      }`}>
      </div>
    </motion.div>
  );
};

export default WorkflowSection;