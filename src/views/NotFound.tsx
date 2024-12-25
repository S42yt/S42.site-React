import React from "react";
import "../styles/NotFound.css";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Layout from "../utils/Layout";

const NotFound: React.FC = () => {
  useDocumentTitle("404 - Page Not Found");

  return (
    <Layout>
      <div className="notfound-container">
        <div className="notfound-content">
          <h1 className="notfound-header">404 - Page Not Found :( </h1>
          <p>Sorry, the page you are looking for does not exist. damn</p>
        </div>
        <div style={{ height: "20vh" }}></div>
      </div>
    </Layout>
  );
};

export default NotFound;
