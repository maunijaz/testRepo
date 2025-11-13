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
    <section className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Advanced Features for Complete Control
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Our GPS tracking solution comes packed with features designed to give you peace of mind
            and total control over your fleet.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 transition duration-300 bg-white rounded-xl hover:bg-gray-100 border border-gray-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 text-black rounded-lg" style={{backgroundColor:'#C0C0C0'}}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-black">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-700">
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