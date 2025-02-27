"use client";

import { useEffect } from 'react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggleSidebar]);

  return (
    <div className={`fixed top-0 right-0 w-64 h-full bg-gray-800/50 backdrop-blur-md text-white transition-[right] duration-300 ease-in-out z-50 ${isOpen ? 'right-0' : '-right-64'}`}>
      <div className="p-5 overflow-y-auto h-full flex flex-col">
        <button 
          className="absolute top-2.5 left-2.5 bg-transparent border-none text-white text-2xl cursor-pointer"
          onClick={toggleSidebar}
        >
          &times;
        </button>
        
        <h2 className="text-xl font-bold mt-10 mb-4 text-white">Pages</h2>
        <ul className="list-none p-0">
          <li className="my-2.5">
            <Link 
              href="/"
              onClick={toggleSidebar}
              className="block py-2.5 px-4 bg-gray-800/20 rounded hover:bg-gray-800/90 transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li className="my-2.5">
            <Link 
              href="/portfolio"
              onClick={toggleSidebar}
              className="block py-2.5 px-4 bg-gray-800/20 rounded hover:bg-gray-800/90 transition-colors duration-300"
            >
              Portfolio
            </Link>
          </li>
          <li className="my-2.5">
            <Link 
              href="/socials"
              onClick={toggleSidebar}
              className="block py-2.5 px-4 bg-gray-800/20 rounded hover:bg-gray-800/90 transition-colors duration-300"
            >
              Socials
            </Link>
          </li>
          <li className="my-2.5">
            <Link 
              href="/projects"
              onClick={toggleSidebar}
              className="block py-2.5 px-4 bg-gray-800/20 rounded hover:bg-gray-800/90 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li className="my-2.5">
            <Link 
              href="/shop"
              onClick={toggleSidebar}
              className="block py-2.5 px-4 bg-gray-800/20 rounded hover:bg-gray-800/90 transition-colors duration-300"
            >
              Shop
            </Link>
          </li>
        </ul>
        
        <hr className="border-gray-700 my-4" />
        
        <h2 className="text-xl font-bold mb-4 text-white">Projects</h2>
        <ul className="list-none p-0">
          <li className="my-2.5">
            <a
              href="https://discord.gg/cutecraft"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2.5 px-4 bg-gray-800/20 rounded hover:bg-gray-800/90 transition-colors duration-300"
            >
              CuteCraft.net
            </a>
          </li>
          <li className="my-2.5">
            <a
              href="https://biogg.net"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2.5 px-4 bg-gray-800/20 rounded hover:bg-gray-800/90 transition-colors duration-300"
            >
              Biogg.net
            </a>
          </li>
        </ul>
        
        <hr className="border-gray-700 my-4" />
        
        <h2 className="text-xl font-bold mb-4 text-white">Important Infos</h2>
        <p className="text-gray-400 mb-4">This project is open source. Check out the GitHub repo:</p>
        <a
          className="block py-2.5 px-4 bg-gray-800/20 rounded hover:bg-gray-800/90 transition-colors duration-300"
          href="https://github.com/S42yt/S42.site-React"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
}