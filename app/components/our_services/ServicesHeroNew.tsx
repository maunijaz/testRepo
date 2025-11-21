import React from 'react';

const ServicesHero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(56,189,248,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(29,78,216,0.15),transparent_65%)]" />
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-6 py-8 rounded-3xl bg-white/60 backdrop-blur border border-brand-200 shadow-sm">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Our Services
            </h1>
            <div className="mx-auto mt-4 h-1.5 w-28 rounded-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400" />
            <p className="mt-6 text-xl text-slate-700">
              What We Offer — Reliable tracking hardware, professional installation, powerful software and dedicated support to keep your vehicles safe and visible.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a className="group px-7 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-600/25 hover:shadow-xl hover:from-brand-500 hover:to-brand-700 transition-all" href="#services">
                <span className="relative">
                  Explore Services
                  <span className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-40 bg-brand-400/30 blur-md transition" />
                </span>
              </a>
              <a className="px-7 py-3 text-lg font-medium text-slate-900 rounded-full bg-white border border-brand-200 hover:bg-brand-50 hover:shadow-md transition" href="/contact">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
