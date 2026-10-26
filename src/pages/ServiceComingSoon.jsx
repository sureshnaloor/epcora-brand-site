import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Hammer, Mail } from 'lucide-react';
import { serviceLinks } from '../data/content';

/* Generic coming-soon page for service offerings still on the works */
export default function ServiceComingSoon() {
  const { slug } = useParams();
  const service = serviceLinks.find(s => s.slug === slug);
  const name = service ? service.name : 'Service';
  const tag = service ? service.tag : '';

  return (
    <section className="bg-denim relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 90px)' }}
      />
      <div className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 bg-gold/20 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-gold"
        >
          <Hammer size={13} /> On the works
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-extrabold text-white sm:text-5xl"
        >
          {name}
        </motion.h1>
        {tag && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-sm font-semibold uppercase tracking-widest text-gold"
          >
            {tag}
          </motion.div>
        )}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
        >
          Coming soon — on the works! We are crafting this service offering with the same care as our products. Check
          back shortly, or write to us and we will tell you all about it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="mailto:contact@epcora.com?subject=Service%20Enquiry" className="btn-gold">
            <Mail size={16} /> Ask Us About It
          </a>
          <Link
            to="/#services"
            className="inline-flex items-center gap-2.5 border-2 border-white px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-primary"
          >
            <ArrowLeft size={16} /> Back to Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
