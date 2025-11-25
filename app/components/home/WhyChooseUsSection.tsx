'use client';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaShieldAlt, FaDesktop, FaBolt, FaTools, FaHeadset } from 'react-icons/fa';

const features = [
	{
		icon: FaMapMarkerAlt,
		title: 'Real-Time Accuracy',
		description: 'Get live location updates for your vehicles, anytime and anywhere.'
	},
	{
		icon: FaShieldAlt,
		title: 'Data Privacy & Security',
		description: 'Your tracking data is encrypted and protected at all times.'
	},
	{
		icon: FaDesktop,
		title: 'User-Friendly Interface',
		description: 'Monitor everything from our easy-to-use web and mobile app.'
	},
	{
		icon: FaBolt,
		title: 'Fast Alerts',
		description: 'Receive instant notifications for speeding, ignition, or geofence breaches.'
	},
	{
		icon: FaTools,
		title: 'Expert Installation',
		description: 'Our professionals ensure neat, safe, and reliable device setup.'
	},
	{
		icon: FaHeadset,
		title: '24/7 Support',
		description: "We're always available to help with quick solutions and updates."
	}
];

const WhyChooseUsSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	return (
		<section className="py-20 bg-gradient-to-b from-brand-50 via-white to-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-slate-900 mb-4 relative after:content-[''] after:block after:w-24 after:h-1 after:rounded-full after:bg-brand-500 after:mx-auto after:mt-4">
						Why Choose Us?
					</h2>
					<p className="text-xl text-slate-600 max-w-3xl mx-auto">
						At Apple Tracker, we go beyond just showing your vehicle's location — we
						bring peace of mind, control, and confidence wherever you go.
					</p>
				</div>

				<div
					ref={ref}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							className="group relative bg-white/90 backdrop-blur p-6 rounded-2xl border border-brand-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
						>
							<span className="absolute left-0 top-0 h-full w-[3px] bg-brand-500/70 rounded-l-2xl" />
							<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-700 mb-4 ring-1 ring-brand-200">
								<feature.icon className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-semibold text-slate-900 mb-2">
								{feature.title}
							</h3>
							<p className="text-slate-700">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};


export default WhyChooseUsSection;
