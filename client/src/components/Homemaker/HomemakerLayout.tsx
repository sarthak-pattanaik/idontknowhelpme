import React from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './Sidebar';

interface HomemakerLayoutProps {
  children: React.ReactNode;
  activeItem: string;
  title: string;
  description?: string;
}

const HomemakerLayout: React.FC<HomemakerLayoutProps> = ({
  children,
  activeItem,
  title,
  description = "AI-powered content creation and management platform",
}) => {
  return (
    <>
      <Helmet>
        <title>{title} - Homemaker</title>
        <meta name="description" content={description} />
      </Helmet>

      <div className="flex h-screen bg-gray-50 overflow-hidden">
        {/* Left sidebar */}
        <Sidebar activeItem={activeItem} />

        {/* Main content area */}
        <div className="flex flex-col flex-1 ml-64 overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
};

export default HomemakerLayout;