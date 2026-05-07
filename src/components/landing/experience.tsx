import { BlurFade } from "@/components/animation-wrapper";
import { SectionHeader } from "../section-header";

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "Rise Together",
    location: "Dhaka, Bangladesh",
    type: "Remote",
    period: "May 2026 — Present",
    description:
      "Contributing to backend systems and APIs that power scalable digital solutions at Rise Together.",
    responsibilities: [
      "Developing and maintaining RESTful APIs using modern backend technologies",
      "Collaborating with teams to design and implement new features",
    ],
  },
];

export default function Experience() {
  return (
    <div className="mt-20 scroll-mt-28" id="experience">
      <SectionHeader title="Experience" />
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <BlurFade key={index} delay={0.25 + index * 0.1} inView yOffset={8}>
            <div className="group relative p-5 sm:p-6 rounded-2xl bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
              {/* Accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-primary/80" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground/90 leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-base font-semibold text-primary mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {exp.type}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                {exp.description}
              </p>

              {/* Responsibilities */}
              <ul className="space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-foreground/75"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Location */}
              <div className="mt-4 pt-3 border-t border-white/10 dark:border-white/5 flex items-center gap-1.5 text-xs text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    fillRule="evenodd"
                    d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                {exp.location}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
