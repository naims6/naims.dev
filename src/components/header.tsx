import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  FileUser,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { SiWhatsapp, SiDiscord } from "react-icons/si";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BlurFade, BlurFadeText } from "@/components/animation-wrapper";
import About from "./about";

export default function Header() {
  return (
    <section className="py-6 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
        {/* Left Side: Name and Intro */}
        <div className="w-full lg:w-[60%] space-y-8">
          <div className="space-y-3">
            <BlurFade delay={0.1} inView>
              <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none text-foreground">
                <BlurFadeText text="Naim Sorker" delay={0.2} />
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <h2 className="text-2xl lg:text-3xl font-bold text-primary tracking-tight">
                Full-Stack Developer
              </h2>
            </BlurFade>
          </div>

          <div className="relative">
            <About />
          </div>

          <BlurFade delay={0.5} inView>
            <div className="flex items-center gap-2 text-muted-foreground/80 font-semibold uppercase tracking-widest text-sm lg:text-base">
              <MapPin className="text-primary" size={20} />
              <span>Tangail, Dhaka, Bangladesh</span>
            </div>
          </BlurFade>
        </div>

        {/* Right Side: Profile Photo and Socials */}
        <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-end gap-10">
          <BlurFade delay={0.2} inView>
            <div className="relative group">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-linear-to-tr from-primary/30 to-blue-500/20 rounded-[2.5rem] lg:rounded-[3.5rem] blur-2xl opacity-30 group-hover:opacity-80 transition duration-1000" />

              <div className="relative w-40 h-40 lg:w-64 lg:h-64 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border-8 border-background shadow-xl transition-all duration-700 group-hover:shadow-primary/20 group-hover:-translate-y-2">
                <Image
                  className="w-full h-full object-cover cursor-pointer transform hover:scale-110 transition-transform duration-1000 ease-out border border-gray-50/30"
                  src="/assets/naims6_profile.png"
                  alt="Naim Sorker"
                  width={256}
                  height={256}
                  priority
                />
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 lg:bottom-10 lg:right-10 flex h-6 w-6">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 bg-green-500 border-4 border-background shadow-md"></span>
              </div>
            </div>
          </BlurFade>

          {/* Actions and Socials */}
          <div className="flex flex-col items-center lg:items-end gap-6 w-full">
            <BlurFade delay={0.4} inView>
              <Button
                asChild
                className="w-full lg:w-auto px-14 py-8 rounded-3xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-2 transition-all duration-500 bg-primary text-primary-foreground text-xl font-black group"
              >
                <Link
                  href="https://drive.google.com/file/d/17ddZZoizrm1hG_hBnAUgl7DT0nThFWRh/view?usp=sharing"
                  target="_blank"
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
                },
                {
                  icon: Github,
                  href: "https://github.com/naims6",
                  label: "GitHub",
                },
                {
                  icon: Mail,
                  href: "mailto:naim.sorker06@gmail.com",
                  label: "naim.sorker06@gmail.com",
                },
                {
                  icon: SiWhatsapp,
                  href: "https://wa.me/+8801908390036",
                  label: "+8801908390036",
                },
                {
                  icon: SiDiscord,
                  href: "https://discord.com/users/naimsorker6",
                  label: "Discord",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/naim.sorker6",
                  label: "Facebook",
                },
              ].map((social, idx) => (
                <BlurFade key={social.label} delay={0.45 + idx * 0.05} inView>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          asChild
                          className="w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-background/50 backdrop-blur-md hover:bg-primary/10 hover:text-primary border-muted/40 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1.5 shadow-xl"
                        >
                          <Link href={social.href} target="_blank">
                            <social.icon className="h-5 w-5 lg:h-7 lg:w-7" />
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent
                        sideOffset={8}
                        className="bg-primary text-primary-foreground border-none px-4 py-2 rounded-xl shadow-2xl font-black text-sm"
                      >
                        {social.label}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
