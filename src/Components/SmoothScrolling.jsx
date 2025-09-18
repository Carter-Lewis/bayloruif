import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScrolling = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.1, // Adjust for desired smoothness (lower is smoother)
      duration: 2.0, // Adjust for scroll animation duration
      smoothTouch: true, // Enable smooth scroll for touch devices
      smooth: true,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrolling;