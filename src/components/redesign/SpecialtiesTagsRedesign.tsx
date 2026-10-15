import { mayaReynoldsData } from "@/data/redesignData";

export function SpecialtiesTagsRedesign() {
  const { expertiseTags } = mayaReynoldsData;

  return (
    <section className="bg-white py-20 lg:py-24 border-b border-sand-200">
      <div className="mx-auto max-w-5xl px-6 lg:px-12 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-forest-700 mb-3">
          CLINICAL INTEGRATION
        </p>
        <h3 className="font-serif text-3xl sm:text-4xl text-forest-900 mb-10 font-normal">
          Core competencies &amp;{" "}
          <span className="italic font-semibold text-clay-600">evidence-based</span> modalities
        </h3>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {expertiseTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sand-300 bg-sand-50/70 px-5 py-2.5 text-xs sm:text-[13px] font-medium tracking-wide text-ink-700 hover:border-clay-500 hover:text-clay-600 hover:bg-clay-50/40 transition-all duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
