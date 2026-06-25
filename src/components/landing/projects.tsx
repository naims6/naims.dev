"use client";

import { ChevronRight } from "lucide-react";
import SecondaryButton from "../secondary-button";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGithubactions,
  SiStripe,
  SiPrisma,
  SiMysql,
  SiFirebase,
  SiSocketdotio,
  SiFramer,
  SiMui,
  SiMongoose,
} from "react-icons/si";
import { BlurFade } from "../animation-wrapper";
import { projects } from "@/data/projects";
import { SectionHeader } from "../section-header";

import { ProjectCard } from "../project-card";

export default function Projects() {
  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "Next.js":
        return <SiNextdotjs className="w-3 h-3" />;
      case "React.js":
        return <SiReact className="w-3 h-3 text-[#61DAFB]" />;
      case "TypeScript":
        return <SiTypescript className="w-3 h-3 text-[#3178C6]" />;
      case "JavaScript":
        return <SiJavascript className="w-3 h-3 text-[#F7DF1E]" />;
      case "HTML/CSS":
        return <SiHtml5 className="w-3 h-3 text-[#E34F26]" />;
      case "Tailwind CSS":
      case "Tailwind":
        return <SiTailwindcss className="w-3 h-3 text-[#06B6D4]" />;
      case "Shadcn/ui":
        return <SiShadcnui className="w-3 h-3" />;
      case "Node.js":
        return <SiNodedotjs className="w-3 h-3 text-[#339933]" />;
      case "Express.js":
        return <SiExpress className="w-3 h-3" />;
      case "MongoDB":
        return <SiMongodb className="w-3 h-3 text-[#47A248]" />;
      case "Mongoose":
        return <SiMongoose className="w-3 h-3 text-[#800020]" />;
      case "Firebase":
        return <SiFirebase className="w-3 h-3 text-[#FFCA28]" />;
      case "Socket.io":
        return <SiSocketdotio className="w-3 h-3" />;
      case "Framer Motion":
        return <SiFramer className="w-3 h-3" />;
      case "Material UI":
        return <SiMui className="w-3 h-3 text-[#007FFF]" />;
      case "PostgreSQL":
        return <SiPostgresql className="w-3 h-3 text-[#336791]" />;
      case "Redis":
        return <SiRedis className="w-3 h-3 text-[#DC382D]" />;
      case "Docker":
        return <SiDocker className="w-3 h-3 text-[#2496ED]" />;
      case "CI/CD":
        return <SiGithubactions className="w-3 h-3 text-[#2088FF]" />;
      case "Stripe":
        return <SiStripe className="w-3 h-3 text-[#008CDD]" />;
      case "Prisma":
        return <SiPrisma className="w-3 h-3 text-[#2D3748]" />;
      case "MySQL":
        return <SiMysql className="w-3 h-3 text-[#336791]" />;
      default:
        return null;
    }
  };

  const displayProjects = projects.slice(0, 3);

  return (
    <section className="mt-10 relative scroll-mt-28" id="projects">
      {/* Background decorative blobs for glassmorphism effect */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto mb-12 flex items-center justify-between gap-4">
        <SectionHeader
          title="Projects"
          className="mb-0"
        />
        <SecondaryButton
          href="/projects"
          className="px-5 py-2 text-sm shrink-0 max-sm:hidden"
          icon={<ChevronRight className="w-4 h-4" />}
        >
          <span className="text-sm tracking-wide">View All Projects</span>
        </SecondaryButton>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((p: any, index: number) => (
            <BlurFade key={p.id} delay={0.1 * index} inView className="h-full">
              <ProjectCard project={p} getTechIcon={getTechIcon} />
            </BlurFade>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <SecondaryButton
            href="/projects"
            icon={<ChevronRight className="w-4 h-4" />}
          >
            <span className="text-sm tracking-wide">View All Projects</span>
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
