// ---------------------------------------------------------------------------
//  Central content for the B.K. Bhattacharyya Centre of Excellence website.
//  Edit text here — the UI components read from these structures.
// ---------------------------------------------------------------------------

export const NAV_LINKS = [
  { label: "Platform", href: "/platform" },
  { label: "Capability", href: "/capability" },
  { label: "Achievements", href: "/achievements" },
  { label: "Patents", href: "/patents" },
  { label: "Team", href: "/team" },
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
  "A globally recognized centre of excellence for power electronics and control engineering — contributing towards developing a world-class technology stack for cutting-edge power electronic products.";

export const MISSION =
  "To research, design, prototype and commercialize a power-conversion platform in one reconfigurable control core utilizable in solar inverters, battery energy storage systems (BESS), EV fast charging solutions, microgrid converters and solid-state transformers — built entirely through indigenous design, bridging academia and industry.";

// The application areas the platform powers — shown in the Vision/Mission section.
export const VM_APPLICATIONS = [
  { name: "Solar inverters", desc: "ResidentiGrid-Tied, Inverters Residential to Utility Scale, High Efficiency,Scalable Architectureal to utility scale" },
  { name: "Battery energy storage systems (BESS)", desc: "Bi-Directional Power Flow, Backup Power, Grid Support, Smart Energy Control" },
  { name: "EV DC fast charging", desc: "Fast EV Charging, Electric Mobility, Energy-Efficient Charging, Rapid Charging Solutions" },
  { name: "Microgrids & Hybrid Energy Systems", desc: "Reliable Power Supply, Sustainable Infrastructure, Energy Resilience, Renewable Energy Optimization" },
  { name: "Solid-state transformers", desc: "Next-Generation Energy Infrastructure, Grid Flexibility, Intelligent Power Conversion, Smart Grid Infrastructure" },
];

export const OBJECTIVES = [
  {
    no: "01",
    title: "R&D Leadership",
    body: "Design and develop power electronics systems—including inverters, controllers, and converters—entirely in-house, reducing dependence on imported technologies and strengthening national capability.",
  },
  {
    no: "02",
    title: "Scalable Product Development",
    body: "Extend our validated 3 kW inverter platform to 6 kW and 10 kW systems, and advance the commercialization of solar pump controllers for agricultural and industrial applications.",
  },
  {
    no: "03",
    title: "Clean Energy Democratization",
    body: "Enable affordable, high-quality solar and off-grid energy solutions for remote villages, farms, small businesses, and underserved communities.",
  },
  {
    no: "04",
    title: "Talent & Skill Development",
    body: "Build a strong pipeline of power electronics engineers through internships, research fellowships, and hands-on prototyping programs at the Centre.",
  },
  {
    no: "05",
    title: "Industry–Academia Collaboration",
    body: "Work closely with universities, government agencies, and industry partners to co-develop standards, secure patents, and translate research into real-world deployment.",
  },
  {
    no: "06",
    title: "Quality & Reliability Standards",
    body: "Design and manufacture products that meet and exceed national and international standards (BIS, IEC, IEEE), ensuring safety, efficiency, and long-term reliability in every system delivered.",
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
    body: "Concept design, simulation, schematic development, PCB layout, firmware, and prototype testing were completed in-house. The Swatantra Series 3 kW grid-tied inverter has been submitted for BIS certification.",
  },
  {
    phase: "Phase 2",
    state: "In Progress",
    tone: "progress",
    title: "6 kW Inverter & Solar Pump Controller",
    body: "Scaling the proven architecture to a 6 kW platform while simultaneously developing a solar pump controller. Both systems are currently in hardware prototyping and bench-testing stages, targeting agricultural and industrial applications.",
  },
  {
    phase: "Phase 3",
    state: "Planned",
    tone: "planned",
    title: "10 kW Platform & Advanced Grid Integration",
    body: "Development of a 10-kW inverter with full grid synchronization, anti-islanding protection, and export limiting features. Target certifications include relevant BIS and IEC standards, enabling readiness for both domestic and global markets.",
  },
  {
    phase: "Phase 4",
    state: "Planned",
    tone: "planned",
    title: "Commercialization, IP Creation & Strategic Partnerships",
    body: "Patent filings have already been initiated and published, with additional filings planned as new innovations emerge. This phase includes technology transfer to manufacturing partners, MoUs with industry stakeholders, and pilot deployments across agricultural and commercial sectors.",
  },
];

// Team — photos live in /public. Update `role` for each member as needed.
// Display order is intentional (renders left-to-right, top-to-bottom).
export const TEAM = [
  {
    name: "Dr. Ritika Agarwal",
    role: "Senior Engineer — EE Wing",
    img: "/Ritika_pic.jpeg",
    bio: "Senior engineer with a PhD in Power Electronics from Thapar Institute of Engineering & Technology. She specializes in the design, development and implementation of high-efficiency power electronic systems — 3 kW and 6 kW grid-tied solar inverters, isolated SMPS solutions and advanced power-conversion architectures. Her expertise spans renewable-energy integration, inverter design, PCB development, embedded control systems, multilevel inverters and EV charging.",
  },
  {
    name: "Dr. Kanchan Bala Rai",
    role: "Senior Engineer — Power & Electronics",
    img: "/Kanchan_pic.jpeg",
    bio: "Doctoral power electronics engineer specializing in control-logic design and embedded programming, validating solar power-electronics systems with MATLAB, dSPACE and OPAL-RT.",
  },
  {
    name: "Akankshi Trivedi",
    role: "Research Scholar — IIT Delhi & Power Electronics R&D Engineer",
    img: "/akanshi.png",
    bio: "Research scholar at IIT Delhi and power electronics R&D engineer with over 2 years of experience in the design, modeling, control and hardware testing of power electronic converters.",
  },
  {
    name: "Pravesh Kumar",
    role: "Senior Hardware Testing Engineer",
    img: "/pravesh.png",
    bio: "Senior hardware testing engineer with extensive experience in the assembly, testing and validation of power electronic systems. He specializes in PCB soldering, circuit assembly, sensor-circuit testing and calibration, and comprehensive performance evaluation of solar and hybrid inverter platforms. His work spans hardware troubleshooting, functional and reliability testing, system validation and performance optimization — alongside R&D support through BOM management, component verification and prototype evaluation.",
  },
  {
    name: "Ankit Kumar",
    role: "Hardware Testing Engineer",
    img: "/ankit.jpeg",
    bio: "Hardware testing engineer specializing in the validation, testing and troubleshooting of power electronic systems and embedded hardware — functional testing, fault diagnosis, performance evaluation and reliability verification of circuit boards for grid-tied solar inverters. His expertise spans test planning and execution, PCB and schematic review, BOM management, component verification and coordination with vendors and manufacturing teams.",
  },
  {
    name: "Krishna Gullapalli",
    role: "Embedded Systems Developer",
    img: "/Krishna_pic.jpeg",
    bio: "Embedded systems developer building STM32-based inverter communication and monitoring boards with Wi-Fi and LCD, implementing UART, SPI, I2C, Modbus, MQTT and WebSocket protocols.",
  },
  {
    name: "Akash Yadav",
    role: "Hardware Engineer",
    img: "/akash.png",
    bio: "Electrical hardware engineer with expertise in power-converter development, inverter testing and debugging, and hardware design. Experienced with MATLAB, LTspice and Altium, and in electronic component selection for efficient system performance.",
  },
  {
    name: "Aditya Kumar Agarhari",
    role: "R&D Electrical Engineer",
    img: "/Aditya_pic.jpeg",
    bio: "R&D electrical engineer specializing in power electronics, PCB design, BOM management and technical documentation. Passionate about developing reliable electrical solutions for renewable-energy and industrial applications.",
  },
  {
    name: "Tamnna Ameri",
    role: "Firmware Developer",
    img: "/Tamanna_pic.jpeg",
    bio: "Firmware developer writing and debugging Embedded C/C++ for microcontroller-based systems, interfacing peripherals such as GPIO, ADC, UART and I2C and validating firmware on hardware.",
  },
  {
    name: "Kashyap Masiwal",
    role: "Industrial Designer & Project Lead",
    img: "/Kashyap_pic.jpeg",
    bio: "Industrial designer shaping IP-rated enclosures and CMF for inverter systems; led the design of a solar panel cleaning robot and residential solar carports.",
  },
  {
    name: "Gaurav Kumar",
    role: "Embedded Developer",
    img: "/gourav.png",
    bio: "Builds DQ control-based grid-tied inverter firmware on STM32, with experience across IoT and BLE products using Zephyr RTOS.",
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

// ---------------------------------------------------------------------------
//  Innovation engine — the research-driven platform that lets us build advanced
//  power-electronics solutions in a fraction of the usual time. Reused across
//  Home, Platform and Achievements (each page shows a chosen subset of blocks).
// ---------------------------------------------------------------------------
export const INNOVATION_ENGINE = {
  eyebrow: "Innovation, Not Just A Product",
  title: "A research platform built to innovate faster",
  subtitle:
    "This is not a single product — it is a technology foundation, built from our own R&D, that lets us develop advanced power-electronics solutions in a fraction of the time a ground-up build would take. The hard engineering is done once and re-used across every product.",

  // Why the platform accelerates development — the reuse advantage, stated plainly.
  accelerators: [
    {
      value: "70–80%",
      label: "Engineering re-used",
      body: "The hardest part of a new product — grid synchronisation, control loops, protection logic — is already built and validated. A new product retunes it rather than rebuilding it.",
    },
    {
      value: "Re-target",
      label: "Not restart",
      body: "One proven control core is re-targeted across five product classes instead of starting from a blank page each time. Development becomes adaptation, not invention.",
    },
    {
      value: "Compounds",
      label: "Every cycle",
      body: "Each product built on the platform stress-tests and hardens it — so every new solution starts from a stronger, more proven base than the last.",
    },
  ],

  // The hard problems we solved — and, in plain terms, how. Drawn from the real
  // engineering behind the 3 kW inverter.
  challenges: [
    {
      title: "Staying locked to a shifting grid",
      problem: "The Indian grid's voltage and frequency drift constantly; a converter that loses sync trips or injects bad power.",
      solved: "Two independent grid-synchronisation methods (orthogonal and non-orthogonal), holding 99.5% power factor under weak-grid swings.",
    },
    {
      title: "Electrical noise & displacement current",
      problem: "High-speed switching radiates common-mode and differential-mode noise that breaks EMI compliance and corrupts measurement.",
      solved: "A dense, field-cancelling layout plus targeted noise-suppression — keeping the unit small, quiet and compliant.",
    },
    {
      title: "Failing safe, every time",
      problem: "A grid-tied inverter must survive faults, surges and abnormal conditions without damage or hazard.",
      solved: "Protection logic covering 30+ distinct fault and abnormal-condition cases, so the unit always fails to a safe state.",
    },
    {
      title: "Cooling without moving parts",
      problem: "Fans wear out and fail in dusty, hot rural environments — the worst place for a service call.",
      solved: "Mechanical integration tuned for natural (fanless) convection in a compact enclosure, rated −30 °C to +60 °C.",
    },
  ],

  // The reusable building blocks we have already built — the platform itself.
  frameworks: [
    { name: "Grid-sync library", desc: "PLL / SOGI / dq-PLL / DDSRF — locks onto the grid under real Indian conditions." },
    { name: "Control-loop framework", desc: "Inner current (PI / PR, dq vector) and outer P/Q loops, retuned per product." },
    { name: "Protection engine", desc: "30+ fault and abnormal-condition cases as reusable, configurable safety logic." },
    { name: "MPPT module", desc: "Stable maximum-power tracking that never collapses under positive feedback." },
    { name: "PWM & switching", desc: "SVPWM, dead-time and modulation logic shared across topologies." },
    { name: "Comms layer", desc: "Modbus, CAN and OCPP-ready telemetry for monitoring and integration." },
  ],

  // What this foundation lets us build next — future solutions on top of it.
  future: [
    { name: "BESS power conversion", desc: "Bi-directional storage conversion — the same core plus a battery interface and SoC-aware logic." },
    { name: "EV DC fast charging", desc: "The grid-tied front-end is structurally the same converter; add isolated DC/DC and charging protocols." },
    { name: "Grid-forming microgrids", desc: "Solar-plus-battery hybrids with seamless transfer between grid-tied and islanded operation." },
    { name: "Utility-scale (10 MW)", desc: "Multilevel NPC / MMC topologies driven by the same control discipline, scaled to megawatts." },
    { name: "Solid-state transformers", desc: "A power-electronics replacement for conventional transformers, sharing the bi-directional core." },
  ],
};

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
//  Engineering deep-dive — what went into the 3 kW grid-tied inverter.
//  Written in plain language so a non-specialist can follow it.
// ---------------------------------------------------------------------------
export const INVERTER_BUILD = {
  milestone: "On 22 May 2026, Ornate submitted its first 3 kW grid-tied inverter for BIS type-testing.",
  intro:
    "An inverter turns the DC power from solar panels into the AC power your home and the grid use. Building one that is safe, efficient and grid-compliant is hard — and apart from the semiconductor chips and magnetic parts, our team designed and engineered nearly every subsystem of this one in-house.",
  // The major subsystems, each explained simply.
  build: [
    {
      title: "Power boards",
      body: "The main circuit that handles the high-power conversion — designed as one platform that scales from 3 kW to 5 kW.",
      owner: "Argha (IIT Bombay, PhD) — Chief Architect",
    },
    {
      title: "Dual-source SMPS",
      body: "The internal power supply that runs the electronics — engineered to work from either the solar panel side or the grid side.",
      owner: "Argha",
    },
    {
      title: "Control firmware",
      body: "Two independent grid-following control strategies that keep the inverter's output locked to the grid.",
    },
    {
      title: "Embedded software",
      body: "Two different methods to solve grid synchronisation — staying perfectly in step with the grid's voltage and phase.",
    },
    {
      title: "Protection systems",
      body: "Safety logic covering more than 30 different fault and abnormal-condition cases, so the unit fails safe every time.",
    },
    {
      title: "Compact system architecture",
      body: "A dense, robust layout that cancels stray power- and ground-field interference — letting the unit stay small and strong.",
      owner: "Ritika — layout expert",
    },
    {
      title: "Noise elimination",
      body: "Methods to suppress common-mode and differential-mode electrical noise tied to displacement current — cleaner, quieter power.",
    },
    {
      title: "Natural (fanless) cooling",
      body: "Mechanical integration for a small, compact unit that cools itself without fans — fewer moving parts to wear out.",
    },
    {
      title: "EMI / EMC layout",
      body: "Board layout tuned to control electromagnetic emissions, plus AC-side and earth-leakage current management for compliance.",
    },
    {
      title: "Smart MPPT",
      body: "Maximum-power-point tracking tuned so the current-control loops stay stable and never collapse under positive feedback.",
      owner: "Akankshi & Gaurav (stability); Arindam & Kanchan (power-search)",
    },
  ],
  // Headline performance numbers, lab-measured.
  metrics: [
    { value: "99.5%", label: "Power factor", note: "Two software methods — orthogonal & non-orthogonal" },
    { value: "~5–6%", label: "THD at full 3 kW", note: "≈4.5% at night, in our lab" },
    { value: "30+", label: "Protection cases", note: "Fail-safe coverage" },
    { value: "3–5 kW", label: "Power-board range", note: "One scalable design" },
  ],
};

// Utility-scale roadmap — moving from kilowatts to megawatts (10 MW).
export const UTILITY_SCALE = {
  intro:
    "The same engineering discipline scales up. For utility-scale power — think 10 MW for large solar farms — the inverter is built from one of two advanced multilevel topologies. Here is what they are, in plain terms.",
  img: "/platform/npc-mmc-topologies.png",
  imgCaption: "NPC vs MMC — the two candidate multilevel topologies for the 10 MW platform.",
  topologies: [
    {
      name: "NPC — Neutral Point Clamped",
      sub: "3-level inverter",
      points: [
        "Uses clamping diodes to create three voltage levels instead of two (+Vdc/2, 0, −Vdc/2).",
        "Smoother output: lower dv/dt and lower distortion (THD) than a basic 2-level design.",
        "Proven in medium- and high-power solar inverters, motor drives and STATCOMs.",
      ],
    },
    {
      name: "MMC — Modular Multilevel Converter",
      sub: "Many-level, modular",
      points: [
        "Built from many identical submodules in series — each adds its own small voltage step.",
        "Many small steps stack into a near-perfect sine wave: very low THD at low switching frequency.",
        "The choice for the largest systems — HVDC links, FACTS and big renewable plants.",
      ],
    },
  ],
  note:
    "The final switching scheme — NPC or MMC — will be locked once the 10 MW power board, with its heatsinks and forced-air cooling, is built and characterised on the bench.",
};

// ===========================================================================
//  THE PLATFORM STORY — from the MeitY institutional submission.
//  Written in plain language: the platform and where it applies come first,
//  the 3 kW inverter is the first proof-point.
// ===========================================================================

// In-depth, original narrative of the platform concept — the core idea of the
// whole Centre, explained fully rather than summarised.
export const PLATFORM_STORY = {
  lead:
    "At its heart, this Centre is not building a single device — it is building a platform. That one distinction shapes everything: how the work is valued, how it scales, and how defensible it becomes. A product is something you design, sell, and then largely rebuild for the next requirement. A platform is the accumulated engineering that sits underneath many products — the part that is designed once, hardened over years of real use, and then re-used again and again. The 3 kW inverter you can hold today is simply the first thing the platform produced. The platform itself is the asset that will produce the next ten.",
  sections: [
    {
      no: "01",
      heading: "What we actually mean by a “platform”",
      paras: [
        "It helps to borrow an analogy. A car manufacturer does not design a brand-new engine for every model it sells. It designs one strong engine platform and adapts it — different tuning, different housings, different outputs — across an entire range of vehicles. We do exactly this for grid-connected power electronics: one proven control core, re-targeted across many different machines.",
        "Crucially, our platform is not a casing or a circuit board you can point to. It is the firmware-defined control intelligence — the algorithms and the software architecture that decide, thousands of times every second, how electrical energy is measured, shaped, synchronised and protected as it flows between solar panels, batteries, vehicles and the grid. It is the brain, not the body.",
      ],
    },
    {
      no: "02",
      heading: "Why the value lives in software, not steel",
      paras: [
        "Every power-conversion product has two halves. There is the power stage — the heavy, visible hardware of switches, magnetics and capacitors — and there is the control stack, the firmware that actually drives it. The hardware is increasingly a commodity: components can be bought off the shelf, and a great many factories can assemble a competent board.",
        "The genuinely hard, scarce and defensible part is the control stack. It must keep the system perfectly in step with a grid whose voltage and frequency are constantly drifting; squeeze maximum energy out of the sun as clouds pass overhead; ride through faults and disturbances without tripping or damaging anything; and do all of this safely, within strict grid codes, in real time with no margin for a missed deadline. This is the layer where years of engineering quietly accumulate — and it is the layer that is hardest for anyone else to copy.",
      ],
    },
    {
      no: "03",
      heading: "How one core becomes many products",
      paras: [
        "The control intelligence that runs a rooftop solar inverter is, in large part, the very same intelligence a battery storage system, an EV fast charger or a microgrid converter needs. These products differ in their hardware ratings and their application rules — but the core beneath them, the grid synchronisation, the current control, the protection logic, is shared.",
        "So extending the platform to a new product is not starting from a blank page. It is keeping the proven core intact, retuning a handful of layers, and adding the application-specific pieces on top — a battery interface here, a charging standard there. In practice, a new product can reuse the majority of the hardest engineering that already exists. That is what turns a single success into a portfolio.",
      ],
    },
    {
      no: "04",
      heading: "A platform that compounds with every product",
      paras: [
        "There is a second, quieter advantage. Every product built on the platform is also a stress-test of it. New ratings, new grids and new field conditions surface new edge cases; solving them hardens the core for everything that comes afterwards. The platform does not merely stay still and get re-used — it gets measurably better each cycle.",
        "Over time this compounds into something a one-off product strategy can never reach: a control architecture that has been proven across more conditions, more deployments and more failure modes than any single device ever could. The longer it runs, the harder it is to catch.",
      ],
    },
    {
      no: "05",
      heading: "Why this matters for India",
      paras: [
        "India is learning, rapidly and successfully, to assemble power-electronics hardware at home. But the control intelligence inside that hardware — the firmware that actually governs how the equipment, and through it the grid, behaves — is still very largely imported. As the energy system becomes electronics-led, with every solar farm, battery and charger connecting through an inverter, the behaviour of the national grid increasingly depends on software authored somewhere else.",
        "True self-reliance has to reach that layer. An indigenous, sovereign control platform is not only an industrial achievement; it is energy-security infrastructure. Owning the control layer means owning how the country's clean-energy backbone responds, stabilises and recovers — and that is precisely the capability this platform is built to give India.",
      ],
    },
  ],
  pullQuote: "Own the control layer, and you own the future of the grid.",
};

// At-a-glance — the whole story in four parts, before the detail. (PPT p.3)
export const PLATFORM_GLANCE = {
  intro:
    "Three years. One platform. A first product. National recognition. Here is the whole story in four parts — before the detail.",
  pillars: [
    {
      tag: "The platform",
      title: "An indigenous control “brain” for power electronics",
      body: "A reusable, software-defined control stack — the part that locks onto the grid, tracks solar power, runs the safety logic and talks to the outside world. Built and validated in India.",
      highlight: true,
    },
    {
      tag: "The first product",
      title: "3 kW grid-tied solar inverter — field-validated",
      body: "Ready and tested under real Indian grid conditions: anti-islanding, grid-code compliant, MPPT-enabled, with heat performance proven for Indian environments.",
      highlight: false,
    },
    {
      tag: "Government recognition",
      title: "DSIR-recognised in-house R&D unit",
      body: "Recognised by the Department of Scientific and Industrial Research — the only national scheme that formally benchmarks industrial R&D in India.",
      highlight: false,
    },
    {
      tag: "The potential",
      title: "Extends to five product classes",
      body: "The same core can power solar inverters of every size, battery storage, EV fast chargers, microgrids and solid-state transformers — each with extra application engineering.",
      highlight: true,
    },
  ],
};

// The seven-layer architecture — five travel, two don't. (PPT p.8)
export const PLATFORM_LAYERS = {
  intro:
    "Think of the technology as seven layers stacked on top of each other. The top five are software — they carry across from one product to the next and hold almost all the valuable know-how. The bottom two are physical hardware, rebuilt for each product.",
  layers: [
    { n: 1, name: "What the product does", does: "Decides the product's behaviour — tracking the sun's power, staying safe, scheduling and talking to the outside world.", travels: "Yes", note: "Used as-is", ip: "high" },
    { n: 2, name: "The big-picture controller", does: "Sets the overall targets: how much power to deliver and how to hold the voltages steady.", travels: "Yes", note: "Same logic everywhere", ip: "high" },
    { n: 3, name: "The fast reflexes", does: "The split-second inner loop that shapes the electrical current smoothly and accurately.", travels: "Mostly", note: "Lightly re-tuned", ip: "high" },
    { n: 4, name: "Switching & safety", does: "Turns the power switches on and off with precise timing — and trips instantly the moment something goes wrong.", travels: "Mostly", note: "Same structure", ip: "high" },
    { n: 5, name: "Staying in step with the grid", does: "Locks onto the grid's rhythm so our power flows in perfect time with it.", travels: "Mostly", note: "Same approach", ip: "high" },
    { n: 6, name: "The power muscle", does: "The heavy components that actually carry the power — switches, filters and transformers.", travels: "No", note: "Rebuilt per size", ip: "low" },
    { n: 7, name: "Cooling, casing & noise", does: "Keeping it cool, housing it safely, and keeping electrical noise in check.", travels: "No", note: "Rebuilt per product", ip: "low" },
  ],
  note:
    "The top five layers are the software — roughly 70–80% of the work and almost all of the valuable, hard-to-copy know-how. This is the part India must own.",
};

// Why it matters nationally — electronics-led transition + the strategic gap. (PPT p.12–13)
export const PLATFORM_NATIONAL = {
  intro:
    "India's energy transition is becoming electronics-led — power-conversion equipment is now the control gateway between every renewable source, every battery and every load.",
  shifts: [
    { title: "Generation is electronics-interfaced", body: "Solar, wind, batteries and EV chargers all connect through inverters. The grid's behaviour is now set by inverter control software." },
    { title: "Storage is moving to the centre", body: "41.65 GW / 208 GWh of battery storage targeted by 2030 (CEA). Every gigawatt-hour needs bi-directional power conversion." },
    { title: "EV charging is a new grid layer", body: "PM E-DRIVE targets 72,300 stations. Each DC fast charger is a grid-tied bi-directional converter." },
    { title: "Grid modernisation is software-defined", body: "Grid-forming, virtual synchronous machines and ancillary services are all delivered by embedded software inside power electronics." },
  ],
  gapLine:
    "The strategic gap: India increasingly assembles the hardware at home — but the control “brain” inside is still imported.",
  doesNow: {
    title: "What India does today",
    items: [
      "Assembles power-conversion hardware domestically",
      "PLI for solar PV modules and battery cells",
      "Local-content rules in renewable tenders",
      "A growing electronics manufacturing base",
    ],
  },
  imported: {
    title: "What is still imported",
    items: [
      "The embedded firmware on MCU / DSP / DSC chips",
      "Grid-sync, current-control and protection logic",
      "Validation methods and reference designs",
      "System-level design know-how",
    ],
  },
  closing:
    "True self-reliance must go beyond local assembly. India must own the embedded control architecture at the heart of modern power equipment — and that is exactly what this platform is.",
};

// Designed for Indian deployment realities. (PPT p.9)
export const INDIAN_CONDITIONS = {
  intro:
    "Imported control systems are tuned for the grids of their home countries. Indian conditions are different — so the platform was designed and validated for them from the start.",
  items: [
    { title: "Weak-grid behaviour", body: "Handles voltage and frequency swings well beyond what designs for stronger grids assume." },
    { title: "Heat & climate", body: "High ambient temperatures, dust and humidity demand thermal derating and proper ingress protection for Indian weather." },
    { title: "Rural feeder instability", body: "Stays stable on unstable rural distribution lines — something temperate-climate designs can't assume." },
    { title: "C&I power quality", body: "Robust under local distortion, switching transients and reactive-power conditions in commercial and industrial settings." },
    { title: "CEA grid-code compliance", body: "Built to CEA Technical Standards (2019) and emerging fault-ride-through / reactive-support rules — compliance designed in." },
    { title: "Serviceability & cost", body: "Field-replaceable design, simpler diagnostics and trade-offs that reflect Indian deployment economics." },
  ],
};

// Aligned with national programmes. (PPT p.15)
export const NATIONAL_PROGRAMS = {
  intro: "The indigenous control layer connects directly to the country's major missions and programmes.",
  items: [
    { name: "Aatmanirbhar Bharat", body: "Indigenous ownership of a strategically important control layer." },
    { name: "Make in India", body: "High-value engineering and IP creation — not assembly alone." },
    { name: "PLI — ACCs & solar PV", body: "Extends the value chain from cells and modules into the power electronics on top." },
    { name: "Renewable energy expansion", body: "The 500 GW non-fossil target needs sovereign inverter-control capability." },
    { name: "BESS deployment", body: "Indigenous PCS technology for 208 GWh of battery storage by 2030." },
    { name: "PM E-DRIVE", body: "Indigenous control for EV DC fast-charging infrastructure." },
    { name: "PM-KUSUM", body: "Indigenous VFD platform for solar pumps at agricultural scale." },
    { name: "Grid modernisation", body: "Grid-forming, grid-supportive and ancillary-services power electronics." },
    { name: "Energy security", body: "Trusted indigenous control of critical infrastructure." },
    { name: "ESDM & electronics", body: "Embedded-systems engineering underpinning higher-value manufacturing." },
  ],
};

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
