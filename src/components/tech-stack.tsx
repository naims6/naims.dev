"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { techStack } from "@/data/techStack";
import { BlurFade } from "@/components/animation-wrapper";

export default function TechStack() {
  return (
    <div className="mt-12">
      <BlurFade delay={0.2} inView>
        <h1 className="text-xl font-medium mb-4 border-l-4 border-primary pl-3">
          Current Tech Stack
        </h1>
      </BlurFade>
      <div className="grid gap-4 md:grid-cols-2 mt-5">
        {techStack.map((category, index) => (
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
                      <Badge
                        key={skill.name}
                        variant="outline"
                        className="font-normal flex items-center"
                      >
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
  );
}
