import Link from "next/link";
import { conejoValleyCloneData } from "@/data/cloneData";

export function FooterClone() {
  const { footer } = conejoValleyCloneData;

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#E8E7E3] pt-16 pb-12 text-[#2B2E2A]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E8E7E3]">
          {/* Column 1: Intro */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-2xl font-normal mb-4">
              Conejo Valley Family Counseling
            </h3>
            <p className="text-sm text-[#555853] font-light leading-relaxed">
              {footer.intro}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#666A65] mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5 text-sm text-[#555853]">
              {footer.navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-[#C08D5D] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#666A65] mb-4">
              Contact
            </h4>
            <div className="text-sm text-[#555853] space-y-2 leading-relaxed">
              {footer.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2 text-[#C08D5D] font-medium">{footer.email}</p>
              <p>{footer.phone}</p>
              <p className="pt-2 text-xs text-[#666A65] leading-normal">
                {footer.serviceAreas}
              </p>
            </div>
          </div>

          {/* Column 4: Our Team */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#666A65] mb-4">
              Our Team
            </h4>
            <ul className="space-y-1.5 text-xs text-[#555853]">
              {footer.teamMembers.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666A65] gap-4">
          <div className="flex items-center gap-3">
            <Link href="/clone" className="hover:underline">Terms</Link>
            <span>|</span>
            <Link href="/clone" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link href="/clone" className="hover:underline">Disclaimer</Link>
          </div>
          <div>
            <span>Website by </span>
            <span className="font-medium text-[#2B2E2A]">Walker Strategy Co.</span>
            <span className="mx-2">|</span>
            <span>Cloned for Grow My Therapy Evaluation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
