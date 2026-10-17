import Image from "next/image";
import { conejoValleyCloneData } from "@/data/cloneData";

export function QuoteBannerClone() {
  const { quote } = conejoValleyCloneData;

  return (
    <section className="quote-banner relative overflow-hidden py-24 sm:py-28 md:py-36 text-white">
      {/* Background Image from Original Site */}
      <div className="absolute inset-0 z-0">
        <Image
          src={quote.bgImage}
          alt="California beach waves and sand"
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-26">
          <div className="md:col-start-3 md:col-span-17">
            <h2 className="text-quote-light font-beaufort text-2xl sm:text-3xl md:text-[40px] font-light leading-[1.35] text-[#F7F6F2] tracking-normal">
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
