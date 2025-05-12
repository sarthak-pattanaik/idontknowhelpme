import { motion } from "framer-motion";

const useCases = [
  {
    title: "Founders",
    description: "Do more with less. Automate your go-to-market efforts without hiring a large team.",
    icon: "ri-user-star-line",
    gradientClass: "bg-gradient-to-r from-primary-600 to-accent-600",
    checkClass: "text-primary-500",
    features: [
      "Build your pipeline without an SDR team",
      "Create content that converts",
      "Focus on closing, not prospecting"
    ]
  },
  {
    title: "Growth Teams",
    description: "Scale your marketing and demand gen efforts with AI-powered tools.",
    icon: "ri-team-line",
    gradientClass: "bg-gradient-to-r from-accent-600 to-secondary-600",
    checkClass: "text-secondary-500",
    features: [
      "Produce 10x more content",
      "Identify high-intent prospects",
      "Optimize campaigns with real-time signals"
    ]
  },
  {
    title: "SDRs",
    description: "Spend less time on manual tasks and more time building relationships.",
    icon: "ri-customer-service-2-line",
    gradientClass: "bg-gradient-to-r from-primary-600 to-accent-600",
    checkClass: "text-accent-500",
    features: [
      "Generate personalized outreach at scale",
      "Focus on high-value, ready-to-buy leads",
      "Get real-time buy signals"
    ]
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

const UseCaseSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who It's For</h2>
          <p className="text-xl text-gray-600">Tailored solutions for every role in your go-to-market team</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
              variants={item}
            >
              <div className={`h-12 w-12 rounded-full ${useCase.gradientClass} flex items-center justify-center mb-4 text-white`}>
                <i className={`${useCase.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
              <p className="text-gray-600 mb-4">{useCase.description}</p>
              <ul className="space-y-2 mb-6">
                {useCase.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className={`ri-check-line ${useCase.checkClass} mt-1 mr-2`}></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSection;
