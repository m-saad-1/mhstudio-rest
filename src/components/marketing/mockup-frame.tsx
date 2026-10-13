"use client";

import Image from "next/image";
import { TrackedLink } from "@/components/ui/tracked-link";
import type { PortfolioItem } from "@/data/site-content";

const blurData =
  `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="10"><rect width="16" height="10" fill="#f5f5f4"/></svg>')}`;

type MockupFrameProps = {
  item: PortfolioItem;
  compact?: boolean;
};

export function MockupFrame({ item, compact = false }: MockupFrameProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-card border border-border-strong bg-surface transition duration-200 hover:border-border-strong hover:shadow-soft">
      {/* Visual Asset (The Hook - Interactive Clickable Image) */}
      <TrackedLink
        href={item.liveHref}
        eventName="click_portfolio_image"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit website for ${item.title}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-surface-secondary cursor-pointer focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-inset"
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover object-top transition-transform duration-200"
          sizes={compact ? "(max-width: 768px) 100vw, 398px" : "(max-width: 1024px) 100vw, 398px"}
          placeholder="blur"
          blurDataURL={blurData}
        />

      </TrackedLink>

        {/* Content Hierarchy */}
        <div className="flex flex-1 flex-col p-5">
          <div>
            {/* Category Tag */}
            <span className="mb-1 block text-sm font-semibold uppercase tracking-wider text-accent-text">
              {item.category}
            </span>

            {/* Project Title */}
            <h3 className="text-xl font-semibold text-foreground">
              {item.title}
            </h3>

            {/* Short Description */}
            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-foreground-muted">
              {item.shortDescription}
            </p>
          </div>

          {/* Call-to-Action */}
          <div className="mt-auto pt-4">
            <div className="flex items-center gap-3 border-t border-border-strong pt-3">
              <TrackedLink
                href={item.liveHref}
                eventName="click_portfolio_live"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-sm font-medium text-accent-text transition-colors hover:underline"
              >
                Visit Website
              </TrackedLink>
            </div>
          </div>
      </div>
    </div>
  );
}
