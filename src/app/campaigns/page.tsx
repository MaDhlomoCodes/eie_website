'use client';
import Link from 'next/link';
import { useState } from 'react';

const CHECKLIST_ITEMS = [
  {
    n: '01',
    title: 'Attendance',
    desc: 'Council meeting attendance is public record. A councillor who is constantly absent is not representing you. This is your first check.',
  },
  {
    n: '02',
    title: 'Ward Committee Meetings',
    desc: 'Your councillor must hold regular ward committee meetings open to residents. If these are not happening — or you have never been notified — that is a failure of duty.',
  },
  {
    n: '03',
    title: 'Service Delivery Reports (IDPs/SDBIPs)',
    desc: 'Every municipality publishes an Integrated Development Plan and a Service Delivery and Budget Implementation Plan. Your ward\'s targets are in there. Google "[your municipality] SDBIP 2024".',
  },
  {
    n: '04',
    title: 'Budget Allocation',
    desc: 'What was allocated to your ward this financial year? Has it been spent? On what? These figures must be publicly available through your municipality.',
  },
  {
    n: '05',
    title: 'Written Accountability',
    desc: 'Ask your councillor directly — in writing, on social media, or at a public meeting. Their response, or silence, is your answer. Document everything.',
  },
];

const OSOR_COST_ITEMS = [
  { icon: '🏥', title: 'Healthcare', desc: 'Public clinics in townships are chronically underfunded. When patient load includes those who cannot be traced through the national health system, the system breaks further.' },
  { icon: '🏫', title: 'Schools', desc: 'Public schools operate on a per-learner subsidy. Undocumented learners create administrative and resource pressure on schools already at capacity.' },
  { icon: '🏘️', title: 'Housing', desc: 'RDP housing waiting lists are for citizens and legal residents. Every irregular jump of that queue means a citizen waits longer.' },
  { icon: '💼', title: 'Jobs', desc: 'The informal economy in townships has been significantly displaced. This directly affects the income of the poorest South Africans.' },
];

