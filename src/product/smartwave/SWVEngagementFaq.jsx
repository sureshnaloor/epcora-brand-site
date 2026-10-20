import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, ArrowRight, Contact, Store, Globe2 } from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const MODELS = [
  {
    icon: Contact,
    name: 'Individual',
    tag: 'Card + circles',
    desc: 'Your digital card and wallet pass, plus membership of the circles that match your interests — mentoring, hiking, pilgrimage and more.',
    features: ['Digital card & wallet pass', 'NFC, QR and link sharing', 'Join or start interest circles', 'Mentor listings & event access'],
    highlighted: false,
  },
  {
    icon: Store,
    name: 'Venture & Business Space',
    tag: 'Storefront + pages',
    desc: 'For side hustles, second-innings ventures and growing businesses — a storefront or rented web space that carries your proof.',
    features: ['Everything in Individual', 'Storefront or rented/bought web space', 'Documents, certificates, past works & client lists', 'Business lines & material/service groups'],
    highlighted: true,
  },
  {
    icon: Globe2,
    name: 'Enterprise & Communities',
    tag: 'Org-wide rollout',
    desc: 'Company-wide cards with unified branding, event access control and CRM integration — or a managed community for your city or club.',
    features: ['Everything in Venture & Business Space', 'Team templates & central brand control', 'Event passes with verifiable access', 'CRM export & analytics dashboard'],
    highlighted: false,
  },
];

const FAQS = [
  {
    q: 'Does the other person need to install an app?',
    a: 'No. Sharing works three ways — NFC tap, QR scan or a plain link — and the card opens in any modern browser. One tap adds it to Apple or Google Wallet, and a vCard option drops straight into the phone’s contact book.',
  },
  {
    q: 'What happens when my details change?',
    a: 'Every saved wallet pass updates automatically. Change your role, number or logo once, and the update is pushed to everyone who ever saved your card — no reprints, no “my old number” conversations.',
  },
  {
    q: 'How do circles and mentoring actually work?',
    a: 'Anyone can start or join a circle — hiking groups, pilgrimage planners, neighbourhood improvement drives, teaching and mentoring circles. Circles carry member lists, schedules, RSVPs and event access passes with verifiable codes, so the community has a memory instead of a chat thread.',
  },
  {
    q: 'I’m retired and want to start something small. Where do I begin?',
    a: 'With your card and a storefront. List what you offer, get discovered by the community around you, and take your first orders — no developer, no marketplace commissions. Many members run their second-innings venture entirely from their SmartWave page.',
  },
  {
    q: 'What can a business put in a rented space?',
    a: 'Spaces are pages your business rents or buys outright: business lines and the material & service groups you deal in, hosted documents and certificates, past works with photos, client lists and resource inventories. Keep a space private to invited clients, or open it to everyone.',
  },
  {
    q: 'Does SmartWave connect to our CRM?',
    a: 'Yes. The two-way contact exchange captures leads the moment someone views your card, and contact data can be pushed to Salesforce, HubSpot or Zoho through webhook integrations — with analytics on views, clicks and wallet adds.',
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

export default function SWVEngagementFaq() {
  const [open, setOpen] = useState(0);

  return (
    <>
      {/* engagement models */}
      <section id="engagement" className="scroll-mt-24 bg-mist py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            center
            eyebrow="Engagement models"
            title="Start with a card. Grow into a community."
            sub="Free to begin as an individual; spaces and org-wide rollouts when you're ready to go further."
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
                  href={`mailto:contact@xbeyond.online?subject=SmartWave%20${encodeURIComponent(m.name)}%20Enquiry`}
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
            <div className="eyebrow-center mb-5 !text-primary">Every Member. Every Venture. Every Community.</div>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              Your next introduction, <br className="hidden sm:block" /> impossible to throw away.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
              Claim your card, start your circle, or rent your business space — and ride the wave from first tap to
              lasting community.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@xbeyond.online?subject=SmartWave%20Demo%20Request" className="btn-primary">
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
