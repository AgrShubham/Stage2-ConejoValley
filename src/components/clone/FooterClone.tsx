import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function FooterClone() {
  const { footer } = conejoValleyCloneData;

  return (
    <>
      {/* Pre-footer Section (Theme White) */}
      <section className="bg-white border-t border-[#E8E7E3] pt-16 pb-20 text-[#2B2B2B]">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-26 gap-y-10 md:gap-y-0 gap-x-6 items-start">
            {/* Column 1 (Cols 2..10): Logo & Intro */}
            <div className="md:col-start-2 md:col-span-9 pr-0 md:pr-8">
              <Link href="/clone" className="inline-block mb-6">
                <Image
                  src="/images/clone/logo.png"
                  alt="Conejo Valley Family Counseling"
                  width={240}
                  height={60}
                  priority
                  className="h-10 w-auto object-contain md:h-11"
                />
              </Link>
              <p className="font-muli text-sm sm:text-[15px] text-[#2B2B2B] font-light leading-[1.8] max-w-sm">
                {footer.intro}
              </p>
            </div>

            {/* Column 2 (Cols 12..15): Navigate */}
            <div className="md:col-start-12 md:col-span-4">
              <p className="clone-lead-caps mb-4">
                Navigate
              </p>
              <ul className="space-y-3 font-muli text-sm text-[#2B2B2B] font-light">
                {footer.navLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#88B1B1] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 (Cols 16..20): Our Team */}
            <div className="md:col-start-16 md:col-span-5">
              <p className="clone-lead-caps mb-4">
                Our Team
              </p>
              <ul className="space-y-2.5 font-muli text-[13px] text-[#2B2B2B] font-light leading-normal">
                {footer.teamMembers.map((member) => (
                  <li key={member}>
                    <Link href="/clone" className="hover:text-[#88B1B1] transition-colors">
                      {member}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 (Cols 21..26): Contact */}
            <div className="md:col-start-21 md:col-span-6 pl-0 md:pl-2">
              <p className="clone-lead-caps mb-4">
                Contact
              </p>
              <div className="font-muli text-sm text-[#2B2B2B] font-light space-y-2 leading-relaxed">
                {footer.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="pt-2">
                  <a href={`mailto:${footer.email}`} className="text-[#2B2B2B] hover:text-[#88B1B1] transition-colors">
                    {footer.email}
                  </a>
                </p>
                <p>
                  <a href={`tel:${footer.phone.replace(/[^0-9]/g, '')}`} className="text-[#2B2B2B] hover:text-[#88B1B1] transition-colors">
                    {footer.phone}
                  </a>
                </p>
                <p className="pt-2 text-xs italic text-[#666A65] leading-normal">
                  {footer.serviceAreas}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Footer Bar (Theme Dark #2B2B2B) */}
      <footer className="bg-[#2B2B2B] py-8 text-center text-xs text-[#A9A9A9] tracking-wider">
        <div className="mx-auto max-w-[1500px] px-4 flex flex-row flex-wrap items-center justify-center gap-x-2.5 gap-y-1">
          <Link href="/clone" className="text-white hover:underline">Terms</Link>
          <span className="text-[#A9A9A9]">|</span>
          <Link href="/clone" className="text-white hover:underline">Privacy Policy</Link>
          <span className="text-[#A9A9A9]">|</span>
          <Link href="/clone" className="text-white hover:underline">Disclaimer</Link>
          <span className="text-[#A9A9A9]">|</span>
          <span>Website by <a href="https://walkerstrategyco.com" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Walker Strategy Co.</a></span>
        </div>
      </footer>
    </>
  );
}
