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
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(29,78,216,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_75%,rgba(56,189,248,0.22),transparent_65%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            How Our Service Works
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-40 rounded-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400" />
          <p className="mt-6 text-xl text-slate-600">
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
              <div className="bg-white/80 backdrop-blur rounded-2xl border border-brand-200 shadow-sm p-6 relative z-10 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-50 to-brand-100 text-brand-700 mb-4 ring-1 ring-brand-300 shadow-inner">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-700">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-brand-300 to-brand-400" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;