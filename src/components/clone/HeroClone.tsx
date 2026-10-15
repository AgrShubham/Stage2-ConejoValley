import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function HeroClone() {
  const { topBadge, hero } = conejoValleyCloneData;

  return (
    <section className="bg-[#F7F6F2] pt-6 pb-16 lg:pt-10 lg:pb-20 overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-24 items-center gap-y-10 lg:gap-x-6">
          {/* Column 1: Left Main Hero Image (Spans Columns 1 to 9 on desktop) */}
          <div className="lg:col-span-9 flex justify-start">
            <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-none overflow-hidden">
              <Image
                src={hero.imageLeft}
                alt="Online and in-person counseling in Newbury Park"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Column 2: Center Headline & Content (Spans Columns 10 to 22 on desktop) */}
          <div className="lg:col-span-12 flex flex-col justify-center px-2 lg:pl-6 text-left">
            <p className="text-[11px] sm:text-xs font-normal tracking-[0.14em] uppercase text-[#2B2B2B] mb-5">
              {topBadge}
            </p>

            <h1 className="font-beaufort text-3xl sm:text-4xl lg:text-[50px] font-light leading-[1.14] text-[#2B2B2B] tracking-normal">
              {hero.headingPart1}{" "}
              <span className="font-script text-[#88B1B1] text-[1.35em] inline-block font-normal ml-1">
                {hero.scriptWord}
              </span>
              {hero.headingPart2}
            </h1>

            <p className="mt-5 text-sm sm:text-base text-[#2B2B2B] font-light leading-relaxed max-w-lg">
              {hero.subheading}
            </p>

            <div className="mt-8">
              <Link
                href="/clone#contact"
                className="sqs-btn-underline"
              >
                {hero.ctaText}
              </Link>
            </div>
          </div>

          {/* Column 3: Right Sliced Visual (Spans Columns 23 to 24 on desktop) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative aspect-[1/3] w-full overflow-hidden">
              <Image
                src={hero.imageRight}
                alt="Specialized counseling in California"
                fill
                sizes="12vw"
                className="object-cover object-left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
