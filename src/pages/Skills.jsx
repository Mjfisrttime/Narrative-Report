import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { GlassCard } from '../components/GlassCard';
import { SkillBar } from '../components/SkillBar';
import { IconResolver } from '../components/IconResolver';
import { skillCategories } from '../data/skills';
import { usePageTitle } from '../hooks/usePageTitle';

export const Skills = () => {
  usePageTitle('Skills & Competencies');
  return (
    <PageTransition>
      <div className="pb-10">
        <SectionHeader 
          title="Skills & Competencies" 
          subtitle="What I Learned During My OJT"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, idx) => (
            <GlassCard key={idx} padding="lg" hover="glow">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-[#53ddfc]/20 p-2.5 rounded-lg text-[#53ddfc]">
                  <IconResolver name={category.icon} size={24} />
                </div>
                <h3 className="text-2xl font-bold font-sora text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <SkillBar 
                    key={sIdx}
                    name={skill.name}
                    proficiency={skill.proficiency}
                    description={skill.description}
                  />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
