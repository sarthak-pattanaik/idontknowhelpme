import { Link } from 'wouter';
import { useFormattedDate } from '@/lib/hooks';
import { motion } from 'framer-motion';

interface BlogCardProps {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

const BlogCard = ({ slug, title, excerpt, date, author, readTime, category }: BlogCardProps) => {
  const formattedDate = useFormattedDate(date);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-40 bg-gray-100 flex items-center justify-center">
        <div className="p-4 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-gray-200 text-sm font-medium text-gray-700 mb-2">
            {category}
          </div>
          <p className="text-gray-500 text-sm">{formattedDate}</p>
        </div>
      </div>
      <div className="p-6">
        <Link href={`/blog/${slug}`}>
          <a className="block">
            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
              {title}
            </h3>
          </a>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
              <i className="ri-user-3-line text-gray-500 text-sm"></i>
            </div>
            <span className="text-sm text-gray-700">{author}</span>
          </div>
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
