import React from 'react';

export const GradientText = ({ as: Component = 'span', className = '', gradient = 'primary-to-secondary', children, ...props }) => {
  let gradientClasses = 'bg-gradient-to-r from-[#53ddfc] to-[#ac8aff]';
  
  if (gradient === 'primary') gradientClasses = 'bg-gradient-to-r from-[#53ddfc] to-[#40ceed]';
  if (gradient === 'gold') gradientClasses = 'bg-gradient-to-r from-yellow-400 to-yellow-600';

  return (
    <Component className={`text-transparent bg-clip-text ${gradientClasses} ${className}`} {...props}>
      {children}
    </Component>
  );
};
