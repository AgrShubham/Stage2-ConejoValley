import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function HowWeWorkClone() {
  const { howWeWork } = conejoValleyCloneData;

  return (
    <section className="bg-[#F7F6F2] py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-26 items-start gap-y-12">
          {/* Left Text Container (Columns 3 to 19 on desktop) */}
          <div className="lg:col-start-3 lg:col-span-17 flex flex-col justify-start pr-0 lg:pr-8">
            <p className="clone-eyebrow mb-4">
              {howWeWork.tagline}
            </p>

            <h2 className="font-beaufort text-3xl sm:text-4xl lg:text-[44px] font-light leading-tight text-[#2B2B2B] mb-8 max-w-2xl">
              {howWeWork.heading}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#2B2B2B] font-muli text-sm sm:text-[15px] font-light leading-[1.8]">
              <div>
                <p className="clone-lead-caps">
                  {howWeWork.lead}
                </p>
                <p>{howWeWork.body1}</p>
              </div>
              <div className="pt-0 md:pt-1">
                <p>{howWeWork.body2}</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/clone"
                className="sqs-btn-underline"
              >
                {howWeWork.ctaText}
              </Link>
            </div>
          </div>

          {/* Right Image (Columns 21 to 26 on desktop, row 4..22) */}
          <div className="lg:col-start-21 lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative aspect-[3/4] w-full max-w-md lg:max-w-none overflow-hidden">
              <Image
                src={howWeWork.image}
                alt="Woman and child dancing on sandy beach at sunset"
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
