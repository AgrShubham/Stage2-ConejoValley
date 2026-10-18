# Conejo Valley Counseling — 1:1 Clone Differences Audit Log

> **Target Site**: [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home)  
> **Clone Route**: `/clone`  
> **Status**: In-Progress Visual Comparison & Parity Audit  
> **Last Updated**: 2026-10-18  

This document logs every visual, typographic, structural, and behavioral difference identified between the original live site and our Next.js clone through side-by-side screenshot comparisons.

---

## Section 1: Navigation & Hero (Above the Fold)

### A. Navigation & Header Bar
| # | Element | Original Site | Current Clone | Impact / Severity |
|---|---|---|---|---|
| 1.1 | **`CONTACT` Button Border Radius** | Elongated pill / oval shape (`border-radius: 9999px` / `rounded-full`). | Sharp rectangular box (`border-radius: 0` / `rounded-none`). | High — obvious visual shape mismatch in top-right CTA. |
| 1.2 | **Dropdown Indicator Chevrons** | Plain text links only (`OUR TEAM`, `SPECIALTIES`, `METHODS`) — **no downward arrows/chevrons**. | Shows down-chevron icons (`v` / `lucide-chevron-down`) next to folder links. | Medium — unnecessary visual clutter not present on original. |
| 1.3 | **Nav Link Spacing & Tracking** | More horizontal space between items (`gap-8` to `gap-10`), lighter letter-spacing (`0.12em`). | Slightly tighter spacing. | Low — aesthetic refinement. |
| 1.4 | **Logo Typography** | "Conejo Valley" display serif, "FAMILY COUNSELING" in spaced teal/slate caps. | Logo rendered via PNG image. | Low — matching closely. |

---

### B. Eyebrow Text (`ONLINE & IN-PERSON COUNSELING...`)
| # | Element | Original Site | Current Clone | Impact / Severity |
|---|---|---|---|---|
| 1.5 | **Line Breaks** | Formatted across **2 lines**:<br>• Line 1: `ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK &`<br>• Line 2: `ACROSS CA` | Rendered as a **single long continuous line**. | High — alters the visual block shape above the headline. |
| 1.6 | **Vertical Alignment** | Top edge of eyebrow aligns directly with the top edge of the left family photograph. | Sits noticeably higher than the top edge of the left photo. | Medium — breaks the horizontal alignment plane. |

---

### C. Main Headline (H1) & Script Accent
| # | Element | Original Site | Current Clone | Impact / Severity |
|---|---|---|---|---|
| 1.7 | **Headline Line Breaks** | Formatted across 3 lines with specific breaks:<br>• Line 1: `Rebuild your foundation on`<br>• Line 2: `solid ground and finally begin`<br>• Line 3: `to thrive.` | Broken differently:<br>• Line 1: `Rebuild your foundation on solid`<br>• Line 2: `ground and finally begin to`<br>• Line 3: `Thrive.` | High — changes the reading cadence and word grouping. |
| 1.8 | **Script Word Capitalization** | Lowercase **`t`**: `thrive.` with a period at the end. | Capitalized **`T`**: `Thrive.` with a period. | High — grammatical and typographic mismatch. |
| 1.9 | **Script Word Positioning & Scale** | Sits inline on Line 3 directly preceded by `"to "`: `to thrive.`. Delicate stroke weight, proportional to serif body. | Isolated alone on Line 3. Noticeably oversized, creating excessive vertical height. | High — distorts the headline visual rhythm. |
| 1.10 | **Serif Font Weight** | Ultra-light weight 300 (`beaufort-pro` 300) with thin stems and delicate brackets. | Slightly heavier stem weight. | Medium — slight difference in elegance. |

---

### D. Subtitle & CTA Link
| # | Element | Original Site | Current Clone | Impact / Severity |
|---|---|---|---|---|
| 1.11 | **Subtitle Container & Wrap** | Fits comfortably across 1 line (or natural balanced wrap). | Container is restricted (`max-w-xl`), forcing the single word `grow.` onto an orphaned line 2. | Medium — orphaned word typography flaw. |
| 1.12 | **CTA Link Underline** | `BOOK AN APPOINTMENT` has a tight, subtle 1px underline positioned close to the text baseline. | Underline has slightly larger vertical gap. | Low — subtle micro-spacing difference. |

---

### E. Hero Photography & Visuals
| # | Element | Original Site | Current Clone | Impact / Severity |
|---|---|---|---|---|
| 1.13 | **Left Family Photo Height** | Tall portrait orientation. Bottom edge extends **well below** the `BOOK AN APPOINTMENT` button, anchoring the section. | Shorter and squarer (`aspect-[1365/1246]`), ending almost level with the button. | High — changes the overall vertical scale of the hero section. |
| 1.14 | **Left Container Gutter** | Generous left margin/gutter separating the image from the viewport edge. | Image is pushed closer to the left edge. | Medium — affects breathing room. |
| 1.15 | **Right Edge Sliver Image** | Narrow vertical slice showing ocean waves washing onto sand. | Uses `hero-right.jpg` showing a child walking on sand, positioned slightly lower. | Medium — wrong image asset / crop. |
| 1.16 | **Section Height & Fold Visibility** | Section has generous top/bottom padding. Next section is barely hinted at below the fold. | Section is shorter, causing the H2 of Section 2 (*"You're holding onto hope..."*) to creep prominently above the fold. | Medium — affects viewport fold experience. |

---

## Future Sections Log (Awaiting Screenshots)
- [ ] Section 2: Intro / Empathy Block (*"You're holding onto hope..."*)
- [ ] Section 3: Who We Help (3-Card Grid)
- [ ] Section 4: Quote Banner (*"You deserve a place..."*)
- [ ] Section 5: Areas of Expertise (12 Tags)
- [ ] Section 6: How We Work (Bio & Dancing Photo)
- [ ] Section 7: Honoring Family (Divider Photo & Quote)
- [ ] Section 8: Specialties 2x2 Grid (Trauma, Dissociation, EMDR, Special Needs)
- [ ] Section 9: Schedule Appointment CTA (Seashell Photos & Booking)
- [ ] Section 10: Pre-Footer & Clinic Info
- [ ] Section 11: Copyright Bar
