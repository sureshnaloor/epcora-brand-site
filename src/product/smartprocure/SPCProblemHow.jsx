import { motion } from 'framer-motion';
import {
  MailX,
  Scale,
  FolderSearch,
  MessageSquareOff,
  FileUp,
  KeyRound,
  Inbox,
  Gavel,
  FileText,
  BadgeCheck,
  Ban,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const PAINS = [
  {
    icon: MailX,
    title: 'Chaotic Bid Intake',
    desc: 'Quotations arrive by email, WhatsApp and spreadsheet — every format different, nothing directly comparable.',
  },
  {
    icon: Scale,
    title: 'Apples-to-Oranges Bids',
    desc: 'Different currencies, incoterms, lead times and clause deviations make commercial evaluation slow and error-prone.',
  },
  {
    icon: FolderSearch,
    title: 'Vendor Documents Everywhere',
    desc: 'Registrations, ISO certificates and financial statements scattered across inboxes — with expiries nobody tracks.',
  },
  {
    icon: MessageSquareOff,
    title: 'Lost Negotiation Trail',
    desc: 'Clarifications, revised offers and agreed deviations buried in mailboxes — indefensible when disputes arrive.',
  },
];

const IMPACTS = [
  ['Email-based bidding', 'Quotes in incompatible formats', 'Weeks lost normalizing bids'],
  ['Expired vendor certificates', 'Compliance exposure at award', 'Audit findings & disqualified awards'],
  ['Manual comparison sheets', 'Errors in commercial evaluation', 'Wrong vendor selection'],
  ['Buried negotiations', 'No record of agreed deviations', 'Disputed contract terms'],
];

export function SPCProblem() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="The procurement reality"
          title="Your RFQs deserve better than an inbox"
          sub="For an EPC procurement office, every tender is a race against format chaos, compliance gaps and buried negotiations. The cost isn’t just time — it’s the quality of the award decision itself."
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
              What unstructured bidding costs your business
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-mist font-display text-xs font-bold uppercase tracking-wider text-primary">
                  <th className="px-6 py-4">Failure Mode</th>
                  <th className="px-6 py-4">Commercial Impact</th>
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
    icon: FileUp,
    step: '01',
    title: 'Publish',
    desc: 'Create the RFQ with its full tender pack — drawings, specs and BOQ (up to 10 files / 50 MB) — tagged to material & service groups.',
  },
  {
    icon: KeyRound,
    step: '02',
    title: 'Invite',
    desc: 'Share a secure offer link with each vendor. A token plus passcode opens the bid form — no accounts, no portals, no training.',
  },
  {
    icon: Inbox,
    step: '03',
    title: 'Receive',
    desc: 'Bids arrive online through the form — or ingest the Excel quotations vendors still insist on sending. Both land in the same register.',
  },
  {
    icon: Gavel,
    step: '04',
    title: 'Evaluate & Award',
    desc: 'Normalized comparison statements, clause-level diffing across revisions and a complete negotiation thread — defensible awards, every time.',
  },
];

const LIFECYCLE = [
  { stage: 'Draft → Pending Approval', desc: 'New supplier registrations enter a controlled review queue.' },
  { stage: 'Onboarding → Verification', desc: 'Dossiers collected: registrations, certifications, financials, past work.' },
  { stage: 'Verified → Active', desc: 'Qualified vendors become bid-ready and eligible for sourcing suggestions.' },
  { stage: 'Restricted / Blacklisted', desc: 'Non-compliant vendors are excluded from every future suggestion automatically.' },
];

export function SPCHowItWorks() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="How it works"
          title="From RFQ to award in four clean steps"
          sub="SmartProcureSimple structures the entire bid cycle — so the commercial evaluation is done on facts, not on whoever formatted their spreadsheet best."
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

        {/* supplier lifecycle panel */}
        <motion.div {...reveal} className="mt-16 bg-navy p-8 shadow-cardhover sm:p-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow !text-gold">Supplier lifecycle governance</div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Every vendor, in a known state.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              <ShieldCheck size={14} className="mr-1 inline text-gold" />
              From first registration to qualified — or blacklisted — every supplier moves through a governed,
              auditable lifecycle.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LIFECYCLE.map((l, i) => (
              <div key={l.stage} className="border border-white/10 bg-white/5 p-5 transition-colors hover:border-gold/50">
                <div className="mb-3 flex items-center gap-2">
                  {i === 3 ? (
                    <Ban size={16} className="text-red-400" />
                  ) : i === 2 ? (
                    <BadgeCheck size={16} className="text-emerald-400" />
                  ) : (
                    <FileText size={16} className="text-gold" />
                  )}
                  <span className="font-display text-[11px] font-bold uppercase tracking-wider text-white">{l.stage}</span>
                </div>
                <p className="text-[13px] leading-relaxed text-white/65">{l.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
