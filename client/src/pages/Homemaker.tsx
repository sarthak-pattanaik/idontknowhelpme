import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from '@/components/Homemaker/Sidebar';
import CalendarHeader from '@/components/Homemaker/CalendarHeader';
import CalendarGrid from '@/components/Homemaker/CalendarGrid';
import { ContentPost } from '@/components/Homemaker/ContentCard';

const HomemakerApp: React.FC = () => {
  // Sample content posts data (would come from API in a real app)
  const [posts, setPosts] = useState<ContentPost[]>([
    {
      id: '1',
      title: 'Product Launch Announcement',
      caption: 'We're excited to announce our new product line! Check out the features that will revolutionize your workflow.',
      imageUrl: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      platform: 'linkedin',
      scheduledTime: '2025-05-13T10:00:00',
      status: 'scheduled',
    },
    {
      id: '2',
      title: 'Weekly Tip: Working from Home',
      caption: 'Maximize your productivity with these 5 essential tips for remote work. #productivity #remotework',
      imageUrl: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      platform: 'twitter',
      scheduledTime: '2025-05-13T14:00:00',
      status: 'draft',
    },
    {
      id: '3',
      title: 'Behind the Scenes',
      caption: 'Take a peek behind the scenes of our latest product photoshoot! 📸 #behindthescenes',
      imageUrl: 'https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      platform: 'instagram',
      scheduledTime: '2025-05-14T11:00:00',
      status: 'scheduled',
    },
    {
      id: '4',
      title: 'Monthly Newsletter: May Edition',
      caption: 'Catch up on all our updates from May including new product releases, community highlights, and upcoming events!',
      imageUrl: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      platform: 'email',
      scheduledTime: '2025-05-15T09:00:00',
      status: 'draft',
    },
    {
      id: '5',
      title: 'Product Demo Video',
      caption: 'Watch our quick 30-second demo showing how our platform can save you hours every week!',
      imageUrl: 'https://images.unsplash.com/photo-1616469829731-fb0bdd25d6ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      platform: 'facebook',
      scheduledTime: '2025-05-16T13:00:00',
      status: 'published',
    },
    {
      id: '6',
      title: 'Trending Topic Mashup',
      caption: 'Getting creative with the latest trends! Check out how we're putting our unique spin on what's hot right now.',
      imageUrl: 'https://images.unsplash.com/photo-1496717694304-b7cbd9d52f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      platform: 'tiktok',
      scheduledTime: '2025-05-17T15:00:00',
      status: 'scheduled',
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
    <>
      <Helmet>
        <title>Homemaker - Content Calendar</title>
        <meta
          name="description"
          content="Plan, create, and schedule your content with Homemaker's AI-powered content calendar."
        />
      </Helmet>

      <div className="flex h-screen bg-gray-50 overflow-hidden">
        {/* Left sidebar */}
        <Sidebar activeItem="Calendar" />

        {/* Main content area */}
        <div className="flex flex-col flex-1 ml-64">
          {/* Header with actions */}
          <CalendarHeader onNewPost={handleNewPost} />

          {/* Calendar grid */}
          <CalendarGrid
            posts={posts}
            onEditPost={handleEditPost}
            onDeletePost={handleDeletePost}
          />
        </div>
      </div>
    </>
  );
};

export default HomemakerApp;