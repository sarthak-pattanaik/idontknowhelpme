import React, { useState, useEffect } from 'react';
import ContentCard, { ContentPost } from './ContentCard';

interface CalendarGridProps {
  posts: ContentPost[];
  onEditPost?: (post: ContentPost) => void;
  onDeletePost?: (post: ContentPost) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({ 
  posts,
  onEditPost,
  onDeletePost
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState<Date[]>([]);
  const timeSlots = ['9:00 AM', '12:00 PM', '3:00 PM', '6:00 PM'];
  
  // Generate array of dates for the current week
  useEffect(() => {
    const dates: Date[] = [];
    const startDate = new Date(currentDate);
    
    // Set to the start of the week (Sunday)
    const day = startDate.getDay();
    startDate.setDate(startDate.getDate() - day);
    
    // Create array of 7 days
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    
    setWeekDates(dates);
  }, [currentDate]);
  
  const formatDateHeader = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { 
      weekday: 'short'
    }).format(date);
  };
  
  const formatDateNumber = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', { 
      day: 'numeric'
    }).format(date);
  };
  
  const getPostsForSlot = (date: Date, timeSlot: string): ContentPost[] => {
    return posts.filter(post => {
      const postDate = new Date(post.scheduledTime.split(' ')[0]);
      const postTime = post.scheduledTime.split(' ')[1] + ' ' + post.scheduledTime.split(' ')[2];
      
      return (
        postDate.getDate() === date.getDate() &&
        postDate.getMonth() === date.getMonth() &&
        postDate.getFullYear() === date.getFullYear() &&
        postTime === timeSlot
      );
    });
  };
  
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  
  return (
    <div className="flex-1 overflow-auto bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Calendar header with days */}
        <div className="grid grid-cols-8 border-b border-gray-200">
          {/* Time column header */}
          <div className="p-3 text-center border-r border-gray-200"></div>
          
          {/* Day columns headers */}
          {weekDates.map((date, index) => (
            <div 
              key={index} 
              className={`p-3 text-center ${isToday(date) ? 'bg-blue-50' : ''}`}
            >
              <div className="text-sm text-gray-500 font-medium">
                {formatDateHeader(date)}
              </div>
              <div className={`text-lg font-semibold ${isToday(date) ? 'text-blue-600' : 'text-gray-800'}`}>
                {formatDateNumber(date)}
              </div>
            </div>
          ))}
        </div>
        
        {/* Calendar body with time slots */}
        <div className="grid grid-cols-8">
          {/* Time slots column */}
          <div className="border-r border-gray-200">
            {timeSlots.map((slot, slotIndex) => (
              <div 
                key={slotIndex} 
                className="h-48 p-3 border-b border-gray-200 flex items-center justify-center"
              >
                <span className="text-sm text-gray-500 font-medium">{slot}</span>
              </div>
            ))}
          </div>
          
          {/* Day columns with content slots */}
          {weekDates.map((date, dateIndex) => (
            <div key={dateIndex} className={`${isToday(date) ? 'bg-blue-50' : ''}`}>
              {timeSlots.map((slot, slotIndex) => {
                const postsForSlot = getPostsForSlot(date, slot);
                
                return (
                  <div 
                    key={slotIndex} 
                    className="h-48 p-2 border-b border-gray-200 overflow-auto"
                  >
                    {postsForSlot.length > 0 ? (
                      <div className="grid grid-cols-1 gap-2">
                        {postsForSlot.map(post => (
                          <ContentCard 
                            key={post.id} 
                            post={post} 
                            onEdit={onEditPost}
                            onDelete={onDeletePost}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-300 text-sm border-2 border-dashed border-gray-200 rounded-lg">
                        No content scheduled
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;