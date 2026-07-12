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
  },
};

export const CONTACT_INTRO =
  "Let's collaborate on the next high-stakes challenge. Whether you need to modernise a complex enterprise platform, scale an AI-native startup from 0-to-1, or just want to chat about future-proof design workflows, I'm always open to the right project.";
