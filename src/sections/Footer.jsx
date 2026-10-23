import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { footerServices, footerProducts } from '../data/content';

/* Extruded 3D EPCORA mark — stacked layers in Z-space, slow perspective swing */
const MARK_LAYERS = 8;

function Mark3D() {
  const reduce = useReducedMotion();
  return (
    <div style={{ perspective: 800 }}>
      <motion.div
        animate={reduce ? undefined : { rotateY: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{ transformStyle: 'preserve-3d', rotateX: 6 }}
        className="relative h-24 w-24"
      >
        {Array.from({ length: MARK_LAYERS }).map((_, i) => (
          <img
            key={i}
            src="/images/epcora-mark-dark.svg"
            alt={i === 0 ? 'EPCORA' : ''}
            aria-hidden={i !== 0}
            draggable={false}
            className="absolute inset-0 h-full w-full select-none"
            style={{
              transform: `translateZ(${-i * 3}px)`,
              filter: i === 0 ? 'none' : 'brightness(0.32) saturate(0.85)',
            }}
          />
        ))}
      </motion.div>
      <div className="mark-floor-shadow" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-16 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <img src="/images/epcora-mark-dark.svg" alt="EPCORA logo" className="h-9 w-auto object-contain" />
            <span className="font-display text-xl font-extrabold text-white">
              x<span className="text-gold">Beyond</span>-EPC Stack
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed">
            Empowering businesses with decades of industry expertise and innovative digital solutions.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Linkedin, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#top"
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/60 transition-all hover:border-gold hover:text-gold"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Services</h4>
          <div className="mb-5 h-0.5 w-10 bg-secondary" />
          <ul className="space-y-3">
            {footerServices.map(s => (
              <li key={s.tag}>
                <Link to="/#services" className="text-sm transition-colors hover:text-gold">
                  {s.name} <span className="text-xs text-white/40">· {s.tag}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Products</h4>
          <div className="mb-5 h-0.5 w-10 bg-secondary" />
          <ul className="space-y-3">
            {footerProducts.map(p => (
              <li key={p.name}>
                {p.href ? (
                  <Link to={p.href} className="text-sm transition-colors hover:text-gold">
                    {p.name} <span className="text-xs text-white/40">· {p.tag}</span>
                  </Link>
                ) : (
                  <span className="text-sm text-white/45">
                    {p.name} <span className="text-xs text-white/30">· {p.tag}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Company</h4>
          <div className="mb-5 h-0.5 w-10 bg-secondary" />
          <ul className="space-y-3 text-sm">
            <li><Link to="/#why-xbeyond" className="transition-colors hover:text-gold">Why xBeyond-EPC Stack</Link></li>
            <li><Link to="/#founder" className="transition-colors hover:text-gold">About Us</Link></li>
            <li><Link to="/#contact" className="transition-colors hover:text-gold">Careers</Link></li>
            <li><Link to="/#contact" className="transition-colors hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-[0.2em] text-white">Legal</h4>
          <div className="mb-5 h-0.5 w-10 bg-secondary" />
          <ul className="space-y-3 text-sm">
            <li><a href="#top" className="transition-colors hover:text-gold">Privacy Policy</a></li>
            <li><a href="#top" className="transition-colors hover:text-gold">Terms of Service</a></li>
            <li><a href="#top" className="transition-colors hover:text-gold">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* EPCORA lockup — the company behind the stack */}
      <div className="mx-auto mt-14 flex max-w-7xl flex-col items-center gap-3 border-t border-white/10 px-6 pb-4 pt-12 text-center">
        <Mark3D />
        <div className="text-3d-gold font-display text-3xl font-extrabold tracking-[0.3em]">EPCORA</div>
        <div className="font-display text-[10px] font-semibold uppercase tracking-[0.35em] text-white/50 [text-shadow:0_2px_6px_rgba(0,0,0,0.6)]">
          Engineer · Procure · Construct
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 px-6 pt-6 text-xs text-white/40 sm:flex-row">
        <span>© 2026 xBeyond-EPC Stack. All rights reserved.</span>
        <span>Digital Transformation Solutions for Construction &amp; EPC</span>
      </div>
    </footer>
  );
}
