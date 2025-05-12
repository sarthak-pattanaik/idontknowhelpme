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
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">All-in-one GTM AI Platform</h2>
          <p className="text-xl text-gray-600">Four powerful tools to supercharge your sales and marketing efforts</p>
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
