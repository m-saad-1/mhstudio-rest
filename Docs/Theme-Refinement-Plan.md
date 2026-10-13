# MHStudio Light Theme and UI Refinement Plan

Status: implemented and audited. See [implementation notes](Theme-Refinement-Implementation.md) and [QA results](Theme-Refinement-QA.md).

Source of requirements: [Modifications.md](Modifications.md).

## 1. Intended outcome

Deliver a cohesive, professional light theme across the entire MHStudio marketing website. Preserve the existing orange brand accent, content, routes, prices, integrations, and business behavior. Replace square component chrome with moderate rounding, standardize typography and spacing, and make every existing interaction readable and comfortable on desktop, tablet, and mobile.

Completion requires every route and applicable interaction state to pass the acceptance checks below. A homepage refresh or a variable-only color change is insufficient.

## 2. Findings from the planning baseline

| Area | Baseline implementation | Planning implication |
| --- | --- | --- |
| Stack | Next.js App Router, React, TypeScript, Tailwind CSS v4, Inter through `next/font` | Extend the current CSS and component architecture; retain the existing font and rendering model. |
| Theme | `src/app/globals.css` defines dark backgrounds, translucent cards, bright foregrounds, zero-radius tokens, large shadows, and gradient buttons | Replace the shared foundations first, then migrate local overrides. |
| Local overrides | Source audit found 45 `rounded-none` occurrences and 45 `border-white` occurrences; additional dark zinc colors, translucent white fills, gradients, and arbitrary shadows occur throughout the pages | Review each occurrence by purpose. Include important modifiers such as `!rounded-none`; avoid a blind global replacement. |
| Missing token coverage | Service pages use `bg-surface`, `bg-surface-secondary`, and `border-border`, while the current `@theme inline` does not expose those color names | Add explicit semantic aliases or migrate every use to the chosen canonical tokens. Verify the generated utilities and computed styles. |
| CSS cascade | Global heading/paragraph colors and shared component rules currently sit outside explicit Tailwind layers | Establish predictable base/component/utility precedence so status colors, typography, and size variants can work correctly. |
| Shell | Fixed header, desktop navigation, full-screen mobile menu, footer, skip link, floating WhatsApp action, and decorative background layers | Theme both header scroll states, the mobile overlay, and the entire persistent shell. |
| Pricing | Two platform options, monthly/yearly billing, featured cards, price annotations, and package detail overlays | Preserve all price calculations and content; review all visible platform/billing combinations and every package overlay. |
| Forms | Contact and demo forms use EmailJS, loading/disabled states, green success screens, and native validation; send failures currently use `alert()` | Retain submission contracts. Style all existing states; present failures in an accessible inline error panel without changing delivery behavior. |
| Images | Static imports, optimized images, dark blur placeholders, direct image links, `react-medium-image-zoom`, and a custom lightbox component | Update surrounding UI and placeholders while preserving image content, dimensions, loading behavior, zoom, and link destinations. |
| Dormant UI | `ImageLightboxModal` has no current call sites; the portfolio grid has filter state but no rendered filter controls | Refine reusable dormant styling where appropriate; do not activate a lightbox or introduce filter controls as part of this task. |
| Responsive risks | Long service headings, dense diagrams, fixed minimum widths of 600/800px, price rows, nested FAQ grids, and modal headers/footers | Include targeted layout work, not just smaller font sizes or hidden overflow. |
| Rendering safeguards | `.agents/rules/performance-rules.md` protects immediate content visibility, server-rendered content, the static hero, and deferred analytics | Treat these safeguards as implementation constraints and acceptance criteria. |
| Working tree | Existing edits and deletions were present during inspection | Preserve the user's working changes; do not restore deleted assets, logs, or documents indiscriminately. |

These findings describe the source before implementation. The phases below retain the original execution plan. Actual changes, browser results, contrast checks, and performance measurements are recorded in the implementation notes and QA report linked above.

## 3. Scope and preservation rules

### Included

- All 19 static page routes, all four current case-study instances, shared shell components, reusable components, form feedback, pricing overlays, zoom UI, and 404 states.
- Colors, borders, radii, typography, spacing, alignment, dimensions, layout responsiveness, focus styles, and restrained interaction feedback.
- Accessibility adjustments directly needed by the refined controls: touch targets, selected states, keyboard access, dialog focus behavior, and form status announcements.
- Light browser/native control styling, selection, scrollbars, image loading placeholders, and manifest presentation colors.
- Documentation of the final design system, implementation decisions, checks, and remaining limitations.

