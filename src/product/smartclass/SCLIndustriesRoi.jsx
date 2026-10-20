import { motion } from 'framer-motion';
import { Upload, FileCog, Layers, Database } from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const IMG = '/images/products/smartclass';

const INDUSTRIES = [
  {
    img: `${IMG}/construction-equipment.jpg`,
    name: 'Construction & EPC',
    desc: 'Project material masters cleansed before they pollute the ERP — gaskets to graders, one convention.',
  },
  {
    img: `${IMG}/hero-building.jpg`,
    name: 'Oil, Gas & Energy',
    desc: 'Spec-heavy catalogues with ratings, standards and material grades carried faithfully into classification.',
  },
  {
    img: `${IMG}/measuring-instruments.jpg`,
    name: 'Manufacturing & MRO',
    desc: 'Spares and consumables deduplicated across plants — one bearing, one master, everywhere.',
  },
  {
    img: `${IMG}/office-interior.jpg`,
    name: 'Utilities & Facilities',
    desc: 'Legacy extracts from merged systems unified into a single governed catalogue.',
  },
];

const ROI = [
  { value: '2', label: 'Examples Train the AI', note: 'Your convention is taught, not configured — the AI generalizes from two examples.' },
  { value: '3', label: 'Classification Levels', note: 'Primary, secondary, tertiary — with primary groups mapped to G/L accounts.' },
  { value: '4', label: 'Honest Result Buckets', note: 'Standardized, oversized, uncleansed, characteristic-N/A — nothing passes silently.' },
  { value: 'Days', label: 'Not Months to Cleanse', note: 'Batch CSV processing turns a legacy-catalogue project into an afternoon’s review.' },
];

const ONBOARD = [
  {
    icon: Upload,
    step: 'Step 1',
    title: 'Upload a Sample Extract',
    desc: 'Start with one material family — a CSV of a few hundred rows is enough to see the whole pipeline.',
  },
  {
    icon: FileCog,
    step: 'Step 2',
    title: 'Teach Your Template',
    desc: 'Define the characteristics and add two example transformations — your convention, captured in minutes.',
  },
  {
    icon: Layers,
    step: 'Step 3',
    title: 'Review the Buckets',
    desc: 'Standardized rows head to ERP load; oversized and uncleansed go to review — with your corrections feeding the learning loop.',
  },
  {
    icon: Database,
    step: 'Step 4',
    title: 'Scale to the Full Catalogue',
    desc: 'Family by family, plant by plant — until the whole master speaks one language.',
  },
];

export default function SCLIndustriesRoi() {
  return (
    <>
      {/* industries */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Built for data-heavy industries"
            title="Anywhere materials outnumber conventions"
            sub="SmartClass speaks the language of materials management — ratings, grades, standards and G/L accounts included."
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
          <SectionHead dark center eyebrow="The ROI of SmartClass" title="A catalogue you can finally trust" />
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
            “One material, one master, one language — across every plant and every ERP.”
          </motion.p>
        </div>
      </section>

      {/* onboarding */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...reveal}>
              <div className="eyebrow mb-5">Deployment &amp; onboarding</div>
              <h2 className="bordered-heading text-3xl sm:text-4xl">One material family, this week</h2>
              <p className="mt-5 text-lg leading-relaxed text-body">
                No taxonomy project, no consulting marathon. Upload a sample extract, teach the template with two
                examples, and review the buckets — the learning loop takes it from there.
              </p>
              <div className="relative mt-8">
                <div className="absolute -left-5 -top-5 h-28 w-28 border-8 border-gold/70" />
                <img
                  src={`${IMG}/measuring-instruments.jpg`}
                  alt="Materials data team reviewing classified catalogue"
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
