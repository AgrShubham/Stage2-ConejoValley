import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function WhoWeHelpClone() {
  const { whoWeHelp } = conejoValleyCloneData;

  return (
    <section className="bg-white py-16 lg:py-24 border-t border-[#E8E7E3]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-beaufort text-3xl sm:text-4xl lg:text-[46px] font-light text-[#2B2B2B]">
            {whoWeHelp.heading}{" "}
            <span className="font-script text-[#88B1B1] text-[1.35em] inline-block font-normal ml-1">
              {whoWeHelp.scriptWord}
            </span>
          </h2>
        </div>

        {/* 3-Column Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {whoWeHelp.cards.map((card) => (
            <div key={card.title} className="flex flex-col">
              {/* Sharp Rectangular Photo */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Title as Link */}
              <h3 className="font-beaufort text-2xl sm:text-3xl font-light text-[#2B2B2B] mt-6 mb-3">
                <Link href="/clone" className="hover:opacity-80 transition-opacity">
                  {card.title}
                </Link>
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-[15px] text-[#2B2B2B] font-light leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
