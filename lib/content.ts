export const SITE = {
  name: "Jose R. Parra",
  role: "Product and Industrial Designer",
  linkedin: "https://www.linkedin.com/in/fozsh",
  email: "josephparra.design@gmail.com",
  year: 2026,
};

export const NAV = [
  { label: "About", href: "/about", key: "about" },
  { label: "Case Studies", href: "/case-studies", key: "case-studies" },
  {
    label: "Industrial Design",
    href: "/industrial-design",
    key: "industrial-design",
  },
  { label: "Experience", href: "/experience", key: "experience" },
  { label: "contact", href: "/contact", key: "contact" },
] as const;

export type NavKey = (typeof NAV)[number]["key"];

export const ABOUT = {
  lead: "Product designer with 13 years across digital and physical systems. Much of it on regulated, legacy heavy platforms at Commonwealth Bank and Qantas, where the interesting problem is never the interface alone but the compliance rule, the twenty year old backend, and the person who just needs to get through it. At the other end of the range: founding designer at two startups, most recently designing AI native features that turn generative output into something people can read, trust and act on.",
  sub: "Industrial designer by training, with three Good Design® Australia Awards for products that reached market. Comfortable at strategy and on tools, and used to holding a user experience focus and an organisational risk view at the same time.",
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
    title: "Senior Product Designer / UX Lead",
    company: "Qantas (Contract)",
    period: "July 2025 – Present",
    location: "Sydney, NSW (Hybrid)",
    summary:
      "Leading design for seats ancillaries, a revenue generating product domain across app, web, tablet and kiosk.",
    points: [
      "Launched MVP 1, which doubled ancillary seat revenue and has sustained it since.",
      "Identified error scenarios in the new seat map that would have propagated downstream into a revenue funnel carrying billions annually. Raised it across business areas outside my own domain and had it resolved in design rather than discovered in production.",
      "Mapped user funnels to locate and remove friction across the booking journey.",
      "Built prototypes and ran evaluative testing with cross functional teams, feeding results directly into prioritisation.",
      "Established AI assisted workflows using Claude and Figma AI for prototyping and research synthesis.",
      "Directed a UI designer on the domain and worked alongside other UX leads to hold direction across the wider platform.",
      "Supported VR initiatives for airline staff training.",
    ],
  },
  {
    title: "Senior Founding AI Product Designer",
    company: "Convoke Lab",
    period: "June 2024 – April 2026",
    location: "Australia (Remote)",
    summary:
      "Led design from zero to one for an AI and generative AI powered employee management platform.",
    points: [
      "Designed interaction models for generative uncertainty, turning unstructured model output into states users could read, trust and act on.",
      "Collaborated with founders to define product vision and feature roadmap against market need.",
      "Designed and validated the MVP user flows that supported a successful pre-seed raise.",
      "Built the design system and component framework from scratch, governing consistency across multi track engineering streams.",
      "Worked directly with lead engineers to define acceptance criteria and technical trade offs.",
    ],
  },
  {
    title: "Senior UX/UI Designer → Acting Principal Product Designer",
    company: "Commonwealth Bank",
    period: "July 2022 – July 2025",
    location: "Sydney, NSW (Hybrid)",
    summary:
      "Led the modernisation of CBA's credit card origination service, a regulated journey spanning digital application, compliance verification and back office assessment.",
    points: [
      "Reduced application completion time from 15 minutes to 2.5 minutes, sustaining submission rates above 80%.",
      "Moved 40% of applications to automated clearance, removing manual handling from the assessment queue.",
      "Cut speed to transact from 15 days to 60 seconds post approval, removing the physical mail dependency through instant digital wallet provisioning.",
      "Proposed and delivered the product downgrade pathway, offering declined applicants a lower tier card where eligibility allowed. It required sustained alignment with credit risk, legal and compliance because it changed the decision logic and not just the interface.",
      "Managed and developed a design team of 3 to 5 including contract designers, covering onboarding, craft development, performance management and exits.",
      "Contributed to and helped grow the CBA Design System, standardising tokenised libraries and accessibility patterns used across multiple product squads.",
      "Presented design rationale to General Managers and executive leaders, including across regional NSW sites.",
      "Received the CBA Customer Experience Excellence Award, 2025.",
    ],
  },
  {
    title: "Design Mentor",
    company: "Academy Xi (Contract)",
    period: "June 2022 – Dec 2022",
    location: "Australia (Remote)",
    summary:
      "Mentored emerging practitioners across User Experience, Customer Experience and Service Design.",
    points: [
      "Coached designers at varying levels of maturity through research, synthesis and service design methods.",
      "Reviewed portfolios and case study work, developing how practitioners articulate design decisions.",
    ],
  },
  {
    title: "Senior Founding Product Designer (YC '19)",
    company: "Forage",
    period: "July 2021 – July 2022",
    location: "USA & Australia (Remote)",
    summary:
      "First design hire at a dual sided global education platform, acquired in 2022.",
    points: [
      "Built both the learner facing and enterprise facing sides of the marketplace, scaling adoption from hundreds of thousands to millions of users.",
      "Established the original design system, layout tokens and design operations from nothing.",
      "Worked with product managers, engineers and founders to prioritise against user need, using interviews and rapid prototype testing to redirect product direction.",
      "Designed B2B and B2C experiences serving Fortune 500 enterprise customers.",
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
    period: "2021-22",
    titleLead: "Early careers",
    titleAccent: "pre-boarding",
    tags: ["0→1", "Edtech", "Fortune500"],
    available: true,
  },
];

