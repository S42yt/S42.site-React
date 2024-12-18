import React from "react";
import "./styles/App.css";
import Readme from "../components/readme";
import Header from "../components/header";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <div className="portfolio">
      <Header />
      <Toaster />
      <section className="portfolio-content">
        <p>
          Welcome to my portfolio! Here you will find my projects and
          experiences.
        </p>
        <Readme />
        <div style={{ height: "20vh" }}></div>
      </section>
      <Footer />
    </div>
  );
};

export default App;