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
      <div className={`h-16 w-16 rounded-lg ${colorClass.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
        <i className={`${icon} ${colorClass.text} text-2xl`}></i>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-6 flex-grow-0 min-h-[48px]">{description}</p>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <i className={`ri-check-line ${colorClass.check} mt-1 mr-2.5 text-lg`}></i>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        href={href}
        className={`inline-flex items-center font-medium ${colorClass.text} hover:opacity-90 mt-auto group-hover:underline`}
      >
        Learn more <i className="ri-arrow-right-line ml-1.5 transition-transform group-hover:translate-x-1"></i>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
