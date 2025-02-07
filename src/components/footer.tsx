import { cn } from "@/lib/utils";
import { Link } from "gatsby";
import React from "react";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={cn(
        "pt-2 pb-5 px-8 cyber-razor-top border-t border-[#091e30] bg-[#091e30] before:bg-[#091e30] text-muted-foreground flex items-center justify-between gap-4",
        className
      )}
    >
      <Link to="/" className="font-brand">
        &lt;NE&gt;
      </Link>
      <div className="flex items-center justify-center gap-4 text-sm">
        <Link to="/about">About</Link>
        <Link to="/credits">Credits</Link>
      </div>
      <span className="text-sm">&copy; 2025</span>
    </footer>
  );
};
