import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import { navItems } from '../config/navigation';
import { IconResolver } from './IconResolver';
import { Footer } from './Footer';
import { profile } from '../data/profile';

export const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="flex h-screen bg-[#001018] text-[#c5ebff] font-inter overflow-hidden">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#001018]/90 backdrop-blur-md border-b border-white/5 z-40 flex items-center justify-between px-4">
        <span className="font-sora font-bold text-white bg-gradient-to-r from-[#53ddfc] to-[#ac8aff] text-transparent bg-clip-text">
          OJT Report
        </span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
          <IconResolver name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#001c27]/80 backdrop-blur-xl border-r border-white/10 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static flex flex-col`}>
        <div className="p-6 md:p-8 flex-shrink-0">
          <h1 className="font-sora text-2xl font-bold bg-gradient-to-r from-[#53ddfc] to-[#ac8aff] text-transparent bg-clip-text mb-1">
            {profile.name.split(' ')[0]}
          </h1>
          <p className="text-xs text-[#83b2c8] uppercase tracking-wider font-medium">{profile.course}</p>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#53ddfc]/10 to-[#ac8aff]/10 text-white border border-[#53ddfc]/30 shadow-[inset_2px_0_0_#53ddfc]' 
                    : 'text-[#83b2c8] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <IconResolver name={item.icon} size={18} className={isActive ? 'text-[#53ddfc]' : 'text-[#4c7c90]'} />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5 mt-auto">
          <div className="bg-[#001018] rounded-lg p-3 border border-white/5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#53ddfc] to-[#ac8aff] flex items-center justify-center text-white font-bold text-sm">
              {profile.name.charAt(0)}
            </div>
            <div>
              <p className="text-xs text-white font-medium truncate w-32">{profile.name}</p>
              <p className="text-[10px] text-[#53ddfc] truncate w-32">{profile.company}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto bg-[#001018] relative pt-16 md:pt-0">
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#53ddfc]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ac8aff]/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="flex-1 px-4 md:px-12 py-8 md:py-12 max-w-6xl mx-auto w-full relative z-10">
          <Outlet />
          <Footer />
        </div>
      </main>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 md:hidden"
          onClick={closeMenu}
        ></div>
      )}
    </div>
  );
};
