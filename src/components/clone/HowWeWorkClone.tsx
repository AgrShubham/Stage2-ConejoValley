import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function HowWeWorkClone() {
  const { howWeWork } = conejoValleyCloneData;

  return (
    <section className="bg-[#FAF9F6] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg border border-[#E8E7E3]">
              <Image
                src={howWeWork.image}
                alt="Conejo Valley Family Counseling Team"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#666A65] mb-4">
              {howWeWork.tagline}
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#2B2E2A]">
              {howWeWork.heading}
            </h2>

            <p className="mt-6 text-base sm:text-lg font-medium text-[#C08D5D]">
              {howWeWork.lead}
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#555853] font-light leading-relaxed">
              <p>{howWeWork.body1}</p>
              <p>{howWeWork.body2}</p>
            </div>

            <div className="mt-8">
              <Link
                href="/clone"
                className="inline-block rounded-full border border-[#2B2E2A] px-7 py-3 text-xs font-semibold tracking-wider text-[#2B2E2A] uppercase transition-all duration-300 hover:bg-[#2B2E2A] hover:text-white"
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
