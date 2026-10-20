import { motion } from 'framer-motion';
import { Check, Building2 } from 'lucide-react';
import { industries } from '../data/content';

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
};

/* TM about-section pattern: framed image left, eyebrow + bordered heading + gold check list right */
export default function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 overflow-hidden bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* image side */}
        <motion.div {...reveal} className="relative mx-auto w-full max-w-lg">
          <div className="absolute -left-5 -top-5 h-36 w-36 border-[10px] border-primary" />
          <img src="/images/industries.jpg" alt="Industrial project planning" className="relative w-full object-cover shadow-cardhover" style={{ height: 440 }} />
          <div className="absolute -bottom-6 -right-5 border-[10px] border-gold bg-white/0 p-0">
            <div className="h-24 w-24 bg-gold/0" />
          </div>
          {/* trusted counter chip */}
          <div className="absolute -bottom-8 left-8 flex items-center gap-4 bg-white px-6 py-4 shadow-cardhover">
            <span className="font-display text-4xl font-extrabold text-primary">
              100<span className="text-golddeep">s</span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-body">
              Mega Projects<br />Executed
            </span>
          </div>
        </motion.div>

        {/* text side */}
        <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}>
          <div className="eyebrow mb-4">Industries We Serve</div>
          <h2 className="bordered-heading text-4xl sm:text-5xl">
            We speak <span className="text-secondary">heavy industry</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-body">
            Digital transformation solutions across key industrial sectors.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            From power generation to green energy, upstream to downstream — we bring decades of EPC domain expertise
            to every asset, material and project we digitize.
          </p>

          <div className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {industries.map(ind => (
              <div key={ind.name} className="check-item">
                <span className="check-badge">
                  <Check size={12} strokeWidth={3.5} className="text-golddeep" />
                </span>
                {ind.name}
              </div>
            ))}
          </div>

          {/* info card on light lavender, TM style */}
          <div className="mt-10 flex max-w-md items-start gap-5 bg-mist p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary text-white">
              <Building2 size={22} strokeWidth={1.6} />
            </div>
            <p className="text-sm font-medium leading-relaxed text-navy">
              Understanding your process, customising to your requirements and a quick transition to the best digital
              administration platform in the business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
