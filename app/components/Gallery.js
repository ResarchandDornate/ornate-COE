import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { GALLERY } from "../data";

// Split the photos into two rows that scroll in opposite directions.
const mid = Math.ceil(GALLERY.length / 2);
const ROW_ONE = GALLERY.slice(0, mid);
const ROW_TWO = GALLERY.slice(mid);

function Card({ item }) {
  return (
    <div className="group relative aspect-[4/3] w-56 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md sm:w-72 lg:w-80">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/5 transition-colors duration-300 group-hover:ring-brand/50" />
    </div>
  );
}

// One looping row. Children are duplicated so the -50% translate loops seamlessly.
function MarqueeRow({ items, reverse = false }) {
  const animation = reverse ? "animate-marquee-reverse" : "animate-marquee";
  return (
    <div className="marquee-track relative flex overflow-hidden">
      <div className={`marquee-row flex gap-4 pr-4 sm:gap-5 sm:pr-5 ${animation}`}>
        {items.map((item) => (
          <Card key={item.src} item={item} />
        ))}
        {items.map((item) => (
          <Card key={`${item.src}-dup`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-linear-to-b from-white to-[#eef4fb] py-16 sm:py-24"
    >
      {/* Subtle grid + glow backdrop */}
      <div className="absolute inset-0 grid-bg-light opacity-60" />
      <div className="animate-pulse-glow pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand/10 blur-[120px]" />
      <div className="animate-pulse-glow pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Life at the Centre"
          title="Inside the lab — our people at work"
          subtitle="Candid moments from the bench, the lab and the team behind every prototype we build."
        />
      </div>

      {/* Full-bleed scrolling rows with edge fade masks */}
      <div className="relative z-10 mt-10 space-y-4 sm:mt-14 sm:space-y-5 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <MarqueeRow items={ROW_ONE} />
        <MarqueeRow items={ROW_TWO} reverse />
      </div>
    </section>
  );
}
