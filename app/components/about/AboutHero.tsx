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
              We know how to customize GPS tracking for your business, your needs and your highest payback. 
              Hire partners with leading experience. Together we give you a winning combination of expert 
              personal attention backed by one of the largest, most reliable GPS networks in UAE.
            </p>
            <p className="mt-4 text-xl leading-8 text-gray-700">
              Track your fleet any time, anywhere in real-time. From basic tracking to advanced fleet 
              management solutions including school bus tracking, taxi management, cold storage monitoring, 
              and waste management solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;