// ============================================
// PROFILE DATA
// Single source of truth for all personal info used across every page.
// Update your details here → entire site updates automatically.
// ============================================

export const profile = {
  // Personal info
  name: 'Mistiso A. Judyawon',
  firstName: 'Mistiso',
  avatar: '/avatar.jpg', // Add the path to your image here (e.g., '/my-photo.jpg' placed in the public folder)
  course: 'BSCS',
  courseFullName: 'Bachelor of Science in Computer Science',
  school: 'NEMSU',
  schoolFullName: 'North Eastern Mindanao State University',

  // OJT info
  company: 'SOARHIGH DIGITAL MARKETING SOLUTION',
  companyTagline: 'Web Design, Landing Page Development & Digital Content Creation',
  duration: 'June 29 – August 15, 2026',
  totalHours: '324 Hours',
  role: 'Web Design & Digital Media Intern',
  supervisor: 'John Ryan M. Medrano (CEO)',
  coordinator: '[OJT Coordinator TBD]',
  department: 'Web Design & Digital Media Team',

  // Hero section content
  heroTagline: 'BSCS | NEMSU | Soarhigh Digital OJT',
  heroGreeting: "Hi, I'm",
  heroDescription:
    'A passionate Computer Science student from North Eastern Mindanao State University, documenting my 324-hour On-the-Job Training journey at SOARHIGH DIGITAL MARKETING SOLUTION — building conversion-driven Shopify landing pages, editing dynamic video content with CapCut, and managing team tasks on Lark.',

  // Bio used in About / Home
  bio: 'A passionate Computer Science student with practical expertise in e-commerce web design, multimedia production, and agile operations. Successfully completed 324 hours of On-the-Job Training (June 29 – August 15, 2026) at SOARHIGH DIGITAL MARKETING SOLUTION, delivering 40+ client deliverables including high-converting Shopify landing pages, engaging CapCut video reels, and workflow tracking via Lark.',

  // Stats displayed on Home page and reused elsewhere
  stats: [
    { label: 'Total Hours', value: 324, icon: 'Clock' },
    { label: 'Weeks Completed', value: 7, icon: 'Calendar' },
    { label: 'Skills Learned', value: 5, icon: 'Zap' },
    { label: 'Tasks Finished', value: 40, suffix: '+', icon: 'CheckCircle' },
  ],

  // Social Links (remove entries or set url to '' to hide them)
  socials: [
    { name: 'Portfolio', url: 'https://mistisojudyawon-portfolio.vercel.app/', icon: 'BrandGlobe' },
    { name: 'Facebook', url: 'https://www.facebook.com/mistiso.judyawon.2025/', icon: 'Facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/grave_mj0221/?hl=en', icon: 'Instagram' },
    { name: 'X', url: '', icon: 'Twitter' },
  ],
}
