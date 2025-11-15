import Link from 'next/link';
import { FaCar, FaTools, FaBolt, FaBell, FaTruck, FaLifeRing, FaUserShield, FaGraduationCap, FaTaxi } from 'react-icons/fa';
import { services } from './servicesData';

const iconMap: Record<string, any> = {
  'Vehicle Tracking System': FaCar,
  'Access Control': FaUserShield,
  'Fuel Sensor': FaBolt,
  'School Bus Monitoring': FaGraduationCap,
  'School Attendance': FaGraduationCap,
  'Transmission Service': FaTools,
};

const ServicesList = () => {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.title] || FaCar;
            const key = (s as any).id ?? (s as any).slug;
            const hrefId = (s as any).id ?? (s as any).slug;
            return (
              <Link
                href={`/our_services/${hrefId}`}
                key={key}
                className="block p-6 bg-white border border-gray-300 rounded-2xl hover:border-black transition-all"
              >
                <div className="flex items-center justify-center w-14 h-14 text-black rounded-lg" style={{backgroundColor:'#C0C0C0'}}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-black">{s.title}</h4>
                <p className="mt-2 text-sm text-gray-700">{s.short}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
