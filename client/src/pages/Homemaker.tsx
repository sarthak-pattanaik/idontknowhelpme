import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Home, Calendar, FileText, BarChart2, File, Cpu } from 'lucide-react';
import HomemakerLayout from '@/components/Homemaker/HomemakerLayout';
import CalendarHeader from '@/components/Homemaker/CalendarHeader';
import CalendarGrid from '@/components/Homemaker/CalendarGrid';
import { ContentPost } from '@/components/Homemaker/ContentCard';

// Main App Component
const HomemakerApp: React.FC = () => {
  const [location] = useLocation();
  
  // Set up routes and content
  type RouteContent = {
    [key: string]: {
      content: React.ReactNode;
      label: string;
    }
  };
  
  const routes: RouteContent = {
    "/app/homemaker": {
      content: <HomeContent />,
      label: "Home"
    },
    "/app/homemaker/calendar": {
      content: <CalendarContent />,
      label: "Calendar"
    },
    "/app/homemaker/brand-ai": {
      content: <BrandAIContent />,
      label: "Brand AI"
    },
    "/app/homemaker/templates": {
      content: <TemplatesContent />,
      label: "Templates"
    },
    "/app/homemaker/analytics": {
      content: <AnalyticsContent />,
      label: "Analytics"
    },
    "/app/homemaker/files": {
      content: <FilesContent />,
      label: "Files"
    }
  };

  // Determine active tab from current location
  const activeItem = routes[location]?.label || "Home";
  
  // Get content for current route, defaulting to Home
  const content = routes[location]?.content || <HomeContent />;
  
  return (
    <HomemakerLayout 
      activeItem={activeItem}
      title={activeItem}
      description={`Homemaker ${activeItem} - AI content management`}
    >
      {content}
    </HomemakerLayout>
  );
};

// Home/Dashboard page content
const HomeContent: React.FC = () => {
  return (
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
            <Link href="/app/homemaker/calendar">
              <button className="w-full text-left px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100">
                Content Calendar
              </button>
            </Link>
            <Link href="/app/homemaker/brand-ai">
              <button className="w-full text-left px-3 py-2 bg-purple-50 text-purple-600 rounded-md hover:bg-purple-100">
                Brand AI
              </button>
            </Link>
            <Link href="/app/homemaker/analytics">
              <button className="w-full text-left px-3 py-2 bg-green-50 text-green-600 rounded-md hover:bg-green-100">
                View Analytics
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Calendar page content
const CalendarContent: React.FC = () => {
  // Sample content posts data (would come from API in a real app)
  const [posts, setPosts] = useState<ContentPost[]>([
    {
      id: "1",
      title: "Product Launch Announcement",
      caption: "We are excited to announce our new product line! Check out the features that will revolutionize your workflow.",
      imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
      platform: "linkedin",
      scheduledTime: "May 13 9:00 AM",
      status: "scheduled",
    },
    {
      id: "2",
      title: "Customer Success Story",
      caption: "See how our platform helped ABC Corp increase their productivity by 35% in just two months.",
      imageUrl: "https://images.unsplash.com/photo-1560179707-f14e90ef3623",
      platform: "instagram",
      scheduledTime: "May 14 12:00 PM",
      status: "draft",
    },
    {
      id: "3",
      title: "Team Spotlight",
      caption: "Meet our engineering team and learn about the innovative solutions they're building.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
      platform: "twitter",
      scheduledTime: "May 15 3:00 PM",
      status: "published",
    },
  ]);
  
  const handleEditPost = (post: ContentPost) => {
    console.log('Edit post:', post.id);
    // Would open edit modal in a real app
  };
  
  const handleDeletePost = (post: ContentPost) => {
    console.log('Delete post:', post.id);
    // Would confirm and delete in a real app
    setPosts(posts.filter(p => p.id !== post.id));
  };
  
  const handleNewPost = () => {
    console.log('Create new post');
    // Would open create modal in a real app
  };
  
  return (
    <>
      {/* Header with actions */}
      <CalendarHeader onNewPost={handleNewPost} />

      {/* Calendar grid */}
      <CalendarGrid
        posts={posts}
        onEditPost={handleEditPost}
        onDeletePost={handleDeletePost}
      />
    </>
  );
};

// Brand AI page content
const BrandAIContent: React.FC = () => {
  return (
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
};

// Templates page content
const TemplatesContent: React.FC = () => {
  return (
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
};

// Analytics page content
const AnalyticsContent: React.FC = () => {
  return (
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
};

// Files page content
const FilesContent: React.FC = () => {
  return (
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
};

export default HomemakerApp;