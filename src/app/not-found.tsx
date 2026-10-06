import Link from "next/link";

export default function NotFound() {
  return (
    <section className="content-shell flex min-h-[70vh] items-center justify-center section-space">
      <div className="surface-card max-w-2xl p-10 text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-5 text-[2.2rem] font-semibold leading-[1.1] text-foreground sm:text-[3rem]">
          This page drifted out of the MhStudio route map.
        </h1>
        <p className="mt-4 text-base leading-[1.7] text-foreground-body sm:text-lg">
          Head back to the homepage or portfolio to continue exploring the site.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link href="/" className="button-primary px-6 text-sm">
            Go Home
          </Link>
          <Link href="/templates" className="button-secondary px-6 text-sm">
            View Work
          </Link>
        </div>
      </div>
    </section>
  );
}
