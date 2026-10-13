# Loading performance improvements

## Scope and baseline

This work builds on the completed light theme. The comparison baseline is commit `92c7340`, with its source and production build preserved outside the application workspace. Marketing copy, prices, routes, form submission contracts, and the existing theme remain intact.

The initial diagnostic used a 375px mobile viewport at DPR 3, 150ms simulated latency, 1.6Mbps downstream, and 4× CPU slowdown. The hero image response took about 2.3 seconds to begin arriving; the first page also downloaded image variants, SDK code, and route prefetches. A desktop diagnostic recorded 57 resource requests during the measurement window. These diagnostics identify opportunities; the final comparison will use repeated matched production measurements.

## Changes and root causes

### Prebuilt responsive images

Critical images used Next's request-time image optimizer. A new deployment or uncached size can require decoding/resizing/encoding before the first image response. Native lazy loading also brings nearby service cards into the initial download window.

`scripts/generate-responsive-images.mjs` now generates AVIF and WebP variants ahead of time for the homepage/service hero assets, the shared logo, and WhatsApp icon. The original files remain unchanged. Asset URLs contain a hash of the original bytes and encoding settings, so the existing immutable static-asset cache policy is safe for these variants.

The server-rendered `ResponsiveImage` component chooses variants with `picture`, `srcset`, and accurate `sizes`. Critical images have explicit AVIF preloads and high fetch priority; other previews remain lazy with low priority. Intrinsic dimensions and existing aspect-ratio containers prevent layout jumps. The logo is composed on the server and passed into the existing client header, keeping the generated asset manifest out of its client dependency graph.

The pipeline runs before `npm run dev` and `npm run build`. It reuses unchanged files; `npm run images:optimize` explicitly regenerates variants after source changes. Generated variants and the manifest are committed so deployment can serve them directly. Source photos/screenshots are retained for original-image links and future regeneration.

