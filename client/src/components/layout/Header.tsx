import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

type NavLink = {
  name: string;
  path: string;
};

const Header: React.FC = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation links
  const navLinks: NavLink[] = [
    { name: 'Products', path: '/product' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  // Product dropdown items
  const productItems = [
    { name: 'Homemaker', path: '/product/homemaker', description: 'AI-powered content generation' },
    { name: 'Intelligence', path: '/product/intelligence', description: 'Smart lead scoring and enrichment' },
    { name: 'Snipper', path: '/product/snipper', description: 'AI-assisted outreach campaigns' },
    { name: 'Signals', path: '/product/signals', description: 'Market signal tracking' },
  ];

  // Check if header should be transparent
  const isHome = location === '/';

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine header background styles
  const headerBg = isHome && !isScrolled && !isMenuOpen 
    ? 'bg-transparent' 
    : 'bg-white/95 backdrop-blur-sm shadow-sm';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8 rounded-lg bg-electric-500 flex items-center justify-center mr-2">
              <span className="text-white text-lg font-bold">i</span>
            </div>
            <span className="text-lg font-bold text-gray-900">idontknowhelpme</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location === link.path
                    ? 'text-electric-600 bg-electric-50'
                    : 'text-gray-700 hover:text-electric-600 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button href="/login" variant="ghost" size="sm">
              Log in
            </Button>
            <Button href="/signup" variant="primary" size="sm">
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-electric-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-electric-500"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location === link.path
                      ? 'text-electric-600 bg-electric-50'
                      : 'text-gray-700 hover:text-electric-600 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <Button href="/login" variant="ghost" fullWidth className="mr-2">
                    Log in
                  </Button>
                  <Button href="/signup" variant="primary" fullWidth>
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;