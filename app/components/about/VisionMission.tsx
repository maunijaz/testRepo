import Image from 'next/image';

const VisionMission = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-brand-50/50">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
      
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Vision Section */}
          <div className="p-8 bg-white/90 backdrop-blur rounded-2xl border border-brand-100 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
            <div className="w-20 h-1 mt-4 rounded-full bg-brand-500" />
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              To revolutionize vehicle tracking and fleet management through innovative technology,
              making it accessible and indispensable for every vehicle owner worldwide.
            </p>
          </div>

          {/* Mission Section */}
          <div className="p-8 bg-white/90 backdrop-blur rounded-2xl border border-brand-100 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            <div className="w-20 h-1 mt-4 rounded-full bg-brand-500" />
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              To provide cutting-edge GPS tracking solutions that enhance vehicle security,
              optimize fleet operations, and deliver peace of mind through reliable,
              user-friendly technology and exceptional customer service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;