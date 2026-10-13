# Light theme implementation

Implemented against [Modifications.md](Modifications.md) and the [implementation plan](Theme-Refinement-Plan.md). Final verification is recorded in [Theme-Refinement-QA.md](Theme-Refinement-QA.md).

## Design foundations

`src/app/globals.css` now owns the palette, type roles, component radii, elevations, focus treatment, field states, buttons, segmented controls, dialogs, FAQs, and workflow layouts. Tailwind v4 semantic aliases expose the same values to page utilities. Base rules and component rules use explicit cascade layers so intentional utility colors and sizes remain effective.

| Role | Value |
| --- | --- |
| Canvas / surface / secondary surface | `#fafaf9` / `#ffffff` / `#f5f5f4` |
| Heading / body / muted text | `#18181b` / `#3f3f46` / `#52525b` |
| Brand fill / hover fill | `#f59e0b` / `#fbbf24` |
| Readable accent text / focus | `#92400e` / `#b45309` |
| Decorative / control borders | `#e4e4e7` / `#71717a` |
| Tag / control / card / dialog radius | 6 / 10 / 16 / 20px |
| Display / section / card headings | Responsive caps of 56 / 40 / 24px |
| Main controls / compact targets | 48 / 44px minimum height |

The bright original orange remains the action fill with dark labels. Small highlighted text uses a separate darker accent. Success, error, and information states have dark text on pale surfaces. Native controls, autofill rules, scrollbars, selection, manifest chrome, and image placeholders use the light palette.

## Changes and reasons

### Shared shell and typography

- Removed decorative background glows, heavy shadows, routine gradients, oversized hover movement, and repeated pulse effects.
- Refined the fixed rounded header, active navigation, mobile navigation, footer, skip link, and floating WhatsApp action. The main-content offset and anchor offset share one header token.
- Standardized `HeroSection`, `PageHero`, and `SectionHeading`; migrated local headings, body colors, tags, cards, and CTAs throughout all route templates.
- Kept the homepage section order and existing homepage eyebrow visibility policy.
- Retained Inter, original asset pixels, marketing text, legal text, links, route structure, and case-study data.

### Dialog behavior

The original overlays used separate fixed-position implementations with incomplete focus behavior. A small shared native `Modal` now handles top-layer rendering, background inertness, body scroll locking/restoration, Escape, backdrop clicks, and focus restoration. Browser testing exposed a focus-loop gap; an explicit Tab/Shift+Tab boundary loop closes it.

Mobile navigation, package details, and the dormant custom lightbox use this component. Package content is a named, focusable scrolling region, with fixed accessible close and footer controls. The custom lightbox remains unused in production. Existing `react-medium-image-zoom` usage remains intact and its installed overlay/control selectors receive scoped light styling.

### Pricing and forms

- Preserved all package data, calculations, platform choices, and monthly/yearly behavior. Added pressed-state semantics, a dark selected-state boundary, and consistently styled package details. The dormant one-time option remains unexposed.
- Reused field and status classes across contact and demo forms. Retained validation, the conditional Other field, EmailJS service/template/key/payload contracts, combined demo message, recipient, and analytics event names.
- Replaced browser failure alerts with an inline `role="alert"` panel. Values survive failures and retry remains available.
- Added busy state, duplicate-submit guard, disabled feedback, and focused success confirmation. Existing reset behavior remains.
- Associated FAQ buttons and panels, retained server-rendered answer content and single expansion, and used one-column layouts in narrow sidebars.

### Responsive fixes discovered during audit

| Problem | Root cause and solution |
| --- | --- |
| Mobile service workflows overflowed | Fixed 600–900px minimum widths assumed a desktop row. Shared workflows now stack on mobile and wrap at larger widths. |
| Dine-in board and sample flow overflowed | Aspect-constrained board, dense internal grid, and intrinsic flex widths. The board now grows naturally with 2/3/4 columns; cards wrap and the sample sequence stacks on small screens. |
| QR ordering example overflowed | Fixed phone width and desktop workflow. The phone uses available width with a desktop cap; the workflow reflows. |
| Nested flex/grid children resisted shrinking | Added `min-width: 0` within shared content layouts, alongside targeted changes to the affected examples. |
| Supporting-service orbit clipped content | Replaced the oversized animated orbit with a static responsive ecosystem grid containing the same ten categories. |
| Some status text failed contrast | Bright dark-theme status colors and opacity on ancestors reduced contrast. Migrated them to semantic light-theme pairs and removed fading around text. |
| FAQ focus ring clipped at rounded boundary | Used an inset outline offset on the FAQ control. |
| Dialog scrolling lacked keyboard entry | Added a focusable named region for package content; retained visible scrolling affordances. |
| Homepage overflowed with 200% text | A long helper word exceeded its narrow feature column. Content shells now inherit safe word wrapping. Header logos stay bounded, logo links have 44px targets, and the shared header offset follows enlarged outer spacing. |

### Scoped asset and source corrections

- Corrected the hero import's filename case to `device-showcase.avif`, matching the existing asset on case-sensitive filesystems.
- Replaced the active missing delivery mockup reference with the existing multi-device `device-showcase.avif`; aligned the related homepage image map. No image files were edited.
- Corrected the delivery illustration's invalid percentage-based SVG path to numeric coordinates in a normalized view box, retaining responsive positioning and a stable stroke width.
- Escaped JSX apostrophes/quotes without changing rendered copy and removed unused imports/variables that caused existing lint findings.
- A presentation migration touched a non-class reduced-motion query in the unused animated counter. Final literal comparison detected the unintended edit. Restored the entire original component and added it to the preservation checks.
- Normalized modified source line endings for a readable diff; retained the demo message's original internal formatting apart from source newline convention.

## Preservation and exceptions

`site-content.ts`, `Reveal`, `AnimatedCounter`, protected dynamic-import boundaries, and the deferred analytics wrapper match the baseline. The static hero remains a server component with its priority image. FAQ and mockup content retain server rendering. No packages, lockfile, routing, or deployment configuration changed.

Dark pixels inside screenshots, the temporary dialog backdrop, the service-branded green WhatsApp action, and true circular status indicators are intentional. The logo marquee retains its mask and restrained animation, with reduced-motion support.

The source scan still finds old square/dark classes in a commented-out homepage industry section. Six missing image paths belong to that dormant section's data; they are not requested by rendered pages. These pre-existing dormant items were recorded rather than activated. The pre-existing `AnimatedCounter` client-only import remains as documented by the earlier performance work.

The user's existing document edits and deletions were preserved. Verification helpers and baseline builds were kept outside the application workspace; no testing dependency was added to the project. Selected evidence and reproducible checks are included with the QA record.

## Assessment

The implementation provides one shared light-theme system across the full site, with targeted reflow for dense service examples and accessible interaction feedback. See the QA record for measured results, audit coverage, evidence, and browser/integration limitations. Automated accessibility checks support the assessment but do not establish complete WCAG conformance.
