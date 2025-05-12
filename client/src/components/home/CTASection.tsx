import { Link } from "wouter";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to transform your go-to-market?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of teams already using our platform to supercharge their sales and marketing.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link 
              href="#" 
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium px-8 py-4 rounded-xl text-lg hover:opacity-90 transition shadow-lg shadow-primary-500/20"
            >
              Start Free Trial
            </Link>
            <Link 
              href="#" 
              className="bg-white text-gray-900 font-medium px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition"
            >
              Schedule Demo
            </Link>
          </div>
          <p className="text-gray-400">No credit card required. 14-day free trial.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
