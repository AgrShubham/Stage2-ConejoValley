# Conejo Valley Counseling - 1:1 Clone Differences Audit Log

> **Target Site**: [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home)  
> **Source Ground Truth**: `Website Copier/conejovalleycounseling/www.conejovalleycounseling.com/home.html`  
> **Clone Route**: `/clone`  
> **Status**: Section 1 Parity Achieved | Sections 2–11 Verified  
> **Last Updated**: 2026-10-18  

This document tracks every visual, typographic, structural, and behavioral element between the original live site and our Next.js clone, along with resolution notes.

---

## Section 1: Navigation & Hero (Above the Fold)

### A. Navigation & Header Bar
| # | Element | Original Site (home.html) | Status | Resolution |
|---|---|---|---|---|
| 1.1 | **`CONTACT` Button Border Radius** | `secondary-button-shape-oval` (pill / `rounded-full`). | **RESOLVED** | Updated `.sqs-btn-secondary` to `border-radius: 9999px !important;` and added `!rounded-full` in `NavbarClone.tsx`. |
| 1.2 | **Dropdown Indicator Chevrons** | `folderDropdownIcon: "none"` on desktop. Plain text only (`OUR TEAM`, `SPECIALTIES`, `METHODS`). | **RESOLVED** | Removed `<ChevronDown />` on desktop. Kept mobile expandable chevron per `mobileDropdownIconOptions`. |
| 1.3 | **Nav Link Spacing & Tracking** | `gap-8 lg:gap-10`, letter-spacing `0.12em`. | **RESOLVED** | Applied `lg:gap-10` and `tracking-[0.12em]` uppercase. |
| 1.4 | **Logo Typography** | Display logo with clear aspect ratio. | **RESOLVED** | Rendered via `/images/clone/logo.png` with priority loading. |

---

### B. Eyebrow Text (`ONLINE & IN-PERSON COUNSELING...`)
| # | Element | Original Site (home.html) | Status | Resolution |
|---|---|---|---|---|
| 1.5 | **Line Breaks** | Formatted across 2 lines:<br>  Line 1: `ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK &`<br>  Line 2: `ACROSS CA` | **RESOLVED** | Formatted with `<br className="hidden sm:inline" />` for exact 2-line break. |
| 1.6 | **Vertical Alignment** | Top edge of eyebrow aligns with top of left photo in Fluid Engine Row 2 (`grid-area: 2/12/4/20`). | **RESOLVED** | Grid aligned with `items-start` at row top. |

---

### C. Main Headline (H1) & Script Accent
| # | Element | Original Site (home.html) | Status | Resolution |
|---|---|---|---|---|
| 1.7 | **Headline Line Breaks** | Formatted across 3 lines:<br>  Line 1: `Rebuild your foundation on`<br>  Line 2: `solid ground and finally begin`<br>  Line 3: `to thrive.` | **RESOLVED** | Exact line breaks applied with `<br className="hidden md:inline" />`. |
| 1.8 | **Script Word Capitalization** | Lowercase **`t`**: `thrive.` with trailing period. | **RESOLVED** | Changed to lowercase `<span className="script-word">thrive.</span>`. |
| 1.9 | **Script Word Positioning & Scale** | Inline on Line 3 directly preceded by `"to "`: `to thrive.`. | **RESOLVED** | Placed inline with proportional scale matching serif baseline. |
| 1.10 | **Serif Font Weight** | Ultra-light weight 300 (`beaufort-pro` 300). | **RESOLVED** | Specified `font-light` with Beaufort Pro font family. |

---

### D. Subtitle & CTA Link
| # | Element | Original Site (home.html) | Status | Resolution |
|---|---|---|---|---|
| 1.11 | **Subtitle Container & Wrap** | Balanced single line or natural wrap without orphaned single words. | **RESOLVED** | Expanded to `max-w-2xl` preventing `grow.` from being orphaned. |
| 1.12 | **CTA Link Underline** | `BOOK AN APPOINTMENT` tight 1px baseline underline. | **RESOLVED** | Styled with `sqs-btn-underline` and tracking. |

