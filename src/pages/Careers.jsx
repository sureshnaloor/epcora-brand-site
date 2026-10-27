import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Send, Check, AlertCircle } from 'lucide-react';
import CountryPhone, { COUNTRIES, phoneError, contactInputCls as inputCls } from '../components/CountryPhone';

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
};

const positions = [
  {
    title: 'Forward Deployed Engineer',
    where: 'Remote · Worldwide',
    blurb:
      'Embed with client teams on-site and remote — deploy, integrate and tailor EPCORA products until they hum in real EPC workflows.',
    tags: ['Solutions Engineering', 'Client Success', 'Integrations'],
  },
  {
    title: 'Sales Lead — Country / Region',
    where: 'Remote · Your Country',
    blurb:
      'Own EPCORA in your country or region. Hunter mindset, construction & EPC network, and the drive to open a market from zero.',
    tags: ['Enterprise Sales', 'EPC Network', 'New Markets'],
  },
  {
    title: 'Data Analyst',
    where: 'Remote · Worldwide',
    blurb:
      'Turn project, asset and supply-chain data into the dashboards and insights our clients act on every morning.',
    tags: ['SQL', 'Dashboards', 'Storytelling'],
  },
  {
    title: 'Data Scientist',
    where: 'Remote · Worldwide',
    blurb:
      'Model lead-times, vendor reliability and project risk — from clean baselines to production-ready predictions.',
    tags: ['Python', 'Forecasting', 'Experimentation'],
  },
  {
    title: 'ML Engineer — Local LLMs',
    where: 'Remote · Worldwide',
    blurb:
      'Fine-tune and distill models, then ship them to run fully on local devices — private, offline, agentic intelligence for the field.',
    tags: ['Fine-tuning', 'Quantisation', 'On-device Deploys'],
  },
];

/* shared styles + country/phone logic come from the CountryPhone module */

export default function Careers() {
  const [form, setForm] = useState({ name: '', email: '', country: '', phone: '', position: '', skills: '' });
  const [submitErr, setSubmitErr] = useState('');
  const [sent, setSent] = useState(false);

  const country = COUNTRIES.find(c => c.name === form.country) || null;
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = e => {
    e.preventDefault();
    const pErr = phoneError(form.country, form.phone);
    if (pErr) {
      setSubmitErr(pErr);
      return;
    }
    setSubmitErr('');
    const subject = `Careers — ${form.position || 'Open Application'} — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${country ? country.dial : ''} ${form.phone}`,
      `Country: ${form.country}`,
      `Position of interest: ${form.position}`,
      '',
      'Past experience & skills:',
      form.skills,
    ].join('\n');
    window.location.href = `mailto:contact@epcora.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      {/* hero band */}
      <section className="bg-denim relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 90px)' }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-20 lg:py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold"
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-gold" />
            Careers at EPCORA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bordered-heading max-w-3xl text-4xl !text-white sm:text-5xl"
          >
            Build the EPC stack the industry deserves.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
          >
            We are a remote-first team. Work from your country, on problems that matter — with sales roles open across
            regions and engineering roles open worldwide.
          </motion.p>
        </div>
      </section>

      {/* open positions */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
            <div className="eyebrow-center mb-4">Open Positions</div>
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
              Five ways in, <span className="text-secondary">one mission.</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-gold" />
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {positions.map((p, i) => (
              <motion.div
                key={p.title}
                {...reveal}
                transition={{ ...reveal.transition, delay: (i % 3) * 0.08 }}
                className="service-card group flex h-full flex-col"
              >
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-golddeep">
                  <MapPin size={12} /> {p.where}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-primary">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{p.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="bg-mist px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#apply"
                  className="mt-6 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:text-golddeep"
                >
                  Apply below <ArrowUpRight size={15} className="text-golddeep" />
                </a>
              </motion.div>
            ))}

            {/* open application card */}
            <motion.div
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.16 }}
              className="service-card group flex h-full flex-col justify-center"
              style={{ background: 'linear-gradient(135deg, #074E84 0%, #0A1B33 100%)' }}
            >
              <h3 className="font-display text-xl font-bold text-white">Don’t see your role?</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Exceptional people make their own openings. Tell us what you’re great at — the form works for open
                applications too.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* application form */}
      <section id="apply" className="scroll-mt-24 bg-mist py-20">
        <div className="mx-auto max-w-2xl px-6">
          <motion.div {...reveal} className="text-center">
            <div className="eyebrow-center mb-4">Apply</div>
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Introduce yourself.</h2>
            <p className="mt-4 text-body">
              Three contact fields and your story — that’s all we need to start a conversation.
            </p>
          </motion.div>

          <motion.form
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 }}
            onSubmit={submit}
            className="mt-10 space-y-4 bg-white p-8 shadow-card sm:p-10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input required value={form.name} onChange={set('name')} placeholder="Full name" className={inputCls} />
              <input
                required
                type="email"
                value={form.email}
                onChange={set('email')}
                placeholder="Email address"
                className={inputCls}
              />
            </div>

            {/* country (flags + dial codes) gates the validated phone field */}
            <CountryPhone
              value={{ country: form.country, phone: form.phone }}
              onChange={v => setForm(f => ({ ...f, country: v.country, phone: v.phone }))}
            />
            {submitErr && (
              <p className="flex items-center gap-1.5 text-xs font-semibold text-red-500">
                <AlertCircle size={13} /> {submitErr}
              </p>
            )}

            <select required value={form.position} onChange={set('position')} className={`${inputCls} ${form.position ? '' : 'text-body/40'}`}>
              <option value="" disabled>
                Position of interest
              </option>
              {positions.map(p => (
                <option key={p.title} value={p.title}>
                  {p.title}
                </option>
              ))}
              <option value="Open Application">Something else — open application</option>
            </select>
            <textarea
              required
              rows={6}
              value={form.skills}
              onChange={set('skills')}
              placeholder="Your past experience and skills relevant to this position — roles held, industries, tools, results you’re proud of."
              className={`${inputCls} resize-y`}
            />
            <button type="submit" className="btn-gold w-full justify-center">
              <Send size={16} /> Send Application
            </button>
            <p className="text-center text-xs text-body/60">
              Submitting opens your email client with the application pre-filled to contact@epcora.com.
            </p>
            {sent && (
              <p className="flex items-center justify-center gap-2 text-sm font-semibold text-secondary">
                <Check size={16} /> Email drafted — just hit send in your mail app.
              </p>
            )}
          </motion.form>
        </div>
      </section>
    </>
  );
}
