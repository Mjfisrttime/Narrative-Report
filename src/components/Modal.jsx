import React, { useEffect } from 'react';
import { IconResolver } from './IconResolver';

export const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001018]/90 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Image viewer">
      <div 
        className="absolute inset-0 cursor-pointer" 
        onClick={onClose}
      ></div>
      <div className="relative z-10 w-full max-w-5xl">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-[#83b2c8] hover:text-white transition-colors"
        >
          <IconResolver name="X" size={32} />
        </button>
        {children}
      </div>
    </div>
  );
};
