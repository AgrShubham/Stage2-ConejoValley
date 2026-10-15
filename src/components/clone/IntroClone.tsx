import Image from "next/image";
import { conejoValleyCloneData } from "@/data/cloneData";

export function IntroClone() {
  const { intro } = conejoValleyCloneData;

  return (
    <section className="bg-[#F7F6F2] py-16 lg:py-24 border-t border-[#E8E7E3]/60">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Side: Headline and 2 text columns */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <h2 className="font-beaufort text-3xl sm:text-4xl lg:text-[42px] font-light leading-[1.2] text-[#2B2B2B] mb-4 max-w-2xl">
              {intro.title}
            </h2>

            <p className="font-beaufort italic text-lg sm:text-xl text-[#2B2B2B] font-light mb-8">
              At Conejo Valley Family Counseling we want to make that hope a reality.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#2B2B2B] text-sm sm:text-[15px] font-light leading-relaxed">
              <p>{intro.paragraph1}</p>
              <p>{intro.paragraph2}</p>
            </div>
          </div>

          {/* Right Side: Beach visual - sharp rectangular */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-none overflow-hidden">
              <Image
                src={intro.image}
                alt="Sandy beach with gentle ocean waves in California"
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
