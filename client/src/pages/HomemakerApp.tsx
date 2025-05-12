import React from 'react';
import { Link, Route, Switch } from 'wouter';
import { Home, Calendar, FileText, BarChart2, File, Cpu, Settings, LogOut, Menu } from 'lucide-react';

// Home Dashboard Content
const HomeDashboard = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Welcome to Homemaker</h2>
    <p className="text-gray-600">This is your content creation command center.</p>
    
    {/* Dashboard content */}
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg mb-2">Content Overview</h3>
        <p className="text-gray-500 mb-4">You have 12 scheduled posts this week</p>
        <div className="h-40 bg-gray-50 rounded flex items-center justify-center">
          Content chart placeholder
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg mb-2">Recent Activity</h3>
        <ul className="space-y-3">
          <li className="text-sm text-gray-600">New template created: "Product Launch"</li>
          <li className="text-sm text-gray-600">4 posts scheduled for next week</li>
          <li className="text-sm text-gray-600">Brand voice updated</li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold text-lg mb-2">Quick Actions</h3>
        <div className="space-y-2">
          <a href="/app/homemaker/calendar" className="block w-full text-left px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100">
            Content Calendar
          </a>
          <a href="/app/homemaker/brand-ai" className="block w-full text-left px-3 py-2 bg-purple-50 text-purple-600 rounded-md hover:bg-purple-100">
            Brand AI
          </a>
          <a href="/app/homemaker/analytics" className="block w-full text-left px-3 py-2 bg-green-50 text-green-600 rounded-md hover:bg-green-100">
            View Analytics
          </a>
        </div>
      </div>
    </div>
  </div>
);

// Brand AI Content
const BrandAIContent = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Brand AI</h2>
    <p className="text-gray-600 mb-8">Train AI to write in your brand's voice and style.</p>
    
    {/* Brand AI content placeholder */}
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-3">Voice Customization</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Tone</label>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full">Professional</button>
              <button className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-full">Casual</button>
              <button className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-full">Friendly</button>
              <button className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-full">Technical</button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Style</label>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full">Concise</button>
              <button className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-full">Detailed</button>
              <button className="px-3 py-1 text-sm bg-gray-200 text-gray-800 rounded-full">Persuasive</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium text-lg mb-3">Brand Examples</h3>
        <textarea 
          className="w-full p-3 border border-gray-300 rounded-md h-32" 
          placeholder="Paste examples of your brand's content here to train the AI..."
        ></textarea>
      </div>
      
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Update Brand Voice
      </button>
    </div>
  </div>
);

