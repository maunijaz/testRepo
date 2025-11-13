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
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-black mb-3">About Apple Tracker</h4>
            <p className="text-gray-700">Apple Tracker provides advanced GPS tracking solutions for personal vehicles and fleets. We focus on accuracy, ease of use, and excellent customer support.</p>
            <p className="text-sm text-gray-600 mt-4">Follow us for updates</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Pages</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-700 hover:text-black">Home</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-black">About us</Link></li>
              <li><Link href="/our_services" className="text-gray-700 hover:text-black">Our Services</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-black">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-black mb-3">Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((s) => (
                <li key={s.label}><Link href={s.href} className="text-gray-700 hover:text-black">{s.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-black font-medium">Contact</p>
            <p className="text-gray-700">+923168297204</p>
            <p className="text-gray-700">Shaheen plaza flat No 2 Archer road Quetta</p>
          </div>

          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Apple Tracker. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;