"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";
import { BlurFade } from "@/components/animation-wrapper";

export default function Services() {
  return (
    <section className="mt-12" id="services">
      <BlurFade delay={0.2} inView>
        <h1 className="text-xl font-medium mb-4 border-l-4 border-primary pl-3">
          Services & Specializations
        </h1>
      </BlurFade>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {services.map((service, index) => (
          <BlurFade
            key={service.title}
            delay={0.1 + index * 0.1}
            inView
            className="h-full"
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="h-full"
            >
              <Card className="h-full shadow-sm border-muted-foreground/10 bg-card/50 backdrop-blur-sm group overflow-hidden relative">
                {/* Space Vibe Glow on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${service.color}, transparent 70%)`,
                  }}
                />

                <CardHeader className="pb-2 flex flex-row items-center gap-4">
                  <div
                    className="p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${service.color}15`,
                      color: service.color,
                      boxShadow: `0 0 15px ${service.color}10`,
                    }}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
