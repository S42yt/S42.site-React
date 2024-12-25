import React from "react";
import Readme from "../components/projectreadme";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Layout from "../utils/Layout";
import "../styles/Projects.css";

const Projects: React.FC = () => {
  useDocumentTitle("Projects");

  return (
    <Layout>
      <div>
        <Readme />
        <div style={{ height: "20vh" }}></div>
      </div>
    </Layout>
  );
};

export default Projects;
