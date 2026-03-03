"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Info, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      <Card className="overflow-hidden flex flex-col h-full bg-[#0a0f1c] p-1 border-white/10 hover:border-primary/30 transition-all duration-300 rounded-2xl group shadow-2xl">
        {/* Project Image Container */}
        <div className="p-3">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-muted/20">
            <Link href={p.liveLink} target="_blank">
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
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </div>
            </Link>
          </figure>
        </div>

        <CardContent className="flex flex-col flex-1 px-5 pb-6 pt-1">
          {/* Title and Tech Stack */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
              {p.name}
            </h3>

            <p className="text-gray-400 text-xs leading-relaxed line-clamp-2 min-h-[2.5rem]">
              {p.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {p.tech.slice(0, 3).map((t: string) => (
                <Badge
                  key={t}
                  variant="outline"
                  className="bg-white/5 border-white/10 text-gray-300 px-2.5 py-0.5 rounded-full text-[10px] font-medium backdrop-blur-sm"
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
            {/* View Details Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#00a3ff] hover:bg-[#0082cc] text-white rounded-xl px-5 py-4 h-auto font-semibold text-xs transition-all shadow-lg shadow-blue-500/20 group/btn">
                  View Details
                  <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl bg-[#0a0f1c] border-white/10 text-white rounded-3xl overflow-hidden">
                <DialogHeader>
                  <DialogTitle className="text-3xl font-bold mb-4">
                    {p.name}
                  </DialogTitle>
                  <DialogDescription className="text-gray-400 text-base leading-relaxed">
                    {p.description}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#00a3ff]">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {p.features?.map((f: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00a3ff] mt-1.5 shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button
                      asChild
                      className="bg-[#00a3ff] hover:bg-[#0082cc] text-white rounded-xl flex-1 py-6"
                    >
                      <Link href={p.liveLink} target="_blank">
                        <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      asChild
                      className="border-white/10 hover:bg-white/5 text-white rounded-xl flex-1 py-6"
                    >
                      <Link href={p.githubRepository} target="_blank">
                        <Github className="mr-2 w-4 h-4" /> Source Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            {/* Quick Links */}
            <div className="flex items-center gap-5">
              <Link
                href={p.liveLink}
                target="_blank"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-[#00a3ff] transition-colors"
              >
                <span>Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={p.githubRepository}
                target="_blank"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                <span>Code</span>
                <Github className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
