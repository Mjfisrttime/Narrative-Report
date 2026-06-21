import { useEffect } from 'react';

export const usePageTitle = (title) => {
  useEffect(() => {
    const base = 'OJT Report | Mistiso A. Judyawon';
    document.title = title ? `${title} — ${base}` : base;
    return () => { document.title = base; };
  }, [title]);
};
