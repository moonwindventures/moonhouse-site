const CALENDLY_URL = "https://calendly.com/kyle-moonhouse/30min";

const VERTICALS: { name: string; glyph: string; blurb: string }[] = [
  { name: "Construction", glyph: "CO", blurb: "GCs, specialty contractors, developers, engineering firms, homebuilders" },
  { name: "Legal", glyph: "LG", blurb: "Law firms, in-house legal teams, ALSPs, compliance groups" },
  { name: "Healthcare", glyph: "HC", blurb: "Provider groups, hospitals, specialty clinics, MSOs, dental and vision" },
  { name: "Sports & Entertainment", glyph: "SE", blurb: "Teams, leagues, agencies, venues, production companies, talent managers" },
  { name: "Startups", glyph: "ST", blurb: "Early-stage startups, SMB founders, agencies, SaaS companies, marketplaces" },
  { name: "Executive", glyph: "EX", blurb: "CEOs, COOs, CFOs, heads of business units, PE-backed leadership teams" },
  { name: "Food & Hospitality", glyph: "FH", blurb: "Restaurants, hotel groups, bars, caterers, resorts, event venues" },
  { name: "Education", glyph: "ED", blurb: "K–12 schools, higher ed, bootcamps, tutoring firms, continuing education" },
  { name: "Real Estate", glyph: "RE", blurb: "Residential brokerages, commercial brokers, property managers, RE developers" },
  { name: "Finance & Accounting", glyph: "FA", blurb: "Controllers, accounting firms, CFO offices, shared services teams" },
  { name: "Insurance", glyph: "IN", blurb: "Carriers, MGAs, brokers, TPAs, claims administrators" },
  { name: "Manufacturing", glyph: "MF", blurb: "Discrete manufacturing, process plants, contract manufacturers, industrial OEMs" },
  { name: "Logistics", glyph: "LO", blurb: "3PLs, freight brokers, shippers, warehouse operators, import/export teams" },
  { name: "HR & Recruiting", glyph: "HR", blurb: "Talent teams, internal HR, staffing firms, people ops groups" },
  { name: "Retail & E-commerce", glyph: "RT", blurb: "DTC brands, retailers, marketplaces, Amazon sellers, omnichannel merchants" },
  { name: "Nonprofit", glyph: "NP", blurb: "Foundations, NGOs, social services orgs, associations, fundraising teams" },
  { name: "Government", glyph: "GV", blurb: "Municipalities, agencies, permitting offices, inspections, public service teams" },
  { name: "Energy & Utilities", glyph: "EN", blurb: "Electric, gas, water utilities, field service providers, renewables" },
  { name: "Automotive & Fleet", glyph: "AU", blurb: "Dealerships, service centers, rental and fleet operators, auto groups" },
  { name: "Pharma & Life Sciences", glyph: "PH", blurb: "Biotech firms, pharma manufacturers, CROs, med-tech, life sciences ops" },
];

const AGENT_TYPES: { name: string; blurb: string }[] = [
  { name: "Revenue", blurb: "Qualify, route, and convert inbound across channels in under 60 seconds." },
  { name: "Workflow", blurb: "Coordinate tasks, hand-offs, and approvals across teams and tools." },
  { name: "Operations", blurb: "Automate the repetitive work — dispatch, scheduling, status updates." },
  { name: "Risk", blurb: "Flag compliance, contractual, and reputational exposure before it escalates." },
  { name: "Finance", blurb: "Forecast cash, track margin, surface AR priorities and danger signals." },
  { name: "Intake", blurb: "Screen new matters, leads, and tickets — capture the right data upfront." },
  { name: "Knowledge", blurb: "Synthesize filings, records, transcripts, and docs into decision-ready briefs." },
  { name: "Specialist", blurb: "Hyper-specific agents tailored to the one workflow that moves your P&L." },
];

