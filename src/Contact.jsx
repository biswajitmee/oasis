import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import gsap from 'gsap';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ScrollSmoother);

  export default function Contact() {
    const main = useRef();
    const smoother = useRef();
    const  nubershow = useRef();
    
 
    
  useEffect(() => {

    
    const phoneLoad = gsap.timeline();    
    const phoneNumber = gsap.timeline();    
    phoneNumber.set('.phNumber', { opacity: 0 });    
    phoneNumber.fromTo('.phNumber', { opacity: 0, scale: 10 }, { opacity: 1, duration: 0.5, scale: 0.8, stagger: 0.1 });
    phoneLoad.add(phoneNumber, 0);
  
     
    ScrollTrigger.create({
      trigger: nubershow.current,
      start: 'top 40%',
      end:"400px",       
      animation: phoneLoad,  
      toggleActions: 'play reverse resume reverse',
    });



    const pageLoad = gsap.timeline(); 
    const load1 = gsap.timeline();
    const load2 = gsap.timeline();
    const load3 = gsap.timeline();
    const load4 = gsap.timeline();
    const load5 = gsap.timeline();
    const load11 = gsap.timeline();
    const load22 = gsap.timeline();
    const load33 = gsap.timeline();
    const load44 = gsap.timeline();
    const load55 = gsap.timeline();
 
        
    load1.fromTo('.load1', { textAlign:"center", position: "absolute", height:"0", width:"20vw", bottom:0, left:0, zIndex:5, backgroundColor:"#D2C10A", borderRadius:"15px", ease: "bounce.out",  alignItems:"baseline",  },
     { duration: 0.5, position: "absolute", width:"20vw",  height:"100vh",  top:0, ease: "elastic.out(1,0.3)", alignItems:"baseline",  });
     load11.fromTo('.load1', {bottom:0, textAlign:"center", height:"100vh",  alignItems:"baseline",  },
     { textAlign:"center", duration: 1, position: "absolute", width:"20vw",height:"0",bottom:0,  top:"-100vh",  alignItems:"baseline",  });

     load2.fromTo('.load2', { position: "absolute",textAlign:"center", height:"0", width:"20vw", bottom:0, left:"20vw",zIndex:9999, backgroundColor:"#D0C116",  borderRadius:"15px", ease: "bounce.out", },
     { duration: 0.6, position: "absolute", textAlign:"center", height:"100vh",  top:"-500px",  top:0, ease: "elastic.out(1,0.3)", ease: "power1.out", });
     load22.fromTo('.load2', {bottom:0,textAlign:"center", height:"100vh",left:"20vw",  position: "absolute",  },
     { duration: 1, position: "absolute",textAlign:"center", width:"20vw",height:"0",  top:"-100vh", bottom:0, left:"20vw",ease: "power1.out", });

     load3.fromTo('.load3', { position: "absolute",textAlign:"center", height:"0", width:"20vw", bottom:0, left:"40vw", zIndex:9999, backgroundColor:"#CBBB0C",  borderRadius:"15px", ease: "bounce.out",},
     { duration: 0.7, position: "absolute", textAlign:"center", height:"100vh",  top:"-500px",  top:0, ease: "elastic.out(1,0.3)",  });
     load33.fromTo('.load3', { position: "absolute", textAlign:"center", height:"100vh", width:"20vw", bottom:0, left:"40vw", zIndex:9999,    borderRadius:"15px",},
     { duration: 1, position: "absolute", height:"0", textAlign:"center", top:"-100vh",   bottom:0, left:"40vw",ease: "elastic.out(1,0.3)", ease: "power1.out", });

     load4.fromTo('.load4', { position: "absolute", textAlign:"center", height:"0", width:"20vw", bottom:0, left:"60vw", zIndex:9999, backgroundColor:"#C5B506",  borderRadius:"15px",ease: "bounce.out",},
     { duration: 0.8, position: "absolute",textAlign:"center",  height:"100vh",   top:0, ease: "elastic.out(1,0.3)", });
     load44.fromTo('.load4', { position: "absolute",textAlign:"center", height:"100vh", width:"20vw", bottom:0, left:"60vw", zIndex:9999,    borderRadius:"15px",},
     { duration: 1, position: "absolute", height:"0",textAlign:"center", top:"-100vh", bottom:0, left:"60vw", ease: "elastic.out(1,0.3)", ease: "power1.out",});

     load5.fromTo('.load5', { position: "absolute", height:"0", width:"20vw",textAlign:"center", bottom:0, left:"80vw", zIndex:999, backgroundColor:"#AD9F05",  borderRadius:"15px", ease: "bounce.out",},
     { duration: 0.9, position: "absolute", height:"100vh", textAlign:"center",  top:0,  left:"80vw", ease: "elastic.out(1,0.3)", });
     load55.fromTo('.load5', { position: "absolute", height:"100vh",textAlign:"center", width:"20vw", bottom:0, left:"80vw", zIndex:999,    borderRadius:"15px",},
     { duration: 1, position: "absolute", height:"0",textAlign:"center",top:"-100vh",left:"80vw", ease: "power1.out",});
  
     const movingContainer = gsap.timeline();
     movingContainer.from('.backgrond-foodDish', { y: 300, opacity: 0 });
     movingContainer.to('.backgrond-foodDish', { delay:1, duration: 1.5, y: 100, opacity: 1 });

    pageLoad.add(load1,0.1);
    pageLoad.add(load2,0.2);
    pageLoad.add(load3,0.3);
    pageLoad.add(load4,0.4);
    pageLoad.add(load5,0.5);

    pageLoad.add(load11,1.5);
    pageLoad.add(load22,1.6);
    pageLoad.add(load33,1.7);
    pageLoad.add(load44,1.8);
    pageLoad.add(load55,1.9);

    pageLoad.add(movingContainer,2);

    pageLoad.play();

    const tl = gsap.timeline();
    tl.from('.backgrond-foodDish', { y: 300, opacity: 0 });
    tl.to('.backgrond-foodDish', { delay:1, duration: 1.5, y: 100, opacity: 1 });

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
 
 <div className="makeLoader">
            <div className="load1"><img style={{ width:"100%" , marginTop:"250px" }} src='breakfast.svg'></img></div>
            <div className="load2"><img style={{ width:"100%",  marginTop:"250px" }}  src='lanch.svg'></img></div>
            <div className="load3"> <img style={{ width:"100%",  marginTop:"250px" }}  src='snaks.svg'></img></div>
            <div className="load4"><img style={{ width:"100%",  marginTop:"250px" }}  src='dinner.svg'></img></div>
            <div className="load5"><img style={{ width:"100%",  marginTop:"250px" }}  src='pizza.svg'></img></div>
            </div>

      <div id="smooth-wrapper" ref={main}>
        <div id="smooth-content">
 <div className="container mx-auto" >
              <div className="backgrond-foodContact" >                
                {/* <div className="round-bg-black">
                  <svg width="100%" height="545" viewBox="0 0 2455 888" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M79.4319 0C35.5629 0 0 35.5788 0 79.4674V201.441C0 208.722 2.4757 215.424 6.63087 220.752C181 673 849.5 898.827 1251.63 887.5C1732.5 873.955 2252.5 693 2449.41 218.057C2452.94 212.775 2455 206.424 2455 199.593V79.4674C2455 35.5788 2419.44 0 2375.57 0H79.4319Z" fill="black" />
                  </svg>
                </div> */}
 
                <div className="centerAnimation"  >
                  <div className='lets-eat'  >
                    <img src='contact.svg'></img>
                  </div>
                  <p className='lets-eat-small'>Telephone</p>     
                </div>
 
 




                <div className="contactinsideRound">
                      <div className="contactVg-1"  data-speed="0.5"><img src='veg-image-2.svg'></img></div>
                      <div className="contactVg-2"  data-speed="1.2"><img src='veg-image-8.svg'></img></div>
                      <div className="contactVg-3"  data-speed="0.5"><img src='veg-image-9.svg'></img></div>
                      <div className="contactVg-4"  data-speed="0.7" ><img src='veg-image-15.svg'></img></div>
                      <div className="contactVg-5"  data-speed="0.9"><img src='veg-image-5.svg'></img></div>
                    
                </div>
                <div className="fromContact">
              
                      
                    <div className="flex flex-row phoneNumber p-2" ref={nubershow}>
                 
                      <div className='phNumber'>0</div>
                      <div className='phNumber'>1</div>
                      <div className='phNumber'>9</div>
                      <div className='phNumber'>2</div>
                      <div  className='phNumber'>4</div>

                      <div  className='phNumber'>4</div>
                      <div  className='phNumber'>2</div>
                      <div  className='phNumber'>2</div>

                      <div  className='phNumber'>2</div>
                      <div  className='phNumber'>0</div>
                      <div  className='phNumber'>2</div>
                      
                      </div>

                  
                        <div className="flex flex-col formhere p-2">
                          <div>                            
                          <label for="name" >Name</label>
                          <input type="text" id="name" name="name" class="w-full bg-white rounded p-4 " />
                             </div>
                             <div>                            
                          <label for="email">Email</label>
                          <input type="text" id="name" name="name" class="w-full bg-white rounded p-4 " />
                             </div>
                             <div>                            
                          <label for="message">Message</label>
                          <textarea type="text" id="name" name="name" class="w-full bg-white rounded p-4   "> </textarea>
                             </div>  


                             <div> <button class="text-white text-lg w-full">Submit</button></div>                     
                        </div>   
                      </div>
                   </div>
                   </div>


                   <Footer />
                   </div>
              </div>
 
          
       </>
    )
  }
  
  
  
  