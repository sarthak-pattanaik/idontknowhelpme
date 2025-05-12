import React from 'react';
import { Helmet } from 'react-helmet';
import { Brain, Database, Target, RefreshCw, Filter, BarChart3 } from 'lucide-react';

import ProductHero from '@/components/product/ProductHero';
import FeatureSection from '@/components/product/FeatureSection';
import TrustSection from '@/components/product/TrustSection';
import StatSection from '@/components/product/StatSection';
import GlobalCTA from '@/components/product/GlobalCTA';

const IntelligenceProduct: React.FC = () => {
  // Product features
  const features = [
    {
      id: 'data-enrichment',
      title: 'Real-time data enrichment from 30+ sources',
      description: 'Automatically enhance lead profiles with comprehensive data from multiple trusted sources to create complete customer profiles.',
      icon: <Database className="w-6 h-6" />,
    },
    {
      id: 'icp-scoring',
      title: 'AI-driven ICP scoring model',
      description: 'Leverage machine learning to identify your ideal prospects based on historical conversion data and industry benchmarks.',
      icon: <Brain className="w-6 h-6" />,
    },
    {
      id: 'crm-sync',
      title: 'CRM sync and auto-tagging',
      description: 'Seamlessly integrate with your existing CRM to automatically update and organize leads with relevant tags and scores.',
      icon: <RefreshCw className="w-6 h-6" />,
    },
    {
      id: 'custom-scoring',
      title: 'Custom scoring rules per segment or region',
      description: 'Create tailored scoring models based on different market segments, regions, or business units for precise targeting.',
      icon: <Target className="w-6 h-6" />,
    },
    {
      id: 'deduplication',
      title: 'Lead list deduplication + cleansing',
      description: 'Automatically identify and merge duplicate entries while cleaning data inaccuracies to maintain a high-quality database.',
      icon: <Filter className="w-6 h-6" />,
    },
    {
      id: 'confidence-scores',
      title: 'Confidence scores for transparency',
      description: 'Understand the reliability of enriched data with transparent confidence scores for each data point and recommendation.',
      icon: <BarChart3 className="w-6 h-6" />,
    },
  ];

  // Stats for "Why it matters" section
  const stats = [
    {
      id: 'conversion-boost',
      value: '41%',
      label: 'Higher conversion rates',
      description: 'Average increase in lead-to-customer conversion rates',
    },
    {
      id: 'sales-time',
      value: '68%',
      label: 'Reduced research time',
      description: 'Time saved by sales teams on lead research and qualification',
    },
    {
      id: 'data-accuracy',
      value: '97.5%',
      label: 'Data accuracy rate',
      description: 'Precision of enriched data compared to industry average of 72%',
    },
  ];

  // Use case groups
  const useCaseGroups = [
    {
      title: 'Sales Teams',
      users: ['BDRs/SDRs', 'Account Executives', 'Sales Operations'],
    },
    {
      title: 'Marketing Teams',
      users: ['Demand Generation', 'Marketing Operations', 'ABM Strategists'],
    },
    {
      title: 'Business Size',
      users: ['Growth Stage', 'Mid-Market', 'Enterprise'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Intelligence | AI-Powered Lead Scoring & Enrichment | idontknowhelpme</title>
        <meta
          name="description"
          content="Identify your highest-value prospects with Intelligence, our AI-driven lead scoring and enrichment platform that integrates with your existing CRM."
        />
      </Helmet>

      {/* Hero Section */}
      <ProductHero
        title="Intelligence"
        subtitle="LEAD SCORING & ENRICHMENT"
        description="Identify and prioritize your highest-value prospects with AI-powered lead scoring and comprehensive data enrichment."
        color="purple"
        icon={<Brain className="w-40 h-40" />}
      />

      {/* Feature Section */}
      <FeatureSection
        title="Transform your prospecting with AI intelligence"
        description="Access comprehensive lead insights and intelligent scoring to focus your sales efforts where they'll have the highest impact."
        features={features}
        color="purple"
      />

      {/* Stats Section */}
      <StatSection
        title="Why sales teams choose Intelligence"
        stats={stats}
        color="purple"
      />

      {/* Trust Section */}
      <TrustSection
        title="Trusted by sales teams worldwide"
        subtitle="From high-growth startups to enterprise organizations, sales teams rely on Intelligence to prioritize leads effectively"
        useCaseGroups={useCaseGroups}
        color="purple"
      />

      {/* Global CTA */}
      <GlobalCTA
        title="Ready to focus on your best prospects?"
        description="Join hundreds of sales teams using Intelligence to prioritize leads that are most likely to convert."
        primaryButtonText="Contact Sales"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Platform"
        secondaryButtonLink="/platform"
        color="purple"
      />
    </>
  );
};

export default IntelligenceProduct;