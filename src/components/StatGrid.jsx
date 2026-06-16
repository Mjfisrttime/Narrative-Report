import React from 'react';
import { StatCard } from './StatCard';

export const StatGrid = ({ stats, columns = 4, className = '' }) => {
  const colClass = {
    2: 'grid-cols-2 md:grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  }[columns] || 'grid-cols-2 md:grid-cols-4';

  return (
    <div className={`grid gap-4 md:gap-6 ${colClass} ${className}`}>
      {stats.map((stat, idx) => (
        <StatCard 
          key={idx}
          icon={stat.icon}
          label={stat.label}
          value={stat.value}
          suffix={stat.suffix}
        />
      ))}
    </div>
  );
};
