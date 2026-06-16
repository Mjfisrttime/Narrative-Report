import React from 'react';

export const SkillBar = ({ name, proficiency, variant = 'bar', description }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-end mb-2">
        <div>
          <h4 className="text-white font-medium">{name}</h4>
          {description && <p className="text-xs text-[#83b2c8] mt-0.5">{description}</p>}
        </div>
        <span className="text-[#53ddfc] font-bold text-sm">{proficiency}%</span>
      </div>
      <div className="w-full bg-[#001c27] rounded-full h-2.5 border border-white/5 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-[#53ddfc] to-[#ac8aff] h-2.5 rounded-full shadow-[0_0_10px_rgba(83,221,252,0.5)] transition-all duration-1000 ease-out" 
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );
};
