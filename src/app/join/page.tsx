'use client';
import { useState } from 'react';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  province: string;
  role: string;
  popia: boolean;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const PROVINCES = [
  'Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape',
  'Limpopo', 'Mpumalanga', 'North West', 'Free State', 'Northern Cape',
];

const ROLES = [
  { value: '', label: 'Select your path...' },
  { value: 'general', label: 'General Member' },
  { value: 'media', label: 'Media & Communications Team' },
  { value: 'volunteer', label: 'Volunteer Hub' },
  { value: 'partner', label: 'Strategic Collaboration / Partner' },
];

const WHAT_WE_DO = [
  { icon: '🗳️', title: 'Electoral Reform Advocacy', desc: 'Push for direct elections and a 300+100 Parliament model.' },
  { icon: '📚', title: 'Civic Education', desc: 'Voter education campaigns, ward councillor accountability tools, IEC registration drives.' },
  { icon: '👁️', title: 'Governance Watchdog', desc: 'Track corruption, service delivery failures, and government accountability.' },
  { icon: '📢', title: 'Media & Communications', desc: 'Build our digital presence across X, Instagram, Facebook, TikTok, and LinkedIn.' },
];

export default function JoinPage() {
  const [form, setForm] = useState<FormData>({
    fullName: '', email: '', phone: '', province: '', role: '', popia: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const value = e.target.type === 'checkbox'
        ? (e.target as HTMLInputElement).checked
        : e.target.value;
      setForm((f) => ({ ...f, [field]: value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.phone.trim()) errs.phone = 'WhatsApp/phone number is required.';
    if (!form.province) errs.province = 'Please select your province.';
    if (!form.role) errs.role = 'Please select your path.';
    if (!form.popia) errs.popia = 'You must accept the POPIA consent to proceed.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <>
      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="bg-white max-w-md w-full p-10 relative border-t-4 border-brand-red">
            <div className="text-4xl mb-4 text-center">✊</div>
            <h2 className="font-oswald text-2xl font-bold uppercase text-brand-black text-center mb-3">
              Welcome to EIE SA
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed text-center mb-6">
              Thank you, {form.fullName.split(' ')[0]}. Your application has been received. A member of the EIE SA team will be in touch shortly.
            </p>
            <div className="bg-gray-50 border border-gray-200 p-4 mb-6 text-center">
              <div className="font-oswald text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Your Role</div>
              <div className="font-oswald text-base font-bold uppercase text-brand-black">
                {ROLES.find((r) => r.value === form.role)?.label}
              </div>
            </div>
            <button
              onClick={() => setSuccess(false)}
              className="w-full btn-red rounded-sm text-center"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="page-hero">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow" style={{ color: '#ef4444' }}>Get Involved</div>
          <h1 className="font-oswald font-bold uppercase text-white leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Join the <span className="text-brand-red">Movement</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            EIE SA is not just a protest movement — it is a nation-building project. Protest alone won't fix a broken system. We must change the rules together.
          </p>
        </div>
      </div>

      {/* What you'll be doing */}
      <section className="section-slate">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow">What You'll Be Part Of</div>
          <h2 className="section-title">The <span className="text-brand-red">Work</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 mt-8">
            {WHAT_WE_DO.map((w) => (
              <div key={w.title} className="card group bg-white hover:bg-gray-50 transition-colors duration-200">
                <div className="card-top-bar" />
                <div className="text-2xl mb-3">{w.icon}</div>
                <h3 className="font-oswald text-sm font-bold uppercase text-brand-black mb-2">{w.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Left info panel */}
          <div className="md:col-span-1">
            <div className="eyebrow">Application</div>
            <h2 className="section-title">Volunteer <span className="text-brand-red">Application</span></h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Fill in your details below. The EIE SA team will be in touch with how you can get involved in your province.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📍', title: '9 Provinces', desc: 'We are building chapters across all nine provinces.' },
                { icon: '🔒', title: 'POPIA Compliant', desc: 'Your data is processed in strict accordance with South African privacy law.' },
                { icon: '🤝', title: 'Community First', desc: 'Every role serves the movement and the communities we represent.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-oswald text-sm font-bold uppercase text-brand-black mb-0.5">{item.title}</div>
                    <div className="text-xs text-gray-400 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-50 border border-gray-200 p-4">
              <div className="font-oswald text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Direct Contact</div>
              <a href="mailto:enoughisenoughaone@gmail.com" className="text-sm text-brand-red hover:underline break-all">
                enoughisenoughaone@gmail.com
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className="mb-5">
                <label htmlFor="fullName" className="block font-oswald text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Full Name <span className="text-brand-red">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Thabo Nkosi"
                  value={form.fullName}
                  onChange={update('fullName')}
                  className={`w-full bg-white border text-brand-black font-inter text-sm px-4 py-3 outline-none transition-colors duration-150 ${
                    errors.fullName ? 'border-brand-red bg-red-50' : 'border-gray-200 focus:border-brand-red'
                  }`}
                />
                {errors.fullName && <p className="text-brand-red text-xs mt-1.5 font-medium">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="email" className="block font-oswald text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  Email Address <span className="text-brand-red">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update('email')}
                  className={`w-full bg-white border text-brand-black font-inter text-sm px-4 py-3 outline-none transition-colors duration-150 ${
                    errors.email ? 'border-brand-red bg-red-50' : 'border-gray-200 focus:border-brand-red'
                  }`}
                />
                {errors.email && <p className="text-brand-red text-xs mt-1.5 font-medium">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label htmlFor="phone" className="block font-oswald text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                  WhatsApp / Phone Number <span className="text-brand-red">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+27 XX XXX XXXX"
                  value={form.phone}
                  onChange={update('phone')}
                  className={`w-full bg-white border text-brand-black font-inter text-sm px-4 py-3 outline-none transition-colors duration-150 ${
                    errors.phone ? 'border-brand-red bg-red-50' : 'border-gray-200 focus:border-brand-red'
                  }`}
                />
                {errors.phone && <p className="text-brand-red text-xs mt-1.5 font-medium">{errors.phone}</p>}
              </div>

              {/* Province + Role row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="province" className="block font-oswald text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Province / City <span className="text-brand-red">*</span>
                  </label>
                  <select
                    id="province"
                    value={form.province}
                    onChange={update('province')}
                    className={`w-full bg-white border text-brand-black font-inter text-sm px-4 py-3 outline-none transition-colors duration-150 appearance-none ${
                      errors.province ? 'border-brand-red bg-red-50' : 'border-gray-200 focus:border-brand-red'
                    }`}
                  >
                    <option value="">Select province...</option>
                    {PROVINCES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  {errors.province && <p className="text-brand-red text-xs mt-1.5 font-medium">{errors.province}</p>}
                </div>
                <div>
                  <label htmlFor="role" className="block font-oswald text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Your Path <span className="text-brand-red">*</span>
                  </label>
                  <select
                    id="role"
                    value={form.role}
                    onChange={update('role')}
                    className={`w-full bg-white border text-brand-black font-inter text-sm px-4 py-3 outline-none transition-colors duration-150 appearance-none ${
                      errors.role ? 'border-brand-red bg-red-50' : 'border-gray-200 focus:border-brand-red'
                    }`}
                  >
                    {ROLES.map((r) => (
                      <option key={r.value} value={r.value} disabled={r.value === ''}>{r.label}</option>
                    ))}
                  </select>
                  {errors.role && <p className="text-brand-red text-xs mt-1.5 font-medium">{errors.role}</p>}
                </div>
              </div>

              {/* POPIA */}
              <div className={`mb-6 p-4 border ${errors.popia ? 'border-brand-red bg-red-50' : 'border-gray-200 bg-gray-50'}`}>
                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      checked={form.popia}
                      onChange={update('popia')}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 border-2 flex items-center justify-center transition-all duration-150 ${
                      form.popia ? 'bg-brand-red border-brand-red' : 'bg-white border-gray-300'
                    }`}>
                      {form.popia && <span className="text-white text-xs font-bold leading-none">✓</span>}
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 leading-relaxed">
                    <strong className="text-brand-black">POPIA Consent (Required):</strong>{' '}
                    I consent to EIE SA processing my personal information in strict accordance with the Protection of Personal Information Act (POPIA). My data will be used solely for movement communication and coordination purposes.
                  </span>
                </label>
                {errors.popia && <p className="text-brand-red text-xs mt-2 font-medium">{errors.popia}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full font-oswald font-bold uppercase tracking-widest text-sm text-white py-4 transition-all duration-150 ${
                  loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-red hover:bg-brand-red-dark'
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Submitting Application...
                  </span>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
