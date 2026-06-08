import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PLATFORM_HARDWARE } from "../data";

function HardwareCard({ item, feature }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl hover:shadow-brand/10 sm:rounded-3xl">
      <div className={`relative overflow-hidden ${feature ? "aspect-16/10" : "aspect-4/3"}`}>
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes={feature ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-base font-bold text-navy-800 sm:text-lg">
          {item.title}
        </h3>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

export default function PlatformHardware() {
  return (
    <section id="hardware" className="bg-[#faf8fe] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Hardware"
          title="From firmware to a board you can hold"
          subtitle="The platform is firmware-defined, but it lives on real, indigenously built hardware. These are the control and power boards behind the first product, on the R&D bench."
        />

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {PLATFORM_HARDWARE.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 3) * 100}
              className={`h-full ${item.feature ? "sm:col-span-2" : ""}`}
            >
              <HardwareCard item={item} feature={item.feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
