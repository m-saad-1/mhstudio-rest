import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "section";
  id?: string;
};

export function Reveal({
  children,
  className = "",
  as = "div",
  id,
}: RevealProps) {
  const Component = as;

  return (
    <Component id={id} className={className}>
      {children}
    </Component>
  );
}
