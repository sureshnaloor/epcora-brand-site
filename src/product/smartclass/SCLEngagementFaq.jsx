import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ArrowRight, Flag, Building, Globe2 } from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const MODELS = [
  {
    icon: Flag,
    name: 'Pilot',
    tag: 'One material family',
    desc: 'Run a single family — gaskets, bearings, fasteners — through template teaching, cleansing and classification, and judge the buckets yourself.',
    features: ['Single material-family workspace', 'Template + example training', 'Batch CSV processing & bucketed results', 'Guided onboarding'],
    highlighted: false,
  },
  {
    icon: Building,
    name: 'Catalogue Cleanse',
    tag: 'Full legacy project',
    desc: 'The complete cleanse of a legacy catalogue — every family standardized, classified three levels deep and deduplicated before ERP load.',
    features: ['Everything in Pilot', 'Multi-family batch processing', 'Duplicate detection & merge review', 'G/L-mapped classification'],
    highlighted: true,
  },
  {
    icon: Globe2,
    name: 'Enterprise Governance',
    tag: 'Continuous data quality',
    desc: 'Ongoing stewardship for the whole organization — new materials cleansed at creation, learning loop shared across plants.',
    features: ['Everything in Catalogue Cleanse', 'New-material cleansing at the gate', 'Shared learning examples across sites', 'Full processing history & audit'],
    highlighted: false,
  },
];

const FAQS = [
  {
    q: 'How does the AI learn our naming convention?',
    a: 'Through templates and examples. You define the pattern — primary characteristic (GASKET), secondary (2 INCH 300#), tertiary (SPIRAL WOUND SS316), plus other specs — and add at least two input/output example transformations. The AI generalizes that pattern across the entire batch.',
  },
  {
    q: 'What are the four result buckets?',
    a: 'Every batch sorts into: Standardized (ready to load), Oversized (result exceeded the 40-character SAP short-description limit), Uncleansed (the AI could not confidently standardize — routed to human review), and Characteristic Not Available (rows missing the primary characteristic). Each downloads as its own CSV, so nothing passes silently and nothing disappears.',
  },
  {
    q: 'How does classification connect to our finance system?',
    a: 'Materials are classified into a three-level hierarchy — primary, secondary and tertiary groups. Primary groups are mapped to G/L accounts, so classification drives accounting assignment, material search and reporting in one stroke.',
  },
  {
    q: 'What description formats does it produce?',
    a: 'Both. Short descriptions follow the NOUN,MODIFIER,ATTRIBUTE convention within the 40-character SAP limit, using consistent uppercase and abbreviations. Long descriptions carry full specifications, manufacturer detail, dimensions, material composition and applicable standards references.',
  },
  {
    q: 'Does it get better over time?',
    a: 'Yes — that’s the learning loop. Your corrections and approved transformations are stored as learning examples, so each batch starts smarter than the last. The convention that used to live in one senior cataloguer’s head becomes permanent, shared knowledge.',
  },
  {
    q: 'Which ERPs does it work with?',
    a: 'SmartClass follows SAP description conventions by design (40-character short descriptions, G/L-mapped groups), but the classification structure and CSV-based outputs plug into any ERP. Batch results arrive as load-ready files, with a searchable catalogue and full processing history alongside.',
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

export default function SCLEngagementFaq() {
  const [open, setOpen] = useState(0);

  return (
    <>
      {/* engagement models */}
      <section id="engagement" className="scroll-mt-24 bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            center
            eyebrow="Engagement models"
            title="Start with one family. Govern the whole catalogue."
            sub="From a single-family pilot to continuous enterprise data governance — engagement shaped around your data calendar."
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
                  href={`mailto:contact@xbeyond.online?subject=SmartClass%20${encodeURIComponent(m.name)}%20Enquiry`}
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
            <div className="eyebrow-center mb-5 !text-primary">Every Material. One Language. Zero Duplicates.</div>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Your next ERP load, <br className="hidden sm:block" /> clean at the source.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
              Send us one messy material family — we will teach the template, run the batch, and show you the four
              buckets your data stewards have always wanted.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@xbeyond.online?subject=SmartClass%20Demo%20Request" className="btn-primary">
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
