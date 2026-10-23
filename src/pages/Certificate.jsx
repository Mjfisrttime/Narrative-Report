import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { StatGrid } from '../components/StatGrid';
import { GlassCard } from '../components/GlassCard';
import { IconResolver } from '../components/IconResolver';
import { certificate } from '../data/certificate';
import { profile } from '../data/profile';
import { usePageTitle } from '../hooks/usePageTitle';

export const Certificate = () => {
  usePageTitle('Certificate of Completion');
  const [fullscreenOpen, setFullscreenOpen] = useState(false);

  // Handle escape key and lock body scroll when fullscreen lightbox is open
  useEffect(() => {
    if (!fullscreenOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setFullscreenOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [fullscreenOpen]);

  return (
    <PageTransition>
      <div className="pb-12">
        <SectionHeader 
          title="Certificate of Completion" 
          subtitle="Official OJT Completion Credential"
          gradient="gold"
        />

        {/* Certificate Display Showcase */}
        <div className="max-w-5xl mx-auto mt-10 mb-14">
          <GlassCard 
            padding="lg" 
            hover="glow" 
            glowColor="gold"
            className="border-yellow-500/30 overflow-hidden relative group"
          >
            {/* Top Bar with Verification Badge and Action Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 mb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-[#001018] shadow-lg shadow-yellow-500/20 shrink-0">
                  <IconResolver name="Award" size={22} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-sora text-white leading-tight">
                    Official OJT Certificate
                  </h3>
                  <p className="text-xs text-[#83b2c8]">
                    Issued by <span className="text-[#53ddfc] font-semibold">{certificate.company}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => setFullscreenOpen(true)}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#002b3d] hover:bg-[#003850] text-[#53ddfc] hover:text-white border border-[#53ddfc]/30 text-xs font-semibold transition-all cursor-pointer shadow"
                >
                  <IconResolver name="Maximize2" size={14} />
                  <span>View Fullscreen</span>
                </button>
                <a
                  href={certificate.image}
                  download="Mistiso_A_Judyawon_OJT_Certificate.jpg"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-[#001018] text-xs font-bold transition-all shadow-md shadow-yellow-500/20"
                >
                  <IconResolver name="Download" size={14} />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Certificate Image Frame */}
            <div 
              className="relative w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 shadow-2xl cursor-pointer"
              onClick={() => setFullscreenOpen(true)}
            >
              <img 
                src={certificate.image} 
                alt="Certificate of Completion - Mistiso A. Judyawon - SOARHIGH DIGITAL MARKETING SOLUTION" 
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Click to Zoom Overlay Hint */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <span className="bg-black/75 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 shadow-lg">
                  <IconResolver name="Maximize2" size={14} className="text-yellow-400" />
                  Click to Expand Fullscreen
                </span>
              </div>
            </div>

            {/* Verified Details Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-5 border-t border-white/10">
              <div className="bg-[#001c27]/70 p-3 rounded-xl border border-white/5">
                <p className="text-[10px] text-[#4c7c90] uppercase font-bold tracking-wider">Recipient</p>
                <p className="text-xs sm:text-sm font-bold text-white truncate">{profile.name}</p>
              </div>
              <div className="bg-[#001c27]/70 p-3 rounded-xl border border-white/5">
                <p className="text-[10px] text-[#4c7c90] uppercase font-bold tracking-wider">Total Hours</p>
                <p className="text-xs sm:text-sm font-bold text-[#53ddfc]">324 Hours Verified</p>
              </div>
              <div className="bg-[#001c27]/70 p-3 rounded-xl border border-white/5">
                <p className="text-[10px] text-[#4c7c90] uppercase font-bold tracking-wider">Signatory / CEO</p>
                <p className="text-xs sm:text-sm font-bold text-white truncate">John Ryan M. Medrano</p>
              </div>
              <div className="bg-[#001c27]/70 p-3 rounded-xl border border-white/5">
                <p className="text-[10px] text-[#4c7c90] uppercase font-bold tracking-wider">Issue Date</p>
                <p className="text-xs sm:text-sm font-bold text-yellow-400">{certificate.issuedDate}</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Achievement Stats Grid */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold font-sora text-center text-white mb-6">
            Program Key Achievements
          </h3>
          <StatGrid stats={certificate.achievements} columns={4} />
        </div>

        {/* OJT Graduation Day Photo Showcase */}
        <div className="max-w-5xl mx-auto mt-12">
          <GlassCard padding="lg" hover="glow" className="overflow-hidden border-[#53ddfc]/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-yellow-400/20 flex items-center justify-center text-yellow-400">
                  <IconResolver name="Award" size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-sora text-white">OJT Graduation & Certificate Presentation</h3>
                  <p className="text-xs text-[#83b2c8]">August 15, 2026 • SOARHIGH DIGITAL MARKETING SOLUTION</p>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#53ddfc] bg-[#53ddfc]/10 border border-[#53ddfc]/30 px-3 py-1 rounded-full w-max">
                Final Day of OJT
              </span>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
              <img 
                src="/ojt-last-day.jpg" 
                alt="Mistiso A. Judyawon and co-interns holding Certificates of Completion on the last day of OJT"
                className="w-full h-auto max-h-[520px] object-cover object-center group-hover:scale-[1.01] transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4 sm:p-6">
                <p className="text-xs sm:text-sm text-[#c5ebff] font-medium leading-relaxed drop-shadow">
                  Officially completing 324 hours of On-the-Job Training: Mistiso A. Judyawon (center) proudly holding his Certificate of Completion alongside fellow interns and the SOARHIGH DIGITAL MARKETING SOLUTION team.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Fullscreen Modal / Lightbox - Rendered via createPortal to spread across entire screen */}
        {fullscreenOpen && createPortal(
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 lg:p-10 overflow-y-auto"
            style={{ margin: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate Fullscreen Viewer"
          >
            {/* Full Viewport Dark Backdrop */}
            <div 
              className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity cursor-pointer"
              onClick={() => setFullscreenOpen(false)}
              aria-hidden="true"
            />

            {/* Modal Dialog Container - Spread Wide */}
            <div 
              className="relative z-10 w-full max-w-5xl xl:max-w-6xl my-auto animate-in fade-in zoom-in-95 duration-200 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Close Button */}
              <div className="w-full flex justify-end mb-3">
                <button
                  onClick={() => setFullscreenOpen(false)}
                  className="p-2.5 rounded-full bg-black/70 hover:bg-yellow-400 text-white hover:text-[#001018] border border-white/20 transition-all cursor-pointer backdrop-blur-md shadow-xl flex items-center justify-center group"
                  aria-label="Close fullscreen view"
                >
                  <IconResolver name="X" size={20} className="group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Certificate Image in High-Resolution Spread */}
              <div className="w-full bg-[#001824] border border-yellow-500/30 rounded-2xl p-3 sm:p-5 shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt="Certificate of Completion Fullscreen" 
                  className="max-h-[78vh] w-auto max-w-full rounded-xl shadow-2xl object-contain mx-auto"
                />
              </div>

              {/* Download CTA Bar */}
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={certificate.image}
                  download="Mistiso_A_Judyawon_OJT_Certificate.jpg"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-[#001018] font-bold text-xs shadow-lg shadow-yellow-500/20 transition-all cursor-pointer"
                >
                  <IconResolver name="Download" size={15} />
                  <span>Download High-Resolution Certificate</span>
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </PageTransition>
  );
};
