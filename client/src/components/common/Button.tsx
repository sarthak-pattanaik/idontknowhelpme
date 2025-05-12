import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

// Define the types for the button props
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  onClick,
}) => {
  // Define variant styles
  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium border border-transparent hover:shadow-lg hover:opacity-90 transition-all duration-300 shadow-md shadow-primary-500/20',
    secondary: 'bg-white text-gray-800 font-medium border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 shadow-sm',
    outline: 'bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 transition-colors duration-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-colors duration-300',
    danger: 'bg-red-600 text-white hover:bg-red-700 transition-colors duration-300',
  };

  // Define size styles
  const sizeStyles = {
    xs: 'px-2 py-1 text-xs rounded',
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-5 py-2.5 text-base rounded-lg',
    lg: 'px-6 py-3 text-lg rounded-xl',
    xl: 'px-8 py-4 text-xl rounded-xl',
  };

  // Define disabled style
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  // Define full width style
  const widthStyle = fullWidth ? 'w-full flex justify-center' : 'inline-flex';

  // Combine all styles
  const buttonStyle = `${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyle} ${widthStyle} items-center justify-center gap-2 font-medium transition-all ${className}`;

  // Animation variants
  const buttonVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    hover: variant === 'primary' 
      ? { scale: 1.02, boxShadow: '0 8px 20px rgba(124, 58, 237, 0.2)' } 
      : { scale: 1.02 },
    tap: { scale: 0.98 },
    disabled: { opacity: 0.7 }
  };

  // Render the button inside a Link if href is provided, otherwise render as a button
  if (href) {
    return (
      <motion.div
        initial="initial"
        animate="animate"
        whileHover={disabled ? "disabled" : "hover"}
        whileTap={disabled ? "disabled" : "tap"}
        variants={buttonVariants}
        className="inline-block"
      >
        <Link href={disabled ? '#' : href} className={buttonStyle}>
          {iconPosition === 'left' && icon && <span>{icon}</span>}
          {children}
          {iconPosition === 'right' && icon && <span>{icon}</span>}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      initial="initial"
      animate="animate"
      whileHover={disabled ? "disabled" : "hover"}
      whileTap={disabled ? "disabled" : "tap"}
      variants={buttonVariants}
      className={buttonStyle}
    >
      {iconPosition === 'left' && icon && <span>{icon}</span>}
      {children}
      {iconPosition === 'right' && icon && <span>{icon}</span>}
    </motion.button>
  );
};

export default Button;