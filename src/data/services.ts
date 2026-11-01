import { Building2, Users, Palette, Package, ClipboardCheck, Shield, Zap, LucideIcon } from "lucide-react";

export const SITE = "https://www.srjconstruction.in";
export const PHONE = "+917050601752";
export const PHONE_LABEL = "+91 70506 01752";
// Paste your GeM seller/catalog link between the quotes to show a "View our GeM listing" button.
export const GEM_URL = "";
export const WHATSAPP = "https://wa.me/917050601752";

export interface Service {
  slug: string; title: string; icon: LucideIcon; metaTitle: string; metaDesc: string;
  intro: string; offers: { t: string; d: string }[]; why: string[]; faqs: { q: string; a: string }[];
}

export const services: Service[] = [
  {
    slug: "construction", title: "Construction", icon: Building2,
    metaTitle: "Construction Services: Residential, Commercial & Infrastructure | SRJ Construction",
    metaDesc: "SRJ Construction builds residential and commercial buildings, roads and infrastructure, with renovation and repair. Get a free quote today.",
    intro: "From foundation to finishing, we build homes, offices, roads and public works with clear timelines, documented quality checks and one team accountable for the result.",
    offers: [
      { t: "Residential buildings", d: "Houses, apartments and boundary works built to your drawings and budget." },
      { t: "Commercial projects", d: "Offices, showrooms and institutional buildings with planned site management." },
      { t: "Roads & infrastructure", d: "Civil and infrastructure works for government and private clients." },
      { t: "Renovation & repair", d: "Structural repair, waterproofing and upgrades to existing buildings." },
    ],
    why: ["One team from civil work to interiors", "Modern methods such as GFRP reinforcement where suitable", "Progress updates and documented handover"],
    faqs: [
      { q: "Do you take both government and private projects?", a: "Yes. We work with private clients and supply to government departments, including through GeM." },
      { q: "Can you build from my own drawings?", a: "Yes. We can build from your architect's drawings or arrange design and estimation through our consultancy service." },
      { q: "How do I get a cost estimate?", a: "Share your requirement through the enquiry form or call us. We will discuss scope and arrange a site visit before quoting." },
    ],
  },
  {
    slug: "manpower-supply", title: "Manpower Supply", icon: Users,
    metaTitle: "Manpower Supply for Construction & Facilities | SRJ Construction",
    metaDesc: "Skilled, semi-skilled and unskilled manpower for government and private projects, with site management and training. Request a quote from SRJ Construction.",
    intro: "Reliable, trained workers for construction sites, offices and facilities, supplied on the contract terms your project needs.",
    offers: [
      { t: "Skilled workers", d: "Masons, carpenters, electricians, plumbers, bar benders and other trades." },
      { t: "Semi-skilled & unskilled labour", d: "Helpers and general labour for sites and facilities." },
      { t: "Site management staff", d: "Supervisors and coordinators to run daily work on site." },
      { t: "Training programs", d: "Safety and skill training before workers reach your site." },
    ],
    why: ["Safety-first onboarding", "Suitable for government and private contracts", "Flexible team size as the project changes"],
    faqs: [
      { q: "Can you supply workers for government tenders?", a: "Yes. We supply manpower for government and public sector requirements, including GeM orders." },
      { q: "How quickly can workers be deployed?", a: "It depends on trade and numbers. Tell us the requirement and we will confirm a timeline." },
      { q: "Do you provide safety training?", a: "Yes. Safety protocols and training are part of our process." },
    ],
  },
  {
    slug: "interiors-fit-outs", title: "Interiors & Fit-outs", icon: Palette,
    metaTitle: "Interior Design & Fit-outs | SRJ Construction",
    metaDesc: "From elegant living rooms to luxurious bedrooms, SRJ Construction delivers thoughtfully designed interiors that combine beauty, functionality and craftsmanship.",
    intro: "From elegant living rooms to luxurious bedrooms, SRJ Construction delivers thoughtfully designed interiors that combine beauty, functionality and craftsmanship.",
    offers: [
      { t: "Living room interiors", d: "Welcoming layouts, thoughtful finishes and details that feel like home." },
      { t: "Bedroom interior design", d: "Restful bedrooms shaped around comfort, storage and your routine." },
      { t: "Modular kitchen", d: "Purposeful kitchen planning with practical storage and clean finishes." },
      { t: "False ceiling & lighting", d: "Layered ceiling details and lighting planned for the way you live." },
      { t: "TV unit & wall panelling", d: "Custom focal walls that bring media, materials and storage together." },
      { t: "Wardrobe & storage", d: "Made-to-measure storage that makes every inch work harder." },
      { t: "Wall finishes", d: "Texture, colour and crafted details that give a room its character." },
      { t: "Office & commercial interiors", d: "Functional, well-planned spaces for teams, clients and customers." },
    ],
    why: ["Professional planning", "Functional space utilization", "Quality materials", "Modern design concepts", "Transparent communication", "Complete execution support"],
    faqs: [
      { q: "What interior work can SRJ Construction help with?", a: "We discuss room interiors, modular kitchens, ceilings and lighting, TV units and wall panelling, wardrobes, wall finishes, and office or commercial interiors." },
      { q: "How does an interior project get started?", a: "We begin with a consultation, understand the space and requirements, then plan the scope and discuss design and material options before execution." },
      { q: "Can I share my own design ideas or references?", a: "Yes. Share your ideas, preferences and reference images during the consultation so we can discuss a suitable approach for your space." },
    ],
  },
  {
    slug: "materials", title: "Construction Materials", icon: Package,
    metaTitle: "Construction Materials Supplier: Cement, AAC Blocks, Tiles, GFRP Bars | SRJ Construction",
    metaDesc: "Supply of cement, AAC blocks, aggregates, tiles, paints and GFRP bars for private and government projects. Request a material quote from SRJ Construction.",
    intro: "Quality construction materials for private and government projects, supplied in the quantity and schedule your site needs.",
    offers: [
      { t: "Cement & aggregates", d: "Cement and aggregates for structural and finishing work." },
      { t: "AAC blocks & bricks", d: "Walling materials for faster, lighter construction." },
      { t: "Tiles, paints & chemicals", d: "Finishing materials and waterproofing chemicals." },
      { t: "GFRP bars", d: "A corrosion-free alternative to steel reinforcement where suitable." },
    ],
    why: ["Bulk and project-wise supply", "Available through GeM for government buyers", "Guidance on the right material for the job"],
    faqs: [
      { q: "Do you supply materials without construction work?", a: "Yes. We supply materials on their own to contractors and departments." },
      { q: "Can you quote for a bill of quantities (BOQ)?", a: "Yes. Send your BOQ or requirement and we will prepare a quotation." },
      { q: "Do you supply GFRP bars?", a: "Yes. See our GFRP reinforcement page for details." },
    ],
  },
  {
    slug: "consultancy", title: "Consultancy", icon: ClipboardCheck,
    metaTitle: "Construction Consultancy: Design, Estimation, PMC | SRJ Construction",
    metaDesc: "Architectural and structural design, quantity surveying, estimation, project management and site supervision from SRJ Construction.",
    intro: "Plan the project properly before the first brick is laid. We help with design, cost estimates and supervision so budgets and timelines stay under control.",
    offers: [
      { t: "Design services", d: "Architectural and structural design support." },
      { t: "Estimation & quantity surveying", d: "Detailed BOQs and cost estimates you can plan around." },
      { t: "Project management (PMC)", d: "Scheduling, coordination and reporting across the project." },
      { t: "Site supervision", d: "Regular checks that work matches drawings and standards." },
    ],
    why: ["Standardized BOQs and QA checklists", "Digital progress tracking and client updates", "Independent supervision if another contractor builds"],
    faqs: [
      { q: "Can I use consultancy only?", a: "Yes. You can hire us for design, estimation or supervision without giving us the construction work." },
      { q: "What do I need to start?", a: "Your site details, plans if you have them, and your budget and timeline." },
      { q: "Do you prepare tender estimates?", a: "Yes. We can prepare estimates and BOQs for tender work." },
    ],
  },
  {
    slug: "safety-qa", title: "Safety & QA", icon: Shield,
    metaTitle: "Construction Safety & Quality Assurance | SRJ Construction",
    metaDesc: "Site safety protocols, quality checks, audits and documented handovers for construction projects. Speak with SRJ Construction.",
    intro: "Safe sites and checked work. We set up safety protocols, quality checks and documentation so problems are caught early and handover is clean.",
    offers: [
      { t: "Safety protocols", d: "Site rules, PPE use and safe working procedures." },
      { t: "Quality assurance", d: "Checklists and inspections at each stage of work." },
      { t: "Site audits", d: "Independent review of safety and quality on running sites." },
      { t: "Documentation", d: "Records and handover files you can rely on later." },
    ],
    why: ["Safety training for workers", "PPE supply available", "Compliance records kept from day one"],
    faqs: [
      { q: "Can you audit a site we are already running?", a: "Yes. We can audit safety and quality on an ongoing site and report findings." },
      { q: "Do you supply PPE?", a: "Yes. PPE supply is available for sites and manpower contracts." },
      { q: "Is documentation included at handover?", a: "Yes. We provide documented handovers with quality records." },
    ],
  },
  {
    slug: "gfrp-reinforcement", title: "GFRP Reinforcement", icon: Zap,
    metaTitle: "GFRP Bars for Construction: Corrosion-Free Reinforcement | SRJ Construction",
    metaDesc: "GFRP (Glass Fiber Reinforced Polymer) bars as a corrosion-free, lightweight alternative to steel reinforcement. Get GFRP bar supply and advice from SRJ Construction.",
    intro: "Glass Fiber Reinforced Polymer (GFRP) bars replace steel reinforcement where corrosion, weight or conductivity is a concern, and can reduce long-term maintenance.",
    offers: [
      { t: "Corrosion-free", d: "Suited to water-exposed, coastal and chemical environments." },
      { t: "Lower lifecycle cost", d: "Less maintenance and a longer service life." },
      { t: "Lightweight & strong", d: "Easier handling and faster installation on site." },
      { t: "Non-conductive", d: "Suitable near power and electromagnetic environments." },
    ],
    why: ["Supply and use in our own projects", "Advice on where GFRP suits and where steel is still needed", "Available for government buyers through GeM"],
    faqs: [
      { q: "Can GFRP fully replace steel?", a: "Not in every case. It suits specific uses, and the structural engineer should confirm the design. We help you decide." },
      { q: "Where is GFRP most useful?", a: "In water-exposed, coastal and corrosive locations, and where non-conductive material is needed." },
      { q: "Can I buy GFRP bars without construction work?", a: "Yes. Send your requirement for a supply quotation." },
    ],
  },
];
