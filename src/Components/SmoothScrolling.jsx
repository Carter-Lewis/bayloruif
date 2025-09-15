import React from 'react'
import ReactLenis from 'lenis/react'

const SmoothScrolling = ({ children }) => {
      const lenisOptions = {
        lerp: 0.1, // Adjust for desired smoothness (lower is smoother)
        duration: 2.0, // Adjust for scroll animation duration
        smoothTouch: true, // Enable smooth scroll for touch devices
        smooth: true,
      };

      return (
        <ReactLenis root options={lenisOptions}>
          {children}
        </ReactLenis>
      );
    }

export default SmoothScrolling