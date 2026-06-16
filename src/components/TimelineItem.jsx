import React from 'react';
import { GlassCard } from './GlassCard';
import { IconResolver } from './IconResolver';

export const TimelineItem = ({ week, dateRange, tasks, learnings, icon, position = 'left' }) => {
  const isLeft = position === 'left';
  
  return (
    <div className={`relative flex items-start justify-between w-full mb-12 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Timeline line connecting dots */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[#53ddfc]/30 to-[#ac8aff]/30 top-10 -z-10"></div>
      
      {/* Spacer for empty side on desktop */}
      <div className="hidden md:block w-5/12"></div>
      
      {/* Center Dot */}
      <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#001018] border-2 border-[#53ddfc] shadow-[0_0_15px_rgba(83,221,252,0.4)] text-[#53ddfc] mx-auto absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-2 md:mt-0">
        <IconResolver name={icon || 'Circle'} size={20} />
      </div>

      {/* Content Card */}
      <div className="w-full md:w-5/12 ml-16 md:ml-0">
        <GlassCard hover="glow" padding="lg">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-2">
            <h3 className="text-xl font-bold font-sora text-white">Week {week}</h3>
            <span className="text-xs font-semibold text-[#53ddfc] bg-[#21bedc]/10 border border-[#53ddfc]/30 px-3 py-1.5 rounded-full w-max">{dateRange}</span>
          </div>
          
          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-bold text-[#83aaff] mb-3 uppercase tracking-wider flex items-center gap-2">
                <IconResolver name="CheckCircle2" size={14} /> Tasks & Activities
              </h4>
              <ul className="space-y-2">
                {tasks.map((task, idx) => (
                  <li key={idx} className="text-sm text-[#c5ebff] leading-relaxed flex items-start gap-2">
                    <span className="text-[#53ddfc] mt-1 text-[10px]">▶</span> {task}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4 border-t border-white/5">
              <h4 className="text-xs font-bold text-[#ac8aff] mb-3 uppercase tracking-wider flex items-center gap-2">
                <IconResolver name="Lightbulb" size={14} /> Key Learnings
              </h4>
              <ul className="space-y-2">
                {learnings.map((learning, idx) => (
                  <li key={idx} className="text-sm text-[#c5ebff] leading-relaxed flex items-start gap-2">
                    <span className="text-[#ac8aff] mt-1 text-[10px]">▶</span> {learning}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};
