import Image from "next/image";
import { conejoValleyCloneData } from "@/data/cloneData";

export function QuoteBannerClone() {
  const { quote } = conejoValleyCloneData;

  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-36 text-center text-white">
      {/* Background Image from Original Site */}
      <div className="absolute inset-0 z-0">
        <Image
          src={quote.bgImage}
          alt="California beach waves and sand"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-12">
        <h2 className="font-beaufort text-2xl sm:text-3xl lg:text-[38px] font-light leading-relaxed text-[#F7F6F2]">
          {quote.text}{" "}
          <span className="block mt-3 italic font-light text-[#F7F6F2]">
            {quote.highlight}
          </span>
        </h2>
      </div>
    </section>
  );
}
