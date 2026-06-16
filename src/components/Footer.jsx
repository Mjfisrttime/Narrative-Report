import React from 'react';
import { profile } from '../data/profile';

export const Footer = () => {
  return (
    <footer className="mt-20 py-8 border-t border-white/5 text-center">
      <p className="text-[#83b2c8] text-sm">
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <p className="text-[#83b2c8]/60 text-xs mt-2">
        {profile.courseFullName} • {profile.school}
      </p>
    </footer>
  );
};
