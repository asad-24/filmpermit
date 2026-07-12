import {
  BadgeCheck,
  Camera,
  Car,
  ClipboardCheck,
  Drone,
  FileCheck2,
  Handshake,
  MapPinned,
  Plane,
  RadioTower,
  Settings,
  ShieldCheck,
  Users,
  Warehouse,
} from "lucide-react";

export const site = {
  name: "FilmPermit.ae",
  email: "info@filmpermit.ae",
  phone: "+971 50 123 4567",
  whatsapp: "971501234567",
  address: "Dubai, United Arab Emirates",
  url: "https://filmpermit.ae",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Apply", href: "/contact?type=permit" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
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
    title: "Brief Intake",
    description:
      "We map your shoot dates, locations, crew size, equipment list, drone needs, and final usage.",
  },
  {
    step: "02",
    title: "Documents & Route",
    description:
      "Your production gets a clear permit route with the right authority requirements and supporting paperwork.",
  },
  {
    step: "03",
    title: "Authority Coordination",
    description:
      "We coordinate submissions, location approvals, follow-ups, and practical production constraints.",
  },
  {
    step: "04",
    title: "Shoot-Day Support",
    description:
      "Crew, equipment, transport, vendors, and on-ground support stay aligned so your team can create.",
  },
];

export const showcaseCards = [
  {
    title: "Locations with range",
    eyebrow: "UAE locations",
    image: "/images/uae-locations-showcase.png",
    description:
      "Desert roads, skylines, coastline, heritage districts, studios, hotels, and controlled environments.",
  },
  {
    title: "Crew and gear that move",
    eyebrow: "Production support",
    image: "/images/production-services.png",
    description:
      "Local crew, fixers, camera, lighting, grip, drone, sound, transport, and vendor coordination.",
  },
  {
    title: "Paperwork with a plan",
    eyebrow: "Permit planning",
    image: "/images/permit-journey.png",
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
    title: "Filming & Photography Permits in the UAE",
    eyebrow: "Permits",
    href: "/services#permits",
    image: "/images/permit-journey.png",
    alt: "Permit paperwork and checklist for UAE filming approvals",
    description:
      "We coordinate permit requirements, authority paperwork, location approvals, and application follow-up for productions filming across the UAE.",
  },
  {
    title: "Equipment Customs Clearance",
    eyebrow: "Customs Clearance",
    href: "/services#customs-clearance",
    image: "/images/cta-production-basecamp.png",
    alt: "Cinema equipment cases at an airport customs counter in Dubai",
    description:
      "We help your cameras, lenses, drones, and production gear move through customs with the right documentation and local coordination.",
  },
  {
    title: "Crew Hire in the UAE",
    eyebrow: "Crew Hire",
    href: "/services#crew-hire",
    image: "/images/production-services.png",
    alt: "Local film crew preparing a camera setup in Dubai",
    description:
      "From assistants and coordinators to camera, lighting, sound, and production teams, we source reliable local crew for your shoot.",
  },
  {
    title: "Professional Equipment Rental",
    eyebrow: "Equipment Rental",
    href: "/services#equipment-rental",
    image: "/images/uae-locations-showcase.png",
    alt: "Professional cinema cameras, lenses, lights, and cases in a Dubai rental room",
    description:
      "Source camera bodies, lenses, lighting, grip, sound, drones, and support equipment locally so your production keeps moving.",
  },
];

