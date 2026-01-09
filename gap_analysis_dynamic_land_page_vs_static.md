The current live page and the reference static HTML mockup are structurally aligned in content and semantics, but the live view appears to be a simplified, partially implemented rendering that is missing the full illuminated-manuscript art direction, component richness, and interaction layer defined in the mockup.[1][2]

## Executive summary

- Core **information architecture** (hero, compendium, process, testimonials, correspondence, colophon) on localhost matches the mockup’s section order and copy at a coarse level.[2][1]
- The **reference mockup** defines a far richer visual system (manuscript frame, gold leaf, seals, typographic system, apparatus illustrations, full compendium catalog, cart drawer, toast system, accessibility banners) that are not visible or not fully realized on the loaded page.[2]
- Multiple **microcopy, taxonomy, and naming** divergences (e.g., “Atelier Arôme” vs “Atelier Arme”, folio labels, essence naming, folio counts, process details) indicate the live implementation is working from the same narrative but not synchronized with the canonical reference.[1][2]

***

## Layout & section-level alignment

**What matches:**

- Section sequence: Hero → Botanical Compendium → Alchemical Process → Patron Manuscript → Correspondence → Footer/Colophon is preserved on localhost, mirroring the mockup’s main sections.[1][2]
- Major headings and taglines, such as “The Art of Scent as Alchemy” / “Where Botany Becomes Poetry”, appear in both, keeping the narrative spine intact.[2][1]
- Testimonials and subscription narrative (quarterly folio, verified patrons, Provence atelier address) exist in both documents with closely related wording.[1][2]

**What diverges or is missing in the live page:**

- The reference HTML uses an **illuminated manuscript layout** with a parchment texture overlay, gold-leaf fixed accents, a hand‑drawn border around the hero, and a rotating seal; these elements are defined in CSS and markup but are not evident in the linear text representation of the loaded page (suggesting either styling is not fully applied or the inspected content is closer to an accessibility/plain-text view).[2][1]
- The header structure in the mockup includes an **atelier hours banner**, rotating atelier seal, desktop nav, mobile nav with “Folio I–IV”, tools (search, vial/cart), and mobile quill menu toggle; the live page only exposes a simple branding line (“AArômeEst. 2024”) and basic anchor navigation without the richer chrome or controls visible in the mockup spec.[1][2]

***

## Content details: compendium, process, and manuscript

### Botanical compendium

- The localhost compendium shows **3 essences** (English Lavender, Damask Rose, Blue Gum) with simple attributes: humour icon, rarity (COMMON / RARE), season, and price per 15ml.[1]
- The reference mockup expects a **larger catalog** (12 essences total, with a “Continue Reading” / “Load more essences” control) and different primary entries: Provence Lavender (Lavandula intermedia), Tasmanian Eucalyptus, Calabrian Bergamot, with detailed notes (Season, Notes, Extraction, phial size) and illuminated card frames.[2]

Key differences:

- Naming and taxonomy: “English Lavender” vs “Provence Lavender” for Lavandula species; the mockup carefully separates Latin name, common name, and region, while the live page uses simpler commodity-style labels with 15ml pricing instead of “per 5ml phial”.[2][1]
- Interaction model: the mockup compendium includes **humour filters**, sort dropdown (Folio / Humour / Rarity / Season), and “Add to vial” buttons wired into a cart/vial system, whereas the live content only lists “ADD TO VIAL” as text without clear evidence of the full drawer and stateful behavior in the linear snapshot.[1][2]

### Alchemical process

- Conceptual phases (Nigredo, Albedo, Citrinitas, Rubedo) exist in both, but the **durations and descriptions differ**.[2][1]
  - Live page: Nigredo uses “Preparation through gentle maceration, 24–48h, Cold Maceration”; mockup: Nigredo is 7–14 days drying with ambient temperature, aligning more with a long transformation stage.[1][2]
  - Live page: Albedo lists “DURATION 72h” and generic steam distillation; mockup explicitly calls out “72 hours at 40°C” with more precise process notes.[2][1]

