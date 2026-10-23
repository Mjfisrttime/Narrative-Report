import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IconResolver } from './IconResolver';

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 lg:p-10 overflow-y-auto"
      style={{ margin: 0 }}
      role="dialog" 
      aria-modal="true" 
      aria-label="Image viewer"
    >
      {/* Full Viewport Dark Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity cursor-pointer" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Centered & Wide Spread Content Container */}
      <div 
        className="relative z-10 w-full max-w-5xl xl:max-w-6xl my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Top-Right Close Button */}
        <div className="flex justify-end mb-3">
          <button 
            onClick={onClose}
            aria-label="Close modal"
            className="p-2.5 rounded-full bg-black/70 hover:bg-[#53ddfc] text-white hover:text-[#001018] border border-white/20 transition-all cursor-pointer backdrop-blur-md shadow-xl flex items-center justify-center group"
          >
            <IconResolver name="X" size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Modal Children Content */}
        {children}
      </div>
    </div>,
    document.body
  );
};
