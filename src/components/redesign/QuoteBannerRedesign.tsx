import { mayaReynoldsData } from "@/data/redesignData";
import { Quote } from "lucide-react";

export function QuoteBannerRedesign() {
  const { quote } = mayaReynoldsData;

  return (
    <section className="relative overflow-hidden bg-forest-900 py-24 lg:py-28 text-sand-50 text-center">
      {/* Subtle organic watermark */}
      <Quote className="absolute -bottom-10 right-10 h-64 w-64 text-forest-800/20 rotate-12 pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-12">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-normal leading-relaxed text-sand-100">
          &ldquo;{quote.text}&rdquo;{" "}
          <span className="block mt-4 italic font-semibold text-clay-400 font-serif">
            {quote.highlight}
          </span>
        </h2>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-sage-200">
          — Dr. Maya Reynolds, PsyD
        </p>
      </div>
    </section>
  );
}
