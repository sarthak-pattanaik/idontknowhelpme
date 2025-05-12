import { useState, useEffect } from "react";
import { Link } from "wouter";

const StickyFooterCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = document.querySelector('footer');
      if (!footer) return;
      
      const footerRect = footer.getBoundingClientRect();
      
      if (scrollY > 500 && footerRect.top > window.innerHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-4 px-4 hidden md:block z-40">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="font-medium text-gray-900 mr-4">Ready to get started?</span>
            <span className="text-gray-600">Try for free, no credit card required.</span>
          </div>
          <Link 
            href="#" 
            className="bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium px-6 py-2 rounded-lg hover:opacity-90 transition shadow-md"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StickyFooterCTA;
