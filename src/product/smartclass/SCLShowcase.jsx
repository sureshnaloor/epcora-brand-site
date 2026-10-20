import { motion } from 'framer-motion';
import {
  FileCog,
  Sparkles,
  Layers,
  Landmark,
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  HelpCircle,
  Download,
  Search,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

/* ---- Mock 1: template configuration ---- */
function TemplateMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Template Configuration</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">Teach the AI your convention</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
          <FileCog size={11} /> 3 examples loaded
        </span>
      </div>

      <div className="mt-5 space-y-2.5">
        {[
          ['Primary characteristic', 'GASKET, SEAL, O-RING'],
          ['Secondary (size & rating)', '2 INCH 300# · 3 INCH 600#'],
          ['Tertiary (material & type)', 'SPIRAL WOUND SS316 · NEOPRENE'],
          ['Other specifications', 'RING JOINT · RTJ'],
        ].map(([l, v]) => (
          <div key={l} className="flex items-center justify-between border border-line px-4 py-2.5 text-[13px]">
            <span className="text-body">{l}</span>
            <span className="font-mono text-[12px] font-bold text-primary">{v}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 border border-line bg-mist/50 p-4">
        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-golddeep">
          <Sparkles size={12} /> Example transformation
        </div>
        <div className="mt-2 font-mono text-[11px] leading-relaxed">
          <div className="text-body/70">in:&nbsp;&nbsp;spiral wound gasket, 2 inch 300#, ss316</div>
          <div className="font-bold text-primary">out: GASKET,SPRL WND,2IN,300#,SS316</div>
        </div>
      </div>

      <p className="mt-4 border-t border-line pt-4 text-[11px] text-body/70">
        Two examples minimum — the AI generalizes your pattern across the whole batch.
      </p>
    </div>
  );
}

/* ---- Mock 2: batch results ---- */
const BUCKET_ROWS = [
  { icon: CheckCircle2, name: 'Standardized', count: '2,908', bar: 'w-[90%]', cls: 'text-emerald-600 bg-emerald-500' },
  { icon: AlertTriangle, name: 'Oversized (>40 char)', count: '142', bar: 'w-[6%]', cls: 'text-amber-600 bg-amber-400' },
  { icon: XCircle, name: 'Uncleansed', count: '118', bar: 'w-[5%]', cls: 'text-red-600 bg-red-400' },
  { icon: HelpCircle, name: 'Characteristic N/A', count: '46', bar: 'w-[3%]', cls: 'text-sky-600 bg-sky-400' },
];

function BatchMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Batch Processing</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">3,214 rows in — four honest buckets out</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
          <CheckCircle2 size={11} /> Complete · 6 min
        </span>
      </div>

      <div className="mt-5 border border-line bg-mist/50 p-4">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-navy">
          <FileSpreadsheet size={14} className="text-golddeep" />
          gaskets_q4.csv — description column auto-detected
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-line">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-secondary to-emerald-500" />
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        {BUCKET_ROWS.map(b => (
          <div key={b.name} className="flex items-center justify-between border border-line px-4 py-2.5 text-[13px]">
            <span className="flex items-center gap-2 font-medium text-navy">
              <b.icon size={14} className={b.cls.split(' ')[0]} />
              {b.name}
            </span>
            <span className="flex items-center gap-3">
              <span className="font-display font-bold text-primary">{b.count}</span>
              <Download size={12} className="text-secondary" />
            </span>
          </div>
        ))}
      </div>

      <p className="mt-4 border-t border-line pt-4 text-[11px] text-body/70">
        Each bucket downloads as its own CSV — standardized rows go straight to ERP load, exceptions go to review.
      </p>
    </div>
  );
}

/* ---- Mock 3: classification + catalogue ---- */
function ClassificationMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Classification &amp; Catalogue</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">Filed three levels deep, mapped to finance</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">
          <Search size={11} /> Searchable catalogue
        </span>
      </div>

      <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
        {[
          ['Primary group', 'Sealing Products', 'G/L 4102 assigned'],
          ['Secondary group', 'Gaskets', 'functional category'],
          ['Tertiary group', 'Spiral Wound', 'specific type'],
        ].map(([l, v, n], i) => (
          <div key={l} className="border border-line px-4 py-3 text-[12px]">
            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-body/70">
              <Layers size={11} className={i === 0 ? 'text-golddeep' : 'text-secondary'} /> {l}
            </div>
            <div className="mt-1.5 font-display text-sm font-bold text-primary">{v}</div>
            <div className="mt-0.5 text-[11px] text-body/70">{n}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 border border-line bg-navy p-4">
        <div className="flex items-center gap-2 font-display text-[10px] font-bold uppercase tracking-widest text-gold">
          <Landmark size={12} /> Catalogue entry · MAT-0048213
        </div>
        <div className="mt-2 font-mono text-[11px] font-bold text-white">GASKET,SPRL WND,2IN,300#,SS316</div>
        <p className="mt-1.5 text-[11px] leading-relaxed text-white/60">
          Long description carries full specs, standard references and manufacturer detail — generated alongside the
          short form.
        </p>
      </div>

      <p className="mt-4 border-t border-line pt-4 text-[11px] text-body/70">
        Primary groups map to G/L accounts — so classification is accounting, not just filing.
      </p>
    </div>
  );
}

export default function SCLShowcase() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="See it in action"
          title="Teach. Cleanse. Classify."
          sub="A walkthrough of the screens your data stewards will use — from template teaching to bucketed batch results to the classified catalogue."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div {...reveal}>
            <TemplateMock />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
              01 — The template that teaches the AI
            </p>
          </motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <BatchMock />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
              02 — The batch that sorts itself honestly
            </p>
          </motion.div>
        </div>

        <motion.div {...reveal} className="mt-8">
          <ClassificationMock />
          <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
            03 — The classification behind every G/L posting
          </p>
        </motion.div>
      </div>
    </section>
  );
}
