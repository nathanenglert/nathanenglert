import React from "react";
import { Link } from "gatsby";
import { cn } from "@/lib/utils";

export const GlitchLinkButton = ({
  label,
  glitchLabel,
  to,
  className,
  tag,
  isRight = false,
}: {
  label: string;
  to: string;
  glitchLabel?: string;
  tag: string;
  className?: string;
  isRight?: boolean;
}) => {
  return (
    <Link
      to={to}
      className={cn(
        "cyber-button text-sm px-12 py-2 after:bg-accent text-accent-foreground font-brand",
        isRight && "cyber-button-right",
        className
      )}
    >
      {label}
      <span className="cyber-button-glitch text-base text-muted-foreground px-12 py-0 [text-shadow:_2px_2px_0_var(--tw-shadow-color)] shadow-accent-foreground">
        {glitchLabel || label}
      </span>
      <span className="cyber-button-tag font-mono text-muted-foreground">
        {tag}
      </span>
    </Link>
  );
};
