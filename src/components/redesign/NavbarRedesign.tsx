"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { mayaReynoldsData } from "@/data/redesignData";

export function NavbarRedesign() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner Announcement */}
      <div className="bg-forest-900 text-sand-100 px-4 py-2 text-center text-[11px] font-medium tracking-widest uppercase flex items-center justify-center gap-2">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-clay-400 animate-pulse" />
        <span>{mayaReynoldsData.topBadge}</span>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-sand-50/95 backdrop-blur-md border-b border-sand-200/80 shadow-sm py-3.5"
            : "bg-sand-50 border-b border-sand-200/40 py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12">
          {/* Logo / Practitioner Brand */}
          <Link href="/" className="group flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-forest-900 group-hover:text-clay-600 transition-colors">
              Dr. Maya Reynolds, <span className="text-base font-normal text-clay-600 font-sans">PsyD</span>
            </span>
            <span className="text-[11px] font-medium tracking-wider uppercase text-ink-500">
              Licensed Clinical Psychologist • Santa Monica, CA
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden items-center gap-8 lg:flex text-[14px] text-ink-700 font-medium">
            <Link href="#about" className="hover:text-forest-900 transition-colors">
              About Maya
            </Link>
            <Link href="#who-we-help" className="hover:text-forest-900 transition-colors">
              Who I Support
            </Link>
            <Link href="#specialties" className="hover:text-forest-900 transition-colors">
              Specialties
            </Link>
            <Link
              href="#office"
              className="flex items-center gap-1.5 text-forest-800 hover:text-clay-600 transition-colors"
            >
              <MapPin className="h-3.5 w-3.5 text-clay-500" />
              <span>Our Office</span>
              <span className="rounded-full bg-clay-100 px-2 py-0.5 text-[10px] font-bold text-clay-600">
                New
              </span>
            </Link>
            <Link href="#faqs" className="hover:text-forest-900 transition-colors">
              FAQs
            </Link>

            {/* Primary Action Button */}
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-forest-900 px-6 py-2.5 text-xs font-semibold tracking-wider text-sand-50 uppercase shadow-sm transition-all duration-300 hover:bg-clay-600 hover:shadow-md cursor-pointer"
            >
              <span>Book Consultation</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex p-2 text-forest-900 lg:hidden cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-sand-200 bg-sand-50/98 backdrop-blur-xl px-6 py-6 lg:hidden animate-in slide-in-from-top-4 duration-200 shadow-xl">
            <div className="flex flex-col space-y-4 text-base font-medium text-ink-800">
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-clay-600 transition-colors"
              >
                About Dr. Maya
              </Link>
              <Link
                href="#who-we-help"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-clay-600 transition-colors"
              >
                Who I Support
              </Link>
              <Link
                href="#specialties"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-clay-600 transition-colors"
              >
                Specialties &amp; Modalities
              </Link>
              <Link
                href="#office"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-1.5 text-forest-900 font-semibold"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-clay-500" />
                  <span>Our Santa Monica Office</span>
                </span>
                <span className="rounded-full bg-clay-100 px-2 py-0.5 text-xs font-bold text-clay-600">
                  New Section
                </span>
              </Link>
              <Link
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-clay-600 transition-colors"
              >
                Frequently Asked Questions
              </Link>

              <div className="pt-4 border-t border-sand-200">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-forest-900 py-3.5 text-xs font-semibold tracking-wider text-sand-50 uppercase shadow-md hover:bg-clay-600"
                >
                  <ShieldCheck className="h-4 w-4 text-clay-400" />
                  <span>Book Initial Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
