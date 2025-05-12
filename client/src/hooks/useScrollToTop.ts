import { useEffect, useRef } from 'react';
import { useLocation } from 'wouter';

/**
 * Custom hook that scrolls the window to the top on route changes
 */
function useScrollToTop() {
  const [location, setLocation] = useLocation();
  const prevLocation = useRef(location);

  useEffect(() => {
    // Only scroll to top if the location has changed
    if (prevLocation.current !== location) {
      window.scrollTo(0, 0);
      prevLocation.current = location;
    }
  }, [location]);

  return null;
}

export default useScrollToTop;