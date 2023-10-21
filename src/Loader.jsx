// Loader.js
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useLoader } from './LoaderContext';

const Loader = () => {
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    if (isLoading) {
      const loaderBox = document.querySelector('.loader_box');
      const loaderTimeline = gsap.timeline({
        onComplete: () => setIsLoading(false),
      });

      loaderTimeline.from(loaderBox, {
        opacity: 0,
        duration: 0.5,
      });

      loaderTimeline.from(loaderBox, {
        opacity: 1,
        position: 'absolute',
        scale: 10000,
        duration: 2,
        ease: 'power2.inOut',
      });

      loaderTimeline.from(loaderBox, { opacity: 0, duration: 0.5 });
      loaderTimeline.set(loaderBox, {
        position: 'absolute',
        scale: 1000,
        ease: 'power2.inOut',
        opacity: 0,
      });
    }
  }, [isLoading, setIsLoading]);

  return (
    <div className={`loader ${isLoading ? 'visible' : 'hidden'}`}>
      <div className="loader_box"></div>
    </div>
  );
};

export default Loader;
