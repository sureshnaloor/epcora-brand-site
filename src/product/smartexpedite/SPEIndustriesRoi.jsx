import { motion } from 'framer-motion';
import { PackageCheck, CalendarClock, MessagesSquare, Flag } from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const IMG = '/images/products/smartexpedite';

const INDUSTRIES = [
  {
    img: `${IMG}/construction-equipment.jpg`,
    name: 'Construction & EPC',
    desc: 'Long-lead equipment and bulk material POs expedited against site milestones — no idle crews.',
  },
  {
    img: `${IMG}/hero-building.jpg`,
    name: 'Oil, Gas & Energy',
    desc: 'Guarantee-heavy procurement where ABG / PBG cover and LC discipline are non-negotiable.',
  },
  {
    img: `${IMG}/measuring-instruments.jpg`,
    name: 'Industrial & Manufacturing',
    desc: 'Instrumentation and rotating equipment packages with inspection and FAT tracking built in.',
  },
  {
    img: `${IMG}/office-interior.jpg`,
    name: 'Corporate & Infrastructure',
    desc: 'Multi-project PO portfolios with vendor performance rated well past the delivery date.',
  },
];

const ROI = [
  { value: '6', label: 'Dimensions per PO', note: 'Design approvals, ITPs & tests, payments & guarantees, progress, shipping and delivery — always in view.' },
  { value: '4', label: 'Always-On Alert Streams', note: 'Delivery, bank guarantee, LC and document compliance — watching so you don’t have to.' },
  { value: '1', label: 'AI Brief per PO', note: 'Delay causes and recovery suggestions, drafted from the actual follow-up record.' },
  { value: '100%', label: 'Close-Out Trail', note: 'Guarantees returned, docs complete, lessons learnt — every PO ends clean.' },
];

const ONBOARD = [
  {
    icon: PackageCheck,
    step: 'Step 1',
    title: 'Load Your Open POs',
    desc: 'Bring in the live PO book — schedules, vendors and project mappings attach automatically.',
  },
  {
    icon: CalendarClock,
    step: 'Step 2',
    title: 'Switch On the Watch Streams',
    desc: 'Delivery, guarantee, LC and document alerts start running over every open order from day one.',
  },
  {
    icon: MessagesSquare,
    step: 'Step 3',
    title: 'Move Follow-Ups Into the Thread',
    desc: 'Expediting notes, vendor commitments and revised dates land on the PO — the AI brief builds itself from there.',
  },
  {
    icon: Flag,
    step: 'Step 4',
    title: 'Close Out & Learn',
    desc: 'Guarantees returned, post-delivery forms closed, vendor rated — and the lesson banked for the next award.',
  },
];

export default function SPEIndustriesRoi() {
  return (
    <>
      {/* industries */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Built for expediting teams"
            title="Anywhere POs go out and materials must come in"
            sub="SmartExpediteSimple speaks the language of post-PO execution — schedules, guarantees, inspection call-offs and shipping docs included."
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
          <SectionHead dark center eyebrow="The ROI of SmartExpediteSimple" title="Deliveries you can count on, dates you can defend" />
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
            “The material on site, on the date the vendor committed — with the record to prove it.”
          </motion.p>
        </div>
      </section>

      {/* onboarding */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...reveal}>
              <div className="eyebrow mb-5">Deployment &amp; onboarding</div>
              <h2 className="bordered-heading text-3xl sm:text-4xl">Your PO book, under watch this week</h2>
              <p className="mt-5 text-lg leading-relaxed text-body">
                No re-procurement, no vendor re-onboarding. Load the open PO book and the alert streams start working
                immediately — the follow-up discipline follows.
              </p>
              <div className="relative mt-8">
                <div className="absolute -left-5 -top-5 h-28 w-28 border-8 border-gold/70" />
                <img
                  src={`${IMG}/construction-equipment.jpg`}
                  alt="Expediting team tracking open purchase orders"
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
