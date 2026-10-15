import { conejoValleyCloneData } from "@/data/cloneData";

export function QuoteBannerClone() {
  const { quote } = conejoValleyCloneData;

  return (
    <section className="bg-[#2C423B] py-20 lg:py-24 text-white text-center">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed text-[#F5F2EB]">
          {quote.text}{" "}
          <span className="block mt-4 italic font-semibold text-[#D4B393]">
            {quote.highlight}
          </span>
        </h2>
      </div>
    </section>
  );
}
