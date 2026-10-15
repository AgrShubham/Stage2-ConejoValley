import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function SpecialtiesGridClone() {
  const { specialties } = conejoValleyCloneData;

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-[#E8E7E3]">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
        {/* Section Heading */}
        <div className="mb-14">
          <h3 className="font-beaufort text-3xl sm:text-4xl lg:text-[44px] font-light text-[#2B2B2B]">
            {specialties.heading}{" "}
            <span className="font-script text-[#88B1B1] text-[1.35em] inline-block font-normal ml-1">
              {specialties.scriptWord}
            </span>{" "}
            include…
          </h3>
        </div>

        {/* 4-Column Clean Text Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {specialties.items.map((item) => (
            <div key={item.title} className="flex flex-col justify-between">
              <div>
                <h4 className="font-beaufort text-2xl sm:text-[25px] font-light text-[#2B2B2B] mb-3">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-[15px] text-[#2B2B2B] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-2">
                <Link
                  href="/clone"
                  className="sqs-btn-underline"
                >
                  {item.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
