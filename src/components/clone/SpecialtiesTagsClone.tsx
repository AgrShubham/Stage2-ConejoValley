import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function SpecialtiesTagsClone() {
  const { expertise } = conejoValleyCloneData;

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-[#E8E7E3]">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-26 gap-y-10 items-start">
          {/* Left Column: Heading (Cols 3..9) */}
          <div className="md:col-start-3 md:col-span-7 pr-0 md:pr-6">
            <h3 className="font-beaufort text-2xl sm:text-3xl md:text-[30px] lg:text-[40px] font-light text-[#2B2B2B] leading-[1.15] sticky top-28">
              {expertise.heading}<br className="hidden md:inline" />{" "}
              <span className="script-word text-[1.15em] ml-0.5">
                {expertise.scriptWord}
              </span>
            </h3>
          </div>

          {/* Right Column: 2-Subcolumn Editorial Bordered List (Cols 10..26) */}
          <div className="md:col-start-10 md:col-span-17 grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-12">
            {/* Column A (Cols 10..18) */}
            <div>
              {expertise.columnA.map((item) => (
                <div
                  key={item.label}
                  className="border-b last:border-b-0 border-[#E8E7E3] py-4 text-[13px] tracking-[0.14em] uppercase font-normal text-[#2B2B2B] transition-colors"
                >
                  {item.href ? (
                    <Link
                      href="/clone"
                      className="hover:text-[#88B1B1] transition-colors font-normal block"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="font-normal text-[#2B2B2B]">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Column B (Cols 18..26) */}
            <div>
              {expertise.columnB.map((item) => (
                <div
                  key={item.label}
                  className="border-b last:border-b-0 border-[#E8E7E3] py-4 text-[13px] tracking-[0.14em] uppercase font-normal text-[#2B2B2B] transition-colors"
                >
                  {item.href ? (
                    <Link
                      href="/clone"
                      className="hover:text-[#88B1B1] transition-colors font-normal block"
                    >
                      {item.label}
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
