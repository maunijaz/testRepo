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
    <main className="relative min-h-screen bg-gradient-to-br from-white via-brand-50 to-brand-100/60 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(56,189,248,0.25),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(29,78,216,0.18),transparent_60%)]" />
      <div className="absolute inset-0 opacity-10 pattern-dots" />
      <ServiceDetail service={service} otherServices={other} />
    </main>
  );
}
