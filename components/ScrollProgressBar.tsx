import React, { useState, useEffect } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    if (windowHeight > 0) {
      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);
    } else {
      setScrollProgress(0); // Handle case where there is no scrollable area
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call handler once on mount to set initial state if page is already scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 w-full bg-gray-200/50 z-[51]">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-75 ease-linear"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;