import React from 'react';

const ServicesHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gray-100" />
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 text-xl text-gray-700">
            What We Offer — Reliable tracking hardware, professional installation, powerful
            software and dedicated support to keep your vehicles safe and visible.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a className="px-6 py-3 text-lg font-semibold text-white rounded-full bg-black hover:bg-gray-800" href="#services">
              Explore Services
            </a>
            <a className="px-6 py-3 text-lg font-medium text-black rounded-full bg-white border border-gray-300 hover:bg-gray-50" href="/contact">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
