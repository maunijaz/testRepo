'use client';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    number: 2000,
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
    <section ref={ref} className="relative py-20 bg-white">
      <div className="absolute inset-0 bg-gray-50 opacity-50" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Trusted by thousands of customers worldwide for reliable vehicle tracking solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 min-[590px]:grid-cols-2 gap-8 mt-16 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center bg-white rounded-2xl border border-gray-300 hover:border-black transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center text-4xl font-bold text-black">
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
              <p className="mt-2 text-lg font-medium text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStats;