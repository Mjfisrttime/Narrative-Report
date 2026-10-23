// ============================================
// CERTIFICATE & ACHIEVEMENTS DATA
// ============================================

export const certificate = {
  title: 'Certificate of Completion',
  subtitle: 'This Certificate is Awarded to',
  image: '/certificate.jpg',
  recipientName: 'Mistiso A. Judyawon',
  company: 'SOARHIGH DIGITAL MARKETING SOLUTION',
  issuedDate: 'August 17, 2026',
  location: 'Prk. Avocado Maroon, Purisima, Tago, Surigao del Sur',
  
  signatories: [
    {
      name: 'John Ryan M. Medrano',
      title: 'CEO',
      company: 'SOARHIGH DIGITAL MARKETING SOLUTION'
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
    { label: 'Weeks Completed', value: 7, icon: 'Calendar' },
    { label: 'Skills Acquired', value: 5, icon: 'Brain' },
    { label: 'Tasks Finished', value: 40, suffix: '+', icon: 'CheckCircle' },
  ],
}
