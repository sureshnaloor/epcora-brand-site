import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ArrowRight, Flag, Building, Globe2 } from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const MODELS = [
  {
    icon: Flag,
    name: 'Pilot',
    tag: 'One PO package',
    desc: 'Take one live package — a long-lead equipment order, say — through schedule tracking, alert streams and an AI brief, and judge the difference yourself.',
    features: ['Single PO package workspace', 'Six-dimension schedule tracking', 'Guarantee & LC alert stream', 'Guided onboarding'],
    highlighted: false,
  },
  {
    icon: Building,
    name: 'Project Rollout',
    tag: 'Full expediting desk',
    desc: 'The complete post-PO layer for a project team — every open order tracked, followed up and closed out in one place.',
    features: ['Everything in Pilot', 'All four alert streams on every PO', 'AI expediting briefs & PDF reports', 'Project ↔ PO timelines & long-lead flags'],
    highlighted: true,
  },
  {
    icon: Globe2,
    name: 'Enterprise',
    tag: 'Materials organization',
    desc: 'Company-wide vendor performance, lessons learnt and multi-project PO oversight for the whole supply chain function.',
    features: ['Everything in Project Rollout', 'Vendor ↔ PO mapping & dashboards', 'Vendor feedback incl. warranty responsiveness', 'Cross-project lessons learnt register'],
    highlighted: false,
  },
];

const FAQS = [
  {
    q: 'What exactly does “six schedule dimensions” mean?',
    a: 'Every open PO is tracked across six dimensions: (1) design submissions & approvals monitoring, (2) inspection test plans and tests monitoring, (3) payments — advances, milestones, retentions, bank guarantees for advance and performance, and letters of credit, (4) progress monitoring with fabrication pictures, sub-supplier POs and acknowledgments, (5) shipping & logistics including permits and customs clearance, and (6) delivery and post-delivery — inspections, insurance claims if damaged, and returns. Dates, milestones and status live there instead of in side spreadsheets, so the whole team sees the same truth about every order.',
  },
  {
    q: 'How do the bank guarantee alerts work?',
    a: 'The platform continuously checks advance (ABG) and performance (PBG) guarantees against open POs. When cover lapses or approaches expiry while the PO is still open, it lands on the PO alert report — with comment actions so the follow-up (extension request, recovery letter) is recorded against the PO itself.',
  },
  {
    q: 'What does the AI expediting brief actually read?',
    a: 'The brief is generated per PO from three sources: the schedule data, the chronological follow-up thread, and the guarantee/LC position. It summarizes where the PO stands, names suspected delay causes, and suggests concrete steps to expedite delivery — then exports as a PDF report including BG and LC status.',
  },
  {
    q: 'How are projects and vendors mapped to POs?',
    a: 'Project purchase timelines show every PO against its project — and open projects against their open POs — with long-lead packages flagged. On the vendor side, dashboards and vendor-group mapping tie each supplier to the orders behind their performance, including non-SAP vendors.',
  },
  {
    q: 'How does the platform handle documentation compliance?',
    a: 'Documentation gaps become worklists, not surprises: dedicated reports list vendors with POs but no documents, and POs with missing documents. Material and project document registers plus PR → PO → Delivery → Post-Delivery tracking forms keep the paper trail moving with the material.',
  },
  {
    q: 'What happens at close-out?',
    a: 'Close-out is explicit: guarantees marked returned, delivery and post-delivery forms completed, vendor feedback captured — including post-supply responsiveness and warranty support — and the lesson filed in the lessons learnt register so the next award starts smarter.',
  },
];

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="border border-line bg-white transition-shadow hover:shadow-card">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
        <span className="font-display text-[15px] font-bold text-primary">{q}</span>
        <ChevronDown size={18} className={`shrink-0 text-golddeep transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-body">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SPEEngagementFaq() {
  const [open, setOpen] = useState(0);

  return (
    <>
      {/* engagement models */}
      <section id="engagement" className="scroll-mt-24 bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            center
            eyebrow="Engagement models"
            title="Start with one package. Scale to the whole PO book."
            sub="From a single long-lead order to a company-wide expediting desk — engagement shaped around your delivery calendar."
          />

          <div className="grid gap-8 md:grid-cols-3">
            {MODELS.map((m, i) => (
              <motion.div
                key={m.name}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.08 }}
                className={`relative flex flex-col bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-cardhover ${
                  m.highlighted ? 'ring-2 ring-gold' : 'border border-line'
                }`}
              >
                {m.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 font-display text-[11px] font-bold uppercase tracking-wider text-ink">
                    Recommended
                  </span>
                )}
                <div className="icon-chip mb-5">
                  <m.icon size={22} />
                </div>
                <h3 className="font-display text-xl font-bold text-primary">{m.name}</h3>
                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-golddeep">{m.tag}</div>
                <p className="mt-3 text-sm leading-relaxed text-body">{m.desc}</p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                  {m.features.map(f => (
                    <li key={f} className="check-item">
                      <span className="check-badge">
                        <Check size={10} strokeWidth={3.5} className="text-golddeep" />
                      </span>
                      <span className="text-[13px]">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:contact@xbeyond.online?subject=SmartExpediteSimple%20${encodeURIComponent(m.name)}%20Enquiry`}
                  className={`${m.highlighted ? 'btn-gold' : 'btn-outline'} mt-8 justify-center !px-6`}
                >
                  Talk to Us
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHead center eyebrow="Questions, answered" title="Frequently asked questions" />
          <motion.div {...reveal} className="space-y-3">
            {FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* final CTA */}
      <section className="relative overflow-hidden bg-gold">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'repeating-linear-gradient(115deg, #05052D 0 2px, transparent 2px 90px)' }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <motion.div {...reveal}>
            <div className="eyebrow-center mb-5 !text-primary">Every PO. Every Document. Every Deadline.</div>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Your next delivery, <br className="hidden sm:block" /> fully expedited.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
              Send us one live PO book — we will switch on the schedules and alert streams, and show you the AI
              expediting brief your project team has always wanted.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@xbeyond.online?subject=SmartExpediteSimple%20Demo%20Request" className="btn-primary">
                Book a Live Demo <ArrowRight size={17} />
              </a>
              <Link
                to="/products"
                className="inline-flex items-center gap-2.5 border-2 border-ink px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-ink transition-all duration-300 hover:bg-ink hover:text-gold"
              >
                Explore All Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