### Preserve

- Every route, anchor destination, navigation item, CTA label, marketing claim, legal text, package name, price, and pricing calculation.
- EmailJS service/template configuration, payload keys, recipient, validation rules, successful reset behavior, and analytics event names.
- WhatsApp, scheduling, external template/project links, metadata, structured data, sitemap behavior, and robots configuration.
- Current page section sequence, including the homepage order defined by `.home-sections`, and the existing homepage eyebrow visibility policy.
- `Reveal` as an immediate rendering wrapper; no initial content hiding or scroll-reveal effects.
- Server rendering of FAQ content and mockup cards, the server-rendered static hero, current dynamic import boundaries, and deferred analytics.
- Existing asset files and screenshot contents. Dark areas inside product screenshots or photographs remain valid content; website surfaces around them become light.

Avoid unrelated package upgrades, routing changes, new features, content rewrites, animation libraries, a theme toggle, or changes to rendering optimizations. Any unrelated pre-existing issue should be recorded separately; fix only prerequisites that prevent this scoped refinement from working or being verified.

## 4. Design system specification

Implement the following starting values centrally in `src/app/globals.css`. Validate contrast in the rendered interface, including translucent compositions and hover states. Adjust a central token if a check fails, then recheck its consumers.

### 4.1 Colors

| Semantic role | Proposed value | Use |
| --- | --- | --- |
| Page background | `#FAFAF9` | Overall canvas and light browser chrome |
| Primary surface | `#FFFFFF` | Cards, fields, dialogs, header, primary content panels |
| Secondary surface | `#F5F5F4` | Alternating sections and supporting panels |
| Hover surface | `#EEEEEC` | Quiet neutral hover states |
| Heading/strong text | `#18181B` | Headings, navigation, primary labels |
| Body text | `#3F3F46` | Paragraphs, descriptions, lists |
| Muted text | `#52525B` | Metadata and supporting text that still needs contrast |
| Disabled text | `#71717A` | Disabled control text; do not use for essential instructions |
| Decorative border | `#E4E4E7` | Cards and section separators |
| Strong border | `#D4D4D8` | Emphasized boundaries |
| Control border | `#71717A` | Essential field boundaries; validate at 3:1 against adjacent surfaces |
| Existing brand accent | `#F59E0B` | Primary action fill and strategic brand highlights |
| Accent hover fill | `#FBBF24` | Primary action hover with a dark label |
| Accent soft surface | `#FFFBEB` | Selected options and restrained featured panels |
| Accent text | `#92400E` | Orange/brown text links, highlighted words, small accent labels |
| Focus indicator | `#B45309` | Clear keyboard focus ring with an offset |
| Overlay backdrop | `rgba(24,24,27,0.40)` | Temporary dialog dimming; dialog itself remains white |
| Success | `#166534` on `#F0FDF4` | Submission confirmation and positive status |
| Error | `#B91C1C` on `#FEF2F2` | Failure messages and invalid field feedback |
| Information/warning | Separate dark blue/amber text and pale surfaces | Existing illustrative and advisory statuses; validate each pair |

Keep `#F59E0B` as the brand anchor. Use dark text on this bright fill; do not assume white button labels or small orange text on white will pass contrast. Separate accent fill, accent text, and focus tokens so one value is not forced to serve incompatible purposes.

Expose semantic colors through Tailwind v4 `@theme inline`. Maintain compatibility with existing `background-*`, `foreground-*`, and border names while migrating consumers. Resolve `surface`, `surface-secondary`, and `border` utilities explicitly. Add success/error/overlay tokens so components do not create their own palettes.

### 4.2 Radius, elevation, and motion

| Role | Target |
| --- | --- |
| Small tags and nested elements | 6px |
| Buttons and form controls | 10px |
| Standard cards, images, and accordion shells | 16px |
| Dialogs and large hero panels | 20px |
| True circles | Reserved for meaningful circular indicators and the existing WhatsApp action |
| Default card elevation | Border first; none or `0 2px 8px rgba(24,24,27,0.04)` |
| Hover elevation | `0 4px 16px rgba(24,24,27,0.06)` when helpful |
| Dialog elevation | `0 16px 48px rgba(24,24,27,0.14)` |
| Transition duration | Approximately 150–200ms for color, border, shadow, and control feedback |

