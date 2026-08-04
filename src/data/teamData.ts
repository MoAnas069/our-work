export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string; // Leadership, Development, Design, AI/ML, Media, Marketing, Operations, Sales
  bio: string;
  avatar: string;
  neonColor: string; // Primary neon glow color hex/rgb
  glowGradient: string; // Tailored gradient string
  linkedin?: string;
  email?: string;
  portfolio?: string;
}

export const CATEGORIES = [
  "All",
  "Leadership",
  "Development",
  "Design",
  "AI/ML",
  "Media",
  "Marketing",
  "Operations",
  "Sales",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "anas-mo",
    name: "Anas Mo",
    role: "Founder & Lead Architect",
    category: "Leadership",
    bio: "Pioneering futuristic digital solutions, high-performance web systems, and next-gen user interfaces at Intellex.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    neonColor: "#00F0FF", // Electric Cyan
    glowGradient: "from-[#00F0FF] via-[#A855F7] to-[#EC4899]",
    linkedin: "https://linkedin.com",
    email: "mailto:anas@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Head of AI & Machine Learning",
    category: "AI/ML",
    bio: "Architecting generative AI pipelines and real-time neural networks to power intelligent automation systems.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    neonColor: "#A855F7", // Cyber Purple
    glowGradient: "from-[#A855F7] via-[#EC4899] to-[#00F0FF]",
    linkedin: "https://linkedin.com",
    email: "mailto:elena@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Senior Full-Stack Developer",
    category: "Development",
    bio: "Building ultra-low-latency backend infrastructure and reactive Next.js applications with 60 FPS performance.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    neonColor: "#EC4899", // Hot Pink
    glowGradient: "from-[#EC4899] via-[#F43F5E] to-[#EAB308]",
    linkedin: "https://linkedin.com",
    email: "mailto:marcus@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "sophia-chen",
    name: "Sophia Chen",
    role: "Lead UI/UX & Motion Designer",
    category: "Design",
    bio: "Crafting Apple-level micro-interactions, dark glassmorphism interfaces, and immersive user journeys.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
    neonColor: "#EAB308", // Neon Gold
    glowGradient: "from-[#EAB308] via-[#F97316] to-[#00F0FF]",
    linkedin: "https://linkedin.com",
    email: "mailto:sophia@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "alex-kai",
    name: "Alex Kai",
    role: "Creative Media Director",
    category: "Media",
    bio: "Directing cinematic 3D renders, video animations, and visual storytelling for high-profile client launches.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    neonColor: "#3B82F6", // Ocean Blue
    glowGradient: "from-[#3B82F6] via-[#06B6D4] to-[#A855F7]",
    linkedin: "https://linkedin.com",
    email: "mailto:alex@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Growth & Marketing Strategist",
    category: "Marketing",
    bio: "Scaling digital campaigns through data-driven performance analytics and brand authority expansion.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    neonColor: "#8B5CF6", // Electric Violet
    glowGradient: "from-[#8B5CF6] via-[#EC4899] to-[#00F0FF]",
    linkedin: "https://linkedin.com",
    email: "mailto:sarah@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "VP of Business Operations",
    category: "Operations",
    bio: "Streamlining cross-functional team workflows and delivering enterprise projects on rigorous schedules.",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800",
    neonColor: "#F97316", // Neon Orange
    glowGradient: "from-[#F97316] via-[#EAB308] to-[#EC4899]",
    linkedin: "https://linkedin.com",
    email: "mailto:david@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "hannah-miller",
    name: "Hannah Miller",
    role: "Enterprise Sales Lead",
    category: "Sales",
    bio: "Connecting global industry leaders with Intellex's suite of high-tech digital transformations.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    neonColor: "#06B6D4", // Cyber Teal
    glowGradient: "from-[#06B6D4] via-[#3B82F6] to-[#A855F7]",
    linkedin: "https://linkedin.com",
    email: "mailto:hannah@intellex.ai",
    portfolio: "https://intellex.ai",
  },
];
