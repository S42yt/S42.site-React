"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="p-5 text-center">
        <p className="text-gray-400 my-4 mb-12">Welcome to S42.site, the home of S42!</p>
        <p className="text-gray-400 mb-12">
          This page is a hub for all things related to S42, including projects
          and more.
        </p>
        <button 
          onClick={toggleSidebar} 
          className="mt-5 p-2.5 px-5 bg-gray-800/50 hover:bg-gray-600/60 text-white rounded flex items-center mx-auto transition-colors duration-300"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512"
            className="w-4 h-4 mr-2 fill-white"
          >
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
          </svg>
          Navigate
        </button>
      </section>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}