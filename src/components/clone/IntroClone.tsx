import { conejoValleyCloneData } from "@/data/cloneData";

export function IntroClone() {
  const { intro } = conejoValleyCloneData;

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-[#E8E7E3]">
      <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-snug text-[#2B2E2A]">
          {intro.title}
        </h2>
        <p className="mt-4 text-base sm:text-lg font-medium text-[#C08D5D]">
          {intro.subtitle}
        </p>

        <div className="mt-8 space-y-6 text-[#555853] text-base sm:text-[17px] font-light leading-relaxed text-left sm:text-center max-w-3xl mx-auto">
          <p>{intro.paragraph1}</p>
          <p>{intro.paragraph2}</p>
        </div>
      </div>
    </section>
  );
}
