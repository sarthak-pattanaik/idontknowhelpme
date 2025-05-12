import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter, Plus, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarHeaderProps {
  onDateChange?: (date: Date) => void;
  onFilterChange?: (filters: any) => void;
  onNewPost?: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  onDateChange,
  onFilterChange,
  onNewPost,
}) => {
  const [currentWeek, setCurrentWeek] = useState<Date>(new Date());

  // Calculate current week's date range
  const startOfWeek = new Date(currentWeek);
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1); // Monday
  
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 4); // Friday
  
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const weekRange = `${formatDate(startOfWeek)} - ${formatDate(endOfWeek)}`;

  // Handle navigation
  const goToPreviousWeek = () => {
    const prevWeek = new Date(currentWeek);
    prevWeek.setDate(prevWeek.getDate() - 7);
    setCurrentWeek(prevWeek);
    if (onDateChange) onDateChange(prevWeek);
  };

  const goToNextWeek = () => {
    const nextWeek = new Date(currentWeek);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setCurrentWeek(nextWeek);
    if (onDateChange) onDateChange(nextWeek);
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentWeek(today);
    if (onDateChange) onDateChange(today);
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-20 px-4 h-16">
      <div className="h-full flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-800 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 text-electric-600" />
            <span>Calendar</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {/* Week selector */}
          <div className="flex items-center bg-white border border-gray-200 rounded-md overflow-hidden">
            <button
              onClick={goToPreviousWeek}
              className="p-2 text-gray-600 hover:text-electric-600 hover:bg-gray-50"
              aria-label="Previous week"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button 
              className="px-3 py-1.5 text-sm font-medium"
              onClick={goToToday}
            >
              {weekRange}
            </button>
            
            <button
              onClick={goToNextWeek}
              className="p-2 text-gray-600 hover:text-electric-600 hover:bg-gray-50"
              aria-label="Next week"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Filter dropdowns */}
          <div className="flex items-center gap-2">
            {/* Account filter */}
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-electric-500">
              <option value="">All Accounts</option>
              <option value="instagram">Instagram</option>
              <option value="linkedin">LinkedIn</option>
              <option value="twitter">Twitter</option>
              <option value="facebook">Facebook</option>
            </select>

            {/* Status filter */}
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-electric-500">
              <option value="">All Status</option>
              <option value="draft">Draft</option>
              <option value="scheduled">Scheduled</option>
              <option value="published">Published</option>
            </select>

            {/* Project filter */}
            <select className="text-sm border border-gray-200 rounded-md px-3 py-1.5 pr-8 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-electric-500">
              <option value="">All Projects</option>
              <option value="q2-campaign">Q2 Campaign</option>
              <option value="product-launch">Product Launch</option>
              <option value="blog-posts">Blog Posts</option>
            </select>

            {/* Filter button */}
            <button className="p-2 text-gray-600 hover:text-electric-600 border border-gray-200 rounded-md hover:bg-gray-50">
              <Filter className="w-4 h-4" />
            </button>
          </div>

          {/* New post button */}
          <button
            onClick={onNewPost}
            className="flex items-center gap-1 bg-electric-600 hover:bg-electric-700 text-white rounded-md px-3 py-1.5 text-sm font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Post</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;