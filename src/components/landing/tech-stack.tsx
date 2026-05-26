"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/techStack";
import { SectionHeader } from "../section-header";
import { BlurFade } from "@/components/animation-wrapper";
import { cn } from "@/lib/utils";
import React from "react";

export default function TechStack() {
  return (
    <section className="mt-20 scroll-mt-28" id="tech-stack">
      <SectionHeader title="Skills" />

      {/* Senior Developer 4-Column Responsive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-10">
        {techStack.map((category, catIndex) => {
          // Simplified header names for senior aesthetics
          const displayName = category.name
            .replace(" & Databases", " & DB")
            .replace(" & Analytics", " & Design");

          return (
            <BlurFade
              key={category.name}
              delay={0.1 * catIndex}
              inView
              className="h-full"
            >
              <div
                className={cn(
                  "h-full flex flex-col p-6 rounded-2xl border backdrop-blur-md transition-all duration-300",
                  "bg-white/60 dark:bg-transparent border-border/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:border-primary/30 dark:hover:border-white/20"
                )}
              >
                {/* Minimalist Column Header */}
                <div className="flex items-center justify-between border-b border-border/60 pb-3.5 mb-5">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/90">
                    {displayName}
                  </h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-foreground/5 text-muted-foreground font-mono">
                    {category.skills.length}
                  </span>
                </div>

                {/* Vertical Skills List */}
                <div className="flex flex-col gap-1.5 flex-grow">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="group flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-300 hover:bg-foreground/[0.03] dark:hover:bg-white/[0.03] cursor-default"
                    >
                      <div className="flex items-center gap-3">
                        {/* Icon transitions from monochrome to brand color on hover */}
                        <div
                          className="text-xl text-muted-foreground/60 transition-colors duration-300 flex items-center justify-center"
                          style={
                            {
                              "--hover-color": skill.color === "#000000" ? "var(--foreground)" : skill.color,
                            } as React.CSSProperties
                          }
                        >
                          <div className="transition-colors duration-300 group-hover:text-[var(--hover-color)] text-foreground/65">
                            {skill.icon}
                          </div>
                        </div>

                        {/* Skill Name */}
                        <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 tracking-wide">
                          {skill.name}
                        </span>
                      </div>

                      {/* Small Core stack tag indicator */}
                      {skill.isCore && (
                        <span className="text-[8px] font-extrabold uppercase tracking-widest px-1.5 py-0.5 rounded-sm bg-primary/10 text-primary border border-primary/20 scale-[0.9] origin-right select-none opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          Core
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </section>
  );
}
