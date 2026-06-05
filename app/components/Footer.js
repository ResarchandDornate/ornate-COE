import { NAV_LINKS, CONTACT } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-linear-to-b from-navy-700 to-navy text-slate-400">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="leading-tight">
                <p className="font-display font-bold text-white">
                  B.K. Bhattacharyya CoE
                </p>
                <p className="text-xs text-brand">Centre of Excellence</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Centre of Excellence in Power Electronics &amp; Clean Energy
              Systems — indigenous design, innovation and excellence.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Explore
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-brand">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h4>
            <address className="mt-4 space-y-2 text-sm not-italic">
              <p>{CONTACT.address}</p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand">
                  {CONTACT.email}
                </a>
              </p>
              <p className="text-brand">{CONTACT.madeIn} 🇮🇳</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {CONTACT.org}. All rights reserved.
          </p>
          <p>Designed &amp; engineered in India · Indigenous R&amp;D</p>
        </div>
      </div>
    </footer>
  );
}
