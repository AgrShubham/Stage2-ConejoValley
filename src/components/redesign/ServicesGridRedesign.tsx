import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { mayaReynoldsData } from "@/data/redesignData";

export function ServicesGridRedesign() {
  const { services } = mayaReynoldsData;

  return (
    <section id="specialties" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-forest-700 mb-3">
            SPECIALIZED PSYCHOTHERAPY
          </p>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-900">
            Three core pathways to{" "}
            <span className="italic font-semibold text-clay-600">restoration</span> &amp; resilience
          </h3>
        </div>

        {/* 3 Comprehensive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-sand-200 shadow-sm hover:shadow-2xl hover:border-sand-300 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-forest-900/90 backdrop-blur-md px-3.5 py-1 text-[10px] font-semibold tracking-widest text-sand-50 uppercase">
                    Path {index + 1}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 flex flex-col flex-1">
                <p className="text-[11px] font-bold tracking-wider text-clay-600 uppercase mb-2">
                  {service.tagline}
                </p>

                <h4 className="font-serif text-2xl font-normal text-forest-900 mb-4 group-hover:text-clay-600 transition-colors">
                  {service.title}
                </h4>

                <p className="text-sm text-ink-700 font-normal leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Modalities Chips */}
                <div className="mt-6 pt-6 border-t border-sand-100 space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                    Integrated Methods:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {service.modalities.map((mod) => (
                      <span
                        key={mod}
                        className="rounded-md bg-sand-100 px-2.5 py-1 text-[11px] font-medium text-forest-800"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <div className="mt-8 pt-4">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-forest-900 group-hover:text-clay-600 transition-colors"
                  >
                    <span>{service.linkText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
