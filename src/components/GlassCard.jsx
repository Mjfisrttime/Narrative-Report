import React from 'react';

export const GlassCard = ({ 
  children, 
  hover = 'none', 
  padding = 'lg', 
  glowColor = 'primary', 
  className = '', 
  onClick 
}) => {
  const paddingClass = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-6',
    xl: 'p-8'
  }[padding] || 'p-6';

  let glowClass = 'hover:shadow-[0_0_15px_rgba(83,221,252,0.3)]';
  if (glowColor === 'secondary') glowClass = 'hover:shadow-[0_0_15px_rgba(172,138,255,0.3)]';
  if (glowColor === 'gold') glowClass = 'hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]';

  const hoverClass = hover === 'glow' ? `${glowClass} transition-shadow duration-300` :
                     hover === 'scale' ? 'hover:scale-[1.02] transition-transform duration-300' :
                     hover === 'both' ? `hover:scale-[1.02] ${glowClass} transition-all duration-300` : '';

  return (
    <div 
      onClick={onClick}
      className={`bg-[#001c27]/60 backdrop-blur-md border border-white/10 rounded-xl ${paddingClass} ${hoverClass} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
