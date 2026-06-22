import { BlurFade } from "@/components/animation-wrapper";
import { SectionHeader } from "../section-header";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "Rise Together",
    location: "Dhaka, Bangladesh",
    type: "Remote",
    period: "May 2026 — Present",
    points: [
      "Designing and developing backend RESTful APIs using Node.js and Express.",
      "Collaborating with frontend developers to ensure seamless API integration.",
      "Optimizing MongoDB database schemas and queries for better performance.",
      "Participating in code reviews and backend architecture discussions.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="mt-10 scroll-mt-28" id="experience">
      <SectionHeader title="Experience" />

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <BlurFade key={index} delay={0.15} inView yOffset={8}>
            <div className="p-6 sm:p-7 rounded-2xl bg-white/60 dark:bg-transparent backdrop-blur-md border border-border/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:border-blue-500/20 dark:hover:border-white/15 group">

              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-sm font-medium text-muted-foreground">
                    <Briefcase className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border/40 dark:border-white/5 mb-4" />

              {/* Bullet points */}
              <ul className="space-y-2">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 mt-[7px] shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>

              {/* Location footer */}
              <div className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground/70">
                <MapPin className="w-3.5 h-3.5 text-blue-500/70 shrink-0" />
                <span>{exp.location}</span>
              </div>

            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
