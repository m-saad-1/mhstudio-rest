import type { ReactNode } from "react";

type SectionHeadingProps = { eyebrow: string; title: string; description?: string; align?: "left" | "center"; action?: ReactNode };

export function SectionHeading({ eyebrow, title, description, align = "left", action }: SectionHeadingProps) {
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${align === "center" ? "mx-auto items-center text-center" : "items-start text-left"}`}>
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-4">
        <h2 className="type-section text-foreground">{title}</h2>
        {description && <p className="reading-copy text-base leading-relaxed text-foreground-body">{description}</p>}
      </div>
      {action && <div className="pt-1">{action}</div>}
    </div>
  );
}
