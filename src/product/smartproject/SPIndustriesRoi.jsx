import { motion } from 'framer-motion';
import { FileUp, Wallet, Lock, LineChart } from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const IMG = '/images/products/smartproject';

const INDUSTRIES = [
  {
    img: `${IMG}/project-1.jpg`,
    name: 'Construction & EPC',
    desc: 'Deep WBS structures and work-package cost control on complex, multi-year builds.',
  },
  {
    img: `${IMG}/project-2.jpg`,
    name: 'Infrastructure & Utilities',
    desc: 'Amendment-proof baselines and earned value governance for public-scale programs.',
  },
  {
    img: `${IMG}/project-3.jpg`,
    name: 'Oil, Gas & Energy',
    desc: 'HSE registers, certified resources and strict change control on live facilities.',
  },
  {
    img: `${IMG}/hero-construction.png`,
    name: 'Industrial & Turnarounds',
    desc: 'Shutdown and turnaround scheduling where every idle hour is billed.',
  },
];

const ROI = [
  { value: 'Zero', label: 'Budget Leakages', note: 'Overruns are stopped at the execution level before they grow.' },
  { value: 'Max', label: 'Asset Utilization', note: 'Idle cost on expensive machinery, tools and crews designed out.' },
  { value: '100%', label: 'Bulletproof Compliance', note: 'Clean, versioned history of every project change via Amendments.' },
  { value: 'One', label: 'Shared Workspace', note: 'Schedules, field progress, budgets and risks in a single hub.' },
];

const ONBOARD = [
  {
    icon: FileUp,
    step: 'Step 1',
    title: 'Import Your WBS',
    desc: 'CSV or Excel straight out of Primavera P6 or your ERP — smart column-alias auto-mapping does the heavy lifting.',
  },
  {
    icon: Wallet,
    step: 'Step 2',
    title: 'Budget Work Packages',
    desc: 'Allocate cost at the activity level; summary nodes track allocated vs unallocated in real time.',
  },
  {
    icon: Lock,
    step: 'Step 3',
    title: 'Finalize & Baseline',
    desc: 'Lock the structure. From here on, change flows through versioned Project Amendments — never silent edits.',
  },
  {
    icon: LineChart,
    step: 'Step 4',
    title: 'Track & Control',
    desc: 'Timesheets, POs and field progress post to work packages; CPI flags and EAC forecasts go live immediately.',
  },
];

export default function SPIndustriesRoi() {
  return (
    <>
      {/* industries */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Built for project-driven industries"
            title="Wherever baselines and budgets decide success"
            sub="SmartProject adapts to any operation where schedules, cost and resources must move in lockstep."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                {...reveal}
                transition={{ ...reveal.transition, delay: (i % 4) * 0.08 }}
                className="group relative overflow-hidden shadow-card transition-shadow duration-500 hover:shadow-cardhover"
              >
                <img
                  src={ind.img}
                  alt={ind.name}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-2 h-0.5 w-10 bg-gold transition-all duration-500 group-hover:w-16" />
                  <h3 className="font-display text-lg font-bold text-white">{ind.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-white/75">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI band */}
      <section className="bg-denim relative overflow-hidden py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 90px)' }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHead dark center eyebrow="The ROI of SmartProject" title="Control you can take to the bank" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROI.map((r, i) => (
              <motion.div
                key={r.label}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.08 }}
                className="border border-white/10 bg-white/5 p-7 text-center transition-colors hover:border-gold/50"
              >
                <div className="font-display text-5xl font-extrabold text-gold">{r.value}</div>
                <div className="mt-2 font-display text-sm font-bold uppercase tracking-wider text-white">{r.label}</div>
                <p className="mt-3 text-[13px] leading-relaxed text-white/65">{r.note}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...reveal} className="mx-auto mt-12 max-w-2xl text-center font-display text-xl font-semibold text-white">
            “The plan, the money and the field — finally telling the same story.”
          </motion.p>
        </div>
      </section>

      {/* onboarding */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...reveal}>
              <div className="eyebrow mb-5">Deployment &amp; onboarding</div>
              <h2 className="bordered-heading text-3xl sm:text-4xl">From P6 export to live control in days</h2>
              <p className="mt-5 text-lg leading-relaxed text-body">
                Bring your existing WBS with you, baseline it, and let earned value and utilization go live — no
                re-modeling, no re-keying, no multi-month implementation.
              </p>
              <div className="relative mt-8">
                <div className="absolute -left-5 -top-5 h-28 w-28 border-8 border-gold/70" />
                <img
                  src={`${IMG}/hero-construction.png`}
                  alt="Project controls office overlooking a construction site"
                  loading="lazy"
                  className="relative w-full object-cover shadow-cardhover"
                  style={{ height: 300 }}
                />
              </div>
            </motion.div>

            <div className="space-y-5">
              {ONBOARD.map((s, i) => (
                <motion.div
                  key={s.step}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.08 }}
                  className="service-card group flex items-start gap-5 !p-6"
                >
                  <div className="icon-chip mb-0 shrink-0">
                    <s.icon size={22} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-golddeep">{s.step}</div>
                    <h3 className="mt-1 font-display text-lg font-bold text-primary">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-body">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
