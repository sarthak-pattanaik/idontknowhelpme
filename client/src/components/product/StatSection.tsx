import React from 'react';
import { motion } from 'framer-motion';

interface Stat {
  id: string;
  value: string;
  label: string;
  description?: string;
}

interface StatSectionProps {
  title: string;
  description?: string;
  stats: Stat[];
  color: 'electric' | 'purple' | 'neon' | 'gray';
}

const StatSection: React.FC<StatSectionProps> = ({
  title,
  description,
  stats,
  color,
}) => {
  const colorMap = {
    electric: {
      bgLight: 'bg-electric-50',
      textDark: 'text-electric-700',
      textLight: 'text-electric-500',
      border: 'border-electric-200',
    },
    purple: {
      bgLight: 'bg-purple-50',
      textDark: 'text-purple-700',
      textLight: 'text-purple-500',
      border: 'border-purple-200',
    },
    neon: {
      bgLight: 'bg-neon-50',
      textDark: 'text-neon-700',
      textLight: 'text-neon-500',
      border: 'border-neon-200',
    },
    gray: {
      bgLight: 'bg-gray-50',
      textDark: 'text-gray-700',
      textLight: 'text-gray-500',
      border: 'border-gray-200',
    },
  };

  const colors = colorMap[color];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            {description && <p className="text-xl text-gray-600">{description}</p>}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.id}
                className={`${colors.bgLight} rounded-xl p-6 border ${colors.border}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className={`${colors.textLight} text-4xl md:text-5xl font-bold mb-2`}>{stat.value}</div>
                <div className="text-gray-900 font-semibold text-lg mb-2">{stat.label}</div>
                {stat.description && <p className="text-gray-600 text-sm">{stat.description}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatSection;