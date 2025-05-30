import React from 'react';
import { Helmet } from 'react-helmet';
import { Send, MessageSquare, GitMerge, FileText, Clock, Share2 } from 'lucide-react';

import ProductHero from '@/components/product/ProductHero';
import FeatureSection from '@/components/product/FeatureSection';
import TrustSection from '@/components/product/TrustSection';
import StatSection from '@/components/product/StatSection';
import GlobalCTA from '@/components/product/GlobalCTA';

const SniperProduct: React.FC = () => {
  // Product features
  const features = [
    {
      id: 'personalized-email',
      title: 'Auto-personalized outbound email copy',
      description: 'Create highly personalized email templates that dynamically adjust to each recipient, drastically improving open and response rates.',
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      id: 'call-scripts',
      title: 'Call script generation with role-based tonality',
      description: 'Generate natural-sounding call scripts tailored to specific roles and industries, helping sales teams connect more effectively.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      id: 'follow-up',
      title: 'Context-aware follow-up sequencing',
      description: 'Automatically generate intelligent follow-up messages based on previous interactions and prospect behavior patterns.',
      icon: <GitMerge className="w-6 h-6" />,
    },
    {
      id: 'crm-tokens',
      title: 'Field-merging with CRM tokens',
      description: 'Seamlessly incorporate prospect data from your CRM into your outreach with intelligent token handling and fallback options.',
      icon: <Send className="w-6 h-6" />,
    },
    {
      id: 'send-time',
      title: 'Smart send-time optimization',
      description: 'Use AI to determine the optimal time to send messages to each prospect, maximizing open rates and engagement metrics.',
      icon: <Clock className="w-6 h-6" />,
    },
    {
      id: 'export',
      title: 'One-click export to outreach platforms',
      description: 'Export generated emails and sequences directly to popular sales outreach platforms with a single click.',
      icon: <Share2 className="w-6 h-6" />,
    },
  ];

  // Stats for "Why it matters" section
  const stats = [
    {
      id: 'response-rate',
      value: '3.8x',
      label: 'Increased engagement',
      description: 'Average lift in prospect replies and positive responses',
    },
    {
      id: 'messaging-time',
      value: '82%',
      label: 'Sales productivity gain',
      description: 'Reps produce 5x more personalized outreach in the same time',
    },
    {
      id: 'meetings-booked',
      value: '58%',
      label: 'Pipeline acceleration',
      description: 'Average reduction in time from first touch to qualified meeting',
    },
  ];

  // Use case groups
  const useCaseGroups = [
    {
      title: 'Sales Teams',
      users: ['BDRs/SDRs', 'Account Executives', 'Inside Sales'],
    },
    {
      title: 'Go-to-Market Teams',
      users: ['Sales Enablement', 'Sales Operations', 'RevOps Leaders'],
    },
    {
      title: 'Industry Focus',
      users: ['SaaS', 'Professional Services', 'Enterprise Tech'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sniper | AI-Powered Outreach | idkhelpme</title>
        <meta
          name="description"
          content="Increase your response rates and book more meetings with Sniper, the AI-powered platform for highly personalized sales outreach at scale."
        />
      </Helmet>

      {/* Hero Section */}
      <ProductHero
        title="Sniper"
        subtitle="AI-POWERED OUTREACH"
        description="Create highly personalized sales communications that drive engagement and response rates across email, calls, and social."
        color="neon"
        icon={<Send className="w-40 h-40" />}
      />

      {/* Feature Section */}
      <FeatureSection
        title="Personalized outreach at scale"
        description="Craft tailored messages for every prospect that sound like they were written just for them—all generated in seconds."
        features={features}
        color="neon"
      />

      {/* Stats Section */}
      <StatSection
        title="Why leading sales teams choose Sniper"
        stats={stats}
        color="neon"
      />

      {/* Trust Section */}
      <TrustSection
        title="6,450+ Top SDR Teams Choose Sniper"
        subtitle="Companies using our AI outreach platform average 68% faster response times and 3.8x higher conversion to meetings"
        useCaseGroups={useCaseGroups}
        color="neon"
      />

      {/* Global CTA */}
      <GlobalCTA
        title="Want to book 3.8x more meetings from the same effort?"
        description="Our 14-day free trial includes 500 AI-generated messages. No credit card required - see results first."
        primaryButtonText="Start Free Trial"
        primaryButtonLink="/signup"
        secondaryButtonText="Watch 3-Minute Demo"
        secondaryButtonLink="/demo"
        color="neon"
      />
    </>
  );
};

export default SniperProduct;