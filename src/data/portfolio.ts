export type Project = {
  title: string;
  slug: string;
  category: "Business" | "Landing Pages" | "WordPress" | "Trading" | "UI";
  summary: string;
  outcome: string;
  problem: string;
  approach: string;
  result: string;
  stack: string[];
  role: string;
  github?: string;
  live?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image: string;
};

export type Service = {
  title: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  bestFor: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
  strengths: string[];
};

export type TimelineEntry = {
  year: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Custom Website Design",
    description: "UI/UX, responsive layout, and brand consistency for products that feel intentional.",
    deliverables: ["Wireframes", "Visual direction", "Responsive UI"],
    turnaround: "2-4 weeks",
    bestFor: "Founder-led brands and modern service businesses",
  },
  {
    title: "Landing Pages",
    description: "Clear sections, strong calls to action, and conversion-focused structure for campaigns.",
    deliverables: ["Hero + CTA system", "Section hierarchy", "Analytics-ready layout"],
    turnaround: "1-2 weeks",
    bestFor: "Launches, offers, and lead generation",
  },
  {
    title: "WordPress Websites",
    description: "Fast, editable WordPress builds with thoughtful customization and core security basics.",
    deliverables: ["Theme customization", "Performance tuning", "Content structure"],
    turnaround: "2-3 weeks",
    bestFor: "Content-rich sites and editorial teams",
  },
  {
    title: "Business Websites",
    description: "Credible, professional websites with services, proof, and clear contact flows.",
    deliverables: ["Page architecture", "Testimonials", "Contact strategy"],
    turnaround: "3-5 weeks",
    bestFor: "Consultants, agencies, and established businesses",
  },
];

export const principles: Principle[] = [
  {
    title: "Engineering craft",
    description: "Performance-minded builds that stay maintainable and straightforward to iterate on.",
  },
  {
    title: "Design that sells",
    description: "Clarity, trust, and hierarchy that guide users toward the right next step.",
  },
  {
    title: "Risk management mindset",
    description: "A disciplined process for decisions, review, and measured execution.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Development",
    items: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "WordPress", "SEO basics", "Performance optimization", "Deployment"],
    strengths: ["Fast, responsive builds", "Conversion-focused UX", "Clean handoff-ready code"],
  },
  {
    title: "Trading",
    items: ["Market structure", "Technical analysis", "Journaling", "Risk rules", "Review process"],
    strengths: ["Disciplined workflow", "Measured execution", "Process over prediction"],
  },
];

export const projects: Project[] = [
  {
    title: "Northstar Studio",
    slug: "northstar-studio",
    category: "Business",
    summary: "A premium business site with refined storytelling and a high-trust conversion path.",
    outcome: "Positioned the company as a serious, modern partner.",
    problem: "The brand needed a site that felt credible, premium, and easier to convert visitors into leads.",
    approach: "Built a structured narrative flow with clear service sections, testimonials, and a focused contact path.",
    result: "Lead inquiries increased and the site projected a stronger brand presence.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    role: "Product design + front-end build",
    live: "https://example.com",
    metrics: [
      { label: "Performance score", value: "95/100" },
      { label: "Load time", value: "1.2s" },
      { label: "Lead flow", value: "+28%" },
    ],
    image: "/placeholder-project.jpg",
  },
  {
    title: "Launch Ledger",
    slug: "launch-ledger",
    category: "Landing Pages",
    summary: "A launch-focused landing page designed to communicate value quickly and clearly.",
    outcome: "Improved message clarity and CTA prominence.",
    problem: "The campaign needed a simpler, more persuasive page that could support paid traffic efficiently.",
    approach: "Structured core sections around a single promise, added social proof, and refined the CTA hierarchy.",
    result: "The page delivered stronger engagement and better conversion intent.",
    stack: ["React", "TypeScript", "Tailwind"],
    role: "UX direction + front-end implementation",
    github: "https://github.com",
    live: "https://example.com",
    metrics: [
      { label: "Conversion focus", value: "High" },
      { label: "Scroll depth", value: "+19%" },
      { label: "Load time", value: "0.9s" },
    ],
    image: "/placeholder-project.jpg",
  },
  {
    title: "Cedar Press",
    slug: "cedar-press",
    category: "WordPress",
    summary: "A customized WordPress site for a content-led brand with a fast editing experience.",
    outcome: "Balanced editorial flexibility with performance and polish.",
    problem: "The team needed a stable content management workflow without sacrificing design quality.",
    approach: "Customized the theme, streamlined the content model, and improved core web vitals.",
    result: "The site became easier to manage and faster to load.",
    stack: ["WordPress", "PHP", "Airtable"],
    role: "Theme customization + performance tuning",
    live: "https://example.com",
    metrics: [
      { label: "Core Web Vitals", value: "Good" },
      { label: "Editing speed", value: "Fast" },
      { label: "Load time", value: "1.1s" },
    ],
    image: "/placeholder-project.jpg",
  },
  {
    title: "Trade Journal Studio",
    slug: "trade-journal-studio",
    category: "Trading",
    summary: "A trading journal concept focused on clarity, discipline, and repeatable review.",
    outcome: "Made process tracking feel calm and structured.",
    problem: "The workflow needed a better interface for capturing setups, notes, and review data.",
    approach: "Designed a modular dashboard with a simple journaling flow and consistent review prompts.",
    result: "The concept created a more orderly way to reflect on trades without overstimulation.",
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    role: "Product design + UI concept",
    github: "https://github.com",
    metrics: [
      { label: "Focus score", value: "High" },
      { label: "Journal clarity", value: "Excellent" },
      { label: "Review cadence", value: "Consistent" },
    ],
    image: "/placeholder-project.jpg",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2026/Present",
    title: "Freelancer & Funded Trader",
    description: "Built polished, conversion-minded websites for clients across consulting and creative sectors.",
  },
  {
    year: "2025",
    title: "Trading discipline practice",
    description: "Started documenting setups, journaling outcomes, and refining a structured risk framework.",
  },
  {
    year: "2024",
    title: "BSc in Computer Science",
    description: "Learned the fundamentals of web development, algorithims, and software engineering principles, while building small web projects, and exploring trading starategies.",
  },
  {
    year: "2023",
    title: "First client projects",
    description: "Delivered early web builds and learned the value of clarity, speed, and trust in real products.",
  },
];

export const testimonials = [
  {
    quote: "Croch brought a calm, thoughtful approach to the build. The site feels premium without being overdone.",
    name: "Mina R.",
    role: "Founder, Northstar Studio",
  },
  {
    quote: "The process was clear and the outcome was stronger than expected. Every section had purpose.",
    name: "A. Tadesse",
    role: "Operations Lead",
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const contactLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@croch.dev" },
  { label: "X", href: "https://x.com" },
];
