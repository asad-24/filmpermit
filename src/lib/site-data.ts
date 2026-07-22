import {
  BadgeCheck,
  Car,
  ClipboardCheck,
  Drone,
  FileCheck2,
  Handshake,
  Hotel,
  MapPinned,
  Plane,
  ShieldCheck,
  Users,
  Warehouse,
} from "lucide-react";

export const site = {
  name: "FilmPermit.ae",
  email: "info@filmpermit.ae",
  phone: "0000000000",
  whatsapp: "971501234567",
  address: "Dubai, United Arab Emirates",
  url: "https://filmpermit.ae",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Why Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const heroCredibility = [
  { value: "350+", label: "Productions Supported" },
  { value: "Trusted", label: "By International Productions" },
];

export const stats = [
  { value: "200+", label: "Projects Supported" },
  { value: "24/7", label: "Response Time" },
  { value: "99%", label: "Approval Guidance" },
  { value: "7", label: "Emirates Covered" },
];

export const trustMetrics = [
  { value: 200, suffix: "+", label: "productions guided", detail: "Commercial, documentary, creator, and broadcast teams." },
  { value: 7, suffix: "", label: "emirates covered", detail: "Dubai, Abu Dhabi, Sharjah, and wider UAE coordination." },
  { value: 24, suffix: "/7", label: "shoot-window support", detail: "Urgent guidance for permits, crew, gear, and logistics." },
  { value: 99, suffix: "%", label: "clarity before shoot day", detail: "Practical expectations before paperwork moves." },
];

export const permitJourney = [
  {
    step: "01",
    title: "Project Brief",
    description:
      "Share your shoot dates, locations, crew size, equipment needs, and production goals.",
  },
  {
    step: "02",
    title: "Permit Strategy",
    description:
      "We recommend the right permit route, authority requirements, and support plan.",
  },
  {
    step: "03",
    title: "Authority Coordination",
    description:
      "Our team coordinates approvals, location requirements, and follow-up with local stakeholders.",
  },
  {
    step: "04",
    title: "Production Support",
    description:
      "Crew, equipment, transport, accommodation, and logistics stay aligned through production.",
  },
];

export const showcaseCards = [
  {
    title: "Locations with range",
    eyebrow: "UAE locations",
    href: "/contact",
    image: "/images/uae-locations-showcase.png",
    description:
      "Desert roads, skylines, coastline, heritage districts, studios, hotels, and controlled environments.",
  },
  {
    title: "Crew and gear that move",
    eyebrow: "Production support",
    href: "/services",
    image: "/images/production-services.png",
    description:
      "Local crew, fixers, camera, lighting, grip, drone, sound, transport, and vendor coordination.",
  },
  {
    title: "Paperwork with a plan",
    eyebrow: "Permit planning",
    href: "/apply-permit",
    image: "/images/service-permits.png",
    description:
      "Clear requirements, realistic timelines, location approvals, and shoot-specific compliance guidance.",
  },
];

export const testimonials = [
  {
    quote:
      "The team gave us a clear permit path, helped with location coordination, and kept the shoot moving under a tight timeline.",
    name: "Commercial Producer",
    role: "International brand shoot",
  },
  {
    quote:
      "We arrived with equipment, crew, and a changing schedule. FilmPermit.ae helped us understand what needed approval first.",
    name: "Line Producer",
    role: "Documentary unit",
  },
  {
    quote:
      "The process felt organized from the first brief. We knew what to prepare, what would take time, and who was handling each step.",
    name: "Agency Lead",
    role: "Campaign production",
  },
];

export const productionPartners = [
  "Permits",
  "Crew",
  "Locations",
  "Customs",
  "Transport",
  "Studios",
  "Equipment",
  "Drone",
  "Vendors",
];

export const serviceCards = [
  {
    id: "permits",
    title: "Filming & Photography Permits in the UAE",
    eyebrow: "Permits",
    href: "/services#permits",
    icon: FileCheck2,
    image: "/images/service-permits.png",
    alt: "Permit paperwork and checklist for UAE filming approvals",
    description:
      "Secure filming permits across the UAE.",
    bullets: [
      "Commercial film permits",
      "Photography permits",
      "Authority approvals",
      "Multi-location coordination",
    ],
  },
  {
    id: "customs-clearance",
    title: "Equipment Customs Clearance",
    eyebrow: "Customs Clearance",
    href: "/services#customs-clearance",
    icon: Plane,
    image: "/images/service-customs.png",
    alt: "Cinema equipment cases at an airport customs counter in Dubai",
    description:
      "Move production equipment into the UAE.",
    bullets: [
      "ATA Carnet coordination",
      "Temporary equipment import",
      "Customs documentation",
      "Airport clearance support",
    ],
  },
  {
    id: "crew-hire",
    title: "Crew Hire in the UAE",
    eyebrow: "Crew Hire",
    href: "/services#crew-hire",
    icon: Users,
    image: "/images/service-crew.png",
    alt: "Local film crew preparing a camera setup in Dubai",
    description:
      "Hire trusted local production crews.",
    bullets: [
      "Camera crews",
      "Producers & Fixers",
      "Lighting & Grip",
      "Sound Teams",
    ],
  },
  {
    id: "equipment-rental",
    title: "Professional Equipment Rental",
    eyebrow: "Equipment Rental",
    href: "/services#equipment-rental",
    icon: Warehouse,
    image: "/images/service-equipment.png",
    alt: "Professional cinema cameras, lenses, lights, and cases in a Dubai rental room",
    description:
      "Source professional production equipment.",
    bullets: [
      "Cinema camera packages",
      "Professional lighting",
      "Grip & sound equipment",
      "Specialty production gear",
    ],
  },
  {
    id: "drone-filming-support",
    title: "Drone Filming Support",
    eyebrow: "Drone Support",
    href: "/services#drone-filming-support",
    icon: Drone,
    image: "/images/uae-locations-showcase.png",
    alt: "Drone filming support for UAE aerial production",
    description:
      "Capture aerial footage legally.",
    bullets: [
      "Licensed drone operators",
      "Flight planning",
      "Authority coordination",
      "Aerial filming support",
    ],
  },
  {
    id: "location-scouting",
    title: "Location Scouting",
    eyebrow: "Locations",
    href: "/services#location-scouting",
    icon: MapPinned,
    image: "/images/hero-dubai-film-production.png",
    alt: "Dubai skyline and UAE filming location scouting",
    description:
      "Discover production-ready filming locations.",
    bullets: [
      "Urban & skyline locations",
      "Desert & coastal locations",
      "Private venue coordination",
      "Location recce support",
    ],
  },
  {
    id: "transportation-support",
    title: "Transportation Support",
    eyebrow: "Transport",
    href: "/services#transportation-support",
    icon: Car,
    image: "/images/cta-production-basecamp.png",
    alt: "Transportation support for UAE film crews and production equipment",
    description:
      "Keep your production moving.",
    bullets: [
      "Crew transportation",
      "Equipment vehicles",
      "Airport transfers",
      "Production logistics",
    ],
  },
  {
    id: "accommodation-coordination",
    title: "Accommodation Coordination",
    eyebrow: "Accommodation",
    href: "/services#accommodation-coordination",
    icon: Hotel,
    image: "/images/production-services.png",
    alt: "Accommodation coordination for visiting UAE production teams",
    description:
      "House your production team comfortably.",
    bullets: [
      "Hotel sourcing",
      "Crew accommodation",
      "Talent & producer lodging",
      "Flexible production bookings",
    ],
  },
];

export const allServices = serviceCards;

export const emiratesBanner = {
  title: "Permits and Production Support Across All Emirates",
  description:
    "Whether you are filming in Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Ajman or Al Ain, we coordinate permits, production logistics and local support from start to finish.",
  emirates: ["Dubai", "Abu Dhabi", "Sharjah", "Ras Al Khaimah", "Ajman", "Al Ain"],
};

export const faqs = [
  {
    question: "Do I need a permit to film in Dubai or the UAE?",
    answer:
      "Yes. Commercial filming, brand content, TV, film, professional photography, and many organized creator shoots usually need approval before production begins.",
  },
  {
    question: "How long does a filming permit approval take?",
    answer:
      "Timelines depend on the emirate, locations, shoot scope, equipment, and authorities involved. Straightforward permits may move within a few working days, while complex shoots need more lead time.",
  },
  {
    question: "Can foreign production companies film in the UAE?",
    answer:
      "Yes. International production teams can film in the UAE when they work through the correct local channels and secure the necessary permits and supporting approvals.",
  },
  {
    question: "Can you handle permits and equipment customs clearance together?",
    answer:
      "Yes. We can coordinate permit requirements, authority follow-up, equipment documentation, temporary import planning, and local production support as one connected workflow.",
  },
  {
    question: "Are drone shoots allowed in Dubai or the UAE?",
    answer:
      "Drone filming is possible only with the right approvals and compliant planning. Each request depends on location, flight scope, operator requirements, schedule, and authority review.",
  },
  {
    question: "How much does a filming permit cost in the UAE?",
    answer:
      "Costs vary by emirate, shoot type, location, duration, crew size, equipment, drone use, and required authority fees. We review the brief first and provide a clearer cost path before proceeding.",
  },
  {
    question: "Do you cover all Emirates?",
    answer:
      "Yes. We coordinate support across Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Ajman, Al Ain, and wider UAE locations through the appropriate local channels.",
  },
];

export const blogPosts = [
  {
    title: "Dubai Location Approvals: What Producers Should Confirm First",
    slug: "dubai-location-approvals-what-producers-should-confirm-first",
    category: "Location Permits",
    date: "Jun 18, 2026",
    published: "2026",
    readTime: "Quick read",
    image: "/images/uae-locations-showcase.png",
    alt: "Dubai city locations prepared for a commercial film shoot",
    excerpt:
      "Before locking a UAE shoot schedule, confirm location ownership, authority requirements, access windows, and any brand or drone restrictions.",
  },
  {
    title: "Drone Filming in the UAE: Planning Before You Fly",
    slug: "drone-filming-in-the-uae-planning-before-you-fly",
    category: "Drone Support",
    date: "May 22, 2026",
    published: "2026",
    readTime: "Quick read",
    image: "/images/service-permits.png",
    alt: "Drone filming preparation for a UAE production",
    excerpt:
      "Drone shoots need careful planning around location, flight scope, operator requirements, safety, timing, and supporting approvals.",
  },
  {
    title: "Equipment Customs for UAE Film Shoots: A Simple Prep Guide",
    slug: "equipment-customs-for-uae-film-shoots-a-simple-prep-guide",
    category: "Equipment Clearance",
    date: "Apr 24, 2026",
    published: "2026",
    readTime: "Quick read",
    image: "/images/service-equipment.png",
    alt: "Professional camera equipment packed for customs clearance",
    excerpt:
      "A smoother entry starts with accurate equipment lists, serial numbers, shipment details, and a realistic customs timeline.",
  },
  {
    title:
      "Do You Really Need a Filming Permit in Dubai? (What Most People Get Wrong in 2026)",
    slug: "do-you-really-need-a-filming-permit-in-dubai",
    category: "General Permits",
    date: "Apr 1, 2026",
    published: "2026",
    readTime: "Quick read",
    image: "/images/service-crew.png",
    alt: "Film crew working near the Dubai skyline",
    excerpt:
      "A practical guide to when permits are required for commercial shoots, branded content, documentaries, and creator productions.",
  },
  {
    title: "Filming Permits in Dubai: Who Can Apply?",
    slug: "filming-permits-in-dubai-who-can-apply",
    category: "Permit Planning",
    date: "Dec 31, 2025",
    published: "2025",
    readTime: "2 min read",
    image: "/images/hero-dubai-film-production.png",
    alt: "Dubai skyline at sunset with a film camera operator",
    excerpt:
      "Understand the usual documents, sponsor requirements, and project details needed before a UAE filming application can move forward.",
  },
  {
    title: "Production Logistics Checklist for UAE Shoots",
    slug: "production-logistics-checklist-for-uae-shoots",
    category: "Production Support",
    date: "Dec 31, 2025",
    published: "2025",
    readTime: "Quick read",
    image: "/images/service-customs.png",
    alt: "Cinema equipment cases moving through airport handling",
    excerpt:
      "From gear customs to transport, crew calls, hotels, and vendor coordination, this checklist helps international teams prepare.",
  },
];

export const values = [
  {
    title: "Clarity",
    icon: Handshake,
    description:
      "You get clear guidance before decisions affect your schedule or budget.",
  },
  {
    title: "Accountability",
    icon: ShieldCheck,
    description:
      "We take ownership across permits, logistics, crew, and production support.",
  },
  {
    title: "Efficiency",
    icon: ClipboardCheck,
    description:
      "We keep approvals and production needs moving with realistic timelines.",
  },
  {
    title: "Local Integrity",
    icon: BadgeCheck,
    description:
      "We align creative goals with UAE rules, location requirements, and local expectations.",
  },
];

export const article = {
  slug: "do-you-really-need-a-filming-permit-in-dubai",
  title:
    "Do You Really Need a Filming Permit in Dubai? (What Most People Get Wrong in 2026)",
  category: "General Permits",
  date: "April 1, 2026",
  published: "2026",
  image: "/images/service-crew.png",
  alt: "Commercial film crew shooting near the Dubai skyline",
  sections: [
    {
      heading: "Summary",
      paragraphs: [
        "If you are planning a commercial shoot in Dubai, a filming permit is not optional, it is a requirement.",
        "Dubai operates under a structured regulatory framework, and any commercial filming activity must be approved through the relevant authorities.",
        "This guide outlines when permits are required, what productions often overlook, and how to approach filming in Dubai without unnecessary disruption.",
      ],
      listIntro: "This applies to:",
      items: [
        "Advertising campaigns",
        "Branded content",
        "Corporate productions",
        "Social media advertising",
      ],
    },
    {
      heading: "Why This Question Matters",
      paragraphs: [
        "One of the most common assumptions we encounter is:",
        "Dubai is highly efficient when it comes to filming approvals, but it is equally structured. Productions that approach the process informally often face delays, interruptions, or last-minute adjustments on set.",
        "Understanding the requirements from the outset allows for proper planning, controlled execution, and minimal risk during production.",
      ],
      quote: "Can this be filmed without a permit?",
    },
    {
      heading: "When Is a Filming Permit Required in Dubai?",
      paragraphs: [
        "For commercial projects, the requirement is clear: a filming permit is required for any structured production.",
        "Commercial and branded content includes advertisements, brand campaigns, social media advertising, and corporate videos.",
        "Any production involving crew members, camera setups, lighting equipment, or planned shoot schedules is considered a regulated activity.",
        "Filming in public spaces, high-visibility areas, and landmark locations will require permits, and in many cases, additional approvals from location management.",
      ],
      items: ["Downtown Dubai", "DIFC", "Dubai Marina", "Jumeirah Beach"],
    },
    {
      heading: "What Productions Often Get Wrong",
      paragraphs: [
        "A common misconception is that smaller shoots do not require formal approvals. In practice, the scale of the shoot is not the determining factor.",
        "The key consideration is the commercial nature of the content, the presence of crew and equipment, and the visibility of the activity. Even small commercial productions are subject to the same framework.",
      ],
    },
    {
      heading: "What Happens If You Film Without a Permit?",
      paragraphs: [
        "Filming commercially without the required approvals can lead to immediate interruption.",
        "The shoot may be stopped on-site, adjustments may be required before continuation, and production timelines may be affected.",
        "For structured productions, even a short disruption can impact scheduling, coordination, and overall delivery.",
      ],
    },
    {
      heading: "How Professional Productions Approach Filming in Dubai",
      paragraphs: [
        "Experienced production teams do not leave permitting to chance.",
        "A structured approach typically includes defining the scope of the production, identifying all intended locations, confirming required approvals in advance, and submitting applications through a licensed local partner.",
        "This ensures that filming proceeds without unnecessary interruptions and that all aspects of the shoot are aligned prior to execution.",
      ],
    },
    {
      heading: "Why Many International Productions Misjudge the Process",
      paragraphs: [
        "Dubai is often perceived as flexible due to its modern infrastructure and accessibility. However, from a production standpoint, it operates within a clearly defined system.",
        "Common misjudgments include underestimating the need for location approvals, assuming small setups fall outside regulation, and not accounting for multiple authorities involved.",
        "These factors can introduce delays that are easily avoidable with proper planning.",
      ],
    },
    {
      heading: "Do You Need a Filming Permit in Dubai?",
      paragraphs: [
        "Yes, a permit is required.",
        "There are no practical workarounds when it comes to advertising content, branded productions, and organized filming activities.",
        "Approaching the process correctly ensures a smoother production and eliminates unnecessary risk.",
      ],
    },
    {
      heading: "A Practical Consideration",
      paragraphs: [
        "Permits are not only a regulatory requirement. They also support the production itself.",
        "Having the correct approvals in place allows for proper use of equipment, coordinated access to locations, a more controlled filming environment, and confidence that the content can be used, distributed, and published without restrictions.",
      ],
    },
    {
      heading: "Start Filming with the Right Structure",
      paragraphs: [
        "Dubai offers one of the most efficient filming environments globally when approached correctly.",
        "With the right preparation, productions can move forward with clarity, coordination, and full compliance.",
        "If you are planning a commercial shoot in Dubai, securing the appropriate permits at an early stage will ensure your production remains aligned from pre-production through execution.",
      ],
    },
  ],
};
