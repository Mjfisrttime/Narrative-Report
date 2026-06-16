// ============================================
// NAVIGATION CONFIGURATION
// Add, remove, or reorder pages by editing this ONE array.
// Sidebar, mobile nav, routing, and page imports all read from here.
// ============================================

// Lazy-loaded page components — mapped by path key
// (We use a pageKey to dynamically import pages in App.jsx)
export const navItems = [
  {
    path: '/',
    label: 'Home',
    icon: 'Home',
    pageKey: 'Home',
  },
  {
    path: '/activity-logs',
    label: 'Activity Logs',
    icon: 'CalendarDays',
    pageKey: 'ActivityLogs',
  },
  {
    path: '/skills',
    label: 'Skills',
    icon: 'Wrench',
    pageKey: 'Skills',
  },
  {
    path: '/gallery',
    label: 'Gallery',
    icon: 'Image',
    pageKey: 'Gallery',
  },
  {
    path: '/reflections',
    label: 'Reflections',
    icon: 'MessageSquare',
    pageKey: 'Reflections',
  },
  {
    path: '/about-company',
    label: 'About Company',
    icon: 'Building2',
    pageKey: 'AboutCompany',
  },
  {
    path: '/certificate',
    label: 'Certificate',
    icon: 'Award',
    pageKey: 'Certificate',
  },
]

// Quick-access helper: get a nav item by its pageKey
export const getNavItem = (pageKey) =>
  navItems.find((item) => item.pageKey === pageKey)

// Quick-access helper: get just the paths for route matching
export const routePaths = navItems.map((item) => item.path)
