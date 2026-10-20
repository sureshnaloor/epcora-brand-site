import { motion } from 'framer-motion';
import {
  CalendarClock,
  Landmark,
  Sparkles,
  ShieldAlert,
  CreditCard,
  BellRing,
  AlertTriangle,
  FileText,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

/* ---- Mock 1: PO schedule workspace ---- */
const TAB_STATES = [
  { name: 'Design', note: 'Drawings Rev C approved' },
  { name: 'Inspection', note: 'ITP — 8 of 12 tests passed' },
  { name: 'Payments', note: 'Milestone 3 released · PBG expiring in 19 days', warn: true },
  { name: 'Progress', note: 'Fabrication photos received · sub-supplier PO ack’d' },
  { name: 'Shipping', note: 'Customs filed · transport permit pending' },
  { name: 'Delivery', note: 'Post-delivery inspection scheduled' },
];

function ScheduleWorkspaceMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">PO Schedule Workspace</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">Six dimensions, one screen</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">
          <CalendarClock size={11} /> PO-4510082
        </span>
      </div>

      <div className="mt-5 border border-line bg-mist/50 p-4">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-navy">
          <FileText size={14} className="text-golddeep" />
          Centrifugal Pump Package · FlowServe Gulf FZE
        </div>
        <div className="mt-1 text-[11px] text-body">Project: PX-114 Desalination EPC · Contractual delivery: 15 Dec 2026</div>
      </div>

      <div className="mt-4 space-y-2.5">
        {TAB_STATES.map(t => (
          <div
            key={t.name}
            className={`flex items-center justify-between border px-4 py-2.5 text-[13px] ${
              t.warn ? 'border-amber-200 bg-amber-50' : 'border-line'
            }`}
          >
            <span className={`font-medium ${t.warn ? 'text-amber-800' : 'text-navy'}`}>{t.name}</span>
            <span className={`flex items-center gap-1.5 font-display text-[12px] font-bold ${t.warn ? 'text-amber-700' : 'text-primary'}`}>
              {t.warn && <AlertTriangle size={11} />}
              {t.note}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 border-t border-line pt-4 text-[11px] text-body/70">
        Design approvals, ITPs, payments &amp; guarantees, progress, shipping and delivery — the whole PO lifecycle in one place.
      </p>
    </div>
  );
}

/* ---- Mock 2: guarantee & LC alert list ---- */
const ALERT_ROWS = [
  { po: 'PO-4510082', vendor: 'FlowServe Gulf FZE', type: 'PBG', left: '19 days', tone: 'amber' },
  { po: 'PO-4510117', vendor: 'AlFanar Electricals', type: 'ABG', left: 'Expired', tone: 'red' },
  { po: 'PO-4509964', vendor: 'Meridian Piping Co.', type: 'LC', left: '26 days', tone: 'amber' },
  { po: 'PO-4510203', vendor: 'Gulf Valves & Controls', type: 'PBG', left: 'Valid', tone: 'green' },
];

const TONE = {
  red: 'bg-red-100 text-red-700',
  amber: 'bg-amber-100 text-amber-700',
  green: 'bg-emerald-100 text-emerald-700',
};

function GuaranteeAlertMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Bank Guarantee &amp; LC Alerts</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">Cover watched on every open PO</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-red-700">
          <BellRing size={11} /> 2 need action
        </span>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[420px] text-left text-[12px]">
          <thead>
            <tr className="border-b border-line font-display text-[10px] font-bold uppercase tracking-wider text-body">
              <th className="py-2 pr-3">PO</th>
              <th className="py-2 pr-3">Vendor</th>
              <th className="py-2 pr-3">Instrument</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line/70 text-body">
            {ALERT_ROWS.map(r => (
              <tr key={r.po}>
                <td className="py-2 pr-3 font-semibold text-primary">{r.po}</td>
                <td className="py-2 pr-3">{r.vendor}</td>
                <td className="py-2 pr-3 font-medium text-navy">
                  <span className="flex items-center gap-1.5">
                    {r.type === 'LC' ? <CreditCard size={12} className="text-secondary" /> : <Landmark size={12} className="text-golddeep" />}
                    {r.type}
                  </span>
                </td>
                <td className="py-2">
                  <span className={`rounded-full px-2 py-0.5 text-[9px] font-bold uppercase ${TONE[r.tone]}`}>{r.left}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 border border-line bg-navy p-4">
        <div className="flex items-center gap-2 font-display text-[10px] font-bold uppercase tracking-widest text-gold">
          <ShieldAlert size={12} /> PO alert report · comment actions attached
        </div>
        <p className="mt-2 text-[12px] leading-relaxed text-white/70">
          Expired guarantee on PO-4510117 — action logged: “Vendor asked to extend ABG before next milestone payment.”
        </p>
      </div>

      <p className="mt-4 border-t border-line pt-4 text-[11px] text-body/70">
        Guarantee return status tracked through close-out — nothing lapses silently.
      </p>
    </div>
  );
}

/* ---- Mock 3: AI expediting brief ---- */
function AiBriefMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">AI Expediting Brief</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">The whole thread, read for you</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
          <Sparkles size={11} /> Generated from PO-4510082
        </span>
      </div>

      <div className="mt-5 space-y-4 text-[13px] leading-relaxed text-body">
        <div className="border-l-2 border-secondary pl-4">
          <div className="font-display text-[11px] font-bold uppercase tracking-widest text-secondary">Where this PO stands</div>
          <p className="mt-1.5">
            Manufacturing is on plan, but the inspection call-off has slipped twice in the follow-up thread. Payment
            milestone 3 is released; the PBG expires 19 days before contractual delivery.
          </p>
        </div>
        <div className="border-l-2 border-amber-400 pl-4">
          <div className="font-display text-[11px] font-bold uppercase tracking-widest text-amber-600">Suspected delay causes</div>
          <p className="mt-1.5">
            Vendor sub-supplier for impellers not yet confirmed; FAT inspector availability flagged in two consecutive
            updates without resolution.
          </p>
        </div>
        <div className="border-l-2 border-gold pl-4">
          <div className="font-display text-[11px] font-bold uppercase tracking-widest text-golddeep">Suggestions to expedite</div>
          <p className="mt-1.5">
            Request PBG extension before milestone 4; book the FAT window this week; ask vendor to confirm impeller
            sub-order in writing within 5 working days.
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <span className="text-[11px] text-body/70">Reads schedule + follow-up thread + BG/LC data</span>
        <button className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-wider text-white">
          Export PDF Report
        </button>
      </div>
    </div>
  );
}

export default function SPEShowcase() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="See it in action"
          title="Track. Watch. Expedite."
          sub="A walkthrough of the screens your expediting team will live in — from the six-dimension schedule workspace to the AI brief that ends the guesswork."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div {...reveal}>
            <ScheduleWorkspaceMock />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
              01 — The schedule behind every PO
            </p>
          </motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <GuaranteeAlertMock />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
              02 — The alert stream behind every guarantee
            </p>
          </motion.div>
        </div>

        <motion.div {...reveal} className="mt-8">
          <AiBriefMock />
          <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
            03 — The AI brief behind every recovery plan
          </p>
        </motion.div>
      </div>
    </section>
  );
}
