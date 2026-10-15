import Image from "next/image";
import { conejoValleyCloneData } from "@/data/cloneData";

export function DividerClone() {
  const { divider } = conejoValleyCloneData;

  return (
    <section className="bg-white py-16 lg:py-24 border-y border-[#E8E7E3]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Sharp Rectangular Family Beach Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-[4/3] w-full max-w-md lg:max-w-none overflow-hidden">
              <Image
                src={divider.image}
                alt="Family of four standing on beach holding hands at sunset"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Quote Heading */}
          <div className="lg:col-span-7">
            <h2 className="font-beaufort text-3xl sm:text-4xl lg:text-[44px] font-light leading-snug text-[#2B2B2B]">
              {divider.headingPart1}{" "}
              <span className="font-script text-[#88B1B1] text-[1.35em] inline-block font-normal mx-1">
                {divider.scriptAmp}
              </span>{" "}
              {divider.headingPart2}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
