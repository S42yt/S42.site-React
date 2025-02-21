import React, { useEffect, useState } from "react";
import "../styles/Projects.css";
import ScrollAnimation from "../utils/ScrollAnimation";

const projects = [
  {
    name: "CuteCraft.net",
    logo: "/assets/cutecraft-logo.png",
    description: "A Minecraft server with a focus on fun and community.",
    url: "https://discord.gg/cutecraft",
  },
  {
    name: "Biogg.net",
    logo: "/assets/biogg-logo.png",
    description: "A social platform to make his bio more interesting.",
    url: "https://biogg.net",
  },
];

const Readme: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollAnimation className="readme">
      <div className="projects-container">
        <div className={`projects-content ${isVisible ? "visible" : ""}`}>
          <p>
            Welcome to my Projects! Here you will find my projects and things I
            work on.
          </p>
          <h1>My Projects</h1>
          {projects.map((project, index) => (
            <div key={index} className="project">
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="project-logo"
              />
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Visit {project.name}
              </a>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default Readme;
