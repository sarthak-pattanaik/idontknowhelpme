import { Link } from "wouter";
import GradientText from "@/components/common/GradientText";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              <GradientText>idontknowhelpme</GradientText>
            </h3>
            <p className="text-gray-400 mb-4">The modern toolkit for content, leads, outreach, and signals.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="ri-twitter-x-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="ri-linkedin-box-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="ri-facebook-box-line text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="ri-instagram-line text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/product/homemaker" className="text-gray-400 hover:text-white transition">
                  Homemaker
                </Link>
              </li>
              <li>
                <Link href="/product/intelligence" className="text-gray-400 hover:text-white transition">
                  Intelligence
                </Link>
              </li>
              <li>
                <Link href="/product/snipper" className="text-gray-400 hover:text-white transition">
                  Snipper
                </Link>
              </li>
              <li>
                <Link href="/product/signals" className="text-gray-400 hover:text-white transition">
                  Signals
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition">
                  API
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-gray-500">© {new Date().getFullYear()} idontknowhelpme. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
            <Link href="#" className="text-gray-500 hover:text-gray-400 mx-3 sm:ml-6">Privacy</Link>
            <Link href="#" className="text-gray-500 hover:text-gray-400 mx-3">Terms</Link>
            <Link href="#" className="text-gray-500 hover:text-gray-400 mx-3">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
