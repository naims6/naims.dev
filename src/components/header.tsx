import Link from "next/link"
import Image from "next/image"
import { FileUser, Github, Linkedin, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import About from "./about"

export default function Header() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          {/* image part */}
          <div className="w-22 h-22 rounded-full overflow-hidden shadow-lg">
            <Image
              className="w-[88px] h-[88px] rounded-full object-cover cursor-pointer transform hover:scale-105 transition-all duration-300 -translate-y-0.5"
              src="/assets/fullstack-developer.jpg"
              alt="Full Stack Developer Image"
              width={88}
              height={88}
            />
          </div>
          {/* details part name, title, location*/}
          <div>
            <h1 className="text-2xl font-semibold tracking-tighter">
              Naim Sorker
            </h1>
            <h3 className="text-lg font-medium text-muted-foreground">
              Full-Stack Developer
            </h3>
            <h4 className="text-sm text-muted-foreground flex items-center"><MapPin className="mr-1" size={12} />Dhaka, Bangladesh</h4>
          </div>
        </div>
      </div>
      <About />
      {/* contacts actions btn */}
      <div className="flex items-center gap-2 mt-6">
        <Button asChild className="!px-4">
          <Link
            href="https://drive.google.com/file/d/1p_0m4OvHnpnqmW5MNSQfF8_TuBDPgbML/view?usp=sharing"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FileUser className="h-4 w-4" />
            <span className="tracking-wide">Resume</span>
          </Link>
        </Button>
        {/* linked in  */}
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://www.linkedin.com/in/naims6/" target="_blank">
            <Linkedin className="h-5 w-5 hover:text-foreground transition-colors" />
          </Link>
        </Button>
        {/* github */}
        <Button variant="ghost" size="icon" asChild>
          <Link href="https://github.com/naims6" target="_blank">
            <Github className="h-5 w-5 hover:text-foreground transition-colors" />
          </Link>
        </Button>
        {/* email */}
        <Button variant="ghost" size="icon" asChild>
          <Link href="mailto:naim.sorker06@gmail.com" target="_blank">
            <Mail className="h-5 w-5 hover:text-foreground transition-colors" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
