import Link from 'next/link';
import { FaCar, FaTools, FaBolt, FaBell, FaTruck, FaLifeRing } from 'react-icons/fa';
import { services } from './servicesData';

const iconMap: Record<string, any> = {
  'GPS Trackers for All Vehicles': FaCar,
  'Professional Installation': FaTools,
  'Real-Time Tracking': FaBolt,
  'Smart Alerts & Notifications': FaBell,
  'Fleet Management Solutions': FaTruck,
  'After-Sales & Technical Support': FaLifeRing,
};

const ServicesList = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white via-brand-50 to-brand-100/40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.25),transparent_60%)]" />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.title] || FaCar;
            const key = (s as any).id ?? (s as any).slug;
            const hrefId = (s as any).id ?? (s as any).slug;
            return (
              <Link
                href={`/our_services/${hrefId}`}
                key={key}
                className="group block p-6 bg-white/80 backdrop-blur border border-brand-200 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-300 shadow-inner">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">{s.title}</h4>
                <p className="mt-2 text-sm text-slate-700">{s.short}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
