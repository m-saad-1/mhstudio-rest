import Link from "next/link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="content-shell pt-16 pb-6 sm:pt-24 sm:pb-8 lg:pt-32 lg:pb-10">
      <div className="surface-card relative overflow-hidden p-8 sm:p-10 lg:p-14">
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.2)_0%,_transparent_70%)]" />
        <div className="relative flex max-w-[700px] flex-col gap-6">
          <span className="eyebrow w-fit">{eyebrow}</span>
          <div className="space-y-4">
            <h1 className="text-[1.8rem] font-semibold leading-[1.15] text-foreground sm:text-[2.6rem] lg:text-[3.4rem]">
              {title}
            </h1>
            <p className="text-base leading-[1.7] text-foreground-body sm:text-lg">
              {description}
            </p>
          </div>
          {(primaryCta || secondaryCta) ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Link href={primaryCta.href} className="button-primary px-6 text-sm">
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link href={secondaryCta.href} className="button-secondary px-6 text-sm">
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
