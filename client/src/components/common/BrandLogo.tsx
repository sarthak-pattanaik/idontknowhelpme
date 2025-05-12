import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

interface BrandLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  colorMode?: 'light' | 'dark';
  showText?: boolean;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ 
  size = 'md', 
  colorMode = 'light', 
  showText = true,
  className = ''
}) => {
  // Size configuration for the logo
  const sizeConfig = {
    xs: {
      container: 'h-6 w-6',
      text: 'text-xs',
      spacing: 'ml-1.5',
      icon: 'w-6 h-6',
    },
    sm: {
      container: 'h-8 w-8',
      text: 'text-sm',
      spacing: 'ml-2',
      icon: 'w-8 h-8',
    },
    md: {
      container: 'h-10 w-10',
      text: 'text-base',
      spacing: 'ml-2.5',
      icon: 'w-10 h-10',
    },
    lg: {
      container: 'h-12 w-12',
      text: 'text-lg',
      spacing: 'ml-3',
      icon: 'w-12 h-12',
    },
    xl: {
      container: 'h-16 w-16',
      text: 'text-xl',
      spacing: 'ml-4',
      icon: 'w-16 h-16',
    }
  };

  // Color configuration based on mode
  const colorConfig = {
    light: {
      logo: 'text-primary-600',
      text: 'text-gray-900',
      highlight: 'text-primary-600',
      hover: 'group-hover:text-primary-700'
    },
    dark: {
      logo: 'text-white',
      text: 'text-white',
      highlight: 'text-primary-400',
      hover: 'group-hover:text-primary-300'
    }
  };

  const config = sizeConfig[size];
  const colors = colorConfig[colorMode];
  
  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    hover: { 
      scale: 1.02, 
      transition: { duration: 0.2 }
    }
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    hover: {}
  };

  return (
    <Link href="/" className={`inline-flex items-center group ${className}`}>
      <motion.div
        className="flex items-center"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        {/* Logo Mark */}
        <motion.div 
          className={`${config.container} ${colors.logo} relative flex-shrink-0`}
          variants={itemVariants}
        >
          <svg 
            viewBox="0 0 36 36" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={`${config.icon}`}
          >
            <rect x="6" y="6" width="24" height="24" rx="6" className="fill-current" />
            <path 
              d="M15 15H21M15 21H21" 
              stroke="white" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
            <path 
              d="M9 12C9 10.3431 10.3431 9 12 9H24C25.6569 9 27 10.3431 27 12V24C27 25.6569 25.6569 27 24 27H12C10.3431 27 9 25.6569 9 24V12Z" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        
        {/* Logo Text */}
        {showText && (
          <motion.div 
            className={`${config.spacing} font-medium tracking-tight ${colors.text} flex flex-col`}
            variants={itemVariants}
          >
            <span className={`${config.text} font-semibold`}>
              <span>idontknowhelpme</span>
            </span>
            <span className="text-xs text-gray-500 tracking-wide -mt-0.5">AI-powered business solutions</span>
          </motion.div>
        )}
      </motion.div>
    </Link>
  );
};

export default BrandLogo;