import { Metadata } from "next";
import { NavbarClone } from "@/components/clone/NavbarClone";
import { HeroClone } from "@/components/clone/HeroClone";
import { IntroClone } from "@/components/clone/IntroClone";
import { WhoWeHelpClone } from "@/components/clone/WhoWeHelpClone";
import { QuoteBannerClone } from "@/components/clone/QuoteBannerClone";
import { SpecialtiesTagsClone } from "@/components/clone/SpecialtiesTagsClone";
import { HowWeWorkClone } from "@/components/clone/HowWeWorkClone";
import { DividerClone } from "@/components/clone/DividerClone";
import { SpecialtiesGridClone } from "@/components/clone/SpecialtiesGridClone";
import { ScheduleCtaClone } from "@/components/clone/ScheduleCtaClone";
import { FooterClone } from "@/components/clone/FooterClone";
import { ModeSwitcher } from "@/components/common/ModeSwitcher";

export const metadata: Metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling (1:1 Clone)",
  description:
    "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more.",
};

export default function ClonePage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#2B2E2A] font-mulish antialiased">
      <NavbarClone />
      <HeroClone />
      <IntroClone />
      <WhoWeHelpClone />
      <QuoteBannerClone />
      <SpecialtiesTagsClone />
      <HowWeWorkClone />
      <DividerClone />
      <SpecialtiesGridClone />
      <ScheduleCtaClone />
      <FooterClone />
      <ModeSwitcher />
    </main>
  );
}
