import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function WhoWeHelpClone() {
  const { whoWeHelp } = conejoValleyCloneData;

  return (
    <section className="bg-[#FAF9F6] py-20 lg:py-28 border-t border-[#E8E7E3]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2B2E2A]">
            {whoWeHelp.heading}{" "}
            <span className="italic font-semibold text-[#2C423B]">
              {whoWeHelp.highlight}
            </span>
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {whoWeHelp.cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col bg-white rounded-xl overflow-hidden border border-[#E8E7E3] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-normal text-[#2B2E2A] mb-4">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-[#555853] font-light leading-relaxed flex-1">
                  {card.description}
                </p>
                <div className="mt-6 pt-4 border-t border-[#F2EFEA]">
                  <Link
                    href={card.link}
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#C08D5D] hover:text-[#2B2E2A] transition-colors"
                  >
                    Learn more &rarr;
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
