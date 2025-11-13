import { notFound } from 'next/navigation';
import ServiceDetail from '../../components/our_services/ServiceDetail';
import { services, servicesMap } from '../../components/our_services/servicesData';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesMap[slug];
  if (!service) {
    return { title: 'Service — Apple Tracker' };
  }
  return {
    title: `${service.title} — Apple Tracker`,
    description: service.short || 'Service detail',
  };
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = servicesMap[slug];

  if (!service) return notFound();

  const other = services.filter((s) => s.id !== slug).slice(0, 6);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white to-blue-50">
      <div className="absolute inset-0 opacity-5 pattern-dots" />
      <ServiceDetail service={service} otherServices={other} />
    </main>
  );
}
