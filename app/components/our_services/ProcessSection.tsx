'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle, FiSettings, FiSmartphone, FiMapPin } from 'react-icons/fi';

const steps = [
  {
    icon: <FiCheckCircle className="w-8 h-8" />,
    title: "Choose your service",
    description: "Select the tracking solution that best fits your needs"
  },
  {
    icon: <FiSettings className="w-8 h-8" />,
    title: "Installation",
    description: "Professional installation by our certified technicians"
  },
  {
    icon: <FiSmartphone className="w-8 h-8" />,
    title: "App Setup",
    description: "Configure your tracking app with guided assistance"
  },
  {
    icon: <FiMapPin className="w-8 h-8" />,
    title: "Start Tracking",
    description: "Begin monitoring your vehicle in real-time"
  }
];

const ProcessSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">
            How Our Service Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get started with Apple Tracker in four simple steps
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-xl border border-gray-300 p-6 relative z-10 h-full hover:border-black transition-colors duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full text-black mb-4" style={{backgroundColor:'#C0C0C0'}}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-400" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;