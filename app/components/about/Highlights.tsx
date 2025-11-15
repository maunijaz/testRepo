import { FaTools, FaHeadset, FaDollarSign } from 'react-icons/fa';

const highlights = [
  {
    icon: FaHeadset,
    title: '24/7 Customer Support',
    description:
      'Round-the-clock customer support available to assist you anytime, anywhere with your tracking needs.',
  },
  {
    icon: FaTools,
    title: 'High-tech Technology',
    description:
      'Advanced GPS tracking technology with real-time updates and comprehensive monitoring features.',
  },
  {
    icon: FaHeadset,
    title: 'Professional Staff',
    description:
      'Experienced and skilled professionals dedicated to providing the best tracking solutions.',
  },
  {
    icon: FaDollarSign,
    title: 'Service on your door step',
    description:
      'Convenient installation and support services delivered directly to your location.',
  },
];

const Highlights = () => {
  return (
    <section className="relative py-16 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-black">Why Customers Choose Us</h3>
          <p className="max-w-2xl mx-auto mt-3 text-base text-gray-600">
            Simple, dependable, and transparent solutions built around your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-300 rounded-2xl hover:border-black transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto text-black rounded-lg" style={{backgroundColor:'#C0C0C0'}}>
                <h.icon className="w-7 h-7" />
              </div>

              <h4 className="mt-6 text-lg font-semibold text-black text-center">{h.title}</h4>
              <p className="mt-3 text-sm text-gray-700 text-center">{h.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
