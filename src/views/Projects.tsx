import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";
import "../styles/Projects.css";
import Readme from "../components/projectreadme";

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = "Projects";
  }, []);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.querySelector(".projects-content");
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Header />
      <Toaster />
      <Readme />
      <div style={{ height: "20vh" }}></div>
      <Footer />
    </div>
  );
};

export default Projects;
