"use client"

import { useState } from "react"
import { Copy, Mail, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BlurFade } from "@/components/animation-wrapper"
import Link from "next/link"

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "naim.sorker06@gmail.com" 

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }


// ... imports ...

  return (
    <div className="mt-12 mb-2">
      <BlurFade delay={0.2} inView>
        <h1 className="text-xl font-medium mb-5 border-l-4 border-primary pl-3 mb-5">
          Get in Touch
        </h1>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <Card className="bg-gradient-to-br from-background to-muted/50 border-input shadow-md text-center py-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight mb-2">Let's Work Together!</CardTitle>
            <CardDescription className="text-base max-w-lg mx-auto">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 mt-2">
                  <Button size="lg" className="gap-2 text-base font-medium px-8" asChild>
                      <a href={`mailto:${email}`}>
                          <Mail className="w-5 h-5" />
                          Say Hello
                      </a>
                  </Button>
                  
                  <TooltipProvider>
                      <Tooltip>
                          <TooltipTrigger asChild>
                              <Button variant="outline" size="lg" className="w-12 px-0" onClick={handleCopy}>
                                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                                  <span className="sr-only">Copy email</span>
                              </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                              <p>{copied ? "Copied!" : "Copy email"}</p>
                          </TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                  Or find me on <Link href="https://www.linkedin.com/in/naims6/" target="_blank" className="text-foreground font-medium">LinkedIn</Link> and <Link href="https://github.com/naims6" target="_blank" className="text-foreground font-medium">GitHub</Link>
              </p>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  )
}
