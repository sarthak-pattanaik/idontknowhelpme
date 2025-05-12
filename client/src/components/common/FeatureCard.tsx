import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconBg?: string;
  className?: string;
  delay?: number;
  href?: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  iconBg = 'bg-primary-100',
  className = '',
  delay = 0,
  href,
  onClick,
}) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
      y: -5,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { scale: 0.98 }
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: .5 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.3, 
        delay: delay * 0.1 + 0.2,
        ease: "easeOut" 
      } 
    },
  };

  const content = (
    <>
      {icon && (
        <motion.div 
          className={`${iconBg} p-3 rounded-lg inline-block mb-4`}
          variants={iconVariants}
        >
          {icon}
        </motion.div>
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </>
  );

  // Wrap with motion component for animations
  const CardWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      className={`bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700 transition-all ${className}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      viewport={{ once: true, margin: "-50px" }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  // Render as a link if href is provided
  if (href) {
    return (
      <a href={href} className="block no-underline">
        <CardWrapper>
          {content}
        </CardWrapper>
      </a>
    );
  }

  // Otherwise render as a div
  return (
    <CardWrapper>
      {content}
    </CardWrapper>
  );
};

export default FeatureCard;