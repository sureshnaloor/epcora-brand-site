import { motion } from 'framer-motion';
import { valueProps } from '../data/content';

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
};

export default function WhyUs() {
  return (
    <section id="why-xbeyond" className="bg-denim scroll-mt-24 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
          <div className="eyebrow-center mb-4 !text-gold">Why xBeyond-EPC Stack</div>
          <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Built different, <span className="text-gold">on purpose</span>
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Compatibility, accountability, and transparency are the xBeyond-EPC Stack approach.
          </p>
          <div className="mx-auto mt-6 h-1 w-16 bg-gold" />
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v, i) => (
            <motion.div
              key={v.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.08 }}
              className="group bg-white p-8 text-center shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-cardhover"
            >
              <div
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full transition-colors duration-500 group-hover:bg-gold"
                style={{ background: `${v.a}14`, border: `1px solid ${v.a}45` }}
              >
                <v.icon size={24} style={{ color: v.a }} strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-lg font-bold text-primary">{v.title}</h3>
              <p className="mt-2 text-sm text-body">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
