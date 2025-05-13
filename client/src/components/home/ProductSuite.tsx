import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/product/ProductCard';
import { Lightbulb, Brain, Send, Activity } from 'lucide-react';

const ProductSuite: React.FC = () => {
  const products = [
    {
      id: 'homemaker',
      title: 'Homemaker',
      description: 'Publish 5x faster with AI-written content that adapts to your tone and brand — across every touchpoint.',
      features: ['Custom content briefs', 'SEO optimization', 'Brand voice adaptation', 'Multi-format output'],
      color: 'electric' as const,
      icon: <Lightbulb className="w-6 h-6" />,
      href: '/product/homemaker',
      delay: 0.1,
    },
    {
      id: 'intelligence',
      title: 'Intelligence',
      description: 'Prioritize the 3% of leads that actually close. Our AI models enrich and score every inbound instantly — so your reps stop wasting time.',
      features: ['Predictive lead scoring', 'Data enrichment', 'Behavioral insights', 'Integration with CRMs'],
      color: 'purple' as const,
      icon: <Brain className="w-6 h-6" />,
      href: '/product/intelligence',
      delay: 0.2,
    },
    {
      id: 'sniper',
      title: 'Sniper',
      description: 'Automate high-touch outbound at scale — without sounding robotic. 87% of users say Sniper emails outperform their manual sequences.',
      features: ['Personalized templates', 'Sentiment analysis', 'Response predictions', 'A/B testing'],
      color: 'neon' as const,
      icon: <Send className="w-6 h-6" />,
      href: '/product/sniper',
      delay: 0.3,
    },
    {
      id: 'signals',
      title: 'Signals',
      description: "Know who's ready to buy — before they raise their hand. Real-time signals from LinkedIn, email, and site visits help your SDRs strike early.",
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
            REVENUE ACCELERATION SUITE
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            First-Touch to Follow-Up: Your Complete Revenue Stack
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our integrated AI platform drives measurable results at every pipeline stage. 
            Companies using idkhelpme see 43% more qualified leads, 68% faster deal cycles, 
            and 2.5X higher conversion rates from first touch to closed deal.
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