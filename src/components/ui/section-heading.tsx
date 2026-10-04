import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex max-w-[700px] flex-col gap-5 ${alignment}`}>
      <span className="eyebrow">{eyebrow}</span>
      <div className="space-y-4">
        <h2 className="text-[2rem] font-semibold leading-[1.1] text-foreground sm:text-[2.6rem] lg:text-[3rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-[700px] text-sm leading-[1.7] text-foreground-body sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="pt-1">{action}</div> : null}
    </div>
  );
}
