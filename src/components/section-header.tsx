"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-6 flex flex-col gap-1",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <div className="relative group">
        <motion.h2
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-4xl font-bold tracking-tight text-foreground/90 font-outfit"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "circOut" }}
          className="h-1 bg-linear-to-r from-primary via-primary/50 to-transparent rounded-full mt-1.5 opacity-80"
        />
      </div>
    </div>
  );
}
