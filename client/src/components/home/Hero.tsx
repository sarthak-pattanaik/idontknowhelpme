import { Link } from "wouter";
import GradientText from "@/components/common/GradientText";
import { motion } from "framer-motion";

// Background abstract curves SVG component
const BackgroundCurves = () => (
  <motion.div 
    className="absolute inset-0 overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.07 }}
    transition={{ duration: 1.5 }}
  >
    <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        d="M-301.5 475.5C-73.5 315.5 301.5 543.5 579 317.5C856.5 91.5 1138 -111 1323 86.9999C1508 285 1720 698.5 1437 789C1154 879.5 1220.5 552 1027 650.5C833.5 749 481 836.5 247 650.5C13 464.5 -69.5 858 -301.5 475.5Z" 
        fill="url(#paint0_linear)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path 
        d="M1740.5 624.5C1512.5 784.5 1137.5 556.5 860 782.5C582.5 1008.5 301 1211 116 1013C-69 815 -281 401.5 2 311C285 220.5 218.5 548 412 449.5C605.5 351 958 263.5 1192 449.5C1426 635.5 1508.5 242 1740.5 624.5Z" 
        fill="url(#paint1_linear)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="1440" y1="900" x2="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
      </defs>
    </svg>
  </motion.div>
);

// Floating elements for visual interest
const FloatingElements = () => {
  const floatingVariants = {
    animate1: {
      y: [0, -15, 0],
      scale: [1, 1.05, 1],
      transition: {
        repeat: Infinity,
        duration: 5,
        ease: "easeInOut"
      }
    },
    animate2: {
      y: [0, 20, 0],
      scale: [1, 1.08, 1],
      transition: {
        repeat: Infinity,
        duration: 7,
        ease: "easeInOut",
        delay: 1
      }
    },
    animate3: {
      y: [0, -25, 0],
      scale: [1, 1.1, 1],
      transition: {
        repeat: Infinity,
        duration: 6,
        ease: "easeInOut",
        delay: 2
      }
    }
  };

  return (
    <>
      <motion.div 
        className="absolute top-20 right-[10%] h-12 w-12 rounded-full bg-primary-100 opacity-60"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.8 }}
        variants={floatingVariants}
        whileInView="animate1"
        viewport={{ once: false }}
      />
      <motion.div 
        className="absolute bottom-40 left-[5%] h-20 w-20 rounded-full bg-accent-100 opacity-60"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        variants={floatingVariants}
        whileInView="animate2"
        viewport={{ once: false }}
      />
      <motion.div 
        className="absolute top-1/2 right-[15%] h-16 w-16 rounded-full bg-secondary-100 opacity-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        variants={floatingVariants}
        whileInView="animate3"
        viewport={{ once: false }}
      />
    </>
  );
};

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(124, 58, 237, 0.15)" },
    tap: { scale: 0.98 }
  };

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 opacity-40"></div>
      <BackgroundCurves />
      <FloatingElements />
      
      {/* Decorative accent circles */}
      <div className="absolute top-20 left-[5%] h-64 w-64 rounded-full bg-primary-600/5 blur-2xl"></div>
      <div className="absolute bottom-20 right-[5%] h-96 w-96 rounded-full bg-accent-600/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-primary-100"
            variants={itemVariants}
          >
            <span className="text-primary-700 font-medium text-sm flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
              New: Introducing idontknowhelpme 2.0 — Enhanced AI capabilities
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6"
            variants={itemVariants}
          >
            <span className="block mb-2">AI that builds your <span className="relative">
              pipeline
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" preserveAspectRatio="none">
                <motion.path 
                  d="M3,9 C50,5 100,1 150,9 C200,12 250,9 297,6" 
                  stroke="url(#text-underline)" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
                <defs>
                  <linearGradient id="text-underline" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </svg>
            </span>.</span>
            <GradientText className="block relative">
              <motion.span
                className="inline-block"
                variants={itemVariants}
              >
                And drives your momentum.
              </motion.span>
              <motion.div 
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-60"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
              />
            </GradientText>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-700 mb-6"
            variants={itemVariants}
          >
            The modern AI toolkit to enhance your content creation, lead generation, 
            outreach campaigns, and market signal analysis.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-10"
            variants={itemVariants}
          >
            {["Advanced ML Models", "Time-Saving Automation", "Personalized Results", "Actionable Insights"].map((feature, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                <svg className="w-4 h-4 mr-1 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </span>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Link 
                href="#" 
                className="bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium px-8 py-4 rounded-xl text-lg hover:shadow-lg transition-all duration-300 shadow-lg shadow-primary-500/20 border border-transparent hover:border-white/10 inline-block"
              >
                Start Free Trial
              </Link>
            </motion.div>
            
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Link 
                href="#products" 
                className="bg-white text-gray-800 font-medium px-8 py-4 rounded-xl text-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300 shadow-sm inline-block"
              >
                Explore Platform
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 sm:mt-24 max-w-5xl mx-auto rounded-2xl bg-white p-4 shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-30"></div>
          <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-br from-accent-200 to-secondary-200 rounded-full opacity-30"></div>
          
          <div className="aspect-[16/9] rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center relative">
            {/* Gridlines for depth */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-5">
              {Array.from({ length: 13 }).map((_, i) => (
                <div key={`col-${i}`} className="absolute h-full w-px bg-gray-900" style={{ left: `${(i / 12) * 100}%` }}></div>
              ))}
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={`row-${i}`} className="absolute w-full h-px bg-gray-900" style={{ top: `${(i / 6) * 100}%` }}></div>
              ))}
            </div>
            
            <div className="p-8 text-center relative z-10">
              <motion.div 
                className="bg-gradient-to-r from-primary-600 to-accent-600 inline-flex items-center justify-center rounded-full p-3 mb-4"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <i className="ri-rocket-2-fill text-white text-2xl"></i>
              </motion.div>
              
              <motion.h2 
                className="text-2xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Complete GTM AI Platform
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                Transform your sales and marketing operations with our AI-powered suite
              </motion.p>
              
              <motion.div 
                className="w-full h-10 bg-gray-200 rounded-full relative overflow-hidden"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <motion.div 
                  className="absolute inset-0 h-full bg-gradient-to-r from-primary-600 to-accent-600 flex items-center px-4"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 1.8, ease: "easeInOut" }}
                >
                  <span className="text-white text-sm font-medium">Automating your workflow...</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
