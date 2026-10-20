import { motion } from 'framer-motion';
import {
  EyeOff,
  Landmark,
  FileWarning,
  MessageSquareOff,
  PackageCheck,
  CalendarClock,
  MessagesSquare,
  Flag,
  BellRing,
  CreditCard,
  Truck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const PAINS = [
  {
    icon: EyeOff,
    title: 'Silence After Award',
    desc: 'The PO goes out — then nothing is heard until the contractual delivery date is already behind you.',
  },
  {
    icon: Landmark,
    title: 'Guarantee Expiry Surprises',
    desc: 'Advance and performance bank guarantees lapse unnoticed — financial cover gone exactly when you need it.',
  },
  {
    icon: FileWarning,
    title: 'Documentation Gaps',
    desc: 'POs without vendor docs, missing drawings, unsigned compliance certificates — discovered at customs or commissioning, not before.',
  },
  {
    icon: MessageSquareOff,
    title: 'Lost Follow-Up Trail',
    desc: 'Expediting calls, promises and revised dates scattered across inboxes — nothing to hold a vendor to when disputes arrive.',
  },
];

const IMPACTS = [
  ['Untracked PO schedules', 'Slippage found too late to recover', 'Idle crews & delayed commissioning'],
  ['Expired ABG / PBG cover', 'Financial exposure on advance payments', 'Audit findings & unrecoverable claims'],
  ['Missing vendor documents', 'Shipments blocked at inspection or customs', 'Demurrage & re-order costs'],
  ['Verbal follow-ups only', 'No record of committed dates', 'Unenforceable vendor accountability'],
];

export function SPEProblem() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="The expediting reality"
          title="Placing the PO was the easy part"
          sub="For an EPC project, everything that happens between award and delivery decides whether the site keeps moving. Schedules, guarantees, documents and follow-ups — unmanaged, they quietly become delays."
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
              What unmanaged post-PO execution costs your project
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-mist font-display text-xs font-bold uppercase tracking-wider text-primary">
                  <th className="px-6 py-4">Failure Mode</th>
                  <th className="px-6 py-4">Commercial Impact</th>
                  <th className="px-6 py-4">Project Risk</th>
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
    icon: PackageCheck,
    step: '01',
    title: 'Award & Load',
    desc: 'Open POs load in with their full schedule — design approvals, inspection test plans, payments & guarantees, progress, shipping and delivery.',
  },
  {
    icon: CalendarClock,
    step: '02',
    title: 'Track',
    desc: 'All six dimensions of every PO stay visible at all times — from design submission through post-delivery inspections and claims.',
  },
  {
    icon: MessagesSquare,
    step: '03',
    title: 'Follow Up',
    desc: 'Every call, promise and revised date goes into the PO follow-up thread — then the AI brief reads it and tells you what to do next.',
  },
  {
    icon: Flag,
    step: '04',
    title: 'Close Out',
    desc: 'Guarantees returned, documents complete, delivery and post-delivery forms closed — and the lesson lands in Lessons Learnt.',
  },
];

const ALERTS = [
  { icon: BellRing, name: 'Delivery Alerts', desc: 'Open POs approaching or past their delivery date — flagged before the site feels it.' },
  { icon: Landmark, name: 'Bank Guarantee Alerts', desc: 'Expired ABG / PBG cover on open POs, raised with the PO alert report and comment actions.' },
  { icon: CreditCard, name: 'LC Alerts', desc: 'Letter-of-credit status and deadlines watched alongside the payment schedule.' },
  { icon: FileWarning, name: 'Document Compliance', desc: 'Vendors with POs but no documents, and POs with missing documents — listed, not discovered.' },
];

export function SPEHowItWorks() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="How it works"
          title="From award to close-out in four moves"
          sub="SmartExpediteSimple keeps the whole post-PO lifecycle in one place — so the expediting conversation happens around facts, dates and documents, not memory."
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

        {/* alert governance panel */}
        <motion.div {...reveal} className="mt-16 bg-navy p-8 shadow-cardhover sm:p-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow !text-gold">Always-on alert streams</div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Nothing expires unnoticed. Ever.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              <ShieldCheck size={14} className="mr-1 inline text-gold" />
              Four watch streams run continuously over every open PO — delivery, guarantees, letters of credit and
              document compliance.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ALERTS.map(a => (
              <div key={a.name} className="border border-white/10 bg-white/5 p-5 transition-colors hover:border-gold/50">
                <div className="mb-3 flex items-center gap-2">
                  <a.icon size={16} className="text-gold" />
                  <span className="font-display text-[11px] font-bold uppercase tracking-wider text-white">{a.name}</span>
                </div>
                <p className="text-[13px] leading-relaxed text-white/65">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-[12px] text-white/60">
            <span className="flex items-center gap-2"><Truck size={13} className="text-gold" /> PR → PO → Delivery → Post-Delivery tracking forms</span>
            <span className="flex items-center gap-2"><Sparkles size={13} className="text-gold" /> AI analysis of every follow-up thread</span>
            <span className="flex items-center gap-2"><ShieldCheck size={13} className="text-gold" /> Guarantee return status tracked to close-out</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
