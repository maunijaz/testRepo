'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiShield, FiTruck, FiTool, FiHeadphones, FiGrid } from 'react-icons/fi';

const services = [
  {
    icon: <FiShield className="w-8 h-8" />,
    title: "Personal Vehicle Tracking",
    image: "/images/services/pic1.jpg",
    description: "Keep your vehicle secure and monitored with our advanced tracking solution.",
    features: [
      "Real-time location updates",
      "Anti-theft alerts",
      "Complete route history",
      "Mobile app control",
      "Geofence notifications"
    ]
  },
  {
    icon: <FiTruck className="w-8 h-8" />,
    title: "Fleet Tracking & Management",
    image: "/images/services/pic2.jpg",
    description: "Comprehensive fleet management solution for businesses of all sizes.",
    features: [
      "Multi-vehicle dashboard",
      "Driver behavior analytics",
      "Automated reports",
      "Fuel consumption monitoring",
      "Maintenance scheduling"
    ]
  },
  {
    icon: <FiTool className="w-8 h-8" />,
    title: "Installation & Configuration",
    image: "/images/services/pic3.jpg",
    description: "Professional setup service ensuring optimal performance of your tracking system.",
    features: [
      "Expert installation team",
      "Clean and hidden wiring",
      "System configuration",
      "Performance testing",
      "Setup verification"
    ]
  },
  {
    icon: <FiHeadphones className="w-8 h-8" />,
    title: "Maintenance & Support",
    image: "/images/services/pic4.jpg",
    description: "Round-the-clock support and maintenance to keep your tracking system running smoothly.",
    features: [
      "24/7 customer assistance",
      "Warranty coverage",
      "Regular system updates",
      "Technical troubleshooting",
      "Remote diagnostics"
    ]
  },
  {
    icon: <FiGrid className="w-8 h-8" />,
    title: "Custom Enterprise Solutions",
    image: "/images/services/pic5.jpg",
    description: "Tailored tracking solutions for large-scale operations and specific industry needs.",
    features: [
      "Custom implementation",
      "API integration",
      "Scalable infrastructure",
      "Industry-specific features",
      "Dedicated account manager"
    ]
  }
];

const DetailedServices = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">
            Our Comprehensive Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
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
                <div className="bg-gray-50 rounded-2xl border border-gray-300 p-8 h-full">
                  <div className="text-black mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden border border-gray-300">
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