import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";
import "../styles/Projects.css";

const projects = [
  {
    name: "CuteCraft.net",
    logo: "https://example.com/cutecraft-logo.png",
    description: "A Minecraft server with a focus on community and fun.",
    url: "http://discord.cutecraft.net",
  },
  {
    name: "Biogg.net",
    logo: "https://example.com/biogg-logo.png",
    description: "A platform for sharing and discovering new games.",
    url: "https://biogg.net",
  },
];

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = "S42.site | Projects";
  }, []);

  return (
    <div className="projects-container">
      <Header />
      <Toaster />
      <div className="projects-content">
        <p>
          Welcome to my portfolio! Here you will find my projects and
          experiences.
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
      <div style={{ height: "20vh" }}></div>
      <Footer />
    </div>
  );
};

export default Projects;
