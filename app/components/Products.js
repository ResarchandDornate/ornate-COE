"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { PRODUCTS } from "../data";

const TONE = {
  done: { dot: "bg-accent", text: "text-accent-dark", chip: "bg-accent/10 text-accent-dark", ring: "ring-accent/40" },
  progress: { dot: "bg-brand", text: "text-brand-dark", chip: "bg-brand/10 text-brand-dark", ring: "ring-brand/40" },
  planned: { dot: "bg-electric", text: "text-blue-600", chip: "bg-blue-100 text-blue-700", ring: "ring-blue-400/40" },
};

export default function Products() {
  const [active, setActive] = useState(PRODUCTS[0].id);
  const product = PRODUCTS.find((p) => p.id === active);
  const tone = TONE[product.statusTone];

  return (
    <section id="products" className="relative overflow-hidden bg-[#eef4fb] py-16 text-navy-800 sm:py-28">
      <div className="absolute inset-0 grid-bg-light opacity-60" />
      <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-brand/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Products & Technology"
          title="Engineered in-house, end to end"
          subtitle="Every product below is designed, simulated, prototyped and tested entirely in-house through indigenous engineering effort."
        />

        {/* Tabs */}
        <Reveal className="mt-12">
          <div className="flex flex-wrap justify-center gap-2">
            {PRODUCTS.map((p) => {
              const t = TONE[p.statusTone];
              const isActive = p.id === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-brand/50 bg-white text-navy-800 shadow-sm"
                      : "border-slate-200 bg-white/60 text-slate-600 hover:bg-white"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${t.dot}`} />
                  {p.series}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active product card */}
        <Reveal key={product.id} className="mt-10">
          <div className="card-gradient grid gap-6 rounded-2xl border border-slate-200 p-5 shadow-sm sm:gap-8 sm:rounded-3xl sm:p-10 lg:grid-cols-2">
            <div>
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-semibold sm:text-xs ${tone.chip}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
                {product.status}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-navy-800 sm:mt-4 sm:text-3xl">
                {product.name}
              </h3>
              <p className="mt-1 font-display text-xs font-semibold text-brand-dark sm:text-sm">
                {product.series}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-base">
                {product.blurb}
              </p>
            </div>

            {/* Spec table */}
            <div className={`overflow-hidden rounded-2xl ring-1 ${tone.ring}`}>
              <dl className="divide-y divide-slate-200 text-xs sm:text-sm">
                {product.specs.map(([k, v]) => (
                  <div
                    key={k}
                    className="grid grid-cols-2 gap-3 bg-slate-50 px-4 py-2.5 transition-colors hover:bg-slate-100 sm:px-5 sm:py-3"
                  >
                    <dt className="font-medium text-slate-500">{k}</dt>
                    <dd className="text-right font-semibold text-navy-800">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
