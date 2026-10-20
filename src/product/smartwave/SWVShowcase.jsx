import { motion } from 'framer-motion';
import {
  Wallet,
  Nfc,
  Users,
  MapPin,
  CalendarDays,
  GraduationCap,
  Building2,
  FileBadge,
  Award,
  FolderOpen,
  BadgeCheck,
  QrCode,
} from 'lucide-react';
import { reveal, SectionHead, QRMatrix } from '../scanitsimple/shared';

/* ---- Mock 1: digital card + wallet pass ---- */
function DigitalCardMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Digital Card &amp; Wallet Pass</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">Shared in a tap, kept forever</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
          <Wallet size={11} /> In 214 wallets
        </span>
      </div>

      <div className="mt-5 rounded-xl bg-gradient-to-br from-primary via-secondary to-navy p-5 shadow-card">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 font-display text-base font-extrabold text-white">
              AM
            </div>
            <div>
              <div className="font-display text-sm font-bold text-white">Ananya Menon</div>
              <div className="text-[10px] text-white/70">Founder · Tidepool Studio (side hustle)</div>
            </div>
          </div>
          <Nfc size={16} className="text-gold" />
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div className="space-y-1 text-[10px] text-white/75">
            <div>smartwave.me/ananya</div>
            <div className="flex items-center gap-1.5"><QrCode size={10} /> Tap · scan · or add to wallet</div>
          </div>
          <div className="rounded-md bg-white p-1">
            <QRMatrix className="h-11 w-11" fg="#074E84" />
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        <div className="border border-line px-4 py-3 text-[12px]">
          <div className="flex items-center justify-between">
            <span className="font-medium text-navy">Wallet pass updates</span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-bold uppercase text-emerald-700">Automatic</span>
          </div>
          <div className="mt-1 text-[11px] text-body/70">New title pushed to every saved pass</div>
        </div>
        <div className="border border-line px-4 py-3 text-[12px]">
          <div className="flex items-center justify-between">
            <span className="font-medium text-navy">Two-way exchange</span>
            <span className="rounded-full bg-mist px-2 py-0.5 text-[9px] font-bold uppercase text-primary">CRM-ready</span>
          </div>
          <div className="mt-1 text-[11px] text-body/70">Viewers send their details back to you</div>
        </div>
      </div>

      <p className="mt-4 border-t border-line pt-4 text-[11px] text-body/70">
        One tap to share; one tap to save. No app installs, no reprints, no stale numbers.
      </p>
    </div>
  );
}

/* ---- Mock 2: interest circle ---- */
function CircleMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Interest Circle</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">Saturday Hikers · Kochi</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
          <Users size={11} /> 48 members
        </span>
      </div>

      <div className="mt-5 border border-line bg-mist/50 p-4">
        <div className="flex items-center gap-2 text-[13px] font-semibold text-navy">
          <MapPin size={14} className="text-golddeep" />
          Next: Thattekad trail — Saturday, 06:30 AM
        </div>
        <div className="mt-1 flex items-center gap-2 text-[11px] text-body">
          <CalendarDays size={11} className="text-secondary" /> 18 going · member pass scanned at the trailhead
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        {[
          ['Mentoring this month', 'Intro to birding — by Dr. Leela R.', '12 seats left'],
          ['Pilgrimage planning', 'Sabari trail group forming for December', '9 interested'],
          ['Give-back drive', 'Trail clean-up + school supplies collection', '26 volunteered'],
        ].map(([t, d, n]) => (
          <div key={t} className="flex items-center justify-between border border-line px-4 py-2.5 text-[13px]">
            <div>
              <div className="font-medium text-navy">{t}</div>
              <div className="mt-0.5 text-[11px] text-body/80">{d}</div>
            </div>
            <span className="shrink-0 rounded-full bg-mist px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-primary">{n}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-line pt-4 text-[11px] text-body/70">
        <GraduationCap size={12} className="text-golddeep" />
        Every circle can host mentors, events and drives — community with a memory, not a chat thread.
      </div>
    </div>
  );
}

/* ---- Mock 3: business space ---- */
function BusinessSpaceMock() {
  return (
    <div className="bg-white p-6 shadow-card sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary">Business Space — Rented Page</div>
          <h4 className="mt-2 font-display text-xl font-bold text-primary">A web home that proves the pitch</h4>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-mist px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-primary">
          <BadgeCheck size={11} /> Verified profile
        </span>
      </div>

      <div className="mt-5 flex items-center gap-4 border border-line bg-mist/50 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
          <Building2 size={22} />
        </div>
        <div>
          <div className="font-display text-sm font-bold text-primary">Tidepool Industrial Supply</div>
          <div className="mt-0.5 text-[11px] text-body">Lines: Instrumentation · Valves · MRO Spares — serving 3 EPC clients</div>
        </div>
        <div className="ml-auto text-right">
          <div className="font-display text-2xl font-extrabold text-golddeep">312</div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-body">Profile views · 30 days</div>
        </div>
      </div>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
        <div className="border border-line px-4 py-3 text-[12px]">
          <div className="flex items-center gap-1.5 font-medium text-navy"><FileBadge size={13} className="text-golddeep" /> Certificates</div>
          <div className="mt-1 text-[11px] text-body/70">ISO 9001 · API 6D · 4 hosted docs</div>
        </div>
        <div className="border border-line px-4 py-3 text-[12px]">
          <div className="flex items-center gap-1.5 font-medium text-navy"><Award size={13} className="text-secondary" /> Past Works</div>
          <div className="mt-1 text-[11px] text-body/70">9 projects · $2.1M delivered</div>
        </div>
        <div className="border border-line px-4 py-3 text-[12px]">
          <div className="flex items-center gap-1.5 font-medium text-navy"><FolderOpen size={13} className="text-golddeep" /> Resources</div>
          <div className="mt-1 text-[11px] text-body/70">Client list · equipment · team</div>
        </div>
      </div>

      <p className="mt-4 border-t border-line pt-4 text-[11px] text-body/70">
        Rent it monthly or buy it outright — public to all, or open only to the clients you invite.
      </p>
    </div>
  );
}

export default function SWVShowcase() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead
          eyebrow="See it in action"
          title="Share. Belong. Showcase."
          sub="A walkthrough of the surfaces members and businesses will use — from the wallet-native card to the circle page to the business space."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div {...reveal}>
            <DigitalCardMock />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
              01 — The card that lives in every wallet
            </p>
          </motion.div>
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <CircleMock />
            <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
              02 — The circle that keeps people showing up
            </p>
          </motion.div>
        </div>

        <motion.div {...reveal} className="mt-8">
          <BusinessSpaceMock />
          <p className="mt-3 text-center text-xs font-semibold uppercase tracking-widest text-body/70">
            03 — The space that carries a business’s proof
          </p>
        </motion.div>
      </div>
    </section>
  );
}
