import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';
import { stats } from '../data/content';
import Ticker from './Ticker';

function Counter({ to, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        const t0 = performance.now();
        const tick = t => {
          const p = Math.min((t - t0) / 1600, 1);
          setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

const ROTATING = ['Assets', 'Projects', 'Vendors', 'Materials', 'Fleets', 'Sites'];

function FlipWord({ word }) {
  return (
    <span className="relative inline-block h-[1.3em] min-w-[5.6ch] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="inline-block whitespace-nowrap font-bold text-primary"
        >
          {word}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const fade = d => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease: [0.2, 0.8, 0.2, 1] },
});

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % ROTATING.length), 2300);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-gold">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-32 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pb-40 lg:pt-20">
        {/* text side */}
        <div>
          <motion.p {...fade(0.05)} className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink">
            <span className="h-2 w-2 rounded-full bg-primary pulse-dot" />
            AI-Powered Digital Transformation
          </motion.p>

          <motion.h1 {...fade(0.15)} className="bordered-heading text-4xl sm:text-5xl xl:text-[3.6rem]">
            Building the Future, <span className="text-ink">Digitally.</span>
          </motion.h1>

          <motion.div {...fade(0.35)} className="mt-6 font-display text-2xl text-ink/80 sm:text-3xl">
            Smart tools for <FlipWord word={ROTATING[i]} />
          </motion.div>

          <motion.p {...fade(0.5)} className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">
            AI-powered asset intelligence, process automation, and project control — purpose-built for the world's
            toughest <span className="font-semibold text-ink">construction &amp; EPC</span> sites.
          </motion.p>

          <motion.div {...fade(0.65)} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#services" className="btn-primary">
              Explore Our Services <ArrowRight size={17} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2.5 border-2 border-ink px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-ink transition-all duration-300 hover:bg-ink hover:text-gold">
              <MessageCircle size={17} /> Chat with Us
            </a>
          </motion.div>

          {/* stat pills */}
          <motion.div {...fade(0.85)} className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(s => (
              <div key={s.label} className="border-l-2 border-ink/15 pl-3">
                <div className="font-display text-3xl font-extrabold text-ink">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink/60">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* visual side — photo with frame decorations + overlapping navy stat card */}
        <motion.div {...fade(0.4)} className="relative hidden lg:block">
          <div className="float-soft relative ml-auto w-[92%]">
            {/* blue frame decoration, TM style */}
            <div className="absolute -left-6 -top-6 h-40 w-40 border-[10px] border-primary" />
            <img src="/images/hero.jpg" alt="Construction site operations" className="relative w-full object-cover shadow-cardhover" style={{ height: 480 }} />
            <div className="absolute -bottom-8 -right-6 h-28 w-28 border-[10px] border-golddeep/70" />

            {/* overlapping navy stats card, TM style */}
            <div className="absolute -bottom-16 -left-16 w-72 bg-primary p-7 text-white shadow-cardhover">
              <div className="font-display text-5xl font-extrabold leading-none">
                30<span className="text-gold">+</span>
              </div>
              <div className="mt-1 font-display text-sm font-semibold uppercase tracking-wider text-white/90">
                Years of EPC Expertise
              </div>
              <div className="mt-4 h-px w-12 bg-gold" />
              <p className="mt-4 text-sm leading-relaxed text-white/75">
                Backed by decades of experience in construction, supply chain and project delivery.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* mobile stat card */}
      <div className="mx-auto -mt-20 max-w-7xl px-6 pb-16 lg:hidden">
        <div className="bg-primary p-6 text-white shadow-card">
          <div className="font-display text-4xl font-extrabold">
            30<span className="text-gold">+</span> <span className="text-base font-semibold uppercase tracking-wider">Years of EPC Expertise</span>
          </div>
          <p className="mt-2 text-sm text-white/75">Backed by decades of experience in construction, supply chain and project delivery.</p>
        </div>
      </div>

      <Ticker className="relative z-10" />

      <motion.a
        href="#services"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-ink/60 transition-colors hover:text-primary lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={26} />
      </motion.a>
    </section>
  );
}
