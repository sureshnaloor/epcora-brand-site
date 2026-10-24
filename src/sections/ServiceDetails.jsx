import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { serviceDetails } from '../data/content';

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
};

/* Deep-dive blocks for each product in the stack — TM light style, alternating layout */
export default function ServiceDetails() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
          <div className="eyebrow-center mb-4">The Stack, Product by Product</div>
          <h2 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">
            Every solution, <span className="text-secondary">in detail</span>
          </h2>
          <p className="mt-5 text-lg text-body">
            Each product in the x-EPC Stack family is purpose-built for construction and EPC — and they all
            work better together.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 bg-gold" />
        </motion.div>

        <div className="mt-16 space-y-10">
          {serviceDetails.map((s, i) => (
            <motion.div
              key={s.product}
              {...reveal}
              id={s.product.toLowerCase()}
              className="scroll-mt-28 overflow-hidden bg-white shadow-card"
            >
              {/* top accent bar in product color */}
              <div className="h-1.5 w-full origin-left" style={{ background: s.a }} />

              <div className={`grid lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* text side */}
                <div className="p-8 sm:p-12">
                  <span
                    className="inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ background: `${s.a}14`, border: `1px solid ${s.a}45`, color: s.a }}
                  >
                    {s.product}
                  </span>
                  <h3 className="mt-5 font-display text-3xl font-bold text-primary">{s.title}</h3>
                  <div className="mt-1 text-sm font-semibold italic" style={{ color: s.a }}>
                    {s.summary}
                  </div>
                  <p className="mt-5 leading-relaxed text-body">{s.desc}</p>

                  <ul className="mt-7 space-y-3.5">
                    {s.features.map(f => (
                      <li key={f} className="check-item">
                        <span
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                          style={{ background: `${s.a}1f`, border: `1px solid ${s.a}45` }}
                        >
                          <Check size={12} style={{ color: s.a }} strokeWidth={3} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider transition-transform duration-300 hover:translate-x-1"
                    style={{ color: s.a }}
                  >
                    Talk to us about {s.product} <ArrowRight size={15} />
                  </a>
                </div>

                {/* visual side — oversized product monogram in a tinted panel */}
                <div
                  className="relative flex min-h-[280px] items-center justify-center overflow-hidden lg:min-h-0"
                  style={{ background: `linear-gradient(135deg, ${s.a} 0%, ${s.a}cc 60%, ${s.a}99 100%)` }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.08]"
                    style={{ backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 90px)' }}
                  />
                  <span className="absolute -bottom-10 -right-4 select-none font-display text-[11rem] font-extrabold leading-none text-white/10">
                    {s.product.replace('Smart', '')}
                  </span>
                  <div className="relative text-center">
                    <div className="font-display text-5xl font-extrabold uppercase tracking-[0.2em] text-white">
                      {s.product}
                    </div>
                    <div className="mx-auto mt-4 h-0.5 w-14 bg-gold" />
                    <div className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                      Part of the EPCORA-EPC Stack
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
