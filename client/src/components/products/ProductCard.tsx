import { Link } from "wouter";

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
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition duration-300 group">
      <div className={`h-12 w-12 rounded-lg ${colorClass.bg} flex items-center justify-center mb-4 group-hover:bg-opacity-75 transition`}>
        <i className={`${icon} ${colorClass.text} text-2xl`}></i>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <i className={`ri-check-line ${colorClass.check} mt-1 mr-2`}></i>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        href={href}
        className={`inline-flex items-center font-medium ${colorClass.text} hover:opacity-90`}
      >
        Learn more <i className="ri-arrow-right-line ml-1"></i>
      </Link>
    </div>
  );
};

export default ProductCard;