export const CASE_STUDIES_INTRO =
  "See how I took CBA's credit card application from 15 minutes to 2.5, and doubled ancillary seat revenue at Qantas. Convoke Lab, an AI-native startup, is up too. A case study on scaling Forage from thousands to millions of users is coming soon.";

export const INDUSTRIAL_DESIGN_INTRO =
  "Industrial design is where this practice started — thirteen years of designing for concrete, water and weight before code and screens. Selected physical product work spans safety equipment, healthcare fixtures, camera hardware and furniture, including three Good Design® Australia Gold awards.";

export type IndustrialDesignProject = {
  slug: string;
  title: string;
  brand: string;
  recognition?: string;
  description: string;
  size: "featured" | "compact";
  imageKey: string;
  secondaryImageKey?: string;
};

export const INDUSTRIAL_DESIGN_PROJECTS: IndustrialDesignProject[] = [
  {
    slug: "emergency-shower",
    title: "Emergency safety shower & eyewash station",
    brand: "Enware",
    recognition: "Gold Winner — Good Design Australia",
    description:
      "A deployable emergency shower and eyewash unit for mining, fracking and remote sites. Pallet-sized footprint, all-terrain base, crane and forklift points for fast relocation — the whole system ships packed inside its own tank and installs without site down time.",
    size: "featured",
    imageKey: "id-shower-hero",
    secondaryImageKey: "id-shower-family",
  },
  {
    slug: "wellbeing-tap-range",
    title: "Wellbeing™ aged-care tap range",
    brand: "Enware",
    recognition: "Good Design Selection",
    description:
      "Tap hardware designed around the needs of an ageing population — colour-coded, high-visibility handles and a grip shaped for reduced hand strength, developed through direct research and industry consultation. Concept sketch through to dimensioned manufacturing drawings and an installation manual.",
    size: "featured",
    imageKey: "id-wellbeing-hero",
  },
  {
    slug: "ewater-management",
    title: "eWater management & hand-hygiene compliance",
    brand: "Enware",
    recognition: "Gold Winner — Good Design Australia",
    description:
      "A water-quality and Legionella-risk monitoring platform for hospitals, built from persona research and patient-journey mapping through to hardware and a staff-facing compliance app. Installed in more than 50 hospitals across Australia; also carries a 2015 Sustainability Award and a 2016 World Stadium Congress finalist placement.",
    size: "featured",
    imageKey: "id-ewater-hero",
    secondaryImageKey: "id-ewater-app",
  },
  {
    slug: "blueline-bubbler",
    title: "Blueline bubbler & SmartFlow™",
    brand: "Enware",
    recognition: "Gold Winner — Good Design Australia",
    description:
      "A drinking fountain and bottle-filler range for schools, parks and sporting facilities, built around gentle, tactile push-down levers. SmartFlow™ layers in usage monitoring and leak alerts, turning a fixture into infrastructure a facilities team can actually manage.",
    size: "compact",
    imageKey: "id-bubbler-hero",
  },
  {
    slug: "arrowx-7",
    title: "Arrowx 7 fluid head",
    brand: "Miller",
    description:
      "A professional camera support head built around Miller's CB Plus counterbalance system — eight primary steps plus a fine-tuning half-step, engineered for fast, repeatable setup on set. Design work spanned precision mechanical sketching through to the final housing.",
    size: "compact",
    imageKey: "id-miller-hero",
  },
  {
    slug: "rolacase-rolashelf",
    title: "RolaCase / RolaShelf vehicle storage",
    brand: "RolaCase / RolaShelf",
    description:
      "Modular drawer and shelving systems for trade vehicles, for an Australian vehicle-storage manufacturer running since 1984. Engineering came first — durability, weight distribution, ease of access — with the design translating that into a system a tradesperson opens ten times a day.",
    size: "compact",
    imageKey: "id-rolacase-hero",
  },
  {
    slug: "desert-rose-taps",
    title: "Desert Rose digital taps",
    brand: "University of Wollongong",
    description:
      "Digital tap hardware for Team UOW Australia's Desert Rose \"house for life\" — a dementia and aged-care-friendly home concept. Illuminated, temperature-limited controls designed to reduce scalding risk and support independence for residents with cognitive or physical impairment.",
    size: "compact",
    imageKey: "id-uow-hero",
  },
  {
    slug: "luxury-bathroom-concept",
    title: "Luxury bathroom fixture concept",
    brand: "Enware",
    description:
      "A concept exploration into premium bathroom hardware — mixed-metal and stone finishes, a considered unboxing experience, wall-mounted fittings — extending Enware's language into a higher price tier.",
    size: "compact",
    imageKey: "id-luxbath-hero",
  },
  {
    slug: "hospital-tap-concept",
    title: "Hospital tap concept",
    brand: "Enware",
    description:
      "A concept tap for hospital and clinical settings, carrying the colour-coded control language explored across the Wellbeing range into a healthcare-specific form.",
    size: "compact",
    imageKey: "id-hosptap-hero",
  },
  {
    slug: "glassisimo-furniture",
    title: "Glass furniture",
    brand: "Glassisimo",
    description:
      "Furniture design in bent and laminated glass for Glassisimo — armchairs, coffee tables and a modular side-table system pairing glass with timber and lacquer drawer fronts.",
    size: "compact",
    imageKey: "id-glassisimo-hero",
  },
];

