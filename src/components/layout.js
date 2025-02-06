import React from "react";

import "../styles/global.css";
import Helmet from "./helmet";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div>
    <Helmet />
    {children}
    <Footer />
  </div>
);

export default Layout;
