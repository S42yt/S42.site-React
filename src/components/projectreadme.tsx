"use client";

import { useEffect, useState } from "react";
import ScrollAnimation from "./ScrollAnimation";
import Image from 'next/image';

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

export default function ProjectReadme() {
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
    <ScrollAnimation className="">
      <div className="w-full overflow-hidden pt-16">
        <div className={`p-5 text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-400 mb-12">
            Welcome to my Projects! Here you will find my projects and things I
            work on.
          </p>
          <h1 className="text-3xl font-bold mb-10">My Projects</h1>
          <div className="max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="mb-12">
                <div className="relative w-[150px] h-[150px] mx-auto my-4 transition-all duration-300 rounded-full hover:rounded-lg overflow-hidden">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Visit {project.name}
                </a>
                <hr className="border-gray-700 my-8" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}