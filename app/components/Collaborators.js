import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const COLLABORATORS = [
  { name: "IIT Delhi", img: "/collaborators/iit-delhi.png" },
  { name: "IIT (BHU) Varanasi", img: "/collaborators/iit-bhu.png" },
  { name: "MAIT, Delhi", img: "/collaborators/mait.png" },
  { name: "FITT", img: "/collaborators/fitt.png" },
  { name: "DSIR", img: "/collaborators/dsir.png" },
];

export default function Collaborators() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Academic & Institutional Collaborators"
          title={"Working with India’s Leading Institutions"}
          subtitle="Our in-house R&D, recognized by DSIR, partners with premier institutes to co-develop standards, file patents, mentor talent, and translate research into real-world applications."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {COLLABORATORS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 5) * 80} className="h-full">
              <div className="group flex h-full flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:shadow-xl hover:shadow-blue-500/10 sm:rounded-3xl">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    sizes="80px"
                    className="object-contain opacity-80 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <span className="text-center text-xs font-semibold text-slate-600 sm:text-sm">
                  {c.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