export const allServices = [
  {
    id: "permits",
    title: "Filming Permits",
    icon: FileCheck2,
    description:
      "End-to-end coordination for commercial, documentary, corporate, branded, and broadcast filming permit applications.",
  },
  {
    id: "photography-permits",
    title: "Photography Permits",
    icon: Camera,
    description:
      "Fast support for editorial, brand, fashion, tourism, real estate, and campaign photography permissions.",
  },
  {
    id: "government-approvals",
    title: "Government Approvals",
    icon: BadgeCheck,
    description:
      "Coordination with relevant authorities, municipalities, free zones, venues, and private property owners.",
  },
  {
    id: "customs-clearance",
    title: "Equipment Customs Clearance",
    icon: Plane,
    description:
      "Documentation support for temporary import, carnet planning, airport handling, and sensitive production equipment.",
  },
  {
    id: "crew-hire",
    title: "Local Crew Hire",
    icon: Users,
    description:
      "Trusted local production teams, camera assistants, fixers, runners, drivers, sound, lighting, and logistics support.",
  },
  {
    id: "equipment-rental",
    title: "Professional Filming Equipment Rental",
    icon: Warehouse,
    description:
      "Access to UAE-based camera, lens, lighting, grip, drone, sound, and specialty production equipment suppliers.",
  },
  {
    id: "drone-support",
    title: "Drone Filming Support",
    icon: Drone,
    description:
      "Drone crew sourcing, location planning, flight coordination, and permit guidance for compliant aerial filming.",
  },
  {
    id: "location-scouting",
    title: "Location Scouting",
    icon: MapPinned,
    description:
      "Curated UAE locations from Dubai skylines and desert roads to industrial spaces, beaches, studios, and private venues.",
  },
  {
    id: "production-logistics",
    title: "Production Logistics",
    icon: Settings,
    description:
      "Scheduling, movement plans, call-time coordination, supplier handling, production paperwork, and day-to-day operations.",
  },
  {
    id: "transportation",
    title: "Transportation & Airport Transfers",
    icon: Car,
    description:
      "Crew cars, VIP transfers, equipment vans, airport pickups, and route planning for efficient shoot days.",
  },
  {
    id: "accommodation",
    title: "Accommodation Coordination",
    icon: ShieldCheck,
    description:
      "Hotel sourcing and stay coordination for visiting producers, crew, talent, photographers, and agency teams.",
  },
  {
    id: "vendor-coordination",
    title: "Vendor Coordination",
    icon: RadioTower,
    description:
      "Reliable supplier coordination for catering, security, set builds, studios, interpreters, talent, transport, and venues.",
  },
  {
    id: "full-support",
    title: "Full UAE Production Support",
    icon: ClipboardCheck,
    description:
      "A single local partner for permits, crew, gear, logistics, transport, vendors, and on-ground production support.",
  },
];

export const faqs = [
  {
    question: "Do I need a permit to film in Dubai or the UAE?",
    answer:
      "Most commercial filming and professional photography requires approval. Requirements depend on the emirate, location, crew size, equipment, drone use, and final usage.",
  },
  {
    question: "How quickly can a filming permit be arranged?",
    answer:
      "Simple approvals can move quickly when the brief, locations, dates, equipment list, and company documents are ready. Complex locations, drones, roads, or government areas need more lead time.",
  },
  {
    question: "Can you support international productions?",
    answer:
      "Yes. We support visiting broadcasters, production companies, agencies, brands, photographers, and creator teams with permits, customs, crew, equipment, transport, and local coordination.",
  },
  {
    question: "Do you cover all Emirates?",
    answer:
      "We coordinate support across Dubai, Abu Dhabi, Sharjah, Ras Al Khaimah, Ajman, Umm Al Quwain, and Fujairah through the appropriate local channels.",
  },
];

export const blogPosts = [
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
      "We communicate honestly, set realistic expectations, and remove uncertainty from the production approval process.",
  },
  {
    title: "Accountability",
    icon: ShieldCheck,
    description:
      "Every permit carries responsibility. We act with ownership across approvals, compliance, and coordination.",
  },
  {
    title: "Efficiency",
    icon: ClipboardCheck,
    description:
      "Time matters in production. Our process is built to move projects forward while respecting local regulations.",
  },
  {
    title: "Local Integrity",
    icon: BadgeCheck,
    description:
      "We balance creative ambition with respect for UAE regulations, culture, institutions, and location requirements.",
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
