"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/animation-wrapper";
import { GitBranch, Star, BookOpen, GitCommit, Github } from "lucide-react";

const stats = [
  {
    label: "Total Commits",
    value: "1.2k+",
    icon: <GitCommit className="w-5 h-5" />,
    color: "#10B981", // Green
    description: "Yearly contributions",
  },
  {
    label: "Stars Earned",
    value: "250+",
    icon: <Star className="w-5 h-5" />,
    color: "#F59E0B", // Amber
    description: "Across all repositories",
  },
  {
    label: "Public Repos",
    value: "45",
    icon: <BookOpen className="w-5 h-5" />,
    color: "#3B82F6", // Blue
    description: "Open source projects",
  },
  {
    label: "Pull Requests",
    value: "120+",
    icon: <GitBranch className="w-5 h-5" />,
    color: "#8B5CF6", // Violet
    description: "Merged contributions",
  },
];

const mainLanguages = [
  { name: "TypeScript", percent: 45, color: "#3178C6" },
  { name: "JavaScript", percent: 30, color: "#F7DF1E" },
  { name: "Next.js", percent: 15, color: "#000000" },
  { name: "Other", percent: 10, color: "#6e7681" },
];

export default function GithubStats() {
  return (
    <section className="mt-12" id="github">
      <BlurFade delay={0.2} inView>
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-xl font-medium border-l-4 border-primary pl-3">
            GitHub Activity
          </h1>
          <a
            href="https://github.com/naims6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </BlurFade>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <BlurFade key={stat.label} delay={0.1 + index * 0.1} inView>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="border-muted-foreground/10 bg-card/50 backdrop-blur-sm group overflow-hidden relative">
                {/* Space Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${stat.color}, transparent 70%)`,
                  }}
                />

                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <div
                    style={{ color: stat.color }}
                    className="transition-transform duration-300 group-hover:rotate-12"
                  >
                    {stat.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </BlurFade>
        ))}
      </div>

      <BlurFade delay={0.6} inView>
        <Card className="mt-6 border-muted-foreground/10 bg-card/50 backdrop-blur-sm p-6 overflow-hidden relative group">
          {/* Space Glow for the large card */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, #8B5CF6, transparent 80%)`,
            }}
          />

          <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
            Top Languages Breakdown
          </h3>

          <div className="flex w-full h-3 rounded-full overflow-hidden mb-6 bg-muted">
            {mainLanguages.map((lang) => (
              <div
                key={lang.name}
                style={{
                  width: `${lang.percent}%`,
                  backgroundColor: lang.color,
                }}
                className="h-full transition-all duration-1000 ease-out hover:brightness-110"
                title={`${lang.name}: ${lang.percent}%`}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {mainLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
                <span className="text-sm font-medium">{lang.name}</span>
                <span className="text-xs text-muted-foreground">
                  {lang.percent}%
                </span>
              </div>
            ))}
          </div>
        </Card>
      </BlurFade>
    </section>
  );
}
