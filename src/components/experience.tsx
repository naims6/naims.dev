import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const experiences = [
    {
      year: "2026 - Present",
      title: "Full Stack Development",
      description: "Building scalable web applications using Next.js, TypeScript, and modern UI libraries. Focusing on performance and user experience.",
    },
    {
      year: "2025 - 2026",
      title: "Frontend Mastery",
      description: "Deepened knowledge in React ecosystem, state management (Context API), and responsive design principles.",
    },
    {
      year: "2024 - 2025",
      title: "Programming Basics",
      description: "Started coding journey with HTML, CSS, and JavaScript. Learned the fundamentals of web development and version control.",
    },
  ]

  return (
    <div className="mt-12">
      <h1 className="font-medium text-xl mb-5 border-l-4 border-primary pl-3 mb-5">
        Experience
      </h1>
      <div className="flex flex-col gap-4">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4">
            <div className="min-w-[100px] text-sm text-muted-foreground pt-1">
              {exp.year}
            </div>
            <div className="pb-6 border-l pl-6 relative last:pb-0">
               <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-[6px]" />
               <h3 className="font-medium leading-none mb-2">{exp.title}</h3>
               <p className="text-sm text-muted-foreground">
                  {exp.description}
               </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
