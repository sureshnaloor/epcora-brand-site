import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

/* flag emoji + dial code; national number length range [min, max] digits */
export const COUNTRIES = [
  { name: 'India', flag: '🇮🇳', dial: '+91', len: [10, 10] },
  { name: 'United Arab Emirates', flag: '🇦🇪', dial: '+971', len: [8, 9] },
  { name: 'Saudi Arabia', flag: '🇸🇦', dial: '+966', len: [8, 9] },
  { name: 'Qatar', flag: '🇶🇦', dial: '+974', len: [8, 8] },
  { name: 'Oman', flag: '🇴🇲', dial: '+968', len: [8, 8] },
  { name: 'Kuwait', flag: '🇰🇼', dial: '+965', len: [8, 8] },
  { name: 'Bahrain', flag: '🇧🇭', dial: '+973', len: [8, 8] },
  { name: 'United States', flag: '🇺🇸', dial: '+1', len: [10, 10] },
  { name: 'Canada', flag: '🇨🇦', dial: '+1', len: [10, 10] },
  { name: 'United Kingdom', flag: '🇬🇧', dial: '+44', len: [9, 10] },
  { name: 'Germany', flag: '🇩🇪', dial: '+49', len: [9, 11] },
  { name: 'France', flag: '🇫🇷', dial: '+33', len: [9, 9] },
  { name: 'Netherlands', flag: '🇳🇱', dial: '+31', len: [9, 9] },
  { name: 'Singapore', flag: '🇸🇬', dial: '+65', len: [8, 8] },
  { name: 'Malaysia', flag: '🇲🇾', dial: '+60', len: [8, 10] },
  { name: 'Indonesia', flag: '🇮🇩', dial: '+62', len: [8, 11] },
  { name: 'Philippines', flag: '🇵🇭', dial: '+63', len: [9, 10] },
  { name: 'Vietnam', flag: '🇻🇳', dial: '+84', len: [8, 10] },
  { name: 'Thailand', flag: '🇹🇭', dial: '+66', len: [8, 9] },
  { name: 'Australia', flag: '🇦🇺', dial: '+61', len: [9, 9] },
  { name: 'New Zealand', flag: '🇳🇿', dial: '+64', len: [8, 10] },
  { name: 'Japan', flag: '🇯🇵', dial: '+81', len: [9, 10] },
  { name: 'South Korea', flag: '🇰🇷', dial: '+82', len: [8, 10] },
  { name: 'South Africa', flag: '🇿🇦', dial: '+27', len: [9, 9] },
  { name: 'Nigeria', flag: '🇳🇬', dial: '+234', len: [8, 10] },
  { name: 'Kenya', flag: '🇰🇪', dial: '+254', len: [9, 9] },
  { name: 'Egypt', flag: '🇪🇬', dial: '+20', len: [8, 10] },
  { name: 'Brazil', flag: '🇧🇷', dial: '+55', len: [10, 11] },
  { name: 'Mexico', flag: '🇲🇽', dial: '+52', len: [10, 10] },
  { name: 'Other', flag: '🌐', dial: '+', len: [6, 15] },
];

/* returns '' when valid, else a human-readable error */
export function phoneError(countryName, digits) {
  const c = COUNTRIES.find(x => x.name === countryName);
  if (!c) return 'Pick your country first.';
  const [min, max] = c.len;
  if (digits.length < min)
    return `Too short — ${c.name} numbers need ${min === max ? min : `${min}–${max}`} digits after ${c.dial}.`;
  if (digits.length > max) return `Too long — ${c.name} numbers take at most ${max} digits after ${c.dial}.`;
  return '';
}

export const contactInputCls =
  'w-full border border-line bg-white px-4 py-3 text-sm text-primary placeholder:text-body/40 outline-none transition-colors focus:border-golddeep';

/*
 * Country select (flags + dial codes) gating a validated phone field.
 * value = { country, phone }; onChange(next) where next = { country, phone }.
 * The phone input is disabled until a country is chosen, strips non-digits,
 * caps at the country's max length, and shows an inline error on blur.
 */
export default function CountryPhone({ value, onChange }) {
  const [err, setErr] = useState('');
  const country = COUNTRIES.find(c => c.name === value.country) || null;

  const pickCountry = e => {
    onChange({ country: e.target.value, phone: '' });
    setErr('');
  };

  const typePhone = e => {
    const digits = e.target.value.replace(/\D/g, '').slice(0, country ? country.len[1] : 15);
    onChange({ ...value, phone: digits });
    if (err) setErr(phoneError(value.country, digits));
  };

  const blurPhone = () => {
    if (value.phone) setErr(phoneError(value.country, value.phone));
  };

  return (
    <div className="space-y-4">
      <select
        required
        value={value.country}
        onChange={pickCountry}
        className={`${contactInputCls} ${value.country ? '' : 'text-body/40'}`}
      >
        <option value="" disabled>
          🌐 Select your country
        </option>
        {COUNTRIES.map(c => (
          <option key={c.name} value={c.name}>
            {c.flag} {c.name} ({c.dial})
          </option>
        ))}
      </select>

      <div>
        <div
          className={`flex items-stretch border border-line bg-white transition-colors focus-within:border-golddeep ${!country ? 'opacity-60' : ''} ${err ? '!border-red-400' : ''}`}
        >
          <span className="flex items-center gap-1.5 border-r border-line bg-mist px-4 text-sm font-semibold text-primary">
            {country ? country.flag : '🌐'} {country ? country.dial : '+––'}
          </span>
          <input
            required
            disabled={!country}
            type="tel"
            inputMode="numeric"
            value={value.phone}
            onChange={typePhone}
            onBlur={blurPhone}
            placeholder={
              country
                ? `Mobile number (${country.len[0]}${country.len[0] !== country.len[1] ? `–${country.len[1]}` : ''} digits)`
                : 'Pick your country first'
            }
            className="w-full px-4 py-3 text-sm text-primary placeholder:text-body/40 outline-none disabled:cursor-not-allowed disabled:bg-mist/50"
          />
        </div>
        {err && (
          <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-red-500">
            <AlertCircle size={13} /> {err}
          </p>
        )}
      </div>
    </div>
  );
}