- The mockup pairs steps with **apparatus illustrations** (Copper alembic, maturation vessels, tools) and an “Ars Magna” watermark, which are not identifiable in the simplified live content stream.[2]

### Patron manuscript

- Both versions feature three patron accounts with similar emotional tone and structure: quote text, author name, verification/role, and dates/folios.[1][2]
- The mockup frames these as **illuminated entries** with decorative corners, seals, and paginated navigation (page X of 7), while the live page uses a simpler “Previous page / 1 / Next page” text pattern without visible illuminated borders.[1][2]

***

## System & interaction layer

### Cart / “vial” system

- The mockup defines a fully‑fledged **collection vial drawer**: cart button with badge count, slide‑over drawer, item quantities, total essence value, dispatch button, and toast notifications (“Essence added to collection vial”), including localStorage‑persisted state and WCAG‑aware focus traps.[2]
- In the live page snapshot, “View collected vials” and “ADD TO VIAL” appear, but there is no visible confirmation of the drawer UI, cart counts, or toast messages, implying either that interactions have not been wired yet in the running build or the captured content is pre‑interaction.[1][2]

### Search & navigation

- The static reference includes:
  - **Search control** (“Search the compendium”) as a header tool with icon and a11y labels.[2]
  - Full mobile nav with “Folio I–IV” labels and a quill menu toggle that uses aria-expanded and animated transitions.[2]
- The live page only shows **plain text “Search the compendium”** and in‑flow nav links without evidence of the iconographic tools bar or mobile-specific nav treatment.[1][2]

### Accessibility & motion

- The mockup ships an extensive **accessibility and performance patch**:
  - Reduced motion handling, color‑contrast adjustments, large touch targets for mobile, skip link, live regions (“a11y-announcer”, cart updates, motion announcements).[2]
- The live content includes a “Skip to main content” link, but there is no indication that reduced‑motion feedback, toast live regions, or updated contrast tokens (e.g., `--color-ink-muted-accessible`) are successfully in place in the rendered experience.[1][2]

***

## Branding, typography, and copy integrity

- The mockup consistently brands the atelier as **“Atelier Arme”** in the HTML title and colophon, with Cormorant Garamond and Crimson Pro as the core type pairing, plus ornamental typefaces.[2]
- The live page title and header show **“Atelier Arôme — Artisanal Aromatherapy Essences”** and “AArômeEst. 2024”, indicating either an updated brand spelling or a divergence from the reference’s canonical naming.[1][2]
- The colophon text in the mockup explicitly states “This digital folio was typeset in Cormorant Garamond and Crimson Pro,” which is echoed nearly verbatim at the bottom of the live page, so the **typographic intention** is aligned even if the brand spelling differs.[1][2]

***

## High-level verdict

- From a **UX architecture** standpoint, the localhost build is broadly faithful: same folio structure, thematic sections, and narrative arc are present.[2][1]
- From a **visual hierarchy and avant‑garde “illuminated folio” standpoint**, the current live rendering falls short of the reference: key ornamental systems (parchment texture, illuminated cards, animated seal, apparatus drawings, alchemical framing devices) and the full interaction model (cart drawer, filters, toast system, enhanced accessibility behaviors) are defined in the mockup but not fully visible or synchronized in the running page.[1][2]

If you want, the next step can be a gap‑closure plan: section‑by‑section checklist (hero, compendium, process, manuscript, correspondence, colophon, cart/interaction, accessibility) with concrete implementation tasks to bring the live Next.js/Tailwind/Shadcn build up to parity with — or intentionally beyond — the static illuminated-manuscript reference.

[1](http://localhost:3000/)
[2](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/44072005/648f1d35-2f4b-43a2-9eef-484d325f53dc/reference_static_HTML_mockup.md)
