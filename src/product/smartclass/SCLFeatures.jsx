import { motion } from 'framer-motion';
import {
  Wand2,
  FileCog,
  Layers,
  FileSpreadsheet,
  SearchCheck,
  AlignLeft,
  GraduationCap,
  Database,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const FEATURES = [
  {
    icon: Wand2,
    title: 'AI Description Cleansing',
    desc: 'Free-text chaos in — governed master data out.',
    points: ['Messy legacy descriptions rewritten to convention', 'Abbreviations applied consistently (SS316, RTJ, #)', 'Uppercase, comma-separated, search-friendly output'],
  },
  {
    icon: FileCog,
    title: 'Template-Driven Standardization',
    desc: 'You define the pattern once; the AI applies it ten thousand times.',
    points: ['Primary, secondary & tertiary characteristic fields', 'Two example transformations train the pattern', 'Templates per material family — gaskets, seals, O-rings'],
  },
  {
    icon: Layers,
    title: 'Three-Level Classification',
    desc: 'Every material filed exactly where finance and procurement expect it.',
    points: ['Primary → secondary → tertiary group hierarchy', 'Primary groups mapped to G/L accounts', 'Drives material search, reporting & accounting'],
  },
  {
    icon: FileSpreadsheet,
    title: 'Batch CSV Processing',
    desc: 'Point it at a legacy extract and watch the progress bar move.',
    points: ['Description column auto-detected', 'Real-time progress on thousands of rows', 'Separate CSV downloads per result category'],
  },
  {
    icon: SearchCheck,
    title: 'Duplicate Detection',
    desc: 'The same item spelled three ways is caught before it enters the ERP.',
    points: ['Near-duplicates flagged with match scores', 'Merge candidates surfaced for review', 'Inventory bloat stopped at the gate'],
  },
  {
    icon: AlignLeft,
    title: 'Short & Long Descriptions',
    desc: 'Both formats generated, both to standard.',
    points: ['Short: NOUN,MODIFIER,ATTRIBUTE — 40-char SAP limit', 'Long: full specs, standards & manufacturer detail', 'Enforced length limits with oversized bucket'],
  },
  {
    icon: GraduationCap,
    title: 'Learning Loop',
    desc: 'Your corrections become tomorrow’s examples.',
    points: ['Learning examples stored and reused', 'ML enhancement improves with every batch', 'The departing cataloguer’s knowledge, captured'],
  },
  {
    icon: Database,
    title: 'ERP-Ready & Auditable',
    desc: 'Built for SAP conventions, open to any ERP.',
    points: ['Formats aligned to SAP description standards', 'Material catalogue with full-text search', 'Complete processing history per batch'],
  },
];

export default function SCLFeatures() {
  return (
    <section id="features" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Feature deep-dive"
          title="Materials master data, engineered end to end"
          sub="Eight capabilities that turn a legacy extract into governed, classified, duplicate-free master data — in your convention, at AI speed."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              {...reveal}
              transition={{ ...reveal.transition, delay: (i % 4) * 0.08 }}
              className="service-card group flex flex-col"
            >
              <div className="icon-chip">
                <f.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold leading-snug text-primary">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{f.desc}</p>
              <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                {f.points.map(pt => (
                  <li key={pt} className="check-item">
                    <span className="check-badge">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5.5L4 8L8.5 2.5" stroke="#E8A020" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-[13px]">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
