
import gsap from 'gsap';
import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollSmoother } from 'gsap/ScrollSmoother';

import Footer from './Footer';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ScrollSmoother);

export default function Home() {
  const bookRef = useRef(null);
  const letsEatRef = useRef(null);
  const main = useRef();
  const smoother = useRef();





  useEffect(() => {



    gsap.to(".dish-item", {
      y: 100,
      stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating
    });

    const dishItems = document.querySelectorAll('.dish-item');
    dishItems.forEach((dishItem) => {
      ScrollTrigger.create({
        trigger: dishItem,
        start: 'center bottom', // Adjust as needed

        onEnter: () => {
          // Play the animation when the element is in the viewport
          gsap.to(dishItem, { y: 0, ease: 'power2.out' });
        },
        onLeaveBack: () => {
          // Reverse the animation when the element leaves the viewport
          gsap.to(dishItem, { y: 100, ease: 'power2.in' });
        },
      });
      return () => ctx.revert();
    });

    const sliderAnimationTLL = () => {
      const totalSliderTL = gsap.timeline({ yoyo: true, repeat: -1 });

      const rotateinsideRound = gsap.timeline();

      const slideBoxTotate = gsap.timeline();

      const slider1 = gsap.timeline();
      const slider2 = gsap.timeline();
      const slider3 = gsap.timeline();
      const slider4 = gsap.timeline();

      const tlVeg1 = gsap.timeline();
      const tlVeg2 = gsap.timeline();
      const tlVeg3 = gsap.timeline();
      const tlVeg4 = gsap.timeline();
      const tlVeg5 = gsap.timeline();



      const tlVeg111 = gsap.timeline();
      const tlVeg222 = gsap.timeline();
      const tlVeg333 = gsap.timeline();
      const tlVeg444 = gsap.timeline();
      const tlVeg555 = gsap.timeline();



      rotateinsideRound.fromTo('.insideRound', { rotate: 0, },
        { duration: 60, opacity: 1, rotate: 360, repeat: -1, });

      slideBoxTotate.fromTo('.slideBox', { rotate: 0, position: "absolute", },
        { duration: 60, opacity: 1, rotate: -360, repeat: -1, });



        tlVeg1.fromTo('.veg1', { rotate: 0, }, { duration: 60, rotate: -360, repeat: -1, });
      tlVeg111.fromTo('.veg1', { top: "45%", right: "10%", position: "absolute", scale: "0.7", },
        { duration: 1, top: "-4%", right: "10%", position: "absolute", scale: "0.7", });

      tlVeg2.fromTo('.veg2', { rotate: 0, }, { duration: 60, rotate: -360, repeat: -1, });
      tlVeg222.fromTo('.veg2', { top: "53%", right: "65%", position: "absolute", scale: "0.5", },
        { top: "49%", right: "-12%", position: "absolute", scale: "0.7", });


      tlVeg3.fromTo('.veg3', { rotate: 0, }, { duration: 60, rotate: -360, repeat: -1, });
      tlVeg333.fromTo('.veg3', { top: "45%", left: "45%", position: "absolute", scale: "0.5", },
        { top: "23%", left: "-5%", position: "absolute", scale: "0.5", });


      tlVeg4.fromTo('.veg4', { rotate: 0, }, { duration: 60, rotate: -360, repeat: -1, });
      tlVeg444.fromTo('.veg4', { top: "50%", left: "55%", position: "absolute", scale: "0.5", },
        { top: "65%", left: "-5%", position: "absolute", scale: "0.5", });

      tlVeg5.fromTo('.veg5', { rotate: 0, }, { duration: 60, rotate: -360, repeat: -1, });
      tlVeg555.fromTo('.veg5', { top: "50%", left: "55%", position: "absolute", scale: "0.5", },
        { top: "84%", left: "36%", position: "absolute", scale: "0.5", });




        const popParent = gsap.timeline({ repeat:-1});

        const pop1 = gsap.timeline();
        const pop2 = gsap.timeline();
        const pop3 = gsap.timeline();
        const pop4 = gsap.timeline();
        const pop5 = gsap.timeline();

       
 


        pop1.fromTo('.pop1', { top: "-15%", left: "-60%", position: "absolute", scale: "0", duration:0.5, },
          { duration: 1, top: "-15%", left: "-60%", position: "absolute", scale: "0.7", duration:0.5, });        

          pop2.fromTo('.pop2', { top: "25%", right: "-55%", position: "absolute", scale: "0", duration:0.5,},
          { top: "25%", right: "-55%", position: "absolute", scale: "0.7",  scale: "0.8", duration:0.5,});         

          pop3.fromTo('.pop3', { top: "35%", right: "-75%", position: "absolute", scale: "0",  duration:0.5,},
          { top: "35%", right: "-75%", position: "absolute",scale: "0.7",  duration:0.5, });         

          pop4.fromTo('.pop4', { top: "50%", right: "-55%", position: "absolute", scale: "0", duration:0.5,},
          { top: "50%", left: "-55%", position: "absolute", scale: "0.7", duration:0.5, });          
          
          pop5.fromTo('.pop5', { top: "20%", left: "-35%", position: "absolute", scale: "0", duration:0.5,},
          { top: "30%", left: "-35%", position: "absolute", scale: "0.7",  duration:0.5,});
    
          
          const pop111 = gsap.timeline();
        const pop222 = gsap.timeline();
        const pop333 = gsap.timeline();
        const pop444 = gsap.timeline();
        const pop555 = gsap.timeline();



        pop111.fromTo('.pop1', {  cale: "0.5", },
        { duration:0.5,  scale: "0", });        

        pop222.fromTo('.pop2', { scale: "0.5",},
        {  duration:0.5,  scale: "0",});         

        pop333.fromTo('.pop3', {   scale: "0.5", },
        {  duration:0.5, scale: "0",  });         

        pop444.fromTo('.pop4', { scale: "0.5",},
        {  duration:0.5, scale: "0", });          
        
        pop555.fromTo('.pop5', {   scale: "0.5",},
        {  duration:0.5, scale: "0", });
  



          popParent.add(pop1,0)
          popParent.add(pop2,2)
          popParent.add(pop3,3)
          popParent.add(pop4,4)
          popParent.add(pop5,5)
  
          popParent.add(pop111,2)
          popParent.add(pop222,4)
          popParent.add(pop333,6)
          popParent.add(pop444,8)
          popParent.add(pop555,10)
  


      const sliderRepeat = gsap.timeline({ yoyo: true, repeat: -1 });



      slider1.set('.sliderImg-1', { opacity: 0, });

      slider2.set('.sliderImg-2', { opacity: 0, });

      slider3.set('.sliderImg-3', { opacity: 0, });

      slider4.set('.sliderImg-4', { opacity: 0 },);



      slider1.fromTo('.sliderImg-1', { duration: 1, ease: 'power3.inOut', opacity: 1, zIndex: 2 },
        { duration: 1, ease: 'power3.inOut', opacity: 0, zIndex: 2 });

      slider2.fromTo('.sliderImg-2', { duration: 1, opacity: 0, zIndex: 3, },
        { duration: 1, ease: 'power3.inOut', opacity: 1, zIndex: 3, });

      slider3.fromTo('.sliderImg-3', { duration: 1, ease: 'power3.inOut', opacity: 0, zIndex: 4, },
        { duration: 1, ease: 'power3.inOut', opacity: 1, zIndex: 4, });

      slider4.fromTo('.sliderImg-4', { duration: 1, ease: 'power3.inOut', opacity: 0, zIndex: 5, },
        { duration: 1, ease: 'power3.inOut', opacity: 1, zIndex: 5, });


      sliderRepeat.add(slider1, 0);
      sliderRepeat.add(slider2, 1);
      sliderRepeat.add(slider3, 2);
      sliderRepeat.add(slider4, 3);





      totalSliderTL.add(sliderRepeat, 0);

      totalSliderTL.add(tlVeg111, 0);
      totalSliderTL.add(tlVeg222, 0);
      totalSliderTL.add(tlVeg333, 0);
      totalSliderTL.add(tlVeg444, 0);
      totalSliderTL.add(tlVeg555, 0);

      totalSliderTL.add(rotateinsideRound, 0);
      totalSliderTL.add(slideBoxTotate, 0);
      totalSliderTL.add(tlVeg1, 0);
      totalSliderTL.add(tlVeg2, 0);
      totalSliderTL.add(tlVeg3, 0);
      totalSliderTL.add(tlVeg4, 0);
      totalSliderTL.add(tlVeg5, 0);





      return totalSliderTL;



    };



    const rotateBackground = () => {
      const rotateinsideRound = gsap.timeline();



      const rotateDiv = gsap.timeline();
      const bacKrotateDiv = gsap.timeline();

      rotateDiv.fromTo('.insideRound', { rotate: 0, position: "absolute", },
        { duration: 1, rotate: 360, });
      // bacKrotateDiv.fromTo('.slideBox', { rotate:0, position:"absolute",  },
      // {  duration:1,   rotate:360,  });


      rotateinsideRound.add(rotateDiv, 0)
      rotateinsideRound.add(bacKrotateDiv, 0)

      return rotateinsideRound;


    }



    const sliderPlay = sliderAnimationTLL();

    sliderPlay.play();




    const rotateBackgroundPlay = rotateBackground();

    // Invoke the function to get the Timeline instance
    const LineRotateTimeline = sliderAnimationTLL();

    ScrollTrigger.create({
      trigger: letsEatRef.current,
      start: 'top top',
      scrub: true,
      animation: rotateBackgroundPlay,
      toggleActions: 'play pause resume reverse',
      onEnter: () => {
        // Start the motionPath animation when the trigger element enters the viewport
        gsap.to("#scotyBoy", {
          motionPath: {
            path: "#path",
            align: "#path",
            alignOrigin: [1, 1],
            autoRotate: true,
            start: 0.25,
            end: 0.65
          },
          transformOrigin: "50% 50%",
          duration: 5,
          ease: "power1.inOut",
        });
      },
    });

    return () => {
      LineRotateTimeline.revert();
    };





  }, []);


  useEffect(() => {

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



    load1.fromTo('.load1', { textAlign: "center", position: "absolute", height: "0", width: "20vw", bottom: 0, left: 0, zIndex: 5, backgroundColor: "#D2C10A", borderRadius: "15px", ease: "bounce.out", alignItems: "baseline", },
      { duration: 0.5, position: "absolute", width: "20vw", height: "100vh", top: 0, ease: "elastic.out(1,0.3)", alignItems: "baseline", });
    load11.fromTo('.load1', { bottom: 0, textAlign: "center", height: "100vh", alignItems: "baseline", },
      { textAlign: "center", duration: 1, position: "absolute", width: "20vw", height: "0", bottom: 0, top: "-100vh", alignItems: "baseline", });

    load2.fromTo('.load2', { position: "absolute", textAlign: "center", height: "0", width: "20vw", bottom: 0, left: "20vw", zIndex: 9999, backgroundColor: "#D0C116", borderRadius: "15px", ease: "bounce.out", },
      { duration: 0.6, position: "absolute", textAlign: "center", height: "100vh", top: "-500px", top: 0, ease: "elastic.out(1,0.3)", ease: "power1.out", });
    load22.fromTo('.load2', { bottom: 0, textAlign: "center", height: "100vh", left: "20vw", position: "absolute", },
      { duration: 1, position: "absolute", textAlign: "center", width: "20vw", height: "0", top: "-100vh", bottom: 0, left: "20vw", ease: "power1.out", });

    load3.fromTo('.load3', { position: "absolute", textAlign: "center", height: "0", width: "20vw", bottom: 0, left: "40vw", zIndex: 9999, backgroundColor: "#CBBB0C", borderRadius: "15px", ease: "bounce.out", },
      { duration: 0.7, position: "absolute", textAlign: "center", height: "100vh", top: "-500px", top: 0, ease: "elastic.out(1,0.3)", });
    load33.fromTo('.load3', { position: "absolute", textAlign: "center", height: "100vh", width: "20vw", bottom: 0, left: "40vw", zIndex: 9999, borderRadius: "15px", },
      { duration: 1, position: "absolute", height: "0", textAlign: "center", top: "-100vh", bottom: 0, left: "40vw", ease: "elastic.out(1,0.3)", ease: "power1.out", });

    load4.fromTo('.load4', { position: "absolute", textAlign: "center", height: "0", width: "20vw", bottom: 0, left: "60vw", zIndex: 9999, backgroundColor: "#C5B506", borderRadius: "15px", ease: "bounce.out", },
      { duration: 0.8, position: "absolute", textAlign: "center", height: "100vh", top: 0, ease: "elastic.out(1,0.3)", });
    load44.fromTo('.load4', { position: "absolute", textAlign: "center", height: "100vh", width: "20vw", bottom: 0, left: "60vw", zIndex: 9999, borderRadius: "15px", },
      { duration: 1, position: "absolute", height: "0", textAlign: "center", top: "-100vh", bottom: 0, left: "60vw", ease: "elastic.out(1,0.3)", ease: "power1.out", });



    load5.fromTo('.load5', { position: "absolute", height: "0", width: "20vw", textAlign: "center", bottom: 0, left: "80vw", zIndex: 999, backgroundColor: "#AD9F05", borderRadius: "15px", ease: "bounce.out", },
      { duration: 0.9, position: "absolute", height: "100vh", textAlign: "center", top: 0, left: "80vw", ease: "elastic.out(1,0.3)", });
    load55.fromTo('.load5', { position: "absolute", height: "100vh", textAlign: "center", width: "20vw", bottom: 0, left: "80vw", zIndex: 999, borderRadius: "15px", },
      { duration: 1, position: "absolute", height: "0", textAlign: "center", top: "-100vh", left: "80vw", ease: "power1.out", });



    const movingContainer = gsap.timeline();
    movingContainer.from('.backgrond-foodDish', { y: 300, opacity: 0 });
    movingContainer.to('.backgrond-foodDish', { delay: 1, duration: 1.5, y: 100, opacity: 1 });




    pageLoad.add(load1, 0.1);
    pageLoad.add(load2, 0.2);
    pageLoad.add(load3, 0.3);
    pageLoad.add(load4, 0.4);
    pageLoad.add(load5, 0.5);

    pageLoad.add(load11, 1.5);
    pageLoad.add(load22, 1.6);
    pageLoad.add(load33, 1.7);
    pageLoad.add(load44, 1.8);
    pageLoad.add(load55, 1.9);

    pageLoad.add(movingContainer, 2);

    pageLoad.play();

    const tl = gsap.timeline();
    tl.from('.backgrond-foodDish', { y: 300, opacity: 0 });
    tl.to('.backgrond-foodDish', { delay: 1, duration: 1.5, y: 100, opacity: 1 });

  }, []);






  useEffect(() => {
 
    const booktableTL = gsap.timeline();
    const plateRotate = gsap.timeline();


    // const leftMoveText = gsap.timeline();
    // const rightMoveText = gsap.timeline();

    plateRotate.fromTo('.plateImg', { rotate: 0, y:-2500, duration: 2, x:300 , scale:2},
      {  opacity: 1, rotate: 90,   y:-70 ,scale:1  });

      plateRotate.fromTo('.plateImg', {  x:300 , duration: 1.5,    },
      {    x:-50  , y:-70 , rotate: -5, });




    booktableTL.add(plateRotate,0)
  

    ScrollTrigger.create({
      trigger: letsEatRef.current,
      start: 'center center',
      scrub: true,
      animation: booktableTL,
      toggleActions: 'play pause resume reverse',
       
    });
 
 
     

    const dinnerPlan = gsap.timeline();

    const dinnerApear = gsap.timeline();

    dinnerPlan.set('.stagText', { opacity:0, });

    dinnerPlan.fromTo('.stagText', { opacity:0, duration:1,   y:100,  } , { opacity:1, duration:1, y:-30 , stagger: 0.1, } );


    dinnerApear.add(dinnerPlan,0)


    ScrollTrigger.create({
      trigger: bookRef.current,
      start: 'top 50%',  
      animation: dinnerApear,
      toggleActions: 'play pause resume reverse',
       
    });
   




}, []);







  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      smoother.current = ScrollSmoother.create({
        smooth: 6,
        effects: true,
      });
    }, main);




  }, []);




  return (
    <>


      <div className="makeLoader">
        <div className="load1"><img style={{ width: "100%", marginTop: "250px" }} src='breakfast.svg'></img></div>
        <div className="load2"><img style={{ width: "100%", marginTop: "250px" }} src='lanch.svg'></img></div>
        <div className="load3"> <img style={{ width: "100%", marginTop: "250px" }} src='snaks.svg'></img></div>
        <div className="load4"><img style={{ width: "100%", marginTop: "250px" }} src='dinner.svg'></img></div>
        <div className="load5"><img style={{ width: "100%", marginTop: "250px" }} src='pizza.svg'></img></div>
      </div>

      <div className="mainMovie">

        <div id="smooth-wrapper" ref={main}>
          <div id="smooth-content">



            <div className="container mx-auto" >
              <div className="backgrond-food">

                <div className="lineY"></div>
                <div className="lineY"></div>
                <div className="lineY"></div>
                <div className="lineY"></div>
                <div className="lineY"></div>
                <div className="lineY"></div>
                <div className="lineY"></div>
                <div className="lineY"></div>
                <div className="lineY"></div>
                <div className="lineY"></div>
                <div className="round-bg-black">
                  <svg width="100%" height="545" viewBox="0 0 2455 888" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M79.4319 0C35.5629 0 0 35.5788 0 79.4674V201.441C0 208.722 2.4757 215.424 6.63087 220.752C181 673 849.5 898.827 1251.63 887.5C1732.5 873.955 2252.5 693 2449.41 218.057C2452.94 212.775 2455 206.424 2455 199.593V79.4674C2455 35.5788 2419.44 0 2375.57 0H79.4319Z" fill="black" />
                  </svg>
                </div>
                <div className="centerAnimation" ref={letsEatRef}>
                  <div className='lets-eat'  >
                    <img src='Lets-Eat.svg'></img>
                  </div>
                  <p className='lets-eat-small'>Authentic, fresh Indian Food</p>
                  <div className="mainRound">

                  <div className="pop1"  ><img src='pop-1.svg'></img></div>
                      <div className="pop2"   ><img src='pop-2.svg'></img></div>
                      <div className="pop3"  ><img src='pop-3.svg'></img></div>
                      <div className="pop4"  ><img src='pop-4.svg'></img></div>
                      <div className="pop5"   ><img src='pop-5.svg'></img></div>
                    
                    <div className="insideRound">
                      <div className="veg1"  ><img src='veg-image-2.svg'></img></div>
                      <div className="veg2"   ><img src='veg-image-8.svg'></img></div>
                      <div className="veg3"  ><img src='veg-image-9.svg'></img></div>
                      <div className="veg4"  ><img src='veg-image-15.svg'></img></div>
                      <div className="veg5"   ><img src='veg-image-5.svg'></img></div>
 
              
 
                      <div className="slideBox" >
                        <div className="sliderImg-1"> <img style={{ width: "100%" }} src='dish-1.svg'></img></div>
                        <div className="sliderImg-2"><img style={{ width: "100%" }} src='dish-2.svg'></img></div>
                        <div className="sliderImg-3"><img style={{ width: "100%" }} src='dish-3.svg'></img></div>
                        <div className="sliderImg-4"><img style={{ width: "100%" }} src='dish-4.svg'></img></div>
                      </div>
                    </div>
                  </div>



                  <div className="deleveryAnimation"></div>

             

                  <div className="deleveryAvilable">
                    <p className='tittleText'> Delevery Avilable</p>
                    <div className=" OrderOnlineBtn1">
                      <div className=" OrderOnlineBtn2">
                        <div className="tittleTextSmall OrderOnlineBtn3">
                          Order Online</div>
                      </div>
                    </div>
                  </div>

                  <div className="scotyBoy" id='scotyBoy'>
                    <img src='scotyBoy.svg'></img>
                  </div>

                  <div className="pathAnimation">
                    {/* <svg width="100%" height="92" viewBox="0 0 1813 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path id='path' d="M936.357 41.4873C661.265 86.7042 198.071 31.797 4 12.4164V34.4701C132.929 52.5141 649.005 115.414 943.143 64.5434C1345.52 -5.04697 1698.17 29.792 1809 47.5019V27.4531C1587.79 -9.63752 1268.04 -13.0321 936.357 41.4873Z" fill="#000" />
                </g>
              </svg> */}

                    <svg width="100%" height="318" viewBox="0 0 2692 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g  >
                        <path id='path' d="M1390.4 180.305C1013.07 352.034 292.58 165.892 4 137.065V169.868C195.714 196.706 1018.72 441.107 1400.49 214.599C1937.07 -103.769 2523.19 162.91 2688 189.251V159.431C2359.06 104.262 2186.14 -181.857 1390.4 180.305Z" fill="#000" />
                      </g>

                    </svg>


                  </div>
                </div>
              </div>
            </div>



            <div className="container mx-auto">                
              <div className="bookingSection" ref={bookRef}>
              <div className="plate"> 
            <img src='plate.svg' className='plateImg'></img>
            </div>     



              <div className="middleBox">     
                       <div className="veg1"  data-speed="0.3" ><img src='veg-image-1.svg'></img></div>
                      <div className="veg2"  data-speed="0.2" ><img src='veg-image-12.svg'></img></div>
                      <div className="veg3"  data-speed="0.8" ><img src='veg-image-5.svg'></img></div>
                      <div className="veg4"  data-speed="0.1" ><img src='veg-image-8.svg'></img></div>
                      <div className="veg5"  data-speed="0.4" ><img src='veg-image-3.svg'></img></div>

                                      
                <div className="dinnerPlan">
               
                  <div className="h1 stagText"> Do you have  dinner plan? </div>
                  <div className="h3 stagText">Great atmosphere for dining in </div>
                  <div className="h5 stagText"> Book a Table </div>


                  <div className="flex flex-row">
              <div className="textLineRight"> OASIS  </div>
              <div className="textLineRight"> OASIS  </div>
 
          
              </div>

                </div>

                </div>    



              </div>
            </div>


            <div className="container mx-auto "> 
            <div class="flex flex-row offer ">
            <div className='gap-2'>01</div>
            <div className='gap-2'> 02</div>
            <div>03</div>
            <div>01</div>
            <div>02</div>
            <div>03</div>
          
          </div>
            
            
             </div>


            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}











