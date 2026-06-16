// ============================================
// SKILLS & COMPETENCIES DATA
// Grouped by categories. The proficiency is out of 100.
// ============================================

export const skillCategories = [
  {
    title: 'Technical Skills',
    icon: 'Code',
    skills: [
      { name: 'Salesforce Administration', proficiency: 85, description: 'User management, security, objects, and fields configuration' },
      { name: 'Apex Programming', proficiency: 75, description: 'Server-side logic, triggers, and classes' },
      { name: 'Lightning Web Components (LWC)', proficiency: 70, description: 'Modern front-end component development' },
      { name: 'SOQL & SOSL', proficiency: 80, description: 'Data querying and searching within Salesforce' },
      { name: 'Flow Builder', proficiency: 85, description: 'Declarative automation and business logic' },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: 'Wrench',
    skills: [
      { name: 'VS Code & Salesforce Extensions', proficiency: 90, description: 'Primary IDE and development environment' },
      { name: 'Git & GitHub', proficiency: 85, description: 'Version control and collaborative development' },
      { name: 'Salesforce CLI (sfdx)', proficiency: 80, description: 'Command-line interface for org management' },
      { name: 'Postman', proficiency: 75, description: 'API testing and integration verification' },
      { name: 'Data Loader', proficiency: 85, description: 'Bulk data import, export, and manipulation' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: 'Users',
    skills: [
      { name: 'Problem Solving', proficiency: 90, description: 'Analyzing complex requirements and finding optimal solutions' },
      { name: 'Team Collaboration', proficiency: 85, description: 'Working effectively in agile development teams' },
      { name: 'Communication', proficiency: 80, description: 'Articulating technical concepts to non-technical stakeholders' },
      { name: 'Time Management', proficiency: 85, description: 'Prioritizing tasks and meeting project deadlines' },
      { name: 'Adaptability', proficiency: 95, description: 'Quickly learning new technologies and platform updates' },
    ],
  },
]

// Summary for header
export const totalSkills = skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)
