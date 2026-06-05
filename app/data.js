// ---------------------------------------------------------------------------
//  Central content for the B.K. Bhattacharyya Centre of Excellence website.
//  Edit text here — the UI components read from these structures.
// ---------------------------------------------------------------------------

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Objectives", href: "/#objectives" },
  { label: "Products", href: "/#products" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Partners", href: "/#partners" },
  { label: "Contact", href: "/#contact" },
];

// Gallery — candid team & lab photos. Files live in /public/team.
export const GALLERY = Array.from({ length: 16 }, (_, i) => ({
  src: `/team/gallery-${String(i + 1).padStart(2, "0")}.jpeg`,
  alt: `B.K. Bhattacharyya Centre of Excellence — team & lab moment ${i + 1}`,
}));

// Hero animated stat counters
export const STATS = [
  { value: 3, suffix: " kW", label: "Inverter Validated", note: "Submitted for BIS" },
  { value: 6, suffix: " kW", label: "Inverter In Dev", note: "HERIC topology" },
  { value: 10, suffix: " kW", label: "Platform Planned", note: "Three-phase" },
  { value: 100, suffix: "%", label: "Indigenous Design", note: "In-house R&D" },
];

export const VISION =
  "To be a globally recognized center for indigenous power electronics innovation — leading India's clean energy transformation through world-class, self-reliant engineering.";

export const MISSION =
  "To research, design, prototype, and commercialize advanced power electronics — inverters, solar pump controllers, and clean energy systems — entirely through indigenous design, bridging academia and industry.";

export const OBJECTIVES = [
  {
    no: "01",
    title: "Indigenous R&D Leadership",
    body: "Design and develop power electronics systems — inverters, controllers, converters — entirely in-house, reducing dependence on imported technology and building sovereign capability.",
  },
  {
    no: "02",
    title: "Scalable Product Development",
    body: "Scale our proven 3 kW inverter design to 6 kW and 10 kW platforms, and commercialize the solar pump controller for agricultural and industrial use.",
  },
  {
    no: "03",
    title: "Clean Energy Democratization",
    body: "Make high-quality solar and off-grid power systems accessible and affordable — targeting remote villages, farms, small enterprises, and underserved communities.",
  },
  {
    no: "04",
    title: "Talent & Skill Building",
    body: "Create a pipeline of power electronics engineers through internships, research fellowships, and hands-on prototyping programmes within the center.",
  },
  {
    no: "05",
    title: "Industry-Academia Collaboration",
    body: "Partner with universities, government bodies, and industry to co-develop standards, file patents, and bring research outcomes to real-world deployment.",
  },
  {
    no: "06",
    title: "Quality & Reliability Standards",
    body: "Build all products to exceed national and international standards — BIS, IEC, IEEE — ensuring every watt delivered is safe, efficient, and long-lasting.",
  },
];

export const PRODUCTS = [
  {
    id: "3kw",
    name: "3 kW Solar Grid-Tied Inverter",
    series: "Swatantra Series",
    status: "Completed & Validated",
    statusTone: "done",
    blurb:
      "Our first fully indigenous grid-tied inverter, designed from concept to a validated, market-ready product. A single-phase, non-isolated unit with integrated MPPT (100 V–500 V) and a 0.99 power factor, submitted to BIS for type-testing under IS 16221.",
    specs: [
      ["Model / Item Code", "OS10011261805002"],
      ["Max. Output Power", "3000 VA (3 kW)"],
      ["Max DC Input Voltage", "500 V (range 150–900 V)"],
      ["MPPT Voltage Range", "100 V – 500 V"],
      ["Nominal Grid Voltage", "L/N/PE, 230 Vac · 50 Hz"],
      ["Power Factor", "0.99 (adjustable)"],
      ["Ingress Protection", "IP65"],
      ["Operating Temperature", "-30 °C to +60 °C"],
      ["Topology", "Non-Isolated · Class I"],
      ["BIS Certification", "IS 16221 (in progress)"],
    ],
  },
  {
    id: "6kw",
    name: "6 kW Single-Phase Grid-Tied Inverter",
    series: "HERIC Topology",
    status: "In Development — Prototype",
    statusTone: "progress",
    blurb:
      "A single-phase grid-tied unit built on the HERIC (Highly Efficient and Reliable Inverter Concept) transformer-less architecture — renowned for very high efficiency and ultra-low leakage current. The DC stage uses a dual-phase interleaved boost converter, 180° phase-shifted to cut input ripple.",
    specs: [
      ["Rated Power", "6,000 W (6 kW)"],
      ["Phase", "Single Phase"],
      ["Nominal Grid", "230 Vac, L/N/PE · 50 Hz"],
      ["Inverter Topology", "HERIC · Transformer-less"],
      ["DC Stage", "Interleaved Boost (dual-phase, 180°)"],
      ["Leakage Current", "Very low (HERIC advantage)"],
      ["MPPT", "Integrated, high-speed"],
      ["Design Origin", "100% Indigenous — Schematic, PCB, Firmware"],
    ],
  },
  {
    id: "10kw",
    name: "10 kW Three-Phase Inverter",
    series: "Next Milestone",
    status: "Design Phase — Planned",
    statusTone: "planned",
    blurb:
      "The next scaling milestone, designed to serve larger commercial and industrial loads with full grid-tie synchronization, anti-islanding protection, and export limiting — targeting both domestic and international certification.",
    specs: [
      ["Output Voltage", "415 V AC Three-Phase"],
      ["Rated Power", "10,000 W (10 kW)"],
      ["Grid Capability", "Grid-Tie with Anti-Islanding"],
      ["Target Certifications", "BIS IS 16221 · IEC 62109"],
      ["Control Platform", "Advanced DSP, real-time monitoring"],
      ["Communication", "Modbus / RS485 / Optional IoT"],
      ["Status", "Architecture defined, design in progress"],
    ],
  },
  {
    id: "pump",
    name: "Solar Pump Controller",
    series: "Battery-less VFD",
    status: "Active Development — Hardware Prototype",
    statusTone: "progress",
    blurb:
      "A dedicated variable-frequency drive for solar-powered water pumps enabling direct PV-to-motor operation without batteries. It performs real-time MPPT and adjusts motor speed in proportion to solar irradiance — engineered for rugged rural deployment.",
    specs: [
      ["DC Input", "150 V – 400 V from PV (no battery)"],
      ["Motor Compatibility", "3 HP – 7.5 HP, 3-Phase PMSM"],
      ["MPPT Algorithm", "Perturb & Observe"],
      ["Output", "Variable Frequency AC"],
      ["Protection", "Dry-Run, Over-Temp, Over-Voltage, Phase Imbalance"],
      ["Communication", "GSM / IoT telemetry (optional)"],
      ["Application", "Irrigation, Rural Water, Industrial Pump"],
      ["Design Origin", "100% Indigenous"],
    ],
  },
];

