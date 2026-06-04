import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TEAM } from "../data";

export default function Team() {
  return (
    <section id="team" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="The minds behind the Centre"
          subtitle="A multidisciplinary team of power-electronics, hardware, firmware and research engineers driving every product from concept to validation."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={(i % 4) * 80}>
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-200">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-navy-800">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-brand-dark">
                    {member.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