See the [Next.js image reference](https://nextjs.org/docs/app/api-reference/components/image) for responsive sizing and the request-time AVIF encoding tradeoff. This implementation moves that encoding work into asset preparation for the critical images.

### Navigation prefetching

Viewport-based prefetching downloaded other pages and their JavaScript while the current page was still loading. `IntentLink` retains Next navigation and enables prefetch on hover, keyboard focus, or touch intent. Existing destinations, event handlers, and tracking labels are preserved. Explicit `prefetch` overrides remain supported.

This follows the [Next.js guidance on prefetching](https://nextjs.org/docs/app/guides/prefetching). First navigation without prior intent can require a route request; this trades speculative downloads for more bandwidth available to the page being read, especially on mobile.

### Analytics and form SDKs

- Analytics providers are dynamically imported after the existing timer/interaction request, page load, and an idle opportunity. The integration still uses `GoogleAnalytics` from `@next/third-parties/google` and the Vercel provider. Unneeded initial analytics preconnects were removed.
- A small event queue retains early CTA and form events until the provider connects. Event names, categories, labels, GA ID, and form events are preserved. Sessions that end before the deferred provider loads can remain unobserved; deferring analytics already had this tradeoff, and loading can now occur later on slow connections.
- EmailJS is imported on first form focus and reused at submission. Fields and validation remain server-rendered and immediately visible. Submission still awaits the SDK and uses the original service/template/public key, recipient, payload, error/retry, and success/reset behavior.

### Smaller secondary image requests

Several service screenshots used `fill` without `sizes`, making the browser assume a full viewport even for small phone previews and half-width panels. Added layout-specific size hints and low fetch priority to those images. The Next image configuration now includes a 192px thumbnail candidate, a 1536px candidate, and the existing logo marquee's requested quality 50 alongside quality 75.

Zoomable previews retain a full-resolution variant through `getImageProps`. It is requested when the zoom opens, so reducing preview sizes does not reduce the detail available in the enlarged view.

### Local font delivery

The existing Inter Latin variable font is now served from a content-hashed local URL. The font bytes, weight range, display-swap behavior, and Arial fallback metrics are preserved. The font's OFL license is included in `public/fonts/OFL.txt`. Builds no longer need to download this font from Google. An early font preload was tried and removed because the heavily throttled mobile measurements regressed. The final version retains CSS font discovery and immediately readable fallback text.

Image preloads also use React's supported server rendering API, so responsive source selection is available in the document head. See the [React preload reference](https://react.dev/reference/react-dom/preload).

### Simpler homepage layout

A Chrome rendering trace found multi-second layout passes at 4x CPU slowdown. The homepage used a tall flex column and CSS `order` for ten sections, inside the shared flex page shell. An isolated experiment showed that ordinary block flow reduced the layout cost.

The sections are now written in their previous visual order and use normal block layout. Their text, spacing, and visible order are preserved; keyboard and document order now match the screen. No content-visibility placeholders, hidden content, deferred text, or scroll animation were introduced. Experiments that reduced downloads without improving mobile paint were rejected before publication.

## Rendering safeguards

`Reveal` remains immediate. The hero remains a static server component. FAQ and mockup content retain server rendering and their existing dynamic-import boundaries. No page content is hidden until hydration, scrolling, or image load. No dependency upgrade or new runtime package is required.

## Verification

Verified on 14 October 2026 against the production build, using Chrome and the light-theme baseline `92c7340`.

### Matched homepage measurements

Three samples per version and viewport, alternating before/after order. Each sample used a fresh browser with its cache disabled; server image caches were warmed equally. Mobile: 375px, DPR 3, 150ms latency, 1.6Mbps downstream, 4x CPU slowdown. Desktop: 1440px, DPR 1, 40ms latency, 10Mbps downstream, normal CPU. Google/Vercel script requests were blocked equally. The observation window ended two seconds after page load.

| Median | Mobile before | Mobile after | Desktop before | Desktop after |
| --- | ---: | ---: | ---: | ---: |
| Resource body bytes | 605,873 | 492,767 | 638,671 | 411,832 |
| Document + resource body bytes | 637,269 | 525,361 | 670,067 | 444,426 |
| Resource requests | 21 | 20 | 57 | 23 |
| First contentful paint | 7,436ms | 7,388ms | 1,144ms | 1,136ms |
| Largest contentful paint | 7,612ms | 7,388ms | 1,176ms | 1,168ms |
| Cumulative layout shift | 0.00027 | 0.00027 | 0.00249 | 0.00249 |

The measured reduction is **18.7% in mobile resource bytes and 35.5% on desktop**. Including the document, the reductions are 17.6% and 33.7%. The mobile hero variant fell from 63,866 to 49,691 bytes. Critical native variants also avoid request-time encoding on a fresh deployment.

Paint times were approximately unchanged, with a small improvement in median mobile LCP. These samples do not establish a meaningful CPU or interaction-speed improvement. Summed long-task excess over the observation window varied and slightly increased in the final medians (mobile 2,915 to 3,075ms; desktop 215 to 223ms). This custom statistic is **not Lighthouse TBT or INP**. The results support smaller downloads, reduced speculative desktop requests, and removal of critical image encoding work; they do not support a claim that every device paints much faster.

Raw samples and conditions: [benchmark.json](Performance-Evidence/benchmark.json), [summary](Performance-Evidence/benchmark-summary.json). Actual mobile hardware and deployed network/CDN behavior still need field measurement. Lighthouse did not produce a valid score because its separate Chrome session encountered a local interstitial; no Lighthouse score is claimed.

### Functional and rendering audit

- Production build and TypeScript passed; all 30 generated outputs completed. ESLint and Git whitespace checks passed.
- Image preparation is idempotent: ten sources, 108 variants, zero regenerated files on the repeated run. No runtime dependencies or lockfile changes were required.
- All 23 pages and both expected 404 states were checked at 375px and 1440px: **50 route/viewport checks**, zero page-level overflow, broken/unloaded visible images, browser exceptions, or axe WCAG A/AA violations. See [mobile](Performance-Evidence/mobile-routes.json) and [desktop](Performance-Evidence/desktop-routes.json).
- All 23 pages additionally rendered their main heading without JavaScript; FAQ answers remain in the server HTML.
- Mobile navigation, focus trapping/return, skip link, all 24 pricing dialogs, billing/platform prices, FAQ keyboard behavior, reduced motion, and both forms' mocked failure/retry/pending/success/reset states were exercised. EmailJS requests were intercepted; no real inquiry was sent.
- An interrupted interaction run recorded two zoom failures. Both passed focused image-decoding, accessibility, and Escape rechecks; all five zoom pages also passed Enter/Escape/focus-return checks. The initial record is retained alongside the rechecks.
- Loading checks verified zero initial route prefetches, hover/focus/touch prefetch, early CTA event delivery after analytics loads and navigation, EmailJS loading on form focus, one critical image request per chosen variant, immutable cache headers, WebP decoding, and full-resolution zoom loading on intent.
- Source checks confirmed unchanged content/pricing data, route inventory, EmailJS payloads/events, font bytes, original public assets, `Reveal`, FAQ/mockup dynamic boundaries, and static hero rendering. See [source checks](Performance-Evidence/source-checks.json).

The production preview runs at `http://localhost:3002`. Publication consists of the GitHub push; this audit does not claim that a hosting deployment has completed.
