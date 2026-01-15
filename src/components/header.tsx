import Link from "next/link"
import Image from "next/image"
import { FileUser, Github, Linkedin, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BlurFade, BlurFadeText } from "@/components/animation-wrapper"
import About from "./about"

export default function Header() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          {/* image part */}
          <BlurFade delay={0.1} inView>
            <div className="w-22 h-22 rounded-full overflow-hidden shadow-lg">
              <Image
                className="w-[88px] h-[88px] rounded-full object-cover cursor-pointer transform hover:scale-105 transition-all duration-300 -translate-y-0.5"
                src="/assets/fullstack-developer.jpg"
                alt="Full Stack Developer Image"
                width={88}
                height={88}
              />
            </div>
          </BlurFade>
          {/* details part name, title, location*/}
          <div>
            <div className="text-2xl font-semibold tracking-tighter">
              <BlurFadeText text="Naim Sorker" delay={0.2} />
            </div>
            <BlurFade delay={0.3} inView>
               <h3 className="text-lg font-medium text-muted-foreground">
                Full-Stack Developer
              </h3>
            </BlurFade>
           
            <BlurFade delay={0.35} inView>
              <h4 className="text-sm text-muted-foreground flex items-center"><MapPin className="mr-1" size={12} />Dhaka, Bangladesh</h4>
            </BlurFade>
          </div>
        </div>
      </div>
      <About />
      {/* contacts actions btn */}
      <div className="flex items-center gap-2 mt-6">
        <BlurFade delay={0.4} inView>
        <Button asChild className="px-4!">
          <Link
            href="https://drive.google.com/file/d/17ddZZoizrm1hG_hBnAUgl7DT0nThFWRh/view?usp=sharing"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FileUser className="h-4 w-4" />
            <span className="tracking-wide">Resume</span>
          </Link>
        </Button>
        </BlurFade>

        {/* linked in  */}
        <BlurFade delay={0.45} inView>
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://www.linkedin.com/in/naims6/" target="_blank">
            <Linkedin className="h-5 w-5 hover:text-foreground transition-colors" />
          </Link>
        </Button>
        </BlurFade>

        {/* github */}
        <BlurFade delay={0.5} inView>
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://github.com/naims6" target="_blank">
            <Github className="h-5 w-5 hover:text-foreground transition-colors" />
          </Link>
        </Button>
        </BlurFade>

        {/* email */}
        <BlurFade delay={0.55} inView>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="mailto:naim.sorker06@gmail.com" target="_blank">
                    <Mail className="h-5 w-5 hover:text-foreground transition-colors" />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>naim.sorker06@gmail.com</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </BlurFade>
      </div>
    </section>
  )
}
