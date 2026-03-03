"use client";

import * as React from "react";
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
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { BlurFade } from "@/components/animation-wrapper";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AllProjectsPage() {
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

  return (
    <main className="flex flex-col min-h-screen mx-auto px-4 max-w-6xl">
      <Navbar />

      <section className="mt-20 mb-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10">
          <SectionHeader title="All My Projects" className="mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p: any, index: number) => (
              <BlurFade
                key={p.id}
                delay={0.05 * index}
                inView
                className="h-full"
              >
                <ProjectCard project={p} getTechIcon={getTechIcon} />
              </BlurFade>
            ))}
          </div>
          <div className="mt-20 flex justify-center">
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white/10 hover:bg-white/5 text-gray-300 hover:text-white rounded-xl px-10 py-7 text-base font-semibold transition-all group"
              >
                <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Return Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
