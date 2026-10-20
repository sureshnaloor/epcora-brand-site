import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Landmark, ShieldAlert, Sparkles } from 'lucide-react';
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

const ROTATING = ['Deliveries', 'Documents', 'Guarantees', 'Payments', 'Vendors'];

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
  { value: 6, suffix: '', label: 'Schedule Dimensions per PO' },
  { value: 2, suffix: '', label: 'Guarantee Types Watched' },
  { value: 100, suffix: '%', label: 'Follow-Up Trail' },
  { value: 1, suffix: '', label: 'AI Expediting Brief per PO' },
];

const TICKER = [
  'Design Approvals',
  'ITP & Test Monitoring',
  'Payments · BG · LC',
  'Fabrication Progress',
  'Customs & Permits',
  'Delivery & Returns',
  'AI Expediting Briefs',
  'Lessons Learnt',
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

/* Browser-window mockup: PO schedule tracker */
const SCHEDULE_TABS = ['Design', 'Inspection', 'Payments', 'Progress', 'Shipping', 'Delivery'];

const MILESTONES = [
  { label: 'Design submission approved (Rev C)', state: 'done', date: '02 Sep' },
  { label: 'Advance & milestone payments released', state: 'done', date: '18 Sep' },
  { label: 'ITP witness tests — 8 of 12 passed', state: 'now', date: '04 Nov' },
  { label: 'Customs & shipping docs filed', state: 'next', date: '21 Nov' },
  { label: 'Dispatch & delivery inspection', state: 'next', date: '02 Dec' },
];

function ScheduleMock() {
  return (
    <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-navy shadow-cardhover">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        <span className="ml-3 text-[10px] font-semibold uppercase tracking-widest text-white/50">
          SmartExpediteSimple · PO Schedule Tracker
        </span>
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="font-display text-sm font-bold text-white">PO-4510082 · Centrifugal Pump Package</div>
            <div className="mt-0.5 text-[10px] text-white/50">Vendor: FlowServe Gulf FZE · Project: PX-114 Desalination EPC</div>
          </div>
          <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-amber-300">
            28 days to delivery
          </span>
        </div>

        {/* schedule tabs */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {SCHEDULE_TABS.map((t, i) => (
            <span
              key={t}
              className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${
                i === 2 ? 'bg-gold text-ink' : 'border border-white/15 bg-white/5 text-white/55'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        {/* milestones */}
        <div className="space-y-2">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.14, duration: 0.45 }}
              className={`flex items-center justify-between rounded-lg border px-3 py-2 text-[11px] ${
                m.state === 'now' ? 'border-gold/60 bg-gold/10' : 'border-white/10 bg-white/5'
              }`}
            >
              <span className="flex items-center gap-2 text-white/85">
                <span
                  className={`h-2 w-2 rounded-full ${
                    m.state === 'done' ? 'bg-emerald-400' : m.state === 'now' ? 'pulse-dot bg-gold' : 'bg-white/25'
                  }`}
                />
                {m.label}
              </span>
              <span className={`font-display font-bold ${m.state === 'now' ? 'text-gold' : 'text-white/50'}`}>{m.date}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-white/55">
          <span className="flex items-center gap-1.5">
            <Landmark size={10} className="text-gold" /> ABG valid · PBG expiring soon
          </span>
          <span>Follow-up thread: 14 entries</span>
        </div>
      </div>
    </div>
  );
}

export default function SPEHero() {
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
              Epcora Product · Post-PO Expediting
            </motion.p>

            <motion.h1 {...fade(0.15)} className="bordered-heading text-5xl !text-white sm:text-6xl xl:text-[4.2rem]">
              SmartExpedite<span className="text-gold">Simple</span>
            </motion.h1>

            <motion.p {...fade(0.25)} className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.18em] text-gold">
              Every PO. Every Document. Every Deadline.
            </motion.p>

            <motion.div {...fade(0.35)} className="mt-5 font-display text-2xl text-white/85 sm:text-3xl">
              Expedite your <FlipWord word={ROTATING[i]} />
            </motion.div>

            <motion.p {...fade(0.5)} className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              SmartExpediteSimple does the heavy lifting after the purchase order is placed — design submissions &amp;
              approvals, inspection test plans, payments &amp; guarantees, fabrication progress, shipping &amp; customs,
              delivery &amp; returns. All six dimensions of every PO in one schedule, follow-up threads that never get
              lost, and an AI expediting brief that tells you why a delivery is slipping and how to pull it back. Built for
              <span className="font-semibold text-white"> EPC expediting &amp; materials teams</span>.
            </motion.p>

            <motion.div {...fade(0.65)} className="mt-9 flex flex-wrap items-center gap-4">
              <a href="mailto:contact@xbeyond.online?subject=SmartExpediteSimple%20Demo%20Request" className="btn-gold">
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
              <ScheduleMock />
              <div className="absolute -bottom-8 -right-8 h-28 w-28 border-[10px] border-secondary/70" />

              {/* floating guarantee-alert chip */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.7 }}
                className="absolute -right-14 top-14 w-56 bg-white p-4 shadow-cardhover"
              >
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-600">
                  <ShieldAlert size={11} /> Guarantee Alert
                </div>
                <div className="mt-1.5 font-display text-sm font-bold text-primary">PBG expiring in 19 days</div>
                <div className="mt-1 flex items-center gap-1.5 text-[11px] text-body">
                  <Sparkles size={11} className="text-secondary" /> AI brief drafted for PO-4510082
                </div>
                <div className="mt-3 h-0.5 w-10 bg-gold" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* mobile visual */}
        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:hidden">
          <ScheduleMock />
        </div>
      </section>
      <TickerStrip />
    </>
  );
}
