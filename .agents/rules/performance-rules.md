# Performance & Rendering Rules (Text & Content Speed)

## The "Fastest Text Ever" Rule
The user has mandated that text and content (cards, FAQs, Hero text) must load "fast, faster, fastest ever" across all resolutions, completely instantaneously. 
Therefore, **DO NOT** use JavaScript or CSS tricks that hide content on load to animate it later if it delays visibility or blocks the main thread.

### Specific Changes Made & DO NOT REVERT:
1. **`Reveal.tsx` Stripped**: The `Reveal` component was completely stripped of `IntersectionObserver`, React state (`useState`), and initial hiding CSS (`opacity-0`, `translate-y-[24px]`). It now simply returns its children. This guarantees zero TBT on scroll and instantaneous paint for text and cards. Do not reintroduce Javascript-based scroll animations unless explicitly asked.
2. **SSR Enabled for Content**: Components like `FaqAccordion` and `MockupFrame` MUST NOT use `ssr: false`. Disabling SSR forces the client browser to construct the DOM from scratch, which hides text initially and spikes TBT. They must be server-rendered.
3. **No `use client` on Static Sections**: `hero-section.tsx` is completely static and MUST NOT use the `"use client"` directive. This ensures the Hero HTML is purely server-rendered with no hydration payload.
4. **Analytics**: Manual `<Script>` tags for Google Analytics caused massive TBT. Always use the `@next/third-parties/google` `<GoogleAnalytics>` component to defer script execution properly without blocking the main thread.
