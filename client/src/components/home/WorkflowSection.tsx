import { motion } from "framer-motion";
import { Link } from "wouter";

const steps = [
  {
    number: 1,
    title: "Create",
    description: "Generate engaging content that resonates with your audience",
    icon: "ri-edit-2-line",
    bgClass: "bg-primary-100",
    iconClass: "text-primary-600",
    gradientClass: "bg-gradient-to-r from-primary-600 to-accent-600"
  },
  {
    number: 2,
    title: "Qualify",
    description: "Score and enrich leads to identify the most promising opportunities",
    icon: "ri-user-search-line",
    bgClass: "bg-secondary-100",
    iconClass: "text-secondary-600",
    gradientClass: "bg-gradient-to-r from-accent-600 to-secondary-600"
  },
  {
    number: 3,
    title: "Automate",
    description: "Deploy personalized outreach at scale with minimal effort",
    icon: "ri-robot-line",
    bgClass: "bg-accent-100",
    iconClass: "text-accent-600",
    gradientClass: "bg-gradient-to-r from-primary-600 to-accent-600"
  },
  {
    number: 4,
    title: "Monitor",
    description: "Track engagement and behavior to identify buying signals",
    icon: "ri-radar-line",
    bgClass: "bg-green-100",
    iconClass: "text-green-600",
    gradientClass: "bg-gradient-to-r from-accent-600 to-secondary-600"
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

const WorkflowSection = () => {
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Streamlined Workflow</h2>
          <p className="text-xl text-gray-600">Our platform supports your entire GTM journey</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-4 gap-4 sm:gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {steps.map((step) => (
              <motion.div 
                key={step.number}
                className="bg-white rounded-xl shadow-md p-6 relative"
                variants={item}
              >
                <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full ${step.gradientClass} flex items-center justify-center text-white font-bold text-sm`}>
                  {step.number}
                </div>
                <div className={`h-12 w-12 rounded-full ${step.bgClass} flex items-center justify-center mb-4`}>
                  <i className={`${step.icon} ${step.iconClass} text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-16 p-6 bg-white rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row items-center">
              <div className="sm:w-1/2 mb-6 sm:mb-0 sm:mr-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">See the entire customer journey</h3>
                <p className="text-gray-600 mb-4">Our integrated platform connects each step of your go-to-market process, eliminating silos and providing complete visibility.</p>
                <Link href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700">
                  View demo <i className="ri-arrow-right-line ml-1"></i>
                </Link>
              </div>
              <div className="sm:w-1/2 bg-gray-100 rounded-lg p-4">
                <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                  <i className="ri-play-circle-line text-4xl text-gray-400"></i>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
