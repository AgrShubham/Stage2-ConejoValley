import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mayaReynoldsData } from "@/data/redesignData";

export function WhoWeHelpRedesign() {
  const { whoWeHelp } = mayaReynoldsData;

  return (
    <section id="who-we-help" className="bg-sand-50 py-24 lg:py-32 border-t border-sand-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-forest-700 mb-3">
            CLIENT POPULATIONS &amp; FOCUS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-900">
            {whoWeHelp.heading}{" "}
            <span className="italic font-semibold text-clay-600">
              {whoWeHelp.highlight}
            </span>
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {whoWeHelp.cards.map((card) => (
            <div
              key={card.title}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-sand-200 shadow-sm hover:shadow-xl hover:border-sand-300 transition-all duration-300"
            >
              {/* Image Container with Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand-100">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-forest-900/90 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-sand-50 tracking-wider">
                    {card.badge}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-normal text-forest-900 mb-3 group-hover:text-clay-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-ink-700 font-normal leading-relaxed flex-1">
                  {card.description}
                </p>

                <div className="mt-8 pt-5 border-t border-sand-100 flex items-center justify-between">
                  <Link
                    href="#specialties"
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-clay-600 group-hover:text-forest-900 transition-colors"
                  >
                    <span>Read Treatment Approach</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
