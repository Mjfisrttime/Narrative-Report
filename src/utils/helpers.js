/**
 * Classname merger utility
 * Filters out falsy values and joins with a space
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Format date range
 */
export const formatDateRange = (start, end) => {
  if (!start && !end) return '';
  if (start && !end) return start;
  if (!start && end) return end;
  return `${start} - ${end}`;
};

/**
 * Returns Tailwind classes for glass variants
 */
export const getGlassStyles = (variant = 'default') => {
  const base = 'bg-[#001c27]/60 backdrop-blur-md border border-white/10';
  
  switch (variant) {
    case 'glow-primary':
      return `${base} shadow-[0_0_15px_rgba(83,221,252,0.3)]`;
    case 'glow-secondary':
      return `${base} shadow-[0_0_15px_rgba(172,138,255,0.3)]`;
    case 'subtle':
      return 'bg-[#001c27]/40 backdrop-blur-sm border border-white/5';
    default:
      return base;
  }
};
