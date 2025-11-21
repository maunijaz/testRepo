'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiBell, FiMonitor, FiDollarSign, FiHeadphones, FiThermometer, FiTrendingUp, FiFileText, FiUsers, FiActivity, FiTruck, FiAlertCircle, FiMail } from 'react-icons/fi';

const benefits = [
  {
    icon: <FiActivity className="w-6 h-6" />,
    title: "History Playback",
    description: "Review complete vehicle journey history with playback functionality"
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: "Speed violation report",
    description: "Monitor and track speed limit violations across your fleet"
  },
  {
    icon: <FiThermometer className="w-6 h-6" />,
    title: "Temperature sensor report",
    description: "Track temperature conditions for refrigerated vehicles"
  },
  {
    icon: <FiDollarSign className="w-6 h-6" />,
    title: "Fuel consumption report",
    description: "Detailed analysis of fuel usage and consumption patterns"
  },
  {
    icon: <FiMonitor className="w-6 h-6" />,
    title: "Salts report",
    description: "Monitor vehicle status and operational reports"
  },
  {
    icon: <FiTruck className="w-6 h-6" />,
    title: "Vehicle turn on & turn off through E-mail",
    description: "Receive instant email notifications for ignition events"
  },
  {
    icon: <FiFileText className="w-6 h-6" />,
    title: "Device report",
    description: "Comprehensive reports on device status and performance"
  },
  {
    icon: <FiAlertCircle className="w-6 h-6" />,
    title: "Maintenance report",
    description: "Track vehicle maintenance schedules and service history"
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: "Auto Received Report",
    description: "Automated report generation and delivery system"
  },
  {
    icon: <FiFileText className="w-6 h-6" />,
    title: "OBD Data Report",
    description: "Access on-board diagnostic data for vehicle health monitoring"
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: "Passenger Reports",
    description: "Track passenger count and journey details"
  },
  {
    icon: <FiMail className="w-6 h-6" />,
    title: "Through E-mail",
    description: "Receive all reports conveniently via email delivery"
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
            OUR REPORTS
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-40 rounded-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400" />
          <p className="mt-6 text-xl text-slate-600">
            Comprehensive reporting system for complete fleet visibility and insights
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
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