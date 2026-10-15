import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, HeartHandshake } from "lucide-react";
import { mayaReynoldsData } from "@/data/redesignData";

export function MeetMayaRedesign() {
  const { bio } = mayaReynoldsData;

  return (
    <section id="about" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Official Headshot & Credentials Card */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl bg-sand-200">
              <Image
                src={bio.image}
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Overlaid credentials chip */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 rounded-2xl border border-sand-200 bg-white p-4 shadow-xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-100 text-forest-800">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest-900">Dr. Maya Reynolds, PsyD</p>
                  <p className="text-[11px] text-ink-500">Santa Monica Clinical Psychologist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Clinical Methodology */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-clay-600 mb-4">
              <HeartHandshake className="h-4 w-4" />
              <span>{bio.tagline}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-forest-900">
              {bio.heading}
            </h2>

            <p className="mt-6 text-base sm:text-lg font-medium text-forest-800">
              {bio.lead}
            </p>

            <div className="mt-6 space-y-4 text-base text-ink-700 font-normal leading-relaxed">
              <p>{bio.body1}</p>
              <p>{bio.body2}</p>
              <p>{bio.body3}</p>
            </div>

            {/* Credentials List */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-sand-200">
              {bio.credentials.map((cred) => (
                <div key={cred} className="flex items-center gap-2.5 text-xs font-medium text-forest-900">
                  <CheckCircle2 className="h-4 w-4 text-clay-500 shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="#specialties"
                className="inline-block rounded-full border border-forest-900 px-8 py-3.5 text-xs font-semibold tracking-wider text-forest-900 uppercase transition-all duration-300 hover:bg-forest-900 hover:text-sand-50"
              >
                {bio.ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
