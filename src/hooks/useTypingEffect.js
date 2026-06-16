import { useState, useEffect } from 'react';

export const useTypingEffect = (text, { speed = 50, delay = 0 } = {}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    
    let timeoutId;
    let currentIndex = 0;

    const startTyping = () => {
      timeoutId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(timeoutId);
          setIsComplete(true);
        }
      }, speed);
    };

    if (delay > 0) {
      setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      clearInterval(timeoutId);
    };
  }, [text, speed, delay]);

  return { text: displayedText, isComplete };
};
