// ============================================
// REFLECTIONS DATA
// Weekly insights and the overall summary.
// ============================================

export const overallSummary = "My On-the-Job Training at Salesforce has been a transformative experience. It bridged the gap between academic theories and industry practices. I've gained a profound understanding of cloud computing, CRM architecture, and agile development methodologies. This experience has solidified my passion for software engineering and equipped me with the technical and soft skills necessary for my future career."

export const reflections = [
  {
    week: 1,
    title: 'Embracing the Learning Curve',
    date: 'March 7, 2025',
    preview: 'The first week was overwhelming but exciting. Navigating a massive platform like Salesforce requires patience...',
    fullContent: 'The first week was overwhelming but exciting. Navigating a massive platform like Salesforce requires patience. I spent most of my time understanding the architecture and how different clouds (Sales, Service, Marketing) interact. Trailhead proved to be an invaluable resource. The biggest challenge was adjusting to the sheer scale of enterprise software compared to university projects.',
    keyTakeaway: 'In enterprise environments, understanding the big picture architecture is just as important as writing code.',
  },
  {
    week: 2,
    title: 'The Power of Declarative Programming',
    date: 'March 14, 2025',
    preview: 'Before this week, I thought real development meant writing code. Discovering what can be done with point-and-click tools...',
    fullContent: 'Before this week, I thought real development meant writing code. Discovering what can be done with point-and-click tools (declarative programming) in Salesforce completely shifted my perspective. Creating complex data models and UI layouts without writing a single line of code taught me that the best solution is often the most maintainable one, not necessarily the most technically complex.',
    keyTakeaway: 'Always choose configuration over customization when possible to reduce technical debt.',
  },
  {
    week: 3,
    title: 'Automating Business Logic',
    date: 'March 21, 2025',
    preview: 'Diving into Flow Builder was a highlight. Seeing how visual tools can orchestrate complex background processes...',
    fullContent: 'Diving into Flow Builder was a highlight. Seeing how visual tools can orchestrate complex background processes made me appreciate visual programming. I struggled initially with understanding context (before-save vs after-save), but building a few automated email alerts and record updates solidified my understanding of triggers and automation sequencing.',
    keyTakeaway: 'Visual automation tools require the same logical rigor as traditional programming.',
  },
  {
    week: 4,
    title: 'Transitioning to Apex',
    date: 'March 28, 2025',
    preview: 'Returning to code with Apex felt familiar but came with new rules. Governor limits forced me to think differently...',
    fullContent: 'Returning to code with Apex felt familiar but came with new rules. Governor limits forced me to think differently about resource allocation. In university, memory and CPU limits rarely mattered for small assignments. In a multi-tenant cloud environment, writing bulkified, efficient code isn\'t just a best practice—it\'s mandatory. I learned to keep SOQL queries out of loops the hard way.',
    keyTakeaway: 'Multi-tenant architecture demands highly optimized and resource-conscious programming.',
  },
]
