import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Send, Check, AlertCircle } from 'lucide-react';
import CountryPhone, { COUNTRIES, phoneError, contactInputCls as inputCls } from '../components/CountryPhone';

const reveal = {
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
};

const topics = [
  'General enquiry',
  'Product demo — SmartTagScan',
  'Product demo — SmartProject',
  'Product demo — SmartProcureSimple',
  'Product demo — SmartExpediteSimple',
  'Product demo — SmartClass',
  'Product demo — SmartWave',
  'Services',
  'Partnership',
  'Careers',
];

/* TM "CALL US NOW" image-band CTA + contact form */
export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', country: '', phone: '', topic: '', message: '' });
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
    const subject = `Website enquiry — ${form.topic || 'General'} — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${country ? country.dial : ''} ${form.phone}`,
      `Country: ${form.country}`,
      `Topic: ${form.topic}`,
      '',
      'Message:',
      form.message,
    ].join('\n');
    window.location.href = `mailto:contact@epcora.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="contact" className="scroll-mt-24 relative overflow-hidden">
      <img src="/images/cta.jpg" alt="Construction site" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-primary/85" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 90px)' }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
        <motion.div {...reveal}>
          <div className="eyebrow-center mb-5 !text-gold">Want to know more about our services?</div>
          <h2 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Ready to Digitize Your <br className="hidden sm:block" />
            Construction Operations?
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 bg-gold" />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Partner with us to leverage AI and automation for enhanced efficiency, accuracy, and project success in
            your construction business.
          </p>
        </motion.div>

        {/* contact form */}
        <motion.form
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.12 }}
          onSubmit={submit}
          className="mx-auto mt-12 max-w-2xl space-y-4 bg-white p-8 text-left shadow-cardhover sm:p-10"
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

          <CountryPhone
            value={{ country: form.country, phone: form.phone }}
            onChange={v => setForm(f => ({ ...f, country: v.country, phone: v.phone }))}
          />
          {submitErr && (
            <p className="flex items-center gap-1.5 text-xs font-semibold text-red-500">
              <AlertCircle size={13} /> {submitErr}
            </p>
          )}

          <select required value={form.topic} onChange={set('topic')} className={`${inputCls} ${form.topic ? '' : 'text-body/40'}`}>
            <option value="" disabled>
              What is this about?
            </option>
            {topics.map(t => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={set('message')}
            placeholder="Tell us about your project, your operations, or the problem you want solved."
            className={`${inputCls} resize-y`}
          />
          <button type="submit" className="btn-gold w-full justify-center">
            <Send size={16} /> Send Enquiry
          </button>
          <p className="text-center text-xs text-body/60">
            Submitting opens your email client with the enquiry pre-filled to contact@epcora.com.
          </p>
          {sent && (
            <p className="flex items-center justify-center gap-2 text-sm font-semibold text-secondary">
              <Check size={16} /> Email drafted — just hit send in your mail app.
            </p>
          )}
        </motion.form>

        <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.2 }}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:contact@epcora.com" className="btn-gold">
              Contact Our Team <ArrowRight size={17} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2.5 border-2 border-white px-8 py-4 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-primary"
            >
              Learn More About Us
            </a>
          </div>

          {/* physical address */}
          <div className="mx-auto mt-14 flex max-w-md items-start gap-4 border-t border-white/15 pt-8 text-left">
            <MapPin size={20} className="mt-1 shrink-0 text-gold" />
            <p className="text-sm leading-relaxed text-white/80">
              <span className="font-display text-base font-bold uppercase tracking-wider text-gold">
                EPCORA Private Limited
              </span>
              <br />
              COVAI Tech Park, Kalapatti,
              <br />
              Coimbatore, India 641014
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
