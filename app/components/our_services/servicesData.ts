const raw = [
  {
    slug: 'vehicle-tracking',
    title: 'Vehicle Tracking System',
    short: 'Real-time GPS tracking for all types of vehicles with comprehensive monitoring.',
    description:
      'Complete vehicle tracking system with real-time location updates, custom reports, engine kill facility through mobile app, seat sensor, customized geo-fences, over speed alerts, weight sensor, fuel sensor, and drivers & stop report. Track any vehicle anytime, anywhere.',
    image: '/images/servicesDet/pic1.jpg',
    keywords: ['Vehicle', 'Tracking', 'GPS'],
  },
  {
    slug: 'access-control',
    title: 'Access Control',
    short: 'Secure access management for vehicles and facilities.',
    description:
      'Advanced access control system with authentication, authorization, and monitoring capabilities. Manage who can access vehicles and facilities with comprehensive security features.',
    image: '/images/servicesDet/pic2.jpg',
    keywords: ['Access', 'Control', 'Security'],
  },
  {
    slug: 'fuel-sensor',
    title: 'Fuel Sensor',
    short: 'Monitor fuel levels and consumption patterns.',
    description:
      'Accurate fuel monitoring system to track fuel levels, consumption patterns, and detect fuel theft. Generate detailed reports for fuel management and cost optimization.',
    image: '/images/servicesDet/pic3.jpg',
    keywords: ['Fuel', 'Sensor', 'Monitoring'],
  },
  {
    slug: 'school-bus-monitoring',
    title: 'School Bus Monitoring',
    short: 'Specialized tracking solution for school transportation safety.',
    description:
      'Dedicated school bus tracking system with parent notifications, route monitoring, student safety features, and real-time updates. Ensure the safety of students during their commute.',
    image: '/images/servicesDet/pic4.png',
    keywords: ['School', 'Bus', 'Safety'],
  },
  {
    slug: 'smart-alerts',
    title: 'School Attendance',
    short: 'Automated attendance tracking for schools.',
    description:
      'Automated school attendance system integrated with GPS tracking to monitor student presence on buses and at school. Generate attendance reports and notify parents.',
    image: '/images/servicesDet/pic5.jpg',
    keywords: ['School', 'Attendance', 'Tracking'],
  },
  {
    slug: 'fleet-management',
    title: 'Transmission Service',
    short: 'Data transmission and communication services.',
    description:
      'Reliable data transmission services for GPS tracking devices with multiple connectivity options including GSM, 3G, 4G, and satellite communication.',
    image: '/images/servicesDet/pic6.jpg',
    keywords: ['Transmission', 'Communication', 'Data'],
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
