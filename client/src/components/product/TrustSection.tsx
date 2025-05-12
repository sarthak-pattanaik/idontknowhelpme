import React from 'react';
import { motion } from 'framer-motion';

interface UseCaseGroup {
  title: string;
  users: string[];
}

interface TrustSectionProps {
  title: string;
  subtitle?: string;
  useCaseGroups: UseCaseGroup[];
  color: 'electric' | 'purple' | 'neon' | 'gray';
}

const TrustSection: React.FC<TrustSectionProps> = ({
  title,
  subtitle,
  useCaseGroups,
  color,
}) => {
  const colorMap = {
    electric: {
      bgLight: 'bg-electric-50',
      textDark: 'text-electric-700',
      border: 'border-electric-200',
    },
    purple: {
      bgLight: 'bg-purple-50',
      textDark: 'text-purple-700',
      border: 'border-purple-200',
    },
    neon: {
      bgLight: 'bg-neon-50',
      textDark: 'text-neon-700',
      border: 'border-neon-200',
    },
    gray: {
      bgLight: 'bg-gray-50',
      textDark: 'text-gray-700',
      border: 'border-gray-200',
    },
  };

  const colors = colorMap[color];

  return (
    <section className={`${colors.bgLight} py-16`}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{title}</h2>
          {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCaseGroups.map((group, index) => (
            <UseCaseCard 
              key={index}
              group={group}
              colors={colors}
              index={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {['Salesforce', 'HubSpot', 'Marketo', 'Outreach', 'Zapier', 'Slack'].map((company) => (
              <div 
                key={company} 
                className="h-8 flex items-center justify-center"
              >
                <span className="text-gray-400 font-semibold text-xl">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface UseCaseCardProps {
  group: UseCaseGroup;
  colors: {
    bgLight: string;
    textDark: string;
    border: string;
  };
  index: number;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ group, colors, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <h3 className={`${colors.textDark} font-semibold mb-4`}>{group.title}</h3>
      <ul className="space-y-3">
        {group.users.map((user, userIndex) => (
          <li key={userIndex} className="flex items-start">
            <div className={`flex-shrink-0 ${colors.bgLight} w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5`}>
              <svg className={`w-3 h-3 ${colors.textDark}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-gray-700">{user}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TrustSection;