// ============================================
// SKILLS & COMPETENCIES DATA
// Grouped by categories. The proficiency is out of 100.
// ============================================

export const skillCategories = [
  {
    title: 'Core Technical Skills',
    icon: 'Code',
    skills: [
      { name: 'Landing Page Design & Development', proficiency: 90, description: 'Creating high-converting, responsive landing pages with clean UI and conversion-focused layouts' },
      { name: 'Video Editing & Production', proficiency: 88, description: 'Cutting, pacing, audio mastering, visual effects, and exporting social media reels and videos' },
      { name: 'Virtual Assistance & Workflow Management', proficiency: 92, description: 'Client communication, task scheduling, email organization, and remote administrative support' },
      { name: 'Graphic Asset & Thumbnail Design', proficiency: 85, description: 'Designing promotional banners, eye-catching thumbnails, and brand-aligned visual assets' },
      { name: 'Web Optimization & QA Testing', proficiency: 84, description: 'Ensuring fast load times, cross-device responsiveness, and high conversion usability' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: 'Wrench',
    skills: [
      { name: 'Video Editing Software (Premiere / CapCut)', proficiency: 90, description: 'Timeline trimming, b-roll sync, transitions, and social media video creation' },
      { name: 'Web & Landing Page Builders', proficiency: 88, description: 'Building and structuring dynamic landing pages using HTML, CSS, and modern page builders' },
      { name: 'Canva & Figma', proficiency: 86, description: 'Designing visual collateral, wireframes, banners, and marketing templates' },
      { name: 'Google Workspace & Trello', proficiency: 92, description: 'Collaborative task tracking, client document management, and workflow tracking' },
      { name: 'Git & GitHub', proficiency: 85, description: 'Version control, code management, and hosting deployments' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: 'Users',
    skills: [
      { name: 'Client Communication', proficiency: 92, description: 'Understanding client requirements and providing proactive project progress updates' },
      { name: 'Time Management', proficiency: 95, description: 'Prioritizing multiple client deadlines, tasks, and editing deliverables efficiently' },
      { name: 'Attention to Detail', proficiency: 90, description: 'Ensuring pixel-perfect design accuracy, clean audio sync, and typo-free deliverables' },
      { name: 'Creative Problem Solving', proficiency: 88, description: 'Finding quick, effective design and technical solutions for client requests' },
      { name: 'Adaptability & Learning', proficiency: 95, description: 'Rapidly adopting new client software, brand guidelines, and creative styles' },
    ],
  },
]

// Summary for header
export const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)

