import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Lightbulb, Brain, Send, Activity } from 'lucide-react';

import Button from '@/components/ui/Button';

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: 'electric' | 'purple' | 'neon' | 'gray';
  href: string;
  features: string[];
  delay?: number;
}

const ProductOverview: React.FC = () => {
  const products: ProductCardProps[] = [
    {
      title: 'Homemaker',
      description: 'AI-powered content generation for websites, blogs, and marketing materials.',
      icon: <Lightbulb className="w-10 h-10" />,
      color: 'electric',
      href: '/product/homemaker',
      features: [
        'Auto-generate SEO-rich landing pages',
        'Maintain brand tone across campaigns',
        'Support for multi-format outputs',
        'Collaborative editing for teams',
      ],
      delay: 0.1,
    },
    {
      title: 'Intelligence',
      description: 'Smart lead scoring and enrichment using machine learning algorithms.',
      icon: <Brain className="w-10 h-10" />,
      color: 'purple',
      href: '/product/intelligence',
      features: [
        'Real-time data enrichment from 30+ sources',
        'AI-driven ICP scoring model',
        'CRM sync and auto-tagging',
        'Custom scoring rules per segment',
      ],
      delay: 0.2,
    },
    {
      title: 'Sniper',
      description: 'AI-assisted outreach campaigns for personalized communications.',
      icon: <Send className="w-10 h-10" />,
      color: 'neon',
      href: '/product/sniper',
      features: [
        'Auto-personalized outbound email copy',
        'Call script generation with role-based tonality',
        'Context-aware follow-up sequencing',
        'Smart send-time optimization',
      ],
      delay: 0.3,
    },
    {
      title: 'Signals',
      description: 'Real-time market signal tracking to identify buying intent.',
      icon: <Activity className="w-10 h-10" />,
      color: 'gray',
      href: '/product/signals',
      features: [
        'Real-time LinkedIn activity overlays',
        'Email open + website visit signal detection',
        'Lead scoring boosted by real-world activity',
        'Push alerts in Slack or Email',
      ],
      delay: 0.4,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Product Suite | idontknowhelpme</title>
        <meta
          name="description"
          content="Explore our comprehensive suite of AI-powered tools for GTM teams: content generation, lead scoring, outreach, and intent tracking."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              A complete AI suite for modern GTM teams
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Four powerful tools designed to work together across your entire go-to-market process.
              From content creation to intent tracking, we've built the AI platform sales and marketing teams need.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button variant="primary" size="lg" href="/contact">
                Talk to Sales
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {products.map((product) => (
              <EnterpriseProductCard
                key={product.title}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Integrate with your existing workflow
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our products seamlessly connect with your favorite tools and platforms
            </motion.p>
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-8 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {['Salesforce', 'HubSpot', 'Marketo', 'Outreach', 'Slack', 'Google', 'Microsoft', 'Zapier'].map((integration) => (
              <div
                key={integration}
                className="text-gray-400 font-semibold text-xl"
              >
                {integration}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-2 w-full bg-gradient-to-r from-electric-500 via-purple-500 to-neon-500"></div>
            <div className="p-8 md:p-12">
              <div className="text-center">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Ready to transform your GTM strategy?
                </motion.h2>
                
                <motion.p
                  className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Schedule a demo to see how our AI suite can help your team achieve better results at every stage.
                </motion.p>
                
                <motion.div
                  className="flex flex-col sm:flex-row justify-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Button
                    variant="primary"
                    size="lg"
                    href="/contact"
                  >
                    Schedule a Demo
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    href="/pricing"
                  >
                    View Pricing
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const EnterpriseProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  href, 
  features,
  delay = 0 
}) => {
  const colorMap = {
    electric: {
      bgLight: 'bg-electric-50',
      border: 'border-electric-200',
      iconBg: 'bg-electric-500',
      iconColor: 'text-white',
      textAccent: 'text-electric-600',
      checkBg: 'bg-electric-100',
      checkColor: 'text-electric-500',
      buttonVariant: 'primary' as const,
    },
    purple: {
      bgLight: 'bg-purple-50',
      border: 'border-purple-200',
      iconBg: 'bg-purple-500',
      iconColor: 'text-white',
      textAccent: 'text-purple-600',
      checkBg: 'bg-purple-100',
      checkColor: 'text-purple-500',
      buttonVariant: 'secondary' as const,
    },
    neon: {
      bgLight: 'bg-neon-50',
      border: 'border-neon-200',
      iconBg: 'bg-neon-500',
      iconColor: 'text-black',
      textAccent: 'text-neon-600',
      checkBg: 'bg-neon-100',
      checkColor: 'text-neon-600',
      buttonVariant: 'accent' as const,
    },
    gray: {
      bgLight: 'bg-gray-50',
      border: 'border-gray-200',
      iconBg: 'bg-gray-700',
      iconColor: 'text-white',
      textAccent: 'text-gray-700',
      checkBg: 'bg-gray-100',
      checkColor: 'text-gray-600',
      buttonVariant: 'primary' as const,
    },
  };

  const colors = colorMap[color];

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="h-2 w-full bg-gradient-to-r from-white via-white to-white group-hover:bg-gradient-to-r group-hover:from-white"></div>
      <div className="p-6">
        <div className="flex items-center mb-6">
          <div className={`w-12 h-12 rounded-lg ${colors.iconBg} flex items-center justify-center mr-4`}>
            <div className={colors.iconColor}>
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className={`text-sm ${colors.textAccent}`}>AI-Powered Solution</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className={`flex-shrink-0 ${colors.checkBg} w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5`}>
                <svg className={`w-3 h-3 ${colors.checkColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button
          variant={colors.buttonVariant}
          href={href}
          fullWidth
        >
          Learn more
        </Button>
      </div>
    </motion.div>
  );
};

export default ProductOverview;