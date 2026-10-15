import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function HeroClone() {
  const { topBadge, hero } = conejoValleyCloneData;

  return (
    <section className="bg-[#FAF9F6] pt-12 pb-20 lg:pt-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Typography & CTA */}
          <div className="lg:col-span-7">
            {/* Top Eyebrow */}
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#666A65] mb-6">
              {topBadge}
            </p>

            {/* Main H1 Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.18] text-[#2B2E2A] tracking-tight">
              Rebuild your foundation on solid ground and finally begin to{" "}
              <span className="italic font-semibold text-[#2C423B]">
                thrive
              </span>
              .
            </h1>

            {/* Subheading */}
            <p className="mt-8 text-base sm:text-lg text-[#555853] font-light leading-relaxed max-w-xl">
              {hero.subheading}
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="#schedule"
                className="inline-block rounded-full bg-[#2B2E2A] px-8 py-3.5 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:bg-[#C08D5D] hover:shadow-md"
              >
                {hero.ctaText}
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={hero.image}
                alt="Conejo Valley Family Counseling"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
