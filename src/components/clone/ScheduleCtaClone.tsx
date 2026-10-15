import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function ScheduleCtaClone() {
  const { bookingCta } = conejoValleyCloneData;

  return (
    <section id="schedule" className="bg-[#F7F6F2] py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Visual: Seashells 1 - sharp rectangular */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={bookingCta.imageLeft}
                alt="Person picking up seashells on a sandy beach"
                fill
                sizes="25vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Center Column: Text & Booking Action */}
          <div className="lg:col-span-6 text-left lg:text-center px-0 lg:px-6">
            <p className="text-[11px] sm:text-xs font-normal tracking-[0.14em] uppercase text-[#2B2B2B] mb-4">
              {bookingCta.tagline}
            </p>

            <h2 className="font-beaufort text-3xl sm:text-4xl lg:text-[46px] font-light leading-tight text-[#2B2B2B]">
              {bookingCta.headingPart1}{" "}
              <span className="font-script text-[#88B1B1] text-[1.35em] inline-block font-normal ml-1">
                {bookingCta.scriptWord}
              </span>
              {bookingCta.headingPart2}
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#2B2B2B] font-light leading-relaxed max-w-xl mx-auto">
              <p>{bookingCta.body1}</p>
              <p className="text-[#2B2B2B] font-light">{bookingCta.body2}</p>
            </div>

            <div className="mt-8">
              <Link
                href="/clone#contact"
                className="sqs-btn-underline"
              >
                {bookingCta.ctaText}
              </Link>
            </div>
          </div>

          {/* Right Visual: Seashells 2 - sharp rectangular */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-xs lg:max-w-none overflow-hidden">
              <Image
                src={bookingCta.imageRight}
                alt="Person in striped dress pointing at shells on beach with child"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
