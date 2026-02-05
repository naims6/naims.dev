import Navbar from "@/components/navbar";
import Header from "@/components/header";
import TechStack from "@/components/tech-stack";
import Services from "@/components/services";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
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
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
