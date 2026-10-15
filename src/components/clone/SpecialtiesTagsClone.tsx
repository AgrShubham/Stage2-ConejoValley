import { conejoValleyCloneData } from "@/data/cloneData";

export function SpecialtiesTagsClone() {
  const { expertiseTags } = conejoValleyCloneData;

  return (
    <section className="bg-white py-16 lg:py-20 border-b border-[#E8E7E3]">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 text-center">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#2B2E2A] mb-8 font-normal">
          Our areas of{" "}
          <span className="italic font-semibold text-[#2C423B]">expertise</span>
        </h3>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {expertiseTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#D5D3CC] bg-[#FAF9F6] px-5 py-2 text-xs sm:text-[13px] font-medium tracking-wide text-[#555853] hover:border-[#C08D5D] hover:text-[#2B2E2A] transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
