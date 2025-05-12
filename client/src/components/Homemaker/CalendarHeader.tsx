import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter, Plus, Search } from 'lucide-react';

interface CalendarHeaderProps {
  onDateChange?: (date: Date) => void;
  onFilterChange?: (filters: any) => void;
  onNewPost?: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({ 
  onDateChange, 
  onFilterChange,
  onNewPost
}) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'long', 
      year: 'numeric' 
    }).format(date);
  };
  
  const handlePreviousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 7);
    setCurrentDate(newDate);
    if (onDateChange) onDateChange(newDate);
  };
  
  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 7);
    setCurrentDate(newDate);
    if (onDateChange) onDateChange(newDate);
  };
  
  const handleTodayClick = () => {
    const today = new Date();
    setCurrentDate(today);
    if (onDateChange) onDateChange(today);
  };
  
  return (
    <div className="bg-white border-b border-gray-200 p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        {/* Left side - Header and date navigation */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-xl font-bold text-gray-900 mb-1">Content Calendar</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button 
                className="p-1 rounded-full hover:bg-gray-100"
                onClick={handlePreviousWeek}
              >
                <ChevronLeft size={18} className="text-gray-600" />
              </button>
              <span className="text-gray-700 font-medium">{formatDate(currentDate)}</span>
              <button 
                className="p-1 rounded-full hover:bg-gray-100"
                onClick={handleNextWeek}
              >
                <ChevronRight size={18} className="text-gray-600" />
              </button>
            </div>
            <button 
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
              onClick={handleTodayClick}
            >
              Today
            </button>
          </div>
        </div>
        
        {/* Right side - Actions */}
        <div className="flex items-center space-x-3 w-full sm:w-auto">
          <div className="relative flex-grow sm:flex-grow-0 max-w-xs">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search content"
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button className="flex items-center text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-sm">
            <Filter size={16} className="mr-2" />
            Filter
          </button>
          
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm flex items-center"
            onClick={onNewPost}
          >
            <Plus size={16} className="mr-2" />
            New Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;