# Prompt: Fix Lighthouse Performance Issues on mhstudios.online

Paste this whole file into your coding agent (Claude Code, Cursor, etc.) at the root of the website repo.

---

## Role

You are a senior Next.js performance engineer. Fix the Lighthouse issues listed below for **https://www.mhstudios.online** without changing the visual design, content, or SEO/accessibility behavior.

## Context (from the Lighthouse report)

- Test profile: Lighthouse 13.5, **Moto G Power emulation, Slow 4G, initial page load**.
- Stack signals: Next.js (`/_next/image`, `data-nimg`, hashed chunks), Tailwind-style classes, Google Analytics via gtag (`G-G1NMQYD8EJ`).
- Category scores: Accessibility 100, Best Practices 100, SEO 100, **Agentic Browsing 75**.
- The Performance gauge shows 100 but the metrics do not match it. Treat the metrics below as the truth:

| Metric | Current | Target |
|---|---|---|
| FCP | 1.1 s | ≤ 1.0 s |
| **LCP** | **6.1 s** | **≤ 2.5 s (aim ≤ 2.0 s)** |
| TBT | 60 ms | ≤ 50 ms |
| CLS | 0 | 0 (do not regress) |
| **Speed Index** | **4.4 s** | **≤ 3.4 s** |

- **LCP element:** the hero image `Device-showcase.*.avif` ("Device showcase featuring MhStudio website mockups…"), `width=1616 height=973`, `fetchpriority="high"`, `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 900px, 1200px"`, displayed with `max-h-[clamp(15rem,50vw,40rem)] object-contain`.
- **LCP breakdown:** TTFB 0 ms, resource load delay 140 ms, resource load duration 370 ms, **element render delay 2,560 ms**. The image is downloaded quickly but painted very late. This is the main problem.

## Ground rules

1. First check the Next.js version, router type (App/Pages), and `next.config.*`, then apply only what that version supports.
2. Make one small commit per task below, in the order given.
3. Do not remove analytics, only defer it. Do not change copy, layout, or colors.
4. Never fake or hard-code metrics. Report real before/after numbers.
5. Do not lower Accessibility, SEO, or Best Practices below 100.

---

## Task 1: Fix the 2,560 ms LCP render delay (highest priority)

The image arrives at ~510 ms but is not painted until much later. Find out why and fix it.

Investigate, in this order:

1. **Hidden-until-hydrated hero.** Search the hero section and its parents for: `opacity-0`, `initial={{ opacity: 0 }}` (framer-motion), `invisible`, `hidden`, AOS/GSAP/`animate-*` entrance classes, `useEffect` + `mounted` state gates, `dynamic(..., { ssr: false })`, or `Suspense` fallbacks around the hero. Chrome does not count an element as LCP until it is actually visible, so any of these delays LCP until JS runs.
2. **Main-thread blocking before first paint:** large client components at the top of the tree, heavy work in `useLayoutEffect`, or big hydration cost.
3. **Render-blocking CSS and fonts** (see Task 3).

Fix:

- Make the hero image visible in the server-rendered HTML with **no opacity/visibility entrance animation on the LCP element or its ancestors**. If an entrance animation is required, animate only `transform` on a different element, or start at full opacity.
- Remove `mounted`/client-only gating from the hero. Render it as a Server Component where possible.
- Keep `priority` (or `preload` on Next 16+) and `fetchPriority="high"` on this one image only. Ensure no other image on the page is `priority`.
- Do not lazy-load the hero image.

**Done when:** the LCP breakdown shows render delay under ~300 ms.

## Task 2: Improve image delivery (est. savings 276 KiB)

1. The image is constrained by `max-h-[clamp(15rem,50vw,40rem)]` with `object-contain`, so its real rendered width is smaller than `sizes` claims (at ~412 px viewport the height cap is ~240 px, so rendered width is ~400 px, not 100vw). Measure the actual rendered width at 360, 412, 768, 1024, and 1440 px and rewrite `sizes` to match, for example a calc based on the height cap × aspect ratio (1616/973 ≈ 1.66).
2. Set `quality` to about 60–70 for this AVIF and compare visually. Keep AVIF as the first format in `images.formats` (`['image/avif', 'image/webp']`).
3. Trim `images.deviceSizes` / `images.imageSizes` in `next.config.*` so Next does not pick an oversized candidate for mobile.
4. Check that the source file is not larger than needed (max useful width ≈ 1600 px). Re-export the source if it has excess metadata or padding around the mockups.
5. Keep explicit `width`/`height` so CLS stays 0.

**Done when:** the hero image transferred on the mobile profile is roughly 60–90 KiB or less, and the "Improve image delivery" insight is cleared or much smaller.

## Task 3: Remove render-blocking CSS (est. savings 380 ms)

Blocking file: `/_next/static/css/81b85a833dfa3ece.css` (16.2 KiB, ~190 ms on Slow 4G).

