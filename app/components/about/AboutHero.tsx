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
              It Is About Giving You The Ability To Use Gps Tracking To Its Maximum Benefit, For Maximum Return On Your Investment! Experienced & Expertise.
            </p>
            <p className="mt-4 text-xl leading-8 text-slate-700">
              We Know How To Customise Gps Tracking For Your Business. You Needn't Just Buy A Gps Tracking Device And Hope "It Has The Features You Need".
            </p>
            <p className="mt-4 text-xl leading-8 text-slate-700">
              With Leading Technology Suppliers To Give You A Winning Combination "Our Years" Experience And "Your" Features Backed By One Of The Largest, Most Reliable Gps Networks In UAE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;