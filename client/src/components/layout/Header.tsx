import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import GradientText from "@/components/common/GradientText";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <motion.header 
      className={`sticky top-0 z-50 backdrop-blur-sm border-b ${scrolled ? 'bg-white/95 shadow-sm' : 'bg-white/90 border-gray-100'} transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center">
              <div className="flex items-center">
                <div className="h-8 w-8 relative mr-2 rounded-full bg-gradient-to-br from-primary-600 via-accent-500 to-secondary-600 flex items-center justify-center overflow-hidden">
                  <div className="absolute -left-2 -top-2 w-8 h-8 bg-white opacity-20 rounded-full"></div>
                  <span className="text-white font-bold text-lg">i</span>
                </div>
                <GradientText className="font-bold text-xl">dontknowhelpme</GradientText>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { href: "/product", label: "Products" },
              { href: "/pricing", label: "Pricing" },
              { href: "/blog", label: "Blog" },
              { href: "/about", label: "About" }
            ].map((item) => (
              <motion.div key={item.href} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link 
                  href={item.href} 
                  className={`${isActive(item.href) ? 'text-primary-600' : 'text-gray-700'} hover:text-primary-600 font-medium transition relative`}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 rounded-full"
                      layoutId="navIndicator"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
              <Link 
                href="#" 
                className="text-gray-700 hover:text-primary-600 font-medium transition"
              >
                Log in
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link 
                href="#" 
                className="bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium px-5 py-2.5 rounded-lg hover:shadow-md transition-all duration-300 border border-transparent hover:border-white/10"
              >
                Start Free
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl transition-transform duration-300`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-gray-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/product"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/pricing"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-2 space-y-1">
                <Link
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:opacity-90"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
