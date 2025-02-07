import React, { ReactNode } from "react";

import "../styles/global.css";
import "../styles/cyberpunk.css";
import Helmet from "./helmet";
import { cn } from "@/lib/utils";
import { Footer } from "./footer";

interface LayoutProps {
  className?: string;
  children: ReactNode;
  theme?: string;
}

const Layout: React.FC<LayoutProps> = ({ className, children, theme }) => (
  <main className="min-h-screen flex flex-col justify-between">
    <div className={cn("w-lg mx-auto pt-16 px-4 md:px-0 flex-grow", className)}>
      <Helmet theme={theme} />
      {children}
    </div>
    <Footer />
  </main>
);

export default Layout;
