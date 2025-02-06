import React, { ReactNode } from "react";

import "../styles/global.css";
import Helmet from "./helmet";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div>
    <Helmet />
    {children}
  </div>
);

export default Layout;
