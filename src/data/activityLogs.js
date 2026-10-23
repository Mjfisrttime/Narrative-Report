// ============================================
// ACTIVITY LOGS DATA
// Timeline: June 29, 2026 – August 15, 2026 (7 Weeks, 324 Hours)
// Core Stack: Shopify (Landing Pages), CapCut (Video Editing), Lark (Task Management)
// ============================================

export const activityLogs = [
  {
    week: 1,
    dateRange: 'June 29 – July 3, 2026',
    schedule: 'Mon – Fri',
    title: 'Orientation & Lark Workspace Onboarding',
    tasks: [
      'Attended agency orientation at SOARHIGH DIGITAL MARKETING SOLUTION',
      'Configured agency Lark account, communication channels, and team spaces',
      'Set up Lark Tasks board to manage daily task queues and client milestones',
      'Reviewed agency SOPs for Shopify store assets and CapCut video guidelines',
    ],
    learnings: [
      'Mastered Lark Base and Lark Tasks for tracking project progression',
      'Understood agency communication protocols and daily task completion reports',
      'Familiarized with digital asset organization and cloud project folders',
    ],
    icon: 'BookOpen',
  },
  {
    week: 2,
    dateRange: 'July 6 – July 11, 2026',
    schedule: 'Mon – Sat',
    title: 'CapCut Video Editing & Timeline Mastery',
    tasks: [
      'Imported and organized raw client video footage and voiceovers into CapCut',
      'Performed precise timeline trimming, jump cuts, and dead-air removal',
      'Applied CapCut audio noise reduction and volume leveling for clear dialogue',
      'Layered sound effects (SFX) and background music at optimal audio balances',
      'Completed Saturday weekly media batch review and task logging in Lark',
    ],
    learnings: [
      'Mastered CapCut workflow shortcuts, split cuts, and timeline snapping',
      'Understood pacing and retention mechanics for high-engagement social clips',
      'Grasped the importance of clean audio mixing in modern video production',
      'Adapted to a rigorous Monday-to-Saturday agency production schedule',
    ],
    icon: 'Video',
  },
  {
    week: 3,
    dateRange: 'July 13 – July 18, 2026',
    schedule: 'Mon – Sat',
    title: 'Short-Form Reels & Auto-Captions in CapCut',
    tasks: [
      'Produced 10+ high-converting vertical reels (9:16) for marketing campaigns in CapCut',
      'Generated and styled dynamic animated auto-captions with custom font highlights',
      'Integrated keyframe zooms, stickers, b-roll overlays, and smooth transitions in CapCut',
      'Delivered exports with high-bitrate settings optimized for mobile platforms',
      'Conducted Saturday weekend QA check for all client reel deliverables',
    ],
    learnings: [
      'Learned hook timing strategies to capture viewer attention within the first 3 seconds',
      'Discovered how kinetic subtitles and visual emphasis boost watch time and retention',
      'Organized video deliverables and logged completion statuses directly in Lark Tasks',
    ],
    icon: 'Film',
  },
  {
    week: 4,
    dateRange: 'July 20 – July 25, 2026',
    schedule: 'Mon – Sat',
    title: 'Shopify Landing Page Wireframing & Structure',
    tasks: [
      'Analyzed high-converting e-commerce landing page layouts on Shopify',
      'Drafted section wireframes: Hero Offer → Value Props → Reviews → Buy Button',
      'Prepared custom visual assets, promotional badges, and banners in Canva',
      'Created task tickets on Lark for asset approvals and client design guidelines',
      'Finalized end-of-week Saturday wireframe presentations for agency review',
    ],
    learnings: [
      'Understood the consumer psychological journey on e-commerce landing pages',
      'Learned spacing, typography hierarchy, and call-to-action button placements',
      'Grasped how conversion rate optimization (CRO) drives e-commerce sales',
    ],
    icon: 'Layout',
  },
  {
    week: 5,
    dateRange: 'July 27 – August 1, 2026',
    schedule: 'Mon – Sat',
    title: 'Shopify Landing Page Development & Customization',
    tasks: [
      'Built interactive, mobile-responsive landing pages directly in Shopify',
      'Configured product options, dynamic checkout buttons, and sticky add-to-cart bars',
      'Embedded responsive CapCut video testimonials and product demonstration clips',
      'Conducted mobile, tablet, and desktop cross-device testing across all Shopify pages',
      'Executed Saturday cross-device audit and performance optimizations on Shopify',
    ],
    learnings: [
      'Mastered Shopify section customizers and mobile-first responsive layout design',
      'Understood e-commerce cart flow, checkout optimization, and page load speed',
      'Gained confidence in building professional, live store landing pages independently',
    ],
    icon: 'Code',
  },
  {
    week: 6,
    dateRange: 'August 3 – August 8, 2026',
    schedule: 'Mon – Sat',
    title: 'Visual Marketing Collateral & Thumbnail Design',
    tasks: [
      'Designed high-CTR video cover thumbnails and promotional banners for Shopify stores',
      'Aligned graphic colors and typography with client brand kits and product aesthetics',
      'Exported web-optimized WebP graphics to ensure lightning-fast Shopify loading speeds',
      'Collaborated with the creative team via Lark group channels for feedback and iterations',
      'Packaged all visual marketing assets during Saturday creative sprint wrap-up',
    ],
    learnings: [
      'Understood color psychology and high-contrast typography in driving clicks',
      'Learned image compression techniques to keep Shopify stores loading in under 2 seconds',
      'Maintained 100% brand consistency across diverse client e-commerce stores',
    ],
    icon: 'Palette',
  },
  {
    week: 7,
    dateRange: 'August 10 – August 15, 2026',
    schedule: 'Mon – Sat',
    title: 'Quality Assurance, Lark Project Delivery & OJT Graduation',
    tasks: [
      'Performed full QA checks on Shopify landing pages and CapCut video exports',
      'Completed all assigned Lark task tickets, logging final deliverables and asset links',
      'Organized and archived 40+ completed client tasks in the agency cloud storage',
      'Presented final internship portfolio to CEO John Ryan M. Medrano',
      'Concluded 324 verified OJT hours and received official Certificate of Completion on Saturday, August 15, 2026',
    ],
    learnings: [
      'Mastered end-to-end digital agency operations: from tasking in Lark to Shopify deployment',
      'Developed strong professional discipline, accountability, and time management',
      'Built a rich, versatile portfolio spanning e-commerce web design and video marketing',
    ],
    icon: 'Award',
  },
]

// Summary stats for the Activity Logs page header
export const activityLogsSummary = {
  totalWeeks: activityLogs.length,
  totalTasks: activityLogs.reduce((acc, log) => acc + log.tasks.length, 0),
  totalLearnings: activityLogs.reduce((acc, log) => acc + log.learnings.length, 0),
}
