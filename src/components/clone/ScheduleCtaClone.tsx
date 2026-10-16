import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function ScheduleCtaClone() {
  const { bookingCta } = conejoValleyCloneData;

  return (
    <section id="schedule" className="bg-[#F7F6F2] py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-26 gap-y-12 items-center">
          {/* Left Visual: Seashells 1 (Cols 1..4 on desktop) */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={bookingCta.imageLeft}
                alt="Person picking up seashells on a sandy beach"
                fill
                sizes="20vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Spacer Column 5 */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Center Column: Text & Booking Action (Cols 6..16 on desktop) */}
          <div className="lg:col-span-11 text-left pr-0 lg:pr-6">
            <p className="clone-eyebrow mb-4">
              {bookingCta.tagline}
            </p>

            <h2 className="font-beaufort text-3xl sm:text-4xl lg:text-[44px] font-light leading-tight text-[#2B2B2B] mb-6">
              {bookingCta.headingPart1}{" "}
              <span className="script-word ml-1">
                {bookingCta.scriptWord}
              </span>
              {bookingCta.headingPart2}
            </h2>

            <div className="space-y-4 font-muli text-sm sm:text-[15px] text-[#2B2B2B] font-light leading-[1.8] max-w-xl">
              <p>{bookingCta.body1}</p>
              <p>{bookingCta.body2}</p>
            </div>

            <div className="mt-8">
              <Link
                href="/clone#contact"
                className="sqs-btn-secondary"
              >
                {bookingCta.ctaText}
              </Link>
            </div>
          </div>

          {/* Spacer Column 17 */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right Visual: Seashells 2 (Cols 18..26 on desktop) */}
          <div className="lg:col-span-9 flex justify-center lg:justify-end">
            <div className="relative aspect-[3/4] w-full max-w-sm lg:max-w-none overflow-hidden">
              <Image
                src={bookingCta.imageRight}
                alt="Person in striped dress pointing at shells on beach with child"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
