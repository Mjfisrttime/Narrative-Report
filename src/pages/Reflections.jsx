import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { ReflectionCard } from '../components/ReflectionCard';
import { GlassCard } from '../components/GlassCard';
import { reflections, overallSummary } from '../data/reflections';

export const Reflections = () => {
  return (
    <PageTransition>
      <div className="pb-10">
        <SectionHeader 
          title="Reflections & Insights" 
          subtitle="Looking Back at the Journey"
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          {/* Weekly Reflections */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold font-sora text-white mb-6">Weekly Journals</h2>
            {reflections.map((reflection) => (
              <ReflectionCard
                key={reflection.week}
                week={reflection.week}
                title={reflection.title}
                date={reflection.date}
                preview={reflection.preview}
                fullContent={reflection.fullContent}
                keyTakeaway={reflection.keyTakeaway}
              />
            ))}
          </div>

          {/* Overall Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h2 className="text-xl font-bold font-sora text-white mb-6">Overall Summary</h2>
              <GlassCard padding="lg" hover="glow" glowColor="secondary">
                <div className="prose prose-invert prose-sm">
                  <div dangerouslySetInnerHTML={{ __html: overallSummary }} />
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
