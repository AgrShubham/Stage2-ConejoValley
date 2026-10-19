import Image from "next/image";
import { conejoValleyCloneData } from "@/data/cloneData";

export function IntroClone() {
  const { intro } = conejoValleyCloneData;

  return (
    <section className="bg-[#F7F6F2] py-16 lg:py-24 border-t border-[#E8E7E3]/60">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-26 gap-y-12 items-start">
          {/* Left Text Container (Columns 3 to 17 on desktop) */}
          <div className="md:col-start-3 md:col-span-15 flex flex-col justify-start">
            <h2 className="font-beaufort text-3xl sm:text-4xl md:text-[42px] font-light leading-[1.2] text-[#2B2B2B] mb-8 max-w-3xl">
              {intro.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-[#2B2B2B] font-muli text-sm sm:text-[15px] font-light leading-[1.8]">
              <div>
                <p className="clone-lead-caps text-xs sm:text-[13px] tracking-[0.14em] uppercase text-[#2B2B2B] font-medium leading-[1.6] mb-4">
                  At Conejo Valley Family Counseling we want to<br className="hidden xl:inline" /> make that hope a reality.
                </p>
                <p>{intro.paragraph1}</p>
              </div>

              {/* Mobile-Only Beach Image (Appears directly between paragraph 1 and paragraph 2 on mobile < 768px) */}
              <div className="block md:hidden my-4">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={intro.image}
                    alt="Sandy beach with gentle ocean waves in California"
                    fill
                    sizes="100vw"
                    priority
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="pt-0 md:pt-0.5">
                <p>{intro.paragraph2}</p>
              </div>
            </div>
          </div>

          {/* Right Image on Desktop/Tablet (Columns 19 to 27 on desktop, starts at Row 1 above H2) */}
          <div className="hidden md:flex md:col-start-18 md:col-span-9 lg:col-start-19 lg:col-span-8 -mt-4 md:-mt-8 lg:-mt-12">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden">
              <Image
                src={intro.image}
                alt="Sandy beach with gentle ocean waves in California"
                fill
                sizes="(max-width: 768px) 100vw, 36vw"
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
