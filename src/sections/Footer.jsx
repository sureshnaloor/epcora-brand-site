import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerServices, footerProducts } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-ink pb-8 pt-16 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl bg-white p-1.5">
              <img src="/images/epcstack_logo_b.png" alt="xBeyond-EPC Stack Logo" className="h-8 w-auto object-contain" />
            </div>
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

      <div className="mx-auto mt-14 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 px-6 pt-6 text-xs text-white/40 sm:flex-row">
        <span>© 2026 xBeyond-EPC Stack. All rights reserved.</span>
        <span>Digital Transformation Solutions for Construction &amp; EPC</span>
      </div>
    </footer>
  );
}
