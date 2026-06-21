import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { IconResolver } from '../components/IconResolver';
import { company } from '../data/company';
import { usePageTitle } from '../hooks/usePageTitle';

export const AboutCompany = () => {
  usePageTitle('About Company');
  return (
    <PageTransition>
      <div className="pb-10">
        <SectionHeader 
          title="About the Company" 
          subtitle="Where I Spent My OJT"
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            <GlassCard padding="xl" hover="glow">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white p-3 rounded-xl">
                  {/* Placeholder for company logo */}
                  <IconResolver name="Cloud" className="text-[#00a1e0]" size={40} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-sora text-white">{company.name}</h2>
                  <p className="text-[#53ddfc] font-medium">{company.tagline}</p>
                </div>
              </div>
              
              <div className="prose prose-invert prose-sm max-w-none text-[#c5ebff] mb-8">
                <p>{company.overview}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                <div>
                  <h3 className="text-[#ac8aff] text-xs font-bold uppercase tracking-wider mb-2">Our Mission</h3>
                  <p className="text-sm text-[#c5ebff] italic">"{company.mission}"</p>
                </div>
                <div>
                  <h3 className="text-[#ac8aff] text-xs font-bold uppercase tracking-wider mb-2">Our Vision</h3>
                  <p className="text-sm text-[#c5ebff] italic">"{company.vision}"</p>
                </div>
              </div>
            </GlassCard>

            <h3 className="text-xl font-bold font-sora text-white mt-12 mb-6">Core Values</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {company.values.map((val, idx) => (
                <GlassCard key={idx} padding="md" hover="scale" className="flex items-start gap-4">
                  <div className="bg-[#ac8aff]/20 p-2 rounded-lg text-[#ac8aff] shrink-0">
                    <IconResolver name={val.icon} size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{val.title}</h4>
                    <p className="text-xs text-[#83b2c8] leading-relaxed">{val.description}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Sidebar Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <GlassCard padding="lg" hover="none" className="bg-[#001c27]/80">
              <h3 className="text-[#83aaff] text-xs font-bold uppercase tracking-wider mb-4">Company Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <IconResolver name="Calendar" size={16} className="text-[#4c7c90]" />
                  <div>
                    <p className="text-xs text-[#83b2c8]">Founded</p>
                    <p className="text-sm text-white font-medium">{company.founded}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <IconResolver name="MapPin" size={16} className="text-[#4c7c90]" />
                  <div>
                    <p className="text-xs text-[#83b2c8]">Headquarters</p>
                    <p className="text-sm text-white font-medium">{company.hq}</p>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <IconResolver name="Briefcase" size={16} className="text-[#4c7c90]" />
                  <div>
                    <p className="text-xs text-[#83b2c8]">Industry</p>
                    <p className="text-sm text-white font-medium">{company.industry}</p>
                  </div>
                </li>
              </ul>
            </GlassCard>

            <GlassCard padding="lg" hover="glow" glowColor="primary">
              <h3 className="text-[#53ddfc] text-xs font-bold uppercase tracking-wider mb-4">My Department</h3>
              <h4 className="text-white font-bold mb-2">{company.department.name}</h4>
              <p className="text-sm text-[#83b2c8] leading-relaxed">
                {company.department.description}
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
