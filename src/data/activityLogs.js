// ============================================
// ACTIVITY LOGS DATA
// Add a new week by copying an object and changing the values.
// Pages render these dynamically with .map() — no code changes needed.
// ============================================
export const activityLogs = [
  {
    week: 1,
    dateRange: 'March 3–7, 2025',
    title: 'Orientation & Virtual Assistant Onboarding',
    tasks: [
      'Attended agency orientation and virtual team meet-and-greet',
      'Configured remote workspace, time tracking, and communication channels',
      'Reviewed client confidentiality, SOPs, and project management tools',
      'Completed introductory training on digital task delegation and documentation',
    ],
    learnings: [
      'Understood virtual assistant standard operating procedures and workflows',
      'Learned remote team communication etiquette and daily reporting habits',
      'Familiarized with digital task boards, Trello, and Google Workspace tools',
    ],
    icon: 'BookOpen',
  },
  {
    week: 2,
    dateRange: 'March 10–14, 2025',
    title: 'Video Editing Fundamentals & Assembly',
    tasks: [
      'Reviewed raw video footage, audio sync, and clip selection standards',
      'Assembled preliminary rough cuts for client video assets',
      'Performed audio noise reduction, volume leveling, and sound cleanups',
      'Applied pacing, jump cuts, and smooth transition techniques',
    ],
    learnings: [
      'Mastered timeline organization and efficient file folder structuring',
      'Understood video pacing and retention dynamics for digital audiences',
      'Learned best practices for clean audio balancing and timeline scrubbing',
    ],
    icon: 'Video',
  },
  {
    week: 3,
    dateRange: 'March 17–21, 2025',
    title: 'Short-Form Video Production & Social Reels',
    tasks: [
      'Created vertical video reels (9:16) for Instagram and TikTok campaigns',
      'Added dynamic animated subtitles, captions, and callout graphics',
      'Integrated background music, sound effects (SFX), and b-roll overlays',
      'Rendered optimized video exports according to platform specifications',
    ],
    learnings: [
      'Grasped hook strategies to capture viewer attention in the first 3 seconds',
      'Learned typography styling and timing for engaging on-screen captions',
      'Understood export presets, bitrates, and compression for high-quality playback',
    ],
    icon: 'Film',
  },
  {
    week: 4,
    dateRange: 'March 24–28, 2025',
    title: 'Landing Page Principles & Wireframing',
    tasks: [
      'Researched high-converting landing page layouts and design patterns',
      'Drafted wireframes emphasizing visual hierarchy and hero sections',
      'Designed responsive mobile-first UI components in Figma/Canva',
      'Structured call-to-action (CTA) buttons, testimonial sections, and value props',
    ],
    learnings: [
      'Understood the psychological flow of high-converting landing pages',
      'Learned spacing, typography pairing, and contrast standards for web readability',
      'Discovered how copywriting and visual hierarchy guide user decision-making',
    ],
    icon: 'Layout',
  },
  {
    week: 5,
    dateRange: 'March 31 – April 4, 2025',
    title: 'Landing Page Development & Responsiveness',
    tasks: [
      'Built interactive, responsive landing pages using modern HTML, CSS, and web tools',
      'Integrated contact forms, booking buttons, and lead capture elements',
      'Implemented smooth hover animations and micro-interactions',
      'Conducted mobile, tablet, and desktop cross-device responsive testing',
    ],
    learnings: [
      'Learned mobile-first responsive styling and flexbox/grid layout techniques',
      'Understood form validation and user feedback handling',
      'Gained hands-on experience translating wireframe mockups into functional web pages',
    ],
    icon: 'Code',
  },
  {
    week: 6,
    dateRange: 'April 7–11, 2025',
    title: 'Visual Assets & Branding Design',
    tasks: [
      'Designed custom video thumbnails and high-CTR cover graphics',
      'Created branded marketing banners, icon sets, and digital badges',
      'Aligned visual assets with client brand guidelines, color palettes, and fonts',
      'Prepared organized asset bundles for client marketing deployments',
    ],
    learnings: [
      'Understood how color psychology and high-contrast typography boost CTR',
      'Learned efficient batch-creation of digital graphic collateral',
      'Mastered brand kit management across multi-client virtual workflows',
    ],
    icon: 'Palette',
  },
  {
    week: 7,
    dateRange: 'April 14–18, 2025',
    title: 'Quality Assurance, Testing & Client Revisions',
    tasks: [
      'Audited landing page loading performance and asset compression',
      'Processed client feedback notes and revised video cuts accordingly',
      'Conducted link verification, cross-browser compatibility, and accessibility checks',
      'Updated task boards and delivered weekly client milestone reports',
    ],
    learnings: [
      'Learned how to efficiently parse client feedback into actionable edit requests',
      'Understood web performance optimization techniques (image formats, lazy loading)',
      'Developed strong professional accountability in remote client deliverables',
    ],
    icon: 'CheckSquare',
  },
  {
    week: 8,
    dateRange: 'April 21–25, 2025',
    title: 'Final Deliverables, Handover & OJT Completion',
    tasks: [
      'Organized and archived all client landing pages, video exports, and raw project files',
      'Created comprehensive documentation and handover guide for client assets',
      'Presented final portfolio review of 40+ completed tasks to the supervisor',
      'Finalized OJT documentation, verified 324 total hours, and concluded internship',
    ],
    learnings: [
      'Mastered digital asset management and project handover best practices',
      'Reflected on technical and personal growth as a versatile remote professional',
      'Built confidence in delivering end-to-end web and media solutions independently',
    ],
    icon: 'Award',
  },
  // ============================================
  // ADD MORE WEEKS BELOW — just copy the object template above
  // ============================================
]

// Summary stats for the Activity Logs page header
export const activityLogsSummary = {
  totalWeeks: activityLogs.length,
  totalTasks: activityLogs.reduce((acc, log) => acc + log.tasks.length, 0),
  totalLearnings: activityLogs.reduce((acc, log) => acc + log.learnings.length, 0),
}
