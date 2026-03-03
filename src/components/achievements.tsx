"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, Shield, ExternalLink, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BlurFade } from "./animation-wrapper";
import { achievements } from "@/data/achievements";
import { SectionHeader } from "./section-header";
import { Button } from "./ui/button";

const iconMap: Record<string, React.ElementType> = {
  Award: Award,
  Shield: Shield,
};

export default function Achievements() {
  return (
    <div className="mt-20">
      <SectionHeader title="Achievements & Certificates" className="mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((achievement, index) => {
          const Icon = iconMap[achievement.iconName] || Award;
          return (
            <BlurFade
              key={achievement.id}
              delay={0.1 * index}
              inView
              yOffset={8}
            >
              <Card className="group overflow-hidden flex flex-col h-full bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-primary/50 rounded-2xl">
                {/* Certificate Image Preview */}
                <div className="p-1.5">
                  <figure className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted/20">
                    <Link href={achievement.link} target="_blank">
                      <Image
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-md rounded-full p-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </Link>
                  </figure>
                </div>

                <CardContent className="flex flex-col flex-1 px-4 pb-4 pt-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-foreground/90 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {achievement.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground font-medium mt-0.5">
                        {achievement.organization} • {achievement.date}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-2">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full bg-white/50 dark:bg-white/5 border-white/20 dark:border-white/10 hover:bg-primary text-foreground/80 dark:text-gray-300 hover:text-primary-foreground hover:border-primary rounded-xl py-3.5 transition-all duration-300 font-semibold text-[11px] h-auto group/btn"
                    >
                      <Link href={achievement.link} target="_blank">
                        View Certificate
                        <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}
