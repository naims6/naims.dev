import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiLinux,
  SiPostman,
  SiJsonwebtokens,
  SiNetlify,
  SiRedux,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiRedis,
  SiEsotericsoftware,
  SiSocketdotio,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  isCore?: boolean;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const techStack: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="mr-1" />,
        color: "#000000",
        description: "The React framework for production.",
        isCore: true,
      },
      {
        name: "React.js",
        icon: <SiReact className="mr-1 text-[#61DAFB]" />,
        color: "#61DAFB",
        description: "A JavaScript library for building user interfaces.",
        isCore: true,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="mr-1 text-[#3178C6]" />,
        color: "#3178C6",
        description: "Typed superset of JavaScript.",
        isCore: true,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="mr-1 text-[#F7DF1E]" />,
        color: "#F7DF1E",
        description: "Dynamic scripting language for web.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="mr-1 text-[#06B6D4]" />,
        color: "#06B6D4",
        description: "Utility-first CSS framework.",
      },
      {
        name: "Shadcn UI",
        icon: <SiShadcnui className="mr-1" />,
        color: "#000000",
        description: "Re-usable components built with Radix UI.",
      },
      {
        name: "Redux",
        icon: <SiRedux className="mr-1 text-[#764ABC]" />,
        color: "#764ABC",
        description: "Predictable state container for JavaScript apps.",
      },
      {
        name: "HTML",
        icon: <SiHtml5 className="mr-1 text-[#E34F26]" />,
        color: "#E34F26",
        description: "Markup language for the web.",
      },
      {
        name: "CSS",
        icon: <SiCss className="mr-1 text-[#1572B6]" />,
        color: "#1572B6",
        description: "Cascading Style Sheets.",
      },
    ],
  },
  {
    name: "Backend & Databases",
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="mr-1 text-[#339933]" />,
        color: "#339933",
        description: "JavaScript runtime built on V8.",
        isCore: true,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="mr-1" />,
        color: "#000000",
        description: "Web application framework for Node.js.",
        isCore: true,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="mr-1 text-[#47A248]" />,
        color: "#47A248",
        description: "NoSQL document database.",
        isCore: true,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="mr-1 text-[#336791]" />,
        color: "#336791",
        description: "Relational database management system.",
        isCore: true,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="mr-1 text-[#336791]" />,
        color: "#336791",
        description: "Relational database management system.",
      },
      {
        name: "Redis",
        icon: <SiRedis className="mr-1 text-[#DC382D]" />,
        color: "#DC382D",
        description: "In-memory data structure store.",
      },
      {
        name: "Socket.io",
        icon: <SiSocketdotio className="mr-1" />,
        color: "#000000",
        description: "Real-time bidirectional event-based communication.",
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="mr-1 text-[#2D3748]" />,
        color: "#2D3748",
        description: "Database toolkit for Node.js.",
      },
      {
        name: "Firebase",
        icon: <SiFirebase className="mr-1 text-[#FFCA28]" />,
        color: "#FFCA28",
        description: "Authentication and backend services.",
      },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      {
        name: "Docker",
        icon: <SiDocker className="mr-1 text-[#2496ED]" />,
        color: "#2496ED",
        description: "Containerization platform for reliable runtime.",
        isCore: true,
      },
      {
        name: "CI/CD",
        icon: <SiGithubactions className="mr-1 text-[#2088FF]" />,
        color: "#2088FF",
        description: "Continuous integration and automated delivery.",
        isCore: true,
      },
      {
        name: "Git",
        icon: <SiGit className="mr-1 text-[#F05032]" />,
        color: "#F05032",
        description: "Distributed version control system.",
        isCore: true,
      },
      {
        name: "GitHub",
        icon: <SiGithub className="mr-1" />,
        color: "#000000",
        description: "Platform for hosting and collaboration.",
      },
      {
        name: "Linux",
        icon: <SiLinux className="mr-1 text-[#FCC624]" />,
        color: "#FCC624",
        description: "Open-source operating system.",
      },
      {
        name: "Vercel",
        icon: <SiVercel className="mr-1" />,
        color: "#000000",
        description: "Platform for frontend developers.",
      },
      {
        name: "Netlify",
        icon: <SiNetlify className="mr-1 text-[#00C7B7]" />,
        color: "#00C7B7",
        description: "Web hosting and automation platform.",
      },
    ],
  },
  {
    name: "Tools & Analytics",
    skills: [
      {
        name: "Figma",
        icon: <SiFigma className="mr-1 text-[#F24E1E]" />,
        color: "#F24E1E",
        description: "Collaborative interface design tool.",
      },
      {
        name: "Postman",
        icon: <SiPostman className="mr-1 text-[#FF6C37]" />,
        color: "#FF6C37",
        description: "API development and testing platform.",
      },
      {
        name: "JWT",
        icon: <SiJsonwebtokens className="mr-1" />,
        color: "#000000",
        description: "JSON Web Tokens for secure authentication.",
      },
      {
        name: "SEO",
        icon: <SiEsotericsoftware className="mr-1" />,
        color: "#000000",
        description: "Search Engine Optimization.",
      },
    ],
  },
];
