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
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-black mb-4">
						Why Choose Apple Tracker?
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
							className="bg-white p-6 rounded-xl border border-gray-300 hover:border-black transition-all duration-300"
						>
							<div className="inline-flex items-center justify-center w-12 h-12 text-black rounded-lg mb-4" style={{backgroundColor:'#C0C0C0'}}>
								<feature.icon className="w-6 h-6" />
							</div>
							<h3 className="text-xl font-semibold text-black mb-2">
								{feature.title}
							</h3>
							<p className="text-gray-700">{feature.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUsSection;