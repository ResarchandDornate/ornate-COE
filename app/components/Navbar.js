"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fbfaf8]/90 backdrop-blur-md shadow-lg shadow-slate-900/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <Image
            src="/ornateLogo.png"
            alt="Ornate Solar"
            width={132}
            height={48}
            priority
            className="h-7 w-auto transition-transform group-hover:scale-105 sm:h-9"
          />
          <span className="hidden flex-col border-l border-slate-300 pl-3 leading-tight sm:flex">
            <span className="font-display text-sm font-bold tracking-wide text-navy-800">
              B.K. Bhattacharyya CoE
            </span>
            <span className="text-[11px] font-medium text-brand-dark">
              Centre of Excellence
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-navy shadow-lg shadow-brand/30 transition-transform hover:scale-105 lg:inline-block"
        >
          Get in touch
        </a>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-800 lg:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-navy-800 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-navy-800 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-navy-800 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-[#fbfaf8]/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-112" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-brand-dark"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-brand px-4 py-2.5 text-center text-sm font-semibold text-navy"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
