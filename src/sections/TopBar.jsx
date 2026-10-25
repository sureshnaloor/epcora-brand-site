import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="hidden border-b border-line bg-white md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-body">
        <div className="flex items-center gap-6">
          <span>Welcome to EPCORA Stack — Digital Transformation for Construction &amp; EPC</span>
          <a href="mailto:contact@epcora.com" className="flex items-center gap-1.5 transition-colors hover:text-primary">
            <Mail size={12} className="text-secondary" /> contact@epcora.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          {[Linkedin, Twitter, Facebook].map((Icon, i) => (
            <a key={i} href="#top" aria-label="social link" className="text-body transition-colors hover:text-golddeep">
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
