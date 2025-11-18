'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShoppingCart, FaScrewdriver, FaMobileAlt, FaCarSide } from 'react-icons/fa';

const steps = [
	{
		icon: FaShoppingCart,
		title: 'Choose Your Tracker',
		description: 'Select the GPS tracker suitable for your bike, car, or truck.'
	},
	{
		icon: FaScrewdriver,
		title: 'Professional Installation',
		description: 'Our experts install and configure the tracker for you.'
	},
	{
		icon: FaMobileAlt,
		title: 'Connect to App',
		description: 'Log in to the Apple Tracker mobile or web app to view your vehicle.'
	},
	{
		icon: FaCarSide,
		title: 'Track & Drive Safely',
		description: 'Monitor your vehicle in real-time and enjoy complete peace of mind.'
	}
];

const HowItWorksSection = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1
	});

	return (
		<section className="py-20 relative overflow-hidden bg-white">
			{/* Parallax Background */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: 'url(/images/map-bg.png)',
					backgroundAttachment: 'fixed',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					opacity: 0.05
				}}
			/>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-slate-900 mb-4 relative after:content-[''] after:block after:w-24 after:h-1 after:rounded-full after:bg-brand-500 after:mx-auto after:mt-4">
						How It Works
					</h2>
					<p className="text-xl text-slate-600">
						Using Apple Tracker is simple and seamless — just four easy steps to start tracking!
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
							<div className="bg-brand-50/60 rounded-2xl border border-brand-100 p-6 relative z-10 hover:shadow-md hover:-translate-y-1 transition duration-300">
								<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-700 mb-4 ring-1 ring-brand-200">
									<step.icon className="w-6 h-6" />
								</div>
								<h3 className="text-xl font-semibold text-slate-900 mb-2">
									{step.title}
								</h3>
								<p className="text-slate-700">
									{step.description}
								</p>
							</div>
							{index < steps.length - 1 && (
								<div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-brand-200" />
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorksSection;