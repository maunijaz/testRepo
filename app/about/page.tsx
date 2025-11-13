import AboutHero from '../components/about/AboutHero';
import CoreValues from '../components/about/CoreValues';
import VisionMission from '../components/about/VisionMission';
import Highlights from '../components/about/Highlights';
import CustomerStats from '../components/about/CustomerStats';

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots" />
      
      <AboutHero />
      <VisionMission />
  <Highlights />
      <CoreValues />
      <CustomerStats />
    </main>
  );
}

export const metadata = {
  title: 'About — Apple Tracker',
  description: 'Learn more about Apple Tracker, our mission, vision and values.',
};
