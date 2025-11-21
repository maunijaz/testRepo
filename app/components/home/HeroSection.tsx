import Image from 'next/image';
import TypingText from './TypingText';

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] sm:min-h-[90vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/images/heroVid1.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl w-full rounded-3xl border border-white/20 bg-white/5 backdrop-blur-md p-8 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,.35)] ring-1 ring-white/10">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
              <TypingText text={"Track Your Vehicles Anytime, Anywhere"} />
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg sm:text-xl text-white/85">
              Welcome to Apple Tracker — your trusted provider of GPS tracking solutions for every type of vehicle. Stay connected and in control with our reliable tracking system.
            </p>
            <div className="flex justify-center mt-10">
              <a
                href="/about"
                className="px-8 py-3 text-base sm:text-lg font-semibold rounded-full bg-white text-brand-700 shadow-lg shadow-brand-900/20 ring-1 ring-white/20 hover:bg-brand-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;