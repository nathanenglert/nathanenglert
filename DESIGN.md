---
name: Nathan Englert — One Thread
description: A dark, rim-lit personal field log — one numbered thread, set in type, kept by a working engineer.
colors:
  signal-amber: "#E39A45"
  beacon-teal: "#4FC3C3"
  midnight: "#080B0E"
  parchment: "#EDE7DA"
  ash: "#A9ADA3"
  slate: "#6E746F"
  hairline: "#EDE7DA21"
  hairline-strong: "#EDE7DA66"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(30px, 5.2vw, 44px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "36px"
    fontWeight: 500
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: "0.1em"
rounded:
  none: "0"
components:
  nav-link:
    textColor: "{colors.slate}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.signal-amber}"
  entry-tag:
    textColor: "{colors.beacon-teal}"
    typography: "{typography.label}"
  entry-title:
    textColor: "{colors.parchment}"
    typography: "{typography.title}"
  entry-title-hover:
    textColor: "{colors.signal-amber}"
  contact-link:
    textColor: "{colors.parchment}"
    typography: "{typography.label}"
  contact-link-hover:
    textColor: "{colors.signal-amber}"
---

# Design System: Nathan Englert — One Thread

## 1. Overview

**Creative North Star: "The Field Log"**

This is a bound notebook of numbered dispatches, kept by a working engineer who also writes. The whole system answers to that image: there is one continuous thread, never a split between "Writing" and "Projects"; entries are numbered and dated; the voice is literary but the instrument is technical. The page is the dark room the log is written in — near-black (`#080B0E`) so that the few lit elements (an amber status dot, a teal tag, a single rim-lit headline phrase) carry all the meaning. The palette is derived directly from Nathan's illustrated avatar: its teal-and-amber rim lighting becomes the site's entire accent system, and the portrait dissolves into the page through a radial mask because the page background *is* the avatar's background.

The feel of the components is **precise and engineered**: monospaced metadata with exact tracking, ghost numerals running down the left margin, hairline rules instead of boxes, and quiet 0.15s color shifts on hover. Nothing is decorated; separation is done with light and line, never with cards or shadow. Type does the heavy lifting — a Cormorant Garamond display voice for the few large statements, Source Serif 4 for everything you actually read, IBM Plex Mono for every label and number.

This system explicitly rejects the **generic SaaS landing page** (no hero-metric template, no feature-card grids, no gradient-blob backgrounds, no CTA-stuffing — there is nothing here to convert) and anything **loud or over-animated** (no scroll-jacking, no entrance choreography; the site currently ships zero client JS). It is not a **résumé** (no job timeline, no skills bars, no PDF) and not a **card-grid portfolio**. The single thread is the architecture, and it must survive growth: the hundredth entry uses the exact same anatomy as the first.

**Key Characteristics:**
- Near-black workshop ground; meaning carried by sparse points of warm/cool light
- One numbered thread, one repeating entry anatomy — no sections, no cards
- Three-voice type system: Cormorant display, Source Serif body, IBM Plex Mono labels
- Flat by default — depth from ambient glow, hairlines, and a single status-dot bloom, never box-shadow
- Rim-light accents (Signal Amber + Beacon Teal) used at ≤10% coverage, derived from the avatar
- Square corners everywhere (radius `0`); separation by line and space

## 2. Colors

A near-black ground lit by a warm/cool accent pair lifted from the avatar's rim lighting, with a warm off-white for everything read and two muted greys for hierarchy.

### Primary
- **Signal Amber** (`#E39A45`): The primary accent. Every hover destination (nav, entry titles, repo links, contact links), the glowing status dot in the hero kicker, the right half of the top rim-bar and the warm corner of the ambient glow. It is the "you can act here / this is live" color. Rare by rule.
- **Beacon Teal** (`#4FC3C3`): The secondary accent. Carries entry **tags** (`PROJECT · RUST`), the left half of the rim-bar, and the cool corners of the ambient glow. Teal classifies; amber activates. Keep the two roles distinct — never swap them.

### Neutral
- **Midnight** (`#080B0E`): The page background, matched precisely to the avatar's own background so the portrait dissolves with no seam. The dark room the log is kept in.
- **Parchment** (`#EDE7DA`): Primary text — headings, entry titles, the reader's eye-line. Warm off-white, never pure white.
- **Ash** (`#A9ADA3`): Secondary text — body copy, entry descriptions, the hero paragraph. One step down from Parchment.
- **Slate** (`#6E746F`): Muted metadata — nav links at rest, the entry count, footer, repo links, open-slot copy. The quietest readable tier.
- **Hairline** (`#EDE7DA21`, i.e. Parchment at 13% alpha): Default dividers between entries, header and footer rules.
- **Hairline Strong** (`#EDE7DA66`, i.e. Parchment at 40% alpha): Section-opening rules only (the Log header underline, the Contact top border). Marks a new movement.

### Named Rules
**The ≤10% Rule.** Signal Amber and Beacon Teal together never cover more than ~10% of any view. Their rarity is the entire effect; the moment accent becomes ambient, the dark room stops glowing. If a screen feels colorful, an accent has overstepped its role.

**The Two-Job Rule.** Teal classifies (tags, categories), amber activates (hover, live status, action). A color never does the other's job. A reader learns the grammar in one screen.

**The Matched-Ground Rule.** The avatar may only ever sit on Midnight (`#080B0E`), because the dissolve mask depends on the page background equalling the portrait's background. Never place it on any other surface.

## 3. Typography

**Display Font:** Cormorant Garamond (with Georgia, serif fallback)
**Body Font:** Source Serif 4 (with Georgia, serif fallback)
**Label/Mono Font:** IBM Plex Mono (with monospace fallback)

**Character:** A literary serif that whispers paired with a technical mono that records. Cormorant Garamond is the rare raised voice — high-contrast, almost calligraphic — used only for the two large statements on the page. Source Serif 4 is the durable reading voice for the actual log. IBM Plex Mono is the instrument: every number, tag, and label, always uppercase, always tracked. Two serifs and a mono — paired on a clear contrast axis (humanist serif vs. high-contrast display serif vs. monospace), never two faces that merely resemble each other.

### Hierarchy
- **Display** (Cormorant Garamond 500, `clamp(30px, 5.2vw, 44px)`, lh 1.12, ls −0.01em): The hero H1 only. The single largest statement; one per page.
- **Headline** (Cormorant Garamond 500, 36px, ls −0.01em): The Contact "Say hello." — the page's closing statement, echoing the hero voice.
- **Title** (Source Serif 4 500, 26px, lh 1.25, ls −0.015em): Log entry titles — the most-scanned text on the site. A link; recolors to Signal Amber on hover.
- **Body** (Source Serif 4 400, 16px, lh 1.62; hero paragraph 17px / lh 1.65): Entry descriptions and the hero lede. Set in Ash. Cap measure at 65–75ch (the 720px container holds it naturally).
- **Label** (IBM Plex Mono 500, 10.5–11.5px, ls 0.05–0.16em, UPPERCASE): All metadata — nav, hero kicker, entry tags, repo links, the Log header, the footer. The tracked uppercase mono *is* the brand's connective tissue.
- **Ghost numeral** (Source Serif 4 500, 44px, lh 1, ls −0.02em, color Parchment @14% / open-slot @10%): The faint entry number running down the left column. Decorative structure, not read — kept barely-there on purpose.

### Named Rules
**The Display-Is-Rare Rule.** Cormorant Garamond appears at most twice per page (hero H1, contact H2) and never below 26px. It is the system's only raised voice; spend it sparingly or it stops meaning "this matters."

**The Rim-Light Phrase Rule.** The amber→teal gradient may be applied to type **only** as the signature rim-light flourish on a single italic phrase in the hero (`maker by compulsion`) and the contact heading — at most one phrase per view, only on the Cormorant display voice, only across the two accent hues. It is the avatar's lighting rendered as type, and that meaning is the only license for it. It is **forbidden** on body text, labels, links, or any UI text, and must never spread to a third location. (This is the one place the system intentionally uses gradient-on-text; treat the rule as the fence around it, not an invitation.)

**The Mono-Means-Meta Rule.** IBM Plex Mono is reserved for metadata and is always uppercase with tracking ≥0.05em. Never set a sentence the reader must actually read in mono.

## 4. Elevation

Flat by default. There are no card surfaces and no box-shadows anywhere in the system; every separation is done with hairlines (`#EDE7DA21` / `#EDE7DA66`) and whitespace. Depth is conveyed instead by *light*: a fixed, full-viewport ambient glow layer behind all content, a 2px rim-bar across the very top, and exactly one true shadow in the entire system — the bloom on the hero's amber status dot. If a surface ever gains a drop-shadow or a raised card, the system has broken.

### Shadow Vocabulary
- **Status-dot bloom** (`box-shadow: 0 0 10px rgba(227,154,69,0.7)`): The only shadow in the system. A warm glow on the 7×7px amber square in the hero kicker — it reads as a live indicator, the one thing emitting light rather than catching it.

### Light Vocabulary (depth without shadow)
- **Ambient glow** (fixed `inset:0`, `pointer-events:none`, behind content): layered radial gradients — teal at top-left (`rgba(79,195,195,0.08)`), amber at top-right (`rgba(227,154,69,0.07)`), faint teal at bottom-center (`rgba(79,195,195,0.04)`). The room's rim lighting; sets atmosphere, never touched directly.
- **Rim-bar** (`height:2px; linear-gradient(90deg, beacon-teal, signal-amber)`): A single lit edge across the top of the page — the accent pair stated once, like a horizon.

### Named Rules
**The No-Box Rule.** No cards, no panels, no drop-shadows. Surfaces are flat; the only relief allowed is light (glow, rim-bar) and the single status-dot bloom. If you reach for a `box-shadow` to separate content, use a hairline or space instead.

**The Square-Corner Rule.** Border-radius is `0` everywhere. The one dashed container (the open slot) and every divider are crisp and rectilinear. Rounded corners are off-brand.

## 5. Components

The components are text and line, not chrome. Each leads with a character line, then exact specs. All transitions are `color`/`border-color` over `0.15s ease`.

### Navigation
- **Style:** Inline mono links in the header and contact row. IBM Plex Mono 11px, UPPERCASE, ls 0.1em.
- **Default / Hover:** Slate (`#6E746F`) at rest → Signal Amber (`#E39A45`) on hover. Header "Nathan Englert" wordmark sits in mono 11px and links to `#top`.
- **Mobile:** Same row, wraps with `flex-wrap`; no hamburger, no overlay menu (the site is a single scroll).

### Links (contact row)
- **Style:** Parchment text, mono 11.5px UPPERCASE ls 0.1em, with a `1px` Hairline bottom-border and 4px of padding beneath — an understated underline.
- **Hover:** Both text and bottom-border shift to Signal Amber together.

### Log Entry (signature component)
- **Anatomy:** A two-column flex row (`gap: 8px 28px`, `flex-wrap: wrap`), 40px vertical padding, closed by a Hairline bottom rule. Left: the **ghost numeral** column (`flex: 0 0 84px`). Right: a flex-column body (`flex: 1 1 320px`, gap 12px) holding **tag → title → description → repo link**.
- **Tag:** Beacon Teal, mono 11px UPPERCASE ls 0.12em (`PROJECT · RUST`).
- **Title:** Source Serif 4 500, 26px, Parchment; a link, hover → Signal Amber.
- **Description:** Source Serif 4 400, 16px, Ash, `text-wrap: pretty`.
- **Repo link:** Slate mono 11.5px ls 0.05em with a trailing `↗` text glyph; hover → Signal Amber.
- **Corner Style / Background / Shadow:** none, none, none. Square, transparent, flat — separated from neighbors only by the Hairline rule. **Never** render this as a card.

### Open Slot (signature component)
- **Style:** A permanent design element after the last entry (not a placeholder): a `1px dashed` Parchment@28% border, 28px padding, same two-column layout as an entry.
- **Numeral:** the next number (current max + 1), Parchment@10% — fainter than a real entry's ghost numeral.
- **Copy:** italic Source Serif 4 16px, Slate: *"Open — the next note, essay, or experiment lands here."* Its number must always derive as `max(entry) + 1`.

### Hero Kicker
- **Style:** A mono row (11px, ls 0.16em, Slate, UPPERCASE) led by a 7×7px Signal Amber square with the status-dot bloom. The square is the only emitting light in the layout.

### Section Header (the Log)
- **Style:** A baseline-aligned flex row closed by a Hairline-Strong rule: title in Signal Amber mono (`THE LOG`), count in Slate mono (`004 ENTRIES`), the count derived and zero-padded to three digits.

### Hero Portrait (signature treatment)
- **Style:** The avatar, `object-fit: cover`, dissolved into the page with `mask-image: radial-gradient(circle at 50% 48%, black 36%, transparent 71%)` — no frame, no border, no card. Absolutely positioned and allowed to bleed past the container (root needs `overflow-x: clip`). At ≤680px it leaves absolute flow and becomes an in-flow centered vignette above the headline.

## 6. Do's and Don'ts

### Do:
- **Do** keep every new thing as the next numbered entry in the one thread, reusing the exact entry anatomy. Vary only the tag (`NOTE`, `ESSAY`, `EXPERIMENT`) — always in Beacon Teal.
- **Do** hold accent coverage to ≤10% per view; let Midnight dominate and the amber/teal points of light carry the meaning (The ≤10% Rule).
- **Do** separate content with hairlines (`#EDE7DA21`) and whitespace. Reserve Hairline-Strong (`#EDE7DA66`) for section openings only.
- **Do** set all metadata in IBM Plex Mono, UPPERCASE, tracked (The Mono-Means-Meta Rule); set everything readable in Source Serif 4.
- **Do** keep corners square (radius `0`) and surfaces flat; convey depth with the ambient glow, the rim-bar, and the lone status-dot bloom.
- **Do** verify text contrast on Midnight at WCAG AA: Parchment and Ash pass comfortably; audit **Slate** (`#6E746F`) for any text that must be read, and bump toward Ash if it's close.
- **Do** keep the avatar on Midnight only, always with the dissolve mask (The Matched-Ground Rule).

### Don't:
- **Don't** build a **generic SaaS landing page**: no hero-metric template (big number + supporting stats), no identical feature-card grids, no gradient-blob backgrounds, no CTA-stuffed sections. There is nothing to convert here.
- **Don't** go **loud or over-animated**: no scroll-jacking, no entrance choreography, no attention-grabbing motion. Default to stillness plus hover and smooth-scroll; any motion added must ship a `prefers-reduced-motion` fallback.
- **Don't** split the thread into "Writing" vs "Projects" sections, or re-shape entries into a **card-grid portfolio**. The single thread is the architecture.
- **Don't** drift toward **résumé / CV** patterns: no job timelines, no skills bars, no "download my PDF."
- **Don't** introduce cards, panels, or any `box-shadow` beyond the status-dot bloom (The No-Box Rule). No rounded corners (The Square-Corner Rule).
- **Don't** spread gradient-on-text beyond the two sanctioned rim-light phrases (The Rim-Light Phrase Rule). Never gradient body text, labels, links, or UI; never add a third location.
- **Don't** swap the accent roles — teal classifies, amber activates (The Two-Job Rule) — and never let an accent become an ambient/background fill.
- **Don't** set readable sentences in IBM Plex Mono, or raise the Cormorant display voice more than twice per page.
