import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';
import { Lightbulb, Brain, Send, Activity } from 'lucide-react';

const ProductSuite: React.FC = () => {
  const products = [
    {
      id: 'homemaker',
      title: 'Homemaker',
      description: 'Generate high-converting content at scale that outperforms competitors and drives traffic.',
      features: ['Custom content briefs', 'SEO optimization', 'Brand voice adaptation', 'Multi-format output'],
      color: 'electric' as const,
      icon: <Lightbulb className="w-6 h-6" />,
      href: '/product/homemaker',
      delay: 0.1,
    },
    {
      id: 'intelligence',
      title: 'Intelligence',
      description: 'Identify your highest-value prospects instantly with AI that predicts buying intent with uncanny accuracy.',
      features: ['Predictive lead scoring', 'Data enrichment', 'Behavioral insights', 'Integration with CRMs'],
      color: 'purple' as const,
      icon: <Brain className="w-6 h-6" />,
      href: '/product/intelligence',
      delay: 0.2,
    },
    {
      id: 'snipper',
      title: 'Snipper',
      description: 'Supercharge your outreach with hyper-personalized messaging that converts at unprecedented rates.',
      features: ['Personalized templates', 'Sentiment analysis', 'Response predictions', 'A/B testing'],
      color: 'neon' as const,
      icon: <Send className="w-6 h-6" />,
      href: '/product/snipper',
      delay: 0.3,
    },
    {
      id: 'signals',
      title: 'Signals',
      description: 'Gain an unfair advantage with real-time intelligence that reveals precisely when prospects are ready to buy.',
      features: ['Intent data collection', 'Competitor monitoring', 'Market trend analysis', 'Alert notifications'],
      color: 'gray' as const,
      icon: <Activity className="w-6 h-6" />,
      href: '/product/signals',
      delay: 0.4,
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
            className="text-electric-600 font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            GAME-CHANGING SOLUTIONS
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Unleash the Ultimate AI Arsenal for GTM Excellence
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Deploy our battle-tested suite of AI tools to conquer every aspect of your go-to-market
            strategy. Outperform competitors and drive explosive business growth with unmatched efficiency.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              features={product.features}
              icon={product.icon}
              color={product.color}
              href={product.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSuite;