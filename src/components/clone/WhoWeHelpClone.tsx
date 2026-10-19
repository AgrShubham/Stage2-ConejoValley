import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function WhoWeHelpClone() {
  const { whoWeHelp } = conejoValleyCloneData;

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-[#E8E7E3]">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8">
        {/* 3-Column Grid positioned across desktop cols 5..26 */}
        <div className="grid grid-cols-1 md:grid-cols-26 gap-y-10">
          {/* Section Heading starts at Column 2 (Rows 1..3, Cols 2..10 in Squarespace) */}
          <div className="hidden md:block md:col-span-1" />
          <div className="md:col-span-18 mb-6">
            <h2 className="font-beaufort text-3xl sm:text-4xl md:text-[46px] font-light text-[#2B2B2B]">
              {whoWeHelp.heading}{" "}
              <span className="script-word ml-1">
                {whoWeHelp.scriptWord}
              </span>
            </h2>
          </div>
          <div className="hidden md:block md:col-span-7" />

          {/* Spacer columns 1..4 on desktop so Card 1 starts at Column 5 */}
          <div className="hidden md:block md:col-span-4" />

          {/* Card 1: Adults (Cols 5..11) */}
          <div className="md:col-span-7 flex flex-col">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={whoWeHelp.cards[0].image}
                alt={whoWeHelp.cards[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                priority
                className="object-cover object-center"
              />
            </div>
            <h3 className="font-beaufort text-2xl sm:text-[26px] font-light text-[#2B2B2B] mt-6 mb-3">
              <Link href="/clone" className="hover:opacity-80 transition-opacity">
                {whoWeHelp.cards[0].title}
              </Link>
            </h3>
            <p className="font-muli text-sm sm:text-[15px] text-[#2B2B2B] font-light leading-[1.8]">
              {whoWeHelp.cards[0].description}
            </p>
          </div>

          {/* Card 2: Couples (Cols 12..18) */}
          <div className="md:col-span-7 flex flex-col md:pl-2 md:pr-1">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={whoWeHelp.cards[1].image}
                alt={whoWeHelp.cards[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                priority
                className="object-cover object-center"
              />
            </div>
            <h3 className="font-beaufort text-2xl sm:text-[26px] font-light text-[#2B2B2B] mt-6 mb-3">
              <Link href="/clone" className="hover:opacity-80 transition-opacity">
                {whoWeHelp.cards[1].title}
              </Link>
            </h3>
            <p className="font-muli text-sm sm:text-[15px] text-[#2B2B2B] font-light leading-[1.8]">
              {whoWeHelp.cards[1].description}
            </p>
          </div>

          {/* Card 3: Children & Teens (Cols 19..26) */}
          <div className="md:col-span-8 flex flex-col md:pl-3">
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={whoWeHelp.cards[2].image}
                alt={whoWeHelp.cards[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                priority
                className="object-cover object-center"
              />
            </div>
            <h3 className="font-beaufort text-2xl sm:text-[26px] font-light text-[#2B2B2B] mt-6 mb-3">
              <Link href="/clone" className="hover:opacity-80 transition-opacity">
                {whoWeHelp.cards[2].title}
              </Link>
            </h3>
            <p className="font-muli text-sm sm:text-[15px] text-[#2B2B2B] font-light leading-[1.8]">
              {whoWeHelp.cards[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
