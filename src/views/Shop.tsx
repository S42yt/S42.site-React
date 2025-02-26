import React, { useEffect, useState } from "react";
import Layout from "../utils/Layout";
import useDocumentTitle from "../hooks/useDocumentTitle";
import ScrollAnimation from "../utils/ScrollAnimation";
import "../styles/Shop.css";

interface DownloadItem {
  name: string;
  path: string;
  icon?: string;
  github?: string;
  description?: string;
}

const Shop: React.FC = () => {
  useDocumentTitle("Shop");
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);

  useEffect(() => {
    const downloadItems: DownloadItem[] = [
      {
        name: "Trade Cycle PaperMC Plugin",
        path: "/assets/downloads/tradecycler-1.3.jar",
        icon: "/assets/downloads/icons/trade_cycle.png",
        github: "https://github.com/S42yt/TradeCycle",
        description: "TradeCycle is a Paper plugin written in Kotlin to cycle through Villager trades."
      }
    ];
    setDownloads(downloadItems);
  }, []);

  const handleDownload = (item: DownloadItem) => {
    window.location.href = item.path;
  };

  return (
    <Layout>
      <div className="shop">
        <ScrollAnimation>
        <div style={{ height: "20vh" }}></div>
          <div className="shop-header">
            <h1>Downloads</h1>
            <p>Here you can find all my public projects available for download.</p>
          </div>
          <div className="downloads-grid">
            {downloads.map((item, index) => (
              <div key={index} className="download-item">
                {item.icon && <img src={item.icon} alt={item.name} className="download-icon" />}
                <h3>{item.name}</h3>
                {item.description && <p className="download-description">{item.description}</p>}
                <div className="download-buttons">
                  <button onClick={() => handleDownload(item)} className="download-button">
                    Download
                  </button>
                  {item.github && (
                    <a href={item.github} target="_blank" rel="noopener noreferrer" className="github-link">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div style={{ height: "20vh" }}></div>
        </ScrollAnimation>
      </div>
    </Layout>
  );
};

export default Shop;