export const ROADMAP = [
  {
    phase: "Phase 1",
    state: "Completed",
    tone: "done",
    title: "3 kW Inverter — Validated & Submitted for BIS",
    body: "Concept, simulation, schematic, PCB layout, firmware and prototype testing completed in-house. The Swatantra Series 3 kW grid-tied inverter has been submitted to BIS for type-testing under IS 16221.",
  },
  {
    phase: "Phase 2",
    state: "In Progress",
    tone: "progress",
    title: "6 kW Inverter & Solar Pump Controller",
    body: "Scaling the proven architecture to 6 kW. The solar pump controller is in active hardware prototype stage with bench testing underway — both developed concurrently for agricultural and industrial applications.",
  },
  {
    phase: "Phase 3",
    state: "Planned",
    tone: "planned",
    title: "10 kW Platform & Grid-Tie Capability",
    body: "Development of the 10 kW inverter with full grid-tie synchronization, anti-islanding protection and export limiting. Target certifications: BIS IS 16221 and IEC 62109 for domestic and global market readiness.",
  },
  {
    phase: "Phase 4",
    state: "Planned",
    tone: "planned",
    title: "Commercialization, IP Filing & Partnerships",
    body: "Technology transfer to manufacturing partners, patent filing, MoUs with industry stakeholders, and pilot installations across agricultural and commercial sectors.",
  },
];

// Team — photos live in /public. Update `role` for each member as needed.
export const TEAM = [
  { name: "Arindam", role: "Lead — Power Electronics R&D", img: "/Arindam_pic.jpeg" },
  { name: "Arghya", role: "Senior Hardware Design Engineer", img: "/Arghya_pic.jpeg" },
  { name: "Aditya", role: "Power Electronics Engineer", img: "/Aditya_pic.jpeg" },
  { name: "Akash", role: "Embedded Systems Engineer", img: "/Akash_pic.jpeg" },
  { name: "Gourav", role: "Firmware Engineer", img: "/Gourav_pic.jpeg" },
  { name: "Kashyap", role: "PCB Design Engineer", img: "/Kashyap_pic.jpeg" },
  { name: "Krishna", role: "Control Systems Engineer", img: "/Krishna_pic.jpeg" },
  { name: "Pravesh", role: "Test & Validation Engineer", img: "/Pravesh_pic.jpeg" },
  { name: "Akankshi", role: "Research Associate", img: "/Akankshi_pic.jpeg" },
  { name: "Ritika", role: "Research Associate", img: "/Ritika_pic.jpeg" },
  { name: "Tamanna", role: "Design Engineer", img: "/Tamanna_pic.jpeg" },
  { name: "Kanchan", role: "Research Engineer", img: "/Kanchan_pic.jpeg" },
];

export const CONTACT = {
  org: "Ornate Solar",
  address: "A-87, Pocket D, Okhla Phase II, New Delhi 110020",
  email: "info@ornatesolar.com",
  madeIn: "Made in India",
};
