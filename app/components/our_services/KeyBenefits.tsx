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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">
            Why Choose Apple Tracker?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
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
              className="bg-white rounded-xl border border-gray-300 p-6 hover:border-black transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-black" style={{backgroundColor:'#C0C0C0'}}>
                  {benefit.icon}
                </div>
                <h3 className="ml-4 text-xl font-semibold text-black">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-700">
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