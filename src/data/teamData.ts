export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: string;
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
    id: "amal",
    name: "Amal",
    role: "Lead Architect & Founder",
    category: "Leadership",
    bio: "Pioneering high-performance web applications, futuristic UI systems, and strategic technology solutions at Intellex.",
    avatar: "/images/Amal.jpeg",
    neonColor: "#00F0FF", // Electric Cyan
    glowGradient: "from-[#00F0FF] via-[#A855F7] to-[#EC4899]",
    linkedin: "https://linkedin.com",
    email: "mailto:amal@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "hari",
    name: "Hari",
    role: "Senior Full-Stack Developer",
    category: "Development",
    bio: "Building robust microservices backend infrastructure and reactive front-end interfaces with 60 FPS performance.",
    avatar: "/images/Hari.jpeg",
    neonColor: "#5CFF3D", // Intellex Neon Green
    glowGradient: "from-[#5CFF3D] via-[#00FF99] to-[#00F0FF]",
    linkedin: "https://linkedin.com",
    email: "mailto:hari@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "jinan",
    name: "Jinan",
    role: "Lead AI & Machine Learning Engineer",
    category: "AI/ML",
    bio: "Architecting generative AI algorithms, neural network integration, and intelligent automation systems.",
    avatar: "/images/Jinan.jpeg",
    neonColor: "#A855F7", // Cyber Purple
    glowGradient: "from-[#A855F7] via-[#EC4899] to-[#00F0FF]",
    linkedin: "https://linkedin.com",
    email: "mailto:jinan@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "lubna",
    name: "Lubna",
    role: "Head of UI/UX Design",
    category: "Design",
    bio: "Crafting modern glassmorphism visual identities, intuitive user flows, and sleek digital experiences.",
    avatar: "/images/Lubna.jpeg",
    neonColor: "#EC4899", // Hot Pink
    glowGradient: "from-[#EC4899] via-[#F43F5E] to-[#EAB308]",
    linkedin: "https://linkedin.com",
    email: "mailto:lubna@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "neja",
    name: "Neja",
    role: "Motion & Creative Director",
    category: "Media",
    bio: "Directing high-end 3D graphics, interactive animations, and visual storytelling for digital brand launches.",
    avatar: "/images/Neja.jpeg",
    neonColor: "#EAB308", // Neon Gold
    glowGradient: "from-[#EAB308] via-[#F97316] to-[#00F0FF]",
    linkedin: "https://linkedin.com",
    email: "mailto:neja@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "shiv-shankar",
    name: "Shiv Shankar",
    role: "DevOps & Cloud Systems Architect",
    category: "Development",
    bio: "Optimizing cloud deployment pipelines, Kubernetes clusters, and zero-downtime server scaling.",
    avatar: "/images/Shiv Shankar.jpeg",
    neonColor: "#3B82F6", // Ocean Blue
    glowGradient: "from-[#3B82F6] via-[#06B6D4] to-[#A855F7]",
    linkedin: "https://linkedin.com",
    email: "mailto:shivshankar@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "shivganga",
    name: "Shivganga",
    role: "Growth & Digital Marketing Lead",
    category: "Marketing",
    bio: "Driving performance marketing campaigns, data-backed conversion optimization, and brand scaling strategies.",
    avatar: "/images/Shivganga.jpeg",
    neonColor: "#8B5CF6", // Electric Violet
    glowGradient: "from-[#8B5CF6] via-[#EC4899] to-[#00F0FF]",
    linkedin: "https://linkedin.com",
    email: "mailto:shivganga@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "shiyara",
    name: "Shiyara",
    role: "Head of Operations & Client Success",
    category: "Operations",
    bio: "Managing cross-functional team execution, agile workflows, and ensuring client goals are exceeded.",
    avatar: "/images/Shiyara.jpeg",
    neonColor: "#F97316", // Neon Orange
    glowGradient: "from-[#F97316] via-[#EAB308] to-[#EC4899]",
    linkedin: "https://linkedin.com",
    email: "mailto:shiyara@intellex.ai",
    portfolio: "https://intellex.ai",
  },
  {
    id: "sinan",
    name: "Sinan",
    role: "Enterprise Sales Director",
    category: "Sales",
    bio: "Fostering long-term strategic enterprise partnerships and bringing cutting-edge technology to global clients.",
    avatar: "/images/Sinan.jpeg",
    neonColor: "#06B6D4", // Cyber Teal
    glowGradient: "from-[#06B6D4] via-[#3B82F6] to-[#A855F7]",
    linkedin: "https://linkedin.com",
    email: "mailto:sinan@intellex.ai",
    portfolio: "https://intellex.ai",
  },
];
