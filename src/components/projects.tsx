"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github, Info } from "lucide-react"

import {
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiShadcnui,
  SiNodedotjs, SiExpress, SiMongodb, SiFirebase, SiPostgresql, SiSocketdotio, SiFramer, SiMui
} from "react-icons/si"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Projects() {
  const [currentPage, setCurrentPage] = React.useState(1)
  const itemsPerPage = 2 

  // Helper to get icon
  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "Next.js": return <SiNextdotjs className="mr-1" />
      case "React.js": return <SiReact className="mr-1 text-[#61DAFB]" />
      case "TypeScript": return <SiTypescript className="mr-1 text-[#3178C6]" />
      case "JavaScript": return <SiJavascript className="mr-1 text-[#F7DF1E]" />
      case "HTML/CSS": return <SiHtml5 className="mr-1 text-[#E34F26]" /> 
      case "Tailwind CSS": 
      case "Tailwind": return <SiTailwindcss className="mr-1 text-[#06B6D4]" />
      case "Shadcn/ui": return <SiShadcnui className="mr-1" />
      case "Node.js": return <SiNodedotjs className="mr-1 text-[#339933]" />
      case "Express.js": return <SiExpress className="mr-1" />
      case "MongoDB": return <SiMongodb className="mr-1 text-[#47A248]" />
      case "Firebase": return <SiFirebase className="mr-1 text-[#FFCA28]" />
      case "Socket.io": return <SiSocketdotio className="mr-1" />
      case "Framer Motion": return <SiFramer className="mr-1" />
      case "Material UI": return <SiMui className="mr-1 text-[#007FFF]" />
      default: return null
    }
  }

  const projects = [
    {
      id: 1,
      img: "/assets/projects/Carenow.png",
      name: "CareNow",
      description:
        "CareNow is a modern full-stack web application built with React and Tailwind CSS, designed for book lovers.",
      features: [
        "Comprehensive book catalog with advanced search and filtering",
        "User authentication and profile management",
        "Interactive review and rating system for books",
        "Personalized wishlist for tracking favorite reads",
        "Responsive design optimized for all devices",
        "Backend powered by Node.js and Firebase"
      ],
      githubRepository: "https://github.com/naims6/CareNow.git",
      liveLink: "https://thebookhaven-c1738.web.app/",
      tech: ["Next.js","TypeScript","Tailwind CSS", "NextAuth","MongoDB","Shadcn/ui"],
    },
    {
      id: 2,
      img: "/assets/projects/InnovateX.png",
      name: "InnovateX",
      description:
        "InnovateX is a modern online toy store that allows customers to purchase toys from a wide collection of categories.",
      features: [
        "Extensive collection of toys categorized for easy browsing",
        "Secure checkout process with integrated payment gateways",
        "User-friendly shopping cart and order management",
        "Admin dashboard for real-time inventory tracking",
        "Responsive e-commerce interface built with React",
        "Robust RESTful API with Express and MongoDB"
      ],
      githubRepository: "https://github.com/naims6/Innovate-X.git",
      liveLink: "https://innovate-x6.vercel.app/",
      tech: ["React.js","Node.js","Tailwind CSS", "Express.js", "MongoDB", "Firebase", "Stripe"],
    },
    {
      id: 3,
      img: "/assets/projects/Herokidz.png",
      name: "Herokidz",
      description:
        "Herokidz is a modern online toy store that allows customers to purchase toys from a wide collection of categories.",
      features: [
        "Extensive collection of toys categorized for easy browsing",
        "Drag-and-drop interface for intuitive task organization",
        "Team collaboration workspaces with role-based access",
        "Instant notifications for task updates and mentions",
        "Built with Next.js for server-side rendering performance",
        "Modern UI components powered by Shadcn/ui"
      ],
      githubRepository: "https://github.com/naims6/Hero-Kidz.git",
      liveLink: "#",
      tech: ["Next.js", "TypeScript", "NextAuth","Tailwind CSS", "Shadcn/ui"],
    },
    {
      id: 5,
      img: "/assets/projects/thebookhaven.png",
      name: "E-Commerce Dashboard",
      description:
        "Admin dashboard for managing products, orders, and analytics with visualized data charts.",
      features: [
        "Interactive charts for visualizing sales and revenue data",
        "Comprehensive product management (add, edit, delete)",
        "Order tracking and status updates",
        "User management interface for administrators",
        "Material UI components for a professional look",
        "Responsive design for management on the go"
      ],
      githubRepository: "https://github.com/naims6",
      liveLink: "#",
      tech: ["React.js", "Material UI", "Firebase", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    },
    {
      id: 6,
      img: "/assets/projects/toybazzar.png",
      name: "Toy Bazaar",
      description:
        "E-commerce website for buying and selling toys.",
      features: [
        "Real-time weather updates using OpenWeatherMap API",
        "Location-based forecasting for current user position",
        "5-day weather forecast with detailed metrics",
        "City search functionality with auto-suggestions",
        "Clean and intuitive user interface",
        "Lightweight performance with vanilla JavaScript"
      ],
      githubRepository: "https://github.com/naims6",
      liveLink: "#",
      tech: ["JavaScript","React.js","HTML/CSS", "Tailwind CSS","Node.js","Express.js","MongoDB"],
    },
  ]

  const totalPages = Math.ceil(projects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="mt-12">
      <h1 className="text-xl font-medium mb-5 border-l-4 border-primary pl-3">
        Recent Projects
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
        {currentProjects.map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full"
          >
          <Card className="overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
            <figure className="relative aspect-video w-full bg-muted rounded-lg">
              <Link href={p.githubRepository} target="_blank">
                <Image
                  className="object-cover transition-transform duration-300 hover:scale-102 rounded-lg"
                  src={p.img}
                  alt={p.name}
                  fill
                />
              </Link>
            </figure>
            <CardContent className="flex-1 px-4 pb-4">
              <div className="flex justify-between items-start mb-2">
                <h2 className="font-semibold text-lg hover:underline truncate pr-2">
                    <Link href={p.liveLink} target="_blank">{p.name}</Link>
                </h2>
                <TooltipProvider>
                  <div className="flex gap-1 shrink-0">
                    <Dialog>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span tabIndex={0} className="inline-flex cursor-pointer rounded-md">
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                                <Info className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Project Details</p>
                        </TooltipContent>
                      </Tooltip>
                      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle>{p.name}</DialogTitle>
                          <DialogDescription className="mt-2 text-base">
                            {p.description}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="relative h-32 w-full max-w-xs mx-auto overflow-hidden rounded-md bg-muted shadow-inner">
                            <Image
                              src={p.img}
                              alt={p.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                             {p.features.map((feature, i) => (
                               <li key={i}>{feature}</li>
                             ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {p.tech.map((t) => (
                              <Badge key={t} variant="secondary" className="flex items-center">
                                {getTechIcon(t)}
                                {t}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2 justify-end mt-2">
                             <Button variant="outline" size="sm" asChild>
                              <Link href={p.githubRepository} target="_blank">
                                <Github className="mr-2 h-4 w-4" /> Source
                              </Link>
                             </Button>
                             <Button size="sm" asChild>
                              <Link href={p.liveLink} target="_blank">
                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                              </Link>
                             </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" asChild>
                          <Link href={p.githubRepository} target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Source</p>
                      </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" asChild>
                          <Link href={p.liveLink} target="_blank">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Demo</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs font-normal flex items-center px-1.5 py-0.5">
                    {getTechIcon(t)}
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={page === currentPage}
                    onClick={() => handlePageChange(page)}
                    className="cursor-pointer"
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}
