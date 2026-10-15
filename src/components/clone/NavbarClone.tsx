"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export function NavbarClone() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileFolder, setExpandedMobileFolder] = useState<string | null>(null);

  const teamList = [
    "Jennifer Anderson, LMFT",
    "Candace Bletscher, AMFT",
    "Heather Williams-Baumgart, AMFT",
    "Samantha Johnson, AMFT",
    "Autumn Bodily, AMFT",
    "Rosa Gomez, AMFT",
    "Chad Flores, AMFT",
    "Simran Sidhu, AMFT",
    "Jessica Jauregui, MA, AMFT",
  ];

  const specialtiesList = [
    "Dissociation",
    "Trauma",
    "Special Needs Parenting",
    "Couples",
    "Children & Teens",
    "Anxiety & Depression",
    "Adoption",
  ];

  const methodsList = [
    "EMDR",
    "Brainspotting",
    "Somatic Therapy",
    "Parts Work Therapy",
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF9F6] border-b border-[#E8E7E3]/60 transition-colors">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Brand Logo */}
        <Link href="/clone" className="relative flex items-center">
          <Image
            src="/images/clone/logo.png"
            alt="Conejo Valley Family Counseling"
            width={240}
            height={60}
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex text-[14px] text-[#2B2E2A] font-normal tracking-wide">
          <Link href="/clone" className="hover:text-[#C08D5D] transition-colors">
            About
          </Link>

          {/* Our Team Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("team")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#C08D5D] transition-colors py-2 cursor-pointer">
              <span>Our Team</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </button>
            {activeDropdown === "team" && (
              <div className="absolute top-full left-0 w-64 rounded-md border border-[#E8E7E3] bg-[#FAF9F6] p-3 shadow-lg">
                {teamList.map((member) => (
                  <Link
                    key={member}
                    href="/clone"
                    className="block px-3 py-1.5 text-[13px] text-[#555853] hover:bg-[#F2EFEA] hover:text-[#2B2E2A] rounded transition-colors"
                  >
                    {member}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Specialties Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("specialties")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#C08D5D] transition-colors py-2 cursor-pointer">
              <span>Specialties</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </button>
            {activeDropdown === "specialties" && (
              <div className="absolute top-full left-0 w-56 rounded-md border border-[#E8E7E3] bg-[#FAF9F6] p-3 shadow-lg">
                {specialtiesList.map((spec) => (
                  <Link
                    key={spec}
                    href="/clone"
                    className="block px-3 py-1.5 text-[13px] text-[#555853] hover:bg-[#F2EFEA] hover:text-[#2B2E2A] rounded transition-colors"
                  >
                    {spec}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Methods Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("methods")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#C08D5D] transition-colors py-2 cursor-pointer">
              <span>Methods</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </button>
            {activeDropdown === "methods" && (
              <div className="absolute top-full left-0 w-52 rounded-md border border-[#E8E7E3] bg-[#FAF9F6] p-3 shadow-lg">
                {methodsList.map((method) => (
                  <Link
                    key={method}
                    href="/clone"
                    className="block px-3 py-1.5 text-[13px] text-[#555853] hover:bg-[#F2EFEA] hover:text-[#2B2E2A] rounded transition-colors"
                  >
                    {method}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/clone" className="hover:text-[#C08D5D] transition-colors">
            FAQs
          </Link>

          {/* Contact Button */}
          <Link
            href="/clone"
            className="rounded-full border border-[#2B2E2A] px-5 py-2 text-xs font-semibold tracking-wider text-[#2B2E2A] transition-all hover:bg-[#2B2E2A] hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex p-2 text-[#2B2E2A] lg:hidden cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#E8E7E3] bg-[#FAF9F6] px-6 py-6 lg:hidden animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4 text-base text-[#2B2E2A]">
            <Link
              href="/clone"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C08D5D]"
            >
              About
            </Link>

            {/* Folder: Our Team */}
            <div>
              <button
                onClick={() =>
                  setExpandedMobileFolder(
                    expandedMobileFolder === "team" ? null : "team"
                  )
                }
                className="flex w-full items-center justify-between py-1 text-left hover:text-[#C08D5D]"
              >
                <span>Our Team</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedMobileFolder === "team" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedMobileFolder === "team" && (
                <div className="pl-4 pt-2 space-y-2 border-l border-[#E8E7E3] ml-2">
                  {teamList.map((m) => (
                    <Link
                      key={m}
                      href="/clone"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-[#666A65] py-1 hover:text-[#2B2E2A]"
                    >
                      {m}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Folder: Specialties */}
            <div>
              <button
                onClick={() =>
                  setExpandedMobileFolder(
                    expandedMobileFolder === "specialties" ? null : "specialties"
                  )
                }
                className="flex w-full items-center justify-between py-1 text-left hover:text-[#C08D5D]"
              >
                <span>Specialties</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedMobileFolder === "specialties" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedMobileFolder === "specialties" && (
                <div className="pl-4 pt-2 space-y-2 border-l border-[#E8E7E3] ml-2">
                  {specialtiesList.map((s) => (
                    <Link
                      key={s}
                      href="/clone"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-[#666A65] py-1 hover:text-[#2B2E2A]"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Folder: Methods */}
            <div>
              <button
                onClick={() =>
                  setExpandedMobileFolder(
                    expandedMobileFolder === "methods" ? null : "methods"
                  )
                }
                className="flex w-full items-center justify-between py-1 text-left hover:text-[#C08D5D]"
              >
                <span>Methods</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedMobileFolder === "methods" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedMobileFolder === "methods" && (
                <div className="pl-4 pt-2 space-y-2 border-l border-[#E8E7E3] ml-2">
                  {methodsList.map((m) => (
                    <Link
                      key={m}
                      href="/clone"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm text-[#666A65] py-1 hover:text-[#2B2E2A]"
                    >
                      {m}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/clone"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#C08D5D]"
            >
              FAQs
            </Link>

            <Link
              href="/clone"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-block text-center rounded-full border border-[#2B2E2A] px-6 py-2.5 text-xs font-semibold tracking-wider text-[#2B2E2A] hover:bg-[#2B2E2A] hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
