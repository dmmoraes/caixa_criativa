import { useState, useEffect, RefObject } from 'react';

interface ObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  { threshold = 0.1, rootMargin = '0px', triggerOnce = true }: ObserverOptions = {},
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    // Ensure we have an element and the IntersectionObserver API is available for the browser.
    if (!element || typeof window.IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIntersecting(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, threshold, rootMargin, triggerOnce]);

  return isIntersecting;
};

export default useIntersectionObserver;