Introduce descriptive radius tokens and expose them as shared utilities/classes. Migrate the misleading existing `--radius-pill` usage to a button/control role. Keep token aliases acyclic when connecting root variables to Tailwind's radius namespace.

Remove routine gradients, neon glow, heavy drop shadows, repetitive blur layers, large hover translations, and button scaling. Use flat surfaces, clear boundaries, and modest feedback. Keep meaningful existing motion, such as the logo marquee, restrained and compatible with reduced motion. Rounded clipping must not cut off focus indicators or important image content.

### 4.3 Typography

Retain Inter and the current font loading configuration. Define shared type roles using responsive values, with desktop caps rather than unlimited viewport growth.

| Role | Mobile target | Desktop target | Weight / line height |
| --- | --- | --- | --- |
| H1/display | 34px | Up to 56px | 600–700 / 1.12–1.2 |
| H2/section heading | 28px | Up to 40px | 600 / 1.2–1.3 |
| H3/card heading | 20px | Up to 24px | 600 / 1.3–1.4 |
| H4/subheading | 18px | 18–20px | 600 / 1.4 |
| Lead paragraph | 16px | 18px | 400 / 1.65–1.75 |
| Body paragraph | 16px | 16px | 400 / 1.65–1.75 |
| Supporting text and field labels | 14px | 14px | 400–600 / 1.5–1.6 |
| Buttons and navigation | 14–16px | 14–16px | 500–600 / 1.4–1.5 |
| Short, nonessential badges | 12–13px | 12–13px | 500–600 / 1.4 |

- Prefer `rem` and bounded `clamp()` expressions; verify browser zoom and text resizing.
- Keep essential content at least 14px and editable field text at least 16px on mobile. Replace existing 9–11px essential labels and low-opacity pricing notes.
- Keep body copy near 60–70 characters per line and leads near 50–60 where the layout allows.
- Use restrained negative heading tracking and minimal uppercase letter spacing. Avoid long uppercase paragraphs or forced no-wrap headings.
- Preserve a meaningful heading hierarchy. Visually smaller legal section headings may use a smaller type role while remaining semantic H2s.
- Consolidate `HeroSection`, `PageHero`, `SectionHeading`, service-page headings, and case-study headings into the same type system without forcing identical compositions.

### 4.4 Spacing and dimensions

- Use a shared 4px-based scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, and 96px; consume it through existing Tailwind spacing utilities or named role tokens.
- Retain the existing 1280px maximum content shell. Use consistent responsive page gutters, starting near 16–20px on mobile, 24–30px on tablet, and 32–40px on desktop.
- Standard section spacing: approximately 56px mobile, 72px tablet, 96px desktop; use an explicit compact variant for tightly related sections.
- Standard card padding: 20px mobile and 24–32px desktop. Standard grid gaps: 16–24px mobile and 24–32px desktop.
- Standard controls: 48px high, with a deliberate 44px compact variant. Icon-only buttons and mobile interactive targets must be at least 44px in both dimensions.
- Let long button text wrap cleanly with vertical padding and sufficient height. Stack actions when labels cannot fit; avoid shrinking labels to fit a fixed row.
- Derive main-content offset and anchor scroll margins from the actual fixed header height and outer spacing. Verify hero placement on short and tall screens.

## 5. Implementation phases and completion gates

### Phase 0 — Establish the baseline and coverage inventory

1. Re-read `Modifications.md` and the workflow/performance rules before implementation.
2. Record current working-tree changes using a command-scoped Git ownership exception if necessary; avoid changing global Git settings solely to inspect this repository.
3. Confirm an available Node/npm runtime, dependency installation, and the configured `dev`, `build`, and `lint` commands. Use the existing lockfile.
4. Enumerate routes from `src/app`, not only the sitemap: the current sitemap omits demo and service-detail routes. Add every current `portfolioItems` slug to the verification inventory.
5. Capture representative baseline screenshots of the homepage, a service detail page, pricing with an open overlay, contact, demo, templates, legal content, and mobile navigation. Capture other routes before their local migration.
6. Record baseline lint/build results and rendering/performance observations. Distinguish existing failures from refinement regressions.
7. Inventory each dark literal, zero-radius override, large shadow, tiny text role, fixed-width diagram, and overlay by file and intended use.

