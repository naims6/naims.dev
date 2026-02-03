"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Info } from "lucide-react";

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
} from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BlurFade } from "./animation-wrapper";
import { projects } from "@/data/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination as SwiperPagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Projects() {
  const [swiper, setSwiper] = React.useState<SwiperType | null>(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 3;

  // Helper to get icon
  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "Next.js":
        return <SiNextdotjs className="mr-1" />;
      case "React.js":
        return <SiReact className="mr-1 text-[#61DAFB]" />;
      case "TypeScript":
        return <SiTypescript className="mr-1 text-[#3178C6]" />;
      case "JavaScript":
        return <SiJavascript className="mr-1 text-[#F7DF1E]" />;
      case "HTML/CSS":
        return <SiHtml5 className="mr-1 text-[#E34F26]" />;
      case "Tailwind CSS":
      case "Tailwind":
        return <SiTailwindcss className="mr-1 text-[#06B6D4]" />;
      case "Shadcn/ui":
        return <SiShadcnui className="mr-1" />;
      case "Node.js":
        return <SiNodedotjs className="mr-1 text-[#339933]" />;
      case "Express.js":
        return <SiExpress className="mr-1" />;
      case "MongoDB":
        return <SiMongodb className="mr-1 text-[#47A248]" />;
      case "Firebase":
        return <SiFirebase className="mr-1 text-[#FFCA28]" />;
      case "Socket.io":
        return <SiSocketdotio className="mr-1" />;
      case "Framer Motion":
        return <SiFramer className="mr-1" />;
      case "Material UI":
        return <SiMui className="mr-1 text-[#007FFF]" />;
      default:
        return null;
    }
  };

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // Projects for the mobile grid view
  const mobileStartIndex = (currentPage - 1) * itemsPerPage;
  const mobileCurrentProjects = projects.slice(
    mobileStartIndex,
    mobileStartIndex + itemsPerPage,
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (swiper) {
        swiper.slideTo((page - 1) * itemsPerPage);
      }
    }
  };

  return (
    <div className="mt-12 overflow-hidden">
      <BlurFade delay={0.2} inView>
        <h1 className="text-xl font-medium mb-5 border-l-4 border-primary pl-3">
          Recent Projects
        </h1>
      </BlurFade>

      {/* Desktop/Tablet View: Swiper Carousel */}
      <div className="hidden md:block mt-5 relative">
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={(s) => {
            const page = Math.floor(s.activeIndex / itemsPerPage) + 1;
            setCurrentPage(page);
          }}
          modules={[SwiperPagination]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
          grabCursor={true}
          className="pb-6"
        >
          {projects.map((p, index) => (
            <SwiperSlide key={p.id} className="h-auto">
              <BlurFade
                delay={0.25 + (index % itemsPerPage) * 0.1}
                inView
                className="h-full"
              >
                <ProjectCard project={p} getTechIcon={getTechIcon} />
              </BlurFade>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile View: Static Grid */}
      <div className="md:hidden grid grid-cols-1 gap-6 mt-5">
        {mobileCurrentProjects.map((p, index) => (
          <BlurFade
            key={p.id}
            delay={0.25 + index * 0.1}
            inView
            className="h-full"
          >
            <ProjectCard project={p} getTechIcon={getTechIcon} />
          </BlurFade>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={page === currentPage}
                      onClick={() => handlePageChange(page)}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}

              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}

// Reusable Project Card Component
function ProjectCard({
  project: p,
  getTechIcon,
}: {
  project: any;
  getTechIcon: (tech: string) => React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow pb-2">
        <figure className="relative aspect-video w-full bg-muted rounded-lg overflow-hidden">
          <Link href={p.githubRepository} target="_blank">
            <Image
              className="object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
              src={p.img}
              alt={p.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </figure>
        <CardContent className="flex-1 px-3 pb-3">
          <div className="flex justify-between items-start mb-2 pt-2">
            <h2 className="font-bold text-lg hover:underline truncate pr-2 text-foreground">
              <Link href={p.liveLink} target="_blank">
                {p.name}
              </Link>
            </h2>
            <TooltipProvider>
              <div className="flex gap-1 shrink-0">
                <Dialog>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span
                        tabIndex={0}
                        className="inline-flex cursor-pointer rounded-md"
                      >
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-foreground"
                          >
                            <Info className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Project Details</p>
                    </TooltipContent>
                  </Tooltip>
                  <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px] rounded-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-black">
                        {p.name}
                      </DialogTitle>
                      <DialogDescription className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        {p.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 py-6">
                      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-2xl">
                        <Image
                          src={p.img}
                          alt={p.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-black text-sm uppercase tracking-widest text-primary">
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {p.features.map((feature: string, i: number) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-foreground/80 font-medium"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-black text-sm uppercase tracking-widest text-primary">
                          Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {p.tech.map((t: string) => (
                            <Badge
                              key={t}
                              variant="secondary"
                              className="px-3 py-1.5 text-xs font-medium rounded-xl flex items-center gap-1.5 bg-muted/50 border-none"
                            >
                              {getTechIcon(t)}
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-muted/30">
                        <Button
                          variant="outline"
                          size="lg"
                          className="flex-1 rounded-2xl py-6 font-bold"
                          asChild
                        >
                          <Link href={p.githubRepository} target="_blank">
                            <Github className="mr-2 h-5 w-5" /> Source Code
                          </Link>
                        </Button>
                        <Button
                          size="lg"
                          className="flex-1 rounded-2xl py-6 font-bold shadow-xl shadow-primary/20"
                          asChild
                        >
                          <Link href={p.liveLink} target="_blank">
                            <ExternalLink className="mr-2 h-5 w-5" /> Live Demo
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      asChild
                    >
                      <Link href={p.githubRepository} target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Source</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-foreground"
                      asChild
                    >
                      <Link href={p.liveLink} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live Demo</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 italic">
            {p.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {p.tech.map((t: string) => (
              <Badge
                key={t}
                variant="outline"
                className="text-[10px] font-medium uppercase tracking-tighter flex items-center px-2 py-0.5 rounded-lg border-muted/50 bg-muted/20"
              >
                {getTechIcon(t)}
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
