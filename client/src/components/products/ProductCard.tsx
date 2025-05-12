import { Link } from "wouter";
import { motion } from "framer-motion";

interface ProductCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  colorClass: {
    bg: string;
    text: string;
    check: string;
  };
  href: string;
}

const ProductCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  colorClass, 
  href 
}: ProductCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition duration-300 group h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`h-14 w-14 rounded-full ${colorClass.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
        <i className={`${icon} ${colorClass.text} text-xl`}></i>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-6 flex-grow-0 min-h-[48px]">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`flex-shrink-0 w-5 h-5 rounded-full ${colorClass.bg} flex items-center justify-center mr-3`}>
              <i className={`ri-check-line text-white text-xs`}></i>
            </span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        href={href}
        className={`inline-flex items-center justify-center font-medium text-white py-2 px-4 rounded-full bg-gradient-to-r ${
          title === "Homemaker" ? "from-primary-500 to-primary-600" :
          title === "Intelligence" ? "from-secondary-500 to-secondary-600" :
          title === "Snipper" ? "from-accent-500 to-accent-600" :
          "from-green-500 to-green-600"
        } hover:shadow-md transition-all mt-auto`}
      >
        Learn more <i className="ri-arrow-right-line ml-1.5 transition-transform group-hover:translate-x-1"></i>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
