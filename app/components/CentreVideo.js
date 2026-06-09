import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function CentreVideo() {
  return (
    <section className="bg-[#f3f7fc] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Inside the Centre"
          title="See our work in motion"
          subtitle="A look inside the B.K. Bhattacharyya Centre of Excellence — the people, the bench and the indigenous power-electronics engineering behind every prototype."
        />

        <Reveal className="mt-10 sm:mt-14">
          <div className="group relative mx-auto max-w-4xl">
            {/* Soft gradient glow behind the frame */}
            <div className="absolute -inset-2 rounded-3xl bg-linear-to-br from-brand/30 via-accent/20 to-transparent opacity-70 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-2xl shadow-brand/10 sm:rounded-3xl">
              <video
                controls
                playsInline
                preload="metadata"
                className="aspect-video w-full bg-slate-100 object-contain"
              >
                <source
                  src="/WhatsApp%20Video%202026-06-08%20at%2010.55.20.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
