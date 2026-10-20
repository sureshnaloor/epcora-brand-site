import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, SearchCheck, Layers } from 'lucide-react';
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

const ROTATING = ['Descriptions', 'Catalogues', 'Classifications', 'Duplicates', 'Materials'];

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
  { value: 3, suffix: '', label: 'Classification Levels' },
  { value: 40, suffix: '', label: 'Char SAP Short Description' },
  { value: 2, suffix: '', label: 'Examples Train the AI' },
  { value: 4, suffix: '', label: 'Result Buckets per Batch' },
];

const TICKER = [
  'Description Cleansing',
  '3-Level Classification',
  'G/L Account Mapping',
  'Duplicate Detection',
  'Batch CSV Processing',
  'Learning Examples',
  'SAP-Ready Formats',
  'Catalogue Search',
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

/* Browser-window mockup: before → after standardization */
const ROWS = [
  { raw: 'spiral wound gasket, 2 inch 300#, ss316', clean: 'GASKET,SPRL WND,2IN,300#,SS316' },
  { raw: '2 inch class 300 spiral wound ss316 gasket', clean: 'GASKET,SPRL WND,2IN,300#,SS316', dupe: true },
  { raw: 'gasket, 3 inch 600#, ss304', clean: 'GASKET,SPRL WND,3IN,600#,SS304' },
];

function CleanseMock() {
  return (
    <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-navy shadow-cardhover">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        <span className="ml-3 text-[10px] font-semibold uppercase tracking-widest text-white/50">
          SmartClass · Material Standardization
        </span>
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="font-display text-sm font-bold text-white">Batch: gaskets_q4.csv · 3,214 rows</div>
            <div className="mt-0.5 text-[10px] text-white/50">Template: GASKET · size+rating · material+type</div>
          </div>
          <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-emerald-300">
            2,908 standardized
          </span>
        </div>

        {ROWS.map((r, i) => (
          <motion.div
            key={r.raw}
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
            className={`mb-2 rounded-lg border px-3 py-2.5 text-[11px] ${
              r.dupe ? 'border-amber-400/50 bg-amber-400/10' : 'border-white/10 bg-white/5'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="truncate text-white/45 line-through decoration-white/30">{r.raw}</span>
              {r.dupe && (
                <span className="shrink-0 rounded-full bg-amber-400/20 px-2 py-0.5 text-[8px] font-bold uppercase text-amber-300">
                  duplicate
                </span>
              )}
            </div>
            <div className="mt-1 flex items-center gap-2">
              <Sparkles size={10} className="shrink-0 text-gold" />
              <span className="font-mono font-bold text-gold">{r.clean}</span>
            </div>
          </motion.div>
        ))}

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-white/55">
          <span className="flex items-center gap-1.5">
            <Layers size={10} className="text-gold" /> Classified: Sealing → Gaskets → Spiral Wound
          </span>
          <span>G/L 4102 mapped</span>
        </div>
      </div>
    </div>
  );
}

export default function SCLHero() {
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
              Epcora Product · Materials Data Intelligence
            </motion.p>

            <motion.h1 {...fade(0.15)} className="bordered-heading text-5xl !text-white sm:text-6xl xl:text-[4.2rem]">
              Smart<span className="text-gold">Class</span>
            </motion.h1>

            <motion.p {...fade(0.25)} className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.18em] text-gold">
              Every Material. One Language. Zero Duplicates.
            </motion.p>

            <motion.div {...fade(0.35)} className="mt-5 font-display text-2xl text-white/85 sm:text-3xl">
              Cleanse your <FlipWord word={ROTATING[i]} />
            </motion.div>

            <motion.p {...fade(0.5)} className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              SmartClass turns chaotic material descriptions into governed master data — AI-driven cleansing into
              SAP-ready short and long formats, three-level classification mapped to your G/L accounts, and duplicate
              detection that stops catalogue bloat before it starts. Trained on
              <span className="font-semibold text-white"> your examples, in your language</span>.
            </motion.p>

            <motion.div {...fade(0.65)} className="mt-9 flex flex-wrap items-center gap-4">
              <a href="mailto:contact@xbeyond.online?subject=SmartClass%20Demo%20Request" className="btn-gold">
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
              <CleanseMock />
              <div className="absolute -bottom-8 -right-8 h-28 w-28 border-[10px] border-secondary/70" />

              {/* floating duplicate chip */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.7 }}
                className="absolute -right-14 top-14 w-56 bg-white p-4 shadow-cardhover"
              >
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-600">
                  <SearchCheck size={11} /> Near-Duplicate Flagged
                </div>
                <div className="mt-1.5 font-display text-sm font-bold text-primary">99.2% match with MAT-0048213</div>
                <div className="mt-1 text-[11px] text-body">Same gasket, three spellings — merged before ERP entry</div>
                <div className="mt-3 h-0.5 w-10 bg-gold" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* mobile visual */}
        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:hidden">
          <CleanseMock />
        </div>
      </section>
      <TickerStrip />
    </>
  );
}
