"use client";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiRedux,
  SiVercel,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";

const techIcons = [
  { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
  { icon: <SiReact />, name: "React", color: "#61DAFB" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
  { icon: <SiExpress />, name: "Express", color: "#000000" },
  { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
  { icon: <SiGithubactions />, name: "CI/CD", color: "#2088FF" },
  { icon: <SiPrisma />, name: "Prisma", color: "#2D3748" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
  { icon: <SiRedux />, name: "Redux", color: "#764ABC" },
  { icon: <SiVercel />, name: "Vercel", color: "#000000" },
];

export function TechMarquee() {
  // Triple the array to ensure no gaps during animation
  const repeatedIcons = [...techIcons, ...techIcons, ...techIcons];

  return (
    <div className="w-[calc(100%+2rem)] md:w-full -mx-4 md:mx-0 overflow-hidden py-4 relative">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-max animate-marquee whitespace-nowrap">
        {repeatedIcons.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-3 mx-3 rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-md border border-border/50 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.15)] transition-all duration-300 group/item"
          >
            <div
              className="text-2xl transition-all duration-300 group-hover/item:scale-110 flex-shrink-0"
              style={{
                color:
                  tech.color &&
                    tech.color !== "#000000" &&
                    tech.color !== "#181717"
                    ? tech.color
                    : "var(--foreground)",
              }}
            >
              {tech.icon}
            </div>
            <span className="text-xs font-semibold text-foreground/70 group-hover/item:text-foreground transition-colors duration-300 uppercase tracking-widest">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
