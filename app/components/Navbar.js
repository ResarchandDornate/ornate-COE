"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "../data";

export default function Navbar({ overDark = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Over a dark hero (e.g. the Centre of Excellence banner) the navbar sits on
  // the image while at the top — use light text until the user scrolls.
  const atTopLight = overDark && !scrolled;
  const barColor = atTopLight ? "bg-white" : "bg-navy-800";

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
        <a href="/about" className="group flex items-center gap-2">
          {/* Emblem — a gradient tile with a power / network "hub" mark */}
          <span className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-linear-to-br from-brand-dark via-brand to-accent shadow-md shadow-brand/40 ring-1 ring-white/25 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 sm:h-8 sm:w-8">
            {/* sheen */}
            <span className="pointer-events-none absolute -inset-1 bg-linear-to-tr from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <svg viewBox="0 0 24 24" className="relative h-4 w-4 text-white sm:h-4.5 sm:w-4.5" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none">
                <path d="M12 11.2V4.4" />
                <path d="M12 11.2 18 15" />
                <path d="M12 11.2 6 15" />
              </g>
              <circle cx="12" cy="11.6" r="2.4" fill="currentColor" />
              <circle cx="12" cy="4.4" r="1.7" fill="currentColor" />
              <circle cx="18" cy="15" r="1.7" fill="currentColor" />
              <circle cx="6" cy="15" r="1.7" fill="currentColor" />
            </svg>
          </span>

          {/* Wordmark */}
          <span className="flex flex-col leading-none">
            <span className="flex items-baseline gap-1">
              <span
                className={`font-display text-xs font-extrabold uppercase tracking-[0.12em] sm:text-sm ${
                  atTopLight ? "text-white" : "text-brand-dark"
                }`}
              >
                CENTRE OF
              </span>
              <span className="text-gradient font-display text-xs font-extrabold uppercase tracking-[0.12em] sm:text-sm">
                EXCELLENCE
              </span>
            </span>
            <span
              className={`mt-0.5 text-[7px] font-semibold uppercase tracking-[0.3em] sm:text-[8px] ${
                atTopLight ? "text-slate-300" : "text-slate-500"
              }`}
            >
              Research &amp; Innovation
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) =>
            link.href === "/patents" ? (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`group ml-1 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all hover:scale-105 ${
                    atTopLight
                      ? "bg-white/10 text-white ring-1 ring-white/40 backdrop-blur-md hover:bg-white/20"
                      : "bg-brand/5 text-brand-dark ring-1 ring-brand/40 hover:bg-brand/10"
                  }`}
                >
                  <PatentIcon />
                  {link.label}
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`nav-underline rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? atTopLight
                        ? "bg-white/15 text-white ring-1 ring-white/20"
                        : "bg-brand/10 text-brand-dark"
                      : atTopLight
                      ? "text-slate-100 hover:bg-white/10 hover:text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-brand-dark"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          )}
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
          {NAV_LINKS.map((link) =>
            link.href === "/patents" ? (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="flex items-center gap-2 rounded-lg bg-brand/5 px-4 py-2.5 text-sm font-semibold text-brand-dark ring-1 ring-brand/40"
                >
                  <PatentIcon />
                  {link.label}
                </a>
              </li>
            ) : (
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
            )
          )}
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

// Small award / seal mark for the Patents nav button.
function PatentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 transition-transform group-hover:rotate-12"
      aria-hidden="true"
    >
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" />
    </svg>
  );
}
