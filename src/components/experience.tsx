import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/animation-wrapper";
import { SectionHeader } from "./section-header";

export default function Experience() {
  const experiences = [
    {
      year: "2026 - Present",
      title: "Full Stack Development",
      description:
        "Building scalable web applications using Next.js, TypeScript, and modern UI libraries. Focusing on performance and user experience.",
    },
    {
      year: "2025 - 2026",
      title: "Frontend Mastery",
      description:
        "Deepened knowledge in React ecosystem, state management (Context API), and responsive design principles.",
    },
    {
      year: "2024 - 2025",
      title: "Programming Basics",
      description:
        "Started coding journey with HTML, CSS, and JavaScript. Learned the fundamentals of web development and version control.",
    },
  ];

  return (
    <div className="mt-20">
      <SectionHeader title="Experience" />
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <BlurFade key={index} delay={0.25 + index * 0.1} inView yOffset={8}>
            <div className="flex gap-4">
              <div className="min-w-[100px] text-sm text-muted-foreground pt-1">
                {exp.year}
              </div>
              <div className="pb-6 border-l pl-6 relative last:pb-0">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-[14px] shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                <div className="p-4 rounded-2xl bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-sm">
                  <h3 className="font-bold leading-none mb-2 text-foreground/90">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium italic">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
