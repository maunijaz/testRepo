import React from 'react';
import Link from 'next/link';

const servicesLinks = [
  { label: 'Vehicle Tracking Systems', href: '/our_services' },
  { label: 'Fleet Management', href: '/our_services' },
  { label: 'Installation & Support', href: '/our_services' },
  { label: 'Enterprise Solutions', href: '/our_services' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-white via-brand-50 to-brand-100/70 text-slate-700 border-t border-brand-200">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_30%,rgba(56,189,248,0.25),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(29,78,216,0.2),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">About Apple Tracker</h4>
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400 mb-4" />
            <p className="text-slate-700">Apple Tracker provides advanced GPS tracking solutions for personal vehicles and fleets. We focus on accuracy, ease of use, and excellent customer support.</p>
            <p className="text-sm text-slate-600 mt-4">Follow us for updates</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Pages</h4>
            <div className="h-1 w-20 rounded-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400 mb-4" />
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-700 hover:text-brand-700 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-700 hover:text-brand-700 transition-colors">About us</Link></li>
              <li><Link href="/our_services" className="text-slate-700 hover:text-brand-700 transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="text-slate-700 hover:text-brand-700 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Services</h4>
            <div className="h-1 w-24 rounded-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400 mb-4" />
            <ul className="space-y-2">
              {servicesLinks.map((s) => (
                <li key={s.label}><Link href={s.href} className="text-slate-700 hover:text-brand-700 transition-colors">{s.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-200 mt-12 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-slate-900 font-semibold">Contact</p>
            <p className="text-slate-700">+923168297204</p>
            <p className="text-slate-700">Shaheen plaza flat No 2 Archer road Quetta</p>
          </div>

          <div className="text-sm text-slate-600">© {new Date().getFullYear()} Apple Tracker. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;