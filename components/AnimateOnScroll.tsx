import React, { useRef, ReactNode, useState, useEffect, CSSProperties } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ children, className = '', style }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This effect runs only on the client side to check the user's motion preference.
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Set a threshold of 0.15 so the animation starts when 15% of the element is visible.
  const isVisible = useIntersectionObserver(ref, { threshold: 0.15, triggerOnce: true });

  // If the user prefers reduced motion, render the children without any animation classes.
  if (prefersReducedMotion) {
    return <div className={className} style={style}>{children}</div>;
  }
  
  const animationClasses = 'transition-all duration-[1200ms] ease-in-out';
  const initialClasses = 'opacity-0 translate-y-5';
  const finalClasses = 'opacity-100 translate-y-0';

  return (
    <div
      ref={ref}
      style={style}
      className={`${className} ${animationClasses} ${isVisible ? finalClasses : initialClasses}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;