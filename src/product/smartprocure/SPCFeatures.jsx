import { motion } from 'framer-motion';
import {
  FileUp,
  KeyRound,
  FileSpreadsheet,
  Scale,
  FileDiff,
  Building2,
  Sparkles,
  Recycle,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const FEATURES = [
  {
    icon: FileUp,
    title: 'Tender & RFQ Management',
    desc: 'Complete tender packs with drawings, specs and BOQ — organized, versioned and tagged.',
    points: ['Tender packs up to 10 files / 50 MB each', 'BOQ browser & sheet views for line-item clarity', 'Material & service group tagging drives sourcing'],
  },
  {
    icon: KeyRound,
    title: 'Secure Offer Links',
    desc: 'Vendors bid through a tokenized link and passcode — no accounts, no portal onboarding.',
    points: ['Unique token + passcode per invite', 'Submit, revise and track offers in place', 'Revision requests handled inside the same link'],
  },
  {
    icon: FileSpreadsheet,
    title: 'Online + Excel Bid Intake',
    desc: 'Meet vendors where they are — structured web bids and classic Excel quotations in one register.',
    points: ['Guided bid form with validation', 'Offline bid ingestion from .xlsx quotations', 'Every bid normalized for evaluation'],
  },
  {
    icon: Scale,
    title: 'Bid Comparison Statements',
    desc: 'Apples-to-apples commercial evaluation, generated — not hand-built in spreadsheets.',
    points: ['Side-by-side price, lead time & incoterm view', 'Best-evaluated bid highlighted', 'One-click Excel export for committees'],
  },
  {
    icon: FileDiff,
    title: 'Clause-Level Diffing',
    desc: 'See exactly what changed between bid versions and against your standard terms.',
    points: ['Text-diff of clauses across revisions', 'Deviations visible at a glance', 'Nothing silently re-negotiated'],
  },
  {
    icon: Building2,
    title: 'Vendor Dossiers & Lifecycle',
    desc: 'A living profile for every supplier — from draft registration to qualified, or blacklisted.',
    points: ['Certifications with expiry tracking', 'Past work, clients & compliance reviews', 'Restricted & blacklist states enforced automatically'],
  },
  {
    icon: Sparkles,
    title: 'Intelligent Sourcing Engine',
    desc: 'Supplier suggestions scored against each RFQ’s material and service groups.',
    points: ['Match score per supplier per tender', 'Eligibility checked against blacklist', 'Surfaces qualified vendors you forgot you had'],
  },
  {
    icon: Recycle,
    title: 'Surplus & Scrap Listings',
    desc: 'Recover value from idle materials instead of writing them off.',
    points: ['Publish surplus listings internally or to vendors', 'Scrap tracked by quantity — down to the kilogram', 'Turns dead stock back into budget'],
  },
];

export default function SPCFeatures() {
  return (
    <section id="features" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Feature deep-dive"
          title="The full bid cycle, engineered end to end"
          sub="Eight capabilities that take a tender from publish to award — with the audit trail to defend every decision."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: (i % 4) * 0.08 }}
              className="service-card group flex flex-col"
            >
              <div className="icon-chip">
                <f.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold leading-snug text-primary">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{f.desc}</p>
              <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                {f.points.map(pt => (
                  <li key={pt} className="check-item">
                    <span className="check-badge">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5.5L4 8L8.5 2.5" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[13px]">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
