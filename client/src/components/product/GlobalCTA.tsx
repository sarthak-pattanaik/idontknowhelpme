import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

interface GlobalCTAProps {
  title: string;
  description?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  color: 'electric' | 'purple' | 'neon' | 'gray';
}

const GlobalCTA: React.FC<GlobalCTAProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  color,
}) => {
  const colorMap = {
    electric: {
      gradient: 'from-electric-500 to-electric-400',
      buttonVariant: 'primary' as const,
    },
    purple: {
      gradient: 'from-purple-500 to-purple-400',
      buttonVariant: 'secondary' as const,
    },
    neon: {
      gradient: 'from-neon-500 to-neon-400',
      buttonVariant: 'accent' as const,
    },
    gray: {
      gradient: 'from-gray-700 to-gray-600',
      buttonVariant: 'primary' as const,
    },
  };

  const colors = colorMap[color];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className={`h-2 w-full bg-gradient-to-r ${colors.gradient}`}></div>
          <div className="p-8 md:p-12">
            <div className="text-center">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {title}
              </motion.h2>
              
              {description && (
                <motion.p
                  className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {description}
                </motion.p>
              )}
              
              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  variant={colors.buttonVariant}
                  size="lg"
                  href={primaryButtonLink}
                >
                  {primaryButtonText}
                </Button>
                
                {secondaryButtonText && secondaryButtonLink && (
                  <Button
                    variant="outline"
                    size="lg"
                    href={secondaryButtonLink}
                  >
                    {secondaryButtonText}
                  </Button>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalCTA;