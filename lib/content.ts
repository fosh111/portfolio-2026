export const SITE = {
  name: "Jose R. Parra",
  role: "Snr. Product/Industrial/VR Designer",
  linkedin: "https://www.linkedin.com/in/fozsh",
  email: "josephparra.design@gmail.com",
  year: 2026,
};

export const NAV = [
  { label: "About", href: "/about", key: "about" },
  { label: "Case Studies", href: "/case-studies", key: "case-studies" },
  { label: "Experience", href: "/experience", key: "experience" },
  { label: "contact", href: "/contact", key: "contact" },
] as const;

export type NavKey = (typeof NAV)[number]["key"];

export const ABOUT = {
  lead: "Product, Industrial and VR Designer with 10+ years of experience designing impactful digital and physical experiences. Passionate about solving real user problems through human-centred design, data-driven decisions, and cross-functional collaboration.",
  sub: "Comfortable operating at both strategy and execution levels, with a track record of delivering outcomes in fast-paced startups and large-scale enterprise environments.",
};

export const EXPERIENCE_INTRO =
  "Senior Product Designer bridging the gap between tier-one enterprise scale and startup velocity. I modernise legacy debt into high-converting engines for giants like Qantas and CBA, build platforms from scratch at AI startup Convoke Lab, and design for Fortune 500 companies at YC-backed Forage.";

export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    title: "Lead UX Designer / Senior Product Designer",
    company: "Qantas (Contract)",
    period: "July 2025 – Present time",
    location: "Sydney, NSW (Hybrid)",
    summary:
      "Leading product design initiatives for acquisition and onboarding processes for seats ancillaries, enhancing user experience.",
    points: [
      "Successfully launched the first release, which doubled revenue for the company for seats ancillaries.",
      "Use AI workflows to improve productivity.",
      "Mapped user funnels to identify and eliminate friction points, improving overall efficiency.",
      "Build prototypes and run evaluative tests with cross functional teams.",
      "Help with VR initiatives within Airline for staff training.",
    ],
  },
  {
    title: "Senior Founding AI Product Designer",
    company: "Convoke Lab",
    period: "June 2024 – April 2026",
    location: "Australia (Remote)",
    summary:
      "Lead the design efforts for an innovative AI/Gen-AI powered employee management platform, driving significant improvements in user engagement and operational efficiency.",
    points: [
      "Strong use of AI thinking and tools.",
      "Collaborated with founders to create a clear product vision and feature roadmap, ensuring alignment with market needs.",
      "Designed and validated user flows for the MVP to help secure pre-seed funding.",
      "Established scalable design systems and processes, positioning the company for future growth and success.",
    ],
  },
  {
    title: "Senior UX/UI Designer / Acting Principal",
    company: "Commonwealth Bank",
    period: "July 2022 – July 2025",
    location: "Sydney, NSW (Hybrid)",
    summary:
      "I played a pivotal role in enhancing user experience at Commonwealth Bank, achieving remarkable results in credit card processes.",
    points: [
      "Owned the entire end-to-end customer journey experience.",
      "Transformed a rigid, multi-week legacy pipeline into a modern digital ecosystem.",
      "Guided and mentored junior designers across multiple cross-functional squads.",
      "Reduced average application completion times from 10 minutes down to 2.5 minutes.",
      "Slashed speed-to-transact from 15 days to just 60 seconds post-approval.",
      "Achieved a massive 80% application submission rate through optimized form patterns.",
      "Eliminated a good percentage of physical mail bottlenecks by enabling instant digital wallet provisioning.",
      "Won an internal Customer Excellence Award for driving the bank's digital transformation.",
    ],
  },
  {
    title: "Design Mentor",
    company: "Academy Xi (Contract)",
    period: "June 2022 – Dec 2022",
    location: "Australia (Remote)",
    summary: "",
    points: ["Mentor students on UX, CX and Service Design."],
  },
  {
    title: "Senior Founding Product Designer (YC '19)",
    company: "Forage",
    period: "July 2021 – July 2022",
    location: "USA & Australia (Remote)",
    summary:
      "I led the design efforts at Forage, significantly impacting user acquisition, onboarding, engagement and adoption.",
    points: [
      "Designed and implemented user experiences that drove adoption from hundreds of thousands to millions.",
      "Worked closely with product managers and engineers to prioritize features that aligned with user needs.",
      "Enhanced engagement with Fortune 500 companies through targeted design strategies — with B2B and B2C experiences.",
    ],
  },
];

export type CaseStudySummary = {
  slug: string;
  company: string;
  period: string;
  titleLead: string;
  titleAccent: string;
  tags: string[];
  available: boolean;
};

export const CASE_STUDIES: CaseStudySummary[] = [
  {
    slug: "qantas",
    company: "Qantas",
    period: "2025-26",
    titleLead: "Multichannel seat",
    titleAccent: "selection",
    tags: ["Product Design", "Travel", "Multi-platform"],
    available: true,
  },
  {
    slug: "cba",
    company: "Commonwealth Bank",
    period: "2022-25",
    titleLead: "Credit card",
    titleAccent: "application",
    tags: ["Product Design", "Fintech", "Origination"],
    available: true,
  },
  {
    slug: "convokelab",
    company: "Convokelab",
    period: "2024-26",
    titleLead: "AI hospitality",
    titleAccent: "management",
    tags: ["0→1", "Hospitality", "AI/LLM"],
    available: true,
  },
  {
    slug: "forage",
    company: "Forage",
    period: "2020-21",
    titleLead: "Ed-tech origination",
    titleAccent: "program",
    tags: ["0→1", "Edtech", "Fortune500"],
    available: false,
  },
];

export const CASE_STUDIES_INTRO =
  "See how I diminished CBA's origination times to 60 seconds, and how I'm helping double seats ancillary revenue for Qantas. Case studies for Convoke Lab (AI-native startup) and how I helped Forage scale from thousands to millions of users are coming soon.";

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type ExpandedStat = { value: string; label: string };
export type ExpandedConstraint = { title: string; body: string };
export type ExpandedFramework = { label: string; title: string; body: string };

export type ExpandedCaseStudy = {
  eyebrow: string;
  headline: string;
  intro: string;
  stats: ExpandedStat[];
  challengeTitle: string;
  challengeBody: string;
  touchpointsLabel: string;
  touchpoints: string[];
  constraintsTitle: string;
  constraints: ExpandedConstraint[];
  frameworksTitle: string;
  frameworks: ExpandedFramework[];
  takeawaysTitle: string;
  takeaways: string[];
};

export type CbaPivotColumn = { label: string; body: string; bold?: boolean };
export type CbaPhase = { title: string; body: string };
export type CbaIntervention = { title: string; body: string };
export type CbaMetricRow = { label: string; legacy: string; modernised: string };

export type CbaExpandedCaseStudy = {
  eyebrow: string;
  headline: string;
  intro: string;
  stats: ExpandedStat[];
  pivotTitle: string;
  pivotColumns: CbaPivotColumn[];
  methodologyTitle: string;
  phases: CbaPhase[];
  interventionsTitle: string;
  interventions: CbaIntervention[];
  metricsTitle: string;
  metricsHeader: { indicator: string; legacy: string; modernised: string };
  metricsRows: CbaMetricRow[];
  closingTitle: string;
  closingBody: string;
};

export type ConvokelabPivotColumn = { label: string; body: string; bold?: boolean };
export type ConvokelabPhase = { title: string; body: string };
export type ConvokelabIntervention = { title: string; body: string };
export type ConvokelabMilestone = { label: string; body: string };

export type ConvokelabExpandedCaseStudy = {
  eyebrow: string;
  headline: string;
  intro: string;
  stats: ExpandedStat[];
  pivotTitle: string;
  pivotColumns: ConvokelabPivotColumn[];
  methodologyTitle: string;
  phases: ConvokelabPhase[];
  interventionsTitle: string;
  interventions: ConvokelabIntervention[];
  milestonesTitle: string;
  milestones: ConvokelabMilestone[];
  closingTitle: string;
  closingBody: string;
};

export type CaseStudyDetail = {
  slug: string;
  company: string;
  period: string;
  titleLead: string;
  titleAccent: string;
  role: string;
  challenge: string;
  contributions: { heading: string; body: string }[];
  outcomesTitle: string;
  metrics: Metric[];
  processNote: string;
  expanded?: ExpandedCaseStudy;
  cbaExpanded?: CbaExpandedCaseStudy;
  convokelabExpanded?: ConvokelabExpandedCaseStudy;
};

export const CASE_STUDY_DETAILS: Record<string, CaseStudyDetail> = {
  qantas: {
    slug: "qantas",
    company: "Qantas",
    period: "2025-26",
    titleLead: "Multichannel seat",
    titleAccent: "selection",
    role: "Lead UX Designer / Senior Product Designer",
    challenge:
      "Modernise a legacy, operational platform into a high-converting revenue engine across App, Web, Tablet and Kiosk touchpoints.",
    contributions: [
      {
        heading: "Platform Modernisation",
        body: "Re-architected fragmented legacy touchpoints into a cohesive, scalable omnichannel ecosystem.",
      },
      {
        heading: "Journey and Omnichannel Integration",
        body: "Seamlessly scaled paid seat selection across Booking, Manage Booking (MYB), and last-minute Check-In.",
      },
      {
        heading: "Stakeholder Alignment & UX Advocacy",
        body: "United engineering and product streams to navigate deep technical debt while championing intuitive, user-first logic.",
      },
      {
        heading: "Commercial Impact",
        body: "Shipped MVP Release 1, instantly doubling ancillary seat revenue, with the next-gen UI launching this November.",
      },
    ],
    outcomesTitle: "Key outcomes (so far)",
    metrics: [
      {
        value: "+100%",
        label: "revenue growth",
        detail:
          "shipped phase 1 launch to unlock ancillary revenue streams, doubling revenue in record time",
      },
      {
        value: "Omnichannel",
        label: "multiple platforms",
        detail:
          "deploying a unified, cohesive product experience across web, mobile, tablet, and physical touchpoints",
      },
      {
        value: "Phase 2",
        label: "november target",
        detail:
          "actively designing and architecting the next major release for a fixed November drop",
      },
    ],
    processNote:
      "Service design, research, legacy audit and new-UI exploration across the omnichannel seat-selection journey.",
    expanded: {
      eyebrow: "Case Study — Qantas Airlines",
      headline: "Omnichannel Seat Selection & Monetisation",
      intro:
        "A fast-tracked platform modernisation with paid seat selection and complex transaction logic across Qantas' iOS, Android, web, tablet, and kiosk touchpoints. Driven by strong stakeholder alignment and UX advocacy, this high-stakes pivot seamlessly scaled across Booking, MYB, and time-sensitive check-in windows instantly doubling ancillary revenue ahead of a next-gen UI launch this November.",
      stats: [
        { value: "Phase 1", label: "Released" },
        { value: "Doubled", label: "Ancillary revenue with phase 1" },
        { value: "Omnichannel", label: "Multiple platforms" },
        { value: "Nov Target", label: "Phase 2" },
      ],
      challengeTitle: "The Challenge & Core Objectives",
      challengeBody:
        "Historically, seat selection on the digital check-in platform was purely operational. To unlock a massive untapped ancillary revenue stream, the digital stream initiated a high-stakes, fast-tracked pivot: introducing paid seat selection and complex transaction logic across the entire ecosystem.",
      touchpointsLabel: "Customer journey touchpoints",
      touchpoints: [
        "Booking / Origination",
        "Manage Your Booking (MYB)",
        "Check-In",
        "Kiosk",
      ],
      constraintsTitle: "The Constraints",
      constraints: [
        {
          title: "MVP Baseline Validation",
          body: "Executed a targeted round of usability testing on the legacy UI to isolate immediate user pain points under an aggressive go-to-market timeline. Used these baseline insights to systematically de-risk early MVP feature prioritization.",
        },
        {
          title: "Complex Transactional Logic",
          body: "Actively driving cross-functional workshops with product and engineering to resolve architectural constraints around real-time payment processing. Designing the logic for high-friction touchpoints across both online Check-In and Manage Your Booking (MYB) paths.",
        },
        {
          title: "Omnichannel Scaling",
          body: "Designing structural UI continuity to scale seamlessly across modern responsive web, native mobile apps, and physical airport kiosks while ensuring backward compatibility for millions of passengers on legacy system variants.",
        },
      ],
      frameworksTitle: "Core UX/UI Frameworks & Solutions",
      frameworks: [
        {
          label: "Framework A",
          title: "Omnichannel Seat Map Architecture",
          body: 'A unified, scalable UI seat map framework engineered to deploy seamlessly across responsive web, native mobile apps, and physical airport kiosks. Incorporates a conditional, static "View-Only" matrix for legacy app versions to eliminate cross-platform security and delivery risks.',
        },
        {
          label: "Framework B",
          title: "Contextual Seat Feature Transparency",
          body: "An informative, high-transparency UI that details distinct seat-category inclusions, dynamic real-time pricing, and instantaneous selection confirmations. Directly surfaces physical aircraft constraints, such as non-reclining rows or in-armrest stowed screens, directly within the interactive map view.",
        },
        {
          label: "Framework C",
          title: "Spatial Layout & Segment Interaction",
          body: "Dynamic canvas anchoring logic that automatically centers the viewport on the user's assigned seats when clear, while prioritizing global system alert banners.",
        },
        {
          label: "Framework D",
          title: "Federated Lead-to-Lead Governance",
          body: "A structured cross-functional engagement model built to align directly with Lead Engineers, Lead Product Managers, and adjacent UX Leads across the broader ecosystem. Spearheaded peer-level triages to systematically unblock technical constraints, align roadmap dependencies, and maintain pattern consistency across the platform.",
        },
      ],
      takeawaysTitle: "Key Takeaways & Strategic Design Impact",
      takeaways: [
        "Proven Commercial Viability: MVP Release 1 resulted in a doubling of ancillary seat revenue.",
        "Strategic Roadmap Acceleration: Optimized next-gen UI is on track for targeted cross-platform release in November.",
        "Defensive UX Trumps Aesthetic Fluff: Preserving baseline user experience under unconfirmed technical bias.",
        "Technical Alignment is Essential: Legacy view-only states were a direct outcome of alignment with Engineering Tech Leads.",
        "True Omnichannel Scalability: Rules-based spatial layouts allow logic to scale uniformly across app, web, or kiosk.",
      ],
    },
  },
  cba: {
    slug: "cba",
    company: "Commonwealth Bank",
    period: "2022-25",
    titleLead: "Credit card",
    titleAccent: "application",
    role: "Senior UX/UI Designer / Acting Principal Product Designer",
    challenge:
      "Transform a high-friction, 15-day manual application process into a modern, instant-access digital journey, while migrating platforms.",
    contributions: [
      {
        heading: "Discovery & Mapping",
        body: 'Led workshops to untangle legacy tech debt and align cross-functional teams (Tech, Legal, Risk, Ops) on a "blue sky" vision versus reality.',
      },
      {
        heading: "User-Led Iteration",
        body: 'Conducted concept and usability testing to validate features like "Instant Provisioning" and "Data Consent" transparency.',
      },
      {
        heading: "Problem-Solving Highlights",
        body: 'Designed a "Product Downgrade" flow to offer eligible alternatives instead of flat rejections.',
      },
      {
        heading: "End to end delivery",
        body: 'Managed the design of digital card activation and Apple/Android Wallet provisioning, ensuring "Day 1" utility.',
      },
    ],
    outcomesTitle: "Key outcomes",
    metrics: [
      {
        value: "80%",
        label: "application submission rates",
        detail:
          "proving exceptional user engagement and completion with the optimised onboarding flow",
      },
      {
        value: "3.5 mins",
        label: "from start of application to first purchase",
        detail:
          "fast-tracking eligible customers from initial intent to their first purchase",
      },
      {
        value: "40%",
        label: "instant account approval",
        detail:
          "delivering immediate, automated credit clearance for eligible customers on the spot",
      },
      {
        value: "2.5 mins",
        label: "total completion time",
        detail: "slashed down from a legacy 15-minute administrative baseline",
      },
      {
        value: "70%",
        label: "digital card activation",
        detail:
          "driving instant wallet adoption while reducing physical mail reliance",
      },
    ],
    processNote:
      "A complete architectural overhaul of the application funnel — integrating real-time government identity APIs and turning a rigid document into a dynamic, conversational UI.",
    cbaExpanded: {
      eyebrow: "Intro — The Big Picture",
      headline:
        "Re-engineering credit card origination for a digital-first generation",
      intro:
        "As the Senior Product Designer and Acting Principal, I led the end-to-end UX strategy to re-engineer credit card origination and later the overall credit card journey transforming a fragmented, 15-day legacy paper process into a seamless, modern digital ecosystem.",
      stats: [
        { value: "~3.5mins", label: "Speed-to-Transact" },
        { value: "~2.5mins", label: "To complete application" },
        { value: "~80%+", label: "Submission rate" },
        { value: "Award", label: "Customer excellence" },
      ],
      pivotTitle: "The Strategic Pivot",
      pivotColumns: [
        {
          label: "The Bottlenecks",
          body: "Manual underwriting loops, two-week physical mail wait, and massive mid-funnel abandonment.",
        },
        {
          label: "My Reframing",
          body: "Real-time government API identity verification and instant digital wallet provisioning.",
        },
        {
          label: "The Design Brief",
          body: "How might we move customers from application to first purchase in minutes instead of weeks?",
          bold: true,
        },
      ],
      methodologyTitle: "Executive Leadership & Methodology",
      phases: [
        {
          title: "Stakeholder Orchestration",
          body: "Orchestrated alignment across Risk, Compliance, Legal, and Engineering to dismantle legacy siloes. Transformed rigid operational habits into streamlined, compliance-first user flows without sacrificing conversion.",
        },
        {
          title: "De-Risking Platform Migration",
          body: "Helped engineered a modular component strategy to run in parallel with legacy mainframe systems. Enabled safe, incremental traffic migration, eliminating downtime and allowing for high-stakes feature testing without compromising core banking stability.",
        },
        {
          title: "Governance & Mentorship",
          body: "Acted as a force multiplier for the Credit Card squad. Led the integration of WCAG 2.1 AA standards into the design system while mentoring junior designers to increase technical fluency, ensuring high-fidelity outputs were delivered faster and with greater consistency.",
        },
        {
          title: "Evidence-Led Strategy",
          body: 'Directed end-to-end A/B testing programs to validate design decisions. Shifted the team\'s culture from "opinion-based" to "evidence-based," ensuring every line of engineering code was backed by verified user behavior and measurable conversion outcomes.',
        },
      ],
      interventionsTitle: "High-Impact UX Interventions",
      interventions: [
        {
          title:
            "Dynamic Identity Orchestration & Government Registry Verification",
          body: "Integrated internal customer data (spending, liabilities, etc.) with live government registries (licenses, visas, etc.) to authenticate users in real time. This secure pre-fill loop eliminated manual form friction, radically accelerating verification velocity while aggressively mitigating fraud risk",
        },
        {
          title: "Overturning Legacy API",
          body: 'Usability testing proved working students bypassed the \'Student\' field to select \'Employed\' for income priority. Forced a full backend refactor to move student validation into smart conditional logic.',
        },
        {
          title: "Balancing Trust with Speed",
          body: "APIs working too fast made users feel out of control and skeptical. Added an explicit data-control consent checkbox to balance operational speed with psychological trust.",
        },
        {
          title: "Turning Rejection into Choice",
          body: "Replaced outright declines with a dynamic underwriting pivot — offering a lower-tier card alternative. Preserved customer dignity and saved high-intent conversions.",
        },
      ],
      metricsTitle: "Hard Metrics & Business Impact",
      metricsHeader: {
        indicator: "Performance Indicator",
        legacy: "Legacy",
        modernised: "Modernised",
      },
      metricsRows: [
        {
          label: "Time to Complete Application",
          legacy: "15 minutes",
          modernised: "2.5 minutes",
        },
        {
          label: "Application Submission Rate",
          legacy: "Variable",
          modernised: "Exceeded 80%",
        },
        {
          label: "Instant Approval Rate",
          legacy: "~30%",
          modernised: "~40% (+10% lift)",
        },
        {
          label: "Speed to Transact (First Purchase)",
          legacy: "Up to 15 days",
          modernised: "~3.5 minutes total",
        },
        {
          label: "Instant Digital Wallet Activation",
          legacy: "~40%",
          modernised: "Over 70%",
        },
      ],
      closingTitle: "Stitching Application to Instant Activation",
      closingBody:
        "I spearheaded end-to-end instant digital card provisioning, a secure one-tap tokenization workflow stitching the application directly to Apple/Android Wallet. Approved users could push active credentials to their wallet the exact second they hit the success screen. This unlocked a 60-second speed-to-transact window and drove a measurable lift in early-stage NPS.",
    },
  },
  convokelab: {
    slug: "convokelab",
    company: "Convoke Lab",
    period: "2024-26",
    titleLead: "AI hospitality",
    titleAccent: "management",
    role: "Senior Founding AI Product Designer",
    challenge:
      "Turn chaotic hospitality workforce management into a lightweight, AI-native SaaS platform that slashes administrative work for overstretched venue managers.",
    contributions: [
      {
        heading: "0→1 Product Architecture",
        body: "Established the initial end-to-end UX/UI foundations and a scalable master design system completely from scratch.",
      },
      {
        heading: "AI-Native UX Design",
        body: "Architected an AI-assisted interface featuring predictive workflows and intelligent defaults to eliminate user decision fatigue on the venue floor.",
      },
      {
        heading: "Discovery & Rapid Validation",
        body: "Conducted qualitative research and user testing with hotel managers to continuously de-risk features through iterative, high-fidelity prototyping.",
      },
      {
        heading: "Strategic Fundraising Support",
        body: "Authored high-impact pitch materials and product narratives that directly helped secure pre-seed funding and launch live hotel pilots.",
      },
    ],
    outcomesTitle: "Key outcomes",
    metrics: [
      {
        value: "Pre-seed",
        label: "funding secured",
        detail:
          "partnered with founders on pitch materials, UX/UI, strategy, and polished prototypes to unlock early-stage venture capital",
      },
      {
        value: "3 live pilots",
        label: "hotel deployments",
        detail:
          "scaled the MVP platform directly into active, real-world operations across select pilot hotels",
      },
      {
        value: "AI native",
        label: "intelligent copilot",
        detail:
          "designed predictive workflows and smart defaults to eliminate manual hotel admin",
      },
      {
        value: "DS",
        label: "master framework",
        detail:
          "built a modular design system from day one to accelerate development velocity",
      },
    ],
    processNote:
      "Coming soon — a teaser of the AI-native workflows and design system is on the way.",
    convokelabExpanded: {
      eyebrow: "Intro — The Big Picture",
      headline:
        "Designing the intelligent operational co-pilot for frontline hospitality",
      intro:
        "As the founding product designer, I led end-to-end UX strategy to strip heavy administration out of workforce management, replacing fragmented spreadsheets and WhatsApp threads with an AI-native, intuitive platform purpose-built for fast-paced venue operators.",
      stats: [
        { value: "Pre-Seed", label: "Funding secured" },
        { value: "Live Pilots", label: "Hotel deployments" },
        { value: "AI native", label: "Platform" },
        { value: "DS", label: "Master design system" },
      ],
      pivotTitle: "The Strategic Pivot",
      pivotColumns: [
        {
          label: "The Problem",
          body: "Legacy spreadsheets and disconnected WhatsApp threads could not scale. Onboarding, compliance, performance, and training updates lived across a fragmented mess, pulling managers away from the floor and costing money.",
        },
        {
          label: "My Reframing",
          body: "Strip administrative debt entirely. Build a lightweight, intelligent co-pilot rather than a heavy HR database, one that works at the speed of a frontline venue.",
        },
        {
          label: "The Design Brief",
          body: "How might we move a venue manager from reactive fire-fighting to proactive, AI-guided people operations?",
          bold: true,
        },
      ],
      methodologyTitle: "Executive Leadership & Methodology",
      phases: [
        {
          title: "Discovery & Framing",
          body: "Active user research and testing with real venue operators to identify the highest-leverage pain points and validate the problem space before any design commitment.",
        },
        {
          title: "AI-Centered UX",
          body: "Moved away from static data-entry fields toward dynamic, assistive interfaces, predictive workflows, intelligent defaults, and automated smart formatting.",
        },
        {
          title: "Lean Execution",
          body: "Weekly synchronous alignments to lock feature scopes, balanced with continuous asynchronous documentation in Figma to allow engineering to build with precision.",
        },
        {
          title: "Validation & Iteration",
          body: "Iteratively shipped low- to high-fidelity clickable prototypes to rapidly de-risk features before committing engineering capital.",
        },
      ],
      interventionsTitle: "High-Impact Design Interventions",
      interventions: [
        {
          title: "Predictive Workflow Surfaces",
          body: "Surfaced critical training gaps, performance reports, and onboarding bottlenecks before a manager actively had to query the system, transforming the tool from reactive database to proactive advisor.",
        },
        {
          title: "Cognitive Load Reduction System",
          body: "Introduced intelligent defaults and automated smart formatting that allow a user to complete complex people-management tasks in seconds while on the move. Designed for thumbs, noise, and zero desk time.",
        },
        {
          title: "Human-Centered AI Transparency",
          body: "Designed clear system feedback states so non-technical venue operators implicitly understand and trust the automated logic running in the background, removing the black-box anxiety common in AI tools.",
        },
        {
          title: "Investor-Grade Pitch Materials",
          body: "Authored comprehensive design narratives and interaction systems used in pitch materials for successful early-stage venture conversations, including ongoing positioning for Y Combinator pipelines.",
        },
      ],
      milestonesTitle: "Key Strategic Milestones Delivered",
      milestones: [
        {
          label: "Investor Mobilization",
          body: "Comprehensive design narratives and interaction systems for successful pre-seed funding round and YC pipeline positioning.",
        },
        {
          label: "Systemic Foundation",
          body: "Built the company's inaugural master design system, typographic hierarchies, colour frameworks, and layout grids that scale from MVP to multi-venue enterprise deployment.",
        },
        {
          label: "Rapid Validation",
          body: "Discovery frameworks, active user testing with venue operators, and iterative low- to high-fidelity prototypes to de-risk features before engineering commitment.",
        },
      ],
      closingTitle: "The Outcome",
      closingBody:
        "Convoke Lab successfully evolved from an abstract operational concept into a highly polished, investor-backed SaaS architecture currently deployed across live pilot in selected hotels, proving that intelligent, AI-native design can fundamentally modernise how people are managed in fast-paced environments.",
    },
  },
};

export const CONTACT_INTRO =
  "Let's collaborate on the next high-stakes challenge. Whether you need to modernise a complex enterprise platform, scale an AI-native startup from 0-to-1, or just want to chat about future-proof design workflows, I'm always open to the right project.";

export type QantasCarouselBullet = { label: string; body: string };

export type QantasCarouselImageLayer = {
  imageKey: string;
  top: number;
  left: number;
  width: number;
  height: number;
};

export type QantasCarouselDetailSlide = {
  kind: "detail";
  id: string;
  tabLabel: string;
  imageKey: string;
  layers?: QantasCarouselImageLayer[];
  intro: string[];
  bullets?: QantasCarouselBullet[];
  outro?: string[];
};

export type QantasCarouselVideoSlide = {
  kind: "video";
  id: string;
  tabLabel: string;
  posterKey: string;
  videoSrc?: string;
  captionTitle: string;
  captionSubtitle: string;
  /** "split" = text left / media right, both vertically centered (new-ui).
   *  "overlay" = full-bleed background image with the caption positioned
   *  lower-left on top of it (sneak-peak). */
  layout: "split" | "overlay";
};

export type QantasCarouselSlide =
  | QantasCarouselDetailSlide
  | QantasCarouselVideoSlide;

export const QANTAS_CAROUSEL: QantasCarouselSlide[] = [
  {
    kind: "video",
    id: "new-ui",
    tabLabel: "NEW UI TEASER VIDEO",
    posterKey: "carousel-qantas-new-ui",
    videoSrc: "/videos/qantas-new-ui.mp4",
    captionTitle: "THIS PROJECT NEW UI (PHASE 2) WILL BE RELEASED IN NOV 2026",
    captionSubtitle: "UNFORTUNATELY I CAN'T SHARE THE LATEST UI",
    layout: "split",
  },
  {
    kind: "detail",
    id: "service-design",
    tabLabel: "SERVICE DESIGN",
    imageKey: "carousel-qantas-service-design",
    intro: [
      `To scale seat ancillaries effectively, the experience couldn't live in an isolated screen silo. We looked beyond the standard UI to construct a comprehensive Service Design blueprint tracking how passengers interact with seating across three distinct phases of the travel lifecycle. By analyzing user behavior at each touchpoint, we systematically isolated and optimized the "Moments that Matter" to protect passenger peace of mind while maximizing ancillary growth.`,
    ],
    bullets: [
      {
        label: "Booking (The Commercial Core):",
        body: "Injecting high-transparency seat value, category inclusions, and pricing early in the primary conversion funnel. The focus here is turning standard checkout steps into an intuitive, high-incentive consideration moment before purchase finality.",
      },
      {
        label: "Manage Your Booking (The Planning Window):",
        body: "Optimizing the post-purchase itinerary space for deliberate, low-stress modifications. This touchpoint handles complex, mid-trip user needs—such as post-booking upgrades, tail-number equipment changes, and family group seat realignments.",
      },
      {
        label: "Check-In (The High-Stress Execution):",
        body: "Streamlining high-velocity, day-of-travel interactions across web, native app, and physical airport kiosks. Designed to handle rapid, last-minute seat availability, premium upgrades, and tight operational windows with zero room for system lag.",
      },
    ],
    outro: [
      "Rather than deploying blanket monetization prompts across the ecosystem, we mapped behavioral friction points against real-world customer anxiety metrics to uncover the specific interactions that dictate travel satisfaction:",
      "The Emotional Sweet Spots: We isolated high-leverage service opportunities—such as the high-anxiety moment a parent needs to confirm adjacent seating for young children, or the high-value opportunity of securing extra legroom for an international long-haul leg.",
    ],
  },
  {
    kind: "detail",
    id: "research",
    tabLabel: "RESEARCH",
    imageKey: "carousel-qantas-research",
    intro: [
      "Our synthesis of quantitative data and qualitative user testing condensed thousands of passenger profiles into three distinct behavioral archetypes. Instead of designing a one-size-fits-all map, we reverse-engineered the UX and UI to serve these precise transactional drivers:",
    ],
    bullets: [
      {
        label: "The Price-Conscious Traveler (Budget & Value):",
        body: "Driven strictly by the bottom line. They optimize for cost-efficiency, require complete visibility over baseline inclusions, and reject aggressive upselling. Success means proving absolute value for money without hidden fees.",
      },
      {
        label: "The Comfort Seeker (Long-Haul & Ergonomics):",
        body: "Prioritizes physical well-being, particularly on long-haul sectors. Their primary conversion trigger is the spatial quality of the seat. They actively seek out Extra Legroom (ELR), exit rows, and quiet zones to systematically eliminate travel fatigue.",
      },
      {
        label: "The Convenience Optimiser (The Corporate Turnaround):",
        body: "High-velocity business travelers executing strict, same-day schedules (e.g., fly in for a meeting, fly back on a return flight). They don't care about extra space—they care about time. They optimize for forward-cabin placement to ensure rapid embarkation and lightning-fast disembarkation.",
      },
    ],
    outro: [
      "Loyalty is our highest-leverage retention engine. We shifted the UI from a generic, transaction-first grid to a personalized recognition framework. The interface dynamically intercepts known frequent flyer profiles to explicitly surface status perks directly on the interactive map, proving value at the exact point of selection.",
    ],
  },
  {
    kind: "detail",
    id: "legacy",
    tabLabel: "PHASE 1 | LEGACY OPTIMIZATION: DOUBLING REVENUE IN RECORD TIME",
    imageKey: "carousel-qantas-legacy-preview",
    layers: [
      { imageKey: "carousel-qantas-legacy-preview", top: 0, left: 0, width: 100, height: 81.97 },
      { imageKey: "carousel-qantas-legacy-detail", top: 53.64, left: 0, width: 100, height: 46.36 },
    ],
    intro: [
      "The existing legacy platform architecture was incredibly rigid and brittle. Simple UI modifications—such as swapping a baseline icon—carried a restrictive six-month engineering lead time. Realizing a complete interface overhaul was structurally impossible for the immediate release, we shifted to an ultra-lean, high-velocity tactical strategy.",
      "I fast-tracked alignment workshops with Legal, Marketing, and Business stakeholders to map out high-impact, zero-dev-friction levers. We targeted micro-optimizations that could clear regulatory, brand, and commercial hurdles instantly without requiring deep backend engineering support.",
      "We ruthlessly restricted the Phase 1 implementation layer to two non-disruptive, purely cosmetic variables:",
    ],
    bullets: [
      {
        label: "Targeted Colour Schemes:",
        body: "Refining visual hierarchy and interactive states to make selection paths intuitively clear.",
      },
      {
        label: "Descriptive Price & Seat Copy:",
        body: "Integrating high-transparency micro-copy to explicitly define distinct seat categories, physical attributes, and cost structures.",
      },
    ],
    outro: [
      "Delivered in record time while simultaneously architecting the robust structural foundations for Phase 2, this ultra-lean tactical release doubled ancillary seating revenue by simply eliminating cognitive friction and pricing ambiguity at the point of purchase.",
    ],
  },
  {
    kind: "detail",
    id: "final",
    tabLabel: "PHASE 1 | FINAL DESIGNS",
    imageKey: "carousel-qantas-final-mask",
    layers: [
      { imageKey: "carousel-qantas-final-mask", top: 21.84, left: 2.56, width: 68.38, height: 53.31 },
      { imageKey: "carousel-qantas-final-preview", top: 20.61, left: 68.97, width: 22.05, height: 55.77 },
    ],
    intro: [
      "These final Phase 1 deliverables separate the interface into two distinct commercial models. The system optimizes for high-transparency conversion where seats are monetized (Web Booking & MYB), and shifts to a rapid, zero-friction selection utility where remaining inventory is entirely complimentary (Native Check-In).",
      "I fast-tracked alignment workshops with Legal, Marketing, and Business stakeholders to map out high-impact, zero-dev-friction levers. We targeted micro-optimizations that could clear regulatory, brand, and commercial hurdles instantly without requiring deep backend engineering support.",
      "We ruthlessly restricted the Phase 1 implementation layer to two non-disruptive, purely cosmetic variables:",
    ],
    bullets: [
      {
        label: "Targeted Colour Schemes:",
        body: "Refining visual hierarchy and interactive states to make selection paths intuitively clear.",
      },
      {
        label: "Descriptive Price & Seat Copy:",
        body: "Integrating high-transparency micro-copy to explicitly define distinct seat categories, physical attributes, and cost structures.",
      },
    ],
    outro: [
      "Delivered in record time while simultaneously architecting the robust structural foundations for Phase 2, this ultra-lean tactical release doubled ancillary seating revenue by simply eliminating cognitive friction and pricing ambiguity at the point of purchase.",
    ],
  },
  {
    kind: "detail",
    id: "user-testing",
    tabLabel: "USER TESTING",
    imageKey: "carousel-qantas-user-testing-image",
    layers: [
      { imageKey: "carousel-qantas-user-testing-image", top: 0, left: 0, width: 100, height: 100 },
      { imageKey: "carousel-qantas-user-testing-secondary", top: 0, left: 35.56, width: 64.44, height: 50.84 },
    ],
    intro: [
      "Our second round of user testing was designed to pressure-test the core interaction models and establish a UX baseline for the Phase 2 architectural rollout. By gathering direct behavioral data early, we mapped out the exact information passengers needed to see, while isolating and solving heavy cognitive friction points within the multi-passenger checkout flow.",
    ],
    bullets: [
      {
        label: "Phase 2 Foundational Ease of Use:",
        body: "Validated baseline navigation, zoom controls, and map interactions to ensure the fundamental layout logic was intuitive enough to support complex feature layers in future iterations.",
      },
      {
        label: "Multi-Passenger Tracking (Pax-to-Seat Mapping):",
        body: "Ensured immediate clarity for group bookings. Testing verified that users could instantly see exactly which passenger was allocated to which specific seat at any point in the interaction, eliminating accidental re-assignments.",
      },
      {
        label: "Frictionless Price Comprehension:",
        body: "Tested price-transparency models to confirm that dynamic upcharges, tiered discounts, and total cost accumulation were transparent and instantly understood before the user proceeded to payment.",
      },
      {
        label: "Defensive Safety & Hardware Disclosures:",
        body: "Successfully validated frameworks for surfacing high-stakes seat attributes and hard operational boundaries. The UI effectively flagged physical layout realities and legal restrictions before final selection.",
      },
    ],
  },
  {
    kind: "video",
    id: "sneak-peak",
    tabLabel: "PHASE 2 | UI SNEAK PEAK",
    posterKey: "carousel-qantas-sneak-peak",
    captionTitle: "THIS PROJECT NEW UI (PHASE 2) WILL BE RELEASED IN NOV 2026",
    captionSubtitle: "UNFORTUNATELY I CAN'T SHARE THE LATEST UI",
    layout: "overlay",
  },
];

