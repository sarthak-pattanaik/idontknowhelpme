import React, { useState } from 'react';
import HomemakerLayout from '@/components/Homemaker/HomemakerLayout';
import CalendarHeader from '@/components/Homemaker/CalendarHeader';
import CalendarGrid from '@/components/Homemaker/CalendarGrid';
import { ContentPost } from '@/components/Homemaker/ContentCard';
import { Route, Switch, useLocation } from 'wouter';

const HomemakerCalendar: React.FC = () => {
  // Sample content posts data (would come from API in a real app)
  const [posts, setPosts] = useState<ContentPost[]>([
    {
      id: "1",
      title: "Product Launch Announcement",
      caption: "We are excited to announce our new product line! Check out the features that will revolutionize your workflow.",
      imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
      platform: "linkedin",
      scheduledTime: "2025-05-13T10:00:00",
      status: "scheduled",
    },
    {
      id: "2",
      title: "Weekly Tip: Working from Home",
      caption: "Maximize your productivity with these 5 essential tips for remote work. #productivity #remotework",
      imageUrl: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7",
      platform: "twitter",
      scheduledTime: "2025-05-13T14:00:00",
      status: "draft",
    },
    {
      id: "3",
      title: "Behind the Scenes",
      caption: "Take a peek behind the scenes of our latest product photoshoot! #behindthescenes",
      imageUrl: "https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6",
      platform: "instagram",
      scheduledTime: "2025-05-14T11:00:00",
      status: "scheduled",
    },
    {
      id: "4",
      title: "Monthly Newsletter: May Edition",
      caption: "Catch up on all our updates from May including new product releases, community highlights, and upcoming events!",
      imageUrl: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3",
      platform: "email",
      scheduledTime: "2025-05-15T09:00:00",
      status: "draft",
    },
    {
      id: "5",
      title: "Product Demo Video",
      caption: "Watch our quick 30-second demo showing how our platform can save you hours every week!",
      imageUrl: "https://images.unsplash.com/photo-1616469829731-fb0bdd25d6ef",
      platform: "facebook",
      scheduledTime: "2025-05-16T13:00:00",
      status: "published",
    },
    {
      id: "6",
      title: "Trending Topic Mashup",
      caption: "Getting creative with the latest trends! Check out how we are putting our unique spin on what is hot right now.",
      imageUrl: "https://images.unsplash.com/photo-1496717694304-b7cbd9d52f6a",
      platform: "tiktok",
      scheduledTime: "2025-05-17T15:00:00",
      status: "scheduled",
    },
  ]);

  // Event handlers
  const handleEditPost = (post: ContentPost) => {
    console.log('Edit post:', post);
    // Would open edit modal in a real app
  };

  const handleDeletePost = (post: ContentPost) => {
    // Simple implementation for demo purposes
    if (window.confirm(`Are you sure you want to delete "${post.title}"?`)) {
      setPosts(posts.filter((p) => p.id !== post.id));
    }
  };

  const handleNewPost = () => {
    console.log('Create new post');
    // Would open create modal in a real app
  };

  return (
    <HomemakerLayout 
      activeItem="Calendar"
      title="Content Calendar"
      description="Plan, create, and schedule your content with Homemaker's AI-powered content calendar."
    >
      {/* Header with actions */}
      <CalendarHeader onNewPost={handleNewPost} />

      {/* Calendar grid */}
      <CalendarGrid
        posts={posts}
        onEditPost={handleEditPost}
        onDeletePost={handleDeletePost}
      />
    </HomemakerLayout>
  );
};

// Placeholder components for other pages
const HomemakerHome: React.FC = () => (
  <HomemakerLayout activeItem="Home" title="Dashboard" description="Homemaker dashboard and overview">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome to Homemaker</h2>
      <p className="text-gray-600">This is your content creation command center.</p>
      
      {/* Dashboard content will go here */}
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
            <button className="w-full text-left px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100">
              Create new content
            </button>
            <button className="w-full text-left px-3 py-2 bg-purple-50 text-purple-600 rounded-md hover:bg-purple-100">
              Generate with AI
            </button>
            <button className="w-full text-left px-3 py-2 bg-green-50 text-green-600 rounded-md hover:bg-green-100">
              View analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  </HomemakerLayout>
);

const HomemakerBrandAI: React.FC = () => (
  <HomemakerLayout activeItem="Brand AI" title="Brand AI" description="AI-powered brand voice customization">
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
  </HomemakerLayout>
);

const HomemakerTemplates: React.FC = () => (
  <HomemakerLayout activeItem="Templates" title="Content Templates" description="Pre-made content templates">
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
  </HomemakerLayout>
);

const HomemakerAnalytics: React.FC = () => (
  <HomemakerLayout activeItem="Analytics" title="Content Analytics" description="Performance metrics and insights">
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
  </HomemakerLayout>
);

const HomemakerFiles: React.FC = () => (
  <HomemakerLayout activeItem="Files" title="File Library" description="Manage your media assets">
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
  </HomemakerLayout>
);

const HomemakerApp: React.FC = () => {
  return (
    <HomemakerLayout 
      activeItem="Home"
      title="Dashboard"
      description="Homemaker dashboard and overview"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to Homemaker</h2>
        <p className="text-gray-600">This is your content creation command center.</p>
        
        {/* Dashboard content will go here */}
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
              <button className="w-full text-left px-3 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100">
                Create new content
              </button>
              <button className="w-full text-left px-3 py-2 bg-purple-50 text-purple-600 rounded-md hover:bg-purple-100">
                Generate with AI
              </button>
              <button className="w-full text-left px-3 py-2 bg-green-50 text-green-600 rounded-md hover:bg-green-100">
                View analytics
              </button>
            </div>
          </div>
        </div>
      </div>
    </HomemakerLayout>
  );
};

export default HomemakerApp;