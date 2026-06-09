import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import EnergyConversion from "../components/EnergyConversion";
import CapabilityInnovation from "../components/CapabilityInnovation";
import PlatformClasses from "../components/PlatformClasses";
import PlatformNational from "../components/PlatformNational";
import PlatformPrograms from "../components/PlatformPrograms";

export const metadata = {
  title: "Capability — B.K. Bhattacharyya Centre of Excellence",
  description:
    "What the indigenous power-conversion platform can build — EV DC fast charging, battery energy storage (BESS), microgrids, solid-state transformers and solar at every scale — all from one reusable control core.",
};

const EV_REUSED = [
  "Grid synchronisation (PLL / dq control)",
  "The inner current-control loops",
  "Protection and fault handling",
  "Communications framework",
];
const EV_ADDED = [
  "An isolated DC/DC output stage (CLLC / DAB) to match the car battery safely",
  "Charging standards — CCS2 / Bharat DC and OCPP",
  "Optional V2G, so the car can feed power back to the grid",
];

export default function CapabilityPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Capability"
          title="What the platform can build"
          subtitle="The same indigenous control core re-targets across the country's highest-priority clean-energy hardware — EV fast charging, battery storage, microgrids, solid-state transformers and solar at every scale."
        />

        {/* What power conversion does */}
        <EnergyConversion />

        {/* EV spotlight — how a charger is built on the platform */}
        <section className="bg-slate-50 py-16 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow="Spotlight · EV DC Fast Charging"
              title="How an EV fast charger is built on the platform"
              subtitle="An EV DC fast charger is, at its front end, our solar inverter run in reverse — it takes AC from the grid and makes clean DC for the car. Most of the control core is reused; only the output stage and charging standards are added."
            />

            <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-2">
              <Reveal className="h-full">
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:rounded-3xl sm:p-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    Reused from the platform
                  </span>
                  <ul className="mt-5 space-y-3">
                    {EV_REUSED.map((t) => (
                      <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={120} className="h-full">
                <div className="h-full rounded-2xl border border-brand/20 bg-linear-to-br from-white via-[#f7fafe] to-[#e8f1fb] p-6 shadow-sm sm:rounded-3xl sm:p-8">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-dark">
                    Added for EV charging
                  </span>
                  <ul className="mt-5 space-y-3">
                    {EV_ADDED.map((t) => (
                      <li key={t} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-6 sm:mt-8">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center text-sm text-slate-600 shadow-sm sm:p-6">
                <strong className="text-navy-800">National relevance:</strong> PM E-DRIVE targets 72,300
                charging stations — a segment that is heavily import-dependent today.
              </div>
            </Reveal>
          </div>
        </section>

        {/* The five product classes */}
        <PlatformClasses />

        {/* Innovation — taglines + generated concept graphic */}
        <CapabilityInnovation />

        {/* Why it matters nationally */}
        <PlatformNational />
        <PlatformPrograms />
      </main>
      <Footer />
    </>
  );
}
