import { motion } from 'framer-motion';

/* entrance fade, offset by delay */
export const fade = d => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease: [0.2, 0.8, 0.2, 1] },
});

/* scroll-into-view reveal */
export const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
};

export function SectionHead({ eyebrow, title, sub, center = false, dark = false }) {
  return (
    <motion.div {...reveal} className={`${center ? 'mx-auto text-center' : ''} mb-14 max-w-3xl`}>
      <div className={`${center ? 'eyebrow-center' : 'eyebrow'} mb-5 ${dark ? '!text-gold' : ''}`}>{eyebrow}</div>
      <h2
        className={`${
          center ? '' : 'bordered-heading '
        }font-display text-3xl font-bold leading-snug sm:text-4xl ${dark ? 'text-white' : 'text-primary'} ${
          center ? 'font-bold' : ''
        }`}
      >
        {title}
      </h2>
      {sub && <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-white/75' : 'text-body'}`}>{sub}</p>}
    </motion.div>
  );
}

/* deterministic QR-style matrix rendered as SVG — decorative, not scannable */
export function QRMatrix({ size = 21, module = 6, fg = '#05052D', bg = '#FFFFFF', className = '' }) {
  const cells = [];
  const inFinder = (r, c) => (r < 7 && c < 7) || (r < 7 && c >= size - 7) || (r >= size - 7 && c < 7);
  const finderOn = (r, c) => {
    const fr = r < 7 ? r : r >= size - 7 ? r - (size - 7) : 0;
    const fc = c < 7 ? c : c >= size - 7 ? c - (size - 7) : 0;
    if (fr === 0 || fr === 6 || fc === 0 || fc === 6) return true;
    if (fr >= 2 && fr <= 4 && fc >= 2 && fc <= 4) return true;
    return false;
  };
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      let on;
      if (inFinder(r, c)) {
        on = finderOn(r, c);
      } else {
        on = (r * 31 + c * 17 + ((r * c) % 5) * 13) % 7 < 3;
      }
      if (on) cells.push(<rect key={`${r}-${c}`} x={c * module} y={r * module} width={module} height={module} fill={fg} />);
    }
  }
  const dim = size * module;
  return (
    <svg viewBox={`0 0 ${dim} ${dim}`} className={className} role="img" aria-label="QR code">
      <rect width={dim} height={dim} fill={bg} />
      {cells}
    </svg>
  );
}
