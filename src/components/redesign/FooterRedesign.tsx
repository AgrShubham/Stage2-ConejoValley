import Link from "next/link";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { mayaReynoldsData } from "@/data/redesignData";

export function FooterRedesign() {
  const { footer } = mayaReynoldsData;

  return (
    <footer className="bg-forest-900 text-sand-100 pt-20 pb-12 border-t border-forest-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-forest-800/80">
          {/* Column 1: Identity & Ethos */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-2xl font-normal text-sand-50 mb-3">
              Dr. Maya Reynolds, <span className="font-sans text-base text-clay-400">PsyD</span>
            </h3>
            <p className="text-xs uppercase tracking-widest text-clay-400 font-semibold mb-4">
              Licensed Clinical Psychologist &bull; PSY 34912
            </p>
            <p className="text-sm text-sand-200/80 font-light leading-relaxed max-w-md">
              {footer.intro}
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-sage-200">
              <ShieldCheck className="h-4 w-4 text-clay-400 shrink-0" />
              <span>{footer.telehealthCoverage}</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-clay-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-sand-200/90 font-light">
              {footer.navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-sand-50 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Practice Location */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-clay-400 mb-4">
              Practice Location
            </h4>
            <div className="text-sm text-sand-200/90 space-y-3 font-light leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-clay-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sand-50 font-medium">{footer.addressLines[0]}</p>
                  <p>{footer.addressLines[1]}</p>
                  <p className="text-xs text-sage-200/80 mt-0.5">Santa Monica Coastal District</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Mail className="h-4 w-4 text-clay-400 shrink-0" />
                <a
                  href={`mailto:${footer.email}`}
                  className="text-sand-100 hover:text-clay-400 transition-colors"
                >
                  {footer.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-clay-400 shrink-0" />
                <span>{footer.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sand-300/70 gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="hover:text-sand-100 transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/" className="hover:text-sand-100 transition-colors">
              Terms of Service
            </Link>
            <span>&bull;</span>
            <Link href="/" className="hover:text-sand-100 transition-colors">
              Good Faith Estimate
            </Link>
          </div>

          <div className="text-center sm:text-right">
            <p>
              &copy; 2026 Dr. Maya Reynolds, PsyD. Built for Grow My Therapy Internship Selection.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
