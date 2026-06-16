import { useState, useMemo } from 'react';

export const useFilteredData = (data, filterKey, defaultFilter = 'All') => {
  const [activeFilter, setFilter] = useState(defaultFilter);

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return data;
    return data.filter(item => item[filterKey] === activeFilter);
  }, [data, filterKey, activeFilter]);

  return {
    filtered,
    activeFilter,
    setFilter
  };
};
