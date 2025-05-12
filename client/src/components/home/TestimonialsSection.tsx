import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    content: "We've 3x'd our content output while maintaining quality. Homemaker has been a game-changer for our blog strategy.",
    author: "Sarah Johnson",
    role: "CMO, GrowthTech",
    rating: 5
  },
  {
    id: 2,
    content: "Intelligence helped us identify the right leads and prioritize our outreach. Our conversion rate improved by 45% within weeks.",
    author: "Michael Chen",
    role: "Head of Sales, SaaS Solutions",
    rating: 5
  },
  {
    id: 3,
    content: "Snipper automated our cold outreach and improved response rates. Our SDRs can now focus on meaningful conversations rather than writing emails.",
    author: "Alex Rivera",
    role: "SDR Manager, Enterprise Cloud",
    rating: 4.5
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by Growth Leaders</h2>
          <p className="text-xl text-gray-600">See what our customers have to say about our platform</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              variants={item}
            >
              <div className="flex items-center mb-4">
                <div className="text-amber-400 flex">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <i key={i} className="ri-star-fill"></i>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <i className="ri-star-half-fill"></i>
                  )}
                </div>
              </div>
              <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                  <i className="ri-user-3-line text-gray-500"></i>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
