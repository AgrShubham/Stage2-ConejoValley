import { conejoValleyCloneData } from "@/data/cloneData";

export function DividerClone() {
  const { dividerQuote } = conejoValleyCloneData;

  return (
    <section className="bg-white py-16 lg:py-24 border-y border-[#E8E7E3] text-center">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-relaxed text-[#2B2E2A]">
          Honoring where you&apos;ve been{" "}
          <span className="italic font-semibold text-[#2C423B]">&amp;</span>{" "}
          helping shape where you&apos;re headed.
        </h2>
      </div>
    </section>
  );
}
