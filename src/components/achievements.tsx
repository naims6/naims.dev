"use client";

import React from "react";
import Link from "next/link";
import { Award, Shield, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "./animation-wrapper";
import { achievements } from "@/data/achievements";
import { SectionHeader } from "./section-header";

const iconMap: Record<string, React.ElementType> = {
  Award: Award,
  Shield: Shield,
};

export default function Achievements() {
  return (
    <div className="mt-20">
      <SectionHeader title="Achievements & Certificates" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => {
          const Icon = iconMap[achievement.iconName] || Award;
          return (
            <BlurFade
              key={achievement.id}
              delay={0.25 + index * 0.1}
              inView
              yOffset={8}
            >
              <Link href={achievement.link} target="_blank">
                <Card className="bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-primary/50 group cursor-pointer h-full rounded-2xl">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.organization} • {achievement.date}
                        </p>
                      </div>
                    </div>
                    <ExternalLink
                      size={18}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </CardContent>
                </Card>
              </Link>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}