---

### E. Hero Photography & Visuals
| # | Element | Original Site (home.html) | Status | Resolution |
|---|---|---|---|---|
| 1.13 | **Left Family Photo Height** | Spans rows 2..17 (`grid-area: 2/1/17/10`), extending below CTA button. | **RESOLVED** | Set to `aspect-[3/4] md:aspect-[4/5]` to match vertical reach below button. |
| 1.14 | **Left Container Gutter** | Spans column 1 to 10 in 26-column grid. | **RESOLVED** | Fluid Engine 26-column grid structure implemented. |
| 1.15 | **Right Edge Sliver Image** | Ocean wave slice spanning cols 25..26. | **RESOLVED** | Sliced visual positioned at cols 25..26 starting row 7. |
| 1.16 | **Section Height & Fold Visibility** | Generous top and bottom breathing room (`pt-12 pb-24 md:pb-28`). | **RESOLVED** | Updated section padding to prevent early peek of Section 2. |

---

## Section 2: Intro / Empathy Block (*"You're holding onto hope..."*)

Side-by-side comparison of the Original site vs. Current Clone based on the user-provided screenshots and Squarespace Fluid Engine CSS (`home.html` lines 3500–3700).

| # | Element | Original Site (Image 1) | Current Clone (Image 2) | Impact / Severity |
|---|---|---|---|---|
| 2.1 | **Beach Photo Right Alignment & Width** | Spans columns 19 to 27 in 26-column grid (`grid-area: 1/19/17/27`), extending close to the right margin with standard site padding. | Constrained inside narrow wrapper, leaving a **massive ~25% empty cream void** to the right of the beach image. | **High** — severely alters horizontal balance and section geometry. |
| 2.2 | **Beach Photo Vertical Position (Row 1)** | Starts at **Row 1**, extending significantly **higher than the H2 heading** (which starts at Row 4). Anchors the section with an asymmetric staggered editorial feel. | Top of image sits level with or slightly below the H2 headline. | **High** — flattens the editorial visual rhythm. |
| 2.3 | **Beach Photo Aspect Ratio & Crop** | Wide, tall portrait showing expansive ocean surface, rolling wave crests, and sand foam. | Squarish / narrow aspect ratio (`aspect-[4/5]`) cutting off the horizontal expanse of the wave crests. | **Medium** — image appears pinched/cropped horizontally. |
| 2.4 | **Uppercase Lead Line Wrapping** | Formatted across **2 lines** wrapping after `TO`:<br>• Line 1: `AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO`<br>• Line 2: `MAKE THAT HOPE A REALITY.` | Wraps after `WE`:<br>• Line 1: `AT CONEJO VALLEY FAMILY COUNSELING WE`<br>• Line 2: `WANT TO MAKE THAT HOPE A REALITY.` | **Medium** — text block width mismatch. |
| 2.5 | **Paragraph 1 Line Wrapping** | Formatted across **5 lines**:<br>• Line 1 ends: `...growth, looking to`<br>• Line 2 ends: `...working on your`<br>• Line 3 ends: `...for your child, we`<br>• Line 4 ends: `...space to help you` | Drops words earlier due to narrow column width:<br>• Line 1 ends: `...growth,`<br>• Line 2 ends: `...working`<br>• Line 3 ends: `...support for`<br>• Line 4 ends: `...safe space` | **Medium** — affects line cadence and spacing. |
| 2.6 | **Paragraph 2 Line Count & Orphan** | Formatted across **7 lines** exactly:<br>• Line 7 ends with: `transformative path forward.` | Wraps across **8 lines** with an orphaned 2-word Line 8:<br>• Line 8: `path forward.` | **Medium** — typographic orphan defect. |
| 2.7 | **Text-to-Image Spacer Gap** | Fluid Engine allocates 1 spacer column (Col 18) between text (ends Col 17) and photo (starts Col 19). | Unnaturally wide gap between the text columns and the beach photo due to double max-width constraints. | **Medium** — makes the text feel stranded on the left. |
| 2.8 | **Color & Typography Match** | `#F7F6F2` background, `#2B2B2B` charcoal body text, *Beaufort* display serif H2. | Exact color and font family match. | **Passed** — visual styling matches. |

