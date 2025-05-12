import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface PriceCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
  priceDetail?: string;
  className?: string;
  delay?: number;
}

const PriceCard: React.FC<PriceCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  ctaText = 'Get Started',
  ctaLink = '#',
  priceDetail = 'per month',
  className = '',
  delay = 0,
}) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        delay: delay * 0.1,
        ease: "easeOut" 
      } 
    },
    hover: {
      y: -8,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className={`
        relative flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl border 
        ${isPopular 
          ? 'border-primary-500 shadow-xl shadow-primary-100' 
          : 'border-gray-200 dark:border-gray-700 shadow-lg'
        } 
        overflow-hidden ${className}
      `}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {priceDetail && (
            <span className="text-gray-500 text-sm ml-1">{priceDetail}</span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {description}
        </p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg 
                className={`mt-1 mr-2 h-5 w-5 flex-shrink-0 ${isPopular ? 'text-primary-500' : 'text-gray-500'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="p-6 pt-0 mt-auto">
        <Button
          href={ctaLink}
          variant={isPopular ? 'primary' : 'outline'}
          fullWidth
          size="lg"
        >
          {ctaText}
        </Button>
      </div>
    </motion.div>
  );
};

export default PriceCard;