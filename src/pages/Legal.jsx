import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin } from 'lucide-react';

const COMPANY = 'EPCORA Private Limited';
const EMAIL = 'contact@epcora.com';
const ADDRESS = 'COVAI Tech Park, Kalapatti, Coimbatore, India 641014';
const UPDATED = 'October 2026';

const legalDocs = {
  'privacy-policy': {
    title: 'Privacy Policy',
    intro:
      'This Privacy Policy explains how EPCORA Private Limited ("EPCORA", "we", "us") collects, uses, and protects information when you visit our website or use our products and services.',
    sections: [
      {
        h: 'Information We Collect',
        ps: [
          'Contact details you share with us — name, email address, phone number, company name — when you write to us, request a demo, or enquire about a product or service.',
          'Usage information such as pages visited, browser type, device information, and approximate location, collected through standard web analytics.',
          'Business data you choose to upload or manage inside our products (for example asset registers, vendor records, or project data). This data belongs to you or your organization.',
        ],
      },
      {
        h: 'How We Use Information',
        ps: [
          'To respond to enquiries, schedule demos, and provide customer support.',
          'To operate, maintain, and improve our products and services.',
          'To send product updates or service notices where you have opted in — you may unsubscribe at any time.',
          'To meet legal, accounting, or regulatory obligations.',
        ],
      },
      {
        h: 'What We Never Do',
        ps: [
          'We do not sell your personal information or business data to anyone.',
          'We do not use data stored inside your product workspaces to advertise to you or to train third-party models without your explicit consent.',
        ],
      },
      {
        h: 'Data Sharing & Processors',
        ps: [
          'We work with a small number of trusted service providers (hosting, email delivery, analytics) who process data on our behalf under confidentiality obligations and only as instructed.',
          'We may disclose information if required by law, regulation, or a valid legal process.',
        ],
      },
      {
        h: 'Data Security & Retention',
        ps: [
          'We apply industry-standard technical and organizational measures — encryption in transit, access controls, and least-privilege practices — to protect information.',
          'We retain personal information only as long as needed for the purposes above, after which it is securely deleted or anonymized.',
        ],
      },
      {
        h: 'Your Rights',
        ps: [
          'You may request access to, correction of, or deletion of your personal information at any time by writing to us. We will respond within a reasonable period.',
        ],
      },
      {
        h: 'Changes to This Policy',
        ps: [
          'We may update this policy from time to time. The latest version will always be available on this page with its revision date.',
        ],
      },
    ],
  },
  'terms-of-service': {
    title: 'Terms of Service',
    intro:
      'These Terms of Service govern your use of the EPCORA website and of the products and services offered by EPCORA Private Limited. By using our website or engaging our services, you agree to these terms.',
    sections: [
      {
        h: 'Our Offerings',
        ps: [
          'EPCORA provides digital products and services for the construction and EPC industry — including asset intelligence, project controls, vendor bidding, post-PO expediting, materials intelligence, and community commerce platforms.',
          'Specific engagements, subscriptions, or licenses may be governed by separate written agreements; where those conflict with these terms, the signed agreement prevails.',
        ],
      },
      {
        h: 'Acceptable Use',
        ps: [
          'You agree to use our website and products lawfully and not to misuse them — including attempting unauthorized access, introducing malicious code, or infringing the rights of others.',
          'You are responsible for the accuracy and lawfulness of the data you place in our products.',
        ],
      },
      {
        h: 'Intellectual Property',
        ps: [
          'The EPCORA name, logo, website content, and our product designs are the property of EPCORA Private Limited and may not be reproduced without written permission.',
          'Your data remains yours. You grant us only the rights needed to host and process it in order to provide the services.',
        ],
      },
      {
        h: 'Product Availability',
        ps: [
          'Some products and services shown on this website are marked "on the works" or "coming soon". These are provided as previews of offerings under development and do not constitute a commitment of general availability.',
          'Demo and pilot access, where offered, is provided on an as-is basis for evaluation.',
        ],
      },
      {
        h: 'Disclaimers & Limitation of Liability',
        ps: [
          'The website and its content are provided "as is" without warranties of any kind, express or implied.',
          'To the maximum extent permitted by law, EPCORA Private Limited shall not be liable for indirect, incidental, or consequential damages arising from the use of this website or our offerings. Our aggregate liability shall not exceed the fees paid by you to us for the relevant service in the twelve months preceding the claim.',
        ],
      },
      {
        h: 'Governing Law & Jurisdiction',
        ps: [
          'These terms are governed by the laws of India. Courts at Coimbatore, Tamil Nadu shall have exclusive jurisdiction over any dispute arising from these terms.',
        ],
      },
      {
        h: 'Changes to These Terms',
        ps: [
          'We may revise these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms.',
        ],
      },
    ],
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    intro:
      'This Cookie Policy explains how the EPCORA website uses cookies and similar technologies, and the choices you have.',
    sections: [
      {
        h: 'What Are Cookies',
        ps: [
          'Cookies are small text files placed on your device when you visit a website. They help the site function, remember preferences, and understand how visitors use the site.',
        ],
      },
      {
        h: 'Cookies We Use',
        ps: [
          'Strictly necessary cookies — required for the website to load and navigate correctly. The site cannot function without them.',
          'Analytics cookies — help us understand aggregate usage (pages visited, time on site) so we can improve content and performance. These do not identify you personally.',
          'Preference cookies — remember choices you make, such as dismissing a notice, so we do not ask again.',
        ],
      },
      {
        h: 'What We Do Not Use',
        ps: [
          'We do not use advertising or cross-site tracking cookies, and we do not build advertising profiles of our visitors.',
        ],
      },
      {
        h: 'Managing Cookies',
        ps: [
          'Most browsers let you view, block, or delete cookies through their settings. Blocking strictly necessary cookies may affect how the site functions.',
          'For analytics, you can also use browser-based opt-out tools or privacy extensions of your choice.',
        ],
      },
      {
        h: 'Changes to This Policy',
        ps: [
          'We may update this Cookie Policy as our site evolves. The latest version will always be available on this page with its revision date.',
        ],
      },
    ],
  },
};

