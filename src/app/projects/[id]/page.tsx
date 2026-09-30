"use client";

import * as React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  CheckCircle2,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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
  SiNestjs,
} from "react-icons/si";
import { GiChargingBull } from "react-icons/gi";

import { projects } from "@/data/projects";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/animation-wrapper";
import PrimaryCtaButton from "@/components/primary-cta-button";
import SecondaryButton from "@/components/secondary-button";

export default function ProjectDetailPage() {
  const params = useParams();
  const id = params?.id;

  const project = projects.find((p) => p.id.toString() === id);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  if (!project) {
    return (
      <main className="flex flex-col min-h-screen mx-auto px-4 max-w-6xl items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link href="/projects">
          <Button variant="outline">Back to Projects</Button>
        </Link>
      </main>
    );
  }

  const renderBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**") ? (
        <strong key={i} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      ) : (
        part
      )
    );
  };

  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "Next.js":
        return <SiNextdotjs className="w-4 h-4" />;
      case "React.js":
        return <SiReact className="w-4 h-4 text-[#61DAFB]" />;
      case "TypeScript":
        return <SiTypescript className="w-4 h-4 text-[#3178C6]" />;
      case "JavaScript":
        return <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />;
      case "HTML/CSS":
        return <SiHtml5 className="w-4 h-4 text-[#E34F26]" />;
      case "Tailwind CSS":
      case "Tailwind":
        return <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />;
      case "Shadcn/ui":
        return <SiShadcnui className="w-4 h-4" />;
      case "Node.js":
        return <SiNodedotjs className="w-4 h-4 text-[#339933]" />;
      case "Express.js":
        return <SiExpress className="w-4 h-4" />;
      case "MongoDB":
        return <SiMongodb className="w-4 h-4 text-[#47A248]" />;
      case "Mongoose":
        return <SiMongoose className="w-4 h-4 text-[#800020]" />;
      case "Firebase":
        return <SiFirebase className="w-4 h-4 text-[#FFCA28]" />;
      case "Socket.io":
        return <SiSocketdotio className="w-4 h-4" />;
      case "Framer Motion":
        return <SiFramer className="w-4 h-4" />;
      case "Material UI":
        return <SiMui className="w-4 h-4 text-[#007FFF]" />;
      case "PostgreSQL":
        return <SiPostgresql className="w-4 h-4 text-[#336791]" />;
      case "Redis":
        return <SiRedis className="w-4 h-4 text-[#DC382D]" />;
      case "Docker":
        return <SiDocker className="w-4 h-4 text-[#2496ED]" />;
      case "CI/CD":
        return <SiGithubactions className="w-4 h-4 text-[#2088FF]" />;
      case "Stripe":
        return <SiStripe className="w-4 h-4 text-[#008CDD]" />;
      case "Prisma":
        return <SiPrisma className="w-4 h-4 text-[#2D3748]" />;
      case "MySQL":
        return <SiMysql className="w-4 h-4 text-[#336791]" />;
      case "Nest.js":
      case "NestJS":
        return <SiNestjs className="w-4 h-4 text-[#E0234E]" />;
      case "BullMQ":
      case "Bull MQ":
        return <GiChargingBull className="w-4 h-4 text-[#CC292B]" />;
      default:
        return null;
    }
  };

  return (
    <main className="flex flex-col min-h-screen mx-auto px-4 max-w-6xl">
      <Navbar />

      <section className="mt-12 mb-20 relative px-4 sm:px-6 lg:px-8">
        {/* Decorative gradient removed for cleaner look */}

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Project Title */}
          <BlurFade delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-12 tracking-tight text-foreground">
              {project.name}
            </h1>
          </BlurFade>

          {/* Project Image Showcase Window */}
          <BlurFade delay={0.2}>
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden border border-border/60 dark:border-white/10 shadow-xl bg-card/60 dark:bg-card/40 backdrop-blur-xl mb-12 group">
              {/* Browser Mockup Top Bar */}
              <div className="flex items-center justify-between px-4 md:px-5 py-2.5 border-b border-border/50 dark:border-white/10 bg-muted/40 dark:bg-white/[0.03]">
                {/* Window Controls */}
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]/90 transition-transform group-hover:scale-105" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 transition-transform group-hover:scale-105" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]/90 transition-transform group-hover:scale-105" />
                </div>

                {/* URL Bar */}
                {project.liveLink ? (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/70 dark:bg-white/5 border border-border/50 dark:border-white/10 text-xs text-muted-foreground hover:text-foreground hover:border-blue-500/50 transition-all max-w-[200px] sm:max-w-xs truncate"
                  >
                    <Lock className="w-3 h-3 text-green-500 shrink-0" />
                    <span className="truncate">
                      {project.liveLink.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </span>
                    <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
                  </Link>
                ) : (
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/70 dark:bg-white/5 border border-border/50 dark:border-white/10 text-xs text-muted-foreground max-w-[200px] truncate">
                    <Lock className="w-3 h-3 text-muted-foreground shrink-0" />
                    <span className="truncate">{project.name}</span>
                  </div>
                )}

                {/* Status or View Demo Pill */}
                {project.liveLink ? (
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20 hover:bg-blue-500/20 transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span>Live Preview</span>
                  </Link>
                ) : (
                  <div className="w-10 sm:w-14" />
                )}
              </div>

              {/* Main Image Display */}
              <div className="relative w-full aspect-video overflow-hidden bg-black/5 dark:bg-black/30">
                <Link
                  href={project.liveLink || "#"}
                  target={project.liveLink ? "_blank" : undefined}
                  rel={project.liveLink ? "noopener noreferrer" : undefined}
                  className="block relative w-full h-full cursor-pointer group/img"
                  tabIndex={project.liveLink ? 0 : -1}
                >
                  <Image
                    src={((project as any).images?.[currentImageIndex]) || project.img}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.01]"
                    priority
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                  {/* Subtle hover overlay hint */}
                  {project.liveLink && (
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-sm font-medium shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                        <ExternalLink className="w-4 h-4" />
                        <span>Open Live Project</span>
                      </div>
                    </div>
                  )}
                </Link>

                {/* Multiple Images Controls (if any) */}
                {((project as any).images?.length > 1) && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const len = (project as any).images.length;
                        setCurrentImageIndex((prev) =>
                          prev === 0 ? len - 1 : prev - 1
                        );
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        const len = (project as any).images.length;
                        setCurrentImageIndex((prev) => (prev + 1) % len);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Pagination indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 z-10">
                      {(project as any).images.map((_: any, idx: number) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setCurrentImageIndex(idx);
                          }}
                          className={`h-2 rounded-full transition-all ${
                            idx === currentImageIndex
                              ? "w-6 bg-blue-500"
                              : "w-2 bg-white/50 hover:bg-white/80"
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </BlurFade>

          {/* Tech Stack Section */}
          <BlurFade delay={0.3}>
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Tech Stack
              </h2>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                {project.tech.map((t) => (
                  <div
                    key={t}
                    className="flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {getTechIcon(t)}
                    </span>
                    <span className="text-sm md:text-base font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Main Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-10">
            {/* Overview & Features */}
            <div className="lg:col-span-2 space-y-12 text-left">
              <BlurFade delay={0.4}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-500">
                    Project Overview
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </BlurFade>

              <BlurFade delay={0.5}>
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-500">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    {project.features?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-muted-foreground text-sm md:text-base leading-relaxed">
                          {renderBold(feature)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            </div>

            {/* Links and Actions */}
            <div className="space-y-8">
              <BlurFade delay={0.6}>
                <div className="p-8 rounded-2xl bg-white/30 dark:bg-white/5 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.25)] space-y-6">
                  <h3 className="text-xl font-bold">Project Links</h3>
                  <div className="flex flex-col gap-4">
                    <PrimaryCtaButton
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                      icon={<ExternalLink className="w-5 h-5" />}
                    >
                      Live Demo
                    </PrimaryCtaButton>

                    {project.githubRepositoryBackend ? (
                      <div className="flex flex-col gap-3">
                        <SecondaryButton
                          href={project.githubRepository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                          icon={<Github className="w-5 h-5" />}
                        >
                          Frontend Code
                        </SecondaryButton>
                        <SecondaryButton
                          href={project.githubRepositoryBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                          icon={<Github className="w-5 h-5" />}
                        >
                          Backend Code
                        </SecondaryButton>
                      </div>
                    ) : (
                      <SecondaryButton
                        href={project.githubRepository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                        icon={<Github className="w-5 h-5" />}
                      >
                        Source Code
                      </SecondaryButton>
                    )}
                  </div>
                </div>
              </BlurFade>

              {/* Back Link */}
              <BlurFade delay={0.7}>
                <SecondaryButton
                  href="/projects"
                  className="w-full"
                  icon={<ArrowLeft className="w-5 h-5" />}
                >
                  All Projects
                </SecondaryButton>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
