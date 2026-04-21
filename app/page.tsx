const CALENDLY_URL = "https://calendly.com/kyle-moonhouse/30min";
const EMAIL = "kyle@moonhouse.ai";
const PHONE = "(818) 399-5833";

const MODULES = [
  {
    n: "01",
    title: "Instant Lead Response",
    body:
      "Every inquiry — web form, email, text — gets a professional response in under 60 seconds. Qualifies the lead, answers questions, books the consult on your calendar.",
    tag: "24/7 — weekends & holidays",
  },
  {
    n: "02",
    title: "Pipeline Follow-Up",
    body:
      "Every quote you've sent gets followed up until you have a yes or a no. Every prospect gets a cadence based on deal size and priority — automatically.",
    tag: "Zero leads go cold",
  },
  {
    n: "03",
    title: "Client Communication",
    body:
      "Your clients get project updates before they text you. Milestone notifications, timeline changes, next steps — written in your voice and sent automatically.",
    tag: "Fewer client texts at 9pm",
  },
  {
    n: "04",
    title: "Daily Command Briefing",
    body:
      "Every morning: sub emails summarized, active project status, today's priority list, blockers flagged. Read it in three minutes over coffee.",
    tag: "Under 3 minutes",
  },
  {
    n: "05",
    title: "Cash Flow Sentinel",
    body:
      "Weekly financial health report with AR priorities, upcoming obligations, and danger zone alerts. Always know which invoices to chase and where your cash position is.",
    tag: "No month-end surprises",
  },
  {
    n: "06",
    title: "Content Engine",
    body:
      "Bi-weekly LinkedIn and Instagram content from your real project stories — job photos, milestones, lessons learned. Builds your reputation as the go-to GC.",
    tag: "Zero writing required",
  },
];

