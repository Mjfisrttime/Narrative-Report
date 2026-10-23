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
  company: 'Virtual Assistant Solutions',
  companyTagline: 'Professional Remote Assistance & Digital Media Services',
  duration: 'March – April 2025',
  totalHours: '324 Hours',
  role: 'Virtual Assistant & Multimedia Intern',
  supervisor: '[Supervisor TBD]',
  coordinator: '[OJT Coordinator TBD]',
  department: 'Creative Media & Web Solutions',

  // Hero section content
  heroTagline: 'BSCS | NEMSU | Virtual Assistant OJT',
  heroGreeting: "Hi, I'm",
  heroDescription:
    'A passionate Computer Science student from North Eastern Mindanao State University, documenting my 324-hour On-the-Job Training journey in virtual assistance — gaining hands-on industry experience in landing page design, video editing, client support, and digital productivity solutions.',

  // Bio used in About / Home
  bio: 'A passionate Computer Science student with a strong drive for web development, video editing, and modern digital workflows. Completed my 324-hour OJT at a Virtual Assistant company, delivering 40+ client tasks including responsive landing page development, engaging video content creation, and remote operational support.',

  // Stats displayed on Home page and reused elsewhere
  stats: [
    { label: 'Total Hours', value: 324, icon: 'Clock' },
    { label: 'Weeks Completed', value: 8, icon: 'Calendar' },
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
