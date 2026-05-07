import Link from "next/link";
import Image from "next/image";
import { FileUser, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/animation-wrapper";
import About from "./about";
import { TechMarquee } from "./tech-marquee";

export default function Header() {
  return (
    <section className="py-6 lg:py-10 min-h-[750px] lg:mt-10">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-16">
        {/* Left Side: Name and Intro */}
        <div className="w-full lg:w-[60%] space-y-8">
          <div className="space-y-3">
            <BlurFade delay={0} inView>
              <h1 className="text-center lg:text-left text-5xl lg:text-7xl font-black tracking-tight leading-none bg-linear-to-r from-foreground via-primary to-foreground bg-size-[200%_auto] animate-gradient-x bg-clip-text animate-fade-in-up">
                Naim Sorker
              </h1>
            </BlurFade>
            <BlurFade delay={0.1} inView>
              <h2 className="text-center lg:text-left text-2xl lg:text-3xl font-bold text-primary tracking-tight">
                Full-Stack Developer
              </h2>
            </BlurFade>
          </div>

          <div className="relative">
            <About />
          </div>

          <BlurFade delay={0.2} inView>
            <div className="flex items-center gap-2 text-muted-foreground/80 font-semibold uppercase tracking-widest text-sm lg:text-base">
              <MapPin size={20} style={{ stroke: "#3b82f6" }} />
              <span>Tangail, Dhaka, Bangladesh</span>
            </div>
          </BlurFade>
        </div>

        {/* Right Side: Profile Photo and Socials */}
        <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-end gap-10 relative z-10">
          <BlurFade delay={0.05} inView>
            <div className="relative group p-1 animate-float">
              {/* Subtle professional gradient border background */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/30 via-primary/10 to-transparent rounded-[2.8rem] lg:rounded-[3.8rem] opacity-0 group-hover:opacity-100 blur-xl transition-all duration-1000" />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-primary/5 to-transparent rounded-[2.8rem] lg:rounded-[3.8rem] opacity-0 group-hover:opacity-60 transition-all duration-1000" />

              {/* Image Container */}
              <div className="profile-ring relative w-48 h-48 lg:w-60 lg:h-60 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border-2 border-primary/10 bg-background backdrop-blur-sm shadow-lg transition-all duration-1000 group-hover:shadow-xl group-hover:shadow-primary/20 group-hover:-translate-y-1">
                <Image
                  className="w-full h-full object-cover cursor-pointer transition-all duration-1000 ease-out group-hover:scale-105"
                  src="/assets/naims6_profile.png"
                  alt="Naim Sorker"
                  width={200}
                  height={200}
                  priority
                  {...({ fetchPriority: "high" } as any)}
                />
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 flex h-5 w-5 lg:h-6 lg:w-6 z-20">
                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 lg:h-6 lg:w-6 bg-green-500 border-2 border-background shadow-sm"></span>
              </div>
            </div>
          </BlurFade>

          {/* Actions and Socials */}
          <div className="flex flex-col items-center lg:items-end gap-6 w-full">
            <BlurFade delay={0.4} inView>
              <Button
                asChild
                variant="primary"
                size="lg"
                className="w-full lg:w-auto"
              >
                <Link
                  href="https://drive.google.com/file/d/1jTiHmFxWPJe7lIskH3HPg_m4D1C47oVr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3"
                >
                  <FileUser className="h-7 w-7 group-hover:scale-110 transition-transform" />
                  <span>Get Resume</span>
                </Link>
              </Button>
            </BlurFade>

            <div className="flex items-center gap-3">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/naims6/",
                  label: "LinkedIn",
                  color: "from-blue-600 to-blue-500",
                },
                {
                  icon: Github,
                  href: "https://github.com/naims6",
                  label: "GitHub",
                  color: "from-gray-700 to-gray-600",
                },
                {
                  icon: Mail,
                  href: "mailto:naim.sorker06@gmail.com",
                  label: "naim.sorker06@gmail.com",
                  color: "from-red-500 to-red-400",
                },
                {
                  icon: SiWhatsapp,
                  href: "https://wa.me/+8801908390036",
                  label: "+8801908390036",
                  color: "from-green-500 to-green-400",
                },
              ].map((social, idx) => (
                <BlurFade key={social.label} delay={0.45 + idx * 0.05} inView>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-12 h-12 lg:w-16 lg:h-16 rounded-lg lg:rounded-xl flex items-center justify-center bg-gradient-to-br ${social.color} text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300`}
                  >
                    <social.icon className="h-5 w-5 lg:h-7 lg:w-7" />
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Marquee Bottom Section */}
      <div className="mt-16 pt-10">
        <BlurFade delay={0.6} inView>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 px-4">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap">
                Core Technologies
              </span>
              <div className="h-px bg-linear-to-r from-primary/20 via-primary/10 to-transparent flex-1" />
            </div>
            <TechMarquee />
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
