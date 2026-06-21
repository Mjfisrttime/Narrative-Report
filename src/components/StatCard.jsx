import React from 'react';
import { GlassCard } from './GlassCard';
import { IconResolver } from './IconResolver';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

export const StatCard = ({ icon, label, value, suffix = '' }) => {
  const { ref, count } = useAnimatedCounter(value, { duration: 1500 });

  return (
    <GlassCard hover="scale" padding="md" className="flex flex-col items-center justify-center text-center">
      <div className="bg-[#21bedc]/20 p-3 rounded-full mb-4 text-[#53ddfc]">
        <IconResolver name={icon} size={28} />
      </div>
      <h3 ref={ref} className="text-3xl md:text-4xl font-bold font-sora text-white mb-1">
        {count}{suffix}
      </h3>
      <p className="text-[#83b2c8] text-sm md:text-base font-medium">{label}</p>
    </GlassCard>
  );
};
