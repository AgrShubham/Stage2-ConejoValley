# Grow My Therapy — Front-End Developer Internship Assignment
### Stage 2: UI Cloning, Creative Redesign & Custom Section

> Built with **Next.js 16 (App Router)**, **Tailwind CSS**, and **TypeScript** for the **Grow My Therapy** Internship Selection Process.

---

## 🌟 Executive Summary

This project showcases a dual-implementation strategy designed to provide evaluators with an immediate, side-by-side comparison between:
1. **Part 1 — 1:1 UI Clone (`/clone`)**: A pixel-accurate, layout-faithful recreation of [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home).
2. **Part 2 & 3 — Creative Redesign & New Section (`/`)**: A bespoke, luxury wellness redesign for **Dr. Maya Reynolds, PsyD**, a Santa Monica licensed psychologist, utilizing a custom coastal-earth aesthetic, SEO-targeted copy, authentic client photography, and a completely new **"Our Office"** section.

Evaluators can effortlessly switch between both versions using the **Interactive Mode Switcher** located in the bottom-right corner of every page.

---

## 🧭 Live Routes & Features

| Route | Purpose | Focus Area |
|---|---|---|
| **[`/`](file:///)** | **Dr. Maya Reynolds Redesign** | New coastal palette (`Alabaster`, `Warm Linen`, `Deep Evergreen`, `Clay`), Santa Monica local SEO, 3 core services, interactive FAQ accordion, and the new **Our Office** section with genuine office photography from Drive. |
| **[`/clone`](file:///clone)** | **Conejo Valley Counseling Clone** | 1:1 structural, typographic, and layout parity with the original Squarespace template, including responsive navigation with dropdowns, custom tag clouds, and multi-column footers. |

---

## 🎨 Theme & Design System (Dr. Maya Reynolds)

Departing from the original palette, the redesign introduces an elevated wellness identity tailored to California coastal aesthetics and nervous system regulation:

- **Primary Background**: Coastal Alabaster (`#FAF8F5`) — Clean, unhurried negative space.
- **Surface Contrast**: Warm Oatmeal Linen (`#F3EFE6`) — Subtle section cards and alternating bands.
- **Primary Typography & Accents**: Deep Evergreen Slate (`#1F3025`) — Grounded authority for headings and primary CTAs.
- **Signature Highlight**: Terracotta Clay (`#C1684B`) — Warm accent color for italicized emphasis and badges.
- **Secondary Tone**: Sage Mist (`#8EA695`) — Delicate border treatments and icon backdrops.
- **Body Typography**: `Plus Jakarta Sans` for crisp UI legibility paired with `Cormorant Garamond` & `Playfair Display` for editorial warmth.

---

## 🧩 Assignment Requirements Fulfillment

### 1. Part 1: UI Clone (25% Weight)
- [x] Recreated the exact order, grid hierarchy, and spacing of the Conejo Valley Counseling homepage.
- [x] Full mobile, tablet, and desktop responsiveness with collapsible navigation drawer.
- [x] Matching serif typography, italic highlights, tag clouds, and 4-column footer structure.
- [x] Reusable CSS variables and design tokens for clean maintainability.

### 2. Part 2: Creative Redesign for Dr. Maya Reynolds (35% Total Weight)
- [x] **Theme**: Brand new cohesive color palette (Primary, Secondary, Accent) with high contrast and visual balance.
- [x] **Copywriting**: Strictly derived from Dr. Maya Reynolds' profile doc—focusing on high-achieving adults, perfectionism, chronic stress, anxiety, panic, and trauma.
- [x] **Local SEO**: Natural integration of high-intent keywords (*"Santa Monica clinical psychologist"*, *"CBT & EMDR therapy California"*), Open Graph cards, and JSON-LD schema.
- [x] **Imagery**: Integrated Dr. Maya Reynolds' official portrait from Google Drive and curated complementary coastal therapy visuals.
- [x] **3 Core Services**:
  1. *Anxiety & Panic Recovery* (CBT & Mindfulness)
  2. *Trauma & EMDR Therapy* (Attachment repair & bilateral reprocessing)
  3. *Burnout & Perfectionism Counseling* (Sustainable living for driven professionals)

### 3. Part 3: Custom "Our Office" Section (10% Weight)
- [x] Created an **"Our Office"** section that did NOT exist in the original template.
- [x] Showcases the actual therapy space photos from Google Drive (`office1.jpeg` and `office2.jpeg`).
- [x] Highlights physical address: **123th Street 45 W, Santa Monica, CA 90401**.
- [x] Emphasizes natural light, acoustic privacy, and hybrid session availability (in-person + CA telehealth).
- [x] Seamlessly matches site typography, layout rhythm, and design tokens.

### 4. Part 4: Video Walkthrough Script (30% Weight)
A comprehensive 5-minute timed client presentation script simulating a professional walk-through for Dr. Maya Reynolds is detailed in [`IMPLEMENTATION_PLAN.md`](file:///d:/PROJECTS/Grow%20My%20Therapy/IMPLEMENTATION_PLAN.md).

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.x or 20.x+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd grow-my-therapy

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the **Redesign** or [http://localhost:3000/clone](http://localhost:3000/clone) to view the **1:1 Clone**.

### Production Build

```bash
npm run build
npm run start
```

---

## 📁 Repository Directory Structure

```text
├── public/
│   └── images/
│       ├── maya/          # Headshot & office photos from Drive
│       │   ├── dr-maya-reynolds.png
│       │   ├── office-1.jpg
│       │   └── office-2.jpg
│       └── clone/         # Downloaded local assets for 1:1 clone
├── src/
│   ├── app/
│   │   ├── clone/
│   │   │   └── page.tsx   # Part 1: Conejo Valley UI Clone
│   │   ├── globals.css    # Tailwind v4 theme tokens & typography
│   │   ├── layout.tsx     # Google fonts (Playfair, Cormorant, Jakarta, Mulish)
│   │   └── page.tsx       # Part 2 & 3: Dr. Maya Reynolds Redesign
│   ├── components/
│   │   ├── clone/         # Clone modular section components
│   │   ├── common/        # Shared components (ModeSwitcher)
│   │   └── redesign/      # Redesign modular section components
│   └── data/
│       ├── cloneData.ts   # Structured dataset for Conejo Valley Clone
│       └── redesignData.ts# Structured dataset for Dr. Maya Reynolds
├── IMPLEMENTATION_PLAN.md # Master plan & 5-minute Loom video script
└── package.json
```

---

## 👤 Author & Submission Details
- **Candidate Application**: Front-End Developer Internship
- **Organization**: Grow My Therapy
- **Framework**: Next.js 16 + Tailwind CSS + TypeScript
