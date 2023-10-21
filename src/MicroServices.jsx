 
import React, {  useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function MicroServices() {

    useEffect(() => { 


    let divs = gsap.utils.toArray(".microService");
    
    gsap.to(divs, {
      xPercent: -200 * (divs.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".scrollContainer",
        start: 'top 50%',     // This triggers when the middle of the viewport reaches the middle of the trigger element
        pin: true,
        scrub: 1,
        // snap: 1 / (divs.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=500",
      }
    });
 
}, []);



  return (
    <div>
<div class="scrollContainer"> 
        <div className='bridgeScroll'>
          <div class="flex flex-row ">
  <div className='microService'><img src='./offer-img-1.svg' ></img></div>
  <div className='microService'><img src='./offer-img-2.svg' ></img></div>
  <div className='microService'><img src='./offer-img-1.svg' ></img></div>
  <div className='microService'><img src='./offer-img-2.svg' ></img></div>
  <div className='microService'><img src='./offer-img-1.svg' ></img></div>
  <div className='microService'><img src='./offer-img-2.svg' ></img></div>
 
</div>
</div>
</div>
    </div>
  )
}