**Gate:** a complete route/state checklist and a known baseline exist; user changes are preserved.

### Phase 1 — Build the shared foundations

Primary files: `src/app/globals.css`, `src/app/layout.tsx`, `src/app/manifest.ts`.

1. Implement the semantic color, radius, typography, spacing-role, shadow, and state tokens above.
2. Establish CSS layers: base defaults for the document, headings, and inherited text; component rules for surfaces, buttons, fields, badges, and dialogs; utilities for intentional local layout adjustments.
3. Give global paragraph and heading defaults predictable precedence so explicit success/error and component text colors remain effective.
4. Refine existing `.surface-card`, `.button-primary`, `.button-secondary`, `.eyebrow`, `.content-shell`, `.section-space`, and `.section-divider`; introduce only small shared variants that repeated real usages need.
5. Add shared field, status, segmented-control, icon-button, and dialog styling. Do not introduce a new general-purpose design-system package.
6. Set light native control rendering with `color-scheme: light`; update selection, scrollbar, placeholder, autofill, validation, and disabled treatment.
7. Simplify the root decorative background layers and replace dark manifest presentation colors with intentional light values.
8. Establish shared stacking levels for the header, floating action, backdrop, and active dialog so interactive overlays cannot sit behind persistent controls.

**Gate:** shared primitives render correctly on light surfaces, utility overrides are predictable, and the original brand fill is retained with accessible labels.

### Phase 2 — Refine the persistent shell and shared presentation

Primary files:

- `src/components/layout/site-header.tsx`
- `src/components/layout/site-footer.tsx`
- `src/components/marketing/hero-section.tsx`
- `src/components/marketing/page-hero.tsx`
- `src/components/ui/section-heading.tsx`
- `src/app/layout.tsx`

Tasks:

1. Give the fixed header a readable light surface in both initial and scrolled states. Normalize its boundary, radius, logo clearance, navigation spacing, and CTA dimensions.
2. Keep active navigation clear through text weight, an indicator, and/or a subtle tint; expose the current route accessibly.
3. Convert mobile navigation into a readable light overlay with compact heading sizes, 44px controls, clear selected states, and short transitions without staggered delays.
4. Ensure closed mobile navigation is not keyboard-focusable. Support Escape, focus containment and restoration, scroll locking, and a usable short landscape layout. Restore scroll state when the menu closes or the desktop breakpoint is reached.
5. Convert footer surfaces, separators, headings, and link states; ensure long service names wrap and columns collapse cleanly.
6. Rework all shared heroes and section headings around the common type/spacing scale. Preserve the existing responsive hero copy, tracked CTA events, static rendering, image priority, and section structure.
7. Inspect the logo on white. If contrast is poor, use an existing suitable variant or a restrained neutral backing; do not redesign or recolor the brand asset without a separate need.
8. Refine the WhatsApp action's shadow, focus treatment, and mobile placement while retaining its recognizable service color and destination. Keep it clear of form actions and below open dialogs.
9. Verify the skip link and anchor scrolling against the fixed header.

**Gate:** every route inherits a consistent shell, and desktop/mobile navigation remains usable by pointer and keyboard.

### Phase 3 — Migrate the complete page content

Use the route coverage table in section 6 as the work checklist. Migrate related pages together, but inspect each actual page independently.

1. **Homepage:** refine the hero, service cards, management panels, ordering flow, AI section, capabilities, platform panels, client logo strip, insights, FAQs, and final CTA. Retain the current CSS section ordering. Replace local dark gradients, `!rounded-none`, glow effects, tiny labels, and excessive image shadows. Inspect client logos against the new surface without recoloring them.
2. **Services overview:** align card dimensions, icon containers, link styling, hierarchy, and supporting-service CTA treatment.
3. **All nine service detail pages:** normalize custom hero layouts, CTA variants, feature grids, mockup frames, status badges, illustrative dashboards, workflow diagrams, and final CTAs. Resolve missing semantic utility mappings and review every hardcoded status/text color on light surfaces.
4. **About and process:** remove neon/gradient treatments, normalize nested cards and technology tags, and refine timelines, step numbers, connecting lines, QA grids, and FAQs.
5. **Templates and case studies:** refine `MockupFrame` chrome, background/blur placeholder, image clipping, metadata, text contrast, and links. Apply the same treatment to all four case-study instances and every content panel.
6. **Pricing page content:** refine the enterprise panel, featured cards, labels, annotations, and price alignment; preserve package data and support-copy calculations.
7. **Contact and demo page content:** refine side panels, contact methods, demo steps, calendar links, FAQs, and form layout without altering destinations or content.
8. **Privacy, terms, and 404:** apply the full type and surface system, maintain comfortable legal reading widths and paragraph spacing, and verify long titles and recovery actions.

