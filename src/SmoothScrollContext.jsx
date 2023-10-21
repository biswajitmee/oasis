 
import React, { createContext, useContext, useLayoutEffect, useRef } from 'react';

import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin( ScrollSmoother);

const SmoothScrollContext = createContext();

export const useSmoothScroll = () => {
  return useContext(SmoothScrollContext);
};

export const SmoothScrollProvider = ({ children }) => {
  const smootherRef = useRef();

  useLayoutEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
    ScrollTrigger.create({
      trigger: '.box-c',
      pin: true,
      start: 'center center',
      end: '+=300',
      markers: true,
    });
    return () => {
      smootherRef.current.destroy();
    };
  }, []);

  const smoothScrollTo = (target, options) => {
    smootherRef.current.to(target, options);
  };

  const contextValue = {
    smoothScrollTo,
  };

  return (
    <SmoothScrollContext.Provider value={contextValue}>
      {children}
    </SmoothScrollContext.Provider>
  );
};
