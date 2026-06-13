# Product

## Register

brand

## Users

Fellow engineers and peers — people in or near Nathan's field (product engineering, AI systems, creative tooling) who land here because they found a project, a link, or a mention. They arrive curious and discerning, ready to judge by the quality of the work itself. They're skimming on a laptop or phone, not filling out forms.

The job they're trying to do: quickly understand who Nathan is and what he builds, and come away respecting the craft. Success is a peer thinking *"this person is the real thing"* and following a project link, the RSS feed, or an email — not a conversion, a signup, or a lead.

## Product Purpose

A single-page personal site for Nathan Englert, organized as **one running log**: no split between "Writing" and "Projects" — everything he ships (projects today; notes and essays later) is a numbered entry in one continuous thread. The format keeps a sparse site feeling intentional today and scales to dozens of entries with zero redesign.

It exists to be a durable, owned home for Nathan's work that signals staff-level depth through restraint and craft rather than volume or self-promotion. Success looks like a peer reading two or three entries, believing the work is excellent, and clicking through to the source.

## Brand Personality

**Three words: literary, precise, understated.**

The voice is a working engineer who also writes — "systems thinker, product engineer, occasional poet," "maker by compulsion." Confident without performing; the work carries the argument, not adjectives. Editorial and warm (serif type, "field notes," a numbered thread) but technical underneath (mono metadata, a near-black workshop palette, exacting spacing). The emotional goal is quiet credibility: a reader should feel they've stumbled into a well-kept workshop, not a sales page.

## Anti-references

- **Generic SaaS landing.** No hero-metric template (big number + supporting stats), no feature-card grids, no gradient-blob backgrounds, no CTA-stuffed sections. There is nothing to convert here.
- **Loud / over-animated.** No scroll-jacking, no heavy entrance choreography, no attention-grabbing motion. Interaction stays at hover states and smooth anchor scrolling; the site is currently zero client JS, and motion should earn its place before it's added.
- **Split "Writing vs Projects" navigation.** The single-thread concept is the point; resist breaking it into sections or a card-grid portfolio as entries accumulate.
- **Résumé / CV energy.** No job timeline, no skills bars, no "download my PDF." The work speaks; the bio doesn't.

## Design Principles

1. **One thread, not sections.** Every new thing ships as the next numbered entry in a single log. The anatomy never changes; only the tag does (PROJECT, NOTE, ESSAY, EXPERIMENT). Resist any redesign that re-introduces categories.
2. **The work is the argument.** Earn respect by showing real projects with precise descriptions, not by describing yourself. Cut any copy that tells the reader how good the work is.
3. **Restraint is the aesthetic.** Sparse, intentional, hairline-separated. Whitespace and typography do the work that decoration would do elsewhere. When in doubt, remove.
4. **Built to last and load fast.** Static-first, owned, dependency-light (Astro, content collections, zero client JS). New entries are content, not code. Durability and speed are features a peer will notice.
5. **Motion only when it means something.** The default is stillness plus hover and smooth scroll. Any animation must serve comprehension or delight a discerning eye — never decorate — and always ship a `prefers-reduced-motion` fallback.

## Accessibility & Inclusion

Target **WCAG 2.1 AA.** On this dark theme the live risk is muted secondary/tertiary text (`--ink-2`, `--ink-3`) against the near-black background — verify body and metadata text clear 4.5:1 (3:1 for large text) and bump toward the ink end of the ramp where it's close. Keep the teal/amber accent pairing distinguishable for color-blind readers (don't rely on hue alone to carry meaning). Maintain keyboard-navigable focus states on all links, and honor `prefers-reduced-motion` for any motion added later.
