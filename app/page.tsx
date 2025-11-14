import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import VehicleTypesSection from './components/home/VehicleTypesSection';
import WhyChooseUsSection from './components/home/WhyChooseUsSection';
import HowItWorksSection from './components/home/HowItWorksSection';

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
