"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="my-10 flex items-center justify-between">
         <div className="">
            <span className="text-2xl cursor-pointer">naims.dev</span>
         </div>
         <div className="flex items-center gap-5">
             <Button variant="ghost" size="icon" />
         </div>
      </div>
    )
  }

  return (
    <div className="my-10 flex items-center justify-between">
      {/* left  */}
      <div className="">
        <Link href="/" className="text-2xl cursor-pointer font-bold tracking-tighter">
          naims.dev
        </Link>
      </div>
      {/* right  */}
      <div className="flex items-center gap-5">
        <h2 className="flex items-center gap-2 text-sm font-medium">
          <span className="text-[12px]">🚀</span> Available for work
        </h2>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                 <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                 <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Toggle theme</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      </div>
    </div>
  )
}
