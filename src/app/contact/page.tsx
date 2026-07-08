'use client';
import { useState } from 'react';

type ContactForm = { name: string; subject: string; message: string };
type ContactErrors = Partial<Record<keyof ContactForm, string>>;

const SUBJECTS = [
  'General Enquiry',
  'Media / Press',
  'Partnership Proposal',
  'Volunteer / Join',
  'Donation',
  'Legal / Advocacy',
  'IEC Workshop Registration',
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({ name: '', subject: '', message: '' });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (field: keyof ContactForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = (): boolean => {
    const errs: ContactErrors = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.subject) errs.subject = 'Please select a subject.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      <div className="page-hero">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow" style={{ color: '#ef4444' }}>Get in Touch</div>
          <h1 className="font-oswald font-bold uppercase text-white leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Contact <span className="text-brand-red">EIE SA</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            For partnerships, media enquiries, donation information, or to find out how to get involved in your province.
          </p>
        </div>
      </div>

      {/* ── CONTACT FORM + DETAILS ───────────────────────────── */}
      <section className="section-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* Contact details */}
          <div>
            <div className="eyebrow">Direct Contact</div>
            <h2 className="font-oswald text-2xl font-bold uppercase text-brand-black mb-6">
              Reach Us <span className="text-brand-red">Directly</span>
            </h2>

            <div className="space-y-6">
              <div>
                <div className="font-oswald text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-2">Email</div>
                <a href="mailto:enoughisenoughaone@gmail.com" className="text-brand-red text-sm hover:underline break-all">
                  enoughisenoughaone@gmail.com
                </a>
                <p className="text-xs text-gray-400 mt-1">For press enquiries, include MEDIA in the subject line.</p>
              </div>

              <div>
                <div className="font-oswald text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-2">Website</div>
                <a href="https://www.eiesa.org.za" target="_blank" rel="noreferrer" className="text-brand-red text-sm hover:underline">
                  www.eiesa.org.za
                </a>
              </div>

              <div>
                <div className="font-oswald text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-3">Social Media</div>
                <div className="space-y-2">
                  {[
                    { label: 'X / Twitter', handle: '@eiesouthafrica', href: 'https://x.com/eiesouthafrica?s=21' },
                    { label: 'Facebook', handle: 'EIE SA', href: 'https://www.facebook.com/share/1EF3WwRFfU/?mibextid=wwXIfr' },
                    { label: 'Instagram', handle: '@eie_sa', href: 'https://www.instagram.com/eie_sa?igsh=MTFzYWpyZXhqczJhYw==' },
                    { label: 'TikTok', handle: '@enoughisenough_sa', href: 'https://www.tiktok.com/@enoughisenough_sa' },
                    { label: 'LinkedIn', handle: 'EIE SA', href: '#' },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                      className="flex items-center gap-3 py-2 border-b border-gray-100 hover:text-brand-red transition-colors duration-150 group">
                      <span className="font-oswald text-xs font-bold uppercase tracking-wide text-brand-black group-hover:text-brand-red w-24 flex-shrink-0 transition-colors duration-150">
                        {s.label}
                      </span>
                      <span className="text-xs text-gray-500 group-hover:text-brand-red transition-colors duration-150">{s.handle}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Media box */}
              <div className="bg-red-50 border-l-4 border-brand-red p-4">
                <div className="font-oswald text-xs font-bold uppercase tracking-widest text-brand-red mb-1">Media Enquiries</div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  For press, interviews, or media partnerships, contact us by email with <strong>MEDIA</strong> in the subject line.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="md:col-span-2">
            <div className="eyebrow">Send a Message</div>
            <h2 className="font-oswald text-2xl font-bold uppercase text-brand-black mb-6">
              Get in <span className="text-brand-red">Touch</span>
            </h2>

            {/* Fallback email note */}
            <div className="bg-gray-50 border border-gray-200 p-4 mb-6 text-xs text-gray-500 leading-relaxed">
              You can also email us directly at{' '}
              <a href="mailto:enoughisenoughaone@gmail.com" className="text-brand-red font-semibold hover:underline">
                enoughisenoughaone@gmail.com
              </a>
              . We respond to all enquiries within 2 to 3 business days.
            </div>

            {sent ? (
              <div className="bg-green-50 border border-green-200 border-l-4 border-l-green-500 p-6">
                <div className="font-oswald text-base font-bold uppercase text-green-800 mb-2">Message Received</div>
                <p className="text-sm text-green-700 leading-relaxed">
                  Thank you, {form.name.split(' ')[0]}. We have received your message and will get back to you shortly.
                </p>
                <button onClick={() => { setSent(false); setForm({ name: '', subject: '', message: '' }); }}
                  className="mt-4 text-xs font-oswald font-bold uppercase tracking-widest text-green-700 hover:text-green-900 transition-colors duration-150">
                  Send Another Message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-5">
                  <label htmlFor="cname" className="block font-oswald text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Your Name <span className="text-brand-red">*</span>
                  </label>
                  <input
                    id="cname"
                    type="text"
                    placeholder="Full name"
                    value={form.name}
                    onChange={update('name')}
                    className={`w-full bg-white border text-brand-black text-sm px-4 py-3 outline-none transition-colors duration-150 ${
                      errors.name ? 'border-brand-red bg-red-50' : 'border-gray-200 focus:border-brand-red'
                    }`}
                  />
                  {errors.name && <p className="text-brand-red text-xs mt-1.5 font-medium">{errors.name}</p>}
                </div>

                <div className="mb-5">
                  <label htmlFor="csubject" className="block font-oswald text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Subject <span className="text-brand-red">*</span>
                  </label>
                  <select
                    id="csubject"
                    value={form.subject}
                    onChange={update('subject')}
                    className={`w-full bg-white border text-brand-black text-sm px-4 py-3 outline-none transition-colors duration-150 appearance-none ${
                      errors.subject ? 'border-brand-red bg-red-50' : 'border-gray-200 focus:border-brand-red'
                    }`}
                  >
                    <option value="">Select a subject...</option>
                    {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.subject && <p className="text-brand-red text-xs mt-1.5 font-medium">{errors.subject}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="cmessage" className="block font-oswald text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Message <span className="text-brand-red">*</span>
                  </label>
                  <textarea
                    id="cmessage"
                    rows={5}
                    placeholder="How can we help you?"
                    value={form.message}
                    onChange={update('message')}
                    className={`w-full bg-white border text-brand-black text-sm px-4 py-3 outline-none transition-colors duration-150 resize-vertical ${
                      errors.message ? 'border-brand-red bg-red-50' : 'border-gray-200 focus:border-brand-red'
                    }`}
                  />
                  {errors.message && <p className="text-brand-red text-xs mt-1.5 font-medium">{errors.message}</p>}
                </div>

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
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── WHATSAPP COMMUNITY ───────────────────────────────── */}
      <section className="section-charcoal">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="font-oswald text-xs font-bold tracking-[0.25em] uppercase text-gray-400 mb-3">Community</div>
            <h2 className="font-oswald font-bold uppercase text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              Join the EIE SA <span className="text-brand-red">WhatsApp Community</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Get real-time updates, civic education content, campaign announcements, and direct access to the EIE SA community — straight to your WhatsApp.
            </p>
            <ul className="space-y-2 mb-6 list-none">
              {[
                'Campaign updates and action alerts',
                'Ward councillor accountability tools and resources',
                'IEC registration reminders ahead of 2026 LGE',
                'Direct community engagement with EIE SA leadership',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-brand-red flex-shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://chat.whatsapp.com/C8yjZDtKyJPHk4OFGGRQz0"
              target="_blank"
              rel="noreferrer"
              className="inline-block font-oswald font-bold uppercase tracking-widest text-sm text-white bg-brand-black border border-white/20 px-6 py-3 transition-all duration-150 hover:bg-brand-red hover:border-brand-red"
            >
              📲 Join WhatsApp Community →
            </a>
          </div>
          <div className="bg-white/5 border border-white/10 p-8 text-center">
            <div className="text-6xl mb-4">💬</div>
            <div className="font-oswald text-lg font-bold uppercase text-white mb-2">Active Community</div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Join thousands of South Africans demanding accountability, civic education, and electoral reform.
            </p>
          </div>
        </div>
      </section>

      {/* ── CROWDFUNDING / FINANCIAL TRANSPARENCY ───────────── */}
      <section className="section-white">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow">Independent Funding</div>
          <h2 className="section-title">Grassroots <span className="text-brand-red">Support</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8 items-start">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                EIE SA relies entirely on grassroots support and strategic partnerships. We accept no funding that compromises our independence. Every contribution — large or small — directly funds civic education, campaign materials, legal advocacy, and community outreach.
              </p>
              <div className="bg-gray-50 border border-gray-200 p-6 mb-6">
                <div className="font-oswald text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Financial Transparency Commitment</div>
                <ul className="space-y-3 list-none">
                  {[
                    { icon: '📊', text: 'Quarterly financial reports published publicly' },
                    { icon: '🔍', text: 'Annual external audits — results made public' },
                    { icon: '🏛️', text: 'Dedicated financial governance committee' },
                    { icon: '📋', text: 'Full income and expenditure breakdowns' },
                  ].map((item) => (
                    <li key={item.text} className="flex items-start gap-3 text-sm text-gray-500">
                      <span className="flex-shrink-0">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                For direct bank transfer details or grant and partnership enquiries, contact us at{' '}
                <a href="mailto:enoughisenoughaone@gmail.com" className="text-brand-red hover:underline">
                  enoughisenoughaone@gmail.com
                </a>
              </p>
            </div>

            <div>
              <div className="font-oswald text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Contribution Channels</div>
              <div className="space-y-3">
                {/* GoFundMe */}
                <div className="border border-dashed border-gray-200 p-5 flex items-center justify-between bg-gray-50">
                  <div>
                    <div className="font-oswald text-sm font-bold uppercase text-gray-400 mb-0.5">GoFundMe</div>
                    <div className="text-xs text-gray-400">Crowdfunding campaign — coming soon</div>
                  </div>
                  <span className="font-oswald text-xs font-bold uppercase tracking-widest text-gray-300 border border-dashed border-gray-300 px-4 py-2 flex-shrink-0 ml-4">
                    Coming Soon
                  </span>
                </div>

                {/* PayPal */}
                <div className="border border-dashed border-gray-200 p-5 flex items-center justify-between bg-gray-50">
                  <div>
                    <div className="font-oswald text-sm font-bold uppercase text-gray-400 mb-0.5">PayPal</div>
                    <div className="text-xs text-gray-400">Direct international contributions — coming soon</div>
                  </div>
                  <span className="font-oswald text-xs font-bold uppercase tracking-widest text-gray-300 border border-dashed border-gray-300 px-4 py-2 flex-shrink-0 ml-4">
                    Coming Soon
                  </span>
                </div>

                {/* Bank Transfer */}
                <div className="border border-gray-200 p-5 flex items-center justify-between group hover:border-brand-red transition-colors duration-150">
                  <div>
                    <div className="font-oswald text-sm font-bold uppercase text-brand-black mb-0.5">Bank Transfer (EFT)</div>
                    <div className="text-xs text-gray-400">South African bank transfer — contact us for details</div>
                  </div>
                  <a
                    href="mailto:enoughisenoughaone@gmail.com?subject=Donation Enquiry"
                    className="font-oswald text-xs font-bold uppercase tracking-widest text-brand-red border border-brand-red px-4 py-2 hover:bg-brand-red hover:text-white transition-all duration-150 flex-shrink-0 ml-4"
                  >
                    Contact →
                  </a>
                </div>

                {/* Grants */}
                <div className="border border-gray-200 p-5 flex items-center justify-between group hover:border-brand-red transition-colors duration-150">
                  <div>
                    <div className="font-oswald text-sm font-bold uppercase text-brand-black mb-0.5">Grants & Partnerships</div>
                    <div className="text-xs text-gray-400">Organisations supporting democracy & governance reform</div>
                  </div>
                  <a
                    href="mailto:enoughisenoughaone@gmail.com?subject=Partnership Proposal"
                    className="font-oswald text-xs font-bold uppercase tracking-widest text-brand-red border border-brand-red px-4 py-2 hover:bg-brand-red hover:text-white transition-all duration-150 flex-shrink-0 ml-4"
                  >
                    Enquire →
                  </a>
                </div>
              </div>

              {/* Audit tracker placeholder */}
              <div className="mt-6 bg-gray-50 border border-dashed border-gray-300 p-5 text-center">
                <div className="font-oswald text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Quarterly Audit Tracker</div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Financial reports and audit results will be published here quarterly. Transparency is not optional — it is our commitment to every contributor.
                </p>
                <div className="mt-3 inline-block font-oswald text-xs font-bold uppercase tracking-widest text-gray-300 border border-dashed border-gray-300 px-3 py-1.5">
                  Coming Q1 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
