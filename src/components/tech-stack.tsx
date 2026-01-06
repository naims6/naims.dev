"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiShadcnui,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase,
  SiGit, SiGithub, SiVercel, SiFigma,
  SiBootstrap,
  SiLinux,
  SiN26,
  SiPostman
} from "react-icons/si"
import { Monitor, Server, Database, Wrench } from "lucide-react"

import { BlurFade } from "@/components/animation-wrapper"

export default function TechStack() {
  const categories = [
    {
      name: "Frontend",
      icon: <Monitor className="w-4 h-4 mr-2" />,
      skills: [
        { name: "Next.js", icon: <SiNextdotjs className="mr-1" /> },
        { name: "React.js", icon: <SiReact className="mr-1 text-[#61DAFB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="mr-1 text-[#3178C6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="mr-1 text-[#F7DF1E]" /> },
        { name: "HTML", icon: <SiHtml5 className="mr-1 text-[#E34F26]" /> },
        { name: "CSS", icon: <SiCss3 className="mr-1 text-[#1572B6]" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="mr-1 text-[#1572B6]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="mr-1 text-[#06B6D4]" /> },
        { name: "Shadcn/ui", icon: <SiShadcnui className="mr-1" /> },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="w-4 h-4 mr-2" />,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="mr-1 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="mr-1" /> },
        { name: "REST APIs", icon: null },
        { name: "NextAuth.js", icon: <SiN26 className="mr-1 text-[#F24E1E]" /> },
        { name: "Firebase Auth..", icon: <SiFirebase className="mr-1 text-[#F24E1E]" /> },
      ],
    },
    {
      name: "Database",
      icon: <Database className="w-4 h-4 mr-2" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="mr-1 text-[#47A248]" /> },
        { name: "Firebase", icon: <SiFirebase className="mr-1 text-[#FFCA28]" /> },
      ],
    },
    {
      name: "Tools & Others",
      icon: <Wrench className="w-4 h-4 mr-2" />,
      skills: [
        { name: "Git", icon: <SiGit className="mr-1 text-[#F05032]" /> },
        { name: "GitHub", icon: <SiGithub className="mr-1" /> },
        { name: "Figma", icon: <SiFigma className="mr-1 text-[#F24E1E]" /> },
        { name: "Vercel", icon: <SiVercel className="mr-1" /> },
        { name: "Postname", icon: <SiPostman className="mr-1 text-[#F24E1E]" /> },
        { name: "Linux", icon: <SiLinux className="mr-1 text-[#F24E1E]" /> },
      ],
    },
  ]

  return (
    <div className="mt-12">
      <BlurFade delay={0.2} inView>
        <h1 className="text-xl font-medium mb-4 border-l-4 border-primary pl-3">
          Tech Stack
        </h1>
      </BlurFade>
      <div className="grid gap-4 md:grid-cols-2 mt-5">
        {categories.map((category, index) => (
          <BlurFade
            key={category.name}
            delay={0.25 + index * 0.1}
            inView
            className="h-full"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full"
            >
              <Card className="shadow-sm h-full">
                <CardHeader className="pb-1.5 flex flex-row items-center space-y-0">
                {category.icon}
                <CardTitle className="text-base">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="font-normal flex items-center">
                      {skill.icon}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              </Card>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </div>
  )
}
