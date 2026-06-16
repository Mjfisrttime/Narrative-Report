import React from 'react';

export const FilterBar = ({ categories, active, onChange }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            active === category
              ? 'bg-gradient-to-r from-[#53ddfc] to-[#ac8aff] text-white shadow-[0_0_15px_rgba(83,221,252,0.4)]'
              : 'bg-[#001c27]/60 text-[#c5ebff] border border-white/10 hover:border-[#53ddfc]/50 hover:text-white'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
