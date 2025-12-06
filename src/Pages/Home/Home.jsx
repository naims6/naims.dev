import React from "react";
import Header from "../../Components/Header/Header.jsx";
import TechStack from "../../Components/TechStack/TechStack.jsx";
import Projects from "../../Components/Projects/Projects.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import Education from "../../Components/Education/Education.jsx";
import Experience from "../../Components/Experience/Experience.jsx";
import Navbar from "../../Components/Navbar/Navbar.jsx";

const Home = () => {
  return (
    <div className="container2">
      <Navbar />
      <Header />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
};

export default Home;
