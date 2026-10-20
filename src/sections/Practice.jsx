import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
};

/* TM "Our Practice" style band — navy gradient with gold accents, carrying the epcstack big quote */
export default function Practice() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-[#0A2E5C] to-ink py-28">
      {/* subtle diagonal sheen */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 90px)' }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div {...reveal}>
          <div className="eyebrow-center mb-6 !text-gold">Our Practice</div>
          <Quote size={52} className="mx-auto mb-6 rotate-180 text-gold" strokeWidth={1.2} />
          <p className="font-display text-3xl font-bold leading-snug text-white sm:text-4xl">
            “Let us do the <span className="text-gold">orchestrating</span> of your non-core processes, while your
            team focuses on <span className="text-gold">core business</span>”
          </p>
          <div className="mx-auto mt-8 h-1 w-16 bg-gold" />
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
            xBeyond-EPC Stack
          </p>
        </motion.div>
      </div>
    </section>
  );
}
