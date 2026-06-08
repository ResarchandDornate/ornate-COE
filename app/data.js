// ---------------------------------------------------------------------------
//  Central content for the B.K. Bhattacharyya Centre of Excellence website.
//  Edit text here — the UI components read from these structures.
// ---------------------------------------------------------------------------

export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Platform", href: "/platform" },
  { label: "Achievements", href: "/achievements" },
  { label: "Patents", href: "/patents" },
  { label: "Roadmap", href: "/#roadmap" },
  { label: "Team", href: "/team" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Partners", href: "/#partners" },
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
// Display order is intentional (renders left-to-right, top-to-bottom).
export const TEAM = [
  {
    name: "Dr. Ritika Agarwal",
    role: "Senior Engineer — EE Wing",
    img: "/Ritika_pic.jpeg",
    bio: "Senior engineer with a PhD in Power Electronics from Thapar. Designs 3 kW and 6 kW grid-tied solar inverters and isolated SMPS, with research in multilevel inverters and EV charging.",
  },
  {
    name: "Dr. Kanchan Bala Rai",
    role: "Senior Engineer — Power & Electronics",
    img: "/Kanchan_pic.jpeg",
    bio: "Doctoral power electronics engineer specializing in control-logic design and embedded programming, validating solar power-electronics systems with MATLAB, dSPACE and OPAL-RT.",
  },
  {
    name: "Akankshi Trivedi",
    role: "Power Electronics Engineer",
    img: "/akanshi.png",
    bio: "PhD candidate at IIT Delhi designing transformer-less single-phase PV grid-tied inverters with DQ cascaded control and SiC-based high-efficiency stages.",
  },
  {
    name: "Pravesh Kumar",
    role: "Inverter Testing Engineer",
    img: "/pravesh.png",
    bio: "Inverter testing engineer handling soldering and circuit assembly, sensor-circuit test and calibration, and hybrid-inverter performance testing, alongside R&D BOM management.",
  },
  {
    name: "Gaurav Kumar",
    role: "Embedded Developer",
    img: "/gourav.png",
    bio: "Builds DQ control-based grid-tied inverter firmware on STM32, with experience across IoT and BLE products using Zephyr RTOS.",
  },
  {
    name: "Krishna Gullapalli",
    role: "Embedded Systems Developer",
    img: "/Krishna_pic.jpeg",
    bio: "Embedded systems developer building STM32-based inverter communication and monitoring boards with Wi-Fi and LCD, implementing UART, SPI, I2C, Modbus, MQTT and WebSocket protocols.",
  },
  {
    name: "Akash Yadav",
    role: "R&D Engineer",
    img: "/akash.png",
    bio: "Electrical engineer working on boost converters, component characterization and inverter testing in the R&D lab.",
  },
  {
    name: "Kashyap Masiwal",
    role: "Industrial Designer & Project Lead",
    img: "/Kashyap_pic.jpeg",
    bio: "Industrial designer shaping IP-rated enclosures and CMF for inverter systems; led the design of a solar panel cleaning robot and residential solar carports.",
  },
  {
    name: "Ankit Kumar",
    role: "Hardware Test & BOM Engineer",
    img: "/ankit.jpeg",
    bio: "Electrical engineer handling functional testing and fault diagnosis of hardware circuit boards, BOM maintenance and vendor coordination for the grid-tied solar inverter development pipeline.",
  },
  {
    name: "Aditya Kumar Agarhari",
    role: "Power Electronics & PCB Engineer",
    img: "/Aditya_pic.jpeg",
    bio: "Power electronics and PCB design engineer skilled in Altium and KiCad. Works on BOM development, motor-driver and voltage-regulator circuits, and R&D patent documentation for power-conversion systems.",
  },
  {
    name: "Tamnna Ameri",
    role: "Firmware Developer",
    img: "/Tamanna_pic.jpeg",
    bio: "Firmware developer writing and debugging Embedded C/C++ for microcontroller-based systems, interfacing peripherals such as GPIO, ADC, UART and I2C and validating firmware on hardware.",
  },
];

export const CONTACT = {
  org: "Ornate Solar",
  address: "A-87, Pocket D, Okhla Phase II, New Delhi 110020",
  email: "info@ornatesolar.com",
  madeIn: "Made in India",
};

// ---------------------------------------------------------------------------
//  Platform page — the indigenous power-conversion technology platform story.
// ---------------------------------------------------------------------------

// The one-line thesis that anchors the whole page.
export const PLATFORM_THESIS = {
  line1: "The product is the prototype.",
  line2: "The platform is the asset.",
  caption: "The thesis, in one line.",
};

// What the platform is — reusable control architecture + its building blocks.
export const PLATFORM_OVERVIEW = {
  heading: "A reusable control architecture",
  intro:
    "Built and validated in India over three years — the firmware-defined control stack inside grid-interactive power electronics. The first product is a 3 kW grid-tied solar inverter; the architecture beneath it is designed to travel.",
  points: [
    "Firmware-defined — runs on MCU / DSP / DSC-class devices",
    "Built and validated in India over three years",
    "Designed for portability across product classes",
    "Architecturally extensible to grid-forming behaviour",
    "Continually deepening through field deployment",
  ],
  elements: [
    ["Grid synchronisation", "PLL / SOGI / dq-PLL / DDSRF"],
    ["MPPT logic", "For solar PV applications"],
    ["DC-link control", "Stable across operating points"],
    ["Inner current loop", "PI / PR, dq vector control"],
    ["Outer P/Q control", "Voltage, droop, power references"],
    ["PWM logic", "SVPWM, dead-time, modulation"],
    ["Anti-islanding", "Grid-code compliant"],
    ["Protection", "Fault detection, ride-through"],
    ["Communications", "Modbus, CAN, OCPP-ready"],
    ["Application layer", "Product-specific operating modes"],
  ],
};

// Why we build a platform rather than a single product line.
export const PLATFORM_WHY = [
  {
    no: "01",
    title: "IP density lives in the control stack",
    body: "Roughly 70–80% of the development effort in a power conversion product sits in the firmware — grid synchronisation, current control, protection, application logic. The hardware power stage is far more commoditised. A platform invests scarce engineering capacity in the layer that creates the most defensible value.",
  },
  {
    no: "02",
    title: "Indian deployment needs breadth, not one SKU",
    body: "India's energy transition needs power conversion across solar inverters at every rating, BESS, EV charging, microgrid converters, and emerging solid state transformers. Building separate products for each is wasteful — building one platform that re-targets across all of them is efficient.",
  },
  {
    no: "03",
    title: "A platform deepens with each product",
    body: "Every product built on the platform stress-tests its control architecture under new conditions, and each cycle hardens it further. This compounding is impossible with a single-product strategy.",
  },
];

// Achievements — milestone cards (image + description) for the /achievements page.
// `placeholder: true` renders a branded block instead of a photo (drop in a real
// image later by setting `img` and removing `placeholder`).
export const ACHIEVEMENTS = [
  {
    title: "3 kW grid-tied solar inverter — validated",
    tag: "Completed",
    tone: "done",
    img: "/hardware-module-finished.jpeg",
    desc: "Our first fully indigenous grid-tied inverter — concept to validated, market-ready product. Single-phase, non-isolated, with integrated MPPT (100–500 V) and a 0.99 power factor, submitted to BIS for type-testing under IS 16221.",
  },
  {
    title: "DSIR-recognised in-house R&D unit",
    tag: "Government recognition",
    tone: "done",
    placeholder: true,
    placeholderLabel: "DSIR recognition",
    desc: "Recognised by the Department of Scientific and Industrial Research, Ministry of Science and Technology — the only national scheme that benchmarks industrial R&D in India, and a prerequisite for the wider government R&D ecosystem.",
  },
  {
    title: "6 kW HERIC inverter — prototype",
    tag: "In development",
    tone: "progress",
    img: "/hardware-board-powered.jpeg",
    desc: "A single-phase transformer-less unit on the HERIC architecture — very high efficiency and ultra-low leakage current, with a dual-phase interleaved boost DC stage. Schematic, PCB and firmware are 100% indigenous.",
  },
  {
    title: "Indigenous control platform",
    tag: "Reusable IP",
    tone: "done",
    img: "/hardware-control-pcb-macro.jpeg",
    desc: "A firmware-defined control stack — grid synchronisation, MPPT, inner and outer control loops, PWM, protection and communications — built and validated in India and designed to travel across product classes.",
  },
  {
    title: "Solar pump controller — battery-less VFD",
    tag: "Active development",
    tone: "progress",
    placeholder: true,
    placeholderLabel: "Solar pump controller",
    desc: "A variable-frequency drive for solar water pumps enabling direct PV-to-motor operation without batteries — real-time MPPT with motor speed tracking solar irradiance, engineered for rugged rural deployment.",
  },
  {
    title: "Control boards in build",
    tag: "Manufacturing readiness",
    tone: "progress",
    img: "/hardware-control-boards-batch.jpeg",
    desc: "Reusable control daughterboards moving from prototype toward repeatable build — the hardware backbone every product on the platform shares.",
  },
];

// Inverter hardware — R&D bench photos of the first product and its control boards.
// `feature: true` renders large (lead image). Files live in /public.
export const PLATFORM_HARDWARE = [
  {
    src: "/hardware-module-finished.jpeg",
    feature: true,
    title: "The 3 kW inverter module",
    desc: "The complete control and power board on its anodised-aluminium heatsink enclosure — the first product instantiation of the platform, designed, built and validated in-house.",
  },
  {
    src: "/hardware-board-powered.jpeg",
    title: "Power board under test",
    desc: "The full power stage powered up on the bench — DC-link capacitor bank, magnetics, relays and protection — with status LEDs live during a test run.",
  },
  {
    src: "/hardware-control-board.jpeg",
    title: "STM32 control board, live",
    desc: "Close-up of the firmware-defined control card running on an STM32 device, with the EMI-filter stage, common-mode choke and surge protection alongside.",
  },
  {
    src: "/hardware-control-pcb-macro.jpeg",
    title: "Control PCB, up close",
    desc: "A densely populated surface-mount control board — gate drivers, sensing and labelled test points carrying the ORNATE silkscreen. This is where the indigenous IP lives.",
  },
  {
    src: "/hardware-board-chassis.jpeg",
    title: "Integrated in the chassis",
    desc: "Top-down view of the assembled board seated in its aluminium frame and wired for bench characterisation under real grid conditions.",
  },
  {
    src: "/hardware-control-boards-batch.jpeg",
    title: "Control boards in build",
    desc: "A batch of control daughterboards on the ESD mat — the reusable control hardware that travels across products built on the platform.",
  },
];

// The five product classes the platform architecturally supports.
export const PLATFORM_CLASSES = [
  {
    name: "Solar inverters — all scales",
    why: "Residential to utility scale. The first product anchors residential; the same control core extends through C&I and large string with engineering uplift.",
    relevance: "500 GW non-fossil target by 2030; solar PV core to the transition.",
  },
  {
    name: "BESS power conversion systems",
    why: "Bi-directional inverter-class equipment — the same control core extended with battery interface and SoC-aware logic.",
    relevance: "41.65 GW / 208 GWh by 2030 (CEA); ₹9,160 cr in VGF schemes.",
  },
  {
    name: "EV DC fast charging",
    why: "The front-end AC/DC stage is structurally identical to a bi-directional inverter — PLL, dq control and grid sync are all reused.",
    relevance: "PM E-DRIVE; 72,300 stations targeted. Heavy import dependence today.",
  },
  {
    name: "Microgrid & hybrid inverters",
    why: "Solar inverters with grid-forming control, a battery interface, and seamless transfer between grid-tied and islanded operation.",
    relevance: "Rural electrification, defence, telecom backup, C&I energy management.",
  },
  {
    name: "Solid state transformers",
    why: "A power-electronics replacement for conventional transformers. Shares the bi-directional inverter core; needs significant extension.",
    relevance: "Emerging category for grid modernisation; significant strategic value.",
  },
];

// ---------------------------------------------------------------------------
//  Patents — the granted IP of Prof. Bidyut K. Bhattacharyya.
//  Sourced from Google Patents / Justia. Each card links to the full patent.
//  Ordered newest first by grant (or publication) year.
// ---------------------------------------------------------------------------
export const PATENTS_INTRO =
  "Prof. Bidyut K. Bhattacharyya — the Centre's namesake — holds a body of foundational patents in semiconductor packaging, power distribution and high-speed test, the majority assigned to Intel Corporation. Each card opens the full patent.";

// Patent certificate images (rendered from the official USPTO grant PDFs) —
// used by the scrolling banner on the home page. Files live in /public/patents.
export const PATENT_CERTS = [
  { src: "/patents/cert-01.png", number: "US 4,771,018", title: "Process of attaching a die to a substrate using gold/silicon seed", date: "Sep 13, 1988", url: "https://patents.google.com/patent/US4771018A/en" },
  { src: "/patents/cert-02.png", number: "US 4,810,671", title: "Process for bonding die to substrate using a gold/silicon seed", date: "Mar 7, 1989", url: "https://patents.google.com/patent/US4810671A/en" },
  { src: "/patents/cert-03.png", number: "US 4,835,120", title: "Method of making a multilayer molded plastic IC package", date: "Mar 30, 1989", url: "https://patents.google.com/patent/US4835120A/en" },
  { src: "/patents/cert-04.png", number: "US 4,891,687", title: "Multi-layer molded plastic IC package", date: "Jan 2, 1990", url: "https://patents.google.com/patent/US4891687A/en" },
  { src: "/patents/cert-05.png", number: "US 5,060,049", title: "Multiple resistivity wiring apparatus", date: "Oct 22, 1991", url: "https://patents.google.com/patent/US5060049A/en" },
  { src: "/patents/cert-06.png", number: "US 5,099,388", title: "Alumina multilayer wiring substrate provided with high dielectric material layer", date: "Mar 24, 1992", url: "https://patents.google.com/patent/US5099388A/en" },
  { src: "/patents/cert-07.png", number: "US 5,099,388 B1", title: "Alumina multilayer wiring substrate (reexamination certificate)", date: "Apr 8, 1997", url: "https://patents.google.com/patent/US5099388A/en" },
  { src: "/patents/cert-08.png", number: "US 5,307,012", title: "Test substation for testing semi-conductor packages", date: "Apr 26, 1994", url: "https://patents.google.com/patent/US5307012A/en" },
  { src: "/patents/cert-09.png", number: "US 5,345,363", title: "Method and apparatus of coupling a die to a lead frame with TAB tape", date: "Sep 6, 1994", url: "https://patents.google.com/patent/US5345363A/en" },
  { src: "/patents/cert-10.png", number: "US 5,369,545", title: "De-coupling capacitor on the top of the silicon die by eutectic flip bonding", date: "Nov 29, 1994", url: "https://patents.google.com/patent/US5369545A/en" },
];

export const PATENTS = [
  {
    number: "WO2001001487A1",
    title:
      "Integrated circuit die and/or package having a variable pitch contact array for testing",
    year: "2001",
    status: "Published",
    assignee: "Intel Corporation",
    abstract:
      "An integrated circuit die and/or package with a substrate having a central and an outer region. Electrical connections are spaced apart by a first distance on the outer region and a second distance on the central region — a variable-pitch contact array enabling reliable high-density testing.",
    url: "https://patents.google.com/patent/WO2001001487A1/en",
  },
  {
    number: "US5777265A",
    title: "Multilayer molded plastic package design",
    year: "1998",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "A multi-layer integrated circuit package with layers of dielectric that substantially reduce metal migration between conductors. Metal baseplates are separated from a lead frame by dielectric tapes, improving reliability of the molded plastic package.",
    url: "https://patents.google.com/patent/US5777265A/en",
  },
  {
    number: "US5773895A",
    title:
      "Anchor provisions to prevent mold delamination in an overmolded plastic array package",
    year: "1998",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "An overmolded plastic IC package whose integrated circuit mounts to one surface of a printed circuit board and couples to external contacts on the opposite surface — with anchor features engineered to prevent mold delamination over the package's life.",
    url: "https://patents.google.com/patent/US5773895A/en",
  },
  {
    number: "US5666004A",
    title: "Use of tantalum oxide capacitor on ceramic co-fired technology",
    year: "1997",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "An electronic package containing a tantalum oxide capacitor that couples the conductive bottom surface of an integrated circuit to conductive lines within the package housing, connected to pins providing clean power and ground to the IC.",
    url: "https://patents.google.com/patent/US5666004A/en",
  },
  {
    number: "US5607883A",
    title:
      "High performance and high capacitance package with improved thermal dissipation",
    year: "1997",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "A thermally dissipative IC package able to accommodate large discrete capacitors. The substrate has a recessed region — separate from the IC region — that houses a discrete capacitor, combining high capacitance with improved thermal performance.",
    url: "https://patents.google.com/patent/US5607883A/en",
  },
  {
    number: "US5556807A",
    title: "Advance multilayer molded plastic package using mesic technology",
    year: "1996",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "A method and structure for constructing an IC package using thin-film (MESIC) technology. A bottom conductive plate carries a vapor-deposited ceramic layer in a predetermined pattern, with an adjacent conductive layer forming the multilayer interconnect.",
    url: "https://patents.google.com/patent/US5556807A/en",
  },
  {
    number: "US5532983A",
    title: "Circuit design for point-to-point chip for high speed testing",
    year: "1996",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "A test assembly placing a test chip between the integrated circuit and the tester. The test chip presents very low input capacitance — approximating an open circuit — and matches the IC's impedance, enabling accurate high-speed point-to-point testing.",
    url: "https://patents.google.com/patent/US5532983A/en",
  },
  {
    number: "US5475565A",
    title: "Power distribution lid for IC package",
    year: "1995",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "An electronic package whose integrated circuit mounts to a thermally conductive heat spreader attached to the substrate, lowering thermal impedance while also providing a power and ground return current path through the lid.",
    url: "https://patents.google.com/patent/US5475565A/en",
  },
  {
    number: "US5420461A",
    title: "Integrated circuit having a two-dimensional lead grid array",
    year: "1995",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "An IC device with an array of flexible leads attached to the bottom of the package. A sheet of conductive material is punched into a plurality of slotted beams that are formed into a two-dimensional lead grid array.",
    url: "https://patents.google.com/patent/US5420461A/en",
  },
  {
    number: "US5369545A",
    title:
      "De-coupling capacitor on the top of the silicon die by eutectic flip bonding",
    year: "1994",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "A high-capacitance, low-inductance capacitor module of conductive power planes separated from ground planes by dielectric layers, with offset extending tabs — flip-bonded eutectically onto the top of the silicon die for clean decoupling.",
    url: "https://patents.google.com/patent/US5369545A/en",
  },
  {
    number: "US5307012A",
    title: "Test substation for testing semi-conductor packages",
    year: "1994",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "A test apparatus electrically coupling a semiconductor package to a test board. First contacts engage the package leads and attach to a housing with four grounding rods spaced a set distance away, ensuring controlled-impedance test conditions.",
    url: "https://patents.google.com/patent/US5307012A/en",
  },
  {
    number: "US5099388A",
    title:
      "Alumina multilayer wiring substrate provided with high dielectric material layer",
    year: "1992",
    status: "Granted",
    assignee: "NGK Spark Plug Co., Ltd.",
    abstract:
      "An alumina multilayer wiring substrate with a built-in high-dielectric, low-inductance capacitor on which a VLSI is mounted — effectively eliminating electrical noise that would otherwise hinder high-frequency operation.",
    url: "https://patents.google.com/patent/US5099388A/en",
  },
  {
    number: "GB2199988B",
    title: "Multi-layer molded plastic IC package",
    year: "1990",
    status: "Granted (UK)",
    assignee: "Intel Corporation",
    abstract:
      "The United Kingdom grant of the multi-layer molded plastic IC package — a carrier with a double-layered metal plate separated by adhesive-coated insulation tape, with a second tape layer bonding the externally extending leads.",
    url: "https://patents.google.com/patent/GB2199988B/en",
  },
  {
    number: "US4891687A",
    title: "Multi-layer molded plastic IC package",
    year: "1990",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "A multi-layered molded plastic package for encapsulating an integrated circuit, built around a carrier with a double-layered metal plate separated by adhesive-coated insulation tape, with a second insulating tape layer bonding the external leads.",
    url: "https://patents.google.com/patent/US4891687A/en",
  },
  {
    number: "US4835120A",
    title: "Method of making a multilayer molded plastic IC package",
    year: "1989",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "The manufacturing method for the multi-layered molded plastic IC package — assembling the double-layered metal-plate carrier, insulation tapes and externally extending leads into a reliable encapsulated package.",
    url: "https://patents.google.com/patent/US4835120A/en",
  },
  {
    number: "US4810671A",
    title: "Process for bonding die to substrate using a gold/silicon seed",
    year: "1989",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "An improved method for eutectically bonding a silicon wafer onto a gold preform. A gold/silicon seed placed on a pure gold preform acts as a catalyst to form the eutectic bond when the die is placed onto the preform.",
    url: "https://patents.google.com/patent/US4810671A/en",
  },
  {
    number: "US4771018A",
    title: "Process of attaching a die to a substrate using gold/silicon seed",
    year: "1988",
    status: "Granted",
    assignee: "Intel Corporation",
    abstract:
      "An improved die-attach process: a gold/silicon seed on a pure gold preform catalyses a clean eutectic bond between the silicon die and the substrate, raising the reliability of the die-to-substrate joint.",
    url: "https://patents.google.com/patent/US4771018A/en",
  },
];
