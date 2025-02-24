import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
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
    <div className={`sidebar-container ${isOpen ? "open" : ""}`}>
      <div className="sidebar">
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <h2>Pages</h2>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/portfolio" onClick={toggleSidebar}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/socials" onClick={toggleSidebar}>
              Socials
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={toggleSidebar}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={toggleSidebar}>
              Shop
            </Link>
          </li>
        </ul>
        <hr />
        <h2>Projects</h2>
        <ul>
          <li>
            <a
              href="https://discord.gg/cutecraft"
              target="_blank"
              rel="noopener noreferrer"
            >
              CuteCraft.net
            </a>
          </li>
          <li>
            <a
              href="https://biogg.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biogg.net
            </a>
          </li>
        </ul>
        <hr />
        <h2>Important Infos</h2>
        <p>This project is open source. Check out the GitHub repo:</p>
        <a
          className="github-link"
          href="https://github.com/S42yt/S42.site-React"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
