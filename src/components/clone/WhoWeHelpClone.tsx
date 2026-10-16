import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function WhoWeHelpClone() {
  const { whoWeHelp } = conejoValleyCloneData;

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-[#E8E7E3]">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-beaufort text-3xl sm:text-4xl lg:text-[46px] font-light text-[#2B2B2B]">
            {whoWeHelp.heading}{" "}
            <span className="script-word ml-1">
              {whoWeHelp.scriptWord}
            </span>
          </h2>
        </div>

        {/* 3-Column Grid positioned across desktop cols 5..26 */}
        <div className="grid grid-cols-1 lg:grid-cols-26 gap-y-12">
          {/* Spacer columns 1..4 on desktop */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* Card 1: Adults (Cols 5..11) */}
          <div className="lg:col-span-7 flex flex-col pr-0 lg:pr-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={whoWeHelp.cards[0].image}
                alt={whoWeHelp.cards[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
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
          <div className="lg:col-span-7 flex flex-col px-0 lg:px-3">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={whoWeHelp.cards[1].image}
                alt={whoWeHelp.cards[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
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
          <div className="lg:col-span-8 flex flex-col pl-0 lg:pl-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src={whoWeHelp.cards[2].image}
                alt={whoWeHelp.cards[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
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
