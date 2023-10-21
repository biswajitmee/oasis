import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Dishes from './Dishes';
import Order from './Order';
import Offer from './Offer';
 
import { SmoothScrollProvider } from './SmoothScrollContext';

import Header from './Header';
import { LoaderProvider, useLoader } from './LoaderContext';
import gsap from 'gsap'; // Import gsap library

const App = () => {
  // const Loader = () => {
  //   const { isLoading, setIsLoading } = useLoader();

  //   useEffect(() => {
  //     if (isLoading) {
  //       const loaderBox = document.querySelector('.loader_box');
  //       const loaderTimeline = gsap.timeline({
  //         onComplete: () => setIsLoading(false),
  //       });

  //       loaderTimeline.from(loaderBox, {scale:1000, opacity: 1, duration: 0.5 , position:"absolute", height:"100vh",   right:0, top:0, zIndex:9999,
  //       width:"100vh", });
  //       loaderTimeline.from(loaderBox, {
  //         opacity: 0,         
  //         duration: 1.5,
  //         ease: 'power2.inOut',
  //         height:"1px",
  //         width:"1px",
  //         right:0, top:0,
  //         position:"absolute",
  //         transformOrigin:"0.5 0.5",
  //       });
        
  //     }
  //   }, [isLoading, setIsLoading]);

  //   return (
  //     <div className={`loader ${isLoading ? 'visible' : 'hidden'}`}>
  //       <div className="loader_box"></div>
  //     </div>
  //   );
  // };

  return (
    <Router>
      {/* <LoaderProvider>
        <Loader /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/order" element={<Order />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
      {/* </LoaderProvider> */}
    </Router>
  );
};

export default App;
