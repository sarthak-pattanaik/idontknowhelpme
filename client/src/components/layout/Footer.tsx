import { Link } from "wouter";
import GradientText from "@/components/common/GradientText";
import { motion } from "framer-motion";
import BrandLogo from "@/components/common/BrandLogo";

// SVG Background with abstract curves and waves
const FooterBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path 
        fill="url(#footer-gradient)" 
        fillOpacity="1" 
        d="M0,256L48,245.3C96,235,192,213,288,213.3C384,213,480,235,576,234.7C672,235,768,213,864,213.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
      <defs>
        <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative">
      <FooterBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid md:grid-cols-5 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="md:col-span-2" variants={itemVariants}>
            <div className="mb-4">
              <BrandLogo size="md" colorMode="dark" />
            </div>
            <p className="text-gray-400 mb-6">The modern toolkit for content, leads, outreach, and signals.</p>
            
            <div className="mb-6">
              <div className="inline-block bg-gray-800 rounded-md p-2">
                <p className="text-gray-300 text-sm mb-2">Join our newsletter</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-gray-700 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-500 text-sm flex-grow"
                  />
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-r-md text-sm transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {[
                { icon: "ri-twitter-x-line", color: "hover:text-blue-400" },
                { icon: "ri-linkedin-box-line", color: "hover:text-blue-500" },
                { icon: "ri-facebook-box-line", color: "hover:text-blue-600" },
                { icon: "ri-instagram-line", color: "hover:text-pink-500" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 text-gray-400 ${social.color} transition-all hover:scale-110`}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {[
            {
              title: "Products",
              links: [
                { label: "Homemaker", href: "/product/homemaker" },
                { label: "Intelligence", href: "/product/intelligence" },
                { label: "Snipper", href: "/product/snipper" },
                { label: "Signals", href: "/product/signals" }
              ]
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "#" }
              ]
            },
            {
              title: "Resources",
              links: [
                { label: "Documentation", href: "#" },
                { label: "Help Center", href: "#" },
                { label: "Guides", href: "#" },
                { label: "API", href: "#" }
              ]
            }
          ].map((section, sectionIndex) => (
            <motion.div key={sectionIndex} variants={itemVariants}>
              <h4 className="font-medium text-lg mb-4 pb-2 border-b border-gray-800">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex} whileHover={{ x: 3 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition flex items-center"
                    >
                      <span className="mr-2 text-xs text-primary-500">●</span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-gray-500">© {new Date().getFullYear()} idontknowhelpme. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 flex items-center justify-center sm:justify-start flex-wrap">
            {["Privacy", "Terms", "Cookies"].map((item, index) => (
              <Link 
                key={index}
                href="#" 
                className="text-gray-500 hover:text-gray-300 mx-3 sm:ml-6 transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
