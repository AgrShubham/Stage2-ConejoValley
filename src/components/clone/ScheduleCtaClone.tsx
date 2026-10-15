import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function ScheduleCtaClone() {
  const { bookingCta } = conejoValleyCloneData;

  return (
    <section id="schedule" className="bg-white py-20 lg:py-28 border-t border-[#E8E7E3]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Content */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#666A65] mb-4">
              {bookingCta.tagline}
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#2B2E2A]">
              Find a therapist who is the right fit for{" "}
              <span className="italic font-semibold text-[#2C423B]">you</span>.
            </h2>

            <div className="mt-6 space-y-4 text-base text-[#555853] font-light leading-relaxed">
              <p>
                Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
              </p>
              <p className="font-normal text-[#2B2E2A]">
                Click the button below to schedule an appointment.
              </p>
            </div>

            <div className="mt-8">
              <Link
                href="/clone"
                className="inline-block rounded-full bg-[#2B2E2A] px-8 py-3.5 text-xs font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:bg-[#C08D5D]"
              >
                {bookingCta.ctaText}
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={bookingCta.image}
                alt="Conejo Valley Counseling beach landscape"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
