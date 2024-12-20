import React, { useEffect, useState } from "react";
import "../styles/ShopItems.css";

interface ShopItem {
  item_name: string;
  item_image: string;
  item_description: string;
  item_price: string;
}

const ShopItems: React.FC = () => {
  const [shopItems, setShopItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    fetch("./shopItems.json")
      .then((response) => response.json())
      .then((data) => setShopItems(data))
      .catch((error) => console.error("Error fetching shop items:", error));
  }, []);

  return (
    <div className="shop-items">
      {shopItems.map((item, index) => (
        <div key={index} className="shop-item">
          <img src={item.item_image} alt={item.item_name} className="shop-item-image" />
          <div className="shop-item-name">???</div>
          <div className="shop-item-description">???</div>
          <div className="shop-item-price">???</div>
        </div>
      ))}
    </div>
  );
};

export default ShopItems;