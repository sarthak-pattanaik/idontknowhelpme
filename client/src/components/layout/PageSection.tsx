import React from 'react';
import { motion } from 'framer-motion';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgColor?: 'white' | 'light' | 'dark' | 'primary' | 'gradient';
  paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  fadeIn?: boolean;
  heading?: string;
  subheading?: string;
  centered?: boolean;
}

const PageSection: React.FC<PageSectionProps> = ({
  children,
  className = '',
  id,
  bgColor = 'white',
  paddingY = 'lg',
  fadeIn = true,
  heading,
  subheading,
  centered = false,
}) => {
  // Background color classes
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-primary-50',
    gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50'
  };

  // Padding classes
  const paddingClasses = {
    none: '',
    sm: 'py-4 sm:py-6',
    md: 'py-8 sm:py-12',
    lg: 'py-12 sm:py-16 md:py-20',
    xl: 'py-16 sm:py-24 md:py-32'
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
  };

  return (
    <section
      id={id}
      className={`relative ${bgClasses[bgColor]} ${paddingClasses[paddingY]} overflow-hidden ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(heading || subheading) && (
          <motion.div
            className={`mb-12 ${centered ? 'text-center mx-auto max-w-3xl' : ''}`}
            initial={fadeIn ? 'hidden' : 'visible'}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={headingVariants}
          >
            {heading && (
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                {subheading}
              </p>
            )}
          </motion.div>
        )}
        
        {fadeIn ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </div>
    </section>
  );
};

export default PageSection;