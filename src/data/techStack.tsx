import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
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
  SiBootstrap,
  SiLinux,
  SiN26,
  SiPostman,
  SiJsonwebtokens,
  SiNetlify,
} from "react-icons/si";
import { Monitor, Server, Database, Wrench } from "lucide-react";


export const techStack = [
    {
      name: "Frontend",
      icon: <Monitor className="w-4 h-4 mr-2" />,
      skills: [
        { name: "Next.js", icon: <SiNextdotjs className="mr-1" /> },
        { name: "React.js", icon: <SiReact className="mr-1 text-[#61DAFB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="mr-1 text-[#3178C6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="mr-1 text-[#F7DF1E]" /> },
        { name: "HTML", icon: <SiHtml5 className="mr-1 text-[#E34F26]" /> },
        { name: "CSS", icon: <SiCss3 className="mr-1 text-[#1572B6]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="mr-1 text-[#1572B6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="mr-1 text-[#06B6D4]" /> },
        { name: "Shadcn/ui", icon: <SiShadcnui className="mr-1" /> },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="w-4 h-4 mr-2" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="mr-1 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="mr-1" /> },
        { name: "REST APIs", icon: null },
        { name: "NextAuth.js", icon: <SiN26 className="mr-1 text-[#F24E1E]" /> },
        { name: "Firebase Auth..", icon: <SiFirebase className="mr-1 text-[#F24E1E]" /> },
      ],
    },
    {
      name: "Database",
      icon: <Database className="w-4 h-4 mr-2" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="mr-1 text-[#47A248]" /> },
        { name: "Firebase", icon: <SiFirebase className="mr-1 text-[#FFCA28]" /> },
      ],
    },
    {
      name: "Tools & Others",
      icon: <Wrench className="w-4 h-4 mr-2" />,
      skills: [
        { name: "Git", icon: <SiGit className="mr-1 text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="mr-1" /> },
        { name: "Figma", icon: <SiFigma className="mr-1 text-[#F24E1E]" /> },
        { name: "Vercel", icon: <SiVercel className="mr-1" /> },
        { name: "Netlify", icon: <SiNetlify className="mr-1" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="mr-1" /> },
        { name: "Postman", icon: <SiPostman className="mr-1 text-[#F24E1E]" /> },
        { name: "Linux", icon: <SiLinux className="mr-1 text-[#F24E1E]" /> },
      ],
    },
  ]