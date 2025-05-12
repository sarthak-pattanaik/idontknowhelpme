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
  className = '',
}) => {
  // Size mapping
  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  // Text size mapping
  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  // Color mapping
  const colorClasses = {
    light: {
      logoBox: 'bg-electric-500',
      logoText: 'text-white',
      brandName: 'text-gray-900',
      tagline: 'text-gray-500',
    },
    dark: {
      logoBox: 'bg-electric-400',
      logoText: 'text-white',
      brandName: 'text-white',
      tagline: 'text-gray-300',
    },
  };

  const colors = colorClasses[colorMode];
  const logoSize = sizeClasses[size];
  const textSize = textSizeClasses[size];

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className={`relative ${logoSize} rounded-lg overflow-hidden shadow-lg`}>
        {/* Background with animated gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-electric-500 via-electric-600 to-purple-600"
          animate={{
            background: [
              'linear-gradient(135deg, #0066FF 0%, #3366FF 50%, #6600CC 100%)',
              'linear-gradient(135deg, #0066FF 0%, #00CCFF 50%, #6600CC 100%)',
              'linear-gradient(135deg, #6600CC 0%, #3366FF 50%, #0066FF 100%)',
              'linear-gradient(135deg, #0066FF 0%, #3366FF 50%, #6600CC 100%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
        />
        
        {/* Abstract geometric pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L50,100 Z" fill="white" />
          </svg>
        </div>

        {/* Logo letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            className={`${colors.logoText} font-bold text-center relative z-10`} 
            style={{ fontSize: `calc(${size === 'xs' ? '0.875' : size === 'sm' ? '1.125' : size === 'md' ? '1.375' : size === 'lg' ? '1.625' : '2.125'}rem)` }}
            animate={{ 
              textShadow: [
                '0 0 5px rgba(255,255,255,0.5)', 
                '0 0 10px rgba(255,255,255,0.8)', 
                '0 0 5px rgba(255,255,255,0.5)'
              ] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            i
          </motion.span>
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white to-transparent opacity-30 transform rotate-12"
          animate={{
            left: ['-100%', '100%'],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
        />
      </div>

      {showText && (
        <div className="flex items-center ml-3">
          <motion.span
            className={`font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-electric-600 to-purple-600 ${size === 'xs' || size === 'sm' ? 'tracking-tight' : 'tracking-tighter'}`}
            style={{ fontSize: `calc(${size === 'xs' ? '0.875' : size === 'sm' ? '1.125' : size === 'md' ? '1.375' : size === 'lg' ? '1.625' : '1.875'}rem)` }}
            whileHover={{ 
              scale: 1.02, 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ 
              scale: { type: 'spring', stiffness: 400, damping: 10 },
              backgroundPosition: { duration: 1, repeat: 0 }
            }}
          >
            idontknowhelpme
          </motion.span>
        </div>
      )}
    </Link>
  );
};

export default BrandLogo;