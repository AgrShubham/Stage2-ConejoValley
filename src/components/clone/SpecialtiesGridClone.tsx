import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function SpecialtiesGridClone() {
  const { specialties } = conejoValleyCloneData;

  return (
    <section className="bg-[#FAF9F6] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Headline */}
        <div className="text-center mb-16">
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2B2E2A]">
            Our <span className="italic font-semibold text-[#2C423B]">specialties</span> include.
          </h3>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="flex flex-col sm:flex-row bg-white rounded-xl overflow-hidden border border-[#E8E7E3] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-square sm:w-2/5 shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="font-serif text-2xl font-normal text-[#2B2E2A] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#555853] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F2EFEA]">
                  <Link
                    href="/clone"
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#C08D5D] hover:text-[#2B2E2A] transition-colors"
                  >
                    {item.linkText} &rarr;
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
