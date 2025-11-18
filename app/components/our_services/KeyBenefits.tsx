'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiBell, FiMonitor, FiDollarSign, FiHeadphones } from 'react-icons/fi';

const benefits = [
  {
    icon: <FiMapPin className="w-6 h-6" />,
    title: "Live GPS Updates",
    description: "High-accuracy location tracking with real-time updates every 10 seconds"
  },
  {
    icon: <FiBell className="w-6 h-6" />,
    title: "Smart Alerts",
    description: "Customizable notifications for speed, geofence, and vehicle status"
  },
  {
    icon: <FiMonitor className="w-6 h-6" />,
    title: "User-Friendly Dashboard",
    description: "Intuitive interface accessible from any device, anywhere"
  },
  {
    icon: <FiDollarSign className="w-6 h-6" />,
    title: "Affordable Packages",
    description: "Flexible pricing options for both individual users and fleet managers"
  },
  {
    icon: <FiHeadphones className="w-6 h-6" />,
    title: "Lifetime Support",
    description: "Dedicated technical support team available 24/7 for assistance"
  }
];

const KeyBenefits = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-brand-50 to-brand-100/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(29,78,216,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(56,189,248,0.25),transparent_65%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Why Choose Apple Tracker?
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-40 rounded-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400" />
          <p className="mt-6 text-xl text-slate-600">
            Experience the advantages that make us the preferred choice
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/85 backdrop-blur rounded-2xl border border-brand-200 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 ring-1 ring-brand-300 shadow-inner">
                  {benefit.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-slate-900">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-slate-700">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;