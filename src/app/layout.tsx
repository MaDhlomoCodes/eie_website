'use client';
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/campaigns', label: 'Campaigns' },
  { href: '/join', label: 'Join Us' },
  { href: '/contact', label: 'Contact' },
];

function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-charcoal border-b-2 border-brand-red">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-oswald text-xl font-bold tracking-[0.2em] uppercase text-white">
          EIE <span className="text-brand-red">SA</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`font-oswald text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-sm transition-all duration-150 ${
                  pathname === l.href
                    ? 'bg-brand-red text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/join" className="hidden md:block btn-red text-xs rounded-sm">
          Join the Movement
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-charcoal border-t border-white/10 px-6 pb-4">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`block font-oswald text-sm font-semibold tracking-widest uppercase py-3 border-b border-white/10 transition-colors duration-150 ${
                pathname === l.href ? 'text-brand-red' : 'text-gray-400 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/join" onClick={() => setMenuOpen(false)} className="block mt-4 btn-red text-center text-xs rounded-sm">
            Join the Movement
          </Link>
        </div>
      )}
    </header>
  );
}

function LiveBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="bg-brand-red text-white text-center font-bold uppercase tracking-wide py-2 px-4 text-xs relative">
      <span>
        🔴 UPCOMING: EIE SA × IEC Online Voter Education Workshop — 2026 LGE — Top 8 Political Parties Participating.{' '}
        <a href="https://forms.gle/E8VVXN12KRKZhBsV6" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-gray-200 transition-colors">
          TARGET: 100+ YOUTH — CLICK HERE TO JOIN →
        </a>
      </span>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-base font-normal"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10">
        <div>
          <div className="font-oswald text-xl font-bold tracking-[0.2em] uppercase mb-3">
            EIE <span className="text-brand-red">SA</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Enough Is Enough South Africa is a youth-led civil society movement committed to accountability, transparency, and good governance. We refuse to inherit a broken nation.
          </p>
        </div>
        <div>
          <div className="font-oswald text-xs font-bold tracking-[0.25em] uppercase text-gray-500 mb-4">Navigate</div>
          <ul className="space-y-2 list-none">
            {[...NAV_LINKS, { href: '/join', label: 'Join / Donate' }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-gray-400 hover:text-brand-red transition-colors duration-150">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-oswald text-xs font-bold tracking-[0.25em] uppercase text-gray-500 mb-4">Connect</div>
          <ul className="space-y-2 text-sm text-gray-400 list-none">
            <li><a href="https://x.com/eiesouthafrica?s=21" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors">X / Twitter — @eiesouthafrica</a></li>
            <li><a href="https://www.facebook.com/share/1EF3WwRFfU/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors">Facebook — EIE SA</a></li>
            <li><a href="https://www.instagram.com/eie_sa?igsh=MTFzYWpyZXhqczJhYw==" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors">Instagram — @eie_sa</a></li>
            <li><a href="https://www.tiktok.com/@enoughisenough_sa" target="_blank" rel="noreferrer" className="hover:text-brand-red transition-colors">TikTok — @enoughisenough_sa</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">LinkedIn — EIE SA</a></li>
            <li><a href="mailto:enoughisenoughaone@gmail.com" className="hover:text-brand-red transition-colors">enoughisenoughaone@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-600">
        <span>© 2025 Enough Is Enough South Africa. Non-Profit Civil Society Movement.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-red transition-colors">POPIA Compliance</a>
        </div>
        <span className="font-oswald font-bold tracking-[0.2em] uppercase text-brand-red">#EnoughIsEnough</span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>EIE SA — Enough Is Enough South Africa</title>
        <meta name="description" content="Youth-led civil society movement committed to accountability, transparency, and good governance. Enough Is Enough South Africa." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <LiveBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
