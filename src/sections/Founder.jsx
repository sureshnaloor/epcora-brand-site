import { motion } from 'framer-motion';

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
};

/* TM "Our Vision" white-card pattern, carrying the founder profile */
export default function Founder() {
  return (
    <section id="founder" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div {...reveal} className="relative">
          {/* gold corner accent */}
          <div className="absolute -left-3 -top-3 h-24 w-24 border-l-4 border-t-4 border-gold" />
          <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-4 border-r-4 border-primary/20" />

          <div className="relative grid items-center gap-10 bg-white p-10 shadow-cardhover sm:p-14 md:grid-cols-[auto_1fr]">
            <div className="mx-auto">
              <div className="h-40 w-40 rounded-full bg-gradient-to-br from-primary via-secondary to-gold p-[3px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <span className="font-display text-5xl font-extrabold text-primary">SM</span>
                </div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="eyebrow mb-3">Meet Our Founder</div>
              <h3 className="font-display text-3xl font-bold text-primary">Suresh Naloor Menon</h3>
              <div className="mt-2 h-0.5 w-12 bg-gold" />
              <p className="mt-4 leading-relaxed text-body">
                Supply chain and project professional with a career across India's Oil &amp; Gas PSU Giant and then in
                multinationals across the Middle East. Now embarking on an entrepreneurial journey to share decades of
                wisdom with emerging businesses.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-mist px-5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-golddeep pulse-dot" />
                <span className="text-sm font-medium text-navy">Executed hundreds of mega projects</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
