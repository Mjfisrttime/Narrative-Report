import { useState, useEffect } from 'react';

export const useTypingEffect = (text, { speed = 50, delay = 0, loop = false, pause = 2000 } = {}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeoutId;
    let index = 0;
    let isDeleting = false;

    setDisplayedText('');
    setIsComplete(false);

    const type = () => {
      if (!isDeleting) {
        // Typing forward
        index++;
        setDisplayedText(text.substring(0, index));
        
        if (index >= text.length) {
          if (loop) {
            isDeleting = true;
            timeoutId = setTimeout(type, pause);
          } else {
            setIsComplete(true);
          }
          return;
        }
      } else {
        // Deleting backward
        index--;
        setDisplayedText(text.substring(0, index));
        
        if (index === 0) {
          isDeleting = false;
          timeoutId = setTimeout(type, speed);
          return;
        }
      }
      
      // Deleting is usually faster than typing
      const nextSpeed = isDeleting ? speed / 2 : speed;
      timeoutId = setTimeout(type, nextSpeed);
    };

    let delayTimeoutId;
    if (delay > 0) {
      delayTimeoutId = setTimeout(type, delay);
    } else {
      timeoutId = setTimeout(type, speed);
    }

    return () => {
      clearTimeout(timeoutId);
      if (delayTimeoutId) clearTimeout(delayTimeoutId);
    };
  }, [text, speed, delay, loop, pause]);

  return { text: displayedText, isComplete };
};
