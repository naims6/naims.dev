import React from "react";
import Header from "../../Components/Header/Header.jsx";
import TechStack from "../../Components/TechStack/TechStack.jsx";
import Projects from "../../Components/Projects/Projects.jsx";

const Home = () => {
  return (
    <div className="container2 mt-20">
      <Header />
      <TechStack />
      <Projects />
    </div>
  );
};

export default Home;
