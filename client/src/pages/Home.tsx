import Hero from "@/components/home/Hero";
import ProductSuite from "@/components/home/ProductSuite";
import WorkflowSection from "@/components/home/WorkflowSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import UseCaseSection from "@/components/home/UseCaseSection";
import CTASection from "@/components/home/CTASection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "idontknowhelpme | AI GTM Platform";
  }, []);
  
  return (
    <>
      <Hero />
      <ProductSuite />
      <WorkflowSection />
      <TestimonialsSection />
      <UseCaseSection />
      <CTASection />
    </>
  );
};

export default Home;
