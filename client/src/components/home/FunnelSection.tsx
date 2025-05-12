import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Brain, Send, Activity } from 'lucide-react';
import Button from '@/components/ui/Button';

const FunnelSection: React.FC = () => {
  const funnelSteps = [
    {
      id: 'awareness',
      stage: 'Top of Funnel: Awareness',
      product: 'Homemaker',
      description: 'Create AI-powered content that attracts and engages your audience',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'electric',
      gradient: 'from-electric-500 to-electric-400',
      buttonVariant: 'primary',
      alignment: 'start',
    },
    {
      id: 'consideration',
      stage: 'Middle of Funnel: Consideration',
      product: 'Intelligence',
      description: 'Score and enrich leads to identify the most promising opportunities',
      icon: <Brain className="w-6 h-6" />,
      color: 'purple',
      gradient: 'from-purple-500 to-purple-400',
      buttonVariant: 'secondary',
      alignment: 'end',
    },
    {
      id: 'decision',
      stage: 'Bottom of Funnel: Decision',
      product: 'Snipper',
      description: 'Personalize your outreach to drive conversions',
      icon: <Send className="w-6 h-6" />,
      color: 'neon',
      gradient: 'from-neon-500 to-neon-400',
      buttonVariant: 'accent',
      alignment: 'start',
    },
    {
      id: 'retention',
      stage: 'Retention & Growth',
      product: 'Signals',
      description: 'Monitor market signals to reduce churn and identify upsell opportunities',
      icon: <Activity className="w-6 h-6" />,
      color: 'gray',
      gradient: 'from-gray-700 to-gray-600',
      buttonVariant: 'primary',
      alignment: 'end',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <motion.div
          className="absolute top-0 right-0 w-[40%] h-[40%] rounded-full bg-electric-500/10 blur-3xl"
          animate={{
            y: [0, 50, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', delay: 5 }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-neon-500/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', delay: 10 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.p 
            className="text-electric-600 font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            FULLY INTEGRATED
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
            Each product in our suite is designed to optimize a specific stage of your go-to-market journey
          </motion.p>
        </div>

        {/* Funnel visualization */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central funnel path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-electric-500 via-neon-500 to-purple-500 transform -translate-x-1/2 rounded-full"></div>
          
          <div className="space-y-20 md:space-y-36 relative">
            {funnelSteps.map((step, index) => (
              <FunnelStep 
                key={step.id}
                step={step}
                index={index}
                isLast={index === funnelSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface FunnelStepProps {
  step: {
    id: string;
    stage: string;
    product: string;
    description: string;
    icon: React.ReactNode;
    color: 'electric' | 'purple' | 'neon' | 'gray';
    gradient: string;
    buttonVariant: 'primary' | 'secondary' | 'accent';
    alignment: 'start' | 'end';
  };
  index: number;
  isLast: boolean;
}

const FunnelStep: React.FC<FunnelStepProps> = ({ step, index, isLast }) => {
  // Different width for each step to create funnel shape
  const widthClasses = [
    'w-[100%]', // Top of funnel (widest)
    'w-[90%]',  // Middle of funnel
    'w-[80%]',  // Bottom of funnel
    'w-[90%]',  // Retention (widens slightly)
  ];

  return (
    <div className="relative">
      {/* Connector dot */}
      <motion.div
        className={`absolute left-1/2 top-8 w-6 h-6 rounded-full bg-gradient-to-br ${step.gradient} transform -translate-x-1/2 z-20 shadow-lg`}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      >
        <div className="absolute inset-0.5 rounded-full bg-white flex items-center justify-center">
          <div className={`text-${step.color}-500`}>
            {step.icon}
          </div>
        </div>
      </motion.div>

      {/* Funnel step content */}
      <motion.div
        className={`mx-auto rounded-xl overflow-hidden shadow-lg ${widthClasses[index]}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      >
        <div className={`h-2 w-full bg-gradient-to-r ${step.gradient}`}></div>
        <div className="bg-white p-8">
          <div className={`flex flex-col ${step.alignment === 'start' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
            {/* Step description */}
            <div className="flex-1">
              <div className={`text-sm font-semibold mb-1 text-${step.color}-500 uppercase tracking-wider`}>
                {step.stage}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.product}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <Button
                variant={step.buttonVariant}
                size="sm"
                href={`/product/${step.id}`}
                iconRight={
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                }
              >
                Learn more
              </Button>
            </div>

            {/* Visual representation */}
            <div className={`w-full md:w-32 h-32 rounded-full flex items-center justify-center bg-${step.color}-50`}>
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-inner`}>
                <div className="text-white w-10 h-10">
                  {step.icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Arrow pointing down - except for last element */}
      {!isLast && (
        <motion.div
          className="absolute left-1/2 bottom-[-24px] transform -translate-x-1/2 text-gray-300"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      )}
    </div>
  );
};

export default FunnelSection;