// ============================================
// SKILLS & COMPETENCIES DATA
// Grouped by categories. The proficiency is out of 100.
// ============================================

export const skillCategories = [
  {
    title: 'Core Technical Skills',
    icon: 'Code',
    skills: [
      { name: 'Shopify Landing Page Development', proficiency: 92, description: 'Building high-converting, responsive e-commerce landing pages, product showcases, and sales funnels on Shopify' },
      { name: 'CapCut Video Editing & Production', proficiency: 92, description: 'Mastering timeline trimming, viral pacing, auto-captions, sound effects, and social reels exclusively on CapCut' },
      { name: 'Lark Task Management & Operations', proficiency: 90, description: 'Coordinating task workflows, tracking client milestones, daily reporting, and collaborative documentation on Lark' },
      { name: 'Graphic Asset & Thumbnail Design', proficiency: 86, description: 'Designing high-CTR video thumbnails, promotional banners, and brand-consistent marketing collateral' },
      { name: 'Mobile Responsiveness & QA Testing', proficiency: 85, description: 'Optimizing mobile checkout flows, layout responsiveness, and cross-device speed on Shopify' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: 'Wrench',
    skills: [
      { name: 'Shopify', proficiency: 92, description: 'Primary platform for creating, structuring, and launching conversion-driven landing pages' },
      { name: 'CapCut', proficiency: 94, description: 'Primary video editing suite for cutting footage, syncing audio, and generating dynamic captions' },
      { name: 'Lark (Base, Tasks & Docs)', proficiency: 90, description: 'Central enterprise tool for managing daily tasks, project boards, and team communication' },
      { name: 'Canva & Figma', proficiency: 88, description: 'Crafting visual assets, banners, product mockups, and UI design wireframes' },
      { name: 'Git & GitHub', proficiency: 85, description: 'Version control, repository management, and website deployment workflows' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: 'Users',
    skills: [
      { name: 'Workflow & Task Accountability', proficiency: 95, description: 'Consistently updating Lark boards, meeting strict task deadlines, and maintaining transparent progress' },
      { name: 'Attention to Detail', proficiency: 92, description: 'Ensuring pixel-perfect landing page alignment, accurate video subtitle sync, and clean audio cuts' },
      { name: 'Client & Team Communication', proficiency: 90, description: 'Proactive communication through Lark channels, incorporating feedback, and delivering revisions' },
      { name: 'Creative Problem Solving', proficiency: 88, description: 'Solving layout constraints in Shopify and crafting engaging visual hooks in CapCut' },
      { name: 'Agility & Adaptability', proficiency: 95, description: 'Quickly adapting to varied client brand guidelines, product niches, and fast-paced deliverables' },
    ],
  },
]

// Summary for header
export const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)
