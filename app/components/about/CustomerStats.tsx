'use client';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    number: 50000,
    label: 'Active Users',
    suffix: '+',
  },
  {
    number: 1000000,
    label: 'Kilometers Tracked',
    suffix: 'km+',
  },
  {
    number: 98,
    label: 'Customer Satisfaction',
    suffix: '%',
  },
  {
    number: 24,
    label: 'Support Availability',
    suffix: '/7',
  },
];

const CustomerStats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
    fallbackInView: false
  });

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-brand-50 to-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl relative after:content-[''] after:block after:w-24 after:h-1 after:rounded-full after:bg-brand-500 after:mx-auto after:mt-4">
            Our Impact in Numbers
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
            Trusted by thousands of customers worldwide for reliable vehicle tracking solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-16 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center bg-white/90 backdrop-blur rounded-2xl border border-brand-100 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center text-4xl font-bold text-brand-700">
                  {inView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      separator=","
                      delay={0.2}
                    />
                  )}
                <span>{stat.suffix}</span>
              </div>
              <p className="mt-2 text-lg font-medium text-slate-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStats;