import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import FAQItem from "@/components/common/FAQItem";

const pricingPlans = [
  {
    name: "Free",
    description: "Get started with the basics",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      { text: "1 product (Homemaker)", included: true },
      { text: "10 content generations/month", included: true },
      { text: "Basic analytics", included: true },
      { text: "Lead enrichment", included: false },
      { text: "Advanced automation", included: false }
    ],
    cta: "Start Free",
    ctaLink: "#",
    ctaStyle: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50",
    highlight: false
  },
  {
    name: "Pro",
    description: "Perfect for growing teams",
    monthlyPrice: 99,
    annualPrice: 79,
    annualSavings: 240,
    features: [
      { text: "All 4 products", included: true },
      { text: "Unlimited content generation", included: true },
      { text: "500 lead enrichments/month", included: true },
      { text: "Email & Linkedin automation", included: true },
      { text: "Advanced analytics", included: true }
    ],
    cta: "Start Pro Trial",
    ctaLink: "#",
    ctaStyle: "bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:opacity-90",
    highlight: true
  },
  {
    name: "Scale",
    description: "For high-growth companies",
    monthlyPrice: 299,
    annualPrice: 239,
    annualSavings: 720,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "Unlimited lead enrichment", included: true },
      { text: "Custom integrations", included: true },
      { text: "Dedicated success manager", included: true },
      { text: "Priority support", included: true }
    ],
    cta: "Contact Sales",
    ctaLink: "#",
    ctaStyle: "bg-gray-900 text-white hover:bg-gray-800",
    highlight: false
  }
];

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Our free trial gives you full access to all Pro features for 14 days. No credit card required to start."
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
  },
  {
    question: "Do you offer a discount for startups?",
    answer: "Yes, we offer special pricing for early-stage startups. Contact our sales team for more information."
  }
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that's right for your business</p>
          
          <div className="inline-flex items-center p-1 mt-8 bg-gray-100 rounded-lg">
            <button 
              className={`py-2 px-4 rounded-md ${billingCycle === 'monthly' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-700'} font-medium`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`py-2 px-4 rounded-md ${billingCycle === 'annual' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-700'} font-medium`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual (20% off)
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-xl ${plan.highlight ? 'border-2 border-primary-500 relative transform scale-105 shadow-lg' : 'border border-gray-200'} overflow-hidden hover:shadow-lg transition`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.highlight && (
                <div className="absolute top-0 w-full text-center bg-primary-500 text-white py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className={`p-6 ${plan.highlight ? 'pt-10' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-6">
                  {billingCycle === 'monthly' ? (
                    <div>
                      <span className="text-4xl font-bold text-gray-900">${plan.monthlyPrice}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-4xl font-bold text-gray-900">${plan.annualPrice}</span>
                      <span className="text-gray-500">/month</span>
                      {plan.annualSavings && (
                        <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          Save ${plan.annualSavings}/year
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start ${!feature.included ? 'opacity-50' : ''}`}>
                      {feature.included ? (
                        <i className="ri-check-line text-green-500 mt-1 mr-2"></i>
                      ) : (
                        <i className="ri-close-line text-red-500 mt-1 mr-2"></i>
                      )}
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <Link 
                  href={plan.ctaLink} 
                  className={`block w-full py-3 px-4 ${plan.ctaStyle} rounded-lg text-center font-medium transition`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="max-w-3xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