export type CbaCarouselBullet = { label?: string; body: string };

export type CbaCarouselImageLayer = {
  imageKey: string;
  top: number;
  left: number;
  width: number;
  height: number;
  rounded?: boolean;
};

export type CbaCarouselCaption = {
  top: number;
  left: number;
  width: number;
  label: string;
  body: string;
  muted?: boolean;
};

export type CbaCarouselVideoMockup = {
  /** Laptop bezel/mockup image — pre-clipped to the visible 1170x577 frame,
   *  sits behind the address-bar + video content. */
  maskImageKey: string;
  /** Browser chrome / address-bar strip composited above the video. */
  addressBarImageKey: string;
  /** Autoplaying, looping, muted screen-recording video shown inside the mockup. */
  videoSrc: string;
};

export type CbaCarouselSlide = {
  id: string;
  tabLabel: string;
  imageKey?: string;
  layers?: CbaCarouselImageLayer[];
  /** Special-cased media for the "intro" slide: a looping screen-recording
   *  composited inside a laptop mockup with a browser chrome strip above it. */
  video?: CbaCarouselVideoMockup;
  intro: string[];
  bullets?: CbaCarouselBullet[];
  outro?: string[];
  /** When true, this slide has no "tell me more" toggle at all — it only
   *  ever renders its default/static view (no tint, no expand/collapse). */
  noToggle?: boolean;
  /** Always-visible inline captions composited directly over the media,
   *  used by static (noToggle) slides like "ut-insights". */
  captions?: CbaCarouselCaption[];
};

