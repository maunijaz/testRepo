const raw = [
  {
    slug: 'gps-trackers',
    title: 'GPS Trackers for All Vehicles',
    short: 'Accurate tracking for motorcycles, cars, vans, buses and heavy trucks.',
    description:
      'We supply GPS trackers for motorcycles, cars, vans, buses, and heavy trucks — accurate tracking and reliable performance. Our devices are built for long-term reliability and precise location data.',
    image: '/images/servicesDet/pic1.jpg',
    keywords: ['GPS', 'Trackers', 'Vehicles'],
  },
  {
    slug: 'professional-installation',
    title: 'Professional Installation',
    short: 'Skilled technicians for safe and neat installation.',
    description:
      'Our skilled technicians install trackers safely and efficiently, ensuring strong signal and neat wiring. We handle installation for all vehicle types and provide configuration on-site.',
    image: '/images/servicesDet/pic2.jpg',
    keywords: ['Installation', 'Configuration', 'Technician'],
  },
  {
    slug: 'tracking-reports',
    title: 'Tracking Reports',
    short: 'Comprehensive reports and analytics for fleet management.',
    description:
      'Access detailed tracking reports including history playback, speed violation reports, fuel consumption analysis, temperature sensor data, maintenance records, OBD data, and passenger reports. All reports can be automatically received through email for your convenience.',
    image: '/images/servicesDet/pic7.jpg',
    keywords: ['Reports', 'Analytics', 'Fleet Management'],
  },
  {
    slug: 'real-time-tracking',
    title: 'Real-Time Tracking',
    short: 'Live location, route, speed and history on web & mobile.',
    description:
      'View your vehicle\'s live location, route, speed, and travel history anytime using our web or mobile app. Real-time updates help you respond faster and manage vehicles more effectively.',
    image: '/images/servicesDet/pic3.jpg',
    keywords: ['Real-time', 'Live', 'History'],
  },
  {
    slug: 'smart-alerts',
    title: 'Smart Alerts & Notifications',
    short: 'Instant alerts for overspeeding, geofence exits and more.',
    description:
      'Receive instant alerts for over-speeding, ignition ON/OFF, geofence exits, battery removal, and unauthorized vehicle movement via SMS or app. Customize speed thresholds, notification channels, and alert preferences to fit your operations and ensure vehicle safety.',
    image: '/images/servicesDet/pic4.png',
    keywords: ['Alerts', 'Overspeed', 'Geofence', 'Notifications'],
  },
  {
    slug: 'after-sales-support',
    title: 'After-Sales & Technical Support',
    short: 'Ongoing support, maintenance, and warranty services.',
    description:
      'We provide ongoing support, maintenance, and warranty services to keep your tracking system running perfectly. Our team is available to help with troubleshooting and updates.',
    image: '/images/servicesDet/pic6.jpg',
    keywords: ['Support', 'Warranty', 'Maintenance'],
  },
];

// Simple deterministic obfuscation function: djb2 hash -> positive int -> base36
function obfuscate(str: string) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    // hash * 33 + c
    hash = (hash * 33) ^ str.charCodeAt(i);
  }
  // ensure positive and convert to base36, take a slice for shorter strings
  return (Math.abs(hash) >>> 0).toString(36).slice(0, 10);
}

export const services = raw.map((s) => ({ ...s, id: obfuscate(s.slug) }));

export const servicesMap = Object.fromEntries(services.map((s) => [s.id, s]));

export default services;
