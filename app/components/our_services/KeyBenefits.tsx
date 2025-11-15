'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiBell, FiMonitor, FiDollarSign, FiHeadphones } from 'react-icons/fi';

const benefits = [
  {
    icon: <FiMapPin className="w-6 h-6" />,
    title: "Custom Reports",
    description: "Generate detailed custom reports for comprehensive fleet analysis and insights"
  },
  {
    icon: <FiBell className="w-6 h-6" />,
    title: "Engine Kill Facility",
    description: "Remote engine control through mobile app for enhanced security"
  },
  {
    icon: <FiMonitor className="w-6 h-6" />,
    title: "Customized Geo-Fences",
    description: "Set up virtual boundaries and receive alerts when vehicles enter or exit zones"
  },
  {
    icon: <FiBell className="w-6 h-6" />,
    title: "Over Speed Alerts",
    description: "Instant notifications when vehicles exceed preset speed limits"
  },
  {
    icon: <FiMonitor className="w-6 h-6" />,
    title: "Seat Sensor",
    description: "Monitor passenger occupancy with integrated seat sensors"
  },
  {
    icon: <FiMapPin className="w-6 h-6" />,
    title: "Weight Sensor",
    description: "Track vehicle load weight for compliance and optimization"
  },
  {
    icon: <FiDollarSign className="w-6 h-6" />,
    title: "Fuel Sensor",
    description: "Monitor fuel levels and consumption patterns to prevent theft and optimize usage"
  },
  {
    icon: <FiMonitor className="w-6 h-6" />,
    title: "Drivers & Stop Report",
    description: "Detailed reports on driver behavior, stops, and route efficiency"
  },
  {
    icon: <FiHeadphones className="w-6 h-6" />,
    title: "Ignition On/OFF Report",
    description: "Track when vehicles are started and stopped for better fleet management"
  },
  {
    icon: <FiMapPin className="w-6 h-6" />,
    title: "Live Traffic Updates",
    description: "Real-time traffic information for optimal route planning"
  },
  {
    icon: <FiBell className="w-6 h-6" />,
    title: "Vehicle Idling Report",
    description: "Monitor and reduce unnecessary idling to save fuel and reduce emissions"
  },
  {
    icon: <FiMapPin className="w-6 h-6" />,
    title: "Driver ID Key",
    description: "Identify and track individual drivers for accountability and performance monitoring"
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