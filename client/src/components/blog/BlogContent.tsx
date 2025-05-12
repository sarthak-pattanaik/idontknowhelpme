import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useReadingProgress } from '@/lib/hooks';
import ReactMarkdown from 'react-markdown';

interface BlogContentProps {
  content: string;
}

const BlogContent = ({ content }: BlogContentProps) => {
  const readingProgress = useReadingProgress();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Reading progress bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary-600 to-accent-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      <motion.div 
        className="prose prose-lg max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
            h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
            p: ({ node, ...props }) => <p className="my-4 text-gray-700" {...props} />,
            ul: ({ node, ...props }) => <ul className="my-4 list-disc pl-6" {...props} />,
            ol: ({ node, ...props }) => <ol className="my-4 list-decimal pl-6" {...props} />,
            li: ({ node, ...props }) => <li className="my-1" {...props} />,
            blockquote: ({ node, ...props }) => (
              <blockquote className="pl-4 border-l-4 border-gray-200 italic my-4 text-gray-600" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="text-primary-600 hover:text-primary-700 underline" {...props} />
            ),
            code: ({ node, ...props }) => (
              <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm" {...props} />
            ),
            pre: ({ node, ...props }) => (
              <pre className="bg-gray-100 rounded p-4 overflow-x-auto my-4 font-mono text-sm" {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </motion.div>

      <div className="max-w-3xl mx-auto mt-12 pt-6 border-t border-gray-200">
        <h3 className="text-xl font-bold mb-4">Share this article</h3>
        <div className="flex space-x-4">
          <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            <i className="ri-twitter-x-line"></i>
          </button>
          <button className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-900">
            <i className="ri-linkedin-box-line"></i>
          </button>
          <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            <i className="ri-facebook-box-line"></i>
          </button>
          <button className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-800">
            <i className="ri-mail-line"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
