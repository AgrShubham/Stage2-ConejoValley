import { mayaReynoldsData } from "@/data/redesignData";
import { Sparkles } from "lucide-react";

export function EmpathyRedesign() {
  const { empathy } = mayaReynoldsData;

  return (
    <section className="bg-sand-100/60 py-24 lg:py-32 border-t border-sand-200">
      <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
        {/* Subtle accent icon */}
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-clay-100 text-clay-600 mb-6">
          <Sparkles className="h-5 w-5" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-snug text-forest-900">
          {empathy.title}
        </h2>

        <p className="mt-4 text-base sm:text-lg font-medium text-clay-600">
          {empathy.subtitle}
        </p>

        <div className="mt-10 space-y-6 text-ink-700 text-base sm:text-lg font-normal leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
          <p>{empathy.paragraph1}</p>
          <p>{empathy.paragraph2}</p>
        </div>
      </div>
    </section>
  );
}
