import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SocialReadme from "../components/socialreadme";
import { Toaster } from "react-hot-toast";
import "../styles/Socials.css";

const Socials: React.FC = () => {
  useEffect(() => {
    document.title = "S42.site | Socials";
  }, []);

  return (
    <div className="socials-container">
      <Header />
      <Toaster />
      <div className="socials-content">
        <p>
          Welcome to my Socials!. Here you can see on which Platforms i am
          Active.
        </p>
      </div>
      <SocialReadme />
      <div style={{ height: "20vh" }}></div>
      <Footer />
    </div>
  );
};

export default Socials;
