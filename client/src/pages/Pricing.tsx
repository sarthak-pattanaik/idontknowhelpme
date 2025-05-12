import { useEffect } from "react";
import PricingSection from "@/components/pricing/PricingSection";
import CTASection from "@/components/home/CTASection";
import GradientText from "@/components/common/GradientText";
import { motion } from "framer-motion";

const Pricing = () => {
  useEffect(() => {
    document.title = "Pricing | idontknowhelpme";
  }, []);
  
  return (
    <>
      <section className="pt-16 pb-8 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              Simple <GradientText>Pricing</GradientText> for Growing Teams
            </h1>
            <p className="text-xl text-gray-700">
              Choose the plan that's right for your business and scale as you grow.
            </p>
          </motion.div>
        </div>
      </section>

      <PricingSection />
      <CTASection />
    </>
  );
};

export default Pricing;
