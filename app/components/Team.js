import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TEAM } from "../data";

export default function Team() {
  return (
    <section id="team" className="bg-[#fbfaf8] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="The minds behind the Centre"
          subtitle="A multidisciplinary team of power-electronics, hardware, firmware and research engineers driving every product from concept to validation."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={(i % 4) * 80}>
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(20,30,51,0.25)] ring-1 ring-slate-900/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_22px_45px_-15px_rgba(249,107,82,0.45)] hover:ring-brand/30">
                {/* Photo */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Soft blend from photo into the white body */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
                </div>

                {/* Name + role body */}
                <div className="relative px-3 pb-4 pt-2 text-center sm:px-4 sm:pb-5">
                  <h3 className="font-display text-sm font-bold leading-tight text-navy-800 sm:text-base">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-medium leading-snug text-brand-dark sm:text-xs">
                    {member.role}
                  </p>
                  {/* Animated coral→emerald accent line */}
                  <span className="mx-auto mt-2.5 block h-0.5 w-6 rounded-full bg-gradient-to-r from-brand to-accent transition-all duration-300 group-hover:w-12" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
