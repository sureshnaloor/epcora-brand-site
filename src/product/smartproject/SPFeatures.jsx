import { motion } from 'framer-motion';
import {
  Network,
  Lock,
  Wallet,
  LineChart,
  Users,
  Gauge,
  ShieldAlert,
  ShoppingCart,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const FEATURES = [
  {
    icon: Network,
    title: 'WBS & Scheduling Engine',
    desc: 'Deep, execution-ready structures for large, complex engineering and construction projects.',
    points: ['9-level WBS hierarchy, unlimited children per level', 'Every branch ends in Work Package leaf nodes', 'Dependency & Gantt visualizer with milestones and critical path'],
  },
  {
    icon: Lock,
    title: 'P6 / ERP Import & Baselining',
    desc: 'Bring your existing structures with you, then lock them under governance.',
    points: ['CSV / Excel import with smart column-alias auto-mapping', 'Auto-detection of summary nodes vs work packages', 'Lock-on-finalize with versioned Project Amendments'],
  },
  {
    icon: Wallet,
    title: 'Work Package Budgeting',
    desc: 'Costs are budgeted and monitored at the individual activity level — not in vague top-level buckets.',
    points: ['Activity-level budget allocation per work package', 'Parent nodes track allocated vs unallocated live', 'Over-allocation against approved limits is blocked'],
  },
  {
    icon: LineChart,
    title: 'Real-Time Cost Control & EVM',
    desc: 'Standard earned value management, computed continuously from field data.',
    points: ['PV (BCWS), AC (ACWP) and EV (BCWP) out of the box', 'CPI flags underperforming packages the moment CPI < 1.0', 'Cost Variance by WBS level + EAC completion forecasts'],
  },
  {
    icon: Users,
    title: 'Enterprise Resource Allocation',
    desc: 'High-resolution tracking of the resources that actually cost you money.',
    points: ['Manpower, Equipment and Tools as first-class resources', 'Separate rate definitions for Own vs Rental assets', 'Site serial numbers mapped to global profiles (e.g. “Mobile Crane 50T”)'],
  },
  {
    icon: Gauge,
    title: 'Operational Resource Utilization',
    desc: 'See active vs idle across the whole company before you commit anything.',
    points: ['Color-coded active / idle timelines per resource', 'Month, quarter, year or full-project scales', 'Company-wide calendars prevent cross-project double booking'],
  },
  {
    icon: ShieldAlert,
    title: 'Integrated HSE & Risk',
    desc: 'Risk management that lives inside the project, not in a side spreadsheet.',
    points: ['Dynamic risk register linked to WBS nodes', 'Environmental incidents logged and audited in-project', 'Lessons-learnt register + warnings when critical tasks overlap active risks'],
  },
  {
    icon: ShoppingCart,
    title: 'Procurement, POs & Subcontracts',
    desc: 'Every purchase lands on a work-package budget the moment it is placed.',
    points: ['Vendor & subcontractor master with tax and rating data', 'PO-to-WBS tagging for materials (m³, tons, ea) and services', 'Lead-time optimization + lump-sum or unit-rate contracts'],
  },
];

export default function SPFeatures() {
  return (
    <section id="features" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Feature deep-dive"
          title="Project controls, earned value and resources — unified"
          sub="Eight tightly-integrated capabilities, engineered around how complex projects are actually planned, baselined and controlled."
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
