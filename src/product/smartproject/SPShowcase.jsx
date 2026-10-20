import { motion } from 'framer-motion';
import { Lock, AlertTriangle, TrendingUp, CheckCircle2, Coffee } from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

/* ---- Mock 1: WBS tree with budgets ---- */
const WBS_TREE = [
  { depth: 0, code: 'PRJ-ALPHA', name: 'Luxury Residence — Tower A', budget: '11.5M', tag: 'SUMMARY' },
  { depth: 1, code: '1.0', name: 'Substructure & Foundation', budget: '2.1M', tag: 'WBS' },
  { depth: 2, code: '1.1', name: 'Excavation & Shoring', budget: '640K', tag: 'WORK PACKAGE', wp: true },
  { depth: 2, code: '1.2', name: 'Piling & Raft Slab', budget: '1.2M', tag: 'WORK PACKAGE', wp: true },
  { depth: 1, code: '2.0', name: 'Superstructure', budget: '4.8M', tag: 'WBS' },
  { depth: 2, code: '2.1', name: 'Core & Columns L01–L08', budget: '2.3M', tag: 'WORK PACKAGE', wp: true },
  { depth: 2, code: '2.2', name: 'Post-Tension Slabs', budget: '1.9M', tag: 'WORK PACKAGE', wp: true },
];

function WbsMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">WBS Structure · Level 3 of 9</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">Every branch ends in a work package</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-navy px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-gold">
          <Lock size={10} /> Finalized
        </span>
      </div>

      <div className="mt-5 space-y-1.5">
        {WBS_TREE.map(n => (
          <div
            key={n.code}
            className={`flex items-center justify-between gap-3 border px-3.5 py-2.5 text-[13px] ${
              n.wp ? 'border-gold/50 bg-gold/10' : 'border-line bg-mist/50'
            }`}
            style={{ marginLeft: `${n.depth * 22}px` }}
          >
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="font-mono text-[11px] font-bold text-secondary">{n.code}</span>
              <span className="truncate font-medium text-navy">{n.name}</span>
            </div>
            <div className="flex shrink-0 items-center gap-2.5">
              <span className="font-display text-xs font-bold text-primary">${n.budget}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                  n.wp ? 'bg-gold text-ink' : 'bg-primary/10 text-primary'
                }`}
              >
                {n.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 border-t border-line pt-4 text-[11px] text-body/70">
        Budgets allocate at the work package — parent nodes always show allocated vs unallocated, and over-allocation
        beyond approved limits is blocked.
      </p>
    </div>
  );
}

/* ---- Mock 2: EVM cost control ---- */
const EVM = [
  { label: 'Planned Value (PV / BCWS)', value: '$4.20M', tone: 'text-primary' },
  { label: 'Earned Value (EV / BCWP)', value: '$3.86M', tone: 'text-primary' },
  { label: 'Actual Cost (AC / ACWP)', value: '$4.11M', tone: 'text-primary' },
];

function EvmMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Earned Value Management</div>
      <h4 className="mt-2 font-display text-xl font-bold text-primary">Cost performance, computed live</h4>

      <div className="mt-5 space-y-2.5">
        {EVM.map(e => (
          <div key={e.label} className="flex items-center justify-between border border-line bg-mist/50 px-4 py-3">
            <span className="text-[13px] text-body">{e.label}</span>
            <span className={`font-display text-base font-extrabold ${e.tone}`}>{e.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="border border-red-200 bg-red-50 p-4">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-red-600">
            <AlertTriangle size={11} /> CPI — Cost Performance
          </div>
          <div className="mt-1.5 font-display text-3xl font-extrabold text-red-600">0.94</div>
          <p className="mt-1 text-[11px] leading-snug text-red-700/80">Below 1.0 — WP 2.2 flagged instantly, not at month-end.</p>
        </div>
        <div className="border border-emerald-200 bg-emerald-50 p-4">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
            <TrendingUp size={11} /> EAC — Completion Forecast
          </div>
          <div className="mt-1.5 font-display text-3xl font-extrabold text-emerald-700">$12.2M</div>
          <p className="mt-1 text-[11px] leading-snug text-emerald-800/80">Projected from actual field performance, not hope.</p>
        </div>
      </div>

      <p className="mt-4 border-t border-line pt-4 text-[11px] text-body/70">
        Cost Variance (CV) rolls up at WBS Level 1, Level 2 or individual packages — drill from portfolio to activity in
        two clicks.
      </p>
    </div>
  );
}

/* ---- Mock 3: resource utilization timeline ---- */
const RESOURCES = [
  { name: 'Mobile Crane 50T · MC-07', own: 'Rental', bars: [{ s: 0, w: 42, idle: false }, { s: 42, w: 22, idle: true }, { s: 64, w: 36, idle: false }] },
  { name: 'Tower Crane · TC-02', own: 'Own', bars: [{ s: 0, w: 88, idle: false }, { s: 88, w: 12, idle: true }] },
  { name: 'Formwork Crew A · 14 pax', own: 'Own', bars: [{ s: 0, w: 30, idle: false }, { s: 30, w: 34, idle: true }, { s: 64, w: 36, idle: false }] },
  { name: 'Concrete Pump · CP-11', own: 'Rental', bars: [{ s: 0, w: 26, idle: true }, { s: 26, w: 50, idle: false }, { s: 76, w: 24, idle: true }] },
];

function UtilizationMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Resource Utilization · This Quarter</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">Active vs idle, across the whole company</h4>
        </div>
        <div className="flex shrink-0 gap-3 text-[10px] font-semibold text-body">
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-emerald-500" /> Active</span>
          <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-amber-400" /> Idle</span>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {RESOURCES.map((r, i) => (
          <div key={r.name}>
            <div className="mb-1.5 flex items-center justify-between text-[12px]">
              <span className="font-medium text-navy">{r.name}</span>
              <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
                r.own === 'Own' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
              }`}>{r.own}</span>
            </div>
            <div className="relative h-4 rounded bg-mist">
              {r.bars.map((b, j) => (
                <motion.div
                  key={j}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${b.w}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 + j * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                  className={`absolute top-0 h-full ${b.idle ? 'bg-amber-400/80' : 'bg-emerald-500/90'} ${j === 0 ? 'rounded-l' : ''} ${j === r.bars.length - 1 ? 'rounded-r' : ''}`}
                  style={{ left: `${b.s}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4 text-[11px] text-body/70">
        <span className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-emerald-600" /> Timesheet-synchronized deployments</span>
        <span className="flex items-center gap-1.5"><Coffee size={12} className="text-amber-500" /> Idle time visible before it costs you</span>
      </div>
    </div>
  );
}

export default function SPShowcase() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="See it in action"
          title="Structure. Measure. Utilize."
          sub="A walkthrough of the screens your project controls team will live in — from the WBS tree to earned value to company-wide utilization."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div {...reveal}>
            <WbsMock />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
              01 — The WBS tree every package hangs from
            </p>
          </motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <EvmMock />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
              02 — The earned value engine behind every decision
            </p>
          </motion.div>
        </div>

        <motion.div {...reveal} className="mt-8">
          <UtilizationMock />
          <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
            03 — The utilization timeline behind every resource call
          </p>
        </motion.div>
      </div>
    </section>
  );
}
