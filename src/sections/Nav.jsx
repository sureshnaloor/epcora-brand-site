import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const links = [
  { label: 'Home', href: '/#top' },
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Why xBeyond-EPC Stack', href: '/#why-xbeyond' },
  { label: 'Founder', href: '/#founder' },
  { label: 'Contact', href: '/#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'border-line shadow-card' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/#top" className="flex items-center gap-3">
          <img src="/images/epcora-mark.svg" alt="EPCORA logo" className="h-10 w-auto object-contain" />
          <span className="font-display text-xl font-extrabold tracking-tight text-primary">
            x<span className="text-secondary">Beyond</span>-EPC Stack
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(l => (
            <Link
              key={l.label}
              to={l.href}
              className="font-display text-[13px] font-semibold uppercase tracking-[0.15em] text-primary transition-colors hover:text-golddeep"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-gold px-6 py-2.5 font-display text-[13px] font-bold uppercase tracking-wider text-ink transition-colors duration-300 hover:bg-golddeep"
          >
            <MessageCircle size={15} /> Chat with Us
          </Link>
        </div>

        <button className="text-primary lg:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map(l => (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-primary hover:text-golddeep"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/#contact" onClick={() => setOpen(false)} className="btn-gold mt-2 px-6 py-3 text-xs">
              Chat with Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
