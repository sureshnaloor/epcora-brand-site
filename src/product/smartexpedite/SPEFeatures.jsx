import { motion } from 'framer-motion';
import {
  CalendarClock,
  Landmark,
  Sparkles,
  MessagesSquare,
  Network,
  Building2,
  FolderCheck,
  BookOpenCheck,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const FEATURES = [
  {
    icon: CalendarClock,
    title: 'Six-Dimension PO Schedules',
    desc: 'Every open PO carries the full post-award lifecycle — nothing tracked in side spreadsheets.',
    points: ['Design submissions & approvals monitoring', 'ITP tests, fabrication photos & sub-supplier POs', 'Payments (advances, retentions, BG, LC) → shipping, delivery & returns'],
  },
  {
    icon: Landmark,
    title: 'Bank Guarantee & LC Watch',
    desc: 'Advance and performance guarantees watched continuously against open POs.',
    points: ['ABG & PBG expiry dates and return status', 'Alert report for expired cover on open POs', 'LC status alongside the payment schedule'],
  },
  {
    icon: Sparkles,
    title: 'AI Expediting Briefs',
    desc: 'The AI reads the PO — schedule, follow-up thread, guarantee data — and writes the brief.',
    points: ['Summary of where the PO actually stands', 'Suspected delay causes, named', 'Concrete suggestions to expedite delivery'],
  },
  {
    icon: MessagesSquare,
    title: 'Follow-Up Threads & PDF Reports',
    desc: 'Every expediting conversation logged against the PO — then exported as a report.',
    points: ['Chronological comment log per PO', 'One-click PDF report incl. BG & LC status', 'A record vendors cannot dispute'],
  },
  {
    icon: Network,
    title: 'Project ↔ PO Mapping',
    desc: 'See every PO against its project — and every project against its purchase timelines.',
    points: ['Project purchase timeline views', 'Open projects with their open POs', 'Long-lead packages flagged per project'],
  },
  {
    icon: Building2,
    title: 'Vendor ↔ PO Mapping',
    desc: 'Vendor dashboards and group mapping tie supplier performance to the orders behind it.',
    points: ['Vendor dashboard with live PO position', 'Vendor-group mapping for supply base views', 'Non-SAP vendors brought into the same net'],
  },
  {
    icon: FolderCheck,
    title: 'Documentation & Compliance',
    desc: 'Documentation gaps become lists you can work — not surprises at the gate.',
    points: ['“With PO, no docs” and “PO missing docs” reports', 'Material & project document registers', 'Delivery and post-delivery tracking forms'],
  },
  {
    icon: BookOpenCheck,
    title: 'Lessons Learnt & Vendor Ratings',
    desc: 'Close-out feeds the next award — vendor feedback captured on what matters.',
    points: ['Lessons learnt register across projects', 'Vendor feedback incl. warranty responsiveness', 'Post-supply support rated, not assumed'],
  },
];

export default function SPEFeatures() {
  return (
    <section id="features" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Feature deep-dive"
          title="The post-PO lifecycle, engineered end to end"
          sub="Eight capabilities that carry a purchase order from award to close-out — with the follow-up trail to hold every vendor to their word."
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