export const CBA_CAROUSEL: CbaCarouselSlide[] = [
  {
    id: "intro",
    tabLabel: "WEB STILLS FLOW VIDEO",
    video: {
      maskImageKey: "carousel-cba-intro-mask",
      addressBarImageKey: "carousel-cba-intro-addressbar",
      videoSrc: "/videos/cba-intro.mp4",
    },
    noToggle: true,
    intro: [],
  },
  {
    id: "mobile-design",
    tabLabel: "MOBILE DESIGNS",
    imageKey: "carousel-cba-mobile-design",
    intro: [
      "These final screens represent a complete architectural overhaul of the application funnel. By integrating real-time government identity APIs and changing the design from a rigid document into a dynamic, conversational UI, we achieved record-breaking conversion metrics:",
    ],
    bullets: [
      { label: "Zero Post-Approval Friction:", body: "The entire journey\u2014from starting the application to tapping at a terminal\u2014now takes as little as 3.5 minutes total." },
      { label: "Time-to-Transact:", body: "From 15 days down to 60 seconds." },
      { label: "Completion Rate:", body: "Accelerated past 80%." },
      { label: "Digital Adoption:", body: "70%+ of users instantly provisioned to Apple/Android Wallets without waiting for plastic." },
      { label: "Completion Velocity:", body: "Form completion time dropped from 15 minutes to 2.5 minutes." },
      { label: "Impact:", body: "Awarded CBA's internal Customer Excellence Award." },
    ],
  },
  {
    id: "flow",
    tabLabel: "FLOW BLUEPRINTS",
    layers: [
      { imageKey: "carousel-cba-flow-1", top: 0, left: 0, width: 99.658, height: 81.284 },
      { imageKey: "carousel-cba-flow-2", top: 44.542, left: 4.615, width: 95.043, height: 55.460 },
    ],
    intro: [
      "I didn't just reskin a form, we rearchitected the core onboarding engine using a modular, highly scalable design system approach. These blueprints demonstrate how we aligned Design components, technical data architecture, and legal compliance into a future-proof model.",
    ],
    bullets: [
      { label: "The Flow Maps:", body: "Consolidate hundreds of possible scenario steps into core thematic phases (Identity, Employment, Income, Liabilities, Outcome...)." },
      { label: "Scalable Architecture:", body: "Built a component-driven framework compatible with both old and new backend systems, allowing the bank to safely split traffic between platforms during the transition." },
      { label: "Future-Proof Orchestration:", body: "Replaced slow, manual back-office tasks with instantaneous API lookups\u2014structured so the UI adapts seamlessly as legacy systems are progressively decommissioned." },
    ],
  },
  {
    id: "ab",
    tabLabel: "EARLY A/B TEST VALIDATION",
    layers: [
      { imageKey: "carousel-cba-ab-1", top: 0, left: 0, width: 100, height: 100 },
    ],
    intro: [
      "The UX Debate: \"One question per screen\" (conversational UX) vs. \"Thematic grouping\" (progressive disclosure).",
      "To de-risk the crucial financial collection step, we ran a live-traffic A/B test against the legacy baseline to see which mental model converted better.",
    ],
    bullets: [
      { label: "Variant A (Hyper-Fragmented):", body: "1 question per screen. (Employment Status \u2192 Next \u2192 Profession \u2192 Next \u2192 Income...)" },
      { label: "Variant B (The Employment Blade):", body: "All related financial fields grouped into a single, progressive disclosure and dynamic UI. Sub-fields revealed themselves instantly via conditional logic based on the initial selection." },
    ],
    outro: [
      "For high-stakes banking funnels, extreme fragmentation causes click-fatigue. Users want context. Grouping related inputs into a single progressive blade reduced anxiety, built trust, and set a new UX design standard across the bank.",
    ],
  },
  {
    id: "design-critique",
    tabLabel: "DESIGN CRITIQUES AND EXPERIENCE ALIGNMENT",
    layers: [
      { imageKey: "carousel-cba-design-critique-1", top: 0, left: 0, width: 52.308, height: 71.578 },
      { imageKey: "carousel-cba-design-critique-2", top: 71.578, left: 0, width: 51.197, height: 28.423 },
      { imageKey: "carousel-cba-design-critique-3", top: 0, left: 51.966, width: 48.034, height: 96.882 },
    ],
    intro: [
      "A credit card application shouldn't feel like a completely different app from a home loan or a transactional account opening. In a bank as massive as CBA, isolated product squads easily create fragmented customer journeys.",
      "To scale consistency, I led a rigorous, collaborative design critique cadence bridging multiple product teams and the core design systems squad.",
    ],
    bullets: [
      { label: "Cross-Product Alignment:", body: "Hosted regular critiques with Consumer Finance, Home Buying, Everyday Banking, and Wealth squads to align interaction behaviours and shared data steps across the entire retail bank ecosystem." },
      { label: "Design System Partnership and Co-Creation:", body: "Partnered directly with the core Design System team, providing strategic input to shape, co-create, and build entirely new components tailored for high-density data capture. We stress-tested these new assets against intense regulatory demands, expanding the global bank library with highly reusable, production-ready patterns." },
      { label: "Unified Experience Standards:", body: "Worked alongside accessibility specialists and copywriters to ensure error validations, tooltips, and legal consent models looked, sounded, and functioned identically across all digital entry points." },
    ],
    outro: [
      "We didn't just ship a credit card flow\u2014we built a unified, WCAG 2.1 AA-compliant onboarding framework that adjacent teams across the bank used to accelerate their own platform migrations.",
    ],
  },
  {
    id: "stakeholder",
    tabLabel: "STAKEHOLDER ALIGNMENT",
    imageKey: "carousel-cba-stakeholder",
    intro: [
      "Inside the \"Occupation Type\" selector, the legacy Credit Risk API strictly required \"Student\" to be listed as an option. The technical teams refused to modify this backend endpoint, demanding that the interface simply conform to their existing data schema.",
      "We ran usability testing on the live flow and exposed a massive disconnect between backend architecture and human behavior:",
    ],
    bullets: [
      { label: "System Gaming:", body: "Working students completely ignored the \"Student\" option. They selected \"Employed\" instead because they knew the bank only cares about income." },
      { label: "Corrupted Data:", body: "The rigid API setup was actively forcing users to submit inaccurate occupation profiles just to progress through the application." },
      { label: "Wasted Logic:", body: "The bank was collecting flawed risk data while adding unnecessary cognitive load to the user." },
    ],
    outro: [
      "Armed with raw video clips of users bypassing the option, I led the cross-functional pushback. By proving that the rigid API logic directly caused corrupted data and funnel friction, I shifted the conversation from a subjective visual debate to a critical data-integrity priority.",
      "The result? We successfully forced the Credit Risk team to completely refactor their backend infrastructure\u2014a change they initially claimed was impossible.",
    ],
  },
  {
    id: "ut-insights",
    tabLabel: "USER TESTING INSIGHTS",
    imageKey: "carousel-cba-ut-insights",
    noToggle: true,
    intro: [],
  },
  {
    id: "delivery",
    tabLabel: "DELIVERY",
    imageKey: "carousel-cba-delivery",
    intro: [
      "Design doesn't end when the Figma file is approved. I embedded across multiple delivery squads to protect the design strategy and bridge the gap between vision, compliance, and production code.",
    ],
    bullets: [
      { label: "Cross-Squad Execution:", body: "Partnered daily with front-end and back-end developers to ensure high-fidelity implementation of our new design system components." },
      { label: "Edge Case Triage:", body: "Caught and resolved unmapped UX gaps during the build\u2014rapidly refining micro-copy, tweaking UI behaviors, and adapting to late-stage engineering constraints." },
      { label: "Pragmatic Problem Solving:", body: "Acted as the primary user advocate, collaborating with Risk and Tech teams to make smart, fast design compromises without sacrificing the customer experience." },
    ],
    outro: [
      "By maintaining a constant presence during the engineering cycle, we eliminated production line drift and ensured the final shipped application looked and functioned exactly as validated in user testing.",
    ],
  },
  {
    id: "stitching",
    tabLabel: "STITCHING WITH INSTANT ACTIVATION",
    layers: [
      { imageKey: "carousel-cba-stitching-1", top: 0, left: 0, width: 100, height: 100 },
    ],
    intro: [
      "Fast approval means nothing if the customer still has to wait a week for a plastic card to arrive in the mail.",
      "I led the end-to-end strategy to stitch the credit card application directly to instant digital activation. We transformed a fragmented two-step process into one continuous journey, allowing users to safely provision their new card to Apple or Android Wallets the exact second they hit the \"Approved\" screen.",
    ],
    bullets: [
      { label: "One-Tap Tokenization:", body: "Designed a seamless, frictionless transition that pushes active card credentials straight into digital wallets immediately post-approval." },
      { label: "Ecosystem Alignment:", body: "Partnered across Product, Tech, Risk, and Compliance to navigate complex payment protocols without breaking the user's momentum." },
      { label: "Continuous Optimization:", body: "Managed the entire lifecycle from discovery through post-launch, using real transaction data to fine-tune the transition edge cases." },
    ],
    outro: [
      "By bridging the gap between approval and fulfillment, we slashed speed-to-transact from 15 days down to just 60 seconds post-approval, driving immediate digital adoption with over 70% of users activating their cards instantly. This strategic intervention transformed a high-friction legacy operational delay into a seamless, high-converting customer win that completely bypassed physical mail dependencies and directly lifted early-stage NPS.",
    ],
  },
];
