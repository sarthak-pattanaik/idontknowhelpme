import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/home/Hero';
import ProductSuite from '@/components/home/ProductSuite';

// Import additional sections as they're built
// import TestimonialsSection from '@/components/home/TestimonialsSection';
// import WorkflowSection from '@/components/home/WorkflowSection';
// import UseCaseSection from '@/components/home/UseCaseSection';
// import CTASection from '@/components/home/CTASection';

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
      
      {/* Uncomment as these components are built */}
      {/* <WorkflowSection /> */}
      {/* <UseCaseSection /> */}
      {/* <TestimonialsSection /> */}
      {/* <CTASection /> */}
    </>
  );
};

export default Home;