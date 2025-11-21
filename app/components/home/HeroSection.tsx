import Image from 'next/image';
import TypingText from './TypingText';

const HeroSection = () => {
  return (
    <div className="relative bg-black min-h-screen">
      <div className="absolute inset-0 z-0 opacity-30 overflow-hidden">
        <video
          src="/images/heroVid1.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
      </div>
      <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <TypingText text={"Track Your Vehicles Anytime, Anywhere"} />
          </h1>
          <p className="max-w-2xl mt-6 text-xl text-gray-300">
            Welcome to Apple Tracker — your trusted provider of GPS tracking solutions for every type of vehicle. Stay connected and in control with our reliable tracking system.
          </p>
          <div className="flex gap-4 mt-10">
            <a href="/about" className="px-8 py-3 text-lg font-semibold text-black transition bg-white rounded-full hover:bg-gray-200">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;