import React from "react";
import Layout from "../utils/Layout";
import Header from "../components/header";
import Footer from "../components/footer";
import useDocumentTitle from "../hooks/useDocumentTitle";
import "../styles/Shop.css";

const Shop: React.FC = () => {
  useDocumentTitle("Shop");

  return (
    <Layout>
      <div className="shop slide-in">
        <div style={{ height: "20vh" }}></div>
      </div>
    </Layout>
  );
};

export default Shop;
