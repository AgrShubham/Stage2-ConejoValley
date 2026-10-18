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

## Sections 2–11 Status Overview
* **Section 2 (Intro / Empathy)**: 2-column text + beach photo cols 19..27. Mobile: Beach photo inserted between Paragraph 1 and 2. **[Verified]**
* **Section 3 (Who We Help)**: 3-card grid (Adults, Couples, Children & Teens). **[Verified]**
* **Section 4 (Quote Banner)**: Full-bleed `#2B2B2B` with high-contrast `#F7F6F2` glowing text. **[Verified]**
* **Section 5 (Areas of Expertise)**: Sticky left heading + 2 columns of 6 clinical tags with `#E8E7E3` underlines. **[Verified]**
* **Section 6 (How We Work)**: Bio copy + dancing photo cols 21..27. Mobile: photo below H2. **[Verified]**
* **Section 7 (Honoring Family)**: Left full-bleed family photo + right quote with script `&`. **[Verified]**
* **Section 8 (Specialties 2x2 Grid)**: Trauma, Dissociation, EMDR, Special Needs Parenting. **[Verified]**
* **Section 9 (Schedule CTA)**: Seashells framing centered booking card. **[Verified]**
* **Section 10 (Pre-Footer)**: Logo, intro, 4 nav links, 9 clinicians directory, address/phone. **[Verified]**
* **Section 11 (Copyright Bar)**: Dark `#2B2B2B` with inline wrapping links. **[Verified]**