const STEPS = [
  {
    sn: "Step 01 · Week 1",
    title: "We audit your operations",
    body:
      "One hour on the phone. We map your tools, workflow, and pain points. We'll tell you honestly whether this is the right fit before you spend a dollar.",
  },
  {
    sn: "Step 02 · Week 2",
    title: "We deploy your AI team",
    body:
      "We custom-configure every agent for your business — brand voice, tools, workflow. You don't touch a line of code, a setting, or an integration.",
  },
  {
    sn: "Step 03 · Week 3+",
    title: "You focus on building",
    body:
      "Agents run autonomously. You get weekly performance reports. We manage everything on the back end. If something's off, we fix it before you notice.",
  },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-serif text-2xl font-extrabold tracking-tight ${className}`}
      style={{ letterSpacing: "0.02em" }}
    >
      MOON<span style={{ color: "#c8501e" }}>HOUSE</span>
    </span>
  );
}

function CTAButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "dark";
}) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.12em] transition-colors duration-150";
  const styles =
    variant === "dark"
      ? "bg-[#1a1a1a] text-[#fbf8f3] hover:bg-[#c8501e]"
      : "bg-[#c8501e] text-white hover:bg-[#1a1a1a]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="font-serif">
      {/* 1. NAV */}
      <nav className="sticky top-0 z-50 border-b border-[#e5dfd3] bg-[#fbf8f3]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Wordmark />
          <CTAButton href={CALENDLY_URL}>Book a call</CTAButton>
        </div>
      </nav>

      {/* Section top rule */}
      <div className="h-[4px] w-full bg-[#c8501e]" />

      {/* 2. HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <div className="mb-8 flex items-start justify-between gap-8 border-b border-[#e5dfd3] pb-6 font-mono text-xs tracking-wide text-[#555]">
          <div className="font-serif text-lg font-extrabold">
            MOONHOUSE <span className="font-mono text-[10px] font-normal tracking-wider text-[#555]">VENTURES, LLC · DBA MOONHOUSE</span>
          </div>
          <div>
            {EMAIL} · {PHONE}
          </div>
        </div>

        <p className="label">AI Back Office — Built for General Contractors</p>
        <h1 className="mt-4 text-[clamp(2.25rem,5.5vw,4rem)]">
          The GC who responds first
          <br /> wins 78% of jobs.
        </h1>
        <h2 className="mt-2 text-[clamp(1.5rem,3.5vw,2.25rem)] font-normal italic text-[#666]">
          Are you that GC?
        </h2>
        <p className="mt-6 max-w-3xl text-lg text-[#333]">
          The average contractor takes 48 hours to respond to a lead. The one who
          responds in 5 minutes wins 78% of the time. MoonHouse responds in 60
          seconds — even when you're on a job site. Built by working GCs. Deployed
          in two weeks. Runs autonomously.
        </p>

        {/* Stat row */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <StatCell
            k="Average GC response time"
            v="48 hrs"
            d="Industry average for a new inquiry"
          />
          <StatCell
            k="MoonHouse response time"
            v="60 sec"
            d="Every lead. Every day. 24/7."
          />
          <StatCell
            k="Win rate — responding first"
            v="78%"
            d="vs. 17% responding after one hour"
          />
        </div>
      </section>

      {/* 3. COST OF INACTION */}
      <section className="border-t border-[#e5dfd3]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="label">The Cost of Inaction</p>
          <h2 className="mt-4">You're already paying for this. Just not to us.</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#333]">
            The admin overhead crushing your margins isn't invisible. Here's what
            it's actually costing your business every year.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <CostCell
              ctx="3 missed jobs/yr at a $300K avg. project value, 15% net margin"
              big="$135K"
              desc="In lost margin — gone to the GC who picked up the phone"
            />
            <CostCell
              ctx="20 hrs/week on admin at $150/hr of your own time as a working GC"
              big="$156K"
              desc="Per year in owner time on work that shouldn't require you"
            />
            <CostCell
              ctx="One office coordinator — fully loaded with salary, benefits, overhead"
              big="$65–80K"
              desc="Per year — plus management burden and turnover risk"
            />
          </div>
        </div>

        {/* Dark CTA bar */}
        <div className="bg-[#1a1a1a]">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-8 text-[#fbf8f3] md:flex-row md:items-center">
            <p className="max-w-2xl italic text-base">
              MoonHouse Professional costs less than one bad month of missed leads
              — and roughly half what you'd pay a full-time hire.
            </p>
            <div className="text-right">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#c8501e]">
                Professional Plan
              </div>
              <div className="font-serif text-4xl font-extrabold text-[#c8501e]">
                $3,500
                <span className="text-lg font-normal text-[#fbf8f3]"> / mo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SYSTEM — 6 MODULES */}
      <section className="border-t border-[#e5dfd3]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="label">The System</p>
          <h2 className="mt-4">Six things it handles. Zero things you manage.</h2>

          <div className="mt-10 grid gap-x-10 gap-y-2 md:grid-cols-2">
            {MODULES.map((m) => (
              <div
                key={m.n}
                className="flex gap-4 border-t border-[#e5dfd3] py-5"
              >
                <div className="w-8 text-3xl font-light leading-none text-[#c8c0b0]">
                  {m.n}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-extrabold">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#444]">
                    {m.body}
                  </p>
                  <div className="mt-3 inline-block border-l-2 border-[#c8501e] bg-[#fdf3ea] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#c8501e]">
                    {m.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="border-t border-[#e5dfd3]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="label">How It Works</p>
          <h2 className="mt-4">Live in two weeks. Not two quarters.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.sn} className="border border-[#e5dfd3] bg-white/40 p-6">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#c8501e]">
                  {s.sn}
                </div>
                <h3 className="mt-3 text-lg font-extrabold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#555]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GUARANTEE */}
      <section>
        <div className="bg-[#c8501e] text-white">
          <div className="mx-auto max-w-6xl px-6 py-10">
            <h3 className="text-2xl font-extrabold">
              If it doesn't pay for itself in 90 days, you get your money back.
            </h3>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed">
              We ran this on our own businesses for six months before offering it
              to anyone. We know it works. If MoonHouse doesn't generate
              measurable ROI within 90 days — leads converted, hours recovered,
              admin costs reduced — we'll refund every dollar of your monthly
              fees. No clauses. No argument.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FOUNDER QUOTE */}
      <section className="border-t border-[#e5dfd3]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="label">Built by GCs</p>

          <div className="mt-8 bg-[#efeae0] p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-24 w-20 flex-shrink-0 items-center justify-center border-t-4 border-[#c8501e] bg-[#1a1a1a] text-2xl font-extrabold text-[#c8501e]">
                KS
              </div>
              <div className="flex-1 border-l-4 border-[#c8501e] pl-6">
                <p className="italic leading-relaxed text-[#333]">
                  &ldquo;I run Schneider Construction &amp; Development in LA —
                  residential remodels, ADUs, restaurant build-outs. For years I
                  was the GC who responded in 48 hours. Not because I didn't
                  care — because I was on a job site all day and doing admin from
                  9pm to midnight. We built this system for my own business first
                  and tested it for six months. The results: zero missed leads,
                  client communication issues dropped to nothing, and I got 20
                  hours a week back. We're not selling software for you to figure
                  out yourself — we deploy the whole system, configure every
                  agent, and manage it ongoing. Live in two weeks.&rdquo;
                </p>
                <div className="mt-4 font-mono text-xs font-bold">
                  KYLE SCHNEIDER
                </div>
                <div className="font-mono text-[11px] text-[#666]">
                  Co-Founder, MoonHouse Ventures, LLC · GC, Schneider Construction
                  &amp; Development
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING */}
      <section className="border-t border-[#e5dfd3]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="label">Pricing</p>
          <h2 className="mt-4">Simple pricing. Measurable return.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <PriceCard
              name="Starter"
              price="$2,000"
              setup="+ $2,500 one-time setup"
              tag="The 3 workflows costing you the most revenue"
              features={[
                "Lead Response (60-sec, 24/7)",
                "Pipeline Follow-Up Automation",
                "Weekly Cash Flow Report",
                "Full setup & configuration",
                "Weekly performance reports",
              ]}
              foot="Right fit for starting with what matters most."
            />
            <PriceCard
              name="Professional"
              price="$3,500"
              setup="+ $4,500 one-time setup"
              tag="The full autonomous back office"
              features={[
                "Everything in Starter",
                "Daily Command Center Briefing",
                "Automated Client Communication",
                "Bi-weekly Content Engine",
                "Full autonomous operations",
              ]}
              foot="The complete system. Most GCs start here and never look back."
              featured
            />
            <PriceCard
              name="Enterprise"
              price="$5,000"
              setup="+ $7,500 one-time setup"
              tag="For GCs scaling past $5M"
              features={[
                "Everything in Professional",
                "Custom integrations (Procore, etc.)",
                "Priority support & response",
                "Dedicated account management",
                "Unlimited agent customization",
              ]}
              foot="For operations needing deep integrations and a hands-on partner."
            />
          </div>

          <div className="mt-10 border-y border-[#e5dfd3] py-4 text-center font-mono text-xs text-[#666]">
            12-month agreement · Setup fee due at signing · Includes configuration
            &amp; ongoing management · 90-day ROI guarantee
          </div>

          {/* 9. FOUNDING COHORT */}
          <div className="mt-8 border border-dashed border-[#c8501e] bg-[#fdf3ea] p-6 text-center">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#c8501e]">
              Founding Cohort — First 10 Clients Only
            </div>
            <div className="mt-2 text-base font-bold">
              6-month pilot agreement · 50% off setup fee · Locked-in monthly
              rate
            </div>
            <div className="mt-1 text-sm italic text-[#555]">
              We're hand-picking 10 GCs to launch with. After the cohort fills,
              all new clients move to the standard 12-month agreement.
            </div>
          </div>
        </div>
      </section>

      {/* 10. CLOSING CTA */}
      <section className="border-t border-[#e5dfd3]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2>See exactly what this looks like for your business.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#555]">
            Not a sales pitch. A 30-minute call where we review your current
            workflow and tell you honestly — with numbers — whether MoonHouse
            makes sense for you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <CTAButton href={CALENDLY_URL}>
              Book a 30-minute intro call
            </CTAButton>
            <div className="text-lg font-extrabold text-[#c8501e]">
              {EMAIL} &nbsp;|&nbsp; {PHONE}
            </div>
            <div className="font-mono text-[10px] tracking-[0.12em] text-[#888]">
              30 MINUTES · FREE · HONEST WORKFLOW ASSESSMENT
            </div>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="border-t border-[#e5dfd3]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 font-mono text-[10px] tracking-[0.1em] text-[#888] md:flex-row md:justify-between">
          <div>
            MOONHOUSE VENTURES, LLC · DBA MOONHOUSE · Los Angeles, CA ·
            moonhouse.ai
          </div>
          <div>© 2026 MoonHouse Ventures, LLC. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}

function StatCell({ k, v, d }: { k: string; v: string; d: string }) {
  return (
    <div className="border border-[#f0ddc8] bg-[#fdf3ea] p-5">
      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#c8501e]">
        {k}
      </div>
      <div className="mt-2 text-4xl font-extrabold leading-none">{v}</div>
      <div className="mt-2 text-sm text-[#666]">{d}</div>
    </div>
  );
}

function CostCell({
  ctx,
  big,
  desc,
}: {
  ctx: string;
  big: string;
  desc: string;
}) {
  return (
    <div className="border-t-4 border-[#c8501e] pt-4">
      <div className="min-h-[48px] text-sm italic text-[#777]">{ctx}</div>
      <div className="mt-3 text-5xl font-extrabold leading-none">{big}</div>
      <div className="mt-3 text-sm text-[#555]">{desc}</div>
    </div>
  );
}

function PriceCard({
  name,
  price,
  setup,
  tag,
  features,
  foot,
  featured = false,
}: {
  name: string;
  price: string;
  setup: string;
  tag: string;
  features: string[];
  foot: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`relative p-6 ${
        featured
          ? "border-none bg-[#1a1a1a] text-[#fbf8f3]"
          : "border border-[#e5dfd3] bg-white/40"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c8501e] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-white">
          Most Popular
        </div>
      )}
      <div className="text-lg font-extrabold">{name}</div>
      <div className="mt-2 text-4xl font-extrabold leading-none text-[#c8501e]">
        {price}
      </div>
      <div className={`font-mono text-[10px] ${featured ? "text-[#aaa]" : "text-[#666]"}`}>
        PER MONTH
      </div>
      <div className="mt-2 font-mono text-[11px] font-bold text-[#c8501e]">
        {setup}
      </div>
      <div
        className={`mt-3 min-h-[40px] text-sm ${
          featured ? "text-[#bbb]" : "text-[#555]"
        }`}
      >
        {tag}
      </div>
      <ul className="mt-3 space-y-1.5">
        {features.map((f) => (
          <li key={f} className="flex gap-2 text-sm">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#c8501e]" />
            <span className={featured ? "text-[#fbf8f3]" : "text-[#333]"}>
              {f}
            </span>
          </li>
        ))}
      </ul>
      <div
        className={`mt-4 text-xs italic ${
          featured ? "text-[#aaa]" : "text-[#777]"
        }`}
      >
        {foot}
      </div>
    </div>
  );
}
