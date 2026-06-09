"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const barColor = "bg-navy-800";

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
          ? "bg-[#f3f7fc]/90 backdrop-blur-md shadow-lg shadow-slate-900/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 lg:px-8">
        <a href="/" className="group flex flex-col leading-tight transition-transform group-hover:scale-105">
          <span
            className="font-display text-base font-extrabold uppercase tracking-wider text-brand-dark sm:text-lg"
          >
            CENTRE OF EXCELLENCE
          </span>
          <span
            className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs"
          >
            Research &amp; Innovation
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`nav-underline rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-brand/10 text-brand-dark"
                    : "text-slate-700 hover:bg-slate-100 hover:text-brand-dark"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/contact"
          className="hidden rounded-full bg-linear-to-r from-brand-dark to-brand px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/40 ring-1 ring-white/20 transition-transform hover:scale-105 lg:inline-block"
        >
          Get in touch
        </a>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 transition-transform ${barColor} ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 transition-opacity ${barColor} ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 transition-transform ${barColor} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-[#f3f7fc]/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-112" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`block rounded-lg px-4 py-2.5 text-sm font-medium ${
                  isActive(link.href)
                    ? "bg-brand/10 text-brand-dark"
                    : "text-slate-700 hover:bg-slate-100 hover:text-brand-dark"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-linear-to-r from-brand-dark to-brand px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-brand/30"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
