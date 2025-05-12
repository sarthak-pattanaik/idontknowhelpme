import { useState, useEffect } from 'react';

// Custom hook for detecting if the viewport is mobile-sized
export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check if the screen is mobile sized
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on initial load
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return isMobile;
}

// Custom hook for detecting if an element is in view
export function useInView(ref: React.RefObject<HTMLElement>, options = {}) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
}

// Custom hook for scroll position
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);
    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}

// Custom hook to format date strings
export function useFormattedDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Custom hook for tracking reading progress
export function useReadingProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener('scroll', updateReadingProgress);
    
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  return completion;
}

// Custom hook for filtering a list based on a search term
export function useFilteredList<T>(list: T[], searchTerm: string, filterFn: (item: T, term: string) => boolean) {
  const [filteredList, setFilteredList] = useState<T[]>(list);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredList(list);
    } else {
      const filtered = list.filter(item => filterFn(item, searchTerm.toLowerCase()));
      setFilteredList(filtered);
    }
  }, [list, searchTerm, filterFn]);

  return filteredList;
}
