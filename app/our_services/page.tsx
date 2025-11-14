import ServicesHero from '../components/our_services/ServicesHeroNew';
import ServicesList from '../components/our_services/ServicesListNew';
import DetailedServices from '../components/our_services/DetailedServices';
import ProcessSection from '../components/our_services/ProcessSection';
import KeyBenefits from '../components/our_services/KeyBenefits';

export const metadata = {
  title: 'Our Services - Apple Tracker',
  description: 'Explore our comprehensive GPS tracking solutions for personal vehicles and fleets. Professional installation and 24/7 support included.',
};

export default function OurServicesPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white to-blue-50">
      <ServicesHero />
      <ServicesList />
      <DetailedServices />
      <ProcessSection />
      <KeyBenefits />
    </main>
  );
}

