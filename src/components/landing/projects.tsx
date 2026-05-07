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
      {/* Decorative gradient removed for cleaner look */}

      <SectionHeader
        title="Featured Projects"
        className="max-w-6xl mx-auto mb-12"
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((p: any, index: number) => (
            <BlurFade key={p.id} delay={0.1 * index} inView className="h-full">
              <ProjectCard project={p} getTechIcon={getTechIcon} />
            </BlurFade>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 ease-out rounded-2xl overflow-hidden"
          >
            {/* 3D Background with gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-blue-500 to-indigo-600 transition-all duration-300 group-hover:scale-105" />

            {/* 3D Edge/Depth effect */}
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2),0_4px_0_0_rgba(37,99,235,1),0_8px_16px_-4px_rgba(37,99,235,0.5)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2),0_6px_0_0_rgba(37,99,235,1),0_12px_20px_-4px_rgba(37,99,235,0.6)] transition-all duration-300 group-hover:-translate-y-1" />

            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            {/* Content */}
            <span className="relative flex items-center gap-3">
              <span className="text-lg tracking-wide">View All Projects</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
