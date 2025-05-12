import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "idontknowhelpme's content generation tools helped us increase our blog output by 300% while maintaining high quality standards.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFront Solutions",
  },
  {
    quote: "The lead scoring system is incredibly accurate. We've seen a 45% improvement in our sales conversion rates since implementing it.",
    author: "Michael Chang",
    role: "Sales Operations Manager",
    company: "GrowthWave",
  },
  {
    quote: "Their AI outreach tool crafts personalized emails that actually feel personal. Our open rates have doubled in just two months.",
    author: "Emma Rodriguez",
    role: "Customer Success Lead",
    company: "Vortex SaaS",
  },
  {
    quote: "The market signal tracking has given us invaluable insights into customer behavior patterns we couldn't see before.",
    author: "David Kim",
    role: "Chief Strategy Officer",
    company: "NexGen Analytics",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
            className="text-electric-600 font-semibold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            TRUSTED BY TEAMS WORLDWIDE
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Real results from real customers
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how teams are transforming their GTM strategies with our 
            AI-powered suite of tools.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['Netflix', 'Airbnb', 'Shopify', 'Stripe', 'Slack', 'Uber'].map((company, index) => (
                <div 
                  key={company} 
                  className="h-8 flex items-center justify-center"
                >
                  <span className="text-gray-400 font-semibold text-xl">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
    >
      {/* Quote mark */}
      <div className="text-electric-500 mb-4">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.33333 13.3333C11.1745 13.3333 12.6667 14.8255 12.6667 16.6667C12.6667 18.5079 11.1745 20 9.33333 20C7.49213 20 6 18.5079 6 16.6667C6 11.1438 10.4771 6.66666 16 6.66666V9.99999C12.3181 9.99999 9.33333 12.9848 9.33333 16.6667ZM22.6667 13.3333C24.5079 13.3333 26 14.8255 26 16.6667C26 18.5079 24.5079 20 22.6667 20C20.8255 20 19.3333 18.5079 19.3333 16.6667C19.3333 11.1438 23.8105 6.66666 29.3333 6.66666V9.99999C25.6514 9.99999 22.6667 12.9848 22.6667 16.6667Z" 
          fill="currentColor" />
        </svg>
      </div>

      {/* Quote text */}
      <p className="text-gray-700 font-medium mb-6 flex-grow">
        "{testimonial.quote}"
      </p>

      {/* Author info */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-electric-100 rounded-full flex items-center justify-center text-electric-500 font-bold mr-3">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;