import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/home/Hero';
import ProductSuite from '@/components/home/ProductSuite';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import FunnelSection from '@/components/home/FunnelSection';

// Import additional sections as they're built
// import UseCaseSection from '@/components/home/UseCaseSection';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>idontknowhelpme | AI-powered GTM Suite</title>
        <meta
          name="description"
          content="The modern AI toolkit to enhance your content creation, lead generation, outreach campaigns, and market signal analysis."
        />
        <meta property="og:title" content="idontknowhelpme | AI-powered GTM Suite" />
        <meta
          property="og:description"
          content="The modern AI toolkit for GTM teams with AI content creation, lead scoring, outreach campaigns and market signals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://idontknowhelpme.ai" />
      </Helmet>

      <Hero />
      <ProductSuite />
      <FunnelSection />
      <TestimonialsSection />
      <CTASection />
      
      {/* Uncomment as these components are built */}
      {/* <UseCaseSection /> */}
    </>
  );
};

export default Home;