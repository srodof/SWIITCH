# SWIITCH Design System

SWIITCH is a marketing and communications agency based in Santa Cruz de la Sierra, Bolivia, with a second office in Miami. Founded on 15+ years of experience, it offers four integrated service lines: **Marketing Digital** (social media, influencer marketing, web design, digital consulting), **Comunicación** (corporate communication, PR, corporate events), **Publicidad** (creative, branding, BTL/activations, media planning), and **Transformación Digital** (digital transformation consulting, CRM implementation). The brand voice is that of an established, senior professional-services agency — confident, results-oriented, and unusually candid about its own methodology.

Visually the system is built on real editorial photography of people at work, a single saturated raspberry-red accent (`#FF3052`), and one workhorse typeface (Montserrat) used everywhere except the highest-impact headline level. There are no decorative shadows, no gradients, and no second brand color — hierarchy comes entirely from alternating three flat surfaces (white / pearl-gray / dark photo band) and from the disciplined, singular use of red.

## Sources

- **GitHub repo `srodof/SWIITCH`** — attached as the primary input, but the repository was **empty at the time this system was built** (no commits/files could be read). If content is pushed later, re-run this design system against it to replace the assumptions below with real source.
- **Live site analysis** — `swiitchad.com`, read via live page fetch (home page, services pages) and a detailed prior DOM/CSS audit (Elementor global kit `elementor-kit-6957`) supplied in the project brief. All hex values, type scales, spacing and component specs in this system trace back to that audit.
- Explore `srodof/SWIITCH` yourself once it has content — https://github.com/srodof/SWIITCH — to cross-check or extend this system against the real WordPress/Elementor implementation.

## Components

All in `components/<group>/`, each `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`:

