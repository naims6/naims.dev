import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Header from "@/components/header";

// Lazy load components below the fold
const Services = dynamic(() => import("@/components/services"));
const TechStack = dynamic(() => import("@/components/tech-stack"));
const Projects = dynamic(() => import("@/components/projects"));
const Experience = dynamic(() => import("@/components/experience"));
const Achievements = dynamic(() => import("@/components/achievements"));
const Contact = dynamic(() => import("@/components/contact"));
const Footer = dynamic(() => import("@/components/footer"));
const ScrollToTop = dynamic(() => import("@/components/scroll-to-top"));

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mx-auto px-4 max-w-6xl">
      <Navbar />
      <Header />
      <Services />
      <TechStack />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
