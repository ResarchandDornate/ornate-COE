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
    <section id="contact" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's build clean energy together"
          subtitle="For collaborations, internships, research partnerships or product enquiries — reach out to the Centre of Excellence."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-navy p-8 text-white">
              <div>
                <h3 className="font-display text-xl font-bold">{CONTACT.org}</h3>
                <p className="mt-1 text-sm font-medium text-brand">
                  B.K. Bhattacharyya Centre of Excellence
                </p>

                <dl className="mt-8 space-y-5 text-sm">
                  <div className="flex gap-3">
                    <span className="mt-0.5 text-brand">📍</span>
                    <div>
                      <dt className="font-semibold text-white">Address</dt>
                      <dd className="text-slate-300">{CONTACT.address}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5 text-brand">✉️</span>
                    <div>
                      <dt className="font-semibold text-white">Email</dt>
                      <dd className="text-slate-300">
                        <a href={`mailto:${CONTACT.email}`} className="hover:text-brand">
                          {CONTACT.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="mt-0.5 text-brand">🇮🇳</span>
                    <div>
                      <dt className="font-semibold text-white">Origin</dt>
                      <dd className="text-slate-300">{CONTACT.madeIn}</dd>
                    </div>
                  </div>
                </dl>
              </div>
              <div className="mt-8 rounded-2xl bg-white/5 p-4 text-xs text-slate-400">
                Indigenous Design · Innovation · Excellence
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8"
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
