import { useEffect } from 'react';
import { motion } from 'framer-motion';
import GradientText from '@/components/common/GradientText';
import TeamMember from '@/components/about/TeamMember';
import CTASection from '@/components/home/CTASection';
import { teamMembers, companyInfo } from '@/lib/data';

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

const About = () => {
  useEffect(() => {
    document.title = "About Us | idontknowhelpme";
  }, []);
  
  return (
    <>
      <section className="pt-16 pb-12 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6">
              Our <GradientText>Story</GradientText>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We're building the future of AI-powered go-to-market technology
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-8">
                  {companyInfo.mission}
                </p>
                <div className="flex items-center text-gray-700">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <i className="ri-calendar-line text-primary-600 text-xl"></i>
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Founded in</span>
                    <span className="font-bold">{companyInfo.founded}</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="bg-gray-100 rounded-xl p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  {companyInfo.vision}
                </p>
              </motion.div>
            </div>
            
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {companyInfo.values.map((value, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary-600 to-accent-600 flex items-center justify-center mb-4 text-white">
                      <i className={`ri-${index === 0 ? 'customer-service-2' : index === 1 ? 'rocket' : index === 2 ? 'tools' : 'shield-check'}-line text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {teamMembers.map((member, index) => (
                  <motion.div key={index} variants={item}>
                    <TeamMember
                      name={member.name}
                      role={member.role}
                      bio={member.bio}
                      image={member.image}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Join Our Team</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're always looking for talented individuals who are passionate about AI, sales, and marketing.
              If you're excited about transforming how businesses approach their go-to-market strategy, we'd love to hear from you.
            </p>
            <a 
              href="#" 
              className="inline-block bg-primary-600 text-white font-medium px-8 py-3 rounded-lg hover:bg-primary-700 transition"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default About;
