import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#0a0f1e] text-slate-100"
    >
      {/* Full-bleed background image — circuit board / power electronics */}
      <Image
        src="/Gemini_Generated_Image_j106udj106udj106.png"
        alt="Power-electronics circuit board with a glowing control chip"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/80 via-black/65 to-[#0a0f1e]/92" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-28 text-center sm:py-32 lg:px-8">
        {/* Live status badge */}
        <div
          className="animate-rise mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-200 shadow-sm backdrop-blur-md"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-accent" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          DSIR-Recognised In-House R&amp;D · Made in India
        </div>

        <h1
          className="animate-rise mx-auto font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "80ms" }}
        >
          <span className="block sm:whitespace-nowrap">A Smart Power Conversion</span>
          <span className="block">Technology Platform</span>
        </h1>

        <p
          className="animate-rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white sm:text-lg"
          style={{ animationDelay: "180ms" }}
        >
          We build and validate an indigenous power-conversion platform — owning the embedded
          control intelligence at the heart of solar, energy storage, EV charging and
          next-generation grid infrastructure.
        </p>

        <div
          className="animate-rise mt-9 flex flex-wrap justify-center gap-4"
          style={{ animationDelay: "340ms" }}
        >
          <a
            href="/platform"
            className="btn-gradient rounded-full px-7 py-3.5 text-sm font-semibold shadow-xl shadow-brand/40 transition-transform hover:scale-105"
          >
            Explore the platform
          </a>
          <a
            href="/capability"
            className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/10"
          >
            What we can build
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
