import Image from "next/image";
import Link from "next/link";
import { MapPin, Sun, ShieldCheck, Laptop, Sparkles, ArrowRight } from "lucide-react";
import { mayaReynoldsData } from "@/data/redesignData";

export function OfficeSectionRedesign() {
  const { office } = mayaReynoldsData;

  return (
    <section id="office" className="relative overflow-hidden bg-white py-24 lg:py-32 border-y border-sand-200">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-clay-50/70 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-clay-100/80 px-4 py-1.5 text-xs font-semibold tracking-widest text-clay-700 uppercase mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{office.tagline}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-forest-900">
            {office.heading}{" "}
            <span className="italic font-semibold text-clay-600">
              {office.highlight}
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-ink-700 font-normal leading-relaxed">
            {office.description}
          </p>
        </div>

        {/* 2-Image Showcase Grid featuring Genuine Drive Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {office.images.map((img, idx) => (
            <div
              key={img.src}
              className="group relative flex flex-col bg-sand-50 rounded-3xl overflow-hidden border border-sand-200 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-sand-200">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority={idx === 0}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-forest-900/85 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-sand-50 tracking-wider">
                    {idx === 0 ? "Counseling Space" : "Natural Sunlight & Botanicals"}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-ink-700 font-medium leading-relaxed">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Value Columns & Physical Address Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-sand-200">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sand-100 text-forest-800">
              <Sun className="h-6 w-6 text-clay-600" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-normal text-forest-900 mb-1">
                {office.details[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                {office.details[0].desc}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sand-100 text-forest-800">
              <ShieldCheck className="h-6 w-6 text-forest-700" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-normal text-forest-900 mb-1">
                {office.details[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                {office.details[1].desc}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sand-100 text-forest-800">
              <Laptop className="h-6 w-6 text-sage-600" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-normal text-forest-900 mb-1">
                {office.details[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                {office.details[2].desc}
              </p>
            </div>
          </div>
        </div>

        {/* Practice Address & Directions Card */}
        <div className="mt-14 rounded-3xl bg-forest-900 text-sand-50 p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-800 text-clay-400">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-clay-400">
                VISIT THE PRACTICE
              </p>
              <h4 className="font-serif text-2xl font-normal text-sand-50 mt-1">
                {office.address.street}, {office.address.cityStateZip}
              </h4>
              <p className="text-xs text-sand-200/80 mt-1">
                {office.address.note} &bull; In-person appointments by scheduled reservation
              </p>
            </div>
          </div>

          <Link
            href="#contact"
            className="shrink-0 flex items-center gap-2 rounded-full bg-clay-500 px-8 py-3.5 text-xs font-semibold tracking-wider text-white uppercase shadow-md hover:bg-clay-600 transition-colors cursor-pointer"
          >
            <span>Request In-Person Session</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
