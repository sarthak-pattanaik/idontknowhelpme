import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  onClick,
  type = 'button',
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size classes
  const sizeClasses = {
    xs: 'px-2.5 py-1.5 text-xs rounded',
    sm: 'px-3 py-2 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-md',
    lg: 'px-6 py-3 text-base rounded-md',
    xl: 'px-8 py-4 text-lg rounded-lg',
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-electric-500 text-white hover:bg-electric-600 focus:ring-electric-500',
    secondary: 'bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-500',
    accent: 'bg-neon-500 text-black hover:bg-neon-600 focus:ring-neon-500',
    outline: 'bg-transparent border-2 border-electric-500 text-electric-500 hover:bg-electric-50 focus:ring-electric-500',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  };
  
  // Width class
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Disabled class
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`;
  
  // Button element animation variants
  const buttonVariants = {
    initial: {},
    hover: { 
      scale: disabled ? 1 : 1.02,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: disabled ? 1 : 0.98,
      transition: { duration: 0.1 }
    },
  };

  // If href is provided, render a Link component
  if (href) {
    return (
      <motion.div
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        className="inline-block"
      >
        <Link href={disabled ? '#' : href} className={buttonClasses} onClick={disabled ? (e) => e.preventDefault() : undefined}>
          {iconLeft && <span className="mr-2">{iconLeft}</span>}
          {children}
          {iconRight && <span className="ml-2">{iconRight}</span>}
        </Link>
      </motion.div>
    );
  }

  // Otherwise, render a button element
  return (
    <motion.button
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </motion.button>
  );
};

export default Button;