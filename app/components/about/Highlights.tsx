import { FaTools, FaHeadset, FaDollarSign } from 'react-icons/fa';

const highlights = [
  {
    icon: FaTools,
    title: 'Professional installation and quick setup',
    description:
      'Expert installation and fast setup so you can start tracking in no time. Our technicians ensure a smooth, reliable installation process.',
  },
  {
    icon: FaHeadset,
    title: 'Fast and reliable customer support',
    description:
      '24/7 responsive support from our dedicated team to help with configuration, troubleshooting, and advice.',
  },
  {
    icon: FaDollarSign,
    title: 'Transparent pricing with no hidden costs',
    description:
      'Clear, predictable pricing plans with no surprises — pay only for what you need.',
  },
];

const Highlights = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-900 relative after:content-[''] after:block after:w-20 after:h-1 after:rounded-full after:bg-brand-500 after:mx-auto after:mt-4">Why Customers Choose Us</h3>
          <p className="max-w-2xl mx-auto mt-3 text-base text-slate-600">
            Simple, dependable, and transparent solutions built around your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-brand-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-brand-100 text-brand-700 ring-1 ring-brand-200">
                <h.icon className="w-7 h-7" />
              </div>

              <h4 className="mt-6 text-lg font-semibold text-slate-900 text-center">{h.title}</h4>
              <p className="mt-3 text-sm text-slate-700 text-center">{h.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
