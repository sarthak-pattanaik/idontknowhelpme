import React, { useState } from 'react';
import ContentCard, { ContentPost } from './ContentCard';

interface CalendarGridProps {
  posts: ContentPost[];
  onEditPost?: (post: ContentPost) => void;
  onDeletePost?: (post: ContentPost) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  posts,
  onEditPost,
  onDeletePost,
}) => {
  // Current week dates
  const today = new Date();
  const currentWeek = Array.from({ length: 5 }).map((_, index) => {
    const date = new Date(today);
    date.setDate(date.getDate() - date.getDay() + index + 1); // start from Monday
    return date;
  });

  // Time slots for the working day
  const timeSlots = Array.from({ length: 8 }).map((_, index) => {
    const hour = index + 9; // Start from 9 AM
    return `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`;
  });

  // Helper function to format date for display
  const formatDateHeader = (date: Date): string => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  // Helper function to check if a post belongs to a specific day and time slot
  const getPostsForSlot = (date: Date, timeSlot: string): ContentPost[] => {
    const slotHour = parseInt(timeSlot.split(':')[0]);
    const isPM = timeSlot.includes('PM');
    const hour24 = isPM && slotHour !== 12 ? slotHour + 12 : slotHour;

    return posts.filter(post => {
      const postDate = new Date(post.scheduledTime);
      return (
        postDate.getDate() === date.getDate() &&
        postDate.getMonth() === date.getMonth() &&
        postDate.getFullYear() === date.getFullYear() &&
        postDate.getHours() === hour24
      );
    });
  };

  // Check if date is today
  const isToday = (date: Date): boolean => {
    const now = new Date();
    return (
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear()
    );
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="min-w-max">
        {/* Day headers */}
        <div className="flex border-b border-gray-200 bg-white">
          <div className="w-20 flex-shrink-0"></div>
          {currentWeek.map((date, dateIndex) => (
            <div
              key={dateIndex}
              className={`flex-1 px-4 py-2 text-center border-l border-gray-200 ${
                isToday(date) ? 'bg-electric-50' : ''
              }`}
            >
              <div
                className={`font-medium ${
                  isToday(date) ? 'text-electric-600' : 'text-gray-700'
                }`}
              >
                {formatDateHeader(date)}
              </div>
              {isToday(date) && (
                <div className="text-xs text-electric-600 font-medium mt-0.5">Today</div>
              )}
            </div>
          ))}
        </div>

        {/* Time slots and content */}
        <div>
          {timeSlots.map((timeSlot, timeIndex) => (
            <div
              key={timeIndex}
              className={`flex border-b border-gray-200 ${
                timeIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              {/* Time indicator */}
              <div className="w-20 flex-shrink-0 py-2 px-2 text-right text-xs text-gray-500 border-r border-gray-200">
                {timeSlot}
              </div>

              {/* Day columns */}
              {currentWeek.map((date, dateIndex) => {
                const postsInSlot = getPostsForSlot(date, timeSlot);
                const hasContent = postsInSlot.length > 0;

                return (
                  <div
                    key={dateIndex}
                    className={`flex-1 min-h-[120px] border-l border-gray-200 p-2 ${
                      isToday(date) ? 'bg-electric-50/20' : ''
                    }`}
                  >
                    {/* Content cards for this slot */}
                    {hasContent ? (
                      <div className="grid grid-cols-1 gap-2">
                        {postsInSlot.map((post) => (
                          <ContentCard
                            key={post.id}
                            post={post}
                            onEdit={onEditPost}
                            onDelete={onDeletePost}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="h-full w-full rounded-md border border-dashed border-gray-300 flex items-center justify-center">
                        <span className="text-xs text-gray-400">No content</span>
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