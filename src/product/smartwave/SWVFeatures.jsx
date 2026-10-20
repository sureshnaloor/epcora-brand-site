import { motion } from 'framer-motion';
import {
  Wallet,
  Users,
  GraduationCap,
  Rocket,
  Building2,
  Globe,
  BarChart3,
  Lock,
} from 'lucide-react';
import { reveal, SectionHead } from '../scanitsimple/shared';

const FEATURES = [
  {
    icon: Wallet,
    title: 'Digital Card & Wallet Pass',
    desc: 'The identity that never goes stale — shared in a tap, living natively in every wallet.',
    points: ['NFC tap, QR scan or link — zero app installs', 'Apple & Google Wallet passes, offline-ready', 'Role or number changed? Every pass updates itself'],
  },
  {
    icon: Users,
    title: 'Interest Circles',
    desc: 'Communities of people who show up — for a sunrise hike, a pilgrimage, a book club.',
    points: ['Start or join circles around shared interests', 'Member passes with verifiable event access', 'Schedules, RSVPs and updates in one place'],
  },
  {
    icon: GraduationCap,
    title: 'Mentoring & Teaching',
    desc: 'People who know, teaching people who want to — improving the area and its people.',
    points: ['Mentors list skills, host sessions and training', 'Neighbourhood improvement circles', 'Knowledge shared locally, remembered permanently'],
  },
  {
    icon: Rocket,
    title: 'Second-Innings Ventures',
    desc: 'Retirement is a launchpad. So is the weekend side hustle.',
    points: ['A storefront for post-retirement businesses', 'Side hustles discovered by the community', 'From skill to income without a web developer'],
  },
  {
    icon: Building2,
    title: 'Business Profiles & Lines',
    desc: 'A credible home for what your business actually does.',
    points: ['Business lines, materials & service groups listed', 'Showcase products and services with structure', 'Found by the clients you choose — or everyone'],
  },
  {
    icon: Globe,
    title: 'Rentable Web Spaces',
    desc: 'Rent or buy pages that carry the proof behind your pitch.',
    points: ['Host documents, certificates & client lists', 'Past works and resources, beautifully organised', 'Your space, your domain of trust — rented or owned'],
  },
  {
    icon: BarChart3,
    title: 'Built-In CRM & Analytics',
    desc: 'Every tap and scan measured — networking you can finally put a number on.',
    points: ['Two-way contact exchange feeds your pipeline', 'Views, clicks and wallet adds tracked live', 'Export to Salesforce, HubSpot or Zoho via webhooks'],
  },
  {
    icon: Lock,
    title: 'Private or Public, Your Call',
    desc: 'Exposure is a decision, not a default.',
    points: ['Keep spaces private to invited clients', 'Open storefronts to the whole community', 'Per-page control over who sees what'],
  },
];

export default function SWVFeatures() {
  return (
    <section id="features" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="Feature deep-dive"
          title="Identity, community and commerce — in one wave"
          sub="Eight capabilities that carry a person from a shared card to a thriving circle, and a business from a profile to a space that sells."
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