export default function Campaigns() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [registered, setRegistered] = useState(35);

  const toggleCheck = (n: string) => {
    setChecked((prev) => ({ ...prev, [n]: !prev[n] }));
  };

  const completedCount = Object.values(checked).filter(Boolean).length;

  return (
    <>
      <div className="page-hero">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow" style={{ color: '#ef4444' }}>Our Work</div>
          <h1 className="font-oswald font-bold uppercase text-white leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Active <span className="text-brand-red">Campaigns</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Focused, evidence-based campaigns that educate citizens, demand accountability, and drive real policy change across South Africa.
          </p>
        </div>
      </div>

      {/* ── IEC WORKSHOP LIVE WIDGET ─────────────────────────── */}
      <section className="section-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="border-2 border-brand-red bg-red-50 p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-red" />
            {/* Live pulse indicator */}
            <div className="flex items-center gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red" />
              </span>
              <span className="font-oswald text-xs font-bold tracking-[0.25em] uppercase text-brand-red">Live Event</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-2">
                <h2 className="font-oswald font-bold uppercase text-brand-black leading-tight mb-3" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>
                  EIE SA × IEC Online Voter Education Workshop
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  EIE SA has been invited to a landmark Online Voter Education Workshop with the Independent Electoral Commission (IEC) and the top 8 political parties in South Africa. This is a direct opportunity to learn about the 2026 Local Government Elections, understand your rights as a voter, and engage with party representatives.
                </p>
                <ul className="space-y-2 mb-6 list-none">
                  {[
                    'Live participation with IEC officials and top 8 political parties',
                    'Q&A on the 2026 LGE — ward elections, voter registration, and your rights',
                    'Direct civic education from official sources',
                    'Open to all South African youth — no registration fee',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-brand-red font-bold flex-shrink-0 mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://forms.gle/E8VVXN12KRKZhBsV6"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setRegistered((r) => r + 1)}
                  className="btn-red rounded-sm text-sm inline-block"
                >
                  Register to Attend →
                </a>
              </div>

              {/* Counter widget */}
              <div className="bg-brand-red p-6 text-white">
                <div className="font-oswald text-xs font-bold tracking-[0.25em] uppercase text-white/70 mb-4">Participation</div>
                <div className="text-center py-4">
                  <div className="font-oswald font-bold text-white leading-none mb-1" style={{ fontSize: '3.5rem' }}>
                    {registered}
                  </div>
                  <div className="text-xs text-white/75 uppercase tracking-wide">Registered</div>
                </div>
                <div className="bg-white/20 rounded-full h-2 mb-2">
                  <div
                    className="bg-white rounded-full h-2 transition-all duration-500"
                    style={{ width: `${Math.min((registered / 100) * 100, 100)}%` }}
                  />
                </div>
                <div className="text-xs text-white/70 text-center">Target: 100+ Youth Participants</div>
                <div className="border-t border-white/20 mt-4 pt-4 space-y-2">
                  {[
                    { label: 'Format', value: 'Online / Virtual' },
                    { label: 'Host', value: 'IEC + EIE SA' },
                    { label: 'Focus', value: '2026 LGE' },
                  ].map((d) => (
                    <div key={d.label} className="flex justify-between text-xs">
                      <span className="text-white/60 uppercase tracking-wide">{d.label}</span>
                      <span className="text-white font-semibold">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── YVYP CAMPAIGN ───────────────────────────────────── */}
      <section className="section-off">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-brand-black overflow-hidden border border-brand-black">
            {/* Campaign header panel */}
            <div className="bg-brand-red p-8 flex flex-col justify-between">
              <div>
                <div className="font-oswald text-xs font-bold tracking-[0.3em] uppercase text-white/70 mb-3">Active Campaign</div>
                <h2 className="font-oswald font-bold uppercase text-white leading-tight mb-4" style={{ fontSize: '1.75rem' }}>
                  Your Vote,<br />Your Power
                </h2>
                <div className="bg-black/30 px-3 py-2 inline-block mb-4">
                  <div className="font-oswald text-xs font-bold tracking-widest uppercase text-white/60">Theme</div>
                  <div className="font-oswald text-sm font-bold text-white">2026 LGE Accountability</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="font-oswald font-bold text-white leading-none text-3xl">"2026 IS YOUR RECEIPT.</div>
                <div className="font-oswald font-bold text-white/80 leading-none text-3xl">USE IT."</div>
              </div>
            </div>

            {/* Checklist */}
            <div className="md:col-span-2 bg-white p-8">
              <div className="eyebrow">Interactive Tool</div>
              <h3 className="font-oswald text-xl font-bold uppercase text-brand-black mb-1">
                Ward Councillor Evaluation Checklist
              </h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Use this framework to assess your ward councillor before 2026. Tick each pillar you have verified.
              </p>

              <div className="space-y-3 mb-6">
                {CHECKLIST_ITEMS.map((item) => (
                  <div
                    key={item.n}
                    onClick={() => toggleCheck(item.n)}
                    className={`border p-4 cursor-pointer transition-all duration-150 select-none ${
                      checked[item.n]
                        ? 'border-brand-red bg-red-50'
                        : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-6 h-6 border-2 flex items-center justify-center mt-0.5 transition-all duration-150 ${
                        checked[item.n] ? 'bg-brand-red border-brand-red' : 'border-gray-300'
                      }`}>
                        {checked[item.n] && <span className="text-white text-xs font-bold">✓</span>}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-oswald text-xs font-bold text-gray-400">{item.n}</span>
                          <span className="font-oswald text-sm font-bold uppercase text-brand-black">{item.title}</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="bg-gray-100 p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-oswald text-xs font-bold uppercase tracking-wide text-gray-500">Verification Progress</span>
                  <span className="font-oswald text-sm font-bold text-brand-red">{completedCount}/5 Pillars</span>
                </div>
                <div className="bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-brand-red rounded-full h-1.5 transition-all duration-300"
                    style={{ width: `${(completedCount / 5) * 100}%` }}
                  />
                </div>
                {completedCount === 5 && (
                  <p className="text-xs text-brand-red font-bold mt-2">✓ Full evaluation complete. Vote accordingly in 2026.</p>
                )}
              </div>

              <a
                href="https://www.elections.org.za/pw/voter/Who-Is-My-Ward-Councillor"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-oswald font-bold uppercase tracking-widest text-brand-red border border-brand-red px-4 py-2 hover:bg-brand-red hover:text-white transition-all duration-150"
              >
                IEC Ward Councillor Lookup — elections.org.za →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── OSOR CAMPAIGN ───────────────────────────────────── */}
      <section className="section-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden border border-brand-navy">
            {/* Campaign header panel */}
            <div className="bg-brand-navy p-8 flex flex-col justify-between">
              <div>
                <div className="font-oswald text-xs font-bold tracking-[0.3em] uppercase text-white/60 mb-3">Active Campaign</div>
                <h2 className="font-oswald font-bold uppercase text-white leading-tight mb-4" style={{ fontSize: '1.75rem' }}>
                  Our Streets,<br />Our Rights
                </h2>
                <div className="bg-white/10 px-3 py-2 inline-block mb-4">
                  <div className="font-oswald text-xs font-bold tracking-widest uppercase text-white/60">Theme</div>
                  <div className="font-oswald text-sm font-bold text-white">Immigration Governance</div>
                </div>
              </div>
              <div className="mt-6 border-t border-white/20 pt-6">
                <p className="text-xs text-white/70 leading-relaxed italic">
                  "This is NOT an anti-foreigner campaign. EIE SA does not promote xenophobia or violence. This is a governance accountability frame demanding the state enforces its own laws."
                </p>
              </div>
            </div>

            {/* OSOR content */}
            <div className="md:col-span-2 bg-white p-8">
              {/* Framing notice */}
              <div className="bg-brand-navy/10 border-l-4 border-brand-navy p-4 mb-6">
                <p className="text-xs text-brand-navy leading-relaxed font-medium">
                  <strong>EIE SA position:</strong> This campaign is NOT anti-foreigner. EIE SA does not promote xenophobia, ethnic targeting, or violence of any kind. This IS a governance accountability campaign demanding the state enforces its own immigration laws — and adequately resources the communities bearing the burden of that failure.
                </p>
              </div>

              {/* Real cost grid */}
              <div className="eyebrow">The Real Cost in Townships</div>
              <h3 className="font-oswald text-xl font-bold uppercase text-brand-black mb-4">What Non-Enforcement Costs Poor Communities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {OSOR_COST_ITEMS.map((item) => (
                  <div key={item.title} className="bg-gray-50 border border-gray-200 p-4">
                    <div className="text-xl mb-2">{item.icon}</div>
                    <div className="font-oswald text-sm font-bold uppercase text-brand-black mb-1">{item.title}</div>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Know Your Rights box */}
              <div className="bg-brand-navy text-white p-6">
                <div className="font-oswald text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-3">Know Your Rights & Legal Channels</div>
                <h4 className="font-oswald text-lg font-bold uppercase mb-4">What To Do. What Not To Do.</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* DOs */}
                  <div>
                    <div className="font-oswald text-xs font-bold uppercase tracking-wide text-green-400 mb-2">✅ DO</div>
                    <ul className="space-y-2 list-none">
                      {[
                        'Report to Dept of Home Affairs: 0800 601 190',
                        'Report to SAPS — undocumented presence is a criminal matter',
                        'Document the location and relevant details',
                        'Follow up in writing if your report is ignored',
                      ].map((item) => (
                        <li key={item} className="text-xs text-white/80 flex gap-2 items-start">
                          <span className="text-green-400 flex-shrink-0">→</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* DON'Ts */}
                  <div>
                    <div className="font-oswald text-xs font-bold uppercase tracking-wide text-red-400 mb-2">❌ DO NOT</div>
                    <ul className="space-y-2 list-none">
                      {[
                        'Take the law into your own hands — this is a criminal offence',
                        'Assault, threaten, or forcibly remove any person',
                        'Damage property under any circumstances',
                        'Target people based on appearance or nationality',
                      ].map((item) => (
                        <li key={item} className="text-xs text-white/80 flex gap-2 items-start">
                          <span className="text-red-400 flex-shrink-0">✕</span>{item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hotline */}
                <div className="bg-white/10 border border-white/20 p-4 mt-2">
                  <div className="font-oswald text-xs font-bold uppercase tracking-wide text-white/60 mb-1">Official Reporting Channel</div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <div className="font-oswald text-lg font-bold text-white">0800 601 190</div>
                      <div className="text-xs text-white/60">Department of Home Affairs — Toll Free</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ELECTORAL REFORM ────────────────────────────────── */}
      <section className="section-slate">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow">Core Mandate</div>
          <h2 className="section-title">Electoral <span className="text-brand-red">Reform</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white border border-gray-200 p-8">
              <div className="font-oswald text-4xl font-bold text-brand-red/20 mb-3">1</div>
              <h3 className="font-oswald text-lg font-bold uppercase text-brand-black mb-3">Direct Election of the President & Premiers</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Instead of Parliament electing the President, citizens vote directly for presidential candidates. The same applies to each province — voters directly elect their Premiers.
              </p>
              <div className="bg-red-50 border-l-4 border-brand-red p-3 text-xs text-gray-600 leading-relaxed">
                Result: A President accountable to 40 million citizens, not a party caucus.
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-8">
              <div className="font-oswald text-4xl font-bold text-brand-red/20 mb-3">2</div>
              <h3 className="font-oswald text-lg font-bold uppercase text-brand-black mb-3">The "300 + 100" Mixed Constituency Model</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                300 single-member constituencies — each representing a defined community. 100 proportional seats to preserve political diversity.
              </p>
              <div className="bg-red-50 border-l-4 border-brand-red p-3 text-xs text-gray-600 leading-relaxed">
                Result: Every South African has a named MP directly accountable to their community.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="section-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-oswald font-bold uppercase text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}>
              The rules can be <span className="text-brand-red">changed.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              EIE SA is building the coalition that changes them. Join the movement today.
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-4">
            <Link href="/join" className="btn-red rounded-sm text-center">Join the Movement →</Link>
            <Link href="/contact" className="btn-outline-dark border-gray-600 text-gray-400 hover:border-white hover:text-white hover:bg-white/5 rounded-sm text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
