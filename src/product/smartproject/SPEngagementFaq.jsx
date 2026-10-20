import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ArrowRight, Flag, Building, Globe2 } from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const MODELS = [
  {
    icon: Flag,
    name: 'Pilot',
    tag: 'One live project',
    desc: 'Prove value on a single project — import your WBS, baseline it, and run a full control cycle with your team.',
    features: ['Single project workspace', 'WBS import & baselining', 'EVM & utilization dashboards', 'Guided onboarding'],
    highlighted: false,
  },
  {
    icon: Building,
    name: 'Project Rollout',
    tag: 'Flagship deployment',
    desc: 'The full controls suite on a flagship project — cost, resources, HSE and procurement working as one.',
    features: ['Everything in Pilot', 'Procurement & PO-to-WBS tagging', 'HSE, risk & lessons-learnt registers', 'Amendment governance workflow'],
    highlighted: true,
  },
  {
    icon: Globe2,
    name: 'Enterprise',
    tag: 'Multi-project portfolio',
    desc: 'Company-wide resource utilization, shared vendor master and cross-project timesheets across your portfolio.',
    features: ['Everything in Project Rollout', 'Company-wide utilization calendars', 'Shared vendor & resource masters', 'Portfolio-level EVM reporting'],
    highlighted: false,
  },
];

const FAQS = [
  {
    q: 'Can we import our existing Primavera P6 or ERP structure?',
    a: 'Yes. SmartProject ingests WBS structures via CSV or Excel with smart column-alias auto-mapping — common P6 labels are recognized automatically. Level-1 nodes import as summaries, leaves auto-detect as Work Packages, and import is blocked once a structure is finalized.',
  },
  {
    q: 'What happens if the baseline needs to change?',
    a: 'A finalized WBS is locked — no edits, deletions or additions in UI or API. Change flows through a Project Amendment: a versioned copy ({project}_amd_1, amd_2…) that starts unlocked for adjustment while the original baseline and full history remain intact.',
  },
  {
    q: 'How granular is the cost control?',
    a: 'Budgets live at the individual work-package level. Earned value metrics (PV, AC, EV) compute continuously, CPI < 1.0 flags underperforming packages the same day, and Cost Variance can be reviewed at WBS Level 1, Level 2 or per package — with EAC completion forecasts from actual field performance.',
  },
  {
    q: 'Does it treat owned and rented equipment differently?',
    a: 'Yes. Own vs Rental resources carry separate rate definitions, hourly billing rates calculate actual cost straight from timesheets, and site serial numbers map back to global profiles (e.g. “Mobile Crane 50T”) for company-wide visibility.',
  },
  {
    q: 'How do we avoid double-booking resources across projects?',
    a: 'Company-wide utilization calendars show every resource as active or idle across month, quarter, year or project scales — synchronized with project-wise and company-wise timesheets before you commit anything.',
  },
  {
    q: 'Where do procurement and subcontracts fit?',
    a: 'PO-to-WBS tagging links every material (m³, tons, ea) and service purchase directly to a work-package budget. The vendor master holds tax and rating data, and both lump-sum and unit-rate contracts are managed inside the project financial module.',
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

export default function SPEngagementFaq() {
  const [open, setOpen] = useState(0);

  return (
    <>
      {/* engagement models */}
      <section id="engagement" className="scroll-mt-24 bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            center
            eyebrow="Engagement models"
            title="Start with one project. Scale to the portfolio."
            sub="From pilot rollouts to full digital transformation — engagement models shaped around your budget, timeline and team."
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
                  href={`mailto:contact@xbeyond.online?subject=SmartProject%20${encodeURIComponent(m.name)}%20Enquiry`}
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
            <div className="eyebrow-center mb-5 !text-primary">Every Package. Every Dollar. Every Hour.</div>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Bring your project controls <br className="hidden sm:block" /> into one workspace.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
              Send us a WBS export from your live project — we will load it into SmartProject and walk your team
              through baselining, earned value and utilization, live.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@xbeyond.online?subject=SmartProject%20Demo%20Request" className="btn-primary">
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
