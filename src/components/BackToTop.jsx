import React, { useState, useEffect } from 'react';
import { IconResolver } from './IconResolver';

export const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const main = document.querySelector('main');
    if (!main) return;

    const handleScroll = () => {
      setVisible(main.scrollTop > 400);
    };

    main.addEventListener('scroll', handleScroll, { passive: true });
    return () => main.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const main = document.querySelector('main');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-30 w-12 h-12 rounded-full bg-[#001c27]/80 backdrop-blur-md border border-white/10 text-[#53ddfc] flex items-center justify-center shadow-lg hover:bg-[#53ddfc]/20 hover:border-[#53ddfc]/40 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <IconResolver name="ArrowUp" size={20} />
    </button>
  );
};
