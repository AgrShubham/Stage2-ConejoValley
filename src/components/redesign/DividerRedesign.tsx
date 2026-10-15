import { mayaReynoldsData } from "@/data/redesignData";

export function DividerRedesign() {
  const { dividerQuote } = mayaReynoldsData;

  return (
    <section className="bg-sand-100 py-20 lg:py-28 border-y border-sand-200 text-center">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[40px] font-normal leading-relaxed text-forest-900">
          Bridging evidence-based science with{" "}
          <span className="italic font-semibold text-clay-600">compassionate</span>, depth-oriented care.
        </h2>
      </div>
    </section>
  );
}
