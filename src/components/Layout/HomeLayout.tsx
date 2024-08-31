import React from "react";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="">
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
