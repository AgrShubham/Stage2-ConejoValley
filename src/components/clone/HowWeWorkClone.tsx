import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function HowWeWorkClone() {
  const { howWeWork } = conejoValleyCloneData;

  return (
    <section className="bg-[#F7F6F2] py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Sharp Rectangular Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-md lg:max-w-none overflow-hidden">
              <Image
                src={howWeWork.image}
                alt="Woman and child dancing on sandy beach at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-[11px] sm:text-xs font-normal tracking-[0.14em] uppercase text-[#2B2B2B] mb-4">
              {howWeWork.tagline}
            </p>

            <h2 className="font-beaufort text-3xl sm:text-4xl lg:text-[44px] font-light leading-tight text-[#2B2B2B]">
              {howWeWork.heading}
            </h2>

            <p className="mt-5 font-beaufort italic text-lg sm:text-xl font-light text-[#2B2B2B] leading-relaxed">
              {howWeWork.lead}
            </p>

            <div className="mt-5 space-y-4 text-sm sm:text-base text-[#2B2B2B] font-light leading-relaxed">
              <p>{howWeWork.body1}</p>
              <p>{howWeWork.body2}</p>
            </div>

            <div className="mt-8">
              <Link
                href="/clone"
                className="sqs-btn-underline"
              >
                {howWeWork.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
