"use client";

import * as React from "react";
import Link from "next/link";
import { Home, Cpu, Briefcase, Trophy, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/animation-wrapper";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll to show/hide navbar
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // If scrolling down, hide navbar
      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        setIsVisible(false);
      }
      // If scrolling up, show navbar
      else if (currentScrollPos < prevScrollPos) {
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      color: "from-purple-500 to-purple-400",
    },
    {
      name: "Skills",
      href: "#tech-stack",
      icon: Cpu,
      color: "from-blue-500 to-blue-400",
    },
    {
      name: "Projects",
      href: "#projects",
      icon: Briefcase,
      color: "from-amber-500 to-amber-400",
    },
    {
      name: "Awards",
      href: "#achievements",
      icon: Trophy,
      color: "from-yellow-500 to-yellow-400",
    },
    {
      name: "Contact",
      href: "#contact",
      icon: Mail,
      color: "from-red-500 to-red-400",
    },
  ];

  if (!mounted) {
    return (
      <div className="my-6 py-4 px-6 rounded-full flex items-center justify-between border border-transparent">
        <span className="text-xl font-bold tracking-tighter"> naims.dev </span>
      </div>
    );
  }

  return (
    <>
      <nav
        className="my-6 py-3 px-6 rounded-full flex items-center justify-between sticky top-6 z-50 bg-white/40 dark:bg-black/20 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-primary/5"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
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
                <link.icon
                  className="w-4 h-4 group-hover:scale-110 transition-transform"
                  style={{
                    stroke: link.color.includes("purple")
                      ? "#a855f7"
                      : link.color.includes("blue")
                        ? "#3b82f6"
                        : link.color.includes("amber")
                          ? "#f59e0b"
                          : link.color.includes("yellow")
                            ? "#eab308"
                            : "#ef4444",
                  }}
                />
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
            <div className="p-4 rounded-4xl bg-white/80 dark:bg-black/80 backdrop-blur-3xl border border-white/40 dark:border-white/10 shadow-2xl flex flex-col gap-2">
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
                    <link.icon
                      className="w-5 h-5"
                      style={{
                        stroke: link.color.includes("purple")
                          ? "#a855f7"
                          : link.color.includes("blue")
                            ? "#3b82f6"
                            : link.color.includes("amber")
                              ? "#f59e0b"
                              : link.color.includes("yellow")
                                ? "#eab308"
                                : "#ef4444",
                      }}
                    />
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
