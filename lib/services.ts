export interface ServiceData {
  slug: string;
  title: string;
  headline: string;
  philosophy: string;
  bullets: string[];
  heroImage: string;
  heroAlt: string;
  projectSlugs: string[];
  process: { step: string; description: string }[];
}

export const services: ServiceData[] = [
  {
    slug: 'residential-architects',
    title: 'Residential Architects',
    headline: 'Homes designed around the way you live.',
    philosophy:
      "Residential work is at the core of our practice. Every home is a singular brief — shaped by a family's routines, their relationships with light and air, their need for privacy and openness. We are drawn to the complexity of designing spaces that must perform across every hour of the day and every stage of life.\n\nWhether a new villa in Bengaluru's outskirts, a thoughtful apartment renovation in Jayanagar, or a courtyard home drawing on Karnataka's building traditions, we approach every residential commission the same way: listening carefully before we draw, and drawing carefully before we build.",
    bullets: [
      'New residential construction',
      'Apartment renovations and fit-outs',
      'Home extensions and additions',
      'Courtyard and vastu-sensitive planning',
      'Bungalow and villa design',
      'Full documentation and site supervision',
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=85',
    heroAlt: 'Light-filled residential interior with natural materials and clean architectural lines',
    projectSlugs: ['kensington-mews-house', 'notting-hill-family-home'],
    process: [
      { step: 'Brief & Vision', description: 'We begin with a detailed brief session — understanding your lifestyle, aspirations, budget, and timeline.' },
      { step: 'Concept Design', description: 'Sketch options, site analysis, and initial spatial proposals presented for your feedback.' },
      { step: 'Design Development', description: 'Detailed drawings, material palette, and 3D visualisations refined through close collaboration.' },
      { step: 'Approvals', description: 'We manage BBMP/BDA approvals, structural drawings, and all statutory documentation.' },
      { step: 'Construction', description: 'Regular site visits and contractor coordination to ensure design intent is faithfully realised.' },
    ],
  },
  {
    slug: 'commercial-architects',
    title: 'Commercial Architects',
    headline: 'Workplaces and retail spaces that inspire.',
    philosophy:
      'A well-designed workplace does more than accommodate work — it shapes it. The layout of a floor plan, the quality of light in a meeting room, the rhythm of a corridor: these things influence how people think, collaborate, and feel about the time they spend at work.\n\nWe design commercial spaces that are purposeful without being sterile, and distinctive without being distracting. Our portfolio spans offices, retail showrooms, restaurants, and mixed-use developments across Bengaluru — each project an exercise in understanding the specific culture and ambitions of the organisation commissioning it.',
    bullets: [
      'Office design and fit-out',
      'Retail and showroom interiors',
      'Restaurant and café design',
      'Commercial building refurbishment',
      'Mixed-use development',
      'Tenant improvement works',
    ],
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85',
    heroAlt: 'Open-plan commercial studio with exposed structure and natural light',
    projectSlugs: ['clerkenwell-studio-offices'],
    process: [
      { step: 'Briefing & Programming', description: "Understanding your team's needs, workflow, brand identity, and growth plans." },
      { step: 'Concept & Layout', description: 'Space planning, concept presentations, and adjacency studies.' },
      { step: 'Design Development', description: 'Detailed interior design, FF&E schedule, lighting plan, and finishes.' },
      { step: 'Tender & Procurement', description: 'Contractor selection, BOQ preparation, and cost management.' },
      { step: 'Delivery', description: 'Site supervision, snagging, and handover.' },
    ],
  },
  {
    slug: 'residential-interior-design',
    title: 'Residential Interior Design',
    headline: 'Interiors that are personal, not just pretty.',
    philosophy:
      'Interior design, at its best, is the distillation of a life into space. We approach every interior commission as a deep collaboration — your sense of how you want to live, your instincts around colour and material, your collection of objects and memories — combined with our understanding of proportion, light, and the way rooms work.\n\nWe do not work from templates. Each project begins with careful observation: how does the light move through the space across the day? What are the views? What is the existing character of the building, and how should a new interior respond to it? The answers shape every decision that follows.',
    bullets: [
      'Full interior design commissions',
      'Material, finish, and colour specification',
      'Custom furniture and joinery design',
      'Kitchen and bathroom design',
      'Lighting design',
      'Art and object curation',
    ],
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=85',
    heroAlt: 'Refined residential interior with warm material palette and curated objects',
    projectSlugs: ['chelsea-interior-design', 'kensington-mews-house'],
    process: [
      { step: 'Discovery', description: 'A deep-dive into your preferences, lifestyle, and inspiration references.' },
      { step: 'Concept Presentation', description: 'Mood boards, colour palette, key furniture pieces, and spatial arrangement.' },
      { step: 'Detail Design', description: 'Final material selections, custom joinery drawings, lighting layouts.' },
      { step: 'Procurement', description: 'Vendor coordination, furniture ordering, and delivery scheduling.' },
      { step: 'Styling & Handover', description: 'On-site styling, final adjustments, and a complete handover.' },
    ],
  },
  {
    slug: 'planning-applications',
    title: 'Planning & Approvals',
    headline: 'Expert navigation of a complex process.',
    philosophy:
      'Building approval processes in Bengaluru — BBMP sanction, BDA layouts, BMRDA permissions, fire NOCs, occupancy certificates — can feel impenetrable. We have accumulated detailed knowledge of these processes across years of practice, and we guide our clients through them with clarity and efficiency.\n\nWe prepare complete drawing sets and documentation, liaise directly with authorities, and manage the process end to end. Our goal is always to secure robust, unambiguous approvals that protect your investment and allow construction to proceed without delay.',
    bullets: [
      'BBMP building plan sanction',
      'BDA and BMRDA approvals',
      'Occupancy certificate applications',
      'Fire NOC coordination',
      'BESCOM and BWSSB service connections',
      'Regularisation of unauthorised structures',
    ],
    heroImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85',
    heroAlt: 'Architectural drawings and planning documentation laid out on a studio desk',
    projectSlugs: ['bloomsbury-conservation', 'notting-hill-family-home'],
    process: [
      { step: 'Assessment', description: 'We review your site, title documents, and existing approvals to identify the approval pathway.' },
      { step: 'Drawing Preparation', description: 'Full architectural drawing set prepared to authority standards.' },
      { step: 'Submission', description: 'Application lodged with the relevant authority with all supporting documents.' },
      { step: 'Liaison', description: 'We follow up regularly and respond promptly to any queries from the authority.' },
      { step: 'Sanction', description: 'Approved plans collected and handed over with a clear explanation of conditions.' },
    ],
  },
  {
    slug: 'conservation-heritage-design',
    title: 'Conservation & Heritage',
    headline: 'Stewardship as a creative act.',
    philosophy:
      'Karnataka has a rich architectural heritage — from Hoysala temples and Vijayanagara structures to colonial-era bungalows and Chettinad-influenced merchant homes. This heritage is irreplaceable, and the decisions made about its care and adaptation will determine whether it survives.\n\nOur conservation work is guided by a clear philosophy: understand before you intervene, and intervene as lightly as the brief allows. We bring rigorous research, careful material analysis, and a genuine respect for historic fabric to every heritage commission — whether a listed structure in the old city or a family home of architectural significance in a Bengaluru suburb.',
    bullets: [
      'Heritage building assessment and condition surveys',
      'Conservation and restoration design',
      'Adaptive reuse of historic structures',
      'Heritage Impact Assessments',
      'Old city plot and traditional home renovation',
      'Documentation and archival research',
    ],
    heroImage: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=85',
    heroAlt: 'Restored heritage building façade showing original stonework and architectural detail',
    projectSlugs: ['bloomsbury-conservation', 'suffolk-heritage-barn'],
    process: [
      { step: 'Survey & Research', description: 'Detailed condition survey, archival research, and significance assessment.' },
      { step: 'Conservation Philosophy', description: 'Agreement on approach — repair, restoration, or adaptive reuse.' },
      { step: 'Design', description: 'Conservation drawings and specification prepared in accordance with best-practice principles.' },
      { step: 'Specialist Procurement', description: 'Identification and engagement of craftspeople skilled in traditional techniques.' },
      { step: 'Works & Monitoring', description: 'Close site supervision with regular progress review and documentation.' },
    ],
  },
  {
    slug: 'create-construct',
    title: 'Create & Construct',
    headline: 'Design and construction, under one roof.',
    philosophy:
      'The gap between a beautiful drawing and a beautiful building is, too often, bridged inadequately. Contractors misread intentions, materials are substituted, and details that looked resolved on paper are lost in translation on site.\n\nOur Create & Construct service eliminates that gap. We take responsibility not only for the design but for its delivery — coordinating directly with our network of trusted contractors, craftspeople, and suppliers across Bengaluru. The result is tighter cost control, fewer surprises, and a finished building that matches the quality of the design that preceded it.',
    bullets: [
      'Design-and-build for residential projects',
      'Turnkey interior fit-outs',
      'Project management and contractor coordination',
      'Structural and MEP coordination',
      'Quality assurance and snagging',
      'Post-completion support',
    ],
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=85',
    heroAlt: 'Skilled construction work in progress on a residential project',
    projectSlugs: ['kensington-mews-house', 'suffolk-heritage-barn'],
    process: [
      { step: 'Scope & Brief', description: 'Agree the full project scope, timeline, and budget range.' },
      { step: 'Design', description: 'Full architectural and interior design developed to construction-ready level.' },
      { step: 'Tender', description: 'Competitive tendering from our vetted contractor network.' },
      { step: 'Construction', description: 'We manage the build directly, with regular progress reports to you.' },
      { step: 'Handover', description: 'Completed project, snagged and signed off with full as-built documentation.' },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
