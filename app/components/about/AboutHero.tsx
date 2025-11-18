const AboutHero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl relative after:content-[''] after:block after:w-28 after:h-1 after:rounded-full after:bg-brand-500 after:mx-auto after:mt-6">
            Who We Are
          </h1>
          <div className="p-6 mt-8 bg-white/90 backdrop-blur rounded-2xl border border-brand-100 shadow-sm">
            <p className="text-xl leading-8 text-slate-700">
              Apple Tracker is a leading GPS tracking and fleet management company that delivers
              advanced tracking solutions for both personal and commercial vehicles. We aim to make
              real-time vehicle tracking simple, affordable, and accessible for everyone.
            </p>
            <p className="mt-4 text-xl leading-8 text-slate-700">
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