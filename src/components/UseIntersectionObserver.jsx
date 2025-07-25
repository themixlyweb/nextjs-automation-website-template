import { useEffect, useState, useRef } from 'react';

/**
 * Custom hook to detect when an element enters or leaves the viewport using IntersectionObserver.
 *
 * @param {number} threshold - The percentage of the target's visibility the observer's callback should execute (default 0.1).
 * @returns {[React.RefObject, boolean]} - Returns a ref to be attached to the element and a boolean indicating visibility.
 */
const UseIntersectionObserver = ({ threshold = 0.1 } = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Callback executed when intersection changes
    const callback = ([entry]) => {
      setIsVisible(entry.isIntersecting);
    };

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(callback, {
      threshold,
      rootMargin: '0px',
    });

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup function to unobserve the element
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return [elementRef, isVisible];
};

export default UseIntersectionObserver;
