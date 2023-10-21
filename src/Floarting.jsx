import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FloatingElement = () => {
  const floatingElementRef = useRef();

  useEffect(() => {
    const floatingElement = floatingElementRef.current;
  
    // GSAP timeline for the floating animation
    const floatingTimeline = gsap.timeline({ repeat: -1, yoyo: true });
  
    // Animation configuration
    const animationConfig = {
      duration: 2,
      ease: 'power1.inOut',
    };
  
    // Floating animation
    floatingTimeline
      .to(floatingElement, { y: 20, ...animationConfig })
      .to(floatingElement, { y: -20, ...animationConfig })
      .to(floatingElement, { y: 0, ...animationConfig });
  
    // CSS rotation animation
    gsap.to(floatingElement, {
      rotationY: 360,  // Rotate around the Y-axis for a 3D effect
      transformOrigin: 'center center',
      repeat: -1,
      duration: 5,
      ease: 'linear',
    });
  
    // Cleanup function
    return () => {
      // Stop GSAP animations
      floatingTimeline.kill();
      gsap.killTweensOf(floatingElement);
  
      // Remove the element from the DOM
      if (floatingElement && floatingElement.parentElement) {
        floatingElement.parentElement.removeChild(floatingElement);
      }
    };
  }, []);
  return (
    <div
      ref={floatingElementRef}
      className="floating-element"
    >
      {/* Your content goes here */}
    </div>
  );
};

export default FloatingElement;
