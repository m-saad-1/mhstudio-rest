# Performance audit evidence

Captured on 14 October 2026 from local production builds. Baseline: `92c7340` (completed light theme). See [the performance report](../Performance-Optimization.md) for conditions, tradeoffs, results, and limitations.

- `benchmark.json`: twelve matched homepage samples; fresh browsers, disabled browser cache, equally warmed server image cache.
- `benchmark-summary.json`: medians calculated from those samples.
- `mobile-routes.json`, `desktop-routes.json`: all 23 pages plus two expected 404 cases at each width.
- `source-checks.json`: content, integration, route, font, and rendering safeguards.
- `loading-checks.json`: prefetch intent, queued analytics, lazy SDK, image caching/fallback, zoom loading, and JavaScript-disabled rendering.
- `interactions.json`: original interaction audit, including two failures during an interrupted run.
- `keyboard-zoom.json`, `zoom-recheck.json`: successful focused zoom rechecks. These supersede the two interrupted-run failures.
- `home-375.png`, `home-1440.png`: final homepage viewport captures for visual review.

Third-party analytics traffic and real form submissions were blocked during browser checks. These are local lab results, not production field Core Web Vitals or a Lighthouse score.
