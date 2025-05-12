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
      description: 'Create high-converting landing pages with built-in search optimization to attract more organic traffic and improve conversions.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      id: 'brand-tone',
      title: 'Maintain brand tone across campaigns',
      description: 'Ensure consistent brand voice and messaging across all marketing channels and content types with intelligent tone preservation.',
      icon: <Edit className="w-6 h-6" />,
    },
    {
      id: 'multi-format',
      title: 'Support for multi-format outputs',
      description: 'Generate content optimized for blogs, social media, ads, email, and more—all from a single brief or input.',
      icon: <Layers className="w-6 h-6" />,
    },
    {
      id: 'collab-editing',
      title: 'Collaborative editing support for teams',
      description: 'Enable multiple team members to work together seamlessly on content with real-time collaboration tools and approval workflows.',
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      id: 'version-control',
      title: 'Audit trail & version control',
      description: 'Track all changes with a comprehensive version history and audit trail to ensure compliance and quality control.',
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
        <title>Homemaker | AI-Powered Content Generation | idontknowhelpme</title>
        <meta
          name="description"
          content="Create high-quality, on-brand content at scale with Homemaker, the AI-powered content generation platform for marketing teams."
        />
      </Helmet>

      {/* Hero Section */}
      <ProductHero
        title="Homemaker"
        subtitle="AI-POWERED CONTENT GENERATION"
        description="Create high-quality, on-brand content at scale for websites, blogs, and marketing materials—10x faster than manual methods."
        color="electric"
        icon={<Lightbulb className="w-40 h-40" />}
      />

      {/* Feature Section */}
      <FeatureSection
        title="AI content that works as hard as you do"
        description="Generate comprehensive, search-optimized content with a few clicks, while maintaining your brand voice and quality standards."
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
        primaryButtonText="Contact Sales"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Platform"
        secondaryButtonLink="/platform"
        color="electric"
      />
    </>
  );
};

export default HomemakerProduct;