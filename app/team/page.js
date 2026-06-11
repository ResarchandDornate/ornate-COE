import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export const metadata = {
  title: "Our Team — B.K. Bhattacharyya Centre of Excellence",
  description:
    "Meet Bidyut Kumar Bhattacharyya, Chief Innovation Officer, and the team driving indigenous power-electronics R&D at the Centre of Excellence.",
};

const CREDENTIALS = [
  "Fellow, IEEE",
  "Inventor of the lowest-density liquid ever found in nature",
  "Packaged the first laptop",
  "Recipient of Intel's highest award (IAA) from Gordon Moore",
];

const SUB_LEADS = [
  {
    name: "Arghyadip Bhattacharya",
    role: "Lead Engineer — Electrical R&D",
    img: "/Arghyadip_pic.png",
    linkedin: "",
    bio: "Electrical engineer and researcher with a PhD in Power Electronics from IIT Bombay and 3+ years of industry experience building indigenous grid-tied solar PV inverters. He specializes in single-phase grid-tied microinverter topologies, SMPS design and STM32-based control. At Ornate Solar he leads the design and development of indigenous 3.3 kW and 6 kW grid-tied inverters — from simulation and PCB design to prototyping and BIS validation.",
  },
  {
    name: "Arindam Debnath",
    role: "Embedded Software Engineer",
    img: "/arindam.png",
    linkedin: "https://www.linkedin.com/in/arindamdebnath-ds",
    bio: "Embedded Software Engineer with over 4 years of industry experience specializing in Grid-Tied Solar Inverters, Digital Control Systems, and Renewable Energy Technologies. Experienced in developing synchronization algorithms, MPPT techniques, harmonic compensation methods, protection systems, and real-time firmware for ARM Cortex-M platforms. Contributed to the successful development and BIS certification submission of an indigenously designed 3.3 kW grid-tied solar inverter. Skilled in power electronics control, signal processing, embedded system optimization, Artificial Intelligence, Machine Learning, and Computer Vision. Holds a Ph.D. in Computer Science, combining expertise in intelligent algorithms and embedded systems to develop innovative, high-performance solutions for next-generation renewable energy and smart energy applications.",
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
    </svg>
  );
}

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Team"
          title="Meet Our Team"
          subtitle="The visionaries and engineers driving the Centre of Excellence forward."
        />

        {/* Leadership bio — image left, details right */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal>
              <div className="card-gradient grid gap-0 overflow-hidden rounded-3xl border border-slate-200 shadow-[0_24px_55px_-25px_rgba(33,17,66,0.40)] md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr]">
                {/* Image */}
                <div className="relative min-h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src="/Gemini_Generated_Image_gnm295gnm295gnm2.png"
                    alt="Bidyut Kumar Bhattacharyya"
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    priority
                    className="object-cover object-top"
                  />
                </div>

                {/* Details */}
                <div className="p-6 sm:p-9">
                  <h2 className="font-display text-2xl font-bold text-brand-dark sm:text-3xl">
                    Professor Bidyut Kumar Bhattacharyya
                  </h2>
                  <span className="mt-3 block h-1 w-12 rounded-full bg-linear-to-r from-brand to-accent" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-500 sm:text-sm">
                    Chief Innovation Officer
                  </p>

                  {/* Credential chips */}
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {CREDENTIALS.map((c) => (
                      <li
                        key={c}
                        className="rounded-full bg-brand/10 px-3 py-1 text-[11px] font-medium text-brand-dark sm:text-xs"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-sm leading-relaxed text-slate-700 sm:text-base">
                    After completing his B.Sc from Presidency College, Calcutta
                    and his M.Sc in Physics from IIT Kanpur, Bidyut finished his
                    PhD from the State University of New York at Buffalo. He was
                    also awarded the IEEE Fellow grade in the year 2020. With
                    over 35 years of experience in R&amp;D, he has joined Ornate
                    Solar to spearhead their venture in inverter development and
                    manufacturing.
                  </p>

                  {/* Social */}
                  <a
                    href="https://www.linkedin.com/in/bidyut1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bidyut Kumar Bhattacharyya on LinkedIn"
                    className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-brand-dark to-brand text-white shadow-md shadow-brand/30 transition-transform hover:scale-110"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Two leads side by side */}
            <div className="mt-6 grid gap-6 sm:mt-8 md:grid-cols-2">
              {SUB_LEADS.map((person, i) => (
                <Reveal key={person.name} delay={i * 120}>
                  <div className="card-gradient grid h-full grid-cols-1 overflow-hidden rounded-2xl border border-slate-200 shadow-[0_20px_45px_-22px_rgba(33,17,66,0.38)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_28px_55px_-22px_rgba(194,65,12,0.45)] sm:grid-cols-[210px_1fr]">
                    {/* Image */}
                    <div className="relative h-64 w-full overflow-hidden bg-slate-100 sm:h-full sm:min-h-75">
                      <Image
                        src={person.img}
                        alt={person.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 210px"
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col p-5">
                      <h3 className="font-display text-base font-bold text-brand-dark sm:text-lg">
                        {person.name}
                      </h3>
                      <span className="mt-2 block h-1 w-10 rounded-full bg-linear-to-r from-brand to-accent" />
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500 sm:text-[11px]">
                        {person.role}
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-slate-700">
                        {person.bio}
                      </p>
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${person.name} on LinkedIn`}
                          className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 text-brand-dark transition-all hover:scale-110 hover:bg-brand hover:text-white"
                        >
                          <LinkedInIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Full team grid */}
        <Team />

        {/* Life at the Centre — candid lab & team photos */}
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
