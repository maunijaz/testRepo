import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type Service = {
  slug: string;
  id?: string;
  title: string;
  short: string;
  description: string;
  image?: string;
  keywords?: string[];
};

const ServiceDetail: React.FC<{ service: Service; otherServices: Service[] }> = ({ service, otherServices }) => {
  return (
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid items-center grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left: content */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{service.title}</h1>
          <p className="mt-4 text-lg text-slate-700">{service.description}</p>

          <div className="flex flex-wrap gap-2 mt-6">
            {service.keywords?.map((k) => (
              <span key={k} className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full ring-1 ring-blue-200">
                {k}
              </span>
            ))}
          </div>

            {/* <div className="mt-8">
              <Link href="/our_services" className="inline-block px-5 py-3 font-semibold text-white bg-blue-600 rounded-full shadow hover:bg-blue-700">
                Back to Services
              </Link>
            </div> */}
        </div>

        {/* Right: big image or placeholder */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg border border-blue-100">
          {service.image ? (
            // Use next/image if image exists in public; otherwise this will show broken link — keep as optional
            <div className="relative h-80 md:h-[36rem] w-full bg-gradient-to-br from-sky-50 to-blue-100">
              <Image src={service.image} alt={service.title} fill className="object-cover" />
            </div>
          ) : (
            <div className="flex items-center justify-center h-80 md:h-[36rem] bg-gradient-to-br from-sky-200 to-blue-300">
              <span className="text-2xl font-semibold text-white">{service.title}</span>
            </div>
          )}
        </div>
      </div>

      {/* More services */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-slate-900">More services</h3>
        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.map((s) => {
            const serviceId = (s as any).id ?? s.slug;
            return (
              <Link key={serviceId} href={`/our_services/${serviceId}`} className="p-5 bg-white rounded-2xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
                <h4 className="text-lg font-medium text-slate-900">{s.title}</h4>
                <p className="mt-1 text-sm text-slate-700">{s.short}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
