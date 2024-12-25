import React, { useState } from "react";
import { default as useDocumentTitle } from "../hooks/useDocumentTitle";
import Sidebar from "../components/sidebar";
import Layout from "../utils/Layout";
import "../styles/App.css";
import "../styles/damn.css";

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useDocumentTitle("Home");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Layout>
      <div className="home">
        <section className="home-content">
          <p>Welcome to S42.site, the home of S42!</p>
          <p>
            This page is a hub for all things related to S42, including projects
            and more.
          </p>
          <button onClick={toggleSidebar} className="navigate-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
            Navigate
          </button>
        </section>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div style={{ height: "50vh" }}></div>
    </Layout>
  );
};

export default App;
