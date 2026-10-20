import { industries } from '../data/content';

export default function Ticker({ speed = 32, className = '' }) {
  return (
    <div className={`overflow-hidden border-y-4 border-primary/10 bg-white py-5 ${className}`}>
      <div className="marquee-track gap-14" style={{ animationDuration: `${speed}s` }}>
        {[...industries, ...industries].map((ind, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-primary">
            <ind.icon size={17} className="text-golddeep" /> {ind.name}
            <span className="ml-8 text-secondary/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
