"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Our Services', href: '/our_services' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const normalize = (p: string) => {
    // remove query string or hash and trailing slash (except root)
    try {
      const [path] = p.split(/[?#]/);
      if (path === '/') return '/';
      return path.replace(/\/$/, '');
    } catch {
      return p;
    }
  };

  const isActive = (href: string) => {
    if (!pathname) return false;
    const np = normalize(pathname);
    const nh = normalize(href);
    if (nh === '/') {
      return np === '/';
    }
    // exact match or prefix followed by slash (so /our_services matches /our_services/123 but not /our_services-extra)
    return np === nh || np.startsWith(`${nh}/`);
  };

  useEffect(() => {
    // Update active index when pathname changes
    const index = navItems.findIndex(item => isActive(item.href));
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [pathname]);

  useEffect(() => {
    // Update indicator position based on active item
    const updateIndicator = () => {
      const activeItem = itemRefs.current[activeIndex];
      const navContainer = navRef.current;
      
      if (activeItem && navContainer) {
        const navRect = navContainer.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        
        setIndicatorStyle({
          left: itemRect.left - navRect.left,
          width: itemRect.width,
        });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeIndex]);

  return (
    <header className="bg-white border-b border-gray-300 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.jpeg"
                  alt="Apple Tracker Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-lg font-bold text-black">Apple Tracker</div>
            </Link>
          </div>
          {/* Center: Navigation (centered) */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav ref={navRef} className="flex items-center space-x-4 relative">
              {/* Animated background indicator */}
              <motion.div
                className="absolute bg-gray-100 rounded-md"
                initial={false}
                animate={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                style={{ height: '40px', zIndex: 0 }}
              />
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    ref={(el) => { itemRefs.current[index] = el; }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 relative z-10 ${
                      active ? 'text-black' : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: Phone and Mobile button */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center">
              <a 
                href="tel:+923168297204" 
                className="flex items-center gap-2 text-sm font-medium text-black bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors group"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, -15, 15, -15, 15, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                  className="inline-flex"
                >
                  <FaPhoneAlt className="w-4 h-4 text-black" />
                </motion.div>
                <span>+923168297204</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((s) => !s)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {open ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel with animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-300 overflow-hidden"
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
            >
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                        active ? 'text-black bg-gray-100' : 'text-gray-700 hover:text-black hover:bg-gray-100'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
              >
                <a
                  href="tel:+923168297204"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-black bg-gray-100 transition-colors"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, -15, 15, -15, 15, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                    className="inline-flex"
                  >
                    <FaPhoneAlt className="w-4 h-4 text-black" />
                  </motion.div>
                  <span>+923168297204</span>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;