- **buttons/** — `Button` (primary + slider-cta variants, trailing chevron)
- **navigation/** — `NavBar` (transparent / solid scroll states)
- **cards/** — `ServiceTile`, `MethodologyIconBlock`, `PortraitImage`
- **sections/** — `SectionSurfaceLight`, `SectionCTAPhoto`
- **forms/** — `FormInput`, `FormSubmitButton`
- **footer/** — `Footer`
- **misc/** — `WhatsAppButton`
- **icons/** — `Icon` (generic outline glyphs), `SocialIcon` (real brand marks via CDN)

**Intentional additions:** no source codebase defined a component inventory (repo was empty), so this system authors the standard set implied by the YAML `components:` spec in the brief (nav, buttons, tiles, icon blocks, sections, forms, footer, floating action button) — nothing beyond what that spec described.

## UI Kit

`ui_kits/marketing-site/` — an interactive recreation of the marketing website's home page, following the real page's section order (hero → intro → services grid → methodology → clients → CTA → footer), plus the Contacto and Marketing Digital page heroes as secondary views.

## Content Fundamentals

- **Language:** Spanish (Bolivia/Latin America), informal "vos/tú" register mixed with formal "usted" in places — copy leans conversational-professional ("¿Buscás una agencia...", "Cuéntanos, ¿cómo podemos ayudarte?").
- **Person:** primarily **"nosotros" (we)** for agency capability statements ("Somos SWIITCH", "Ofrecemos", "Contamos con...") switching to direct address **"tu/tú/vos"** for the reader's business ("tu marca", "impulsar el éxito de tu empresa"). Never a distant third person.
- **Headline pattern:** short label + bold statement, e.g. "Redes Sociales / Escuchamos, cautivamos y conectamos" or "Diseño y Desarrollo Web / Especialistas en negocios digitales" — an eyebrow naming the service, then an emotionally-pitched benefit line.
- **Body copy:** confident, outcomes-first, frequently cites the "15+ años de experiencia" credential and measurable results ("acciones 100% medibles", "medimos KPIs"). Sentences are often linked with contrast connectors ("Sin embargo...", "Pero lo más importante es que...", "A causa de este enfoque...") — a slightly formal, essay-like connective tissue distinct from punchy startup copy.
- **CTAs:** short, warm, conversational verbs — "Conócenos", "Ver más", "Conversemos", "Cuéntanos, ¿cómo podemos ayudarte?" — never generic "Submit" or "Learn More".
- **Casing:** sentence case throughout, including buttons — never uppercase. Brand name **SWIITCH** is always full-caps as a proper noun/wordmark.
- **Emoji:** not used in body copy. Punctuation is otherwise standard Spanish (inverted ¿ ¡).
- **Tone words:** "impulsar", "estrategia", "resultados reales", "acompañamiento real", "conectar" — an emphasis on partnership and follow-through rather than one-off deliverables.

## Visual Foundations

**Color:** one accent, `#FF3052` (raspberry red), used with zero exceptions for every interactive element — buttons, icons, footer links, the required-field asterisk, the WhatsApp button. There is no second brand hue; hover/active states are programmatic darkenings of the same red (`--color-primary-hover #E62B49`, `--color-primary-active #CC2640`), never a new hex. Three flat surfaces do all the "depth" work: pure white, pearl-gray `#F8F8F8`, and a near-black `#212121` footer/photo-overlay tone (deliberately not pure `#000000`, which is reserved as a small-label "secondary ink").

**Type:** two families, strictly scoped. **Heavitas** (substituted — see Known Gaps) is reserved *exclusively* for the H1/hero level (`hero-slider` 80px, `display-lg` 48px) and must never appear elsewhere. **Montserrat** covers literally everything else, in exactly two weights: 400 for body copy, 700 for every heading/button/label below H1. There is no 500 or 600 weight anywhere. Letter-spacing is `normal` everywhere except the hero slider's CTA button (`1px`) — the system's one isolated tracking exception. Body paragraphs are frequently **justified**, an editorial, agency-corporate choice rather than the left-aligned default typical of web copy.

**Backgrounds:** full-bleed editorial photography of people/business at work, always either (a) cropped rectangular inside a service tile, (b) full-bleed with a dark overlay behind white text (hero bands, CTA bands), or (c) cropped to a full circle for portraits. No illustration, no patterns, no textures, no gradients as decoration (a gradient/overlay is used only functionally, to guarantee text contrast over a photo).

**Animation:** none specified in source material — treat as a static, editorial system; if motion is needed, keep it minimal (opacity/color fades only, no bounce/spring).

**Hover states:** buttons and links darken the same red (~85–90% darken/opacity) — never lighten, never shift hue. No lift/shadow/scale on hover.

**Press/active states:** darken further than hover (see `--color-primary-active`); no scale or shadow change.

**Borders:** essentially none. The single confirmed hairline is `1px solid rgba(0,0,0,0.25)` on form inputs — the only visible border anywhere in the system.

**Shadows:** zero. `box-shadow: none` is verified on every button, card, and input. All depth comes from surface contrast and photo overlays, never elevation.

**Corner radii:** deliberately minimal and role-specific — `0px` on service-tile photos (full-bleed, no softening), `3px` on form fields and the slider CTA, `5px` on the primary button (the system's "action" radius), full `200px` circle on portrait crops, and `9999px` full-round on the one floating action button. Never round a photo tile.

**Cards:** no shadow, no border, no rounding (service tiles are square-cornered); the only structure is the surface (white) and the photo above it.

**Layout rhythm:** section padding is **percentage-based** (1–5%) and hero/band heights are **viewport-relative** (30–50vh) rather than fixed pixels — the system breathes proportionally to the screen instead of snapping to px breakpoints for spacing (grid gaps themselves — 20/40/60px — are the one place fixed px is used). Breakpoints: 767px (mobile↔tablet), 1024px (tablet↔desktop).

**Transparency/blur:** transparency used only for the transparent-over-photo nav state and the dark photo overlay (`rgba(0,0,0,0.55)`); no blur/frosted-glass anywhere.

**Imagery color vibe:** warm, real, editorial business photography — people, offices, devices — not stock-cliché or heavily graded; no black-and-white or heavy grain treatment specified.

**Buttons — signature detail:** every button/CTA renders its chevron icon **after** the label (`flex-direction: row-reverse`) — a consistent, deliberate signature across the whole site, replicated in `Button.jsx`.

## Iconography

- **No custom icon font or SVG sprite was found** (source repo was empty). The site's own iconography is limited to (a) a handful of bare, red, line-style glyphs for the "methodology" differentiator blocks (target/growth/measurement style marks, ~80px, no container), (b) a trailing chevron on every button, and (c) small mail/phone/pin glyphs in the footer contact block.
- This system substitutes those with a small hand-built set of generic outline glyphs in `components/icons/Icon.jsx` (chevron, check, x, menu, mail, phone, map-pin, message-circle, search, users, target, bar-chart, trending-up, arrow-up-right) — simple 24×24 stroke icons in the same minimal-line spirit as the source description. **This substitution is flagged**: if the real methodology icon set exists in the (currently empty) repo, swap it in and it will look more on-brand than these generics.
- **Social/brand marks** (Facebook, Instagram, LinkedIn, TikTok) are never hand-drawn — `SocialIcon.jsx` loads the real marks live from the Simple Icons CDN (`cdn.simpleicons.org`), so the actual logos render correctly.
- No emoji or Unicode-symbol icons are used anywhere in the source copy.
- **Logo:** no logo file was recoverable (empty repo, and the live site's `<img>` sources render with empty alt/URLs in a text-only fetch). Every place a logo would go — the nav, the footer — renders the plain wordmark **"SWIITCH"** in type instead. Do not draw or approximate the real Swiitch logotype; replace this placeholder with the real logo file(s) (the live site references `logo-swiitch-w.png` white variant and a red variant) as soon as they're available.

## Known Gaps — please help fix these

1. **Heavitas is not actually available.** It's a paid/personal-use-only display typeface (not on Google Fonts) reserved for H1/hero in the source spec. This system substitutes **Fredoka** (a similarly geometric, soft-edged, heavy display sans from Google Fonts) wherever `--font-display` is used, and flags every use. **Please supply the licensed Heavitas (or Heavitas Neue) webfont files** and we'll swap `tokens/fonts.css` to self-hosted `@font-face` — a one-line change once files are provided.
2. **No logo file exists in this system.** Nav and footer show a plain "SWIITCH" text wordmark. Please attach the real logo (white + red variants, ideally SVG) and we'll drop it in and wire it into `NavBar`/`Footer`.
3. **The GitHub repo `srodof/SWIITCH` was empty** at build time — this whole system is built from the live site's rendered markup/copy plus a prior structured brand audit, not from real component/theme source. If you push the actual WordPress/Elementor theme (or a Figma file) later, re-run this system against it to tighten every measurement and recover the real icon set and photography.
4. **Photography is entirely placeholder** (flat gray gradient boxes) — no real photos were available to copy in. Please supply real editorial photography (hero shots, service imagery, portraits) to replace the placeholders in `ServiceTile`, `SectionCTAPhoto`, and `PortraitImage`.
5. **Client logo strip** (BMW, Neutrogena, Jeep, etc. shown on the live homepage) is omitted — those are third-party marks this system shouldn't reproduce without the actual approved logo files.

## Index

- `styles.css` — global stylesheet entry (imports everything in `tokens/`)
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `fonts.css`
- `guidelines/` — 21 foundation specimen cards (Colors, Type, Spacing, Shape, Brand groups)
- `components/` — 13 components across 8 groups (see above)
- `ui_kits/marketing-site/` — home page + Contacto/Marketing Digital hero recreation
- `thumbnail.html` — project tile
- `SKILL.md` — portable skill file for use in Claude Code
