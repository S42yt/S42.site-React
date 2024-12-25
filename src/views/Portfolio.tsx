import React, { useEffect } from "react";
import "../styles/Portfolio.css";
import Readme from "../components/readme";
import Layout from "../utils/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";

const App: React.FC = () => {
  useDocumentTitle("Portfolio");

  return (
    <Layout>
      <div className="portfolio">
        <section className="portfolio-content">
          <p>
            Welcome to my portfolio! Here you will find my projects and
            experiences.
          </p>
          <Readme />
          <div style={{ height: "20vh" }}></div>
        </section>
      </div>
    </Layout>
  );
};

export default App;
