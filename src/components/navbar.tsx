import React from "react";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => (
  <nav className={`p-2 bg-gray-200 ${className}`}>
    <a className="text-xs" href="/">
      Main site is under construction!
    </a>
  </nav>
);

export default Navbar;
