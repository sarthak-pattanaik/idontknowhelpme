import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/components/blog/BlogCard';
import GradientText from '@/components/common/GradientText';
import { blogPosts } from '@/lib/data';
import { useFilteredList } from '@/lib/hooks';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  useEffect(() => {
    document.title = "Blog | idontknowhelpme";
  }, []);

  // Extract unique categories from blog posts
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  // Filter function for the custom hook
  const filterBlogPosts = (post: typeof blogPosts[0], term: string) => {
    return (
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term) ||
      post.author.toLowerCase().includes(term) ||
      post.category.toLowerCase().includes(term)
    );
  };

  // Use the custom hook for filtering by search term
  const filteredBySearch = useFilteredList(blogPosts, searchTerm, filterBlogPosts);
  
  // Further filter by category if one is selected
  const filteredPosts = selectedCategory === 'All'
    ? filteredBySearch
    : filteredBySearch.filter(post => post.category === selectedCategory);

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
              Our <GradientText>Blog</GradientText>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Insights, tips, and strategies to help you optimize your go-to-market efforts
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Search and filter */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-auto">
                <input
                  type="text"
                  className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="ri-search-line"></i>
                </div>
              </div>
            </div>

            {/* Blog posts grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <BlogCard
                    key={post.id}
                    id={post.id}
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    author={post.author}
                    readTime={post.readTime}
                    category={post.category}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <i className="ri-file-search-line text-5xl text-gray-300 mb-4"></i>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  className="mt-4 text-primary-600 hover:text-primary-700 font-medium flex items-center justify-center mx-auto"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                >
                  <i className="ri-refresh-line mr-1"></i> Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
