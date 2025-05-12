import { Link } from "wouter";
import { motion } from "framer-motion";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data";

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

const ProductSuite = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-50 to-transparent opacity-70"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-primary-100 opacity-50"></div>
      <div className="absolute top-32 -left-16 w-48 h-48 rounded-full bg-accent-100 opacity-40"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-primary-100 text-primary-700 text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">Our Products</span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600">All-in-one GTM AI Platform</h2>
          <p className="text-xl text-gray-700">Four powerful tools to supercharge your sales and marketing efforts</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item} className="h-full">
              <ProductCard 
                icon={product.icon} 
                title={product.title} 
                description={product.description}
                features={product.features}
                colorClass={product.colorClass}
                href={`/product/${product.id}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSuite;
