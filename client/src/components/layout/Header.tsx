import { useState } from "react";
import { Link, useLocation } from "wouter";
import GradientText from "@/components/common/GradientText";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center font-bold text-xl">
              <GradientText>idontknowhelpme</GradientText>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/product" 
              className={`${isActive('/product') ? 'text-primary-600' : 'text-gray-700'} hover:text-primary-600 font-medium transition`}
            >
              Products
            </Link>
            <Link 
              href="/pricing" 
              className={`${isActive('/pricing') ? 'text-primary-600' : 'text-gray-700'} hover:text-primary-600 font-medium transition`}
            >
              Pricing
            </Link>
            <Link 
              href="/blog" 
              className={`${isActive('/blog') ? 'text-primary-600' : 'text-gray-700'} hover:text-primary-600 font-medium transition`}
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              className={`${isActive('/about') ? 'text-primary-600' : 'text-gray-700'} hover:text-primary-600 font-medium transition`}
            >
              About
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="#" 
              className="text-gray-700 hover:text-primary-600 font-medium transition"
            >
              Log in
            </Link>
            <Link 
              href="#" 
              className="bg-gradient-to-r from-primary-600 to-accent-600 text-white font-medium px-4 py-2 rounded-lg hover:opacity-90 transition"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
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
      </div>
    </header>
  );
};

export default Header;
