import { useEffect } from 'react';
import { useRoute } from 'wouter';
import { motion } from 'framer-motion';
import BlogHeader from '@/components/blog/BlogHeader';
import BlogContent from '@/components/blog/BlogContent';
import CTASection from '@/components/home/CTASection';
import { blogPosts } from '@/lib/data';

const BlogPost = () => {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug;
  
  const post = blogPosts.find(post => post.slug === slug);
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | idontknowhelpme Blog`;
    } else {
      document.title = "Blog Post Not Found | idontknowhelpme";
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post]);
  
  if (!post) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <i className="ri-file-damage-line text-5xl text-gray-300 mb-4"></i>
          <h1 className="text-2xl font-bold text-gray-700 mb-2">Blog Post Not Found</h1>
          <p className="text-gray-500 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <a 
            href="/blog" 
            className="bg-primary-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-primary-700 transition"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <section className="pt-16 pb-12 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlogHeader 
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            author={post.author}
            readTime={post.readTime}
            category={post.category}
          />
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlogContent content={post.content} />
          
          {/* Related Posts */}
          <div className="max-w-5xl mx-auto mt-20">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map(relatedPost => (
                  <motion.div 
                    key={relatedPost.id}
                    className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a href={`/blog/${relatedPost.slug}`} className="block">
                      <h3 className="font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{relatedPost.author} • {relatedPost.readTime}</p>
                    </a>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
};

export default BlogPost;
