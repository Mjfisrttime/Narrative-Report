import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { FilterBar } from '../components/FilterBar';
import { GlassCard } from '../components/GlassCard';
import { Modal } from '../components/Modal';
import { IconResolver } from '../components/IconResolver';
import { galleryItems, galleryCategories } from '../data/gallery';
import { useFilteredData } from '../hooks/useFilteredData';
import { useLightbox } from '../hooks/useLightbox';
import { usePageTitle } from '../hooks/usePageTitle';

export const Gallery = () => {
  usePageTitle('Gallery');
  const { filtered, activeFilter, setFilter } = useFilteredData(galleryItems, 'category', 'All');
  const { isOpen, current, open, close, next, prev } = useLightbox(filtered);

  return (
    <PageTransition>
      <div className="pb-10">
        <SectionHeader 
          title="Photo Documentation" 
          subtitle="Memories & Milestones"
        />

        <FilterBar 
          categories={galleryCategories}
          active={activeFilter}
          onChange={setFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <GlassCard 
              key={item.id} 
              padding="none" 
              hover="scale"
              className="overflow-hidden group"
              onClick={() => open(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.title)}&background=001c27&color=53ddfc&size=400`; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001018] to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="text-xs font-bold text-[#53ddfc] uppercase tracking-wider mb-1 block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold font-sora text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-[#83b2c8]">{item.date}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <Modal isOpen={isOpen} onClose={close}>
          {current && (
            <div className="bg-[#001824] border border-[#53ddfc]/30 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col items-center">
              <div className="relative w-full max-h-[72vh] flex items-center justify-center overflow-hidden rounded-xl bg-black/60">
                <img 
                  src={current.image} 
                  alt={current.title} 
                  className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Caption and Navigation Bar */}
              <div className="w-full flex items-center justify-between mt-5 pt-4 border-t border-white/10 gap-4">
                <button 
                  onClick={prev} 
                  aria-label="Previous image" 
                  className="p-3 rounded-full bg-[#002130] hover:bg-[#53ddfc] text-white hover:text-[#001018] border border-white/10 transition-all cursor-pointer shadow shrink-0"
                >
                  <IconResolver name="ChevronLeft" size={22} />
                </button>

                <div className="text-center flex-1 min-w-0">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#53ddfc] bg-[#002b3d] px-2.5 py-0.5 rounded-full border border-[#53ddfc]/20">
                      {current.category}
                    </span>
                    <span className="text-xs text-[#83b2c8]">{current.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-sora text-white truncate">{current.title}</h3>
                  {current.description && (
                    <p className="text-xs sm:text-sm text-[#83b2c8] mt-1 max-w-xl mx-auto line-clamp-2">{current.description}</p>
                  )}
                </div>

                <button 
                  onClick={next} 
                  aria-label="Next image" 
                  className="p-3 rounded-full bg-[#002130] hover:bg-[#53ddfc] text-white hover:text-[#001018] border border-white/10 transition-all cursor-pointer shadow shrink-0"
                >
                  <IconResolver name="ChevronRight" size={22} />
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </PageTransition>
  );
};
