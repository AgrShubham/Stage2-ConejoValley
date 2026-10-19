import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function HowWeWorkClone() {
  const { howWeWork } = conejoValleyCloneData;

  return (
    <section className="bg-[#F7F6F2] py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-26 items-start gap-y-12">
          {/* Left Text Container (Columns 3 to 19 on desktop) */}
          <div className="md:col-start-3 md:col-span-17 flex flex-col justify-start">
            <p className="clone-eyebrow mb-4 text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#555853] font-normal leading-normal">
              {howWeWork.tagline}
            </p>

            <h2 className="font-beaufort text-3xl sm:text-4xl md:text-[44px] font-light leading-tight text-[#2B2B2B] mb-8 max-w-3xl">
              {howWeWork.heading}
            </h2>

            {/* Mobile-Only Image (Appears directly between H2 and body text on mobile < 768px, matching Squarespace mobile layout) */}
            <div className="block md:hidden mb-8">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={howWeWork.image}
                  alt="Woman and child dancing on sandy beach at sunset"
                  fill
                  sizes="100vw"
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-[#2B2B2B] font-muli text-sm sm:text-[15px] font-light leading-[1.8]">
              <div>
                <p className="clone-lead-caps text-xs sm:text-[13px] tracking-[0.14em] uppercase text-[#2B2B2B] font-medium leading-[1.6] mb-4">
                  The clients we work with are balancing so many<br className="hidden xl:inline" /> things at once, it's often hard for them to put<br className="hidden xl:inline" /> themselves first.
                </p>
                <p>{howWeWork.body1}</p>
              </div>
              <div className="pt-0 md:pt-0.5">
                <p>{howWeWork.body2}</p>
              </div>
            </div>

            <div className="mt-8 md:mt-10">
              <Link
                href="/clone"
                className="sqs-btn-underline text-xs tracking-[0.14em]"
              >
                {howWeWork.ctaText}
              </Link>
            </div>
          </div>

          {/* Right Image on Desktop/Tablet (Columns 21 to 27 on desktop, row 4..22) */}
          <div className="hidden md:flex md:col-start-20 md:col-span-7 lg:col-start-21 lg:col-span-6 justify-end -mt-2 md:-mt-6 lg:-mt-10">
            <div className="relative aspect-[10/14] lg:aspect-[5/7] w-full overflow-hidden">
              <Image
                src={howWeWork.image}
                alt="Woman and child dancing on sandy beach at sunset"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
