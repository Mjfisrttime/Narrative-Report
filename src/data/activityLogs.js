// ============================================
// ACTIVITY LOGS DATA
// Add a new week by copying an object and changing the values.
// Pages render these dynamically with .map() — no code changes needed.
// ============================================

export const activityLogs = [
  {
    week: 1,
    dateRange: 'March 3–7, 2025',
    title: 'Orientation & Onboarding',
    tasks: [
      'Attended company orientation and met the team',
      'Set up development environment and tools',
      'Completed initial Salesforce Trailhead modules',
      'Reviewed company policies and OJT guidelines',
    ],
    learnings: [
      'Understood the Salesforce ecosystem and product suite',
      'Learned about company culture and workflows',
      'Familiarized with Trailhead learning platform',
    ],
    icon: 'BookOpen',
  },
  {
    week: 2,
    dateRange: 'March 10–14, 2025',
    title: 'Salesforce Fundamentals',
    tasks: [
      'Completed Salesforce Administrator fundamentals trail',
      'Explored Salesforce Setup and configuration options',
      'Created custom objects and fields in a sandbox environment',
      'Studied data modeling best practices',
    ],
    learnings: [
      'Grasped core CRM concepts and data architecture',
      'Understood relationships between objects',
      'Learned to navigate the Salesforce admin console',
    ],
    icon: 'Settings',
  },
  {
    week: 3,
    dateRange: 'March 17–21, 2025',
    title: 'Automation & Workflows',
    tasks: [
      'Built workflow rules and process builder flows',
      'Created approval processes for sample scenarios',
      'Studied Salesforce Flow basics',
      'Completed automation-related Trailhead badges',
    ],
    learnings: [
      'Understood declarative automation tools',
      'Learned when to use flows vs. workflow rules',
      'Gained experience in business process automation',
    ],
    icon: 'Workflow',
  },
  {
    week: 4,
    dateRange: 'March 24–28, 2025',
    title: 'Apex Development Basics',
    tasks: [
      'Started learning Apex programming language',
      'Wrote basic Apex classes and triggers',
      'Explored SOQL and SOSL queries',
      'Practiced with Developer Console',
    ],
    learnings: [
      'Understood server-side programming in Salesforce',
      'Learned Apex syntax and governor limits',
      'Grasped the importance of bulkified code',
    ],
    icon: 'Code',
  },
  {
    week: 5,
    dateRange: 'March 31 – April 4, 2025',
    title: 'Lightning Components',
    tasks: [
      'Studied Lightning Web Components (LWC) architecture',
      'Built a basic custom Lightning component',
      'Learned about component lifecycle and events',
      'Explored Lightning Design System (SLDS)',
    ],
    learnings: [
      'Understood modern front-end development in Salesforce',
      'Learned component-based UI architecture',
      'Practiced with HTML templates and JavaScript controllers',
    ],
    icon: 'Zap',
  },
  {
    week: 6,
    dateRange: 'April 7–11, 2025',
    title: 'Integration & APIs',
    tasks: [
      'Studied REST and SOAP API concepts',
      'Made API calls using Postman and Workbench',
      'Explored connected apps and OAuth flows',
      'Completed integration-focused Trailhead modules',
    ],
    learnings: [
      'Understood Salesforce API architecture',
      'Learned authentication and authorization patterns',
      'Gained hands-on experience with API testing tools',
    ],
    icon: 'Globe',
  },
  {
    week: 7,
    dateRange: 'April 14–18, 2025',
    title: 'Reports & Dashboards',
    tasks: [
      'Created custom reports with various report types',
      'Built interactive dashboards for data visualization',
      'Configured report filters and groupings',
      'Studied analytics best practices',
    ],
    learnings: [
      'Mastered Salesforce reporting capabilities',
      'Learned to tell data stories through dashboards',
      'Understood business intelligence within CRM',
    ],
    icon: 'BarChart3',
  },
  {
    week: 8,
    dateRange: 'April 21–25, 2025',
    title: 'Security & Access Control',
    tasks: [
      'Configured profiles, roles, and permission sets',
      'Set up organization-wide defaults and sharing rules',
      'Implemented field-level security',
      'Studied Salesforce security model in depth',
    ],
    learnings: [
      'Understood multi-layered security architecture',
      'Learned data access and visibility controls',
      'Grasped compliance and data protection concepts',
    ],
    icon: 'Shield',
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
