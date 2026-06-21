import React, { useState } from 'react';
import { GlassCard } from './GlassCard';
import { IconResolver } from './IconResolver';

export const ReflectionCard = ({ week, title, date, preview, fullContent, keyTakeaway }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <GlassCard hover="glow" padding="lg" className="mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-[#ac8aff] text-xs font-bold uppercase tracking-wider mb-1 block">Week {week} • {date}</span>
          <h3 className="text-xl md:text-2xl font-bold font-sora text-white">{title}</h3>
        </div>
        <button 
          onClick={() => setExpanded(!expanded)}
          className="bg-[#001018] p-2 rounded-full border border-white/10 hover:border-[#ac8aff]/50 text-[#83aaff] transition-colors"
        >
          <IconResolver name={expanded ? 'ChevronUp' : 'ChevronDown'} size={20} />
        </button>
      </div>

      <div className="text-[#c5ebff] text-sm leading-relaxed">
        {expanded ? (
          <div className="space-y-4 animate-in fade-in duration-300">
            <p>{fullContent}</p>
            {keyTakeaway && (
              <div className="mt-6 p-4 bg-[#5516be]/20 border border-[#ac8aff]/30 rounded-lg flex items-start gap-3">
                <IconResolver name="Lightbulb" className="text-[#ac8aff] shrink-0 mt-0.5" size={18} />
                <div>
                  <h4 className="text-xs font-bold text-[#ac8aff] uppercase tracking-wider mb-1">Key Takeaway</h4>
                  <p className="text-sm font-medium">{keyTakeaway}</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>{preview}</p>
        )}
      </div>
    </GlassCard>
  );
};
