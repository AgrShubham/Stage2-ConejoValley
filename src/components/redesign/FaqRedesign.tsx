"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { mayaReynoldsData } from "@/data/redesignData";

export function FaqRedesign() {
  const { faqs } = mayaReynoldsData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-forest-700 mb-3">
            <HelpCircle className="h-4 w-4" />
            <span>COMMON INQUIRIES</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-forest-900">
            Frequently Asked{" "}
            <span className="italic font-semibold text-clay-600">Questions</span>
          </h3>
          <p className="mt-4 text-base text-ink-600 font-normal">
            Everything you need to know about starting therapy with Dr. Maya Reynolds.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-sand-300 bg-white shadow-md"
                    : "border-sand-200 bg-white/70 hover:border-sand-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-normal text-forest-900 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen
                        ? "bg-forest-900 text-sand-50 rotate-180"
                        : "bg-sand-100 text-ink-700"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-sand-100 text-sm sm:text-base text-ink-700 font-normal leading-relaxed animate-in fade-in-50 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
