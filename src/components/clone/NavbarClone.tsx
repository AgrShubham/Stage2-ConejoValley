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
    <header className="sticky top-0 z-50 w-full bg-[#F7F6F2] border-b border-[#E8E7E3]/60 transition-colors">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 lg:px-12">
        {/* Brand Logo */}
        <Link href="/clone" className="relative flex items-center">
          <Image
            src="/images/clone/logo.png"
            alt="Conejo Valley Family Counseling"
            width={260}
            height={65}
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:gap-10 lg:flex">
          <Link href="/clone" className="sqs-nav-link">
            About
          </Link>

          {/* Our Team Dropdown (Desktop: folderDropdownIcon: none) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("team")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="sqs-nav-link py-2 cursor-pointer">
              <span>Our Team</span>
            </button>
            {activeDropdown === "team" && (
              <div className="absolute top-full left-0 w-72 border border-[#E8E7E3] bg-[#F7F6F2] py-2 shadow-sm">
                {teamList.map((member) => (
                  <Link
                    key={member}
                    href="/clone"
                    className="block px-4 py-2 text-xs font-normal tracking-wider uppercase text-[#2B2B2B] border-b border-transparent hover:border-[#2B2B2B] transition-colors"
                  >
                    {member}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Specialties Dropdown (Desktop: folderDropdownIcon: none) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("specialties")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="sqs-nav-link py-2 cursor-pointer">
              <span>Specialties</span>
            </button>
            {activeDropdown === "specialties" && (
              <div className="absolute top-full left-0 w-64 border border-[#E8E7E3] bg-[#F7F6F2] py-2 shadow-sm">
                {specialtiesList.map((spec) => (
                  <Link
                    key={spec}
                    href="/clone"
                    className="block px-4 py-2 text-xs font-normal tracking-wider uppercase text-[#2B2B2B] border-b border-transparent hover:border-[#2B2B2B] transition-colors"
                  >
                    {spec}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Methods Dropdown (Desktop: folderDropdownIcon: none) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("methods")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="sqs-nav-link py-2 cursor-pointer">
              <span>Methods</span>
            </button>
            {activeDropdown === "methods" && (
              <div className="absolute top-full left-0 w-56 border border-[#E8E7E3] bg-[#F7F6F2] py-2 shadow-sm">
                {methodsList.map((method) => (
                  <Link
                    key={method}
                    href="/clone"
                    className="block px-4 py-2 text-xs font-normal tracking-wider uppercase text-[#2B2B2B] border-b border-transparent hover:border-[#2B2B2B] transition-colors"
                  >
                    {method}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/clone" className="sqs-nav-link">
            FAQs
          </Link>

          {/* Contact Button (Pill outline matching secondary-button-shape-oval) */}
          <Link
            href="/clone#contact"
            className="sqs-btn-secondary !py-2 !px-6 !text-[11px] !rounded-full"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#2B2B2B] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E7E3] bg-[#F7F6F2] px-6 py-8 shadow-xl">
          <div className="flex flex-col gap-5">
            <Link
              href="/clone"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-normal tracking-[0.12em] uppercase text-[#2B2B2B]"
            >
              About
            </Link>

            {/* Mobile Team Folder */}
            <div>
              <button
                onClick={() =>
                  setExpandedMobileFolder(
                    expandedMobileFolder === "team" ? null : "team"
                  )
                }
                className="flex w-full items-center justify-between text-sm font-normal tracking-[0.12em] uppercase text-[#2B2B2B]"
              >
                <span>Our Team</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedMobileFolder === "team" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedMobileFolder === "team" && (
                <div className="mt-3 flex flex-col gap-2 pl-4 border-l border-[#2B2B2B]/20">
                  {teamList.map((member) => (
                    <Link
                      key={member}
                      href="/clone"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs uppercase tracking-wider text-[#555853] py-1"
                    >
                      {member}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Specialties Folder */}
            <div>
              <button
                onClick={() =>
                  setExpandedMobileFolder(
                    expandedMobileFolder === "specialties" ? null : "specialties"
                  )
                }
                className="flex w-full items-center justify-between text-sm font-normal tracking-[0.12em] uppercase text-[#2B2B2B]"
              >
                <span>Specialties</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedMobileFolder === "specialties" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedMobileFolder === "specialties" && (
                <div className="mt-3 flex flex-col gap-2 pl-4 border-l border-[#2B2B2B]/20">
                  {specialtiesList.map((spec) => (
                    <Link
                      key={spec}
                      href="/clone"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs uppercase tracking-wider text-[#555853] py-1"
                    >
                      {spec}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Methods Folder */}
            <div>
              <button
                onClick={() =>
                  setExpandedMobileFolder(
                    expandedMobileFolder === "methods" ? null : "methods"
                  )
                }
                className="flex w-full items-center justify-between text-sm font-normal tracking-[0.12em] uppercase text-[#2B2B2B]"
              >
                <span>Methods</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    expandedMobileFolder === "methods" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedMobileFolder === "methods" && (
                <div className="mt-3 flex flex-col gap-2 pl-4 border-l border-[#2B2B2B]/20">
                  {methodsList.map((method) => (
                    <Link
                      key={method}
                      href="/clone"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs uppercase tracking-wider text-[#555853] py-1"
                    >
                      {method}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/clone"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-normal tracking-[0.12em] uppercase text-[#2B2B2B]"
            >
              FAQs
            </Link>

            <Link
              href="/clone#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 inline-block text-center border border-[#2B2B2B] rounded-full py-2.5 uppercase text-xs tracking-[0.14em] font-normal text-[#2B2B2B]"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
