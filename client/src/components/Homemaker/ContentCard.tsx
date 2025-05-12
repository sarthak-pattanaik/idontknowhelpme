import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Trash2, ExternalLink } from 'lucide-react';

export interface ContentPost {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  platform: 'instagram' | 'linkedin' | 'twitter' | 'facebook' | 'tiktok' | 'email';
  scheduledTime: string;
  status: 'draft' | 'scheduled' | 'published';
}

interface ContentCardProps {
  post: ContentPost;
  onEdit?: (post: ContentPost) => void;
  onDelete?: (post: ContentPost) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({ post, onEdit, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get platform icon and color
  const getPlatformDetails = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          ),
          color: 'bg-pink-500',
          textColor: 'text-pink-500',
        };
      case 'linkedin':
        return {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          ),
          color: 'bg-blue-600',
          textColor: 'text-blue-600',
        };
      case 'twitter':
        return {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          ),
          color: 'bg-black',
          textColor: 'text-black',
        };
      case 'facebook':
        return {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          ),
          color: 'bg-blue-700',
          textColor: 'text-blue-700',
        };
      case 'tiktok':
        return {
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          ),
          color: 'bg-black',
          textColor: 'text-black',
        };
      case 'email':
        return {
          icon: <ExternalLink className="w-full h-full" />,
          color: 'bg-orange-500',
          textColor: 'text-orange-500',
        };
      default:
        return {
          icon: <ExternalLink className="w-full h-full" />,
          color: 'bg-gray-500',
          textColor: 'text-gray-500',
        };
    }
  };

  const { icon, color, textColor } = getPlatformDetails(post.platform);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'published':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Extract time from scheduledTime (e.g., "10:30 AM")
  const time = new Date(post.scheduledTime).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <motion.div
      className="relative bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        y: -2,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Platform badge */}
      <div className={`absolute top-2 left-2 w-6 h-6 ${color} text-white rounded-full p-1.5 z-10`}>
        {icon}
      </div>

      {/* Status badge */}
      <div className="absolute top-2 right-2 z-10">
        <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyle(post.status)}`}>
          {post.status}
        </span>
      </div>

      {/* Thumbnail */}
      <div className="relative h-32 bg-gray-100 overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        
        {/* Hover overlay with actions */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-2">
            <button
              onClick={() => onEdit && onEdit(post)}
              className="p-1.5 bg-white rounded-full text-gray-700 hover:text-electric-600 transition-colors"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete && onDelete(post)}
              className="p-1.5 bg-white rounded-full text-gray-700 hover:text-red-600 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <div className="flex items-center justify-between">
          <span className={`text-xs font-semibold ${textColor}`}>
            {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
          </span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <h3 className="mt-1 font-medium text-sm line-clamp-1">{post.title}</h3>
        <p className="mt-1 text-xs text-gray-600 line-clamp-2">{post.caption}</p>
      </div>
    </motion.div>
  );
};

export default ContentCard;