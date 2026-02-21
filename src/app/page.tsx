import Navbar from "@/components/navbar";
import Header from "@/components/header";
import TechStack from "@/components/tech-stack";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Achievements from "@/components/achievements";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen mx-auto px-4 max-w-5xl">
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
