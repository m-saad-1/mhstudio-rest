import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Check from "lucide-react/dist/esm/icons/check";
import ChevronRight from "lucide-react/dist/esm/icons/chevron-right";
import { MockupFrame } from "@/components/marketing/mockup-frame";
import { Reveal } from "@/components/ui/reveal";
import { portfolioItems } from "@/data/site-content";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((entry) => entry.slug === slug);

  if (!item) {
    return {
      title: "Case Study",
    };
  }

  return {
    title: `${item.title} Case Study`,
    description: item.shortDescription,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const item = portfolioItems.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <section className="content-shell section-space">
        <div className="space-y-8">
          <Reveal className="space-y-5">
            <div className="flex flex-wrap items-center gap-3 text-sm text-foreground-muted">
              <Link href="/templates" className="transition-colors duration-300 hover:text-foreground">
                Work
              </Link>
              <ChevronRight className="h-4 w-4 text-accent" />
              <span>{item.title}</span>
            </div>
            <span className="eyebrow">{item.category} Case Study</span>
            <h1 className="max-w-[12ch] text-[2.2rem] font-semibold leading-[1.1] text-foreground sm:text-[3.2rem] lg:text-[4.2rem]">
              {item.title}
            </h1>
            <p className="max-w-[700px] text-base leading-[1.7] text-foreground-body sm:text-lg">
              {item.overview}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={item.liveHref} target="_blank" rel="noopener noreferrer" className="button-primary px-6 text-sm">
                Live Demo
              </Link>
              <Link href="/contact" className="button-secondary px-6 text-sm">
                Start Similar Project
              </Link>
            </div>
          </Reveal>
          <Reveal delayMs={100}>
            <MockupFrame item={item} compact />
          </Reveal>
        </div>
      </section>

      <section className="section-space section-divider">
        <div className="content-shell grid gap-6 lg:grid-cols-2">
          <Reveal className="surface-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Challenge</p>
            <p className="mt-4 text-base leading-[1.7] text-foreground-body sm:text-lg">{item.challenge}</p>
          </Reveal>
          <Reveal delayMs={80} className="surface-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Goals</p>
            <div className="mt-4 grid gap-3">
              {item.goals.map((goal) => (
                <div key={goal} className="flex items-center gap-2 text-sm text-foreground-body sm:text-base">
                  <Check className="h-4 w-4 text-accent" />
                  <span>{goal}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={120} className="surface-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Design</p>
            <p className="mt-4 text-base leading-[1.7] text-foreground-body sm:text-lg">{item.design}</p>
          </Reveal>
          <Reveal delayMs={160} className="surface-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Development</p>
            <p className="mt-4 text-base leading-[1.7] text-foreground-body sm:text-lg">{item.development}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-space section-divider">
        <div className="content-shell grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="surface-card p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Features</p>
            <div className="mt-5 grid gap-3">
              {item.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-foreground-body sm:text-base">
                  <Check className="h-4 w-4 text-accent" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Technologies</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground-body"
                >
                  {technology}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delayMs={120} className="grid gap-6">
            <div className="surface-card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Screenshots</p>
              <p className="mt-4 text-sm leading-[1.7] text-foreground-body sm:text-base">
                Desktop and mobile previews are presented in the portfolio card system to keep the project feeling like a product launch, not a flat thumbnail.
              </p>
            </div>
            <div className="surface-card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Performance</p>
              <p className="mt-4 text-base leading-[1.7] text-foreground-body sm:text-lg">{item.performance}</p>
            </div>
            <div className="surface-card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Results</p>
              <div className="mt-4 grid gap-3">
                {item.results.map((result) => (
                  <div key={result} className="flex items-center gap-2 text-sm text-foreground-body sm:text-base">
                    <Check className="h-4 w-4 text-accent" />
                    <span>{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
