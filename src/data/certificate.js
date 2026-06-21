// ============================================
// CERTIFICATE & ACHIEVEMENTS DATA
// ============================================

export const certificate = {
  // Information specific to the certificate rendering
  title: 'Certificate of Completion',
  subtitle: 'This is to certify that',
  // recipient name is pulled from profile.js automatically
  description: 'has successfully completed the required hours for the On-the-Job Training program as a requirement for the degree of Bachelor of Science in Computer Science.',
  
  issuedDate: 'June 20, 2025',
  
  signatories: [
    {
      name: '[Supervisor Name]',
      title: 'OJT Supervisor',
      company: 'Salesforce'
    },
    {
      name: '[Coordinator Name]',
      title: 'OJT Coordinator',
      company: 'North Eastern Mindanao State University'
    }
  ],

  // Extra stats specifically highlighted on the certificate page
  achievements: [
    { label: 'Total Hours', value: 600, suffix: '+', icon: 'Clock' },
    { label: 'Skills Acquired', value: 12, suffix: '+', icon: 'Brain' },
    { label: 'Projects Completed', value: 3, icon: 'Rocket' },
    { label: 'Trailhead Badges', value: 45, icon: 'Award' },
  ],
}
