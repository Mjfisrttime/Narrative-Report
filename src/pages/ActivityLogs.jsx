import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeader } from '../components/SectionHeader';
import { TimelineItem } from '../components/TimelineItem';
import { activityLogs } from '../data/activityLogs';

export const ActivityLogs = () => {
  return (
    <PageTransition>
      <div className="pb-10">
        <SectionHeader 
          title="Activity Logs" 
          subtitle="My Journey at Salesforce"
          gradient="primary-to-secondary"
        />
        
        <div className="mt-16">
          {activityLogs.map((log, index) => (
            <TimelineItem
              key={log.week}
              week={log.week}
              dateRange={log.dateRange}
              tasks={log.tasks}
              learnings={log.learnings}
              icon={log.icon}
              position={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
