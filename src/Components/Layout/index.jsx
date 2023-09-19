import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-20 flex-wrap">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
