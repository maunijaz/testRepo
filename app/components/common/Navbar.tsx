"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn } from 'lucide-react';

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
  const [scrolled, setScrolled] = useState(false);
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
    // Handle scroll event
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll(); // Check initial scroll position
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${
      scrolled 
        ? 'bg-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-brand-200 shadow-sm' 
        : 'bg-white border-brand-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-16 h-16 rounded-md overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="Apple Tracker Logo"
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </div>
              <div className="text-lg font-bold text-black">Apple Tracker</div>
            </Link>
          </div>
          {/* Center: Navigation (centered) */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav ref={navRef} className="flex items-center space-x-2 relative px-2">
              {/* Animated background indicator */}
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 rounded-xl bg-gradient-to-r from-brand-50 via-brand-100 to-brand-50 border border-brand-200 shadow-inner"
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
                style={{ height: '42px', zIndex: 0 }}
              />
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    ref={(el) => { itemRefs.current[index] = el; }}
                    className={`px-4 py-2 rounded-md text-sm font-medium tracking-wide relative z-10 transition-colors duration-200 ${
                      active ? 'text-brand-700' : 'text-slate-600 hover:text-brand-700'
                    }`}
                  >
                    {item.label}
                    {active && <span className="absolute left-1/2 -bottom-1 h-1 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-400 via-brand-600 to-brand-400" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: Login and Mobile button */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center">
              <Link target='_blank'
                href="https://play.google.com/store/apps/details?id=com.wetrackadnate.flutter" 
                className="flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-brand-600 to-brand-700 px-5 py-2.5 rounded-lg hover:from-brand-700 hover:to-brand-800 transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <LogIn className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                <span>Login</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((s) => !s)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-400 transition-colors"
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
            className="md:hidden bg-white/80 backdrop-blur border-t border-brand-200 overflow-hidden"
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
                        active ? 'text-brand-700 bg-brand-50' : 'text-slate-600 hover:text-brand-700 hover:bg-brand-50'
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
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-base font-medium text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 transition-all duration-200 shadow-md"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;