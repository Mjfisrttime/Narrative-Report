import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { StatGrid } from '../components/StatGrid';
import { GlassCard } from '../components/GlassCard';
import { profile } from '../data/profile';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { usePageTitle } from '../hooks/usePageTitle';
import { IconResolver } from '../components/IconResolver';

export const Home = () => {
  usePageTitle('Home');
  const { text } = useTypingEffect(profile.heroGreeting + ' ' + profile.firstName, { speed: 80, loop: true });

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
        <section className="flex flex-col gap-6">
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

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {profile.socials.filter((s) => s.url && s.url !== '#').map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                title={social.name}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#002b3d]/50 border border-white/10 text-[#83b2c8] hover:text-white hover:bg-[#83aaff]/20 hover:border-[#83aaff]/40 transition-all duration-300 group"
              >
                <IconResolver name={social.icon} className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </section>

      </div>
    </PageTransition>
  );
};
