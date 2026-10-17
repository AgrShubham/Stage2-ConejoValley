import Image from "next/image";
import { conejoValleyCloneData } from "@/data/cloneData";

export function DividerClone() {
  const { divider } = conejoValleyCloneData;

  return (
    <section className="bg-white py-12 lg:py-20 border-y border-[#E8E7E3] overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-26 gap-y-10 items-center">
          {/* Left Column: Sharp Rectangular Family Beach Image (Cols 1..14) */}
          <div className="md:col-span-14 flex justify-start">
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <Image
                src={divider.image}
                alt="Family of four standing on beach holding hands at sunset"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Spacer Column 15 */}
          <div className="hidden md:block md:col-span-1" />

          {/* Right Column: Quote Heading (Cols 16..26) */}
          <div className="md:col-span-11 pl-0 md:pl-4">
            <h2 className="font-beaufort text-3xl sm:text-4xl md:text-[44px] font-light leading-[1.25] text-[#2B2B2B]">
              {divider.headingPart1}{" "}
              <span className="script-word mx-1">
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
