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
    // {
    //   type: 'Buses',
    //   description: 'Solutions for public transport and school buses',
    //   image: '/images/bus.jpg',
    // },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Tracking Solutions for Every Vehicle
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Whether you have a single vehicle or an entire fleet, we have the perfect tracking solution for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="overflow-hidden transition duration-300 bg-gray-50 rounded-lg border border-gray-300 hover:border-black"
            >
              <div className="relative h-48">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.type} tracking`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black">{vehicle.type}</h3>
                <p className="mt-2 text-gray-700">{vehicle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleTypesSection;