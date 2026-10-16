import Image from "next/image";
import { conejoValleyCloneData } from "@/data/cloneData";

export function IntroClone() {
  const { intro } = conejoValleyCloneData;

  return (
    <section className="bg-[#F7F6F2] py-16 lg:py-24 border-t border-[#E8E7E3]/60">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-26 gap-y-12 items-start">
          {/* Left Text Container (Columns 3 to 17 on desktop) */}
          <div className="lg:col-start-3 lg:col-span-15 flex flex-col justify-center pr-0 lg:pr-8">
            <h2 className="font-beaufort text-3xl sm:text-4xl lg:text-[42px] font-light leading-[1.2] text-[#2B2B2B] mb-8 max-w-2xl">
              {intro.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#2B2B2B] font-muli text-sm sm:text-[15px] font-light leading-[1.8]">
              <div>
                <p className="clone-lead-caps">
                  At Conejo Valley Family Counseling we want to make that hope a reality.
                </p>
                <p>{intro.paragraph1}</p>
              </div>
              <div className="pt-0 md:pt-1">
                <p>{intro.paragraph2}</p>
              </div>
            </div>
          </div>

          {/* Right Image (Columns 19 to 26 on desktop, row 1..17) */}
          <div className="lg:col-start-19 lg:col-span-8 flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-none overflow-hidden">
              <Image
                src={intro.image}
                alt="Sandy beach with gentle ocean waves in California"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
