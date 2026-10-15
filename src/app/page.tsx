import { Metadata } from "next";
import { NavbarRedesign } from "@/components/redesign/NavbarRedesign";
import { HeroRedesign } from "@/components/redesign/HeroRedesign";
import { EmpathyRedesign } from "@/components/redesign/EmpathyRedesign";
import { WhoWeHelpRedesign } from "@/components/redesign/WhoWeHelpRedesign";
import { QuoteBannerRedesign } from "@/components/redesign/QuoteBannerRedesign";
import { SpecialtiesTagsRedesign } from "@/components/redesign/SpecialtiesTagsRedesign";
import { MeetMayaRedesign } from "@/components/redesign/MeetMayaRedesign";
import { DividerRedesign } from "@/components/redesign/DividerRedesign";
import { ServicesGridRedesign } from "@/components/redesign/ServicesGridRedesign";
import { OfficeSectionRedesign } from "@/components/redesign/OfficeSectionRedesign";
import { FaqRedesign } from "@/components/redesign/FaqRedesign";
import { ScheduleCtaRedesign } from "@/components/redesign/ScheduleCtaRedesign";
import { FooterRedesign } from "@/components/redesign/FooterRedesign";
import { ModeSwitcher } from "@/components/common/ModeSwitcher";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
  description:
    "Evidence-based therapy for anxiety, panic, trauma, and burnout in Santa Monica, California. CBT, EMDR, and somatic healing for high-achieving adults and creatives.",
  keywords: [
    "Dr. Maya Reynolds",
    "Santa Monica therapist",
    "clinical psychologist Santa Monica",
    "anxiety therapy Santa Monica CA",
    "EMDR trauma therapy California",
    "burnout counselor for executives",
    "high achiever psychology Santa Monica",
  ],
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    "name": "Dr. Maya Reynolds, PsyD",
    "url": "https://drmayareynolds.com",
    "image": "https://drmayareynolds.com/images/maya/dr-maya-reynolds.png",
    "description":
      "Licensed clinical psychologist in Santa Monica, California offering evidence-based CBT, EMDR, and somatic therapy for anxiety, trauma, and burnout.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123th Street 45 W",
      "addressLocality": "Santa Monica",
      "addressRegion": "CA",
      "postalCode": "90401",
      "addressCountry": "US",
    },
    "telephone": "(310) 555-0198",
    "priceRange": "$$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Santa Monica",
      },
      {
        "@type": "State",
        "name": "California",
      },
    ],
    "medicalSpecialty": ["Psychotherapy", "Clinical Psychology"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-sand-50 text-ink-900 font-sans antialiased selection:bg-clay-500 selection:text-white">
        <NavbarRedesign />
        <HeroRedesign />
        <EmpathyRedesign />
        <WhoWeHelpRedesign />
        <QuoteBannerRedesign />
        <SpecialtiesTagsRedesign />
        <MeetMayaRedesign />
        <DividerRedesign />
        <ServicesGridRedesign />
        <OfficeSectionRedesign />
        <FaqRedesign />
        <ScheduleCtaRedesign />
        <FooterRedesign />
        <ModeSwitcher />
      </main>
    </>
  );
}
