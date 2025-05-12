import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import GradientText from './GradientText';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true }) => {
  // Size configuration
  const dimensions = {
    sm: {
      container: 'h-7 w-7',
      textSize: 'text-sm',
      spacing: 'mr-1.5',
      accent: '-left-1 -top-1 w-7 h-7',
    },
    md: {
      container: 'h-10 w-10',
      textSize: 'text-xl',
      spacing: 'mr-2',
      accent: '-left-2 -top-2 w-10 h-10',
    },
    lg: {
      container: 'h-14 w-14',
      textSize: 'text-2xl',
      spacing: 'mr-3',
      accent: '-left-3 -top-3 w-14 h-14',
    },
  };

  const config = dimensions[size];
  
  // Logo animation variants
  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 300 }
    },
    hover: { 
      scale: 1.05,
      rotate: 5,
      boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)",
      transition: { type: "spring", stiffness: 300, damping: 10 }
    },
    tap: { scale: 0.95 }
  };
  
  // Text animation variants 
  const textVariants = {
    initial: { opacity: 0, x: -10 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  return (
    <Link href="/" className="flex items-center group">
      <div className="flex items-center">
        {/* Logo Mark */}
        <motion.div
          className={`${config.container} relative z-10 rounded-lg bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-600 flex items-center justify-center overflow-hidden ${config.spacing} shadow-lg shadow-primary-600/20`}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
          variants={logoVariants}
        >
          {/* Shine effect */}
          <div className={`absolute ${config.accent} bg-white opacity-30 rotate-45 translate-x-full -translate-y-1/2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 ease-in-out blur-md`}></div>
          
          {/* Logo elements */}
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Abstract hexagon */}
            <svg viewBox="0 0 24 24" className="absolute w-1/2 h-1/2 rotate-[15deg] text-white/20 fill-current">
              <path d="M17.0009,3L21,12L17.0009,21H7.00048L3,12L7.00048,3H17.0009Z" />
            </svg>
            
            {/* Logo letter */}
            <span className="text-white font-bold relative z-10 text-xl">i</span>
          </div>
        </motion.div>
        
        {/* Logo Text */}
        {showText && (
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <GradientText className={`font-bold ${config.textSize}`}>
              dontknowhelpme
            </GradientText>
            
            {/* Tagline below logo */}
            <motion.p 
              className="text-xs text-gray-500 -mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              AI-powered business solutions
            </motion.p>
          </motion.div>
        )}
      </div>
    </Link>
  );
};

export default Logo;