import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Hammer } from 'lucide-react';
import { services } from '../data/content';
import { serviceLinks } from '../data/content';

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
          <div className="eyebrow-center mb-4">What We Do</div>
          <h2 className="font-display text-4xl font-bold leading-tight text-primary sm:text-5xl">
            Services built around <span className="text-secondary">your projects.</span>
          </h2>
          <p className="mt-5 text-lg text-body">
            Five service lines are taking shape behind the scenes — each crafted with the same care as our products,
            each one on the works.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 bg-gold" />
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.07 }}
              className="service-card group block"
            >
              <div className="flex items-start justify-between">
                <div className="icon-chip">
                  <s.icon size={26} strokeWidth={1.6} />
                </div>
                <span className="inline-flex items-center gap-1.5 bg-gold/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-golddeep">
                  <Hammer size={11} /> On the works
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-primary">{s.title}</h3>
              <div className="mt-1 text-sm font-semibold italic text-secondary">{s.tagline}</div>
              <p className="mt-4 text-sm leading-relaxed text-body/70">
                This service offering is currently being put together — coming soon.
              </p>
              <Link
                to={`/services/${serviceLinks[i].slug}`}
                className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:text-golddeep"
              >
                View service page <ArrowRight size={15} className="text-golddeep" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
