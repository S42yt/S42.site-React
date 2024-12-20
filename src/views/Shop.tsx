import React from "react";
import ShopItems from "../components/shopitems";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/Shop.css";

const Shop: React.FC = () => {
  return (
    <div className="shop-container">
        <Header />
        <div style={{ height: "10vh" }}></div>
        <p>Welcome to the S42 shop. Here you can download Project and Games or buy Games or Projects</p>
      <h1>Coming Soon</h1>
      <ShopItems />
      <div style={{ height: "50vh" }}></div>
    <Footer />
    </div>
  );
};

export default Shop;