**Gate:** every listed route has received an explicit page review; no dark website chrome or zero-radius component override remains without a documented reason.

### Phase 4 — Complete controls, forms, and overlays

Primary files: `pricing-grid.tsx`, `contact-form.tsx`, `demo-form.tsx`, `faq-accordion.tsx`, `mockup-frame.tsx`, and `image-lightbox-modal.tsx`, plus existing service zoom usages.

**Pricing**

- Style both platform choices and both visible billing choices as moderately rounded segmented controls with hover, focus, pressed/selected, and active states.
- Keep selections accessible and preserve the current selection model. Do not expose the dormant one-time billing state as a new option.
- Check long plan names, prices, suffixes, original-price strike-throughs, annual notes, featured badges, and equal card alignment without fixed heights that clip content.
- Refine all package overlays: opaque white surface, 20px radius, readable header, scrollable content, flexible footer, 44px labeled close control, and safe viewport bounds.
- Add/complete dialog labeling, Escape handling, focus containment and restoration, background inertness, and scroll locking where missing. An open overlay must sit above the site header and WhatsApp action.

**Contact and demo forms**

- Share field, label, select, textarea, button, and status styling. Verify native select options, autofill, placeholders, focus, and required/invalid states on light backgrounds.
- Preserve existing required fields, minimum lengths, optional website URL behavior, and conditional demo `Other` field.
- Use clear loading labels, disabled styles, and a busy state while requests are pending; prevent duplicate sends through the existing loading logic.
- Refine success states with dark green text and a pale green surface. Preserve reset and “send/request another” behavior.
- Replace native send-failure alerts with a styled inline error panel announced accessibly. Preserve entered values and allow retry after failure; retain EmailJS payloads and success analytics events.
- Avoid mixing a primary-button class with unrelated success-color overrides; use an explicit shared variant.

**Accordions and image previews**

- Refine FAQ boundaries, question text, chevrons, focus, and expanded content spacing. Preserve single-item expansion and server-rendered answer content; associate controls with their panels.
- Ensure nested FAQ contexts collapse to a readable single column instead of inheriting an overly dense two-column layout.
- Theme `react-medium-image-zoom` overlay chrome through narrowly scoped shared styles based on its actual installed markup. Preserve its keyboard and zoom behavior.
- Update the dormant custom lightbox's surface, header, links, close target, and viewport sizing. Review it in an isolated preview if needed; do not add a production call site just to demonstrate it.
- Preserve existing direct image links and external project links.

**Gate:** default, hover, focus-visible, active/selected, disabled, loading, success, and error states are coherent wherever each state exists; every overlay is usable on a narrow or short viewport.

### Phase 5 — Responsive and accessibility refinement

1. Check widths of 320, 375/390, 768, 1024, and 1440px, plus a wide desktop pass at 1920px. Include short landscape screens and at least one mobile device/browser pass where available.
2. Check both sides of the actual 640/768/1024/1280px breakpoints for header, grids, pricing controls, image layouts, and overlays. Verify layout at 200% browser zoom and enlarged text.
3. Resolve long-heading, long-CTA, modal-title, pricing-row, tag-group, and footer-link wrapping. Use `min-width: 0`, flexible columns, and sensible word wrapping where needed.
4. Reflow linear service workflows into vertical or wrapped steps on narrow screens while preserving sequence and labels. For genuinely spatial boards, keep any necessary horizontal scrolling inside a labeled, keyboard-accessible container with a visible affordance; never let it create page-level overflow.
5. Recheck illustrative status colors, connectors, small labels, legend meaning, and content after layout changes. Do not rely on color alone for selected or operational states.
6. Ensure image aspect ratios remain stable, assets stay contained, rounded wrappers clip correctly, and responsive `sizes` remain aligned with actual rendered widths.
7. Check keyboard order, focus indicators, skip navigation, selected-control semantics, form status announcements, modal escape/focus behavior, and motion preferences.
8. Measure text contrast: at least 4.5:1 for normal text, 3:1 for large text, and 3:1 for essential control boundaries and focus/state indicators. Check all accent, muted, placeholder, success, and error combinations in their real states.