// Templates Content
const TemplatesContent = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Content Templates</h2>
    <p className="text-gray-600 mb-8">Start with pre-made templates or create your own.</p>
    
    {/* Templates grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="h-40 bg-blue-50 rounded-md mb-4 flex items-center justify-center text-blue-500">
          Template Preview
        </div>
        <h3 className="font-semibold mb-1">Product Announcement</h3>
        <p className="text-sm text-gray-600 mb-3">Perfect for launching new features or products</p>
        <div className="flex justify-between items-center">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">LinkedIn</span>
          <button className="text-sm text-blue-600 hover:text-blue-800">Use Template</button>
        </div>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="h-40 bg-purple-50 rounded-md mb-4 flex items-center justify-center text-purple-500">
          Template Preview
        </div>
        <h3 className="font-semibold mb-1">Success Story</h3>
        <p className="text-sm text-gray-600 mb-3">Share customer success stories and testimonials</p>
        <div className="flex justify-between items-center">
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Instagram</span>
          <button className="text-sm text-blue-600 hover:text-blue-800">Use Template</button>
        </div>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="h-40 bg-green-50 rounded-md mb-4 flex items-center justify-center text-green-500">
          Template Preview
        </div>
        <h3 className="font-semibold mb-1">Weekly Newsletter</h3>
        <p className="text-sm text-gray-600 mb-3">Consistent weekly update format for email</p>
        <div className="flex justify-between items-center">
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Email</span>
          <button className="text-sm text-blue-600 hover:text-blue-800">Use Template</button>
        </div>
      </div>
    </div>
  </div>
);

// Calendar Content
const CalendarContent = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Content Calendar</h2>
    <p className="text-gray-600 mb-8">Plan, schedule, and publish your content.</p>
    
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <Calendar size={16} className="text-gray-600" />
          </button>
          <span className="text-gray-700 font-medium">May 2025</span>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm flex items-center">
          + New Post
        </button>
      </div>
      
      <div className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-7 bg-gray-50 border-b">
          <div className="p-2 text-center text-sm font-medium text-gray-500">Sun</div>
          <div className="p-2 text-center text-sm font-medium text-gray-500">Mon</div>
          <div className="p-2 text-center text-sm font-medium text-gray-500">Tue</div>
          <div className="p-2 text-center text-sm font-medium text-gray-500">Wed</div>
          <div className="p-2 text-center text-sm font-medium text-gray-500">Thu</div>
          <div className="p-2 text-center text-sm font-medium text-gray-500">Fri</div>
          <div className="p-2 text-center text-sm font-medium text-gray-500">Sat</div>
        </div>
        
        <div className="grid grid-cols-7 grid-rows-5 h-96">
          {/* Calendar cells would go here */}
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="border p-1 overflow-auto">
              <div className="text-xs text-gray-500 mb-1">{(i % 31) + 1}</div>
              {i === 12 && (
                <div className="bg-blue-100 text-blue-800 text-xs p-1 rounded mb-1">
                  LinkedIn Post - 9am
                </div>
              )}
              {i === 15 && (
                <div className="bg-purple-100 text-purple-800 text-xs p-1 rounded mb-1">
                  Instagram Post - 12pm
                </div>
              )}
              {i === 18 && (
                <div className="bg-green-100 text-green-800 text-xs p-1 rounded mb-1">
                  Email Newsletter - 4pm
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Analytics Content
const AnalyticsContent = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Analytics</h2>
    <p className="text-gray-600 mb-8">Track and analyze your content performance.</p>
    
    {/* Analytics charts placeholder */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold mb-3">Engagement Rate</h3>
        <div className="h-48 bg-gray-50 rounded-md flex items-center justify-center">
          Chart placeholder
        </div>
        <p className="text-sm text-gray-600 mt-2">Average: 4.2%</p>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold mb-3">Content Distribution</h3>
        <div className="h-48 bg-gray-50 rounded-md flex items-center justify-center">
          Chart placeholder
        </div>
        <p className="text-sm text-gray-600 mt-2">Most used: LinkedIn (42%)</p>
      </div>
      
      <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
        <h3 className="font-semibold mb-3">Publishing Consistency</h3>
        <div className="h-48 bg-gray-50 rounded-md flex items-center justify-center">
          Chart placeholder
        </div>
        <p className="text-sm text-gray-600 mt-2">On schedule: 92%</p>
      </div>
    </div>
    
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
      <h3 className="font-semibold mb-3">Top Performing Content</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Title</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Platform</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Engagement</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Published</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4">How AI is Transforming Marketing</td>
              <td className="py-3 px-4">LinkedIn</td>
              <td className="py-3 px-4">8.4%</td>
              <td className="py-3 px-4">May 10, 2025</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4">Behind the Scenes: Product Development</td>
              <td className="py-3 px-4">Instagram</td>
              <td className="py-3 px-4">7.2%</td>
              <td className="py-3 px-4">May 8, 2025</td>
            </tr>
            <tr>
              <td className="py-3 px-4">Customer Spotlight: ABC Corp</td>
              <td className="py-3 px-4">Twitter</td>
              <td className="py-3 px-4">6.9%</td>
              <td className="py-3 px-4">May 7, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// Files Content
const FilesContent = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">File Library</h2>
    <p className="text-gray-600 mb-8">Manage and organize your media assets.</p>
    
    {/* Files interface */}
    <div className="flex justify-between mb-6">
      <div className="flex items-center space-x-4">
        <select className="px-3 py-2 rounded-md border border-gray-300">
          <option>All files</option>
          <option>Images</option>
          <option>Videos</option>
          <option>Documents</option>
        </select>
        <button className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700">
          Sort by: Recent
        </button>
      </div>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Upload Files
      </button>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <div key={item} className="group relative bg-gray-50 aspect-square rounded-md overflow-hidden border border-gray-200 hover:border-blue-400">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            File {item}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform">
            <p className="text-xs truncate">file-name-{item}.png</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Sidebar Component
const Sidebar = ({ activeItem }: { activeItem: string }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
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

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
              <a
                key={item.name}
                href={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium group transition-colors ${
                  item.isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className={`mr-3 ${item.isActive ? 'text-blue-500' : 'text-gray-500 group-hover:text-gray-700'}`}>
                  {item.icon}
                </span>
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Bottom actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <div className="flex flex-col space-y-2">
            <a
              href="#settings"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Settings size={20} className="mr-3 text-gray-500" />
              Settings
            </a>
            <a
              href="/"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <LogOut size={20} className="mr-3 text-gray-500" />
              Exit to Website
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-10 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

// Page Layout Component
const PageLayout = ({ children, title, activeItem }: { children: React.ReactNode, title: string, activeItem: string }) => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar activeItem={activeItem} />
      <div className="flex flex-col flex-1 ml-64 overflow-auto">
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const HomemakerApp: React.FC = () => {
  const [location] = React.useState(window.location.pathname);
  
  // Determine which component to render based on the path
  let content;
  let activeItem = "Home";
  let title = "Dashboard";
  
  if (location === "/app/homemaker") {
    content = <HomeDashboard />;
    activeItem = "Home";
    title = "Dashboard";
  } else if (location.includes("/app/homemaker/brand-ai")) {
    content = <BrandAIContent />;
    activeItem = "Brand AI";
    title = "Brand AI";
  } else if (location.includes("/app/homemaker/templates")) {
    content = <TemplatesContent />;
    activeItem = "Templates";
    title = "Templates";
  } else if (location.includes("/app/homemaker/calendar")) {
    content = <CalendarContent />;
    activeItem = "Calendar";
    title = "Calendar";
  } else if (location.includes("/app/homemaker/analytics")) {
    content = <AnalyticsContent />;
    activeItem = "Analytics";
    title = "Analytics";
  } else if (location.includes("/app/homemaker/files")) {
    content = <FilesContent />;
    activeItem = "Files";
    title = "Files";
  } else {
    content = <HomeDashboard />;
    activeItem = "Home";
    title = "Dashboard";
  }
  
  return (
    <PageLayout title={title} activeItem={activeItem}>
      {content}
    </PageLayout>
  );
};

export default HomemakerApp;