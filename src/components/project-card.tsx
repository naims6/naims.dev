"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: any;
  getTechIcon: (tech: string) => React.ReactNode;
}

export function ProjectCard({ project: p, getTechIcon }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className="overflow-hidden flex flex-col gap-3 h-full bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-0 hover:border-primary/50 transition-all duration-300 rounded-2xl group">
        {/* Project Image Container */}
        <div className="p-3">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-muted/20">
            <Link
              href={p.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${p.name}`}
            >
              <Image
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                src={p.img}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ExternalLink
                    className="w-5 h-5"
                    style={{ stroke: "#ffffff" }}
                  />
                </div>
              </div>
            </Link>
          </figure>
        </div>

        <CardContent className="flex flex-col flex-1 px-5 pb-6">
          {/* Title and Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {p.name}
            </h3>

            <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 min-h-[2.5rem]">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {p.tech.slice(0, 3).map((t: string) => (
                <Badge
                  key={t}
                  variant="outline"
                  className="bg-primary/5 border-primary/10 text-muted-foreground px-2.5 py-0.5 rounded-full text-[10px] font-medium backdrop-blur-sm"
                >
                  <span className="flex items-center gap-1">
                    {getTechIcon(t)}
                    {t}
                  </span>
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 flex items-center justify-between gap-3">
            {/* View Details Link */}
            <Link
              href={`/projects/${p.id}`}
              className="group/btn relative inline-flex items-center justify-center gap-2 px-4 py-2.5 font-bold text-white transition-all duration-300 ease-out rounded-xl overflow-hidden"
            >
              {/* 3D Background with gradient */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-blue-500 to-indigo-600 transition-all duration-300 group-hover/btn:scale-105" />

              {/* 3D Edge/Depth effect */}
              <div className="absolute inset-0 rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2),0_3px_0_0_rgba(37,99,235,1),0_6px_12px_-3px_rgba(37,99,235,0.5)] group-hover/btn:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2),0_4px_0_0_rgba(37,99,235,1),0_8px_16px_-3px_rgba(37,99,235,0.6)] transition-all duration-300 group-hover/btn:-translate-y-0.5" />

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Content */}
              <span className="relative flex items-center gap-1.5 text-sm">
                View Details
                <ChevronRight
                  className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5"
                  style={{ stroke: "currentColor" }}
                />
              </span>
            </Link>

            {/* Quick Links */}
            <div className="flex items-center gap-5">
              <Link
                href={p.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                <span>Live</span>
                <ExternalLink
                  className="w-3.5 h-3.5"
                  style={{ stroke: "#3b82f6" }}
                />
              </Link>
              <Link
                href={p.githubRepository}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`View ${p.name} on GitHub`}
              >
                <span>Code</span>
                <Github className="w-3.5 h-3.5" style={{ stroke: "#6b7280" }} />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