**Gate:** all content remains readable and operable without page-level horizontal scrolling, clipped controls, overlapping UI, or reliance on hover.

### Phase 6 — Verify, document, and hand off

1. Run the configured lint and production build commands and a TypeScript check (`npx tsc --noEmit` where appropriate). Record existing failures separately and resolve regressions from this change.
2. Use a production preview for final route smoke checks. Verify page loads, image requests, client console errors, and hydration warnings across the inventory.
3. Exercise every listed interaction. Use intercepted/mocked EmailJS responses for success, delay, and failure checks; do not send real inquiry emails during QA. Observe analytics contracts without generating unnecessary live events.
4. Compare before/after screenshots at consistent viewports. Review composition as well as mechanical checks: heading balance, whitespace, CTA prominence, image scale, card rhythm, and visual density.
5. Re-scan source for `rounded-none`, zero-radius declarations, important radius overrides, dark surface literals, white borders, light-on-dark text assumptions, tiny type, and large glow/shadow literals. Review each remaining occurrence; screenshots, overlays, and true circles may have valid exceptions.
6. Confirm no new static sections became client components, no protected dynamic import gained `ssr: false`, `Reveal` still renders immediately, hero priority is retained, and analytics deferral remains intact.
7. Compare representative desktop/mobile performance under the same conditions. Investigate new layout shifts, added client bundles, delayed content, or material regressions; do not promise an absolute score.
8. Create `Docs/Theme-Refinement-Implementation.md` describing the starting problems, actual changes, token decisions, justified exceptions, validation results, and unresolved limitations, as required by the workflow rules.
9. Save the completed route/state verification matrix in `Docs/Theme-Refinement-QA.md`, with viewport, result, and evidence for each route and state.

**Gate:** checks are recorded with actual results. An unavailable browser/device or unresolved prerequisite is a stated verification gap, not a passing check.

## 6. Required route coverage

The current source contains 19 static page routes and one case-study route template with four current data entries: 23 rendered page instances. Re-enumerate during implementation so new data/routes are included.

| Route | Specific review |
| --- | --- |
| `/` | All homepage sections, responsive hero copy, images, logo marquee, FAQ, CTAs |
| `/services` | Main service cards and supporting-service entry |
| `/services/restaurant-websites-and-apps` | Website/app showcase, preview images, feature grids, zoom |
| `/services/restaurant-management-systems` | RMS dashboards, connected workflows, branch/inventory/status panels, zoom |
| `/services/point-of-sale-systems` | Order types, table/kitchen examples, checkout imagery, zoom |
| `/services/kitchen-display-systems` | Kitchen workflow, ticket/status panels, minimum-width diagram, zoom |
| `/services/online-ordering-systems` | Ordering/customization/checkout flows, fulfillment options, zoom |
| `/services/delivery-and-fleet-management` | Rider/map/dispatch panels, delivery workflow, long content, preview surfaces |
| `/services/dine-in-table-management` | Table states, 800px workflow, billing/service illustrations |
| `/services/qr-menu-self-ordering` | QR/menu examples, ordering steps, illustrative controls/statuses |
| `/services/supporting-services` | Supporting categories, automation examples, segment tags, journey panels |
| `/templates` | All four cards and live-project links; retain existing grid behavior |
| `/case-study/template-1` | Full case-study content and project preview |
| `/case-study/template-2` | Full case-study content and project preview |
| `/case-study/cs-fire-burgers` | Full case-study content and project preview |
| `/case-study/hambrg` | Full case-study content and project preview |
| `/pricing` | Both platforms × both visible billing choices, every package overlay, enterprise CTA |
| `/about` | Story/mission/vision/values, advantage cards, journey, technology tags |
| `/process` | Every stage/path, client involvement, QA grid, technology timeline, FAQ, final CTA |
| `/contact` | Form and all states, contact methods, scheduling link, FAQ |
| `/demo` | Form and all states, conditional Other field, process panel, calendar link, FAQ |
| `/privacy` | Hero, legal body, readable line lengths |
| `/terms` | Hero and all six legal sections |
| Unknown route and invalid case-study slug | Shared 404 presentation, recovery links, shared shell; expected 404 response |

