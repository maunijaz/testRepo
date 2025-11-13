"use client";

import React, { useEffect, useRef } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactHero = () => {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;

    let latestScrollY = 0;

    const onScroll = () => {
      latestScrollY = window.scrollY || window.pageYOffset;
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          // move background slower than scroll for parallax
          const translate = Math.min(latestScrollY * 0.2, 200);
          el.style.transform = `translate3d(0, ${translate}px, 0)`;
          rafRef.current = null;
        });
      }
    };

    // initialize position
    el.style.transform = 'translate3d(0, 0, 0)';
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-gray-100 will-change-transform"
        style={{ transition: 'transform 0.15s linear' }}
      />
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 text-black rounded-lg" style={{backgroundColor:'#C0C0C0'}}>
              <FaPhoneAlt className="w-8 h-8" />
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Want to track your bike, car, or heavy vehicle?
            We're here to help you choose the perfect GPS tracking solution for your needs.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Track anything — from a single bike to a fleet of trucks.
            Stay connected. Stay secure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;