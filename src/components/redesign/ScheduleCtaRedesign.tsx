"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Send, Calendar, Clock, Lock } from "lucide-react";
import { mayaReynoldsData } from "@/data/redesignData";

export function ScheduleCtaRedesign() {
  const { bookingCta } = mayaReynoldsData;
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    sessionPreference: "in-person",
    focusArea: "anxiety",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-sand-100 py-24 lg:py-32 border-t border-sand-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Context & Ethos */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-forest-700 mb-4">
              {bookingCta.tagline}
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-forest-900">
              {bookingCta.heading}
            </h2>

            <p className="mt-6 text-base sm:text-lg text-ink-700 font-normal leading-relaxed">
              {bookingCta.body}
            </p>

            {/* Practical Consultation Details */}
            <div className="mt-8 space-y-4 text-sm text-forest-900 font-medium">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-clay-500 shrink-0" />
                <span>Complimentary 15-Minute Video Consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-clay-500 shrink-0" />
                <span>Flexible Appointments: Mon &ndash; Fri (US Pacific Time)</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-clay-500 shrink-0" />
                <span>100% Confidential &amp; HIPAA-Compliant Communications</span>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-white/80 p-6 border border-sand-300/80">
              <p className="text-xs uppercase tracking-wider font-semibold text-forest-700 mb-1">
                Direct Contact
              </p>
              <p className="text-base font-serif text-forest-900 font-medium">
                contact@drmayareynolds.com &bull; (310) 555-0198
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-2xl border border-sand-200">
              {submitted ? (
                <div className="text-center py-12 animate-in fade-in duration-300">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-forest-100 text-forest-700 mb-6">
                    <CheckCircle2 className="h-10 w-10 text-forest-800" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-forest-900 mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-ink-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formState.name || "friend"}. Dr. Maya Reynolds personally reviews all initial requests within 24 business hours to coordinate your consultation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-semibold uppercase tracking-wider text-clay-600 hover:text-forest-900"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif text-2xl font-normal text-forest-900">
                      Request an Initial Consultation
                    </h3>
                    <p className="text-xs text-ink-500 mt-1">
                      No commitment required. We&apos;ll discuss your needs and ensure a good mutual fit.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl border border-sand-300 bg-sand-50/50 px-4 py-3 text-sm text-forest-900 placeholder:text-ink-400 focus:border-forest-900 focus:bg-white focus:outline-hidden transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-xl border border-sand-300 bg-sand-50/50 px-4 py-3 text-sm text-forest-900 placeholder:text-ink-400 focus:border-forest-900 focus:bg-white focus:outline-hidden transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="(310) 555-0123"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full rounded-xl border border-sand-300 bg-sand-50/50 px-4 py-3 text-sm text-forest-900 placeholder:text-ink-400 focus:border-forest-900 focus:bg-white focus:outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                        Session Format
                      </label>
                      <select
                        value={formState.sessionPreference}
                        onChange={(e) => setFormState({ ...formState, sessionPreference: e.target.value })}
                        className="w-full rounded-xl border border-sand-300 bg-sand-50/50 px-4 py-3 text-sm text-forest-900 focus:border-forest-900 focus:bg-white focus:outline-hidden transition-all"
                      >
                        <option value="in-person">In-Person (Santa Monica Office)</option>
                        <option value="telehealth">Telehealth (Anywhere in California)</option>
                        <option value="hybrid">Open to Hybrid</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                        Primary Focus
                      </label>
                      <select
                        value={formState.focusArea}
                        onChange={(e) => setFormState({ ...formState, focusArea: e.target.value })}
                        className="w-full rounded-xl border border-sand-300 bg-sand-50/50 px-4 py-3 text-sm text-forest-900 focus:border-forest-900 focus:bg-white focus:outline-hidden transition-all"
                      >
                        <option value="anxiety">Anxiety &amp; Panic</option>
                        <option value="trauma">Trauma &amp; EMDR</option>
                        <option value="burnout">Burnout &amp; Perfectionism</option>
                        <option value="general">Other / General Exploration</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-ink-700 mb-1.5">
                      Brief Message or Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share a few sentences about what brings you to therapy..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full rounded-xl border border-sand-300 bg-sand-50/50 px-4 py-3 text-sm text-forest-900 placeholder:text-ink-400 focus:border-forest-900 focus:bg-white focus:outline-hidden transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-forest-900 py-4 text-xs font-semibold uppercase tracking-wider text-sand-50 shadow-md hover:bg-clay-600 transition-colors cursor-pointer"
                  >
                    <span>Request 15-Minute Consultation</span>
                    <Send className="h-4 w-4" />
                  </button>

                  <p className="text-[11px] text-center text-ink-500">
                    Your privacy is protected. Communications are strictly confidential under HIPAA standards.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
