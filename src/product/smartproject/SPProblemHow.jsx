import { motion } from 'framer-motion';
import {
  Unplug,
  Droplets,
  Timer,
  FileWarning,
  Network,
  Lock,
  Play,
  SlidersHorizontal,
  ShieldCheck,
  GitBranch,
  CopyCheck,
  History,
  ArrowRight,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const PAINS = [
  {
    icon: Unplug,
    title: 'Siloed Systems',
    desc: 'Scheduling tools like MS Project and Primavera P6 operate independently of the finance database — so the plan and the money never agree.',
  },
  {
    icon: Droplets,
    title: 'Budget Leakage',
    desc: 'Overruns are detected weeks after they occur, because cost is monitored at coarse levels instead of per activity.',
  },
  {
    icon: Timer,
    title: 'Resource Underutilization',
    desc: 'Expensive machinery, tools and labor crews sit idle while another project rents the same thing — pure visibility failure.',
  },
  {
    icon: FileWarning,
    title: 'Weak Governance',
    desc: 'Scope creep and accidental edits to baselines corrupt the historical audit trail — and sink your claims position.',
  },
];

const IMPACTS = [
  ['Late overrun detection', 'Overruns surface weeks after they occur', 'Margin erosion discovered at close-out'],
  ['Idle machinery & crews', 'Ownership & rental costs burn with zero output', 'Cross-project double booking'],
  ['Baseline scope creep', 'Corrupted historical record', 'Disputed variations & change orders'],
  ['Disconnected plan & finance', 'Re-keying data between P6 and ERP', 'Decisions made on stale numbers'],
];

export function SPProblem() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Why complex projects fail"
          title="The plan lives in one tool. The money lives in another."
          sub="On complex engineering and construction projects, schedules, budgets and resources drift apart silently — and by the time the variance shows up in a report, the damage is done."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PAINS.map((p, i) => (
            <motion.div key={p.title} {...reveal} transition={{ ...reveal.transition, delay: i * 0.08 }} className="service-card group">
              <div className="icon-chip">
                <p.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* impact table */}
        <motion.div {...reveal} className="mt-16 overflow-hidden border border-line shadow-card">
          <div className="bg-primary px-6 py-4">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white">
              What poor project controls cost your business
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-mist font-display text-xs font-bold uppercase tracking-wider text-primary">
                  <th className="px-6 py-4">Failure Mode</th>
                  <th className="px-6 py-4">Financial Impact</th>
                  <th className="px-6 py-4">Operational Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-body">
                {IMPACTS.map(([a, b, c]) => (
                  <tr key={a} className="transition-colors hover:bg-mist/60">
                    <td className="px-6 py-4 font-semibold text-navy">{a}</td>
                    <td className="px-6 py-4">{b}</td>
                    <td className="px-6 py-4">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    icon: Network,
    step: '01',
    title: 'Structure',
    desc: 'Build a 9-level WBS where every branch terminates in execution-ready Work Packages — or import the whole structure from Primavera P6 / your ERP via CSV or Excel.',
  },
  {
    icon: Lock,
    step: '02',
    title: 'Baseline',
    desc: 'Finalize to lock the structure — no edits, deletions or additions afterwards. Change flows through audit-proof Project Amendments, never silent edits.',
  },
  {
    icon: Play,
    step: '03',
    title: 'Execute',
    desc: 'Field progress, timesheets and purchase orders post directly against work packages — every dollar and hour lands on a specific activity.',
  },
  {
    icon: SlidersHorizontal,
    step: '04',
    title: 'Control',
    desc: 'Live earned value metrics, CPI flags, utilization timelines and risk warnings — underperformance is flagged the day it happens, not weeks later.',
  },
];

const GOVERNANCE = [
  {
    icon: Lock,
    title: 'Lock-on-Finalize',
    desc: 'Finalizing freezes the WBS tree — edit, delete and add are disabled in both UI and API.',
    a: '#074E84',
  },
  {
    icon: GitBranch,
    title: 'Project Amendments',
    desc: 'Revising a locked baseline means creating a versioned copy — {project}_amd_1, amd_2 — with an unlocked WBS.',
    a: '#2380C6',
  },
  {
    icon: CopyCheck,
    title: 'Controlled Access',
    desc: 'Only the project creator or an admin may create amendments — behind an explicit destructive confirmation.',
    a: '#E8A020',
  },
  {
    icon: History,
    title: 'Audit-Proof History',
    desc: 'A complete modification log across every amendment version — your claims and variations stay defensible.',
    a: '#0E9F8A',
  },
];

export function SPHowItWorks() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="How it works"
          title="Structure. Baseline. Execute. Control."
          sub="SmartProject unifies Gantt scheduling, granular work-package cost control and resource utilization in one system — so plan, money and field reality never drift apart."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.08 }}
              className="service-card group relative bg-white"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="icon-chip mb-0">
                  <s.icon size={24} />
                </div>
                <span className="font-display text-4xl font-extrabold text-line">{s.step}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-primary">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <ArrowRight size={18} className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-secondary xl:block" />
              )}
            </motion.div>
          ))}
        </div>

        {/* governance panel */}
        <motion.div {...reveal} className="mt-16 bg-navy p-8 shadow-cardhover sm:p-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow !text-gold">Strict WBS governance</div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Baselines that cannot be quietly rewritten.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              <ShieldCheck size={14} className="mr-1 inline text-gold" />
              Scope change is a fact of project life. SmartProject makes it a governed, versioned event — not a silent
              edit nobody can trace.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GOVERNANCE.map(g => (
              <div key={g.title} className="border border-white/10 bg-white/5 p-5 transition-colors hover:border-gold/50">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white" style={{ backgroundColor: g.a }}>
                  <g.icon size={20} />
                </div>
                <div className="font-display text-sm font-bold uppercase tracking-wider text-white">{g.title}</div>
                <p className="mt-2 text-[13px] leading-relaxed text-white/65">{g.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
