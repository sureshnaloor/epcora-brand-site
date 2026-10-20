import { motion } from 'framer-motion';
import {
  Trash2,
  MessageCircleOff,
  Store,
  Briefcase,
  Contact,
  Users,
  Rocket,
  Building2,
  Wallet,
  HeartHandshake,
  Globe,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const PAINS = [
  {
    icon: Trash2,
    title: 'Paper Cards Die in a Week',
    desc: '88% of printed business cards are thrown away within seven days — money, trees and first impressions straight into the bin.',
  },
  {
    icon: MessageCircleOff,
    title: 'Communities Run on Chat Groups',
    desc: 'Mentoring offers, event plans and member directories buried in endless message threads — no structure, no memory, no growth.',
  },
  {
    icon: Store,
    title: 'Small Businesses Stay Invisible',
    desc: 'No credible web home for certificates, past works and client lists — so trust is rebuilt from scratch in every single deal.',
  },
  {
    icon: Briefcase,
    title: 'Experience Sits on the Shelf',
    desc: 'Retirees and side-hustlers carry decades of skill — with no storefront, no circle and no way to turn it into income.',
  },
];

const IMPACTS = [
  ['Paper business cards', '88% discarded within a week', 'Recurring print spend & carbon cost'],
  ['Chat-group communities', 'Events and offers lost in threads', 'Members drift away, circles die'],
  ['No web presence', 'Buyers cannot verify credentials', 'Deals lost to louder competitors'],
  ['Undiscovered talent', 'Mentors and makers stay invisible', 'Skills never become livelihoods'],
];

export function SWVProblem() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="The connection reality"
          title="People have more to offer than a paper card"
          sub="A card gets binned. A chat group forgets. A business without a web home keeps re-proving itself. SmartWave replaces all three with one identity that works for individuals and businesses alike."
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
              What disconnected people and businesses lose
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="bg-mist font-display text-xs font-bold uppercase tracking-wider text-primary">
                  <th className="px-6 py-4">Failure Mode</th>
                  <th className="px-6 py-4">Immediate Impact</th>
                  <th className="px-6 py-4">Long-Term Cost</th>
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
    icon: Contact,
    step: '01',
    title: 'Create Your Card',
    desc: 'A digital identity shared by NFC tap, QR scan or link — and added to Apple or Google Wallet in one tap. No app installs, ever.',
  },
  {
    icon: Users,
    step: '02',
    title: 'Join Your Circles',
    desc: 'Find or start circles around what you love — mentoring, hiking, pilgrimages, study groups — with member passes and event access built in.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Launch Your Venture',
    desc: 'Turn experience into income: a storefront for your retirement business or side hustle, discovered by the community around you.',
  },
  {
    icon: Building2,
    step: '04',
    title: 'Grow Your Space',
    desc: 'Businesses rent or buy web spaces — pages that host documents, certificates, past works, client lists and resources, public or by invitation.',
  },
];

const WORLDS = [
  {
    icon: Wallet,
    name: 'Card & Pass',
    who: 'Everyone',
    desc: 'The identity layer — digital card, wallet pass and vCard exchange that update everywhere, automatically.',
  },
  {
    icon: HeartHandshake,
    name: 'Circles & Mentoring',
    who: 'Individuals',
    desc: 'The community layer — interest circles, mentoring and teaching, events with verifiable access passes.',
  },
  {
    icon: Rocket,
    name: 'Venture Storefronts',
    who: 'New founders',
    desc: 'The livelihood layer — second-innings businesses and side hustles with a page that sells while you sleep.',
  },
  {
    icon: Globe,
    name: 'Business Spaces',
    who: 'Businesses',
    desc: 'The commerce layer — rented or owned pages for business lines, documents, past works and client lists.',
  },
];

export function SWVHowItWorks() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="How it works"
          title="From a card in your wallet to a community around you"
          sub="SmartWave grows with you — identity first, then circles, then ventures, then full business spaces. Each layer stands alone; together they compound."
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

        {/* four layers panel */}
        <motion.div {...reveal} className="mt-16 bg-navy p-8 shadow-cardhover sm:p-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="eyebrow !text-gold">One identity, four layers</div>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                For individuals and businesses, alike.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              <ShieldCheck size={14} className="mr-1 inline text-gold" />
              Start anywhere. A retiree begins with a card and ends with a storefront; a supplier begins with a space
              and ends with a community of clients.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WORLDS.map(w => (
              <div key={w.name} className="border border-white/10 bg-white/5 p-5 transition-colors hover:border-gold/50">
                <div className="mb-3 flex items-center gap-2">
                  <w.icon size={16} className="text-gold" />
                  <span className="font-display text-[11px] font-bold uppercase tracking-wider text-white">{w.name}</span>
                </div>
                <div className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gold/80">{w.who}</div>
                <p className="text-[13px] leading-relaxed text-white/65">{w.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
