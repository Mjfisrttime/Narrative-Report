// ============================================
// CENTRAL DESIGN TOKEN CONFIGURATION
// Extracted from Stitch "OJT Dark Glassmorphism" design system
// Change any value here → entire site updates automatically
// ============================================

export const theme = {
  colors: {
    background: '#001018',
    surface: {
      DEFAULT: '#001018',
      container: '#001c27',
      high: '#00232f',
      highest: '#002a38',
      bright: '#003040',
      low: '#00161f',
    },
    primary: {
      DEFAULT: '#53ddfc',
      dim: '#40ceed',
      container: '#21bedc',
      on: '#004b58',
    },
    secondary: {
      DEFAULT: '#ac8aff',
      dim: '#8455ef',
      container: '#5516be',
      on: '#280067',
    },
    tertiary: {
      DEFAULT: '#83aaff',
      container: '#6b9cff',
    },
    text: {
      DEFAULT: '#c5ebff',
      muted: '#83b2c8',
    },
    outline: {
      DEFAULT: '#4c7c90',
      subtle: '#1a4d61',
    },
    accent: {
      gold: '#f59e0b',
    },
    error: '#ff716c',
  },

  glass: {
    background: 'rgba(0, 28, 39, 0.6)',
    backgroundHeavy: 'rgba(0, 28, 39, 0.8)',
    blur: '12px',
    blurHeavy: '16px',
    border: 'rgba(255, 255, 255, 0.1)',
    borderHover: 'rgba(255, 255, 255, 0.2)',
    hoverGlow: {
      primary: 'rgba(83, 221, 252, 0.3)',
      secondary: 'rgba(172, 138, 255, 0.3)',
      gold: 'rgba(245, 158, 11, 0.3)',
    },
  },

  fonts: {
    headline: "'Sora', sans-serif",
    body: "'Inter', sans-serif",
  },

  roundness: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },

  // Framer Motion animation presets — reusable across all components
  animations: {
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    fadeIn: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    slideInLeft: {
      initial: { opacity: 0, x: -30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    slideInRight: {
      initial: { opacity: 0, x: 30 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    stagger: {
      container: { staggerChildren: 0.1 },
      item: {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
      },
    },
  },

  // Page transition preset for React Router + Framer Motion
  pageTransition: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.35, ease: 'easeInOut' },
  },
}
