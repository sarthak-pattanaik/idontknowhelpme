import React from 'react';
import { Link, useLocation } from 'wouter';
import { Home, Calendar, FileText, BarChart2, File, Cpu, Settings, LogOut, Menu } from 'lucide-react';

interface NavItem {
  name: string;
  icon: React.ReactNode;
  path: string;
  isActive?: boolean;
}

interface SidebarProps {
  activeItem?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeItem = 'Home' }) => {
  const [location, navigate] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems: NavItem[] = [
    {
      name: 'Home',
      icon: <Home size={20} />,
      path: '/app/homemaker',
      isActive: activeItem === 'Home'
    },
    {
      name: 'Brand AI',
      icon: <Cpu size={20} />,
      path: '/app/homemaker/brand-ai',
      isActive: activeItem === 'Brand AI'
    },
    {
      name: 'Templates',
      icon: <FileText size={20} />,
      path: '/app/homemaker/templates',
      isActive: activeItem === 'Templates'
    },
    {
      name: 'Calendar',
      icon: <Calendar size={20} />,
      path: '/app/homemaker/calendar',
      isActive: activeItem === 'Calendar'
    },
    {
      name: 'Analytics',
      icon: <BarChart2 size={20} />,
      path: '/app/homemaker/analytics',
      isActive: activeItem === 'Analytics'
    },
    {
      name: 'Files',
      icon: <File size={20} />,
      path: '/app/homemaker/files',
      isActive: activeItem === 'Files'
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <button 
          onClick={toggleMobileMenu}
          className="p-2 rounded-md bg-white shadow-md text-gray-700"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar container */}
      <div className={`fixed inset-y-0 left-0 z-20 w-64 bg-white border-r border-gray-200 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Logo area */}
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold">
              H
            </div>
            <span className="text-xl font-semibold">Homemaker</span>
          </div>
        </div>

        {/* Navigation items */}
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium group transition-colors ${
                  item.isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={(e) => {
                  // This ensures proper navigation
                  e.preventDefault();
                  window.location.href = item.path;
                }}
              >
                <span className={`mr-3 ${item.isActive ? 'text-blue-500' : 'text-gray-500 group-hover:text-gray-700'}`}>
                  {item.icon}
                </span>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Bottom actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <div className="flex flex-col space-y-2">
            <Link
              href="/settings"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Settings size={20} className="mr-3 text-gray-500" />
              Settings
            </Link>
            <Link
              href="/"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <LogOut size={20} className="mr-3 text-gray-500" />
              Exit to Website
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-10 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Sidebar;