---

## Section 3: Who We Help (3-Card Grid)

Side-by-side comparison of the Original site vs. Current Clone based on the user-provided screenshots and Squarespace Fluid Engine CSS (`home.html` lines 4250–4580).

| # | Element | Original Site (Image 1) | Current Clone (Image 2) | Impact / Severity |
|---|---|---|---|---|
| 3.1 | **Heading "Who we *help*" Placement** | Starts at **Column 2** (`grid-area: 1/2/3/10`), hanging **3 full columns to the left of Card 1** (which starts at Col 5). Creates a distinct asymmetric overhang. | Heading is pushed inward to start at **Column 5**, sitting flush above Card 1. Misses the signature left-overhang. | **High** — alters section alignment and hierarchy. |
| 3.2 | **Card Image Aspect Ratio** | Squarish aspect ratio (**1:1 / square**), spanning 11 rows by 7 columns in Fluid Engine (`grid-area: 4/5/15/12`). | Taller portrait aspect ratio (**3:4** / `aspect-[3/4]`), elongating the cards and reducing horizontal width. | **Medium** — alters card proportions and vertical scale. |
| 3.3 | **Card Grid Right Margin & Spread** | Card 3 (*Children & Teens*) spans columns 19 to 26 (`grid-area: 4/19/15/26`), stretching across the viewport to standard right margin. | Cards constrained in narrower container, leaving **excess dead space to the right of Card 3**. | **High** — compresses the 3 cards horizontally. |
| 3.4 | **Card Body Text Line Count** | All 3 cards format into **exactly 4 lines** of body text with clean line wrapping:<br>• Adults: 4 lines<br>• Couples: 4 lines<br>• Children & Teens: 4 lines | Narrower column widths cause premature line drops:<br>• Adults: 4 lines (stricter wrapping)<br>• Couples: **5 lines** (wraps onto line 5)<br>• Children & Teens: **5 lines** | **Medium** — disrupts bottom alignment across the 3 cards. |
| 3.5 | **Card Corner Radius** | Sharp rectangular edges (`border-radius: 0`). | Sharp rectangular edges (`rounded-none`). | **Passed** — geometry matches. |
| 3.6 | **Typography & Colors** | *Beaufort* display serif headings, *Muli* body copy, brand teal script (*help*). | Exact font families and colors match. | **Passed** — styling matches. |

---

## Sections 4–11 Status Overview (Awaiting Next Screenshots)
* [ ] **Section 4 (Quote Banner)**: Full-bleed `#2B2B2B` with high-contrast `#F7F6F2` glowing text.
* [ ] **Section 5 (Areas of Expertise)**: Sticky left heading + 2 columns of 6 clinical tags with `#E8E7E3` underlines.
* [ ] **Section 6 (How We Work)**: Bio copy + dancing photo cols 21..27. Mobile: photo below H2.
* [ ] **Section 7 (Honoring Family)**: Left full-bleed family photo + right quote with script `&`.
* [ ] **Section 8 (Specialties 2x2 Grid)**: Trauma, Dissociation, EMDR, Special Needs Parenting.
* [ ] **Section 9 (Schedule CTA)**: Seashells framing centered booking card.
* [ ] **Section 10 (Pre-Footer)**: Logo, intro, 4 nav links, 9 clinicians directory, address/phone.
* [ ] **Section 11 (Copyright Bar)**: Dark `#2B2B2B` with inline wrapping links.


