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
            <div className="flex flex-col items-center">
              <img 
                src={current.image} 
                alt={current.title} 
                className="max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="w-full flex justify-between items-center mt-6 px-4">
                <button onClick={prev} aria-label="Previous image" className="p-3 rounded-full bg-[#001c27] border border-white/10 text-white hover:bg-[#53ddfc]/20 transition-colors">
                  <IconResolver name="ChevronLeft" size={24} />
                </button>
                <div className="text-center">
                  <h3 className="text-xl font-bold font-sora text-white">{current.title}</h3>
                  <p className="text-[#83b2c8]">{current.date}</p>
                </div>
                <button onClick={next} aria-label="Next image" className="p-3 rounded-full bg-[#001c27] border border-white/10 text-white hover:bg-[#53ddfc]/20 transition-colors">
                  <IconResolver name="ChevronRight" size={24} />
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </PageTransition>
  );
};