export type Metric = {
  value: string;
  label: string;
  detail: string;
};

export type ExpandedStat = { value: string; label: string };
export type CaseStudyExpandedItem = { title: string; body: string };

export type CaseStudyExpanded = {
  headline: string;
  intro: string;
  stats: ExpandedStat[];
  pivotTitle: string;
  pivotColumns: CaseStudyExpandedItem[];
  methodologyTitle: string;
  phases: CaseStudyExpandedItem[];
  interventionsTitle: string;
  interventions: CaseStudyExpandedItem[];
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
  expanded?: CaseStudyExpanded;
};

export const CASE_STUDY_DETAILS: Record<string, CaseStudyDetail> = {
  qantas: {
    slug: "qantas",
    company: "Qantas",
    period: "2025-26",
    titleLead: "Multichannel seat",
    titleAccent: "selection",
    role: "Senior Product Designer / UX Lead",
    challenge:
      "Modernise a legacy operational platform into a revenue generating experience across app, web, tablet and kiosk for seats ancillaries, inside technical constraints that ruled out a rebuild.",
    contributions: [
      {
        heading: "Platform modernisation",
        body: "Re-architected fragmented legacy touchpoints into a cohesive, scalable omnichannel ecosystem, working within what the existing platform could genuinely support rather than against an ideal future state.",
      },
      {
        heading: "Journey and omnichannel integration",
        body: "Scaled paid seat selection across Booking, Manage Booking and last minute Check-In, so the experience holds together wherever a passenger enters it.",
      },
      {
        heading: "Risk identification beyond the brief",
        body: "Reviewing the new seat map inside the redesigned booking flow, I identified error scenarios that would have propagated downstream into a revenue funnel carrying billions annually. The affected areas sat outside my domain, so I raised it across the business, walked the relevant teams through the failure paths and the commercial exposure, and had it resolved in design rather than discovered in production.",
      },
      {
        heading: "Stakeholder alignment and UX advocacy",
        body: "United engineering and product streams to navigate deep technical debt, holding a user experience focus and an organisational risk view at the same time.",
      },
      {
        heading: "Accessibility",
        body: "Embedded WCAG AA compliance into dynamic seat maps and selection components, built into the interaction model rather than retrofitted.",
      },
      {
        heading: "Commercial impact",
        body: "Shipped MVP 1, which doubled ancillary seat revenue and has sustained it since. MVP 2, the new end to end booking experience, launches September 2026.",
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
        value: "Omni channel",
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
      headline: "Turning an operational platform into a revenue engine",
      intro:
        "As Senior Product Designer and UX Lead for seats ancillaries, I led the design strategy to make paid seat selection work across four touchpoints on a legacy platform that could not be rebuilt.",
      stats: [
        { value: "MVP 1", label: "Shipped" },
        { value: "Doubled", label: "Ancillary seat revenue" },
        { value: "4 Touchpoints", label: "App, web, tablet, kiosk" },
        { value: "MVP 2", label: "In build" },
      ],
      pivotTitle: "The Strategic Pivot",
      pivotColumns: [
        {
          title: "The problem",
          body: "Seat selection existed to get passengers into seats, not to generate revenue. Introducing paid selection meant transaction logic across booking, Manage Your Booking, check-in and kiosk, on a legacy platform, to a tight timeline.",
        },
        {
          title: "My reframing",
          body: "Stop arguing for a rebuild. Establish what could genuinely move inside the constraints that existed, and design for that.",
        },
        {
          title: "The design brief",
          body: "How might we turn seat selection into a revenue product on the platform we already have?",
        },
      ],
      methodologyTitle: "How I Led It",
      phases: [
        {
          title: "Designing to the constraint",
          body: "Worked with engineering to establish what the legacy platform could genuinely support, then designed MVP 1 to deliver a paid seat product inside those limits rather than waiting on the rebuild.",
        },
        {
          title: "Evidence before scope",
          body: "One targeted round of usability testing on the legacy UI to find where passengers actually struggled. Those findings set MVP scope instead of guesswork.",
        },
        {
          title: "Working across leads",
          body: "A working model with lead engineers, product managers and adjacent UX leads. Peer-level triage to unblock technical constraints, align roadmap dependencies and hold pattern consistency across the platform.",
        },
      ],
      interventionsTitle: "What I Designed",
      interventions: [
        {
          title: "Omnichannel seat map",
          body: "One seat map framework across web, native apps and kiosks, with a conditional view-only state for legacy app versions to remove cross-platform delivery risk.",
        },
        {
          title: "Seat feature transparency",
          body: "What each seat category actually includes, with live pricing and immediate confirmation. Physical constraints like non-reclining rows and in-armrest screens appear in the map rather than in fine print.",
        },
        {
          title: "Spatial layout logic",
          body: "Canvas anchoring that centres the viewport on a passenger's assigned seats when the path is clear, while holding system alerts above them.",
        },
        {
          title: "Seat map error handling",
          body: "Found error scenarios that would have propagated downstream into a revenue funnel carrying billions. The affected areas sat outside my domain, so I raised it across the business and had it resolved in design rather than discovered in production.",
        },
      ],
      takeawaysTitle: "Main Takeaways",
      takeaways: [
        "Commercial proof: MVP 1 doubled ancillary seat revenue and has sustained it.",
        "Constraint is a brief, not an obstacle: MVP 1 had to work on the platform that existed, and it doubled revenue anyway.",
        "Defending the baseline: several constraints presented as technical facts turned out to be assumptions worth testing.",
        "Risk sits outside your lane: the most valuable thing I did was catch something nobody had asked me to look at.",
        "Rules-based scaling: spatial layout logic means the same rules hold on app, web and kiosk.",
      ],
    },
  },
  cba: {
    slug: "cba",
    company: "Commonwealth Bank",
    period: "2022-25",
    titleLead: "Credit card",
    titleAccent: "application",
    role: "Senior UX/UI Designer → Acting Principal Product Designer",
    challenge:
      "A regulated origination service where most applicants never finished. The brief was to shorten the form. The data said the problem was sequence and waiting, not length.",
    contributions: [
      {
        heading: "Problem framing",
        body: "Went through the compliance checks one at a time with risk, legal and operations to separate what was legally mandated from what was just old sequencing.",
      },
      {
        heading: "User led iteration",
        body: "Concept and usability testing to validate instant provisioning and consent transparency. Completion fell from 15 minutes to 2.5, submission held above 80%.",
      },
      {
        heading: "Product downgrade",
        body: "Declined applicants were leaving the service. I proposed offering a lower tier card where eligibility allowed, a product variant that did not exist. It changed the decision logic rather than the interface, so it took sustained alignment with credit risk, legal and compliance.",
      },
      {
        heading: "End to end delivery",
        body: "Digital card activation and wallet provisioning took speed to transact from 15 days to 60 seconds. Automating the validation behind the checks moved 40% of applications to instant clearance.",
      },
      {
        heading: "Team leadership",
        body: "Managed and developed a design team of 3 to 5 including contractors, covering onboarding through to exits. Presented rationale to General Managers and executives, including across regional NSW.",
      },
      {
        heading: "Design system",
        body: "Contributed to and helped grow the CBA Design System, standardising tokenised libraries and accessibility patterns across multiple squads. Received the CBA Customer Experience Excellence Award, 2025.",
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
    expanded: {
      headline:
        "Re-engineering credit card origination for a digital-first generation",
      intro:
        "As Senior Product Designer and Acting Principal, I led the UX strategy for credit card origination and the wider credit card journey, turning a fragmented 15-day paper process into a digital service.",
      stats: [
        { value: "15 → 2.5 mins", label: "Application time" },
        { value: "80%+", label: "Submission rate" },
        { value: "40%", label: "Cleared automatically" },
        { value: "Award", label: "CX excellence, 2025" },
      ],
      pivotTitle: "The Strategic Pivot",
      pivotColumns: [
        {
          title: "The problem",
          body: "Manual underwriting loops, a two-week wait on physical mail, and heavy mid-funnel abandonment. Applications took 15 minutes to complete and up to 15 days before a customer could make their first purchase.",
        },
        {
          title: "My reframing",
          body: "The brief was to shorten the form. The data showed drop-off clustering at the verification steps and several validations handled manually. The problem was sequence and waiting, not length.",
        },
        {
          title: "The design brief",
          body: "How might we move customers from application to first purchase in minutes instead of weeks?",
        },
      ],
      methodologyTitle: "How I Led It",
      phases: [
        {
          title: "Separating mandated from habitual",
          body: "Worked through the compliance checks one at a time with risk, legal and operations to establish which were legally required and which were sequencing decisions nobody had revisited. That analysis changed the scope of a programme already underway.",
        },
        {
          title: "De-risking platform migration",
          body: "Worked with engineering on a modular component strategy running in parallel with legacy mainframe systems, enabling incremental traffic migration without downtime or risk to core banking stability.",
        },
        {
          title: "Team and evidence",
          body: "Managed and developed a design team of 3 to 5 including contract designers, from onboarding through to exits. Directed A/B testing that moved the squad from opinion-based to evidence-based decisions, and presented rationale to General Managers and executives.",
        },
      ],
      interventionsTitle: "What I Designed",
      interventions: [
        {
          title: "Identity orchestration",
          body: "Combined internal customer data with live government registries to authenticate users in real time. The secure pre-fill loop removed manual form entry and cut verification time while tightening fraud controls.",
        },
        {
          title: "Overturning a legacy API",
          body: "Usability testing showed working students bypassing the Student field and selecting Employed to get their income counted. That finding forced a backend refactor to move student validation into conditional logic.",
        },
        {
          title: "Balancing trust with speed",
          body: "APIs working too fast made people feel out of control. An explicit data consent checkbox restored a sense of agency without slowing the flow.",
        },
        {
          title: "Turning rejection into choice",
          body: "Replaced outright declines with a lower-tier card offer where eligibility allowed. It changed the decision logic rather than the interface, so it took sustained alignment with credit risk, legal and compliance.",
        },
      ],
      takeawaysTitle: "Main Takeaways",
      takeaways: [
        "Commercial and operational: completion fell from 15 minutes to 2.5, submission held above 80%, and 40% of applications cleared with no manual handling.",
        "Speed to transact: wallet provisioning took first purchase from up to 15 days to about three and a half minutes end to end.",
        "The reframe was the work: shortening the form would have broken obligations we could not remove. Resequencing them did not.",
        "Research can change architecture: one usability finding forced a backend refactor, not a UI change.",
        "Standards outlive projects: WCAG 2.1 AA went into the design system, so accessibility held on work I never touched.",
      ],
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
      "Venue managers were running workforce operations out of spreadsheets and WhatsApp threads. The job was to replace that with an AI-native platform light enough to use on the floor, not at a desk.",
    contributions: [
      {
        heading: "0→1 product architecture",
        body: "Built the end-to-end UX foundations and the master design system from nothing.",
      },
      {
        heading: "AI-native interface",
        body: "Predictive workflows and intelligent defaults that surface what a manager needs before they think to ask for it.",
      },
      {
        heading: "Designing for trust",
        body: "Clear system feedback so non-technical operators can see what the automation is doing, removing the black-box anxiety common in AI tools.",
      },
      {
        heading: "Discovery and validation",
        body: "Qualitative research and testing with real venue operators, with low to high-fidelity prototypes de-risking features before engineering committed.",
      },
      {
        heading: "Outcome",
        body: "Design narratives and interaction systems that supported a successful pre-seed raise, now running in live hotel pilots.",
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
    expanded: {
      headline:
        "Designing the operational co-pilot for frontline hospitality",
      intro:
        "As founding product designer, I led the UX strategy to strip administration out of workforce management, replacing fragmented spreadsheets and WhatsApp threads with an AI-native platform built for the pace of a venue floor.",
      stats: [
        { value: "Pre-Seed", label: "Funding secured" },
        { value: "Live Pilots", label: "Hotel deployments" },
        { value: "AI Native", label: "Platform" },
        { value: "Design System", label: "Built from scratch" },
      ],
      pivotTitle: "The Strategic Pivot",
      pivotColumns: [
        {
          title: "The problem",
          body: "Onboarding, compliance, performance and training updates lived across spreadsheets and WhatsApp. Managers were pulled off the floor to maintain it, and none of it scaled.",
        },
        {
          title: "My reframing",
          body: "Build a lightweight co-pilot, not a heavy HR database. Something that works at the speed of a frontline venue.",
        },
        {
          title: "The design brief",
          body: "How might we move a venue manager from reactive fire-fighting to proactive, AI-guided people operations?",
        },
      ],
      methodologyTitle: "How I Led It",
      phases: [
        {
          title: "Discovery and framing",
          body: "Research and testing with real venue operators to find the highest-leverage pain points and validate the problem space before committing to a design direction.",
        },
        {
          title: "AI-centred UX",
          body: "Moved away from static data-entry fields toward assistive interfaces: predictive workflows, intelligent defaults, automated formatting.",
        },
        {
          title: "Lean execution",
          body: "Weekly synchronous alignment to lock feature scope, with continuous documentation in Figma so engineering could build without waiting on me.",
        },
      ],
      interventionsTitle: "What I Designed",
      interventions: [
        {
          title: "Predictive workflow surfaces",
          body: "Training gaps, performance reports and onboarding bottlenecks surface before a manager thinks to look for them, turning the tool from a database into an advisor.",
        },
        {
          title: "Cognitive load reduction",
          body: "Intelligent defaults and automated formatting let a manager complete complex people-management tasks in seconds while moving. Designed for thumbs, noise and no desk.",
        },
        {
          title: "Human-centred AI transparency",
          body: "Clear system feedback states so non-technical operators can see what the automation is doing and why, removing the black-box anxiety common in AI tools.",
        },
        {
          title: "Investor-grade narrative",
          body: "Design narratives and interaction systems used in early-stage venture conversations, including positioning for Y Combinator.",
        },
      ],
      takeawaysTitle: "Main Takeaways",
      takeaways: [
        "Investor mobilisation: design narratives and interaction systems supported a successful pre-seed round and YC pipeline positioning.",
        "Systemic foundation: the company's first master design system, built to scale from MVP to multi-venue deployment.",
        "Validation before capital: prototypes de-risked features before engineering committed to building them.",
        "Trust is a feature, not polish: non-technical operators will not act on automation they cannot see reasoning behind.",
        "Context drove every decision: thumbs, noise and no desk is a harder constraint than any screen size.",
      ],
    },
  },
  forage: {
    slug: "forage",
    company: "Forage",
    period: "2021-22",
    titleLead: "Early careers",
    titleAccent: "pre-boarding",
    role: "Senior Founding Product Designer",
    challenge:
      "Fortune 500 employers were losing momentum between offer and first day, with interns scattered across the US. The platform had to serve two customers with opposing instincts: enterprises wanting structure and record-keeping, and Gen Z users who would reject anything that felt corporate.",
    contributions: [
      {
        heading: "0→1 in three months",
        body: "Led discovery through delivery and post-launch iteration on a new product, inside a fixed window.",
      },
      {
        heading: "Designing for two customers",
        body: "Resolved the tension between enterprise compliance needs and an experience Gen Z would actually use, rather than picking a side.",
      },
      {
        heading: "Commercial pull",
        body: "The product helped land Electronic Arts and JP Morgan, who mandated their intern cohorts onto the platform, several thousand users arriving as a direct result.",
      },
      {
        heading: "Sign-up conversion",
        body: "Redesigned the acquisition entry point, lifting conversion by around 8% and cutting drop-off by around 15%, while opening the platform to a more mature user base.",
      },
      {
        heading: "White-label architecture",
        body: "Built so each client could carry their own visual identity without forking the product.",
      },
    ],
    outcomesTitle: "Key outcomes",
    metrics: [
      {
        value: "New enterprise logos",
        label: "clients landed",
        detail:
          "Electronic Arts and JP Morgan mandated their intern cohorts onto the platform, several thousand users arriving through a product I designed",
      },
      {
        value: "+8% conversion",
        label: "sign-up flow",
        detail:
          "redesigned the acquisition entry point, lifting conversion and cutting drop-off by around 15%",
      },
      {
        value: "0→1 in 3 months",
        label: "shipped",
        detail:
          "led discovery through delivery and post-launch iteration on a new product inside a fixed window",
      },
      {
        value: "White-label",
        label: "multi-client architecture",
        detail:
          "built so each enterprise could carry its own identity without forking the product",
      },
    ],
    // Unreachable while `expanded` below is set (CaseStudyView falls back to
    // processNote only when study.expanded is undefined) — reusing the
    // intro paragraph verbatim just to satisfy the non-optional string type.
    processNote:
      "As founding product designer, I led end-to-end design for a new product connecting early-career talent to Fortune 500 employers before their first day, from discovery to delivery and post-launch iteration inside a three-month window. My wider remit included the sign-up flow, the entry point to the whole platform.",
    expanded: {
      headline: "Designing pre-boarding for two customers with opposing needs",
      intro:
        "As founding product designer, I led end-to-end design for a new product connecting early-career talent to Fortune 500 employers before their first day, from discovery to delivery and post-launch iteration inside a three-month window. My wider remit included the sign-up flow, the entry point to the whole platform.",
      stats: [
        { value: "+8%", label: "SIGN-UP CONVERSION" },
        { value: "-15%", label: "DROP-OFF" },
        { value: "EA, JP Morgan", label: "CLIENTS LANDED" },
        { value: "Acquired", label: "FORAGE, 2022" },
      ],
      pivotTitle: "The Strategic Pivot",
      pivotColumns: [
        {
          title: "The problem",
          body: "Employers made standout offers to early-career talent, then lost the momentum. Interns were spread across the US with months between acceptance and day one, and nothing connecting them to the business or each other.",
        },
        {
          title: "My reframing",
          body: "Two customers, not one. Enterprises needed structure, transparency and record keeping. Interns would abandon anything that felt like corporate compliance. The design problem was finding where those two things could agree.",
        },
        {
          title: "The design brief",
          body: "How might we turn the gap between offer and first day into something both the employer and the intern want to use?",
        },
      ],
      methodologyTitle: "How I Led It",
      phases: [
        {
          title: "Framing with the client in the room",
          body: "Ran blue-sky workshops with clients and stakeholders to co-create the vision, ranging widely from gamified learning to chat-based social features before narrowing. Setting direction with the client present meant scope arguments happened early rather than at handover.",
        },
        {
          title: "Fidelity matched to the question",
          body: "Started in low-fidelity to explore layout, flow and hierarchy, so stakeholder feedback landed on structure rather than visual polish. Raised fidelity only as confidence in the direction grew, which kept a three-month build moving.",
        },
        {
          title: "Working across functions",
          body: "Design decisions made alongside product, engineering, legal, copy, sales and client success, so what shipped was feasible and scalable rather than only desirable.",
        },
      ],
      interventionsTitle: "What I Designed",
      interventions: [
        {
          title: "Task hub",
          body: "Onboarding tasks structured so interns learned the business by doing its work. A visual step tracker showed what was complete or outstanding, with manager contact details in reach at the point of difficulty rather than buried in help.",
        },
        {
          title: "Feedback in context",
          body: "Discussion threads embedded directly inside tasks, so feedback, replies and revisions stayed with the work. Learning continued without conversations scattering across email.",
        },
        {
          title: "Chat built for the audience",
          body: "A chat model that felt familiar rather than institutional, connecting interns with peers, leads and stakeholders. Knowledge transfer started before day one, which is what the enterprise wanted, through a pattern the intern would actually open.",
        },
        {
          title: "White-label identity",
          body: "Navigation and UI built so each enterprise could carry its own visual identity inside a shared product, giving clients a branded journey without forking the platform.",
        },
        {
          title: "Sign-up flow",
          body: "Redesigned the acquisition entry point, the first screen every new user met. Conversion improved by around 8% and drop-off fell by around 15%, and the flow opened the platform to an older, more established user base than it had been built for.",
        },
      ],
      takeawaysTitle: "Main Takeaways",
      takeaways: [
        "Commercial pull: the product helped land Electronic Arts and JP Morgan, who mandated intern cohorts onto the platform. Alongside a sign-up redesign that lifted conversion around 8% and cut drop-off around 15%, I contributed to growth from roughly 300,000 users to close to 2 million during my time.",
        "Two customers, one product: the enterprise need for transparency and the intern need for informality were solvable together, not by compromise.",
        "Validation in the users' words: testing returned inviting, fresh, and nothing like other corporate stuff, which was the actual brief.",
        "Fidelity is a scoping tool: staying low-fi longer kept a three-month build on track and kept feedback on structure.",
        "Build for the second client: white-label architecture meant the next enterprise was a configuration, not a rebuild.",
      ],
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

export type ForageCarouselBullet = { label?: string; body: string };

export type ForageCarouselImageLayer = {
  imageKey: string;
  top: number;
  left: number;
  width: number;
  height: number;
  rounded?: boolean;
};

export type ForageCarouselSlide = {
  id: string;
  tabLabel: string;
  imageKey?: string;
  layers?: ForageCarouselImageLayer[];
  /** Plain autoplaying, looping, muted screen-recording video — full-bleed,
   *  no mask/address-bar composite. Use `video` instead when the recording
   *  should sit inside a laptop mockup (matching CBA's pattern). */
  videoSrc?: string;
  /** Laptop-mockup composite: mask image behind, static address-bar strip
   *  pinned to the top of the screen cutout, looping video filling the
   *  rest. Same shape as CBA's video slides. */
  video?: {
    maskImageKey: string;
    addressBarImageKey: string;
    videoSrc: string;
  };
  intro: string[];
  bullets?: ForageCarouselBullet[];
  outro?: string[];
  noToggle?: boolean;
};

// PLACEHOLDER DATA — stub stages only, so the carousel's nav/swipe/expand
// mechanics can be verified before real Forage design-process copy and
// Figma screens exist. Every stage below is a stand-in, not drafted case
// study content — replace all of it once real material is available.
export const FORAGE_CAROUSEL: ForageCarouselSlide[] = [
  {
    id: "problem",
    tabLabel: "THE PROBLEM",
    imageKey: "carousel-forage-problem",
    intro: [
      "Turning accepted offers into relationships",
      "Fortune 500 employers made standout offers, then lost the momentum. Interns were spread across the US with months before day one and nothing connecting them to the business.",
    ],
  },
  {
    id: "research-ideation",
    tabLabel: "RESEARCH AND IDEATION",
    imageKey: "carousel-forage-research-ideation",
    intro: [
      "Designing with Gen Z in mind",
      "Blue-sky workshops with clients and stakeholders, exploring everything from gamified learning to chat-based social features. The constant was what this audience values: self-expression, connection and authenticity.",
    ],
  },
  {
    id: "wireframes",
    tabLabel: "WIREFRAMES",
    imageKey: "carousel-forage-wireframes",
    intro: [
      "Structure before polish",
      "Low-fidelity wireframes to explore layout, flow and hierarchy, so stakeholder feedback landed on structure. Fidelity rose only as confidence in the direction did.",
    ],
  },
  {
    id: "user-testing",
    tabLabel: "USER TESTING",
    imageKey: "carousel-forage-user-testing",
    intro: [
      "Validating with real students",
      "Moderated usability testing on the key flows. The words that came back were inviting, fresh, and nothing like other corporate stuff, validating the interaction patterns and the tone.",
    ],
  },
  {
    id: "product",
    tabLabel: "THE PRODUCT",
    imageKey: "carousel-forage-product",
    intro: [
      "A hub for interns to connect and grow",
      "Home, task hub, community, schedule and inbox. A space to complete real work, build confidence and belong to the business before walking in.",
    ],
  },
  {
    id: "design-rationale",
    tabLabel: "DESIGN RATIONALE",
    imageKey: "carousel-forage-design-rationale",
    intro: [
      "Clarity, transparency and support",
      "Task pages structured around what matters at that moment, with a step tracker and manager contacts in reach. Discussion threads inside tasks kept feedback with the work.",
    ],
  },
  {
    id: "sign-up-flow",
    tabLabel: "SIGN UP FLOW - VIDEO",
    video: {
      maskImageKey: "carousel-cba-intro-mask",
      addressBarImageKey: "carousel-forage-signup-addressbar",
      videoSrc: "/videos/forage-signup.mp4",
    },
    intro: [
      "Designing for who else could use this",
      "The original sign-up was built around one user, the student intern. I redesigned it to open onto new personas including career changers and experienced professionals, widening who the platform could reach without a separate product. Conversion improved around 8% and drop-off fell around 15%.",
    ],
  },
];
