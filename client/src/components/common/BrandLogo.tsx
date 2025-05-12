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
      <div className={`relative ${logoSize} rounded-lg overflow-hidden`}>
        {/* Background with animated gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-electric-400 via-electric-500 to-purple-500"
          animate={{
            background: [
              'linear-gradient(135deg, #0066FF 0%, #0066FF 50%, #6600CC 100%)',
              'linear-gradient(135deg, #0066FF 0%, #39FF14 50%, #6600CC 100%)',
              'linear-gradient(135deg, #6600CC 0%, #0066FF 50%, #0066FF 100%)',
              'linear-gradient(135deg, #0066FF 0%, #0066FF 50%, #6600CC 100%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />

        {/* Logo letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`${colors.logoText} font-bold text-center`} style={{ fontSize: `calc(${size === 'xs' ? '0.75' : size === 'sm' ? '1' : size === 'md' ? '1.25' : size === 'lg' ? '1.5' : '2'}rem)` }}>i</span>
        </div>

        {/* Animated dot effect */}
        <motion.div
          className="absolute top-[15%] right-[15%] w-[20%] h-[20%] bg-white rounded-full opacity-80"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>

      {showText && (
        <div className="flex flex-col ml-2">
          <motion.span
            className={`font-bold tracking-tight ${colors.brandName}`}
            style={{ fontSize: `calc(${size === 'xs' ? '0.75' : size === 'sm' ? '0.875' : size === 'md' ? '1.125' : size === 'lg' ? '1.25' : '1.5'}rem)` }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            idontknowhelpme
          </motion.span>
          <span className={`${colors.tagline} text-xs`}>AI-powered GTM suite</span>
        </div>
      )}
    </Link>
  );
};

export default BrandLogo;