import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { mayaReynoldsData } from "@/data/redesignData";

export function HeroRedesign() {
  const { hero } = mayaReynoldsData;

  return (
    <section className="relative overflow-hidden bg-sand-50 pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Subtle organic background glow */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-sage-200/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-clay-100/50 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-sand-300 bg-white/80 px-4 py-1.5 shadow-xs mb-6">
              <span className="h-2 w-2 rounded-full bg-clay-500" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-ink-700">
                Santa Monica Clinical Psychology &bull; CBT &bull; EMDR
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[62px] font-normal leading-[1.12] text-forest-900 tracking-tight">
              {hero.headingPart1}{" "}
              <span className="italic font-semibold text-clay-600 underline decoration-clay-300/60 decoration-wavy decoration-1 underline-offset-8">
                {hero.highlight}
              </span>{" "}
              {hero.headingPart2}
            </h1>

            {/* Subheading */}
            <p className="mt-8 text-base sm:text-lg text-ink-700 font-normal leading-relaxed max-w-2xl">
              {hero.subheading}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="#contact"
                className="group flex items-center justify-center gap-2.5 rounded-full bg-forest-900 px-8 py-4 text-xs font-semibold tracking-wider text-sand-50 uppercase shadow-md transition-all duration-300 hover:bg-clay-600 hover:shadow-lg cursor-pointer"
              >
                <span>{hero.ctaPrimary}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="#office"
                className="flex items-center justify-center gap-2 rounded-full border border-sand-300 bg-white px-7 py-4 text-xs font-semibold tracking-wider text-ink-800 uppercase transition-all duration-300 hover:border-forest-900 hover:bg-sand-100/60"
              >
                <MapPin className="h-4 w-4 text-clay-500" />
                <span>{hero.ctaSecondary}</span>
              </Link>
            </div>

            {/* Trust Markers */}
            <div className="mt-12 pt-8 border-t border-sand-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-ink-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-forest-700 shrink-0" />
                <span>Licensed PsyD Psychologist</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-forest-700 shrink-0" />
                <span>EMDR Certified Protocol</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="h-4 w-4 text-forest-700 shrink-0" />
                <span>In-Person &amp; Telehealth</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Overlaid Floating Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
              <Image
                src={hero.image}
                alt="Dr. Maya Reynolds Santa Monica calm therapy practice space"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 via-transparent to-transparent" />
            </div>

            {/* Floating Glassmorphism Location Pill */}
            <div className="absolute -bottom-6 -left-4 sm:left-4 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl backdrop-blur-md max-w-xs transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-clay-50 text-clay-600">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest-900">Santa Monica Sanctuary</p>
                  <p className="text-[11px] text-ink-500 mt-0.5 leading-snug">
                    123th Street 45 W &bull; Quiet, sunlit in-person sessions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
