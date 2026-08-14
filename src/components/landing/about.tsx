"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Check,
  Code2,
  Github,
  Linkedin,
  Link2,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Youtube,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import { BlurFade } from "../animation-wrapper";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const aboutSummary =
  "I build intelligent systems that combine AI automation with modern web development — helping businesses automate repetitive operations while creating fast, scalable web applications.";

const profile = {
  name: "Naim Sorker",
  role: "Full-Stack Developer",
  location: "Dhaka, Bangladesh",
  image:
    "https://res.cloudinary.com/dynxnpj21/image/upload/v1779201470/smfpwyk2icoiljlxfq44.png",
  email: "naim.sorker06@gmail.com",
};

const aboutSections: {
  icon: typeof Rocket;
  title: string;
  text: string;
}[] = [
  {
    icon: Rocket,
    title: "What I Do",
    text: "I build intelligent systems that combine AI automation with modern web development. My work focuses on helping businesses automate repetitive operations using AI agents, workflow automation, and custom integrations while creating fast, scalable web applications.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    text: "I design n8n workflows and AI-powered automations that handle repetitive operations for businesses — from data processing and custom integrations to connecting the tools teams already use.",
  },
  {
    icon: Code2,
    title: "My Expertise",
    text: "I develop full-stack applications with Next.js, TypeScript, Node.js, Prisma, and PostgreSQL — transforming complex business processes into simple, efficient digital experiences.",
  },
  {
    icon: Sparkles,
    title: "What I Believe",
    text: "Great software isn't just functional — it should save time, reduce manual effort, and scale effortlessly.",
  },
];

const highlights = [
  "Problem Solver",
  "Team Player",
  "Quick Learner",
  "Open to Opportunities",
];

const socialLinks = [
  {
    label: "Email",
    icon: Mail,
    iconColor: "text-muted-foreground",
    hoverBg: "hover:bg-muted hover:text-foreground",
    href: `mailto:${profile.email}`,
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    iconColor: "text-[#0A66C2]",
    hoverBg: "hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]",
    href: "https://www.linkedin.com/in/naims6/",
  },
  {
    label: "GitHub",
    icon: Github,
    iconColor: "text-foreground",
    hoverBg: "hover:bg-muted hover:text-foreground",
    href: "https://github.com/naims6",
  },
  {
    label: "YouTube",
    icon: Youtube,
    iconColor: "text-[#FF0000]",
    hoverBg: "hover:bg-[#FF0000]/10 hover:text-[#FF0000]",
    href: "https://www.youtube.com/@NaimsDev",
  },
  {
    label: "WhatsApp",
    icon: SiWhatsapp,
    iconColor: "text-[#25D366]",
    hoverBg: "hover:bg-[#25D366]/10 hover:text-[#25D366]",
    href: "https://wa.me/+8801908390036",
  },
];

export default function About() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      setOpen(window.location.hash === "#about");
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (next) {
      window.history.pushState(null, "", "#about");
    } else {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search,
      );
    }
  };

  const copyAboutLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}#about`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <div>
      <BlurFade delay={0.25} inView>
        <p className="max-w-2xl lg:text-lg text-muted-foreground leading-relaxed md:text-justify">
          {aboutSummary}
        </p>

        <div className="mt-5 flex justify-center lg:justify-start">
          <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm">
                Show More
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-[calc(100%-2rem)] md:max-w-3xl lg:max-w-5xl xl:max-w-6xl max-h-[90vh] overflow-y-auto p-6 sm:p-8">
              <DialogHeader>
                <div className="flex items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <DialogTitle className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                      About Me
                    </DialogTitle>
                    <DialogDescription className="text-sm sm:text-base font-medium">
                      AI Automation · Full-Stack Development
                    </DialogDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0 border-blue-500/30 text-blue-500 hover:bg-blue-500/10"
                    onClick={copyAboutLink}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-green-500" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Link2 className="h-4 w-4" />
                        Copy Link
                      </>
                    )}
                  </Button>
                </div>
              </DialogHeader>

              {/* Wide horizontal layout: profile card + details */}
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 mt-2">
                {/* Profile card */}
                <div className="flex flex-col items-center gap-4 rounded-2xl border border-border/50 dark:border-white/10 bg-white/60 dark:bg-transparent p-6 text-center lg:text-left">
                  <div className="relative rounded-2xl border border-border/60 dark:border-white/10">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      width={160}
                      height={160}
                      className="h-32 w-32 lg:h-40 lg:w-40 rounded-2xl object-cover"
                    />
                    <span className="absolute -bottom-1 -right-1 flex h-5 w-5 lg:h-6 lg:w-6">
                      <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40" />
                      <span className="relative inline-flex h-5 w-5 lg:h-6 lg:w-6 rounded-full bg-green-500 border-2 border-background" />
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl lg:text-2xl font-black tracking-tight text-foreground">
                      {profile.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {profile.role}
                    </p>
                    <p className="inline-flex items-center justify-center lg:justify-start gap-1.5 text-xs text-muted-foreground pt-1">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {profile.location}
                    </p>
                  </div>

                  {/* Social links */}
                  <div className="w-full grid grid-cols-1 gap-1.5">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={
                          link.href.startsWith("mailto") ? undefined : "_blank"
                        }
                        rel="noopener noreferrer"
                        className={`group inline-flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground transition-colors ${link.hoverBg}`}
                      >
                        <link.icon
                          className={`h-4 w-4 shrink-0 ${link.iconColor}`}
                        />
                        <span className="truncate">{link.label}</span>
                        <ArrowUpRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {aboutSections.map((section) => (
                      <div
                        key={section.title}
                        className="group rounded-2xl border border-border/50 dark:border-white/10 bg-white/60 dark:bg-transparent p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
                      >
                        <div className="flex items-center gap-3 mb-2.5">
                          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary">
                            <section.icon className="h-4 w-4" />
                          </span>
                          <h3 className="text-base font-bold text-foreground">
                            {section.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed md:text-justify">
                          {section.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap items-center gap-2">
                    {highlights.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border/60 dark:border-white/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-muted-foreground"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-primary" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </BlurFade>
    </div>
  );
}
