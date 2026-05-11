import Image from "next/image";
import { FileUser, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import { BlurFade } from "@/components/animation-wrapper";
import About from "./about";
import { TechMarquee } from "./tech-marquee";
import PrimaryCtaButton from "@/components/primary-cta-button";
import SocialButton from "@/components/social-button";

export default function Header() {
  return (
    <section
      className="py-6 lg:py-10 min-h-[750px] lg:mt-10 scroll-mt-28"
      id="home"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-16">
        {/* Left Side: Name and Intro */}
        <div className="w-full lg:w-[60%] space-y-8 relative">
          {/* Subtle colorful gradient background */}
          <div className="absolute -inset-4 lg:-inset-8 bg-linear-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-2xl -z-10" />
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-purple-400/10 rounded-full blur-3xl" />

          <div className="space-y-3">
            <BlurFade delay={0} inView>
              <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-bold uppercase tracking-wider">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  Open to Work
                </span>
              </div>
            </BlurFade>
            <BlurFade delay={0.05} inView>
              <h1 className="text-center lg:text-left text-5xl lg:text-7xl font-black tracking-tight leading-none bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 bg-size-[200%_auto] animate-gradient-x bg-clip-text animate-fade-in-up">
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
            <div className="relative group p-1">
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
              <PrimaryCtaButton
                href="https://drive.google.com/file/d/1jTiHmFxWPJe7lIskH3HPg_m4D1C47oVr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FileUser className="h-6 w-6" />}
              >
                Get Resume
              </PrimaryCtaButton>
            </BlurFade>

            <div className="flex items-center gap-3">
              {[
                {
                  icon: <Linkedin className="w-5 h-5 lg:w-7 lg:h-7" />,
                  href: "https://www.linkedin.com/in/naims6/",
                  label: "LinkedIn",
                  color: "from-blue-600 via-blue-500 to-blue-400",
                  shadowColor: "rgba(37,99,235,1)",
                },
                {
                  icon: <Github className="w-5 h-5 lg:w-7 lg:h-7" />,
                  href: "https://github.com/naims6",
                  label: "GitHub",
                  color: "from-gray-700 via-gray-600 to-gray-500",
                  shadowColor: "rgba(75,85,99,1)",
                },
                {
                  icon: <Mail className="w-5 h-5 lg:w-7 lg:h-7" />,
                  href: "mailto:naim.sorker06@gmail.com",
                  label: "Email",
                  color: "from-red-500 via-red-400 to-red-300",
                  shadowColor: "rgba(239,68,68,1)",
                },
                {
                  icon: <SiWhatsapp className="w-5 h-5 lg:w-7 lg:h-7" />,
                  href: "https://wa.me/+8801908390036",
                  label: "WhatsApp",
                  color: "from-green-500 via-green-400 to-green-300",
                  shadowColor: "rgba(34,197,94,1)",
                },
              ].map((social, idx) => (
                <BlurFade key={social.label} delay={0.45 + idx * 0.05} inView>
                  <SocialButton
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                    color={social.color}
                    shadowColor={social.shadowColor}
                    size="lg"
                  />
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
