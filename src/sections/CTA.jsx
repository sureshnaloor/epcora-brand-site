import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
};

/* TM "CALL US NOW" image-band CTA */
export default function CTA() {
  return (
    <section id="contact" className="scroll-mt-24 relative overflow-hidden">
      <img src="/images/cta.jpg" alt="Construction site" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary/85" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 90px)' }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
        <motion.div {...reveal}>
          <div className="eyebrow-center mb-5 !text-gold">Want to know more about our services?</div>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Ready to Digitize Your <br className="hidden sm:block" />
            Construction Operations?
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 bg-gold" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Partner with us to leverage AI and automation for enhanced efficiency, accuracy, and project success in
            your construction business.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@epcora.com" className="btn-gold">
              Contact Our Team <ArrowRight size={17} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 border-2 border-white px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Learn More About Us
            </a>
          </div>

          {/* physical address */}
          <div className="mx-auto mt-14 flex max-w-md items-start gap-4 border-t border-white/15 pt-8 text-left">
            <MapPin size={20} className="mt-1 shrink-0 text-gold" />
            <p className="text-sm leading-relaxed text-white/80">
              <span className="font-display text-base font-bold uppercase tracking-wider text-gold">
                EPCORA Private Limited
              </span>
              <br />
              COVAI Tech Park, Kalapatti,
              <br />
              Coimbatore, India 641014
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
