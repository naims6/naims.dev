"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { techStack } from "@/data/techStack";
import { BlurFade } from "@/components/animation-wrapper";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

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
            delay={0.1 + index * 0.1}
            inView
            className="h-full"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="h-full"
            >
              <Card className="shadow-sm h-full border-muted-foreground/10 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-2.5 flex flex-row items-center space-y-0">
                  <div className="p-2 mr-3 rounded-lg bg-primary/5 text-primary">
                    {category.icon}
                  </div>
                  <CardTitle className="text-base font-semibold">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {category.skills.map((skill) => (
                      <motion.div key={skill.name} variants={item}>
                        <Badge
                          variant="outline"
                          className="px-2.5 py-1 font-medium transition-all duration-300 hover:shadow-md cursor-default border-muted-foreground/20"
                          style={
                            {
                              "--hover-color": skill.color,
                            } as React.CSSProperties
                          }
                          onMouseEnter={(e) => {
                            if (skill.color) {
                              e.currentTarget.style.borderColor = skill.color;
                              e.currentTarget.style.backgroundColor = `${skill.color}10`;
                              e.currentTarget.style.boxShadow = `0 0 12px ${skill.color}20`;
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "";
                            e.currentTarget.style.backgroundColor = "";
                            e.currentTarget.style.boxShadow = "";
                          }}
                        >
                          {skill.icon && (
                            <span className="mr-1.5">{skill.icon}</span>
                          )}
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
