import React from 'react';
import { 
  MoreHorizontal, 
  Edit2, 
  Trash2, 
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Video
} from 'lucide-react';

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
  const [showActions, setShowActions] = React.useState(false);
  
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEdit) onEdit(post);
  };
  
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) onDelete(post);
  };
  
  const renderPlatformIcon = () => {
    const iconProps = { size: 16, className: 'text-white' };
    
    switch (post.platform) {
      case 'instagram':
        return <Instagram {...iconProps} />;
      case 'linkedin':
        return <Linkedin {...iconProps} />;
      case 'twitter':
        return <Twitter {...iconProps} />;
      case 'facebook':
        return <Facebook {...iconProps} />;
      case 'tiktok':
        return <Video {...iconProps} />;
      case 'email':
        return <Mail {...iconProps} />;
      default:
        return null;
    }
  };
  
  const getPlatformColor = () => {
    switch (post.platform) {
      case 'instagram':
        return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'linkedin':
        return 'bg-blue-600';
      case 'twitter':
        return 'bg-sky-500';
      case 'facebook':
        return 'bg-blue-700';
      case 'tiktok':
        return 'bg-black';
      case 'email':
        return 'bg-gray-600';
      default:
        return 'bg-gray-500';
    }
  };
  
  const getStatusColor = () => {
    switch (post.status) {
      case 'draft':
        return 'bg-gray-100 text-gray-700';
      case 'scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'published':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  
  return (
    <div 
      className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onEdit && onEdit(post)}
    >
      {/* Top section with image and platform */}
      <div className="relative mb-2 rounded-md overflow-hidden aspect-[4/3]">
        {/* Image */}
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="object-cover w-full h-full"
        />
        
        {/* Platform badge */}
        <div className={`absolute top-2 left-2 ${getPlatformColor()} rounded-full p-1`}>
          {renderPlatformIcon()}
        </div>
        
        {/* Actions menu */}
        <div className="absolute top-2 right-2">
          <button 
            className="p-1 bg-white rounded-full shadow-sm hover:bg-gray-100"
            onClick={(e) => {
              e.stopPropagation();
              setShowActions(!showActions);
            }}
          >
            <MoreHorizontal size={16} className="text-gray-600" />
          </button>
          
          {showActions && (
            <div className="absolute right-0 mt-1 bg-white rounded-md shadow-lg z-10 py-1 w-32 border border-gray-100">
              <button 
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                onClick={handleEditClick}
              >
                <Edit2 size={14} className="mr-2" />
                Edit
              </button>
              <button 
                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center"
                onClick={handleDeleteClick}
              >
                <Trash2 size={14} className="mr-2" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div>
        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{post.title}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{post.caption}</p>
        
        {/* Bottom status and time */}
        <div className="flex justify-between items-center">
          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor()}`}>
            {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
          </span>
          <span className="text-xs text-gray-500">
            {post.scheduledTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;