- If Next.js ≥ 15, enable `experimental: { inlineCss: true }` in `next.config.*` so critical CSS is inlined and the request leaves the critical path. Verify it works with the installed version and does not break styling.
- If that is not available, reduce the stylesheet: confirm Tailwind `content` globs are tight, remove unused global CSS and unused component-library styles, and avoid importing CSS in multiple layouts.
- Load fonts with `next/font` (`display: 'swap'`, subset only needed weights). No external font `<link>` tags.

**Done when:** "Render-blocking requests" no longer lists the CSS file, or its savings drop to near zero.

## Task 4: Defer Google Tag Manager / gtag (172.5 KiB, ~73.5 KiB unused)

- Replace any manual gtag `<script>` with `GoogleAnalytics` from `@next/third-parties/google` (`gaId="G-G1NMQYD8EJ"`) in the root layout, or use `next/script`.
- Go one step further: load the script on **idle or first user interaction** (`requestIdleCallback` with a timeout fallback, or on first `pointerdown`/`scroll`/`keydown`) instead of during the initial load. Keep `strategy="lazyOnload"` at minimum.
- Keep the existing `preconnect` to `googletagmanager.com` only if the script still loads early. If it is deferred to interaction, remove the preconnect.
- Confirm pageviews still register in GA4 Realtime.

## Task 5: Cut first-party unused/legacy JavaScript

Files flagged: `chunks/794-c9f1c83907e70838.js` (58.9 KiB, 23.4 KiB unused; 11.7 KiB legacy polyfills) and `chunks/4bd1b696-*.js` (62.5 KiB, 21.5 KiB unused).

1. **Legacy JS:** the chunk ships polyfills for `Array.prototype.at`, `flat`, `flatMap`, `Object.fromEntries`, `Object.hasOwn`, `String.prototype.trimStart`, `trimEnd`. Add a modern `browserslist` to `package.json`, for example `["chrome >= 111", "edge >= 111", "firefox >= 111", "safari >= 16.4"]`. Then run a bundle analysis (`@next/bundle-analyzer`) to find which dependency contributes the polyfills. If a third-party package bundles its own, upgrade it or replace it.
2. **Unused JS:** in the bundle analyzer, find the largest client-side dependencies on the home page. Then:
   - Convert components that do not need interactivity from Client to Server Components (remove unnecessary `"use client"`).
   - Lazy-load below-the-fold sections with `next/dynamic` (keep SSR on unless the component truly cannot render on the server).
   - If framer-motion is used, switch to `LazyMotion` with `domAnimation` and `m.*` components, or replace simple animations with CSS.
   - Import icon/util libraries by named path, not whole packages.
3. Do not touch `4bd1b696-*.js` directly if it is the React/Next runtime. Just make sure page-specific code is not inflating it.

**Done when:** first-party JS transfer on the home page drops noticeably (target: at least 30–40 KiB less), "Legacy JavaScript" is cleared, and TBT stays ≤ 60 ms.

## Task 6: Remove the forced reflow (37 ms)

Search client code for layout reads that run right after DOM/style writes: `offsetWidth`, `offsetHeight`, `clientWidth`, `getBoundingClientRect()`, `scrollHeight`, `getComputedStyle()`, especially inside `useEffect`/`useLayoutEffect`, scroll handlers, carousel/marquee/masonry code, and animation libraries.

Fix by batching reads before writes, using `ResizeObserver` or `IntersectionObserver` instead of measuring in effects, and wrapping unavoidable reads in `requestAnimationFrame`. If the source is a third-party library, lazy-load that component.

## Task 7: Agentic Browsing score (75 → as high as possible)

The report does not show which Agentic Browsing audits failed, so do not guess.

1. Run Lighthouse 13.x against the production URL with JSON output (`npx lighthouse https://www.mhstudios.online --output=json --output=html --output-path=./lh-before`).
2. In the JSON, find the Agentic Browsing category, list every audit that is not passing, and show me that list.
3. Fix each failing audit that can be fixed in code (typically semantic HTML, clear accessible names/labels on interactive elements, stable and descriptive links/buttons, structured data, machine-readable metadata). For any audit that needs a product decision from me, list it and ask instead of inventing an implementation.

---

## Verification (required before you finish)

1. `next build` and confirm no errors or new warnings. Run `next start` locally for a sanity check.
2. Run Lighthouse **3 times** on the deployed or production-like build (mobile, default Slow 4G throttling) and report the **median** for FCP, LCP, TBT, CLS, Speed Index, and all category scores.
3. Confirm the visual result is unchanged at 360, 412, 768, and 1440 px widths, and that GA4 still records a pageview.
4. Provide a before/after table:

| Metric | Before | After |
|---|---|---|
| FCP | 1.1 s | |
| LCP | 6.1 s | |
| TBT | 60 ms | |
| CLS | 0 | |
| Speed Index | 4.4 s | |
| Agentic Browsing | 75 | |

## Output format

- Start with a one-paragraph root-cause summary of why the LCP render delay was 2,560 ms.
- Then list each task as: **what changed → files touched → measured effect**.
- End with anything you could not fix and why.