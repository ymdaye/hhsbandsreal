import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Force scroll to top with multiple fallbacks
    const scrollToTop = () => {
      // Method 1: Standard window.scrollTo
      window.scrollTo(0, 0);
      
      // Method 2: Direct manipulation of scroll properties
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Method 3: Use scrollIntoView on the root element
      const rootElement = document.getElementById('root') || document.body;
      rootElement.scrollIntoView({ top: 0, behavior: 'auto' });
    };

    // Execute immediately
    scrollToTop();

    // Execute after React has had time to render
    const timeoutId = setTimeout(scrollToTop, 50);

    // Execute one more time after a longer delay for complex layouts
    const timeoutId2 = setTimeout(scrollToTop, 150);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, [pathname]);
};

export default useScrollToTop;