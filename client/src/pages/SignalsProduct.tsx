import React from 'react';
import { Helmet } from 'react-helmet';
import { Activity, LinkedinIcon, Mail, Chrome, BarChart, BellRing } from 'lucide-react';

import ProductHero from '@/components/product/ProductHero';
import FeatureSection from '@/components/product/FeatureSection';
import TrustSection from '@/components/product/TrustSection';
import StatSection from '@/components/product/StatSection';
import GlobalCTA from '@/components/product/GlobalCTA';

const SignalsProduct: React.FC = () => {
  // Product features
  const features = [
    {
      id: 'linkedin-activity',
      title: 'Real-time LinkedIn activity overlays',
      description: 'Track prospect engagement with your LinkedIn content and company page to identify buying intent signals.',
      icon: <LinkedinIcon className="w-6 h-6" />,
    },
    {
      id: 'email-website',
      title: 'Email open + website visit signal detection',
      description: 'Monitor email interactions and website visits to identify which prospects are actively engaging with your brand.',
      icon: <Mail className="w-6 h-6" />,
    },
    {
      id: 'chrome-extension',
      title: 'Chrome extension for SDR workflow',
      description: 'Get real-time buying signals directly in your browser as you research and interact with prospects.',
      icon: <Chrome className="w-6 h-6" />,
    },
    {
      id: 'lead-scoring',
      title: 'Lead scoring boosted by real-world activity',
      description: 'Enhance your lead scoring model with actual prospect behaviors and engagement signals.',
      icon: <BarChart className="w-6 h-6" />,
    },
    {
      id: 'push-alerts',
      title: 'Push alerts in Slack or Email',
      description: 'Receive instant notifications when high-value prospects show buying intent so you can strike while the iron is hot.',
      icon: <BellRing className="w-6 h-6" />,
    },
    {
      id: 'signal-timeline',
      title: 'Unified signal timeline per lead',
      description: 'View a comprehensive history of all buying signals for each prospect to identify patterns and trends over time.',
      icon: <Activity className="w-6 h-6" />,
    },
  ];

  // Stats for "Why it matters" section
  const stats = [
    {
      id: 'opportunity-prediction',
      value: '93%',
      label: 'Buying intent detection',
      description: 'Proven accuracy rate identifying active prospects before competitors',
    },
    {
      id: 'deal-cycle',
      value: '37%',
      label: 'Accelerated revenue cycle',
      description: 'Average reduction in days from opportunity to closed-won',
    },
    {
      id: 'win-rate',
      value: '2.4x',
      label: 'Deal conversion impact',
      description: 'Average improvement in win rates by targeting intent-active accounts',
    },
  ];

  // Use case groups
  const useCaseGroups = [
    {
      title: 'Sales Teams',
      users: ['SDRs', 'Account Executives', 'Sales Leaders'],
    },
    {
      title: 'Marketing Teams',
      users: ['Demand Gen', 'Digital Marketing', 'ABM Specialists'],
    },
    {
      title: 'Industry Focus',
      users: ['B2B SaaS', 'Technology', 'Professional Services'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Signals | Buyer Intent Tracking | idontknowhelpme</title>
        <meta
          name="description"
          content="Identify prospects ready to buy with Signals, our AI-powered buyer intent tracking platform that monitors digital body language."
        />
      </Helmet>

      {/* Hero Section */}
      <ProductHero
        title="Signals"
        subtitle="BUYER INTENT TRACKING"
        description="Identify when prospects are ready to buy by monitoring digital body language and tracking real-time buying signals."
        color="gray"
        icon={<Activity className="w-40 h-40" />}
      />

      {/* Feature Section */}
      <FeatureSection
        title="Know exactly when prospects are ready to buy"
        description="Monitor prospect behavior across email, website, and social platforms to identify buying signals and engage at the perfect moment."
        features={features}
        color="gray"
      />

      {/* Stats Section */}
      <StatSection
        title="Why sales leaders choose Signals"
        stats={stats}
        color="gray"
      />

      {/* Trust Section */}
      <TrustSection
        title="4,800+ Revenue Teams Depend on Signals for Pipeline Growth"
        subtitle="Companies using our buyer intent platform report finding 2.7x more active buying opportunities and 37% faster deal cycles"
        useCaseGroups={useCaseGroups}
        color="gray"
      />

      {/* Global CTA */}
      <GlobalCTA
        title="Ready to identify your hottest prospects?"
        description="Join hundreds of revenue teams using Signals to detect buying intent and close more deals."
        primaryButtonText="Contact Sales"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Platform"
        secondaryButtonLink="/platform"
        color="gray"
      />
    </>
  );
};

export default SignalsProduct;