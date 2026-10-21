import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { QrCode, HardHat, Boxes, Link2, Waves, Handshake, ArrowRight, ArrowUpRight, ShoppingCart, PackageCheck, LayoutGrid } from 'lucide-react';
import { reveal, SectionHead } from '../product/scanitsimple/shared';

const PRODUCTS = [
  {
    icon: QrCode,
    name: 'ScanItSimple',
    tagline: 'Every Asset. One Scan. Total Control.',
    desc: 'QR-driven asset intelligence — registers, role-based access, custody chains, calibration compliance and a live operations dashboard.',
    href: '/products/scanitsimple',
    live: true,
    a: '#074E84',
  },
  {
    icon: HardHat,
    name: 'SmartProject',
    tagline: 'Every Package. Every Dollar. Every Hour.',
    desc: 'Intelligent project controls — 9-level WBS, work-package budgets, real-time earned value and audit-proof baselining.',
    href: '/products/smartproject',
    live: true,
    a: '#2380C6',
  },
  {
    icon: ShoppingCart,
    name: 'SmartProcureSimple',
    tagline: 'Every Tender. Every Bid. Every Clause.',
    desc: 'The vendor bid portal — account-free secure offer links, online + Excel bid intake, normalized comparison statements and clause diffing.',
    href: '/products/smartprocuresimple',
    live: true,
    a: '#D64550',
  },
  {
    icon: PackageCheck,
    name: 'SmartExpediteSimple',
    tagline: 'Every PO. Every Document. Every Deadline.',
    desc: 'Post-PO expediting — design-to-delivery schedules across six dimensions, guarantee & LC watch, AI expediting briefs and a follow-up trail that holds vendors to their word.',
    href: '/products/smartexpeditesimple',
    live: true,
    a: '#B45309',
  },
  {
    icon: Boxes,
    name: 'SmartClass',
    tagline: 'Every Material. One Language. Zero Duplicates.',
    desc: 'AI materials data intelligence — description cleansing to SAP-ready formats, three-level G/L-mapped classification and duplicate detection that plugs into any ERP.',
    href: '/products/smartclass',
    live: true,
    a: '#0E9F8A',
  },
  {
    icon: Waves,
    name: 'SmartWave',
    tagline: 'Every Member. Every Venture. Every Community.',
    desc: 'Digital cards & wallet passes that grow into interest circles, mentoring, second-innings storefronts — and rentable business spaces with real proof.',
    href: '/products/smartwave',
    live: true,
    a: '#E8A020',
  },
  {
    icon: Link2,
    name: 'SmartLink',
    tagline: 'Supply Chain Solutions',
    desc: 'End-to-end procurement, warehousing and logistics visibility with a mini-ERP that integrates with your existing stack.',
    live: false,
    a: '#7C5CD6',
  },
  {
    icon: Handshake,
    name: 'SmartFlow',
    tagline: 'Vendor Management',
    desc: 'Structured vendor prequalification, onboarding, evaluation and compliance tracking across your vendor base.',
    live: false,
    a: '#D64550',
  },
  {
    icon: LayoutGrid,
    name: 'xBeyond ERP',
    tagline: 'CRM · HRM · GL · AP · AR',
    desc: 'The core ERP suite — customer relationships, HR, general ledger, payables and receivables — completing the xBeyond-EPC Stack.',
    live: false,
    a: '#0A1B33',
  },
];

export default function Products() {
  return (
    <>
      {/* hero band */}
      <section className="bg-denim relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 90px)' }}
        />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <motion.p {...{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7 } }} className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="pulse-dot h-2 w-2 rounded-full bg-gold" />
            Epcora Product Family
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bordered-heading max-w-3xl text-4xl !text-white sm:text-5xl"
          >
            One stack. Every operation covered.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
          >
            Purpose-built products for construction &amp; EPC — from asset intelligence and project controls to supply
            chain and vendor ecosystems. Each one stands alone; together they are the xBeyond-EPC Stack.
          </motion.p>
        </div>
      </section>

      {/* product grid */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHead
            eyebrow="Products"
            title="Explore the family"
            sub="Live product pages below — the rest of the family is on the way."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => {
              const inner = (
                <>
                  <div className="mb-6 flex items-start justify-between">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: p.a }}
                    >
                      <p.icon size={24} />
                    </div>
                    {p.live ? (
                      <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
                        <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-500" /> Live
                      </span>
                    ) : (
                      <span className="rounded-full bg-mist px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-body/70">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary">{p.name}</h3>
                  <div className="mt-1 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-golddeep">
                    {p.tagline}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{p.desc}</p>
                  <div className="mt-6 flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-wider">
                    {p.live ? (
                      <span className="flex items-center gap-2 text-secondary transition-colors group-hover:text-golddeep">
                        Explore Product <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    ) : (
                      <span className="text-body/50">Coming soon — on the works!</span>
                    )}
                  </div>
                </>
              );
              return p.live ? (
                <motion.div key={p.name} {...reveal} transition={{ ...reveal.transition, delay: (i % 3) * 0.08 }}>
                  <Link to={p.href} className="service-card group flex h-full flex-col">
                    {inner}
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key={p.name}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: (i % 3) * 0.08 }}
                  className="service-card group flex h-full flex-col opacity-75"
                >
                  {inner}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* mini CTA */}
      <section className="bg-mist py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <motion.div {...reveal}>
            <div className="eyebrow-center mb-4">Not sure where to start?</div>
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Tell us the problem — we’ll point you at the product.</h2>
            <a href="mailto:contact@xbeyond.online?subject=Product%20Enquiry" className="btn-primary mt-8">
              Talk to Our Team <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
