import { motion } from 'framer-motion';
import {
  KeyRound,
  ShieldCheck,
  BadgeCheck,
  Award,
  FileDiff,
  Minus,
  Plus,
  Building2,
  Star,
  AlertTriangle,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

/* ---- Mock 1: vendor offer ingress ---- */
function OfferIngressMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Vendor Offer Link</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">Bidding without an account</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
          <ShieldCheck size={11} /> Passcode verified
        </span>
      </div>

      <div className="mt-5 border border-line bg-mist/50 p-4">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-navy">
          <KeyRound size={14} className="text-golddeep" />
          RFQ-2026-041 · Structural Steel Supply — 840 tons
        </div>
        <div className="mt-1 text-[11px] text-body">Invited: Meridian Metals LLC · Closes 28 Oct 2026, 17:00 GST</div>
      </div>

      <div className="mt-4 space-y-2.5">
        {[
          ['Unit price (per ton)', '$ 489.00'],
          ['Lead time', '8 weeks'],
          ['Incoterm', 'EXW — Jebel Ali'],
        ].map(([l, v]) => (
          <div key={l} className="flex items-center justify-between border border-line px-4 py-2.5 text-[13px]">
            <span className="text-body">{l}</span>
            <span className="font-display font-bold text-primary">{v}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-[11px] text-body/70">Revision 2 · requested by buyer with note attached</span>
        <button className="inline-flex items-center gap-2 bg-primary px-4 py-2.5 font-display text-[11px] font-bold uppercase tracking-wider text-white">
          Submit Revised Offer
        </button>
      </div>

      <p className="mt-4 border-t border-line pt-4 text-[11px] text-body/70">
        Vendors never see a login screen — the token is the identity, the passcode is the lock.
      </p>
    </div>
  );
}

/* ---- Mock 2: comparison statement with clause diff ---- */
const ROWS = [
  ['Evaluated price', '$412,500', '$438,900', '$455,200'],
  ['Lead time', '6 wks', '4 wks', '8 wks'],
  ['Incoterm', 'DAP', 'CIF', 'EXW'],
  ['Payment terms', '30 days', '45 days', '30 days'],
  ['Compliance', 'Full', 'Full', '2 deviations'],
];

function StatementMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Bid Comparison Statement</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">Every bid, normalized side by side</h4>
        </div>
        <span className="rounded-full bg-mist px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">
          Excel export ready
        </span>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[420px] text-left text-[12px]">
          <thead>
            <tr className="border-b border-line font-display text-[10px] font-bold uppercase tracking-wider text-body">
              <th className="py-2 pr-3"></th>
              <th className="py-2 pr-3 text-primary">Gulf Steel <BadgeCheck size={11} className="inline text-golddeep" /></th>
              <th className="py-2 pr-3">AlFanar Trading</th>
              <th className="py-2">Meridian Metals</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line/70 text-body">
            {ROWS.map(([label, a, b, c]) => (
              <tr key={label}>
                <td className="py-2 pr-3 font-medium text-navy">{label}</td>
                <td className="py-2 pr-3 font-semibold text-primary">{a}</td>
                <td className="py-2 pr-3">{b}</td>
                <td className={`py-2 ${label === 'Compliance' ? 'font-semibold text-amber-600' : ''}`}>{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* clause diff */}
      <div className="mt-5 border border-line bg-navy p-4 font-mono text-[11px] leading-relaxed">
        <div className="mb-2 flex items-center gap-2 font-display text-[10px] font-bold uppercase tracking-widest text-gold">
          <FileDiff size={12} /> Clause 14.2 — revision diff
        </div>
        <div className="flex items-start gap-2 text-red-300/90">
          <Minus size={11} className="mt-0.5 shrink-0" /> Warranty: 12 months from delivery date
        </div>
        <div className="flex items-start gap-2 text-emerald-300/90">
          <Plus size={11} className="mt-0.5 shrink-0" /> Warranty: 24 months from site acceptance
        </div>
      </div>

      <p className="mt-4 border-t border-line pt-4 text-[11px] text-body/70">
        Best-evaluated bid highlighted; every deviation diffed and on the record for the award committee.
      </p>
    </div>
  );
}

/* ---- Mock 3: vendor dossier ---- */
function DossierMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Vendor Dossier</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">A living profile for every supplier</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
          <BadgeCheck size={11} /> Verified · Active
        </span>
      </div>

      <div className="mt-5 flex items-center gap-4 border border-line bg-mist/50 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
          <Building2 size={22} />
        </div>
        <div>
          <div className="font-display text-sm font-bold text-primary">Gulf Steel Industries WLL</div>
          <div className="mt-0.5 text-[11px] text-body">Structural Steel · Process Equipment · Since 2011 · 3 EPC clients</div>
        </div>
        <div className="ml-auto text-right">
          <div className="font-display text-2xl font-extrabold text-golddeep">87%</div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-body">Match · RFQ-2026-041</div>
        </div>
      </div>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        <div className="border border-line px-4 py-3 text-[12px]">
          <div className="flex items-center justify-between">
            <span className="font-medium text-navy">ISO 9001:2015</span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold uppercase text-emerald-700">Valid</span>
          </div>
          <div className="mt-1 text-[11px] text-body/70">Expires 14 Mar 2028</div>
        </div>
        <div className="border border-amber-200 bg-amber-50 px-4 py-3 text-[12px]">
          <div className="flex items-center justify-between">
            <span className="font-medium text-navy">API 6D Licence</span>
            <span className="flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-bold uppercase text-amber-700">
              <AlertTriangle size={9} /> 38 days left
            </span>
          </div>
          <div className="mt-1 text-[11px] text-amber-800/80">Renewal reminder already sent</div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-4 text-[11px] text-body/70">
        <span className="flex items-center gap-1.5"><Star size={12} className="text-golddeep" /> Past work: 9 projects, $14M delivered</span>
        <span className="flex items-center gap-1.5"><Award size={12} className="text-secondary" /> Last compliance review: Compliant (annual)</span>
      </div>
    </div>
  );
}

export default function SPCShowcase() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="See it in action"
          title="Invite. Compare. Qualify."
          sub="A walkthrough of the screens your buyers and vendors will use — from the account-free offer link to the award-ready comparison statement."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div {...reveal}>
            <OfferIngressMock />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
              01 — The offer link every vendor can use
            </p>
          </motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <DossierMock />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
              02 — The dossier behind every supplier
            </p>
          </motion.div>
        </div>

        <motion.div {...reveal} className="mt-8">
          <StatementMock />
          <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
            03 — The comparison statement behind every award
          </p>
        </motion.div>
      </div>
    </section>
  );
}