const PRINCIPLES: { title: string; body: string }[] = [
  {
    title: "Operator-led",
    body: "We run the businesses we build agents for. Every workflow is battle-tested on our own P&Ls before it ships to yours.",
  },
  {
    title: "Vertical-aware",
    body: "Twenty industries covered. Each agent trained on the real call shapes, documents, and systems of its domain — not a generic wrapper.",
  },
  {
    title: "Live in weeks",
    body: "Two-week pilot, measurable outcomes. You don't touch infrastructure, prompts, or integrations — we deploy and manage it end-to-end.",
  },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-serif text-xl tracking-tight ${className}`}
      style={{ fontWeight: 500, letterSpacing: "-0.01em" }}
    >
      MoonHouse
    </span>
  );
}

function CTA({
  href = CALENDLY_URL,
  children,
  variant = "primary",
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-colors duration-200";
  const style =
    variant === "primary"
      ? "bg-[#6b8eff] text-[#0a0e1a] hover:bg-[#c9a3ff] rounded-full"
      : "border border-[#2a3450] text-[#f5f7fa] hover:border-[#6b8eff] rounded-full";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${style} ${className}`}
    >
      {children} <span aria-hidden>→</span>
    </a>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-[#1e2638] bg-[#0a0e1a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Wordmark />
          <div className="flex items-center gap-6">
            <a
              href="#verticals"
              className="hidden text-sm text-[#8b9bb4] hover:text-[#f5f7fa] sm:inline"
            >
              Verticals
            </a>
            <a
              href="#agents"
              className="hidden text-sm text-[#8b9bb4] hover:text-[#f5f7fa] sm:inline"
            >
              Agents
            </a>
            <a
              href="#about"
              className="hidden text-sm text-[#8b9bb4] hover:text-[#f5f7fa] sm:inline"
            >
              About
            </a>
            <CTA variant="primary">Book a call</CTA>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="stars" />
        <div className="hero-aurora" />
        <div className="hero-grain" />
        <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-24 md:pb-36 md:pt-32">
          <div className="eyebrow">MoonHouse · AI agents for operators</div>
          <h1 className="mt-6 font-serif max-w-4xl">
            Agents for every industry.
            <br />
            <span className="text-gradient">Built by operators.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-[#8b9bb4]">
            160 production-ready AI agents, organized across 20 verticals.
            Deployed by the founders running the businesses they built them for.
            Live in weeks, not quarters.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA variant="primary">Book a 30-minute call</CTA>
            <a
              href="#verticals"
              className="text-sm text-[#8b9bb4] hover:text-[#f5f7fa]"
            >
              Browse the catalog ↓
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid gap-6 border-t border-[#1e2638] pt-10 md:grid-cols-4">
            <Stat v="20" k="Verticals" />
            <Stat v="160" k="Agents" />
            <Stat v="8" k="Types per vertical" />
            <Stat v="~2 wk" k="Pilot to live" />
          </div>
        </div>
      </section>

      {/* How we build — 3 principles */}
      <section className="border-t border-[#1e2638]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="eyebrow">How we build</div>
          <h2 className="mt-4 font-serif max-w-3xl">
            Not a dashboard. An operator.
          </h2>
          <p className="mt-6 max-w-2xl text-[#8b9bb4]">
            Most AI tools give you a new UI. We deploy an agent that does the
            work — inside the systems your team already uses.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div
                key={p.title}
                className="border-t border-[#2a3450] pt-6"
              >
                <h3 className="font-serif text-xl" style={{ fontWeight: 500 }}>
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-[#8b9bb4]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Agent Types */}
      <section id="agents" className="border-t border-[#1e2638]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="eyebrow">Eight agent types</div>
          <h2 className="mt-4 font-serif max-w-3xl">
            Every vertical ships with a complete operating stack.
          </h2>
          <p className="mt-6 max-w-2xl text-[#8b9bb4]">
            Each industry covered is built on the same eight-type foundation.
            Broad agents handle the repeatable work; specialists solve the
            one-off that actually moves margin.
          </p>

          <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {AGENT_TYPES.map((t, i) => (
              <div key={t.name} className="group">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#5a6b85]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-lg" style={{ fontWeight: 500 }}>
                    {t.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-[#8b9bb4]">{t.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 20 Verticals */}
      <section id="verticals" className="border-t border-[#1e2638]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="eyebrow">Twenty verticals · 160 agents</div>
          <h2 className="mt-4 font-serif max-w-3xl">
            Industries we cover.
          </h2>
          <p className="mt-6 max-w-2xl text-[#8b9bb4]">
            Every vertical includes 8 production agents — 6 broad plus 2
            hyper-specific to the workflow that matters most.
          </p>

          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-[#1e2638] bg-[#1e2638] sm:grid-cols-2 lg:grid-cols-4">
            {VERTICALS.map((v) => (
              <div
                key={v.name}
                className="group flex flex-col gap-3 bg-[#0a0e1a] p-6 transition-colors duration-200 hover:bg-[#141b2d]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold tracking-widest text-[#6b8eff]">
                    {v.glyph}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-[#5a6b85]">
                    8 agents
                  </span>
                </div>
                <h3
                  className="font-serif text-lg leading-tight"
                  style={{ fontWeight: 500 }}
                >
                  {v.name}
                </h3>
                <p className="text-xs leading-relaxed text-[#8b9bb4]">
                  {v.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built by operators / about */}
      <section id="about" className="border-t border-[#1e2638]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="eyebrow">Built by operators</div>
          <h2 className="mt-4 font-serif max-w-3xl">
            We use this stack on our own companies first.
          </h2>
          <div className="mt-10 grid gap-12 md:grid-cols-5">
            <div className="md:col-span-3">
              <p className="text-lg text-[#f5f7fa]">
                MoonHouse was founded by operators running businesses across
                construction, real estate, and services. The agents in this
                catalog were battle-tested inside those companies — answering
                real calls, qualifying real leads, shipping real invoices —
                before we offered them to anyone else.
              </p>
              <p className="mt-6 text-[#8b9bb4]">
                We're not selling software for you to figure out. We deploy the
                agent, configure every integration, and manage it ongoing. You
                measure the outcome. If it doesn't pay for itself, we eat the
                cost.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="border-t border-[#2a3450] pt-6">
                <div className="font-mono text-xs tracking-widest text-[#5a6b85]">
                  Pilot structure
                </div>
                <ul className="mt-4 space-y-3 text-sm text-[#8b9bb4]">
                  <li>— 2-week build and deploy</li>
                  <li>— 30-day monitored pilot</li>
                  <li>— Outcome-based retention</li>
                  <li>— Full exit ramp if it doesn't land</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-[#1e2638]">
        <div className="relative overflow-hidden">
          <div className="hero-aurora" style={{ opacity: 0.6 }} />
          <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
            <h2 className="font-serif">
              Which vertical do you run?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[#8b9bb4]">
              30 minutes. We'll walk through your current workflow and tell you
              honestly — with numbers — whether MoonHouse makes sense.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <CTA variant="primary">Book a 30-minute call</CTA>
              <div className="font-mono text-xs tracking-widest text-[#5a6b85]">
                kyle@moonhouse.ai · (818) 399-5833
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e2638]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <Wordmark />
            <span className="font-mono text-xs text-[#5a6b85]">
              A Moonwind Ventures company
            </span>
          </div>
          <div className="font-mono text-xs text-[#5a6b85]">
            Los Angeles, CA · moonhouse.ai
          </div>
          <div className="font-mono text-xs text-[#5a6b85]">
            © 2026 MoonHouse Ventures, LLC
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ v, k }: { v: string; k: string }) {
  return (
    <div>
      <div
        className="font-serif text-3xl text-[#f5f7fa]"
        style={{ fontWeight: 500 }}
      >
        {v}
      </div>
      <div className="mt-1 font-mono text-xs uppercase tracking-widest text-[#5a6b85]">
        {k}
      </div>
    </div>
  );
}
