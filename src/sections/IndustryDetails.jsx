import { motion } from 'framer-motion';
import { Check, Zap, Flame, Mountain, Atom, Leaf, Building2 } from 'lucide-react';
import { industryDetails } from '../data/content';

const ICONS = { Zap, Flame, Mountain, Atom, Leaf, Building2 };

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
};

/* Sector deep-dives — card grid carrying the domain-specific points per industry */
export default function IndustryDetails() {
  return (
    <section className="bg-gold py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
          <div className="eyebrow-center mb-4 !text-ink">Sector Deep-Dives</div>
          <h2 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">
            Where our stack <span className="text-ink">delivers</span>
          </h2>
          <p className="mt-5 text-lg text-ink/70">
            Decades of EPC domain expertise, mapped to the specific challenges of each sector we serve.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 bg-ink/25" />
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industryDetails.map((ind, i) => {
            const Icon = ICONS[ind.iconName] || Building2;
            return (
              <motion.div
                key={ind.name}
                {...reveal}
                transition={{ ...reveal.transition, delay: i * 0.07 }}
                className="group relative overflow-hidden bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-cardhover"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ background: ind.a }} />

                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: `${ind.a}22`, border: `1px solid ${ind.a}55` }}
                >
                  <Icon size={24} style={{ color: ind.a }} strokeWidth={1.6} />
                </div>

                <h3 className="font-display text-xl font-bold text-primary">{ind.name}</h3>
                <div className="mt-1 text-sm font-semibold italic" style={{ color: ind.a }}>
                  {ind.summary}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-body">{ind.desc}</p>

                <ul className="mt-6 space-y-2.5">
                  {ind.points.map(p => (
                    <li key={p} className="check-item">
                      <span className="check-badge">
                        <Check size={11} strokeWidth={3.5} className="text-golddeep" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
