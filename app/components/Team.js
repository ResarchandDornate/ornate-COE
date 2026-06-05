import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TEAM } from "../data";

export default function Team() {
  return (
    <section id="team" className="bg-[#faf8fe] py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="The minds behind the Centre"
          subtitle="A multidisciplinary team of power-electronics, hardware, firmware and research engineers driving every product from concept to validation."
        />

        <div className="mt-10 grid grid-cols-2 gap-5 sm:mt-14 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={(i % 4) * 80} className="h-full">
              <div className="group flex h-full flex-col items-center rounded-2xl border-2 border-slate-100 bg-white px-4 py-7 text-center shadow-[0_18px_40px_-18px_rgba(33,17,66,0.30)] transition-all duration-300 hover:-translate-y-2 hover:border-brand hover:shadow-[0_28px_55px_-20px_rgba(124,58,237,0.50)]">
                {/* Circular avatar */}
                <div className="relative h-28 w-28 overflow-hidden rounded-full bg-slate-100 ring-4 ring-slate-100 transition-all duration-300 group-hover:ring-brand/25 sm:h-32 sm:w-32">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 112px, 128px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Name + role */}
                <h3 className="mt-5 font-display text-sm font-bold leading-tight text-brand-dark sm:text-base">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-xs font-medium leading-snug text-slate-800 sm:text-[13px]">
                  {member.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
