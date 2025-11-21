import { FaMapMarkedAlt, FaHistory, FaBell, FaLock, FaRoute, FaTachometerAlt, FaShieldAlt, FaGasPump, FaClock, FaChartLine, FaFileAlt, FaBroadcastTower } from 'react-icons/fa';

const features = [
  {
    title: 'All Notification Reports',
    description: 'Receive comprehensive notifications for all tracking events and alerts.',
    icon: FaBell,
  },
  {
    title: 'Custom Reports',
    description: 'Generate customized reports based on your specific tracking needs.',
    icon: FaFileAlt,
  },
  {
    title: 'Map View Visibility (Through Mobile App)',
    description: 'View real-time vehicle locations on interactive maps via mobile app.',
    icon: FaMapMarkedAlt,
  },
  {
    title: 'Seat Sensor',
    description: 'Monitor vehicle occupancy with advanced seat sensor technology.',
    icon: FaChartLine,
  },
  {
    title: 'Temperature/Geo-Fences',
    description: 'Set virtual boundaries and monitor temperature conditions.',
    icon: FaShieldAlt,
  },
  {
    title: 'Activity Reports',
    description: 'Track vehicle activity with detailed movement and usage reports.',
    icon: FaHistory,
  },
  {
    title: 'Weight Sensor',
    description: 'Monitor cargo weight and load distribution in real-time.',
    icon: FaTachometerAlt,
  },
  {
    title: 'Fuel Sensor',
    description: 'Track fuel consumption and prevent fuel theft.',
    icon: FaGasPump,
  },
  {
    title: 'Driver & Stop Report',
    description: 'Analyze driver behavior and track all vehicle stops.',
    icon: FaClock,
  },
  {
    title: 'Door Play',
    description: 'Monitor door opening and closing events for security.',
    icon: FaLock,
  },
  {
    title: 'Live Traffic Updates',
    description: 'Get real-time traffic information for route optimization.',
    icon: FaBroadcastTower,
  },
  {
    title: 'Vehicle idling Report',
    description: 'Track and reduce unnecessary vehicle idling time.',
    icon: FaRoute,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 relative after:content-[''] after:block after:w-20 after:h-1 after:rounded-full after:bg-brand-500 after:mx-auto after:mt-4">
            TRACKING FEATURES
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
            Our comprehensive GPS tracking solution provides advanced features to monitor and manage your fleet with complete visibility and control.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 bg-white rounded-2xl border border-brand-100 shadow-sm hover:shadow-lg hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-700 ring-1 ring-brand-200">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-slate-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;