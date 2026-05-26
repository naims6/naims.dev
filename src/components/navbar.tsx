"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Cpu, Briefcase, Trophy, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Cross as Hamburger } from "hamburger-react";
import { BlurFade } from "@/components/animation-wrapper";
import ThemeToggle from "./ThemeToggle";
import Logo from "./logo";

export default function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [pillStyle, setPillStyle] = React.useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const navRef = React.useRef<HTMLDivElement>(null);
  const itemRefs = React.useRef<(HTMLAnchorElement | null)[]>([]);
  const pathname = usePathname();

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll to show/hide navbar and background toggle
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Hide/show navbar based on scroll direction
      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        setIsVisible(false);
      } else if (currentScrollPos < prevScrollPos) {
        setIsVisible(true);
      }

      // Toggle background after scrolling past 50px
      setScrolled(currentScrollPos > 50);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Helper to get correct href based on current page
  const getHref = (hash: string) => {
    if (pathname === "/") {
      return hash;
    }
    return "/" + hash;
  };

  // Update pill position when hovering
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    const item = itemRefs.current[index];
    const nav = navRef.current;
    if (item && nav) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      setPillStyle({
        left: itemRect.left - navRect.left,
        width: itemRect.width,
        opacity: 1,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setPillStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  const [scrolled, setScrolled] = React.useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      color: "from-purple-500 to-purple-400",
      hash: "",
    },
    {
      name: "Skills",
      href: getHref("#tech-stack"),
      icon: Cpu,
      color: "from-blue-500 to-blue-400",
      hash: "#tech-stack",
    },
    {
      name: "Projects",
      href: getHref("#projects"),
      icon: Briefcase,
      color: "from-amber-500 to-amber-400",
      hash: "#projects",
    },
    {
      name: "Awards",
      href: getHref("#achievements"),
      icon: Trophy,
      color: "from-yellow-500 to-yellow-400",
      hash: "#achievements",
    },
    {
      name: "Contact",
      href: getHref("#contact"),
      icon: Mail,
      color: "from-red-500 to-red-400",
      hash: "#contact",
    },
  ];

  if (!mounted) {
    return (
      <div className="my-6 py-4 px-6 rounded-full flex items-center justify-between border border-transparent">
        <Logo />
      </div>
    );
  }

  return (
    <>
      <nav
        className={`my-6 py-3 px-6 rounded-full flex items-center justify-between sticky top-6 z-50 ${scrolled ? 'bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700' : 'bg-transparent'} border border-border/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600`}
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        {/* logo  */}
        <BlurFade delay={0} inView yOffset={0} blur="2px">
          <Logo />
        </BlurFade>

        {/* Desktop Nav Links - Center */}
        <div
          ref={navRef}
          className="hidden md:flex items-center gap-1 relative"
          onMouseLeave={handleMouseLeave}
        >
          {/* Sliding background pill */}
          <motion.div
            className="absolute top-0 bottom-0 bg-linear-to-br from-black/10 to-black/5 dark:from-white/15 dark:to-white/5 rounded-xl border border-black/10 dark:border-white/10 -z-10"
            animate={{
              left: pillStyle.left,
              width: pillStyle.width,
              opacity: pillStyle.opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.8,
            }}
          />

          {/* Sliding indicator line */}
          <motion.div
            className="absolute bottom-1 h-0.5 rounded-full bg-linear-to-r from-blue-400 via-indigo-400 to-blue-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
            animate={{
              left: pillStyle.left + pillStyle.width / 2 - 8,
              width: 16,
              opacity: pillStyle.opacity,
              scaleX: pillStyle.opacity > 0 ? 1 : 0.5,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 28,
              mass: 0.6,
            }}
          />

          {navLinks.map((link, idx) => (
            <BlurFade
              key={link.name}
              delay={0.1 + idx * 0.05}
              inView
              yOffset={0}
            >
              <Link
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                href={link.href}
                onMouseEnter={() => handleMouseEnter(idx)}
                className="relative flex items-center gap-2 px-4 py-2 text-xs font-bold text-foreground/60 hover:text-foreground rounded-xl transition-colors duration-200 uppercase tracking-widest"
              >
                <link.icon
                  className="relative w-4 h-4 transition-all duration-200"
                  style={{
                    stroke:
                      hoveredIndex === idx
                        ? "currentColor"
                        : link.color.includes("purple")
                          ? "#a855f7"
                          : link.color.includes("blue")
                            ? "#3b82f6"
                            : link.color.includes("amber")
                              ? "#f59e0b"
                              : link.color.includes("yellow")
                                ? "#eab308"
                                : "#ef4444",
                    transform:
                      hoveredIndex === idx ? "scale(1.15)" : "scale(1)",
                    filter:
                      hoveredIndex === idx
                        ? "drop-shadow(0 0 6px currentColor)"
                        : "none",
                  }}
                />
                <span className="relative">{link.name}</span>
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
            <Hamburger
              toggled={isMobileMenuOpen}
              toggle={setIsMobileMenuOpen}
              size={22}
              color="currentColor"
              rounded
              distance="sm"
            />
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
            <div className="p-4 rounded-2xl bg-white/85 dark:bg-background/85 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex flex-col gap-2">
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
