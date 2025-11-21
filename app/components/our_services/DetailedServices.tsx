'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiShield, FiTruck, FiTool, FiHeadphones, FiGrid } from 'react-icons/fi';

const services = [
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Vehicle Tracking System",
    image: "/images/services/pic1.jpg",
    description: "Track your fleet anytime, anywhere in real-time with comprehensive features.",
    features: [
      "Basic tracking",
      "Personal Tracking",
      "School Bus Tracking",
      "Cab Management",
      "Courier & Delivery",
      "Travel Management Solution"
    ]
  },
  {
    icon: <FiTruck className="w-8 h-8" />,
    title: "Access Control System",
    image: "/images/services/pic2.jpg",
    description: "Advanced access control and security management for your vehicles and facilities.",
    features: [
      "Biometric access control",
      "RFID card systems",
      "Door lock controls",
      "Authorized personnel tracking",
      "Entry/exit logs"
    ]
  },
  {
    icon: <FiTool className="w-8 h-8" />,
    title: "Fuel Sensor",
    image: "/images/services/pic3.jpg",
    description: "Monitor fuel consumption and prevent fuel theft with accurate sensor technology.",
    features: [
      "Real-time fuel monitoring",
      "Fuel theft detection",
      "Consumption reports",
      "Tank level alerts",
      "Refueling notifications"
    ]
  },
  {
    icon: <FiHeadphones className="w-8 h-8" />,
    title: "School Bus Monitoring",
    image: "/images/services/pic4.jpg",
    description: "Ensure student safety with dedicated school bus tracking and monitoring solutions.",
    features: [
      "Live bus location tracking",
      "Student attendance monitoring",
      "Parent notifications",
      "Route optimization",
      "Driver behavior monitoring"
    ]
  },
  {
    icon: <FiGrid className="w-8 h-8" />,
    title: "School Attendance & Transmission Monitoring",
    image: "/images/services/pic5.jpg",
    description: "Complete attendance and vehicle transmission monitoring system for educational institutions.",
    features: [
      "Automated attendance tracking",
      "RFID student cards",
      "Transmission diagnostics",
      "Parent/admin dashboards",
      "Real-time alerts"
    ]
  }
];

const DetailedServices = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-brand-50 to-brand-100/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(29,78,216,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_75%,rgba(56,189,248,0.18),transparent_65%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Comprehensive Services
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-32 rounded-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400" />
          <p className="mt-6 text-xl text-slate-600">
            Discover how our tracking solutions can benefit you
          </p>
        </div>

        <div ref={ref} className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row gap-8 items-start ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="md:w-1/2">
                <div className="bg-white/85 backdrop-blur rounded-2xl border border-brand-200 shadow-sm p-8 h-full hover:shadow-lg transition">
                  <div className="text-brand-600 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-slate-700">
                        <svg className="w-5 h-5 text-brand-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden border border-brand-200 shadow-sm relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-600/0 via-brand-600/5 to-brand-700/20 mix-blend-multiply" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;