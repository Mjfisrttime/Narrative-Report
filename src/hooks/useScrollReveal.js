import { useState, useEffect, useRef } from 'react';

export const useScrollReveal = ({ threshold = 0.1, triggerOnce = true } = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  return { ref, isVisible };
};
