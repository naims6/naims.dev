"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
  SiFirebase,
  SiSocketdotio,
  SiFramer,
  SiMui,
  SiMongoose,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
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
      default:
        return null;
    }
  };

  const displayProjects = projects.slice(0, 3);

  return (
    <section className="mt-20 relative scroll-mt-28" id="projects">
      <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <SectionHeader
        title="Featured Projects"
        className="max-w-6xl mx-auto mb-12"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((p: any, index: number) => (
            <BlurFade key={p.id} delay={0.1 * index} inView className="h-full">
              <ProjectCard project={p} getTechIcon={getTechIcon} />
            </BlurFade>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/projects">
            <Button variant="secondary" size="lg" className="group">
              View All Projects
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
