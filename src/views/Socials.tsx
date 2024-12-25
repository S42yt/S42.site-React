import React, { useEffect } from "react";
import SocialReadme from "../components/socialreadme";
import "../styles/Socials.css";
import Layout from "../utils/Layout";

const Socials: React.FC = () => {
  useEffect(() => {
    document.title = "Socials";
  }, []);

  return (
    <Layout>
      <div className="socials-container">
        <div className="socials-content">
          <p>
            Welcome to my Socials!. Here you can see on which Platforms i am
            Active.
          </p>
        </div>
        <SocialReadme />
        <div style={{ height: "20vh" }}></div>
      </div>
    </Layout>
  );
};

export default Socials;
