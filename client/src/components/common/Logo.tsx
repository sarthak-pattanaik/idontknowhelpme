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
      container: 'h-6 w-6',
      textSize: 'text-sm',
      spacing: 'mr-1.5',
      letter: 'text-xs',
      accent: '-left-1 -top-1 w-6 h-6',
    },
    md: {
      container: 'h-8 w-8',
      textSize: 'text-xl',
      spacing: 'mr-2',
      letter: 'text-lg',
      accent: '-left-2 -top-2 w-8 h-8',
    },
    lg: {
      container: 'h-12 w-12',
      textSize: 'text-2xl',
      spacing: 'mr-3',
      letter: 'text-2xl',
      accent: '-left-3 -top-3 w-12 h-12',
    },
  };

  const config = dimensions[size];

  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center">
        <motion.div
          className={`${config.container} relative rounded-full bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-600 flex items-center justify-center overflow-hidden ${config.spacing}`}
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >
          <div className={`absolute ${config.accent} bg-white opacity-20 rounded-full`}></div>
          <span className={`text-white font-bold ${config.letter}`}>i</span>
        </motion.div>
        
        {showText && (
          <GradientText className={`font-bold ${config.textSize}`}>
            dontknowhelpme
          </GradientText>
        )}
      </div>
    </Link>
  );
};

export default Logo;