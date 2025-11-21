"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  speed?: number; // multiplier for parallax
  max?: number; // max translate pixels
  className?: string;
};

const ParallaxOnView: React.FC<Props> = ({ children, speed = 0.15, max = 200, className = "" }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const inViewRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        inViewRef.current = entry.isIntersecting;
        // when it becomes intersecting, trigger one frame to update position
        if (entry.isIntersecting) triggerUpdate();
        else {
          // reset transform when out of view
          el.style.transform = "translate3d(0,0,0)";
        }
      });
    };

    const io = new IntersectionObserver(onIntersection, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    io.observe(el);

    const update = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // distance from center of viewport
      const elCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const dist = viewportCenter - elCenter; // positive when element is above center
      const translate = Math.max(Math.min(dist * speed, max), -max);
      el.style.transform = `translate3d(0, ${translate}px, 0)`;
      rafRef.current = null;
    };

    const onScroll = () => {
      if (!inViewRef.current) return; // only run when in view
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    const triggerUpdate = () => {
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", triggerUpdate);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", triggerUpdate);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed, max]);

  return (
    <div ref={ref} className={`will-change-transform transition-transform duration-200 ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxOnView;
