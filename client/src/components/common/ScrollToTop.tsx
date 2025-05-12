import React, { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Component that scrolls the page to the top on route changes
 */
const ScrollToTop: React.FC = () => {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
};

export default ScrollToTop;