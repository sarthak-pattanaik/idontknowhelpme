import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import BrandLogo from '@/components/common/BrandLogo';
import { Twitter, Linkedin, Github, ChevronRight, ArrowRight } from 'lucide-react';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Homemaker', href: '/product/homemaker', badge: 'Popular' },
      { name: 'Intelligence', href: '/product/intelligence' },
      { name: 'Snipper', href: '/product/snipper' },
      { name: 'Signals', href: '/product/signals', badge: 'New' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '#', badge: 'Hiring' },
      { name: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', href: '#' },
      { name: 'API', href: '#' },
      { name: 'Guides', href: '#' },
      { name: 'Help Center', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Cookies', href: '#' },
    ],
  },
];

const socialLinks = [
  {
    name: 'Twitter',
    href: '#',
    icon: <Twitter className="w-5 h-5" />,
    hoverColor: 'hover:bg-blue-400',
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: <Linkedin className="w-5 h-5" />,
    hoverColor: 'hover:bg-blue-600',
  },
  {
    name: 'GitHub',
    href: '#',
    icon: <Github className="w-5 h-5" />,
    hoverColor: 'hover:bg-gray-700',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8">
          {/* Logo and company info section */}
          <div className="col-span-2 md:col-span-4 space-y-6">
            <div>
              <BrandLogo size="md" className="scale-110 origin-left" />
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              The modern AI toolkit to enhance your content creation, lead generation, 
              outreach campaigns, and market signal analysis.
            </p>
            
            {/* Social icons - modern style with circle backgrounds */}
            <div className="flex space-x-3">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 ${item.hoverColor} hover:text-white transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={item.name}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation links - with modern styling */}
          {footerLinks.map((group) => (
            <div key={group.title} className="col-span-1 md:col-span-2">
              <h3 className="font-semibold text-gray-900 mb-5 text-base">{group.title}</h3>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name} className="group">
                    <Link 
                      href={link.href} 
                      className="text-gray-500 hover:text-electric-600 inline-flex items-center text-[15px] group-hover:translate-x-0.5 transition-all duration-200"
                    >
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className={`ml-2 px-1.5 py-0.5 text-xs rounded-full ${
                          link.badge === 'New' ? 'bg-neon-100 text-neon-700' :
                          link.badge === 'Popular' ? 'bg-electric-100 text-electric-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      {/* Newsletter section - with modern gradient border */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container mx-auto px-4 py-10">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-electric-500 via-purple-500 to-neon-500"></div>
            <div className="p-8 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Stay updated with our newsletter</h3>
                <p className="text-gray-600 mb-3 text-sm">Get the latest product news and AI insights delivered to your inbox.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-electric-500 focus:border-electric-500 placeholder-gray-400 outline-none transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-electric-600 rounded-lg hover:bg-electric-700 focus:ring-4 focus:ring-electric-300 transition-all whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar - with modern design */}
      <div className="border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} idontknowhelpme. All rights reserved.
            </p>
            
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-sm text-gray-500 flex items-center">
                Made with <span className="text-red-500 mx-1">❤</span> for busy GTM teams.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;