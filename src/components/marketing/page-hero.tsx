import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({ eyebrow, title, description, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="content-shell pb-6 pt-8 sm:pb-8 sm:pt-12 lg:pt-16">
      <div className="surface-card p-6 sm:p-10 lg:p-12">
        <div className="flex max-w-3xl flex-col gap-6">
          <span className="eyebrow">{eyebrow}</span>
          <div className="space-y-4">
            <h1 className="type-display text-foreground">{title}</h1>
            <p className="type-lead reading-copy text-foreground-body">{description}</p>
          </div>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {primaryCta && <Link href={primaryCta.href} className="button-primary">{primaryCta.label}</Link>}
              {secondaryCta && <Link href={secondaryCta.href} className="button-secondary">{secondaryCta.label}</Link>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
