"use client";

import { techStack } from "@/data/techStack";
import { SectionHeader } from "../section-header";
import { BlurFade } from "@/components/animation-wrapper";
import { cn } from "@/lib/utils";
import React from "react";

function getBrandColor(skill: { color: string }): string | null {
  if (
    skill.color &&
    skill.color !== "#000000" &&
    skill.color !== "#181717"
  ) {
    return skill.color;
  }
  return null;
}

export default function TechStack() {
  return (
    <section className="mt-10 scroll-mt-28" id="tech-stack">
      <SectionHeader title="Skills" />

      <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto mt-10">
        {techStack.map((category, catIndex) => (
          <BlurFade
            key={category.name}
            delay={0.08 * catIndex}
            inView
            className="h-full"
          >
            <div className="h-full rounded-2xl border bg-white/60 dark:bg-transparent backdrop-blur-md border-border/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.15)] p-6 transition-all duration-300 hover:border-primary/25 dark:hover:border-white/15">
              {/* Category header */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/90">
                  {category.name}
                </h3>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-foreground/5 text-muted-foreground">
                  {category.skills.length}
                </span>
              </div>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {category.skills.map((skill, skillIndex) => {
                  const brand = getBrandColor(skill);
                  const hideOnMobile =
                    (category.name === "Frontend" ||
                      category.name === "Backend & Databases") &&
                    skillIndex >= 8;
                  return (
                    <div
                      key={skill.name}
                      title={skill.description}
                      className={cn(
                        "group flex items-center gap-2 rounded-xl border px-3 py-2.5 min-w-0 transition-all duration-300",
                        hideOnMobile && "hidden lg:flex",
                        skill.isCore
                          ? "border-primary/20 bg-primary/[0.02] hover:border-primary/40 hover:bg-primary/[0.05]"
                          : "border-border/50 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] hover:border-primary/25 hover:bg-white/70 dark:hover:bg-white/[0.07]"
                      )}
                    >
                      <div
                        className="text-lg shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: brand ?? "var(--foreground)" }}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300 truncate">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
