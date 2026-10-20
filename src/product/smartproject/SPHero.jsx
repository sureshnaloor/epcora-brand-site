import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, AlertTriangle, TrendingDown, Lock } from 'lucide-react';
import { fade } from '../scanitsimple/shared';

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

const ROTATING = ['Schedules', 'Budgets', 'Crews', 'Equipment', 'Risks'];

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
  { value: 9, suffix: '', label: 'WBS Levels Deep' },
  { value: 0, suffix: '', label: 'Budget Leakages' },
  { value: 3, suffix: '', label: 'Resource Classes' },
  { value: 100, suffix: '%', label: 'Audit-Proof History' },
];

const TICKER = [
  'Gantt Scheduling',
  'Work Packages',
  'Earned Value',
  'Resource Utilization',
  'Risk Register',
  'Procurement & POs',
  'Amendments',
  'Timesheets',
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

/* Browser-window mockup: mini Gantt with critical path + CPI flag */
const GANTT_ROWS = [
  { code: '1.1', name: 'Foundation & Substructure', start: 4, span: 30, critical: true },
  { code: '1.2', name: 'Structural Frame', start: 26, span: 34, critical: true },
  { code: '2.1', name: 'Envelope & Glazing', start: 52, span: 24, critical: false },
  { code: '2.2', name: 'MEP First Fix', start: 56, span: 22, critical: true },
  { code: '3.1', name: 'Fit-Out & Finishes', start: 74, span: 20, critical: false },
];

function GanttMock() {
  return (
    <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-navy shadow-cardhover">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        <span className="ml-3 text-[10px] font-semibold uppercase tracking-widest text-white/50">
          SmartProject · Gantt &amp; Critical Path
        </span>
      </div>

      <div className="p-5">
        {/* timeline header */}
        <div className="mb-3 grid grid-cols-[130px_1fr] items-end gap-3">
          <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Work Package</span>
          <div className="flex justify-between text-[9px] font-semibold text-white/35">
            <span>NOV</span><span>DEC</span><span>JAN</span><span>FEB</span>
          </div>
        </div>

        {GANTT_ROWS.map((r, i) => (
          <motion.div
            key={r.code}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
            className="mb-3 grid grid-cols-[130px_1fr] items-center gap-3"
          >
            <div className="truncate text-[10px] text-white/70">
              <span className="font-semibold text-gold/90">{r.code}</span> {r.name}
            </div>
            <div className="relative h-4 rounded bg-white/5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${r.span}%` }}
                transition={{ delay: 0.7 + i * 0.15, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                className={`absolute top-1/2 h-2 -translate-y-1/2 rounded-full ${
                  r.critical ? 'bg-gold shadow-[0_0_10px_rgba(252,188,69,0.5)]' : 'bg-secondary'
                }`}
                style={{ left: `${r.start}%` }}
              />
            </div>
          </motion.div>
        ))}

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-white/55">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-gold" /> Critical path
          </span>
          <span className="flex items-center gap-1.5">
            <Lock size={10} className="text-gold" /> Baseline locked · v3 (amd_2)
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SPHero() {
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
              Epcora Product · Project Controls
            </motion.p>

            <motion.h1 {...fade(0.15)} className="bordered-heading text-5xl !text-white sm:text-6xl xl:text-[4.2rem]">
              SmartProject
            </motion.h1>

            <motion.p {...fade(0.25)} className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.18em] text-gold">
              Every Package. Every Dollar. Every Hour.
            </motion.p>

            <motion.div {...fade(0.35)} className="mt-5 font-display text-2xl text-white/85 sm:text-3xl">
              One workspace for your <FlipWord word={ROTATING[i]} />
            </motion.div>

            <motion.p {...fade(0.5)} className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              SmartProject bridges the gap between project scheduling, cost control and company-wide resource
              utilization — a 9-level WBS engine, work-package budgets, real-time earned value and immutable
              baselining, purpose-built for <span className="font-semibold text-white">complex engineering &amp; construction</span>.
            </motion.p>

            <motion.div {...fade(0.65)} className="mt-9 flex flex-wrap items-center gap-4">
              <a href="mailto:contact@xbeyond.online?subject=SmartProject%20Demo%20Request" className="btn-gold">
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
              <GanttMock />
              <div className="absolute -bottom-8 -right-8 h-28 w-28 border-[10px] border-secondary/70" />

              {/* floating CPI warning chip */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.7 }}
                className="absolute -right-14 top-14 w-56 bg-white p-4 shadow-cardhover"
              >
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-red-600">
                  <AlertTriangle size={11} /> CPI Below 1.0
                </div>
                <div className="mt-1.5 font-display text-sm font-bold text-primary">WP 2.2 · MEP First Fix</div>
                <div className="mt-1 flex items-center gap-1.5 text-[11px] text-body">
                  <TrendingDown size={11} className="text-red-500" /> CPI 0.94 · CV −$18,400 · flagged in real time
                </div>
                <div className="mt-3 h-0.5 w-10 bg-gold" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* mobile visual */}
        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:hidden">
          <GanttMock />
        </div>
      </section>
      <TickerStrip />
    </>
  );
}
