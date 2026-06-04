"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { PRODUCTS } from "../data";

const TONE = {
  done: { dot: "bg-accent", text: "text-accent-dark", chip: "bg-accent/10 text-accent-dark", ring: "ring-accent/40" },
  progress: { dot: "bg-brand", text: "text-brand-dark", chip: "bg-brand/10 text-brand-dark", ring: "ring-brand/40" },
  planned: { dot: "bg-electric", text: "text-sky-600", chip: "bg-sky-100 text-sky-700", ring: "ring-sky-400/40" },
};

export default function Products() {
  const [active, setActive] = useState(PRODUCTS[0].id);
  const product = PRODUCTS.find((p) => p.id === active);
  const tone = TONE[product.statusTone];

  return (
    <section id="products" className="relative overflow-hidden bg-navy py-24 text-white sm:py-28">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-brand/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          light
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
                      ? "border-brand/50 bg-white/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.07]"
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
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm sm:p-10 lg:grid-cols-2">
            <div>
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${tone.chip}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
                {product.status}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                {product.name}
              </h3>
              <p className="mt-1 font-display text-sm font-semibold text-brand">
                {product.series}
              </p>
              <p className="mt-5 leading-relaxed text-slate-300">
                {product.blurb}
              </p>
            </div>

            {/* Spec table */}
            <div className={`overflow-hidden rounded-2xl ring-1 ${tone.ring}`}>
              <dl className="divide-y divide-white/5 text-sm">
                {product.specs.map(([k, v]) => (
                  <div
                    key={k}
                    className="grid grid-cols-2 gap-3 bg-white/[0.02] px-5 py-3 transition-colors hover:bg-white/[0.05]"
                  >
                    <dt className="font-medium text-slate-400">{k}</dt>
                    <dd className="text-right font-semibold text-white">{v}</dd>
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
