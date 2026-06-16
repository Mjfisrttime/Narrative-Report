import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { StatGrid } from '../components/StatGrid';
import { GlassCard } from '../components/GlassCard';
import { profile } from '../data/profile';
import { useTypingEffect } from '../hooks/useTypingEffect';

export const Home = () => {
  const { text } = useTypingEffect(profile.heroGreeting + ' ' + profile.firstName, { speed: 80 });

  return (
    <PageTransition>
      <div className="flex flex-col gap-12 pb-10">
        
        {/* Hero Section */}
        <section className="text-center pt-8 md:pt-16 pb-8">
          <p className="text-[#83aaff] uppercase tracking-widest font-bold text-sm md:text-base mb-4">
            {profile.heroTagline}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-sora text-white mb-6 h-[80px] md:h-[100px]">
            {text}<span className="animate-pulse">_</span>
          </h1>
          <p className="text-[#83b2c8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {profile.heroDescription}
          </p>
        </section>

        {/* Stats Section */}
        <section>
          <StatGrid stats={profile.stats} columns={4} />
        </section>

        {/* Bio Section */}
        <section>
          <GlassCard padding="xl" hover="glow" glowColor="secondary">
            <h2 className="text-2xl font-bold font-sora text-white mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#ac8aff]/20 flex items-center justify-center text-[#ac8aff]">
                👋
              </span>
              About Me
            </h2>
            <p className="text-[#c5ebff] leading-relaxed text-lg">
              {profile.bio}
            </p>
          </GlassCard>
        </section>

      </div>
    </PageTransition>
  );
};
