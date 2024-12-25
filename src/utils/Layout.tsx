import React, { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Toaster />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