/* Shared legal document page — denim hero band + readable white document body */
export default function Legal() {
  const { doc } = useParams();
  const d = legalDocs[doc];
  if (!d) return <Navigate to="/" replace />;

  return (
    <>
      {/* hero band */}
      <section className="bg-denim relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'repeating-linear-gradient(115deg, #fff 0 2px, transparent 2px 90px)' }}
        />
        <div className="relative mx-auto max-w-4xl px-6 py-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-gold"
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-gold" />
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bordered-heading text-4xl !text-white sm:text-5xl"
          >
            {d.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-sm uppercase tracking-widest text-white/60"
          >
            Last updated: {UPDATED}
          </motion.p>
        </div>
      </section>

      {/* document body */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-lg leading-relaxed text-body">{d.intro}</p>

          <div className="mt-12 space-y-10">
            {d.sections.map((s, i) => (
              <motion.div
                key={s.h}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <h2 className="flex items-baseline gap-3 font-display text-2xl font-bold text-primary">
                  <span className="text-sm font-extrabold text-golddeep">{String(i + 1).padStart(2, '0')}</span>
                  {s.h}
                </h2>
                <div className="mt-3 space-y-3">
                  {s.ps.map((p, j) => (
                    <p key={j} className="leading-relaxed text-body">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* contact block */}
          <div className="mt-16 border-t border-line pt-10">
            <h3 className="font-display text-lg font-bold text-primary">Questions about this document?</h3>
            <div className="mt-4 space-y-3 text-sm text-body">
              <p className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-golddeep" />
                <a href={`mailto:${EMAIL}`} className="font-semibold text-primary hover:text-golddeep">
                  {EMAIL}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-golddeep" />
                <span>
                  {COMPANY}, {ADDRESS}
                </span>
              </p>
            </div>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-primary transition-colors hover:text-golddeep"
            >
              <ArrowLeft size={15} /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
