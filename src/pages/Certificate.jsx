import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { StatGrid } from '../components/StatGrid';
import { GlassCard } from '../components/GlassCard';
import { profile } from '../data/profile';
import { certificate } from '../data/certificate';
import { usePageTitle } from '../hooks/usePageTitle';

export const Certificate = () => {
  usePageTitle('Certificate');
  return (
    <PageTransition>
      <div className="pb-10">
        <SectionHeader 
          title="Certificate of Completion" 
          subtitle="The Final Milestone"
          gradient="gold"
        />

        {/* Certificate Display */}
        <div className="max-w-4xl mx-auto mt-12 mb-16">
          <GlassCard 
            padding="xl" 
            hover="glow" 
            glowColor="gold"
            className="border-yellow-500/20 relative overflow-hidden"
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-yellow-500/50 m-6"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-yellow-500/50 m-6"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-yellow-500/50 m-6"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-yellow-500/50 m-6"></div>

            <div className="text-center px-4 py-8">
              <p className="text-yellow-500/80 font-bold tracking-widest uppercase text-sm mb-8">
                {profile.company}
              </p>
              
              <h2 className="text-3xl md:text-5xl font-sora font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 mb-8">
                Certificate of Completion
              </h2>
              
              <p className="text-[#83b2c8] italic mb-6">
                This is proudly presented to
              </p>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 underline decoration-yellow-500/30 underline-offset-8">
                {profile.name}
              </h3>
              
              <p className="text-[#c5ebff] max-w-xl mx-auto leading-relaxed mb-12">
                For successfully completing the required <strong>{profile.totalHours}</strong> of On-the-Job Training as an <strong>{profile.role}</strong>. Demonstrating exceptional dedication, skill, and professional growth.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 mt-12 pt-8 border-t border-white/10 w-full max-w-2xl mx-auto">
                <div className="text-center">
                  <p className="font-sora font-bold text-white border-b border-white/20 pb-2 mb-2 w-48 mx-auto">
                    {profile.supervisor}
                  </p>
                  <p className="text-xs text-[#83b2c8] uppercase tracking-wider">OJT Supervisor</p>
                </div>
                
                <div className="text-center">
                  <p className="font-sora font-bold text-white border-b border-white/20 pb-2 mb-2 w-48 mx-auto">
                    {profile.coordinator}
                  </p>
                  <p className="text-xs text-[#83b2c8] uppercase tracking-wider">OJT Coordinator</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Achievement Stats */}
        <h3 className="text-2xl font-bold font-sora text-center text-white mb-8">Key Achievements</h3>
        <StatGrid stats={certificate.achievements} columns={4} />
      </div>
    </PageTransition>
  );
};
