import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureSectionProps {
  title: string;
  description: string;
  features: Feature[];
  color: 'electric' | 'purple' | 'neon' | 'gray';
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  features,
  color,
}) => {
  const colorMap = {
    electric: {
      bgLight: 'bg-electric-50',
      textDark: 'text-electric-700',
      border: 'border-electric-200',
      iconBg: 'bg-electric-100',
      iconColor: 'text-electric-500',
    },
    purple: {
      bgLight: 'bg-purple-50',
      textDark: 'text-purple-700',
      border: 'border-purple-200',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-500',
    },
    neon: {
      bgLight: 'bg-neon-50',
      textDark: 'text-neon-700',
      border: 'border-neon-200',
      iconBg: 'bg-neon-100',
      iconColor: 'text-neon-500',
    },
    gray: {
      bgLight: 'bg-gray-50',
      textDark: 'text-gray-700',
      border: 'border-gray-200',
      iconBg: 'bg-gray-100',
      iconColor: 'text-gray-500',
    },
  };

  const colors = colorMap[color];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              color={color}
              index={index}
              colors={colors}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: Feature;
  color: string;
  index: number;
  colors: {
    bgLight: string;
    textDark: string;
    border: string;
    iconBg: string;
    iconColor: string;
  };
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, color, index, colors }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
    >
      <div className={`w-12 h-12 rounded-lg ${colors.iconBg} ${colors.iconColor} flex items-center justify-center mb-5`}>
        {feature.icon}
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </motion.div>
  );
};

export default FeatureSection;