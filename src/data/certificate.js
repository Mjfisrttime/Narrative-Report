// ============================================
// CERTIFICATE & ACHIEVEMENTS DATA
// ============================================

export const certificate = {
  // Information specific to the certificate rendering
  title: 'Certificate of Completion',
  subtitle: 'This is to certify that',
  // recipient name is pulled from profile.js automatically
  description: 'has successfully completed the required hours for the On-the-Job Training program as a requirement for the degree of Bachelor of Science in Computer Science.',
  
  issuedDate: 'August 15, 2026',
  
  signatories: [
    {
      name: '[Supervisor Name]',
      title: 'OJT Supervisor / Creative Lead',
      company: 'Virtual Assistant Solutions'
    },
    {
      name: '[Coordinator Name]',
      title: 'OJT Coordinator',
      company: 'North Eastern Mindanao State University'
    }
  ],

  // Extra stats specifically highlighted on the certificate page
  achievements: [
    { label: 'Total Hours', value: 324, icon: 'Clock' },
    { label: 'Skills Acquired', value: 5, icon: 'Brain' },
    { label: 'Tasks Finished', value: 40, suffix: '+', icon: 'CheckCircle' },
    { label: 'Web & Video Assets', value: 25, suffix: '+', icon: 'Video' },
  ],
}
