import Navbar from "@/components/navbar"
import Header from "@/components/header"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { StaggerContainer, FadeInItem } from "@/components/animation-wrapper"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
      <StaggerContainer className="flex flex-col min-h-screen container mx-auto px-4 md:px-8 max-w-5xl">
        <FadeInItem><Navbar /></FadeInItem>
        <FadeInItem><Header /></FadeInItem>
        <FadeInItem><TechStack /></FadeInItem>
        <FadeInItem><Projects /></FadeInItem>
        <FadeInItem><Experience /></FadeInItem>
        <FadeInItem><Contact /></FadeInItem>
        <FadeInItem><Footer /></FadeInItem>
        <ScrollToTop />
      </StaggerContainer>
  )
}
