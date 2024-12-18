import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useNavigate, useLocation } from "react-router-dom";
import "./styles/header.css";

const defaultTexts = [
  "S42.site",
  "Portfolio",
  "Frontend/Backend-Developer",
  "CuteCraft.net",
  "Biogg.net",
];
const socialTexts = ["S42.site", "YouTube", "Twitch", "Instagram"];
const errorTexts = ["S42.site", "Page Not Found", "Error: 404", "/???"];

const Header: React.FC = () => {
  const [currentText, setCurrentText] = useState(defaultTexts[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [headerTextScale, setHeaderTextScale] = useState(1);
  const [headerTextOpacity, setHeaderTextOpacity] = useState(1);
  const [headerBlur, setHeaderBlur] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLightModeLocked, setIsLightModeLocked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const texts: string[] =
    location.pathname === "/socials"
      ? socialTexts
      : location.pathname === "/*"
        ? errorTexts
        : defaultTexts;

  useEffect(() => {
    setCurrentText(texts[0]);
    setLoopNum(0);
  }, [location]);

  useEffect(() => {
    setCurrentText(texts[0]);
    setLoopNum(0);
  }, [location]);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      const fullTextString = typeof fullText === "string" ? fullText : "";

      setCurrentText(
        isDeleting
          ? fullTextString.substring(0, currentText.length - 1)
          : fullTextString.substring(0, currentText.length + 1),
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 10000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / maxScroll) * 100;
      setScrollProgress(scrollPercent);

      const maxScrollForHeader = 100;
      const scale = Math.max(0.9, 1 - (scrollY / maxScrollForHeader) * 0.1);
      const blur = Math.min((scrollY / maxScrollForHeader) * 5, 5);
      const opacity = Math.max(0.6, 1 - (scrollY / maxScrollForHeader) * 0.4);

      setHeaderTextScale(scale);
      setHeaderBlur(blur);
      setHeaderTextOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDarkModeToggle = () => {
    if (isLightModeLocked) {
      toast("Now you are in light mode there is no going back!", {
        style: {
          background: "#fff",
          color: "#000",
          marginTop: "80px",
        },
      });
      return;
    }

    const chance = Math.random();
    if (chance < 0.01) {
      setIsDarkMode(false);
      setIsLightModeLocked(true);
      document.body.classList.add("light-mode");
      toast("HERE IS YOUR LIGHT MODE I GIVE UP", {
        style: {
          background: "#fff",
          color: "#000",
          marginTop: "80px",
        },
      });
    } else {
      setIsDarkMode(!isDarkMode);
      const messages = [
        "Are you crazy? Why do you want to switch the theme? I am just protecting your eyes!",
        "Switching themes? Make up your mind!",
        "Dark mode, light mode, dark mode... You are staying on Dark!",
        "Your eyes will thank you for this!",
        "Theme switched! Sike Never!",
      ];
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];
      toast(randomMessage, {
        style: {
          background: "#333",
          color: "#fff",
          marginTop: "80px",
        },
      });
    }
  };

  const handleHeaderTextClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  const navigateToSocials = () => {
    const targetRoute = location.pathname === "/" ? "/socials" : "/";
    navigate(targetRoute);
  };

  return (
    <header
      className="header"
      style={{
        backdropFilter: `blur(${headerBlur}px)`,
      }}
    >
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <div className="header-left">
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={handleDarkModeToggle}
          size={24}
          sunColor="white"
          moonColor="white"
        />
      </div>
      <h1
        className="headertext"
        style={{
          transform: `scale(${headerTextScale})`,
          opacity: headerTextOpacity,
        }}
        onClick={handleHeaderTextClick}
      >
        {currentText}
        <span className="cursor">|</span>
      </h1>
      <div className="header-right">
        {clickCount >= 3 && (
          <button onClick={navigateToSocials}>
            {location.pathname === "/" ? "???" : "Home"}
          </button>
        )}
        <button
          onClick={() =>
            (window.location.href = "http://discord.cutecraft.net")
          }
        >
          CuteCraft.net
        </button>
        <button onClick={() => (window.location.href = "https://biogg.net")}>
          Biogg.net
        </button>
      </div>
      <Toaster />
    </header>
  );
};

export default Header;
