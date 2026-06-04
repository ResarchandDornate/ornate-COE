"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { CONTACT } from "../data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend wired yet — this just shows a confirmation. Connect to an
  // API route, email service or form provider when ready.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-[#fbfaf8] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's build clean energy together"
          subtitle="For collaborations, internships, research partnerships or product enquiries — reach out to the Centre of Excellence."
        />

        <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-gradient-to-br from-[#fff5f1] to-[#eefaf4] p-6 text-navy-800 shadow-sm sm:rounded-3xl sm:p-8">
              <div>
                <h3 className="font-display text-lg font-bold sm:text-xl">{CONTACT.org}</h3>
                <p className="mt-1 text-xs font-medium text-brand-dark sm:text-sm">
                  B.K. Bhattacharyya Centre of Excellence
                </p>

                <dl className="mt-8 space-y-5 text-sm">
                  <div className="flex gap-3">
                    <span className="mt-0.5">📍</span>
                    <div>
                      <dt className="font-semibold text-navy-800">Address</dt>
                      <dd className="text-slate-600">{CONTACT.address}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5">✉️</span>
                    <div>
                      <dt className="font-semibold text-navy-800">Email</dt>
                      <dd className="text-slate-600">
                        <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-dark">
                          {CONTACT.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5">🇮🇳</span>
                    <div>
                      <dt className="font-semibold text-navy-800">Origin</dt>
                      <dd className="text-slate-600">{CONTACT.madeIn}</dd>
                    </div>
                  </div>
                </dl>
              </div>
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-4 text-xs text-slate-500">
                Indigenous Design · Innovation · Excellence
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:rounded-3xl sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                <Field label="Organization" name="org" placeholder="Company / Institute" />
                <Field label="Phone" name="phone" placeholder="+91 ..." required={false} />
              </div>
              <div className="mt-5">
                <label className="mb-1.5 block text-sm font-semibold text-navy-800">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="How can we collaborate?"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-800 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-brand/20 transition-transform hover:scale-[1.02] sm:w-auto"
              >
                {sent ? "✓ Message received — thank you!" : "Send message"}
              </button>
              {sent && (
                <p className="mt-3 text-sm text-accent-dark">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required = true }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-navy-800">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-800 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
    </div>
  );
}
