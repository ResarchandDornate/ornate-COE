// Thin "recognised & validated by" credibility strip.
const ITEMS = [
  "IS 16221 type-testing",
  "Partners: IIT-BHU · FITT · MAIT",
  "DSIR · Ministry of Science & Technology",
];

export default function RecognisedStrip() {
  return (
    <section className="border-y border-slate-200 bg-[#f3f7fc]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-3.5 lg:px-8">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-dark">
          Recognised &amp; validated by
        </span>
        {ITEMS.map((t) => (
          <span key={t} className="text-xs font-medium text-slate-500">
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
