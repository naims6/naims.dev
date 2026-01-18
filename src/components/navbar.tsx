"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BlurFade } from "@/components/animation-wrapper";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Professional Theme Toggle Component
  const ThemeToggle = () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 bg-background/50 hover:bg-accent hover:text-accent-foreground border border-border/40 backdrop-blur-sm transition-all duration-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Moon className="h-[1.2rem] w-[1.2rem]" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-[1.2rem] w-[1.2rem]" />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="sr-only">Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent align="end">
          <p>Toggle theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  if (!mounted) {
    return (
      <div className="my-10 flex items-center justify-between">
        <div className="">
          <span className="text-2xl cursor-pointer font-bold tracking-tighter sr-only">
            naims.dev
          </span>
        </div>
      </div>
    );
  }

  return (
    <nav className="my-10 flex items-center justify-between relative z-50">
      {/* left  */}
      <BlurFade delay={0} inView yOffset={0} blur="2px">
        <Link
          href="/"
          className="text-2xl cursor-pointer font-bold tracking-tighter hover:text-primary transition-colors duration-300"
        >
          naims.dev
        </Link>
      </BlurFade>

      {/* right  */}
      <div className="flex items-center gap-5">
        <BlurFade delay={0.2} inView yOffset={0} blur="2px">
          <ThemeToggle />
        </BlurFade>
      </div>
    </nav>
  );
}
