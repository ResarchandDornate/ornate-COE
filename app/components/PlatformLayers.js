import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PLATFORM_LAYERS } from "../data";

const TRAVEL_TONE = {
  Yes: "bg-accent/15 text-accent-dark ring-accent/25",
  Mostly: "bg-brand/10 text-brand-dark ring-brand/20",
  No: "bg-slate-100 text-slate-500 ring-slate-200",
};

function LayerRow({ layer }) {
  const software = layer.ip === "high";
  return (
    <div className="group flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10 sm:flex-row sm:items-center sm:gap-5 sm:p-5">
      {/* Number + name + does */}
      <div className="flex items-start gap-4 sm:flex-1">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-sm font-bold ${
            software ? "bg-brand/10 text-brand ring-1 ring-brand/20" : "bg-slate-100 text-slate-400"
          }`}
        >
          {layer.n}
        </span>
        <div>
          <h3 className="font-display text-sm font-bold text-navy-800 sm:text-base">{layer.name}</h3>
          <p className="mt-0.5 text-[12px] leading-relaxed text-slate-500 sm:text-[13px]">{layer.does}</p>
        </div>
      </div>

      {/* Badges */}
      <div className="flex shrink-0 items-center gap-2 pl-14 sm:w-72 sm:justify-end sm:pl-0">
        <span className="flex flex-col items-start sm:items-end">
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ring-1 ${TRAVEL_TONE[layer.travels]}`}>
            {layer.travels === "No" ? "Rebuilt" : `Travels · ${layer.travels}`}
          </span>
          <span className="mt-1 text-[10px] text-slate-400">{layer.note}</span>
        </span>
        <span
          className={`rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${
            software ? "bg-brand text-white" : "bg-slate-200 text-slate-600"
          }`}
          title={software ? "High IP — indigenous" : "Low IP — commodity hardware"}
        >
          {software ? "IP · High" : "IP · Low"}
        </span>
      </div>
    </div>
  );
}

export default function PlatformLayers() {
  return (
    <section className="bg-slate-50 py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Stack"
          title="Seven layers — five travel, two don't"
          subtitle={PLATFORM_LAYERS.intro}
        />

        {/* Legend */}
        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:mt-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-600">
            <span className="h-3 w-3 rounded bg-linear-to-br from-brand to-accent" /> Software — reusable IP (layers 1–5)
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-600">
            <span className="h-3 w-3 rounded bg-slate-300" /> Hardware — rebuilt per product (layers 6–7)
          </span>
        </Reveal>

        <div className="mt-6 space-y-3 sm:mt-8">
          {PLATFORM_LAYERS.layers.map((l, i) => (
            <Reveal key={l.n} delay={Math.min(i, 5) * 60}>
              <LayerRow layer={l} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-6 sm:mt-8">
          <div className="flex items-start gap-3 rounded-2xl border border-brand/20 bg-brand/5 p-5 sm:p-6">
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-dark">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-[13px] font-medium leading-relaxed text-navy-800 sm:text-sm">{PLATFORM_LAYERS.note}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
