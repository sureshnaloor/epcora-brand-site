import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle, ChevronDown, LayoutGrid, ArrowRight } from 'lucide-react';
import { footerProducts, serviceLinks } from '../data/content';

const links = [
  { label: 'Home', href: '/#top' },
  { label: 'Services', href: '/#services' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Why EPCORA Stack', href: '/#why-xbeyond' },
  { label: 'Founder', href: '/#founder' },
  { label: 'Contact', href: '/#contact' },
];

const productLinks = footerProducts.filter(p => p.href);

/* Desktop Products dropdown — standout trigger + hover panel */
function ProductsMenu() {
  return (
    <div className="group relative">
      <Link
        to="/products"
        className="nav-highlight flex items-center gap-1.5 font-display text-[13px] uppercase tracking-[0.15em]"
      >
        Products
        <ChevronDown size={15} className="transition-transform duration-300 group-hover:rotate-180" />
      </Link>

      {/* hover continuity bridge + panel */}
      <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="w-64 translate-y-2 border border-line bg-white py-2 shadow-cardhover transition-transform duration-200 group-hover:translate-y-0">
          <Link
            to="/products"
            className="flex items-center justify-between px-5 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-primary transition-colors hover:bg-mist hover:text-golddeep"
          >
            <span className="flex items-center gap-2">
              <LayoutGrid size={14} className="text-golddeep" /> All Products
            </span>
            <ArrowRight size={13} className="text-secondary" />
          </Link>
          <div className="mx-5 my-1 border-t border-line" />
          {productLinks.map(p => (
            <Link
              key={p.name}
              to={p.href}
              className="flex flex-col gap-0.5 px-5 py-2.5 transition-colors hover:bg-mist"
            >
              <span className="font-display text-[13px] font-semibold text-primary">{p.name}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-body/50">{p.tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Desktop Services dropdown — standard trigger + hover panel to coming-soon pages */
function ServicesMenu() {
  return (
    <div className="group relative">
      <Link
        to="/#services"
        className="nav-highlight flex items-center gap-1.5 font-display text-[13px] uppercase tracking-[0.15em]"
      >
        Services
        <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
      </Link>

      {/* hover continuity bridge + panel */}
      <div className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="w-72 translate-y-2 border border-line bg-white py-2 shadow-cardhover transition-transform duration-200 group-hover:translate-y-0">
          <Link
            to="/#services"
            className="flex items-center justify-between px-5 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-primary transition-colors hover:bg-mist hover:text-golddeep"
          >
            <span className="flex items-center gap-2">
              <LayoutGrid size={14} className="text-golddeep" /> All Services
            </span>
            <ArrowRight size={13} className="text-secondary" />
          </Link>
          <div className="mx-5 my-1 border-t border-line" />
          {serviceLinks.map(s => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="flex flex-col gap-0.5 px-5 py-2.5 transition-colors hover:bg-mist"
            >
              <span className="font-display text-[13px] font-semibold text-primary">{s.name}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-golddeep">On the works</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

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
            EPC<span className="text-secondary">ORA</span> Stack
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(l =>
            l.label === 'Products' ? (
              <ProductsMenu key={l.label} />
            ) : l.label === 'Services' ? (
              <ServicesMenu key={l.label} />
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="font-display text-[13px] font-semibold uppercase tracking-[0.15em] text-primary transition-colors hover:text-golddeep"
              >
                {l.label}
              </Link>
            )
          )}
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
              <div key={l.label}>
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`font-display text-sm uppercase tracking-[0.15em] hover:text-golddeep ${
                    l.label === 'Products' || l.label === 'Services' ? 'font-bold text-golddeep' : 'font-semibold text-primary'
                  }`}
                >
                  {l.label}
                </Link>
                {l.label === 'Products' && (
                  <div className="mt-2 flex flex-col gap-2 border-l-2 border-gold/50 pl-4">
                    <Link
                      to="/products"
                      onClick={() => setOpen(false)}
                      className="text-xs font-bold uppercase tracking-wider text-secondary"
                    >
                      All Products
                    </Link>
                    {productLinks.map(p => (
                      <Link
                        key={p.name}
                        to={p.href}
                        onClick={() => setOpen(false)}
                        className="text-xs font-semibold text-body hover:text-golddeep"
                      >
                        {p.name}
                      </Link>
                    ))}
                  </div>
                )}
                {l.label === 'Services' && (
                  <div className="mt-2 flex flex-col gap-2 border-l-2 border-gold/50 pl-4">
                    <Link
                      to="/#services"
                      onClick={() => setOpen(false)}
                      className="text-xs font-bold uppercase tracking-wider text-secondary"
                    >
                      All Services
                    </Link>
                    {serviceLinks.map(s => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        onClick={() => setOpen(false)}
                        className="text-xs font-semibold text-body hover:text-golddeep"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
