import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const TeamMember = ({ name, role, bio, image }: TeamMemberProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <div className="h-20 w-20 rounded-full bg-gray-300 flex items-center justify-center">
          <i className="ri-user-3-line text-gray-500 text-2xl"></i>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary-600 font-medium mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
        <div className="mt-4 flex space-x-3">
          <a 
            href="#" 
            className="text-gray-400 hover:text-blue-600 transition-colors"
            aria-label={`${name}'s LinkedIn profile`}
          >
            <i className="ri-linkedin-box-line text-xl"></i>
          </a>
          <a 
            href="#" 
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label={`${name}'s Twitter profile`}
          >
            <i className="ri-twitter-x-line text-xl"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
