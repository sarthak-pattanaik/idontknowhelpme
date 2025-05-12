import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Brain, Send, Activity, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

const FunnelSection: React.FC = () => {
  const funnelSteps = [
    {
      id: 'homemaker',
      stage: 'Top of Funnel: Awareness',
      product: 'Homemaker',
      description: 'Dominate search results with AI content that outwits, outranks, and outconverts your competition in every channel',
      icon: <Lightbulb className="w-6 h-6" />,
      color: 'electric' as 'electric' | 'purple' | 'neon' | 'gray',
      gradient: 'from-electric-500 to-electric-400',
      buttonVariant: 'primary' as const,
      bgGradient: 'bg-gradient-to-br from-electric-500/20 via-electric-400/10 to-transparent',
    },
    {
      id: 'intelligence',
      stage: 'Middle of Funnel: Consideration',
      product: 'Intelligence',
      description: 'Slash sales cycles by 60% with AI that predicts purchase intent and identifies decision-makers with almost scary precision',
      icon: <Brain className="w-6 h-6" />,
      color: 'purple' as 'electric' | 'purple' | 'neon' | 'gray',
      gradient: 'from-purple-500 to-purple-400',
      buttonVariant: 'secondary' as const,
      bgGradient: 'bg-gradient-to-br from-purple-500/20 via-purple-400/10 to-transparent',
    },
    {
      id: 'snipper',
      stage: 'Bottom of Funnel: Decision',
      product: 'Snipper',
      description: 'Triple your close rates with AI-powered messaging that reads minds, handles objections, and closes deals while your competitors are still crafting emails',
      icon: <Send className="w-6 h-6" />,
      color: 'neon' as 'electric' | 'purple' | 'neon' | 'gray',
      gradient: 'from-neon-500 to-neon-400',
      buttonVariant: 'accent' as const,
      bgGradient: 'bg-gradient-to-br from-neon-500/20 via-neon-400/10 to-transparent',
    },
    {
      id: 'signals',
      stage: 'Retention & Growth',
      product: 'Signals',
      description: 'Boost retention by 85% with our AI that identifies churn risks, reveals upsell opportunities, and turns satisfied customers into revenue-generating evangelists',
      icon: <Activity className="w-6 h-6" />,
      color: 'gray' as 'electric' | 'purple' | 'neon' | 'gray',
      gradient: 'from-gray-700 to-gray-600',
      buttonVariant: 'primary' as const,
      bgGradient: 'bg-gradient-to-br from-gray-700/20 via-gray-600/10 to-transparent',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_60%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div 
            className="inline-block px-4 py-1.5 bg-electric-50 rounded-full mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-electric-600 font-semibold text-sm">DOMINATE EVERY STAGE</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Your Unstoppable <span className="text-electric-500">Revenue Machine</span> that Outperforms at Every Stage
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Leave competitors in the dust with our battle-tested AI suite that systematically conquers every stage of your funnel, turning cold prospects into revenue machines and brand defenders.
          </motion.p>
        </div>

        {/* Modern funnel visualization */}
        <div className="max-w-5xl mx-auto relative">
          {/* 3D funnel visual */}
          <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2 z-0 w-[800px]">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 800 1000" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              opacity="0.15"
            >
              <path 
                d="M400 0L800 200V300L600 500V600L500 800V900L400 1000L300 900V800L200 600V500L0 300V200L400 0Z" 
                fill="url(#funnel-gradient)" 
              />
              <defs>
                <linearGradient id="funnel-gradient" x1="400" y1="0" x2="400" y2="1000" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="33%" stopColor="#8b5cf6" />
                  <stop offset="66%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#6b7280" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Funnel steps */}
          <div className="relative z-10 space-y-20 md:space-y-24">
            {funnelSteps.map((step, index) => (
              <FunnelStage
                key={step.id}
                stage={step}
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
    stage: string;
    product: string;
    description: string;
    icon: React.ReactNode;
    color: 'electric' | 'purple' | 'neon' | 'gray';
    gradient: string;
    buttonVariant: 'primary' | 'secondary' | 'accent';
    bgGradient: string;
  };
  index: number;
}

const FunnelStage: React.FC<FunnelStageProps> = ({ stage, index }) => {
  // Alternate alignment for each stage
  const isEven = index % 2 === 0;
  
  // Get color classes based on product color
  const getColorClasses = (color: 'electric' | 'purple' | 'neon' | 'gray') => {
    switch(color) {
      case 'electric':
        return {
          iconBg: 'bg-electric-500',
          ringColor: 'ring-electric-300',
          pillColor: 'bg-electric-50 text-electric-600',
          glowEffect: 'after:bg-electric-500/20',
          textColor: 'text-electric-500'
        };
      case 'purple':
        return {
          iconBg: 'bg-purple-500',
          ringColor: 'ring-purple-300',
          pillColor: 'bg-purple-50 text-purple-600',
          glowEffect: 'after:bg-purple-500/20',
          textColor: 'text-purple-500'
        };
      case 'neon':
        return {
          iconBg: 'bg-neon-500',
          ringColor: 'ring-neon-300',
          pillColor: 'bg-neon-50 text-neon-600',
          glowEffect: 'after:bg-neon-500/20',
          textColor: 'text-neon-500'
        };
      case 'gray':
        return {
          iconBg: 'bg-gray-700',
          ringColor: 'ring-gray-400',
          pillColor: 'bg-gray-50 text-gray-600',
          glowEffect: 'after:bg-gray-500/20',
          textColor: 'text-gray-700'
        };
      default:
        return {
          iconBg: 'bg-electric-500',
          ringColor: 'ring-electric-300',
          pillColor: 'bg-electric-50 text-electric-600',
          glowEffect: 'after:bg-electric-500/20',
          textColor: 'text-electric-500'
        };
    }
  };
  
  const colorClasses = getColorClasses(stage.color);
  
  return (
    <motion.div
      className={`relative ${isEven ? 'md:pl-6' : 'md:pr-6'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
    >
      {/* Connection line/connector to the next stage */}
      {index < 3 && (
        <div className="absolute left-1/2 -bottom-14 transform -translate-x-1/2 h-16 z-0">
          <motion.div
            className="w-0.5 h-full mx-auto bg-gradient-to-b from-gray-300 to-gray-200"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
          />
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          >
            <ArrowRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </div>
      )}
      
      {/* Stage card */}
      <div className={`flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-12 items-center`}>
        {/* Icon/Stage indicator */}
        <motion.div
          className={`relative hidden md:flex shrink-0 w-32 h-32 rounded-full items-center justify-center ${colorClasses.ringColor} ring-4 ${stage.bgGradient} 
            after:content-[''] after:absolute after:inset-0 after:rounded-full ${colorClasses.glowEffect} after:blur-xl after:-z-10`}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6, 
            delay: 0.3 + index * 0.1,
            type: "spring",
            stiffness: 200
          }}
        >
          <div className={`${colorClasses.iconBg} w-16 h-16 rounded-full flex items-center justify-center shadow-lg`}>
            <div className="text-white">
              {stage.icon}
            </div>
          </div>
        </motion.div>
        
        {/* Content */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-10 flex-1 relative overflow-hidden border border-gray-100 
          before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:${stage.gradient}`}
        >
          {/* Mobile view icon */}
          <div className={`md:hidden absolute ${isEven ? 'right-6' : 'left-6'} top-6 ${colorClasses.iconBg} w-10 h-10 rounded-full flex items-center justify-center shadow-lg`}>
            <div className="text-white">
              {stage.icon}
            </div>
          </div>
          
          {/* Stage indicator pill */}
          <div className={`inline-block px-3 py-1 rounded-full ${colorClasses.pillColor} text-xs font-medium mb-3`}>
            {stage.stage}
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-12 md:pr-0">
            {stage.product}
          </h3>
          
          <p className="text-gray-600 mb-6 max-w-xl">
            {stage.description}
          </p>
          
          <div className="flex items-center space-x-3">
            <Button
              variant={stage.buttonVariant}
              href={`/product/${stage.id}`}
              size="md"
            >
              Learn more
            </Button>
            
            <span className={`text-sm font-medium ${colorClasses.textColor}`}>
              Perfect for {index === 0 ? 'Marketing Teams' : index === 1 ? 'Growth Teams' : index === 2 ? 'Sales Teams' : 'Customer Success'}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FunnelSection;