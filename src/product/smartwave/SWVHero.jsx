import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Nfc, Wallet, Users } from 'lucide-react';
import { fade, QRMatrix } from '../scanitsimple/shared';

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

const ROTATING = ['Connections', 'Communities', 'Circles', 'Ventures', 'Storefronts'];

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
  { value: 3, suffix: '', label: 'Ways to Share — NFC · QR · Wallet' },
  { value: 24, suffix: 'h', label: 'To Roll Out a Whole Team' },
  { value: 10, suffix: 'x', label: 'Lead Capture vs Paper' },
  { value: 90, suffix: '%', label: 'Print Cost Eliminated' },
];

const TICKER = [
  'Digital Cards',
  'Wallet Passes',
  'Interest Circles',
  'Mentoring & Teaching',
  'Second-Innings Ventures',
  'Business Spaces',
  'Event Access',
  'CRM & Analytics',
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

/* Browser-window mockup: digital card + wallet pass */
function CardMock() {
  return (
    <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-navy shadow-cardhover">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        <span className="ml-3 text-[10px] font-semibold uppercase tracking-widest text-white/50">
          SmartWave · Digital Card &amp; Community
        </span>
      </div>

      <div className="p-5">
        {/* the card */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-xl bg-gradient-to-br from-primary via-secondary to-primary p-5 shadow-cardhover"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 font-display text-lg font-extrabold text-white">
                AM
              </div>
              <div>
                <div className="font-display text-sm font-bold text-white">Ananya Menon</div>
                <div className="text-[10px] text-white/70">Mentor · Saturday Hikers Circle · Kochi</div>
              </div>
            </div>
            <Nfc size={18} className="text-gold" />
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div className="space-y-1 text-[10px] text-white/75">
              <div>ananya@smartwave.me</div>
              <div>+91 98470 00000 · smartwave.me/ananya</div>
            </div>
            <div className="rounded-lg bg-white p-1.5">
              <QRMatrix className="h-[52px] w-[52px]" fg="#074E84" />
            </div>
          </div>
        </motion.div>

        {/* wallet + circle rows */}
        <div className="mt-4 space-y-2">
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-[11px]"
          >
            <span className="flex items-center gap-2 text-white/85">
              <Wallet size={12} className="text-gold" /> Wallet pass — Apple &amp; Google
            </span>
            <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[9px] font-bold uppercase text-emerald-300">
              Added · auto-updates
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex items-center justify-between rounded-lg border border-gold/60 bg-gold/10 px-3 py-2.5 text-[11px]"
          >
            <span className="flex items-center gap-2 text-white/85">
              <Users size={12} className="text-gold" /> Saturday Hikers — 18 going · 06:30
            </span>
            <span className="font-display font-bold text-gold">Circle</span>
          </motion.div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-white/55">
          <span>Zero app installs — tap, scan or wallet</span>
          <span>88% of paper cards are binned in a week</span>
        </div>
      </div>
    </div>
  );
}

export default function SWVHero() {
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
              Epcora Product · Community &amp; Commerce
            </motion.p>

            <motion.h1 {...fade(0.15)} className="bordered-heading text-5xl !text-white sm:text-6xl xl:text-[4.2rem]">
              Smart<span className="text-gold">Wave</span>
            </motion.h1>

            <motion.p {...fade(0.25)} className="mt-4 font-display text-xl font-semibold uppercase tracking-[0.18em] text-gold">
              Every Member. Every Venture. Every Community.
            </motion.p>

            <motion.div {...fade(0.35)} className="mt-5 font-display text-2xl text-white/85 sm:text-3xl">
              Grow your <FlipWord word={ROTATING[i]} />
            </motion.div>

            <motion.p {...fade(0.5)} className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              SmartWave starts with a digital card that lives in any wallet — shared by NFC tap, QR scan or link — and
              grows into a community: mentors teaching, neighbours hiking, retirees launching second-innings ventures,
              side hustles finding their first customers. And for businesses, rentable web spaces that carry your
              documents, certificates, past works and client lists.
              <span className="font-semibold text-white"> One identity, one community, one wave.</span>
            </motion.p>

            <motion.div {...fade(0.65)} className="mt-9 flex flex-wrap items-center gap-4">
              <a href="mailto:contact@xbeyond.online?subject=SmartWave%20Demo%20Request" className="btn-gold">
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
              <CardMock />
              <div className="absolute -bottom-8 -right-8 h-28 w-28 border-[10px] border-secondary/70" />

              {/* floating community chip */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.7 }}
                className="absolute -right-14 top-14 w-56 bg-white p-4 shadow-cardhover"
              >
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                  <Users size={11} /> New Circle Member
                </div>
                <div className="mt-1.5 font-display text-sm font-bold text-primary">Rajesh joined Mentors Circle</div>
                <div className="mt-1 text-[11px] text-body">Offering: Project controls coaching, Saturdays</div>
                <div className="mt-3 h-0.5 w-10 bg-gold" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* mobile visual */}
        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:hidden">
          <CardMock />
        </div>
      </section>
      <TickerStrip />
    </>
  );
}
