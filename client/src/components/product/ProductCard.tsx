import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  color: 'electric' | 'purple' | 'neon' | 'gray';
  href: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, features, icon, color, href }) => {
  // Color mapping for different UI elements
  const colorMap = {
    electric: {
      bg: 'bg-electric-100',
      iconBg: 'bg-electric-500',
      iconColor: 'text-white',
      checkColor: 'text-electric-500',
      borderHover: 'group-hover:border-electric-500',
      shadow: 'group-hover:shadow-electric-100',
    },
    purple: {
      bg: 'bg-purple-100',
      iconBg: 'bg-purple-500',
      iconColor: 'text-white',
      checkColor: 'text-purple-500',
      borderHover: 'group-hover:border-purple-500',
      shadow: 'group-hover:shadow-purple-100',
    },
    neon: {
      bg: 'bg-neon-100',
      iconBg: 'bg-neon-500',
      iconColor: 'text-black',
      checkColor: 'text-neon-600',
      borderHover: 'group-hover:border-neon-500',
      shadow: 'group-hover:shadow-neon-100',
    },
    gray: {
      bg: 'bg-gray-100',
      iconBg: 'bg-gray-700',
      iconColor: 'text-white',
      checkColor: 'text-gray-600',
      borderHover: 'group-hover:border-gray-400',
      shadow: 'group-hover:shadow-gray-100',
    },
  };

  const colors = colorMap[color];

  return (
    <motion.div 
      className="group rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg h-full flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Product Icon */}
      <div className={`${colors.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
        <div className={`${colors.iconColor}`}>{icon}</div>
      </div>
      
      {/* Product Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      
      {/* Product Description */}
      <p className="text-gray-600 mb-4">{description}</p>
      
      {/* Features List */}
      <div className="space-y-3 flex-grow mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start">
            <div className={`flex-shrink-0 ${colors.bg} w-5 h-5 rounded-full flex items-center justify-center mr-3`}>
              <svg className={`w-3 h-3 ${colors.checkColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="mt-auto">
        <Button 
          href={href} 
          variant={color === 'electric' ? 'primary' : color === 'purple' ? 'secondary' : color === 'neon' ? 'accent' : 'ghost'}
          fullWidth
        >
          Learn more
          <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductCard;