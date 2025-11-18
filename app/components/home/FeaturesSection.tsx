import { FaMapMarkedAlt, FaHistory, FaBell, FaLock } from 'react-icons/fa';

const features = [
  {
    title: 'Real-Time Tracking',
    description: 'Monitor your vehicle\'s location in real-time with precise GPS tracking.',
    icon: FaMapMarkedAlt,
  },
  {
    title: 'Trip History',
    description: 'Access detailed history of routes, stops, and driving patterns.',
    icon: FaHistory,
  },
  {
    title: 'Instant Alerts',
    description: 'Get immediate notifications for speed, geo-fencing, and unauthorized usage.',
    icon: FaBell,
  },
  {
    title: 'Secure Access',
    description: 'Advanced security features to protect your vehicle and data.',
    icon: FaLock,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 relative after:content-[''] after:block after:w-20 after:h-1 after:rounded-full after:bg-brand-500 after:mx-auto after:mt-4">
            Advanced Features for Complete Control
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
            Our GPS tracking solution comes packed with features designed to give you peace of mind
            and total control over your fleet.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
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