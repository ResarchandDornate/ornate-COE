"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { PATENT_CERTS } from "../data";

function CertCard({ item, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative block w-full text-left"
      title={`${item.number} — ${item.title}`}
    >
      <div className="relative aspect-1000/1414 overflow-hidden rounded-xl border border-amber-200/60 bg-amber-50 shadow-md ring-1 ring-slate-900/5 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:shadow-amber-500/20 group-hover:ring-amber-400/50">
        <Image
          src={item.src}
          alt={`${item.number} — ${item.title}`}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {/* Hover "view" affordance */}
        <div className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-300 group-hover:bg-navy/30 group-hover:opacity-100">
          <span className="rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-navy-800 shadow-lg">
            View certificate
          </span>
        </div>
      </div>
      <p className="mt-2.5 font-mono text-xs font-semibold text-brand-dark">{item.number}</p>
      <p className="mt-0.5 line-clamp-2 text-[12px] leading-snug text-slate-500">{item.title}</p>
    </button>
  );
}

function Modal({ items, index, onClose, onNav }) {
  const item = items[index];

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    },
    [onClose, onNav]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
        </svg>
      </button>

      {/* Prev */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNav(-1); }}
        aria-label="Previous"
        className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 sm:left-5"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onNav(1); }}
        aria-label="Next"
        className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20 sm:right-5"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Content */}
      <div
        className="flex max-h-full w-full max-w-3xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[72vh] w-full">
          <Image
            src={item.src}
            alt={`${item.number} — ${item.title}`}
            fill
            sizes="(max-width: 768px) 90vw, 768px"
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
        <div className="mt-4 max-w-xl text-center">
          <p className="font-mono text-sm font-semibold text-amber-200">{item.number}</p>
          <p className="mt-1 font-display text-base font-bold text-white sm:text-lg">{item.title}</p>
          <p className="mt-1 text-xs text-purple-200">Date of Patent: {item.date}</p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-colors hover:text-accent"
          >
            Open on Google Patents
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PatentBanner() {
  const [active, setActive] = useState(null);

  const nav = useCallback(
    (dir) =>
      setActive((cur) =>
        cur === null ? cur : (cur + dir + PATENT_CERTS.length) % PATENT_CERTS.length
      ),
    []
  );

  return (
    <section className="bg-[#faf8fe] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Patented Legacy"
          title="Granted United States Patents"
          subtitle="The foundational intellectual property of our namesake, Prof. B.K. Bhattacharyya — official USPTO grants in semiconductor packaging, power distribution and high-speed test. Click any certificate to view it."
        />

        <div className="mt-10 grid grid-cols-2 gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {PATENT_CERTS.map((item, i) => (
            <CertCard key={item.src} item={item} onOpen={() => setActive(i)} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/patents"
            className="btn-gradient inline-block rounded-full px-7 py-3.5 text-sm font-semibold shadow-xl shadow-brand/40 transition-transform hover:scale-105"
          >
            Explore all patents
          </a>
        </div>
      </div>

      {active !== null && (
        <Modal
          items={PATENT_CERTS}
          index={active}
          onClose={() => setActive(null)}
          onNav={nav}
        />
      )}
    </section>
  );
}
