# Implementation Plan: Next.js Performance Optimization (mhstudios.online)

## Objective
Fix Lighthouse performance issues based on the provided metrics and target goals, without altering visual design, content, or SEO/accessibility behavior.

## Target Metrics (Moto G Power, Slow 4G)
- **FCP:** 1.1s → ≤ 1.0s
- **LCP:** 6.1s → ≤ 2.5s (aim ≤ 2.0s)
- **TBT:** 60ms → ≤ 50ms
- **CLS:** 0 → 0
- **Speed Index:** 4.4s → ≤ 3.4s

## Ground Rules
1. Check Next.js version, router type (App/Pages), and configuration before applying fixes.
2. Commit small changes per task.
3. Only defer analytics; do not remove them. Do not change design elements.
4. Report actual before/after metrics.
5. Maintain Accessibility, SEO, and Best Practices scores at 100.

---

## Phase 1: Investigation & Setup
1. **Analyze Repository:** Determine Next.js version, `next.config.js` settings, and router type (App or Pages directory).
2. **Initial Baseline:** Run Lighthouse locally (if possible) or use provided baseline to establish before metrics.

---

## Phase 2: Execution

### Task 1: Fix LCP Render Delay (2,560ms) - Highest Priority
**Goal:** Reduce element render delay to under ~300ms for `Device-showcase.*.avif`.
**Steps:**
1. **Locate Hero Component:** Find the component rendering the hero image.
2. **Remove Animation Bottlenecks:** Remove `opacity-0`, framer-motion `initial={{ opacity: 0 }}`, `invisible`, `hidden`, AOS/GSAP classes, or `useEffect` `mounted` state gates from the hero and its parents.
3. **Ensure Server Rendering:** Make the hero image visible in server-rendered HTML. Remove any `dynamic(..., { ssr: false })` or `Suspense` fallbacks encapsulating it.
4. **Prioritize Image:** Ensure `priority` (or `preload`) and `fetchPriority="high"` are set *only* on the hero image. Remove `priority` from all other images.

### Task 2: Improve Image Delivery (Save ~276 KiB)
**Goal:** Reduce the transferred size of the hero image to 60-90 KiB.
**Steps:**
1. **Adjust `sizes` Attribute:** Rewrite `sizes` attribute to match the rendered size (e.g., accounting for `max-h-[clamp(15rem,50vw,40rem)]`).
2. **Optimize Quality & Formats:** Set `quality={70}` on the hero image. Ensure AVIF is prioritized in `next.config.js` (`images.formats: ['image/avif', 'image/webp']`).
3. **Trim Configured Sizes:** Reduce `images.deviceSizes` and `images.imageSizes` in `next.config.js` to prevent oversized mobile variants.
4. **Source Optimization:** Check if the source file is unnecessarily large (max width ~1600px).
5. **Retain Dimensions:** Keep explicit `width` and `height` to prevent layout shifts.

### Task 3: Remove Render-Blocking CSS (Save ~380ms)
**Goal:** Eliminate `/_next/static/css/81b85a833dfa3ece.css` from the critical path.
**Steps:**
1. **Inline CSS:** If Next.js ≥ 15, enable `experimental: { inlineCss: true }` in `next.config.js`.
2. **Reduce CSS Size:** Audit Tailwind `content` globs in `tailwind.config.js`. Remove unused global styles and component-library CSS.
3. **Optimize Fonts:** Ensure `next/font` is used with `display: 'swap'` and appropriate subsetting. Remove external `<link>` tags for fonts.

### Task 4: Defer Google Tag Manager / gtag (Save ~172.5 KiB)
**Goal:** Move third-party analytics off the main thread during initial load.
**Steps:**
1. **Implement `next/third-parties`:** Use `@next/third-parties/google` `GoogleAnalytics` component (or `next/script` with `strategy="lazyOnload"`).
2. **Interaction-based Loading:** Load the script on idle (`requestIdleCallback`) or on the first user interaction (scroll/pointerdown).
3. **Clean Up Preconnects:** Remove `<link rel="preconnect">` for GTM if fully deferred.

### Task 5: Cut First-Party Unused/Legacy JS
**Goal:** Reduce first-party JS by 30-40 KiB, clear legacy JS warnings.
**Steps:**
1. **Modernize Browserslist:** Add `["chrome >= 111", "edge >= 111", "firefox >= 111", "safari >= 16.4"]` to `package.json` to drop polyfills for array methods and object properties.
2. **Server Components:** Migrate non-interactive Client Components to Server Components.
3. **Lazy Loading:** Use `next/dynamic` for below-the-fold components (retaining SSR where applicable).
4. **Animation & Library Optimizations:** Switch framer-motion to `LazyMotion` with `domAnimation`. Optimize import paths for icons/utilities.

### Task 6: Remove Forced Reflow (Save ~37ms)
**Goal:** Eliminate layout thrashing.
**Steps:**
1. **Audit Layout Reads:** Search for `offsetWidth`, `offsetHeight`, `getBoundingClientRect()`, etc., especially in `useEffect` and scroll handlers.
2. **Batch & Defer:** Batch reads before writes, switch to `ResizeObserver`/`IntersectionObserver`, or wrap reads in `requestAnimationFrame`.

### Task 7: Improve Agentic Browsing Score
**Goal:** Elevate score from 75 to as close to 100 as possible.
**Steps:**
1. **Run Lighthouse Audit:** Run `npx lighthouse https://www.mhstudios.online --output=json` locally to extract the specific Agentic Browsing failures.
2. **Address Technical Failures:** Fix semantic HTML issues, missing accessible names/labels, or structured data errors.
3. **Prompt for Product Decisions:** For any audit requiring a functional/product choice, document and request input before implementing.

---

## Phase 4: Verification & Reporting
1. **Build Test:** Run `next build` and verify no new warnings/errors.
2. **Lighthouse Validation:** Run Lighthouse 3 times on the production-like build (Mobile, Slow 4G) and calculate the median.
3. **Visual Regression:** Confirm the design remains fully intact across 360px, 412px, 768px, and 1440px.
4. **Final Report Preparation:** Prepare the Before/After table and a summary paragraph detailing the root cause of the LCP delay.
