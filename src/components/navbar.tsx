"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Moon,
  Sun,
  Home,
  Cpu,
  Briefcase,
  Trophy,
  Mail,
  Menu,
  X,
} from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Skills", href: "#tech-stack", icon: Cpu },
    { name: "Projects", href: "#projects", icon: Briefcase },
    { name: "Awards", href: "#achievements", icon: Trophy },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  // Professional Theme Toggle Component
  const ThemeToggle = () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 bg-background/50 hover:bg-primary/10 hover:text-primary border border-border/40 backdrop-blur-sm transition-all duration-300"
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
                  <Moon className="h-[1.1rem] w-[1.1rem]" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sun className="h-[1.1rem] w-[1.1rem]" />
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
      <div className="my-6 py-4 px-6 rounded-full flex items-center justify-between border border-transparent">
        <span className="text-xl font-bold tracking-tighter"> naims.dev </span>
      </div>
    );
  }

  return (
    <>
      <nav className="my-6 py-3 px-6 rounded-full flex items-center justify-between sticky top-6 z-50 bg-white/40 dark:bg-black/20 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-primary/5">
        {/* logo  */}
        <BlurFade delay={0} inView yOffset={0} blur="2px">
          <Link
            href="/"
            className="text-xl md:text-2xl cursor-pointer font-black tracking-tighter hover:text-primary transition-all duration-300 group"
          >
            naim
            <span className="text-primary group-hover:text-foreground">
              s.dev
            </span>
          </Link>
        </BlurFade>

        {/* Desktop Nav Links - Center */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <BlurFade
              key={link.name}
              delay={0.1 + idx * 0.05}
              inView
              yOffset={0}
            >
              <Link
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-muted-foreground/80 hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-300 uppercase tracking-widest group"
              >
                <link.icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>{link.name}</span>
              </Link>
            </BlurFade>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <BlurFade delay={0.4} inView yOffset={0} blur="2px">
            <ThemeToggle />
          </BlurFade>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full w-10 h-10 border border-border/40 backdrop-blur-sm bg-background/50"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-50 md:hidden"
          >
            <div className="p-4 rounded-[2rem] bg-white/80 dark:bg-black/80 backdrop-blur-3xl border border-white/40 dark:border-white/10 shadow-2xl flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/10 hover:text-primary transition-all duration-300 font-bold uppercase tracking-widest text-sm text-muted-foreground group"
                  >
                    <div className="p-2 rounded-xl bg-primary/5 group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5" />
                    </div>
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
