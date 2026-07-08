import Link from 'next/link';

const FOCUS_AREAS = [
  {
    icon: '🗳️',
    title: 'Electoral Reform',
    desc: 'Direct election of the President and Premiers. A 300+100 mixed constituency Parliament where every MP answers directly to a community — not a party headquarters.',
    link: '/campaigns',
  },
  {
    icon: '👁️',
    title: 'Civic Watchdog Platform',
    desc: 'A digital reporting hub for citizens to expose corruption and mismanagement. Community Accountability Monitors. A Policy and Governance Desk tracking legislation in real time.',
    link: '/campaigns',
  },
  {
    icon: '📚',
    title: 'Public Education Campaigns',
    desc: 'Civic literacy for every South African. Your Vote, Your Power. Our Streets, Our Rights. IEC registration drives. Ward councillor accountability tools.',
    link: '/campaigns',
  },
];

const STATS = [
  { n: '2026', l: 'Local Government Elections — Are you registered?' },
  { n: '46%', l: '2021 LGE turnout. Half of South Africa stayed home.' },
  { n: '9', l: 'Provinces. One movement demanding accountability.' },
];

const VALUES = [
  { icon: '⚖️', name: 'Accountability', desc: 'Public office is a duty, not a privilege.' },
  { icon: '🔍', name: 'Transparency', desc: 'Open government through public scrutiny and participation.' },
  { icon: '✊', name: 'Active Citizenship', desc: 'Democracy is not a spectator sport.' },
  { icon: '🏛️', name: 'Integrity', desc: 'We hold ourselves to the same standards we demand.' },
  { icon: '🤝', name: 'Solidarity', desc: 'Collective action for collective progress.' },
  { icon: '⚡', name: 'Justice & Equality', desc: 'Equal access to rights, opportunities, and services.' },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-neutral-900 min-h-[560px] flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* Left */}
          <div className="flex flex-col justify-center pr-0 md:pr-16 md:border-r md:border-white/10 py-8">
            <div className="font-oswald text-xs font-bold tracking-[0.3em] uppercase text-brand-red mb-5 flex items-center gap-3">
              <span className="block w-7 h-0.5 bg-brand-red" />
              Youth-Led Civil Society Movement — South Africa
            </div>
            <h1 className="font-oswald font-bold uppercase leading-none tracking-tight text-white mb-4" style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', letterSpacing: '-0.03em', lineHeight: 0.9 }}>
              ENOUGH<br />
              <span className="text-brand-red">IS</span><br />
              ENOUGH.
            </h1>
            <p className="font-oswald text-sm tracking-[0.15em] uppercase text-gray-400 mb-8">
              SOUTH AFRICA • YOUTH-LED CIVIL SOCIETY MOVEMENT • EST. 2025
            </p>
            <p className="text-gray-300 text-base leading-relaxed max-w-md mb-8">
              South Africa's promise of 1994 has not been fulfilled. Democracy gave us the right to vote. It did not give us the power to hold individual leaders accountable. EIE SA exists to reclaim that power.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/join" className="btn-red rounded-sm">Join the Movement</Link>
              <Link href="/campaigns" className="btn-outline-dark border-gray-500 text-gray-300 hover:border-white hover:text-white hover:bg-white/10 rounded-sm">
                Our Campaigns
              </Link>
            </div>
          </div>

          {/* Right — stats panel */}
          <div className="bg-brand-red flex flex-col justify-center pl-0 md:pl-12 py-8 mt-8 md:mt-0 gap-1">
            {STATS.map((s, i) => (
              <div key={s.n} className={`px-10 py-7 ${i === 0 ? 'bg-black/30' : 'bg-black/15'}`}>
                <div className="font-oswald font-bold text-white leading-none mb-2" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                  {s.n}
                </div>
                <div className="text-xs text-white/75 uppercase tracking-wide font-medium leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────── */}
      <div className="bg-brand-red py-3 px-6 border-b border-brand-red-dark overflow-hidden">
        <div className="max-w-6xl mx-auto flex items-center gap-8 flex-wrap">
          <span className="font-oswald text-xs font-bold tracking-[0.3em] uppercase text-white/60 flex-shrink-0">EIE SA</span>
          {['Mobilise', 'Educate', 'Empower', 'Hold Them Accountable', '#EnoughIsEnough'].map((item, i, arr) => (
            <span key={item} className="font-oswald text-sm font-semibold tracking-widest uppercase text-white flex items-center gap-6">
              {item}{i < arr.length - 1 && <span className="text-white/40">//</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ── CORE BACKSTORY ──────────────────────────────────── */}
      <section className="section-white">
        <div className="max-w-6xl mx-auto">
          {/* Alert overtitle */}
          <div className="inline-block bg-brand-red text-white font-oswald text-xs font-bold tracking-[0.25em] uppercase px-4 py-2 mb-8">
            THE 2026 LOCAL GOVERNMENT ELECTIONS ARE COMING
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="eyebrow">Our Position</div>
              <h2 className="section-title">WE REFUSE TO INHERIT A <span className="text-brand-red">BROKEN NATION</span></h2>
              <div className="border-l-4 border-brand-red pl-4 mt-6 mb-8">
                <p className="text-gray-600 leading-relaxed">
                  South Africa's promise of 1994 has not been fulfilled. Corruption and systemic mismanagement have directly contributed to devastating youth unemployment, rising living costs, and social disillusionment. EIE SA exists to change the rules.
                </p>
              </div>
              <Link href="/join" className="btn-red rounded-sm inline-block">JOIN THE MOVEMENT</Link>
            </div>
            <div>
              <div className="eyebrow">Our Mission</div>
              <h2 className="section-title">A South Africa Where <span className="text-brand-red">Leaders Answer</span> to Citizens</h2>
              <p className="text-gray-600 leading-relaxed mt-4 mb-6">
                We believe in building a South Africa where governance serves the people, not political parties. Where accountability is the norm, not the exception. Where young citizens lead the renewal of democracy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through peaceful activism, civic education, and policy advocacy, EIE SA builds a participatory democracy where citizens are the ultimate guardians of good governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOCUS AREAS GRID ────────────────────────────────── */}
      <section className="section-slate">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow">What We're Doing</div>
          <h2 className="section-title">Focus <span className="text-brand-red">Areas</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 mt-10">
            {FOCUS_AREAS.map((f) => (
              <div key={f.title} className="card group bg-white hover:bg-gray-50 transition-colors duration-200">
                <div className="card-top-bar" />
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-oswald text-lg font-bold uppercase tracking-wide text-brand-black mb-3">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{f.desc}</p>
                <Link href={f.link} className="font-oswald text-xs font-bold tracking-widest uppercase text-brand-red border-b border-transparent group-hover:border-brand-red transition-all duration-150">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────────── */}
      <section className="section-white">
        <div className="max-w-6xl mx-auto">
          <div className="eyebrow">What We Stand For</div>
          <h2 className="section-title">Core <span className="text-brand-red">Values</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 mt-10">
            {VALUES.map((v) => (
              <div key={v.name} className="card group bg-gray-50 hover:bg-white transition-colors duration-200">
                <div className="card-top-bar" />
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="font-oswald text-base font-bold uppercase tracking-wide text-brand-black mb-2">{v.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IEC WORKSHOP CTA ────────────────────────────────── */}
      <section className="bg-brand-red py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="font-oswald text-xs font-bold tracking-[0.3em] uppercase text-white/70 mb-3">Live Event</div>
            <h2 className="font-oswald font-bold uppercase text-white leading-tight mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              EIE SA × IEC Online Voter Education Workshop
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              EIE SA has been invited to a landmark Online Voter Education Workshop with the IEC and the top 8 political parties. This is your opportunity to learn about the 2026 LGE, ask questions directly, and understand your rights as a voter.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://forms.gle/E8VVXN12KRKZhBsV6" target="_blank" rel="noreferrer" className="bg-white text-brand-red font-oswald font-bold uppercase tracking-widest text-sm px-6 py-3 hover:bg-gray-100 transition-colors duration-150 rounded-sm">
                Register Now →
              </Link>
              <Link href="/campaigns" className="border-2 border-white text-white font-oswald font-bold uppercase tracking-widest text-sm px-6 py-3 hover:bg-white/10 transition-colors duration-150 rounded-sm">
                Learn More
              </Link>
            </div>
          </div>
          <div className="bg-black/20 p-8 rounded-sm">
            <div className="font-oswald text-xs font-bold tracking-[0.25em] uppercase text-white/60 mb-4">Workshop Details</div>
            <div className="space-y-3">
              {[
                { label: 'Format', value: 'Online — Virtual Room' },
                { label: 'Participants', value: 'IEC + Top 8 Political Parties + EIE SA' },
                { label: 'Target', value: '100+ Youth Participants' },
                { label: 'Focus', value: '2026 Local Government Elections' },
              ].map((d) => (
                <div key={d.label} className="flex gap-4 text-sm border-b border-white/10 pb-3">
                  <span className="font-bold text-white/60 uppercase tracking-wide w-28 flex-shrink-0">{d.label}</span>
                  <span className="text-white">{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────── */}
      <section className="section-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-oswald font-bold uppercase text-white leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              We refuse to inherit a <span className="text-brand-red">broken nation.</span>
            </h2>
            <p className="text-gray-400 mt-4 leading-relaxed max-w-lg">
              Protest alone won't fix a broken system. We must change the rules. Join EIE SA and be part of the movement that does.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <Link href="/join" className="btn-red rounded-sm text-center">Join the Movement</Link>
            <Link href="/contact" className="btn-outline-dark border-gray-600 text-gray-400 hover:border-white hover:text-white hover:bg-white/5 rounded-sm text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
