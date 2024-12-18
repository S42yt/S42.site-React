import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";
import "../styles/NotFound.css";

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  return (
    <div className="notfound-container">
      <Header />
      <Toaster />
      <div className="notfound-content">
        <h1 className="notfound-header">404 - Page Not Found :( </h1>
        <p>Sorry, the page you are looking for does not exist. damn</p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
