import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

interface ProductHeroProps {
  title: string;
  subtitle: string;
  description: string;
  color: 'electric' | 'purple' | 'neon' | 'gray';
  icon: React.ReactNode;
}

const ProductHero: React.FC<ProductHeroProps> = ({
  title,
  subtitle,
  description,
  color,
  icon,
}) => {
  // Color mapping for different UI elements
  const colorMap = {
    electric: {
      gradient: 'from-electric-500 to-electric-400',
      bgLight: 'bg-electric-50',
      textDark: 'text-electric-700',
      border: 'border-electric-200',
    },
    purple: {
      gradient: 'from-purple-500 to-purple-400',
      bgLight: 'bg-purple-50',
      textDark: 'text-purple-700',
      border: 'border-purple-200',
    },
    neon: {
      gradient: 'from-neon-500 to-neon-400',
      bgLight: 'bg-neon-50',
      textDark: 'text-neon-700',
      border: 'border-neon-200',
    },
    gray: {
      gradient: 'from-gray-700 to-gray-600',
      bgLight: 'bg-gray-50',
      textDark: 'text-gray-700',
      border: 'border-gray-200',
    },
  };

  const colors = colorMap[color];

  return (
    <section className="pt-24 pb-16 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 right-0 w-full h-1/2 bg-gradient-to-br ${colors.gradient} opacity-5 rounded-bl-[100px] blur-3xl -z-10`}></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gray-100 rounded-tr-3xl -z-10"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`inline-flex items-center px-4 py-2 rounded-full ${colors.bgLight} ${colors.textDark} mb-4`}>
                <span className="text-sm font-medium">{subtitle}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
              <p className="text-xl text-gray-600">{description}</p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                variant={color === 'electric' ? 'primary' : color === 'purple' ? 'secondary' : color === 'neon' ? 'accent' : 'primary'} 
                size="lg"
                href="/signup"
              >
                Sign Up
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="#features"
              >
                Explore Features
              </Button>
            </motion.div>
          </div>

          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={`w-80 h-80 rounded-3xl ${colors.bgLight} ${colors.border} border flex items-center justify-center p-8 relative overflow-hidden`}>
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className={`text-${color}-500 w-40 h-40`}>
                  {icon}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 rounded-bl-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/50 rounded-tr-3xl"></div>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br ${colors.gradient} opacity-20 rounded-full blur-2xl`}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;