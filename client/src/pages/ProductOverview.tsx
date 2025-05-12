import { Link } from "wouter";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import GradientText from "@/components/common/GradientText";
import CTASection from "@/components/home/CTASection";
import { useEffect } from "react";

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

const ProductOverview = () => {
  useEffect(() => {
    document.title = "Product Suite | idontknowhelpme";
  }, []);
  
  return (
    <>
      <section className="pt-16 pb-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              The Complete <GradientText>GTM Platform</GradientText>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Four powerful AI products working together to supercharge your sales and marketing efforts
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap justify-center mb-8">
                {products.map((product) => (
                  <Link 
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="m-2 px-6 py-2 rounded-full bg-gray-100 text-gray-900 hover:bg-gray-200 transition"
                  >
                    #{product.title}
                  </Link>
                ))}
              </div>

              <div className="bg-gray-100 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Your Complete GTM Funnel</h2>
                
                <div className="relative py-10">
                  {/* Funnel visualization */}
                  <div className="h-[300px] mx-auto relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-t-lg flex items-center justify-center text-white font-bold">
                      Top of Funnel: Awareness
                    </div>
                    <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[70%] h-16 bg-gradient-to-r from-accent-600 to-secondary-600 flex items-center justify-center text-white font-bold">
                      Middle of Funnel: Consideration
                    </div>
                    <div className="absolute top-[160px] left-1/2 transform -translate-x-1/2 w-[60%] h-16 bg-gradient-to-r from-primary-600 to-accent-600 flex items-center justify-center text-white font-bold">
                      Bottom of Funnel: Decision
                    </div>
                    <div className="absolute top-[240px] left-1/2 transform -translate-x-1/2 w-[50%] h-16 bg-gradient-to-r from-accent-600 to-secondary-600 rounded-b-lg flex items-center justify-center text-white font-bold">
                      Retention & Growth
                    </div>
                    
                    {/* Product indicators */}
                    <div className="absolute top-0 right-[15%] -mt-2">
                      <div className="bg-white p-3 rounded-lg shadow-md">
                        <span className="font-bold text-primary-600">Homemaker</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-[80px] left-[15%] -mt-2">
                      <div className="bg-white p-3 rounded-lg shadow-md">
                        <span className="font-bold text-secondary-600">Intelligence</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-[160px] right-[15%] -mt-2">
                      <div className="bg-white p-3 rounded-lg shadow-md">
                        <span className="font-bold text-accent-600">Snipper</span>
                      </div>
                    </div>
                    
                    <div className="absolute top-[240px] left-[15%] -mt-2">
                      <div className="bg-white p-3 rounded-lg shadow-md">
                        <span className="font-bold text-green-600">Signals</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-8">How We Compare</h2>
          
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-gray-50 border-b"></th>
                  <th className="p-4 text-center bg-gray-50 border-b font-bold">
                    <span className="text-primary-600">idontknowhelpme</span>
                  </th>
                  <th className="p-4 text-center bg-gray-50 border-b">Jasper</th>
                  <th className="p-4 text-center bg-gray-50 border-b">Apollo</th>
                  <th className="p-4 text-center bg-gray-50 border-b">Clay</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b font-medium">Content AI</td>
                  <td className="p-4 border-b text-center text-green-600"><i className="ri-check-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-green-600"><i className="ri-check-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-red-500"><i className="ri-close-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-red-500"><i className="ri-close-line text-lg"></i></td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Lead Enrichment</td>
                  <td className="p-4 border-b text-center text-green-600"><i className="ri-check-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-red-500"><i className="ri-close-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-green-600"><i className="ri-check-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-green-600"><i className="ri-check-line text-lg"></i></td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Outreach Automation</td>
                  <td className="p-4 border-b text-center text-green-600"><i className="ri-check-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-red-500"><i className="ri-close-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-green-600"><i className="ri-check-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-red-500"><i className="ri-close-line text-lg"></i></td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Intent Tracking</td>
                  <td className="p-4 border-b text-center text-green-600"><i className="ri-check-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-red-500"><i className="ri-close-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-red-500"><i className="ri-close-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-red-500"><i className="ri-close-line text-lg"></i></td>
                </tr>
                <tr>
                  <td className="p-4 border-b font-medium">Integrated Platform</td>
                  <td className="p-4 border-b text-center text-green-600"><i className="ri-check-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-red-500"><i className="ri-close-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-red-500"><i className="ri-close-line text-lg"></i></td>
                  <td className="p-4 border-b text-center text-red-500"><i className="ri-close-line text-lg"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <motion.section 
        className="py-16 bg-gray-50"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Products</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                variants={item}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className={`h-2 ${product.id === 'homemaker' ? 'bg-primary-600' : 
                                      product.id === 'intelligence' ? 'bg-secondary-600' : 
                                      product.id === 'snipper' ? 'bg-accent-600' : 
                                      'bg-green-600'}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`h-12 w-12 rounded-lg ${product.colorClass.bg} flex items-center justify-center mr-4`}>
                      <i className={`${product.icon} ${product.colorClass.text} text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold">{product.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <Link 
                    href={`/product/${product.id}`}
                    className={`inline-block px-6 py-2 rounded-lg ${
                      product.id === 'homemaker' ? 'bg-primary-600' : 
                      product.id === 'intelligence' ? 'bg-secondary-600' : 
                      product.id === 'snipper' ? 'bg-accent-600' : 
                      'bg-green-600'
                    } text-white font-medium hover:opacity-90 transition`}
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      <CTASection />
    </>
  );
};

export default ProductOverview;
