const AboutHero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gray-100" />
      
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight text-black sm:text-6xl">
            Who We Are
          </h1>
          <div className="p-6 mt-8 bg-white rounded-2xl border border-gray-300">
            <p className="text-xl leading-8 text-gray-700">
              Apple Tracker is a leading GPS tracking and fleet management company that delivers
              advanced tracking solutions for both personal and commercial vehicles. We aim to make
              real-time vehicle tracking simple, affordable, and accessible for everyone.
            </p>
            <p className="mt-4 text-xl leading-8 text-gray-700">
              Whether you're tracking one bike or managing an entire fleet of heavy vehicles,
              we provide complete service, from installation and configuration to continuous
              access through our mobile app and web portal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;