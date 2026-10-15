import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function SpecialtiesTagsClone() {
  const { expertise } = conejoValleyCloneData;

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-[#E8E7E3]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <h3 className="font-beaufort text-3xl sm:text-4xl lg:text-[44px] font-light text-[#2B2B2B] leading-tight sticky top-28">
              {expertise.heading}{" "}
              <span className="font-script text-[#88B1B1] text-[1.35em] inline-block font-normal ml-1">
                {expertise.scriptWord}
              </span>
            </h3>
          </div>

          {/* Right Column: 2-Subcolumn Editorial Bordered List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12">
            {/* Column A */}
            <div>
              {expertise.columnA.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-[#E8E7E3] py-4 text-xs tracking-[0.12em] uppercase text-[#2B2B2B] transition-colors"
                >
                  {item.href ? (
                    <Link
                      href="/clone"
                      className="hover:text-[#88B1B1] transition-colors font-normal flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <span className="font-normal text-[#2B2B2B]">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Column B */}
            <div>
              {expertise.columnB.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-[#E8E7E3] py-4 text-xs tracking-[0.12em] uppercase text-[#2B2B2B] transition-colors"
                >
                  {item.href ? (
                    <Link
                      href="/clone"
                      className="hover:text-[#88B1B1] transition-colors font-normal flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <span className="font-normal text-[#2B2B2B]">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
