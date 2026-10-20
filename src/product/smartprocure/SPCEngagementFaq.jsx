import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ArrowRight, Flag, Building, Globe2 } from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const MODELS = [
  {
    icon: Flag,
    name: 'Pilot',
    tag: 'One RFQ cycle',
    desc: 'Run a single live tender through the full cycle — publish, invite, receive, compare, award — and judge the difference yourself.',
    features: ['Single RFQ workspace', 'Secure offer links for your vendors', 'Comparison statement & Excel export', 'Guided onboarding'],
    highlighted: false,
  },
  {
    icon: Building,
    name: 'Project Rollout',
    tag: 'Full bid desk',
    desc: 'The complete portal for a project procurement team — vendor lifecycle, sourcing engine and clause diffing included.',
    features: ['Everything in Pilot', 'Vendor dossiers & lifecycle states', 'Intelligent sourcing suggestions', 'Clause diffing & revision control'],
    highlighted: true,
  },
  {
    icon: Globe2,
    name: 'Enterprise',
    tag: 'Procurement organization',
    desc: 'Company-wide vendor masters, surplus marketplace and multi-project oversight for the whole supply chain function.',
    features: ['Everything in Project Rollout', 'Shared vendor master across projects', 'Surplus & scrap listings', 'Role-based org structure (11 roles)'],
    highlighted: false,
  },
];

const FAQS = [
  {
    q: 'Do vendors really not need accounts?',
    a: 'Correct. Each invite generates a unique tokenized link protected by a passcode. The vendor opens the link, enters the passcode, and can submit their bid, respond to revision requests and follow the clarification thread — no registration, no portal training.',
  },
  {
    q: 'Can suppliers still submit Excel quotations?',
    a: 'Yes. SmartProcureSimple ingests offline bids from .xlsx quotation files and normalizes them into the same register as online bids — so the comparison statement covers every offer regardless of how it arrived.',
  },
  {
    q: 'How are bids compared fairly?',
    a: 'Every bid is normalized into a side-by-side statement covering evaluated price, lead time, incoterm, payment terms and compliance. The best-evaluated bid is highlighted, clause deviations are diffed against your terms, and the whole statement exports to Excel for the award committee.',
  },
  {
    q: 'How does the platform keep vendor compliance current?',
    a: 'Every supplier lives in a governed lifecycle — draft, pending approval, onboarding, verification, verified, active — with restricted and blacklisted states enforced automatically. Dossiers track certifications with expiry dates, past work, clients and periodic compliance reviews.',
  },
  {
    q: 'What does the sourcing engine actually do?',
    a: 'When you tag an RFQ with material and service groups, the engine scores every registered supplier against those groups, checks blacklist eligibility, and returns ranked suggestions — surfacing qualified vendors your team may have forgotten.',
  },
  {
    q: 'What is the surplus module for?',
    a: 'Idle materials and scrap (tracked down to the kilogram) can be published as surplus listings — recovering value from dead stock instead of writing it off, inside the same platform your vendors already use.',
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

export default function SPCEngagementFaq() {
  const [open, setOpen] = useState(0);

  return (
    <>
      {/* engagement models */}
      <section id="engagement" className="scroll-mt-24 bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            center
            eyebrow="Engagement models"
            title="Start with one tender. Scale to the whole function."
            sub="From a single RFQ pilot to a company-wide bid desk — engagement shaped around your procurement calendar."
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
                  href={`mailto:contact@xbeyond.online?subject=SmartProcureSimple%20${encodeURIComponent(m.name)}%20Enquiry`}
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
            <div className="eyebrow-center mb-5 !text-primary">Every Tender. Every Bid. Every Clause.</div>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Your next award, <br className="hidden sm:block" /> fully defensible.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
              Send us one live RFQ — we will publish it, invite your vendors through secure links, and show you the
              comparison statement your committee has always wanted.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@xbeyond.online?subject=SmartProcureSimple%20Demo%20Request" className="btn-primary">
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
