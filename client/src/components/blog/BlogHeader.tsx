import { Link } from 'wouter';
import { useFormattedDate } from '@/lib/hooks';
import { motion } from 'framer-motion';

interface BlogHeaderProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

const BlogHeader = ({ title, excerpt, date, author, readTime, category }: BlogHeaderProps) => {
  const formattedDate = useFormattedDate(date);

  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/blog">
          <a className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-2">
            <i className="ri-arrow-left-line mr-1"></i> Back to blog
          </a>
        </Link>
        <span className="block mt-2 mb-2 inline-block px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700">
          {category}
        </span>
      </motion.div>
      
      <motion.h1 
        className="text-3xl sm:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h1>
      
      <motion.p 
        className="text-xl text-gray-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {excerpt}
      </motion.p>
      
      <motion.div 
        className="flex items-center justify-center space-x-4 text-sm text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
            <i className="ri-user-3-line text-gray-500 text-sm"></i>
          </div>
          <span>{author}</span>
        </div>
        <span>|</span>
        <span>{formattedDate}</span>
        <span>|</span>
        <span>{readTime}</span>
      </motion.div>
    </div>
  );
};

export default BlogHeader;
