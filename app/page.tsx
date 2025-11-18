import HeroSection from '@/app/components/home/HeroSection';
import FeaturesSection from '@/app/components/home/FeaturesSection';
import VehicleTypesSection from '@/app/components/home/VehicleTypesSection';
import WhyChooseUsSection from '@/app/components/home/WhyChooseUsSection';
import HowItWorksSection from '@/app/components/home/HowItWorksSection';

export const metadata = {
  title: 'Apple Tracker - GPS Vehicle Tracking Solutions',
  description: 'Advanced GPS tracking solutions for bikes, cars, and trucks. Real-time monitoring, instant alerts, and professional installation.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <VehicleTypesSection />
    </>
  );
}
