import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ScanLine, BadgeCheck, MapPin, CalendarCheck } from 'lucide-react';
import { fade, QRMatrix } from './shared';

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

const ROTATING = ['Machinery', 'Hand Tools', 'PPE', 'Instruments', 'Fixed Assets', 'Vehicles'];

function FlipWord({ word }) {
  return (
    <span className="relative inline-block h-[1.3em] min-w-[6ch] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={word}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-110%', opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="inline-block whitespace-nowrap font-bold text-gold"
        >
          {word}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const HERO_STATS = [
  { value: 99, suffix: '%', label: 'Loss Reduction' },
  { value: 0, suffix: '', label: 'Calibration Lapses' },
  { value: 25, suffix: '%', label: 'Capex Savings' },
  { value: 100, suffix: '%', label: 'Audit Ready' },
];

const TICKER = [
  'Mobile Machinery',
  'Hand Tools',
  'Fixed Assets',
  'Instruments & Gauges',
  'PPE & Consumables',
  'IT Equipment',
  'Camp Resources',
  'Vehicles & Fleets',
];

function TickerStrip() {
  const row = [...TICKER, ...TICKER];
  return (
    <div className="relative overflow-hidden border-t border-white/10 bg-ink py-5">
      <div className="marquee-track items-center gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* Phone mockup: camera view scanning a QR asset tag */
function PhoneMock() {
  return (
    <div className="relative mx-auto w-72 rounded-[2.6rem] border-[10px] border-ink bg-ink shadow-cardhover">
      <div className="relative overflow-hidden rounded-[1.9rem] bg-navy">
        {/* notch */}
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
        {/* camera view */}
        <div className="relative px-5 pb-6 pt-12">
          <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-white/50">
            <span>SmartTagScan</span>
            <span className="flex items-center gap-1 text-gold">
              <ScanLine size={11} /> Scanning
            </span>
          </div>

          {/* QR target */}
          <div className="relative mx-auto mt-5 w-40">
            <QRMatrix className="w-full rounded-md" fg="#0A1B33" />
            {/* corner brackets */}
            {['left-0 top-0 border-l-4 border-t-4', 'right-0 top-0 border-r-4 border-t-4', 'bottom-0 left-0 border-b-4 border-l-4', 'bottom-0 right-0 border-b-4 border-r-4'].map(
              (pos, i) => (
                <span key={i} className={`absolute h-7 w-7 border-gold ${pos}`} />
              )
            )}
            {/* sweep line */}
            <span className="scanline absolute left-1 right-1 h-0.5 bg-gold shadow-[0_0_12px_rgba(252,188,69,0.9)]" />
          </div>

          <p className="mt-4 text-center text-[11px] text-white/60">Point at any asset tag</p>

          {/* result card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-4 rounded-xl bg-white p-3.5 text-left shadow-card"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-[13px] font-bold text-primary">MME-2041 · CAT 320 Excavator</span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-emerald-700">
                Active
              </span>
            </div>
            <div className="mt-2.5 space-y-1.5 text-[10px] text-body">
              <div className="flex items-center gap-1.5">
                <BadgeCheck size={11} className="text-secondary" /> Custodian: Emp #1024 · S. Reyes
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={11} className="text-secondary" /> Site Alpha · WBS-4.1 · Container 4
              </div>
              <div className="flex items-center gap-1.5">
                <CalendarCheck size={11} className="text-secondary" /> Calibration valid · 84 days left
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ProductHero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % ROTATING.length), 2300);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <section id="top" className="bg-denim relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 90px)' }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:pt-20">
          {/* text side */}
          <div>
            <motion.p {...fade(0.05)} className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="pulse-dot h-2 w-2 rounded-full bg-gold" />
              Epcora Product · Asset Intelligence
            </motion.p>

            <motion.h1 {...fade(0.15)} className="bordered-heading text-5xl !text-white sm:text-6xl xl:text-[4.2rem]">
              SmartTag<span className="text-gold">Scan</span>
            </motion.h1>

            <motion.p {...fade(0.25)} className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.18em] text-gold">
              Every Asset. One Scan. Total Control.
            </motion.p>

            <motion.div {...fade(0.35)} className="mt-5 font-display text-2xl text-white/85 sm:text-3xl">
              Track your <FlipWord word={ROTATING[i]} />
            </motion.div>

            <motion.p {...fade(0.5)} className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              SmartTagScan turns any smartphone into an enterprise asset scanner — QR-tagged registers, role-based
              access, custody chains and calibration compliance in one secure, centralized workspace. Purpose-built
              for <span className="font-semibold text-white">construction &amp; EPC</span>, ready for every industry.
            </motion.p>

            <motion.div {...fade(0.65)} className="mt-9 flex flex-wrap items-center gap-4">
              <a href="mailto:contact@xbeyond.online?subject=SmartTagScan%20Demo%20Request" className="btn-gold">
                Book a Live Demo <ArrowRight size={17} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2.5 border-2 border-white px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Explore Features
              </a>
            </motion.div>

            {/* stat pills */}
            <motion.div {...fade(0.85)} className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {HERO_STATS.map(s => (
                <div key={s.label} className="border-l-2 border-gold/40 pl-3">
                  <div className="font-display text-3xl font-extrabold text-white">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wider text-white/55">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* visual side */}
          <motion.div {...fade(0.4)} className="relative hidden lg:block">
            <div className="float-soft relative ml-auto w-fit">
              <div className="absolute -left-8 -top-8 h-36 w-36 border-[10px] border-gold/80" />
              <PhoneMock />
              <div className="absolute -bottom-8 -right-8 h-28 w-28 border-[10px] border-secondary/70" />

              {/* floating custody chip */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.7 }}
                className="absolute -right-16 top-16 w-56 bg-white p-4 shadow-cardhover"
              >
                <div className="text-[10px] font-bold uppercase tracking-widest text-secondary">Custody Transferred</div>
                <div className="mt-1.5 font-display text-sm font-bold text-primary">Warehouse Rack A-02 → Site Alpha</div>
                <div className="mt-1 text-[11px] text-body">Checked out by Emp #1024 · Supervisor approved</div>
                <div className="mt-3 h-0.5 w-10 bg-gold" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* mobile visual */}
        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:hidden">
          <PhoneMock />
        </div>
      </section>
      <TickerStrip />
    </>
  );
}
