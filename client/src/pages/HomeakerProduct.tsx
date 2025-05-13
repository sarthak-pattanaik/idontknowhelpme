import React from 'react';
import { Helmet } from 'react-helmet';
import { Lightbulb, Edit, FileText, Layers, GitBranch, Database } from 'lucide-react';

import ProductHero from '@/components/product/ProductHero';
import FeatureSection from '@/components/product/FeatureSection';
import TrustSection from '@/components/product/TrustSection';
import StatSection from '@/components/product/StatSection';
import GlobalCTA from '@/components/product/GlobalCTA';

const HomemakerProduct: React.FC = () => {
  // Product features
  const features = [
    {
      id: 'seo-pages',
      title: 'Auto-generate SEO-rich landing pages',
      description: 'Drive 3.7x more organic traffic with automatically generated landing pages that rank for your target keywords and convert 42% better than manually written content.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      id: 'brand-tone',
      title: 'Maintain brand tone across campaigns',
      description: 'Achieve 98% brand consistency across all channels while scaling content 10x. Our AI learns your unique voice patterns and applies them to every piece of content automatically.',
      icon: <Edit className="w-6 h-6" />,
    },
    {
      id: 'multi-format',
      title: 'Support for multi-format outputs',
      description: 'Cut your content production time by 75% by turning one input into perfectly formatted content for 14+ platforms and channels, each optimized for maximum engagement.',
      icon: <Layers className="w-6 h-6" />,
    },
    {
      id: 'collab-editing',
      title: 'Collaborative editing support for teams',
      description: 'Reduce feedback cycles by 83% and eliminate bottlenecks with real-time collaboration that shows exactly who changed what, when, and why — keeping everyone in sync.',
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      id: 'version-control',
      title: 'Audit trail & version control',
      description: 'Eliminate compliance risks with complete audit trails that reduce legal review time by 62% and provide instant accountability for regulated industries.',
      icon: <GitBranch className="w-6 h-6" />,
    },
    {
      id: 'cms-integration',
      title: 'Plugs into your CMS or CRM directly',
      description: 'Seamlessly integrate with popular content management systems and CRMs to streamline your content publishing workflow.',
      icon: <Database className="w-6 h-6" />,
    },
  ];

  // Stats for "Why it matters" section
  const stats = [
    {
      id: 'time-saved',
      value: '75%',
      label: 'Time saved on content creation',
      description: 'Average reduction in time spent creating marketing materials',
    },
    {
      id: 'engagement',
      value: '3.4x',
      label: 'Higher engagement rates',
      description: 'Increase in engagement compared to manually created content',
    },
    {
      id: 'consistency',
      value: '98%',
      label: 'Brand consistency score',
      description: 'Average consistency rating across all generated content',
    },
  ];

  // Use case groups
  const useCaseGroups = [
    {
      title: 'Marketing Teams',
      users: ['Content Marketers', 'SEO Specialists', 'Campaign Managers'],
    },
    {
      title: 'Creative Agencies',
      users: ['Copywriters', 'Content Strategists', 'Agency Owners'],
    },
    {
      title: 'Business Size',
      users: ['SMBs', 'Mid-Market', 'Enterprise'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Homemaker | Publish 5X Faster with AI Content | idkhelpme</title>
        <meta
          name="description"
          content="Boost organic traffic by 137% with AI-generated content that stays on-brand. Publish 5x faster across all channels while maintaining your unique voice."
        />
      </Helmet>

      {/* Hero Section */}
      <ProductHero
        title="Homemaker"
        subtitle="REVENUE-DRIVING CONTENT PLATFORM"
        description="Publish 5x faster with AI-written content that adapts to your tone and brand across every channel — while boosting organic traffic by 137%."
        color="electric"
        icon={<Lightbulb className="w-40 h-40" />}
      />

      {/* Feature Section */}
      <FeatureSection
        title="Reduce content creation costs by 63% while boosting results"
        description="Our intelligent automation analyzes top-performing content in your industry and creates high-converting variations that outrank competitors on every platform."
        features={features}
        color="electric"
      />

      {/* Stats Section */}
      <StatSection
        title="Why leading brands choose Homemaker"
        stats={stats}
        color="electric"
      />

      {/* Trust Section */}
      <TrustSection
        title="Trusted by GTM teams worldwide"
        subtitle="From startups to enterprises, teams rely on Homemaker to power their content strategy"
        useCaseGroups={useCaseGroups}
        color="electric"
      />

      {/* Global CTA */}
      <GlobalCTA
        title="Ready to transform your content strategy?"
        description="Join leading companies using Homemaker to scale their content production with AI."
        primaryButtonText="Sign Up"
        primaryButtonLink="/signup"
        secondaryButtonText="Contact Sales"
        secondaryButtonLink="/contact"
        color="electric"
      />
    </>
  );
};

export default HomemakerProduct;