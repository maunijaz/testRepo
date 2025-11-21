import Image from 'next/image';

const VehicleTypesSection = () => {
  const vehicles = [
    {
      type: 'Cars',
      description: 'Perfect for personal vehicles and small fleets',
      image: '/images/car.jpg',
    },
    {
      type: 'Trucks',
      description: 'Ideal for commercial trucks and heavy vehicles',
      image: '/images/truck.jpg',
    },
    {
      type: 'Bikes',
      description: 'Compact trackers for two-wheelers',
      image: '/images/bike.jpg',
    },
  ];

  const bgColors = ['bg-green-50/80', 'bg-cyan-50/80', 'bg-pink-50/80'];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl relative after:content-[''] after:block after:w-24 after:h-1 after:rounded-full after:bg-brand-500 after:mx-auto after:mt-4">
            Tracking Solutions for Every Vehicle
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">
            Whether you have a single vehicle or an entire fleet, we have the perfect tracking solution for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className={`group overflow-hidden transition duration-300 rounded-3xl border border-brand-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 ${bgColors[index % 3]}`}
            >
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.type} tracking`}
                  fill
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{vehicle.type}</h3>
                <p className="mt-2 text-slate-700">{vehicle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleTypesSection;