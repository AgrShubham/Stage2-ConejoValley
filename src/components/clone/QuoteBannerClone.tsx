import Image from "next/image";
import { conejoValleyCloneData } from "@/data/cloneData";

export function QuoteBannerClone() {
  const { quote } = conejoValleyCloneData;

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36 text-white">
      {/* Background Image from Original Site */}
      <div className="absolute inset-0 z-0">
        <Image
          src={quote.bgImage}
          alt="California beach waves and sand"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-26">
          <div className="lg:col-start-3 lg:col-span-17">
            <h2 className="font-beaufort text-2xl sm:text-3xl lg:text-[40px] font-light leading-[1.35] text-[#F7F6F2] tracking-normal">
              {quote.text}{" "}
              <em className="font-beaufort-italic text-[#F7F6F2]">
                {quote.highlight}
              </em>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
