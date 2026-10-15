import Image from "next/image";
import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function FooterClone() {
  const { footer } = conejoValleyCloneData;

  return (
    <>
      {/* Pre-footer Section (Theme White) */}
      <section className="bg-white border-t border-[#E8E7E3] pt-16 pb-20 text-[#2B2B2B]">
        <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Column 1: Logo & Intro */}
            <div className="lg:col-span-4">
              <Link href="/clone" className="inline-block mb-6">
                <Image
                  src="/images/clone/logo.png"
                  alt="Conejo Valley Family Counseling"
                  width={240}
                  height={60}
                  className="h-10 w-auto object-contain md:h-11"
                />
              </Link>
              <p className="text-sm text-[#2B2B2B] font-light leading-relaxed max-w-sm">
                {footer.intro}
              </p>
            </div>

            {/* Column 2: Navigate */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2B2B2B] mb-5">
                Navigate
              </h4>
              <ul className="space-y-3 text-sm text-[#2B2B2B] font-light">
                {footer.navLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-[#88B1B1] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2B2B2B] mb-5">
                Contact
              </h4>
              <div className="text-sm text-[#2B2B2B] font-light space-y-2 leading-relaxed">
                {footer.addressLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="pt-2 text-[#2B2B2B]">{footer.email}</p>
                <p>{footer.phone}</p>
                <p className="pt-2 text-xs text-[#666A65] leading-normal">
                  {footer.serviceAreas}
                </p>
              </div>
            </div>

            {/* Column 4: Our Team */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2B2B2B] mb-5">
                Our Team
              </h4>
              <ul className="space-y-2 text-xs text-[#2B2B2B] font-light">
                {footer.teamMembers.map((member) => (
                  <li key={member}>
                    <Link href="/clone" className="hover:text-[#88B1B1] transition-colors">
                      {member}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Footer Bar (Theme Dark #2B2B2B) */}
      <footer className="bg-[#2B2B2B] py-8 text-center text-xs text-[#A9A9A9] tracking-wider">
        <div className="mx-auto max-w-[1500px] px-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
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
