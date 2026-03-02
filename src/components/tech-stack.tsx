"use client";
import { motion } from "framer-motion";
import { techStack } from "@/data/techStack";
import { BlurFade } from "@/components/animation-wrapper";

export default function TechStack() {
  return (
    <section className="mt-12" id="tech-stack">
      <BlurFade delay={0.2} inView>
        <h2 className="text-xl font-medium mb-4 border-l-4 border-primary pl-3">
          Technical Skills
        </h2>
      </BlurFade>
      <div className="w-full max-w-7xl mx-auto space-y-10 mt-6">
        {techStack.map((category, catIndex) => (
          <div key={category.name} className="space-y-6">
            <BlurFade delay={0.1 * catIndex} inView>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground/90">
                  {category.name}
                </h3>
                <div className="h-px bg-border flex-1" />
              </div>
            </BlurFade>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {category.skills.map((skill: any, index: number) => (
                <BlurFade
                  key={skill.name}
                  delay={0.1 * catIndex + 0.05 * index}
                  inView
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group relative flex flex-col items-center justify-center p-4 rounded-2xl bg-white/30 dark:bg-zinc-900/40 hover:bg-white/50 dark:hover:bg-zinc-900/60 backdrop-blur-xl border border-white/40 dark:border-white/10 hover:border-primary/50 dark:hover:border-primary/40 transition-all duration-300 aspect-square shadow-[0_8px_32px_0_rgba(31,38,135,0.05)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent dark:from-white/5 dark:to-transparent opacity-50 pointer-events-none" />

                    <div
                      className="relative z-10 mb-2 text-2xl md:text-3xl transition-all duration-500 group-hover:scale-110 flex items-center justify-center"
                      style={{
                        color:
                          skill.color === "#000000" ? undefined : skill.color,
                      }}
                    >
                      <div
                        className={
                          skill.color === "#000000" ? "text-foreground" : ""
                        }
                      >
                        {skill.icon}
                      </div>
                    </div>
                    <span className="relative z-10 text-[10px] md:text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors text-center uppercase tracking-wider">
                      {skill.name}
                    </span>

                    {/* Enhanced Glow effect matching icon color */}
                    <div
                      className="absolute inset-x-0 bottom-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                      style={{
                        backgroundColor:
                          skill.color === "#000000"
                            ? "var(--primary)"
                            : skill.color || "var(--primary)",
                        boxShadow: `0 -4px 12px ${skill.color === "#000000" ? "var(--primary)" : skill.color || "var(--primary)"}30`,
                      }}
                    />

                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.1] dark:group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none z-0"
                      style={{
                        background: `radial-gradient(circle at center, ${skill.color === "#000000" ? "var(--primary)" : skill.color || "white"}, transparent 70%)`,
                      }}
                    />
                  </motion.div>
                </BlurFade>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
