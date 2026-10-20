import { motion } from 'framer-motion';
import { Building2, FileUp, KeyRound, Scale } from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const IMG = '/images/products/smartprocure';

const INDUSTRIES = [
  {
    img: `${IMG}/construction-equipment.jpg`,
    name: 'Construction & EPC',
    desc: 'Bulk material and subcontract packages bid out with BOQ-level clarity.',
  },
  {
    img: `${IMG}/hero-building.jpg`,
    name: 'Oil, Gas & Energy',
    desc: 'Compliance-heavy vendor qualification for certified valves, gauges and rotating equipment.',
  },
  {
    img: `${IMG}/measuring-instruments.jpg`,
    name: 'Industrial & Manufacturing',
    desc: 'Instrumentation, spares and MRO procurement with lifecycle-tracked suppliers.',
  },
  {
    img: `${IMG}/office-interior.jpg`,
    name: 'Corporate & Facilities',
    desc: 'Services, fit-outs and framework agreements with full negotiation trails.',
  },
];

const ROI = [
  { value: '0', label: 'Vendor Accounts to Manage', note: 'Secure links replace portals — nothing for vendors to install or learn.' },
  { value: '100%', label: 'Negotiation Trail', note: 'Every revision, clarification and deviation recorded and diffable.' },
  { value: '1', label: 'Comparison Statement', note: 'One normalized, exportable view for the award committee.' },
  { value: 'Days', label: 'Not Weeks to Award', note: 'Structured intake kills the bid-normalization bottleneck.' },
];

const ONBOARD = [
  {
    icon: Building2,
    step: 'Step 1',
    title: 'Register Your Vendors',
    desc: 'Import or invite suppliers into the governed lifecycle — dossiers, certifications and compliance from day one.',
  },
  {
    icon: FileUp,
    step: 'Step 2',
    title: 'Publish Your First RFQ',
    desc: 'Attach the tender pack, structure the BOQ, tag material & service groups — the sourcing engine does the rest.',
  },
  {
    icon: KeyRound,
    step: 'Step 3',
    title: 'Share Secure Links',
    desc: 'Each invited vendor gets a tokenized link and passcode. Bids arrive online — or via Excel ingestion.',
  },
  {
    icon: Scale,
    step: 'Step 4',
    title: 'Compare & Award',
    desc: 'Generate the comparison statement, diff the clauses, and award with a complete, defensible record.',
  },
];

export default function SPCIndustriesRoi() {
  return (
    <>
      {/* industries */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Built for buying organizations"
            title="Anywhere tenders go out and bids come back"
            sub="SmartProcureSimple speaks the language of EPC procurement — material groups, service groups, incoterms and BOQs included."
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
          <SectionHead dark center eyebrow="The ROI of SmartProcureSimple" title="Awards you can defend, at speed" />
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
            “The right vendor, at the right price, with the record to prove it.”
          </motion.p>
        </div>
      </section>

      {/* onboarding */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...reveal}>
              <div className="eyebrow mb-5">Deployment &amp; onboarding</div>
              <h2 className="bordered-heading text-3xl sm:text-4xl">Your first structured tender, this week</h2>
              <p className="mt-5 text-lg leading-relaxed text-body">
                No vendor migration project, no supplier re-training. Publish an RFQ, send links, and receive bids in a
                format you can actually compare.
              </p>
              <div className="relative mt-8">
                <div className="absolute -left-5 -top-5 h-28 w-28 border-8 border-gold/70" />
                <img
                  src={`${IMG}/office-interior.jpg`}
                  alt="Procurement office running structured tenders"
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
