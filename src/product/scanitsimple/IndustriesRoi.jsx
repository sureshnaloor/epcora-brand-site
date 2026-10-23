import { motion } from 'framer-motion';
import { Upload, Users, Printer, ScanLine } from 'lucide-react';
import { reveal, SectionHead } from './shared';

const IMG = '/images/products/scanitsimple';

const INDUSTRIES = [
  {
    img: `${IMG}/construction-equipment.jpg`,
    name: 'Construction & EPC',
    desc: 'Concrete mixers, surveying gear and power tools tracked across remote project WBS structures.',
  },
  {
    img: `${IMG}/hero-building.jpg`,
    name: 'Oil, Gas & Energy',
    desc: 'Certified safety valves, pressure gauges and high-value rigs on strictly scheduled calibrations.',
  },
  {
    img: `${IMG}/measuring-instruments.jpg`,
    name: 'Calibration Laboratories',
    desc: 'Direct validation of instrument logs, certificates and calibration company records.',
  },
  {
    img: `${IMG}/medical-equipment.jpg`,
    name: 'Healthcare & Medical',
    desc: 'Medical devices and diagnostic equipment with traceable service and compliance histories.',
  },
  {
    img: `${IMG}/hotel-lobby.jpg`,
    name: 'Hospitality & Facilities',
    desc: 'Furniture, fixtures and camp resources mapped to rooms, floors and occupants.',
  },
  {
    img: `${IMG}/server-room.jpg`,
    name: 'IT & Server Assets',
    desc: 'Electronics, servers and network gear with custody chains for every handover.',
  },
];

const ROI = [
  { value: '99%', label: 'Loss Reduction', note: 'Employee-level custody accountability ends lost & hoarded tools.' },
  { value: 'Zero', label: 'Calibration Lapses', note: 'Automated schedules and alerts keep compliance permanent.' },
  { value: '25%', label: 'Capex Savings', note: 'Sharing assets across projects kills duplicate purchasing & rentals.' },
  { value: '100%', label: 'Audit Readiness', note: 'Certificates, POs and custodian logs — digitized and instant.' },
];

const ONBOARD = [
  {
    icon: Upload,
    step: 'Step 1',
    title: 'Import Data',
    desc: 'Clean CSV / Excel templates and a bulk upload engine migrate thousands of legacy asset numbers in hours.',
  },
  {
    icon: Users,
    step: 'Step 2',
    title: 'Define Roles',
    desc: 'Assign admins, set user clearances and map warehouse, site and camp locations to your org structure.',
  },
  {
    icon: Printer,
    step: 'Step 3',
    title: 'Print & Tag',
    desc: 'Standard label layouts with your logo, asset code and scannable QR — printed on durable field-grade stock.',
  },
  {
    icon: ScanLine,
    step: 'Step 4',
    title: 'Scan & Go',
    desc: 'Train the warehouse team in a morning. Every scan lands on live feeds from day one.',
  },
];

export default function IndustriesRoi() {
  return (
    <>
      {/* industries */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Built to scale across industries"
            title="One platform, every asset-heavy operation"
            sub="SmartTagScan adapts its registers, fields and workflows to the asset category — not the other way around."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.name}
                {...reveal}
                transition={{ ...reveal.transition, delay: (i % 3) * 0.08 }}
                className="group relative overflow-hidden shadow-card transition-shadow duration-500 hover:shadow-cardhover"
              >
                <img
                  src={ind.img}
                  alt={ind.name}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
          <SectionHead
            dark
            center
            eyebrow="The ROI of SmartTagScan"
            title="Accountability you can measure"
          />
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
            “No more lost spreadsheets. No more expired compliance. No more unaccounted project equipment.”
          </motion.p>
        </div>
      </section>

      {/* onboarding */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...reveal}>
              <div className="eyebrow mb-5">Onboarding &amp; deployment</div>
              <h2 className="bordered-heading text-3xl sm:text-4xl">Go live in days, not months</h2>
              <p className="mt-5 text-lg leading-relaxed text-body">
                A clean import pipeline, pre-designed QR label standards and zero client installs mean your teams are
                scanning before the week is out.
              </p>
              <div className="relative mt-8">
                <div className="absolute -left-5 -top-5 h-28 w-28 border-8 border-gold/70" />
                <img
                  src={`${IMG}/qr-code-design.jpg`}
                  alt="Branded SmartTagScan QR asset labels"
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
