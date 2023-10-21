import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { ScrollTrigger } from  "gsap/dist/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import gsap from 'gsap';
 
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,ScrollSmoother);


export default function Dishes() {
  
 
  const main = useRef();
    const smoother = useRef();



  useEffect(() => {
    const tl = gsap.timeline();
    tl.from('.backgrond-foodDish', { y: 450, opacity: 1 });
    tl.to('.backgrond-foodDish', { duration: 1.5, y:100, opacity: 1 });

    // tl.play();
    // return () => {
    //   tl.revert();
    // };
  }, []);



  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        smoother.current = ScrollSmoother.create({
            smooth: 3,
            effects: false,
            
        });
    }, main);
    return () => ctx.revert();


    
}, []);




  return (
    <>
     
<div id="smooth-wrapper" ref={main}>
                <div id="smooth-content">
      <div className="backgrond-foodDish">
        <p className='tittleTextlg pt-10 pb-10'>Our Dishes</p>
        <div className="topNavigation">
          <div className="grid grid-cols-4 md:grid-cols-4 gap-2">
            <div><img src='breakfast.svg'></img></div>
            <div><img src='lanch.svg'></img></div>
            <div><img src='snaks.svg'></img></div>
            <div><img src='dinner.svg'></img></div>
          </div>
        </div>

        <div class="flex">
          <div class=" h-14">
            <div className="leftNav">
              <ul>
                <li>
                  <div class="flex place-items-center">
                    <div><img src='starter.svg'></img></div>
                    <div>Starter</div>
                  </div>
                </li>
                <li>
                  <div class="flex place-items-center">
                    <div><img src='grilled-sarter.svg'></img></div>
                    <div>Grilled Starter</div>
                  </div>
                </li>
                <li>
                  <div class="flex place-items-center">
                    <div><img src='thali.svg'></img></div>
                    <div>Thali</div>
                  </div>
                </li>
                <li>
                  <div class="flex place-items-center">
                    <div><img src='currydish.svg'></img></div>
                    <div>Curry Dishes</div>
                  </div>
                </li>

                <li>
                  <div class="flex place-items-center">
                    <div><img src='pizza.svg'></img></div>
                    <div>Pizza</div>
                  </div>
                </li>
                <li>
                  <div class="flex place-items-center">
                    <div><img src='grilled-sarter.svg'></img></div>
                    <div>Starter</div>
                  </div>
                </li>
                <li>
                  <div class="flex place-items-center">
                    <div><img src='starter.svg'></img></div>
                    <div>Starter</div>
                  </div>
                </li>
                <li>
                  <div class="flex place-items-center">
                    <div><img src='thali.svg'></img></div>
                    <div>Starter</div>
                  </div>
                </li>
                <li>
                  <div class="flex place-items-center">
                    <div><img src='currydish.svg'></img></div>
                    <div>Starter</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
         
         
          <div class="rightItems">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">    
              <div className='item'>              
              <img src='tandoori-img.png'></img> 
                </div>
              <div className='item'>                
              <img src='tandoori-img.png'></img>                 
                </div>
              <div className='item'>
                <img src='tandoori-img.png'></img>
                </div>

              <div className='item'>
                <img src='tandoori-img.png'></img>
                </div>  

              <div className='item'>
                <img src='tandoori-img.png'></img>
                </div>
              <div className='item'>
                <img src='tandoori-img.png'></img>
                </div>
              <div className='item'>
                <img src='tandoori-img.png'></img>
                </div>
              <div className='item'>
                <img src='tandoori-img.png'></img>
                </div>  


            </div>
          </div>

          </div>
      </div>


        </div>
      </div>
    </>
  );
}


