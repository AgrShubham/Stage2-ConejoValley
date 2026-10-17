import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function HeroClone() {
  const { topBadge, hero } = conejoValleyCloneData;

  return (
    <section className="bg-[#F7F6F2] pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-26 items-start gap-y-10">
          {/* Column 1: Left Main Hero Image (Spans Columns 1 to 10 on desktop, row 2..17. On mobile: order-2 below text) */}
          <div className="order-2 md:order-1 md:col-span-10 flex justify-start">
            <div className="relative aspect-[1365/1246] w-full max-w-lg md:max-w-none overflow-hidden">
              <Image
                src={hero.imageLeft}
                alt="family therapy in newbury park"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Spacer Column 11 */}
          <div className="hidden md:block md:col-span-1 md:order-2" />

          {/* Column 2: Center Headline & Content (Spans Columns 12 to 24 on desktop. On mobile: order-1 at top) */}
          <div className="order-1 md:order-3 md:col-span-13 flex flex-col justify-start text-left pt-0 md:pt-1">
            {/* Eyebrow - Row 2 aligned with top of left image */}
            <p className="clone-eyebrow mb-6 md:mb-12">
              {topBadge}
            </p>

            {/* Heading - Row 7 aligned */}
            <h1 className="font-beaufort text-3xl sm:text-4xl md:text-[52px] font-light leading-[1.14] text-[#2B2B2B] tracking-[-0.01em]">
              {hero.headingPart1}{" "}
              <span className="script-word ml-1">
                {hero.scriptWord}
              </span>
              {hero.headingPart2}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm sm:text-base text-[#2B2B2B] font-muli font-light leading-[1.8] max-w-xl">
              {hero.subheading}
            </p>

            {/* Button - Row 15 aligned */}
            <div className="mt-8">
              <Link
                href="/clone#contact"
                className="sqs-btn-underline"
              >
                {hero.ctaText}
              </Link>
            </div>
          </div>

          {/* Column 3: Right Sliced Visual (Spans Columns 25 to 26 on desktop, starts row 7) */}
          <div className="hidden md:block md:col-span-2 md:order-4 pt-14">
            <div className="relative aspect-[1/3] w-full overflow-hidden">
              <Image
                src={hero.imageRight}
                alt="Specialized counseling in California"
                fill
                sizes="10vw"
                priority
                className="object-cover object-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
