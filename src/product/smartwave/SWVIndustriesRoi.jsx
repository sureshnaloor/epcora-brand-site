import { motion } from 'framer-motion';
import { Contact, Users, Rocket, Building2 } from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const IMG = '/images/products/smartwave';

const AUDIENCES = [
  {
    img: `${IMG}/office-interior.jpg`,
    name: 'Professionals & Mentors',
    desc: 'A card that updates itself — and a circle where your experience teaches the next generation.',
  },
  {
    img: `${IMG}/construction-equipment.jpg`,
    name: 'EPC & Industrial Suppliers',
    desc: 'Business lines, materials and service groups showcased with certificates and past works attached.',
  },
  {
    img: `${IMG}/measuring-instruments.jpg`,
    name: 'Retirees & Side Hustlers',
    desc: 'Second-innings ventures and weekend businesses with a storefront the community can find.',
  },
  {
    img: `${IMG}/hero-building.jpg`,
    name: 'Communities & Clubs',
    desc: 'Hiking groups, pilgrimage circles, neighbourhood improvement drives — with member passes and event access.',
  },
];

const ROI = [
  { value: '90%', label: 'Print Cost Eliminated', note: 'No design fees, no print runs, no courier charges — ever again.' },
  { value: '10x', label: 'Lead Capture vs Paper', note: 'Two-way exchange and one-tap wallet saves end the lost-lead leak.' },
  { value: '24h', label: 'To Roll Out a Team', note: 'Customized, brand-consistent profiles for every member in a day.' },
  { value: '0', label: 'App Installs Required', note: 'NFC, QR and wallet passes work with the phone people already carry.' },
];

const ONBOARD = [
  {
    icon: Contact,
    step: 'Step 1',
    title: 'Claim Your Card',
    desc: 'Create your digital identity in minutes — share it by NFC tap, QR scan or link, and add it to your wallet.',
  },
  {
    icon: Users,
    step: 'Step 2',
    title: 'Find or Start a Circle',
    desc: 'Join the hikers, the mentors, the pilgrimage planners — or start the circle your neighbourhood is missing.',
  },
  {
    icon: Rocket,
    step: 'Step 3',
    title: 'Open Your Storefront',
    desc: 'Launch the retirement venture or side hustle — your community is your first market.',
  },
  {
    icon: Building2,
    step: 'Step 4',
    title: 'Rent Your Business Space',
    desc: 'Add the pages that carry your certificates, past works and client lists — public, or by invitation only.',
  },
];

export default function SWVIndustriesRoi() {
  return (
    <>
      {/* audiences */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Built for people and the businesses they run"
            title="One wave, every kind of member"
            sub="SmartWave serves the individual sharing a card, the mentor running a circle, the retiree opening a storefront and the supplier showcasing a business line."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {AUDIENCES.map((ind, i) => (
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
          <SectionHead dark center eyebrow="The ROI of SmartWave" title="Connections that compound" />
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
            “One card in every wallet. One circle around every interest. One space behind every business.”
          </motion.p>
        </div>
      </section>

      {/* onboarding */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div {...reveal}>
              <div className="eyebrow mb-5">Getting started</div>
              <h2 className="bordered-heading text-3xl sm:text-4xl">Your card today. Your circle this week.</h2>
              <p className="mt-5 text-lg leading-relaxed text-body">
                No printing, no apps to install, no developer to hire. SmartWave meets you where you are — and grows
                with every connection you make.
              </p>
              <div className="relative mt-8">
                <div className="absolute -left-5 -top-5 h-28 w-28 border-8 border-gold/70" />
                <img
                  src={`${IMG}/office-interior.jpg`}
                  alt="Community members connecting through SmartWave"
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
