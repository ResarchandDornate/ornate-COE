import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { PLATFORM_HARDWARE } from "../data";

function HardwareCard({ item, feature }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md ring-1 ring-slate-900/5 transition-all hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-2xl hover:shadow-brand/15 sm:rounded-3xl">
      <div className={`relative overflow-hidden ${feature ? "aspect-16/9" : "aspect-4/3"}`}>
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes={feature ? "(max-width: 1024px) 100vw, 1100px" : "(max-width: 640px) 100vw, 50vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
        />
        {/* Gradient veil + caption overlaid on the image for a bolder look */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy/85 via-navy/15 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-7">
          <h3 className={`font-display font-bold drop-shadow ${feature ? "text-xl sm:text-3xl" : "text-lg sm:text-xl"}`}>
            {item.title}
          </h3>
          <p className={`mt-2 max-w-2xl leading-relaxed text-blue-100/90 ${feature ? "text-sm sm:text-base" : "text-[13px] sm:text-sm"}`}>
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PlatformHardware() {
  return (
    <section id="hardware" className="bg-[#f3f7fc] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="The Hardware"
          title="From firmware to a board you can hold"
          subtitle="The platform is firmware-defined, but it lives on real, indigenously built hardware. These are the control and power boards behind the first product, on the R&D bench."
        />

        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2 sm:gap-7">
          {PLATFORM_HARDWARE.map((item, i) => (
            <Reveal
              key={item.src}
              delay={(i % 2) * 120}
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
