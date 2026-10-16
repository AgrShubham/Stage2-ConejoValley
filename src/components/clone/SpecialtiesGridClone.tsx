import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function SpecialtiesGridClone() {
  const { specialties } = conejoValleyCloneData;

  const [trauma, dissociation, emdr, specialNeeds] = specialties.items;

  return (
    <section className="bg-white py-20 lg:py-28 border-b border-[#E8E7E3]">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-26 gap-y-12 items-start">
          {/* Column 1 (Cols 3..10): Heading */}
          <div className="lg:col-start-3 lg:col-span-8 pr-0 lg:pr-8">
            <h3 className="font-beaufort text-3xl sm:text-4xl lg:text-[42px] font-light text-[#2B2B2B] leading-tight sticky top-28">
              {specialties.heading}{" "}
              <span className="script-word ml-1">
                {specialties.scriptWord}
              </span>{" "}
              include…
            </h3>
          </div>

          {/* Column 2 (Cols 11..18): Trauma & Dissociation */}
          <div className="lg:col-start-11 lg:col-span-8 space-y-12 pr-0 lg:pr-4">
            {/* Trauma */}
            {trauma && (
              <div>
                <h4 className="font-beaufort text-2xl sm:text-[26px] font-light text-[#2B2B2B] mb-3">
                  {trauma.title}
                </h4>
                <p className="font-muli text-sm sm:text-[15px] text-[#2B2B2B] font-light leading-[1.8]">
                  {trauma.description}
                </p>
                <div className="mt-4">
                  <Link href="/clone" className="sqs-btn-underline">
                    {trauma.linkText}
                  </Link>
                </div>
              </div>
            )}

            {/* Dissociation */}
            {dissociation && (
              <div className="pt-2">
                <h4 className="font-beaufort text-2xl sm:text-[26px] font-light text-[#2B2B2B] mb-3">
                  {dissociation.title}
                </h4>
                <p className="font-muli text-sm sm:text-[15px] text-[#2B2B2B] font-light leading-[1.8]">
                  {dissociation.description}
                </p>
                <div className="mt-4">
                  <Link href="/clone" className="sqs-btn-underline">
                    {dissociation.linkText}
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Column 3 (Cols 19..26): EMDR & Special Needs Parenting */}
          <div className="lg:col-start-19 lg:col-span-8 space-y-12 pl-0 lg:pl-2">
            {/* EMDR */}
            {emdr && (
              <div>
                <h4 className="font-beaufort text-2xl sm:text-[26px] font-light text-[#2B2B2B] mb-3">
                  {emdr.title}
                </h4>
                <p className="font-muli text-sm sm:text-[15px] text-[#2B2B2B] font-light leading-[1.8]">
                  {emdr.description}
                </p>
                <div className="mt-4">
                  <Link href="/clone" className="sqs-btn-underline">
                    {emdr.linkText}
                  </Link>
                </div>
              </div>
            )}

            {/* Special Needs Parenting */}
            {specialNeeds && (
              <div className="pt-2">
                <h4 className="font-beaufort text-2xl sm:text-[26px] font-light text-[#2B2B2B] mb-3">
                  {specialNeeds.title}
                </h4>
                <p className="font-muli text-sm sm:text-[15px] text-[#2B2B2B] font-light leading-[1.8]">
                  {specialNeeds.description}
                </p>
                <div className="mt-4">
                  <Link href="/clone" className="sqs-btn-underline">
                    {specialNeeds.linkText}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
