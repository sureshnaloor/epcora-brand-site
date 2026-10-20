import { motion } from 'framer-motion';
import {
  Shuffle,
  Landmark,
  Copy,
  Brain,
  Upload,
  Wand2,
  Layers,
  Database,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  HelpCircle,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const PAINS = [
  {
    icon: Shuffle,
    title: 'One Gasket, Five Spellings',
    desc: 'The same material enters the catalogue five different ways — search fails, stock looks short, and buyers reorder what you already own.',
  },
  {
    icon: Landmark,
    title: 'Misclassified = Misbooked',
    desc: 'Materials filed under the wrong group land on the wrong G/L account — reports skew, audits flag, and spend analysis becomes fiction.',
  },
  {
    icon: Copy,
    title: 'Duplicate Masters Multiply',
    desc: 'Duplicate material masters inflate inventory, split purchasing leverage and quietly poison every downstream report.',
  },
  {
    icon: Brain,
    title: 'Standards Live in One Head',
    desc: 'The naming convention exists — in the memory of the one cataloguer who’s been there twenty years. Until they retire.',
  },
];

const IMPACTS = [
  ['Free-text descriptions', 'Search fails across plants', 'Duplicate purchases & excess stock'],
  ['Wrong material groups', 'G/L account misassignment', 'Skewed spend reports & audit flags'],
  ['Unchecked duplicates', 'Fragmented purchase volumes', 'Lost volume discounts'],
  ['Undocumented conventions', 'New cataloguers guess the format', 'Data quality decays with every upload'],
];

export function SCLProblem() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="The materials data reality"
          title="Your catalogue speaks five dialects of chaos"
          sub="Every ERP migration, every merger, every new plant adds another dialect. The cost isn’t cosmetic — it’s wrong G/L postings, duplicate masters and purchasing decisions made on fiction."
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
              What unstructured material data costs your business
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-mist font-display text-xs font-bold uppercase tracking-wider text-primary">
                  <th className="px-6 py-4">Failure Mode</th>
                  <th className="px-6 py-4">Operational Impact</th>
                  <th className="px-6 py-4">Financial Risk</th>
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
    icon: Upload,
    step: '01',
    title: 'Upload',
    desc: 'Drop in a CSV of material descriptions — or process a single material live. The description column is detected automatically.',
  },
  {
    icon: Wand2,
    step: '02',
    title: 'Standardize',
    desc: 'Your template defines the pattern — noun, size & rating, material & type. Two example transformations train the AI on your convention.',
  },
  {
    icon: Layers,
    step: '03',
    title: 'Classify',
    desc: 'Every material lands in the three-level hierarchy — primary, secondary, tertiary — with the primary group mapped to its G/L account.',
  },
  {
    icon: Database,
    step: '04',
    title: 'Publish',
    desc: 'Results arrive bucketed and downloadable per category — ready to load into SAP or any ERP, with full processing history.',
  },
];

const BUCKETS = [
  { icon: CheckCircle2, name: 'Standardized', cls: 'text-emerald-400', desc: 'Descriptions that matched the template — cleansed, formatted and classified, ready to load.' },
  { icon: AlertTriangle, name: 'Oversized', cls: 'text-amber-400', desc: 'Results exceeding the 40-character SAP short-description limit — flagged for trimming.' },
  { icon: XCircle, name: 'Uncleansed', cls: 'text-red-400', desc: 'Descriptions the AI could not confidently standardize — routed for human review, never silently passed.' },
  { icon: HelpCircle, name: 'Characteristic N/A', cls: 'text-sky-400', desc: 'Rows missing the primary characteristic — listed separately so nothing disappears.' },
];

export function SCLHowItWorks() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="How it works"
          title="From raw CSV to governed master data in four steps"
          sub="SmartClass doesn’t ask your team to learn a taxonomy — it learns yours. Templates and examples carry your convention; the AI does the volume work."
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

        {/* result buckets panel */}
        <motion.div {...reveal} className="mt-16 bg-navy p-8 shadow-cardhover sm:p-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow !text-gold">Honest results, every batch</div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Nothing passes silently. Nothing disappears.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              <ShieldCheck size={14} className="mr-1 inline text-gold" />
              Every batch sorts into four buckets — each downloadable as its own CSV, so review effort goes exactly
              where it’s needed.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BUCKETS.map(b => (
              <div key={b.name} className="border border-white/10 bg-white/5 p-5 transition-colors hover:border-gold/50">
                <div className="mb-3 flex items-center gap-2">
                  <b.icon size={16} className={b.cls} />
                  <span className="font-display text-[11px] font-bold uppercase tracking-wider text-white">{b.name}</span>
                </div>
                <p className="text-[13px] leading-relaxed text-white/65">{b.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
