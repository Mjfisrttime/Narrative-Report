import React from 'react';
import { GradientText } from './GradientText';

export const SectionHeader = ({ title, subtitle, gradient = 'primary-to-secondary', className = '' }) => {
  return (
    <div className={`mb-12 text-center ${className}`}>
      {subtitle && (
        <p className="text-[#83aaff] font-medium tracking-wider uppercase text-sm mb-3">
          {subtitle}
        </p>
      )}
      <GradientText as="h2" gradient={gradient} className="text-3xl md:text-5xl font-bold font-sora">
        {title}
      </GradientText>
    </div>
  );
};