For every rendered page, verify at minimum mobile, tablet, and desktop layouts. Apply the wider viewport sweep to shared primitives and the pages with dense or unique layouts. A shared template review does not replace opening each current case-study slug.

## 7. Interaction coverage matrix

| Component | Required scenarios |
| --- | --- |
| Header/navigation | Initial/scrolled; desktop/mobile; current route; open/close; link navigation; Escape; focus return; breakpoint resize |
| Buttons and links | Default; hover; keyboard focus; active; long labels; disabled where supported; external destinations |
| Pricing controls | Both platforms × monthly/yearly; selected/unselected; keyboard operation; every plan's displayed price and details |
| Pricing overlays | Every package; long content; backdrop close; close button; Escape; focus containment/return; body scroll restoration; short viewport |
| Contact form | Empty/invalid/valid; native selects; pending/disabled; success; failure/retry; send another |
| Demo form | Contact-equivalent states; valid/invalid optional URL; show/hide/require Other; request another |
| FAQs | Each occurrence; collapsed/expanded; long questions; keyboard activation; readable nested layout |
| Images | Load/placeholder; responsive containment; zoom open/close; direct-link behavior; missing request detection |
| Custom lightbox | Isolated styling/state review if still unused; no new production activation |
| Floating action/skip link | Keyboard access; correct destination; mobile safe-area clearance; overlay stacking; header offset |
| Motion | Reduced-motion preference; no delayed initial text/card visibility |

Only test states that exist or are explicitly planned above. Do not create search, dropdown menus, filters, or loading controls merely because the requirement lists general component categories.

## 8. Risks and planned controls

| Risk | Control |
| --- | --- |
| Shared token change leaves local dark sections | Complete source inventory, explicit route migration, and a final literal/utility scan |
| Bright brand orange becomes unreadable text | Preserve orange fill, use dark labels, and provide a separate darker accent-text token |
| CSS defaults override utility/state styles | Use deliberate Tailwind layers and inspect computed styles in representative states |
| Existing square/important radius classes defeat tokens | Remove or migrate each override; check actual rendered corners |
| Light backgrounds expose logo/image limitations | Inspect existing assets and adjust neutral framing without editing their content |
| Global styling damages third-party zoom UI | Use scoped overrides against installed markup and verify real open/close behavior |
| Header/WhatsApp action covers a modal | Shared stack levels, modal body scroll handling, and viewport checks |
| Long diagrams are clipped on mobile | Reflow linear steps or provide contained, accessible scrolling for spatial content |
| Restyling changes pricing or submission behavior | Preserve data/handlers and exercise all combinations with mocked network outcomes |
| Refinement reverses earlier performance fixes | Follow the rules, retain rendering boundaries, compare performance under equivalent conditions |
| Current repository changes are overwritten | Establish the working-tree baseline and limit edits to scoped application/documentation files |

## 9. Deliverables and completion criteria

Deliverables:

1. Centralized light-theme tokens and shared component styles.
2. Refined persistent shell, all 23 current rendered pages, and shared 404 states.
3. Consistent forms, pricing selectors/dialogs, FAQ presentation, preview chrome, and interaction feedback.
4. Responsive layouts and accessible control states verified against the route/state matrices.
5. Implementation notes and a QA record with actual evidence and any remaining gaps.

The work is complete when all of the following are true:

- Website surfaces consistently use the light palette; product imagery and intentional backdrops are documented exceptions.
- The existing orange identity remains recognizable, and every essential text/control color meets the defined contrast target.
- Component radii, borders, shadows, typography, spacing, and sizing use shared roles; unexplained square or excessively pill-shaped UI is removed.
- Every listed page, legal page, case-study instance, form state, and active overlay has been reviewed at the required viewports.
- Mobile content has no page-level horizontal scrolling, clipped labels, overlapping actions, or unusable touch targets.
- Navigation, prices, content, integration contracts, tracking names, links, images, and existing functionality remain correct.
- Static content appears immediately and all documented rendering/performance safeguards remain satisfied.
- Lint, type/build results, route smoke checks, accessibility checks, and visual verification are recorded accurately; remaining failures or unavailable checks are explicitly identified.

Execution order: baseline → foundations → shared shell → page migration → interactive states → responsive/accessibility pass → full verification and documentation. Revisit earlier components when later page checks reveal a shared issue, then recheck all affected consumers.
