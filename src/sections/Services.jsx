import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services, serviceDetails } from '../data/content';

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
            Six solutions. <span className="text-secondary">One digital stack.</span>
          </h2>
          <p className="mt-5 text-lg text-body">
            Comprehensive solutions tailored to meet the diverse needs of the construction projects sector.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 bg-gold" />
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={`#${serviceDetails[i].product.toLowerCase()}`}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.07 }}
              className="service-card group block"
            >
              <div className="icon-chip">
                <s.icon size={26} strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-xl font-bold text-primary">{s.title}</h3>
              <div className="mt-1 text-sm font-semibold italic text-secondary">{s.tagline}</div>
              <p className="mt-4 text-sm leading-relaxed text-body">{s.desc}</p>
              <div className="mt-6 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-primary opacity-0 transition-all duration-500 group-hover:opacity-100">
                Discover more <ArrowRight size={15} className="text-golddeep" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
