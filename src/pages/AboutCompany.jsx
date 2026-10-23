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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ffb703]/20 to-[#fb8500]/10 p-2.5 border border-[#ffb703]/30 shadow-lg shadow-[#ffb703]/10 flex items-center justify-center shrink-0">
                  <img 
                    src={company.logo || '/soarhigh-logo.png'} 
                    alt={company.name} 
                    className="w-full h-full object-contain drop-shadow"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-sora text-white">{company.name}</h2>
                  <p className="text-[#53ddfc] font-medium text-sm sm:text-base">{company.tagline}</p>
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

            {/* Official Agency Office & Workspace Showcase */}
            {company.officeImage && (
              <GlassCard padding="lg" hover="glow" className="overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#53ddfc]/20 flex items-center justify-center text-[#53ddfc]">
                      <IconResolver name="Building" size={18} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-sora text-white">Agency Office & Workspace</h3>
                      <p className="text-xs text-[#83b2c8]">{company.hq}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#ffb703] bg-[#ffb703]/10 border border-[#ffb703]/30 px-3 py-1 rounded-full w-max">
                    Official Workplace
                  </span>
                </div>
                
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                  <img 
                    src={company.officeImage} 
                    alt="SOARHIGH DIGITAL MARKETING SOLUTION Office"
                    className="w-full h-72 sm:h-80 md:h-96 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4 sm:p-6">
                    <p className="text-xs sm:text-sm text-[#c5ebff] font-medium leading-relaxed drop-shadow">
                      The collaborative SOARHIGH workspace: high-performance workstations for Shopify landing page development, CapCut video editing suites, and active team task tracking via Lark.
                    </p>
                  </div>
                </div>
              </GlassCard>
            )}

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

            <GlassCard padding="lg" hover="none" className="bg-[#001c27]/80">
              <h3 className="text-[#83aaff] text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <IconResolver name="Layout" size={15} className="text-[#53ddfc]" /> Agency Workflow & Tools
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white">Shopify Landing Pages</span>
                    <span className="text-[10px] text-[#53ddfc] font-semibold bg-[#002b3d] px-2 py-0.5 rounded border border-[#53ddfc]/20">Client Project</span>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-white/10 shadow group">
                    <img 
                      src="/shopify-landing-page.png" 
                      alt="Shopify Landing Page Project" 
                      className="w-full h-32 object-cover object-top group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <p className="text-[11px] text-[#83b2c8] mt-1.5 leading-relaxed">
                    Luxevéria® high-converting e-commerce landing page built during OJT.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white">Lark Task Management</span>
                    <span className="text-[10px] text-[#ac8aff] font-semibold bg-[#002b3d] px-2 py-0.5 rounded border border-[#ac8aff]/20">Internal SOP</span>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-white/10 shadow group">
                    <img 
                      src="/lark-workspace.png" 
                      alt="Lark Base Project Management" 
                      className="w-full h-32 object-cover object-top group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <p className="text-[11px] text-[#83b2c8] mt-1.5 leading-relaxed">
                    Live Lark Base task board managing client product lines, bundle configurations, and urgent queues.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
