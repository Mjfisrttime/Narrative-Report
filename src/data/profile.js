// ============================================
// PROFILE DATA
// Single source of truth for all personal info used across every page.
// Update your details here → entire site updates automatically.
// ============================================

export const profile = {
  // Personal info
  name: 'Mistiso A. Judyawon',
  firstName: 'Mistiso',
  course: 'BSCS',
  courseFullName: 'Bachelor of Science in Computer Science',
  school: 'NEMSU',
  schoolFullName: 'North Eastern Mindanao State University',

  // OJT info
  company: 'Salesforce',
  companyTagline: "The World's #1 CRM Platform",
  duration: 'March – June 2025',
  totalHours: '600+',
  role: 'OJT Intern',
  supervisor: '[Supervisor TBD]',
  coordinator: '[OJT Coordinator TBD]',
  department: '[Department TBD]',

  // Hero section content
  heroTagline: 'BSCS | NEMSU | Salesforce OJT',
  heroGreeting: "Hi, I'm",
  heroDescription:
    'A passionate Computer Science student from North Eastern Mindanao State University, documenting my On-the-Job Training journey with Salesforce — gaining hands-on experience in cloud computing, CRM administration, and enterprise software development.',

  // Bio used in About / Home
  bio: 'A passionate Computer Science student with a keen interest in software development, cloud technologies, and problem-solving. Currently completing my OJT at Salesforce, where I am gaining invaluable real-world experience in enterprise-level software and CRM solutions.',

  // Stats displayed on Home page and reused elsewhere
  stats: [
    { label: 'Total Hours', value: 600, suffix: '+', icon: 'Clock' },
    { label: 'Weeks Completed', value: 15, icon: 'Calendar' },
    { label: 'Skills Learned', value: 12, suffix: '+', icon: 'Zap' },
    { label: 'Projects', value: 3, icon: 'FolderOpen' },
  ],
}
