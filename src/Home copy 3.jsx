
import gsap from 'gsap';
import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { ScrollTrigger } from  "gsap/dist/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollSmoother } from 'gsap/ScrollSmoother';
 
 import Footer from './Footer';
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin,ScrollSmoother);

export default function Home() {

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
          gsap.to(dishItem, { y: 0,  ease: 'power2.out' });
        },
        onLeaveBack: () => {
          // Reverse the animation when the element leaves the viewport
          gsap.to(dishItem, { y: 100,   ease: 'power2.in' });
        },
      });
      return () => ctx.revert();
    });

    
    const LineRotateTLL = () => {
      const LineRotateTL = gsap.timeline({ yoyo: true, repeat: -1 });

      const tlROund = gsap.timeline();
      const tlVeg1 = gsap.timeline();
      const tlVeg111 = gsap.timeline();

      const tlVeg2 = gsap.timeline();
      const tlVeg222 = gsap.timeline();

      const tlVeg3 = gsap.timeline();
      const tlVeg333 = gsap.timeline();

      const tlVeg4 = gsap.timeline();
      const tlVeg444 = gsap.timeline();

      const tlVeg5 = gsap.timeline();
      const tlVeg555 = gsap.timeline();


      const tlVeg6 = gsap.timeline();
      const tlVeg666 = gsap.timeline();

      const tlVeg7 = gsap.timeline();
      const tlVeg777 = gsap.timeline();

      const tlVeg8 = gsap.timeline();
      const tlVeg888 = gsap.timeline();


      const tlVeg9 = gsap.timeline();
      const tlVeg999 = gsap.timeline();


      const tlVeg10 = gsap.timeline();
      const tlVeg1011 = gsap.timeline();

      
      const tlVeg11 = gsap.timeline();
      const tlVeg1111 = gsap.timeline();

      const tlVeg12 = gsap.timeline();
      const tlVeg1211 = gsap.timeline();

      const tlVeg13 = gsap.timeline();
      const tlVeg1311 = gsap.timeline();

      const tlVeg14 = gsap.timeline();
      const tlVeg1411 = gsap.timeline();

      const tlVeg15 = gsap.timeline();
      const tlVeg1511 = gsap.timeline();

      const tlVeg16 = gsap.timeline();
      const tlVeg1611 = gsap.timeline();

      const tlVeg17 = gsap.timeline();
      const tlVeg1711 = gsap.timeline();

      const tlVeg18 = gsap.timeline();
      const tlVeg1811 = gsap.timeline();

      const tlVeg19 = gsap.timeline();
      const tlVeg1911 = gsap.timeline();

      const tlVeg20 = gsap.timeline();
      const tlVeg2011 = gsap.timeline();


      tlROund.fromTo('.round1', { rotate: 0,  }, { rotate: 360, duration: 15, repeat: -1, });

      tlVeg1.fromTo('.veg1', { rotate: 0 ,}, 
      { rotate: -360, duration: 15, repeat: -1,   });
      tlVeg111.fromTo('.veg1', {    top:"45%", right:"24%", position:"absolute", scale:"0.7", }, 
      {   duration: 1,   top:"-7%", right:"30%", position:"absolute", scale:"0.7", });

      tlVeg2.fromTo('.veg2', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
      tlVeg222.fromTo('.veg2', {  top:"45%", right:"10%",position:"absolute", scale:"0.7",}, 
      {  duration: 1,  top:"-4%", right:"10%",position:"absolute", scale:"0.7", });

      tlVeg3.fromTo('.veg3', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
      tlVeg333.fromTo('.veg3', {  top:"55%", right:"44%",position:"absolute", scale:"0.5",  },
       { duration: 1,  top:"3%", right:"-1%",position:"absolute", scale:"0.7",  });


       tlVeg4.fromTo('.veg4', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
       tlVeg444.fromTo('.veg4', {   top:"60%", right:"35%", position:"absolute", scale:"0.7", }, 
       {  top:"20%", right:"-8%", position:"absolute", scale:"0.7",});

       tlVeg5.fromTo('.veg5', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
       tlVeg555.fromTo('.veg5', {  top:"11%", right:"45%", position:"absolute", scale:"0.7",}, 
       {  top:"30%", right:"-12%", position:"absolute", scale:"0.7", });
 
     
       tlVeg6.fromTo('.veg6', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
       tlVeg666.fromTo('.veg6', { top:"53%", right:"65%", position:"absolute", scale:"0.5",}, 
       { top:"49%", right:"-12%", position:"absolute", scale:"0.7", });


   
      tlVeg7.fromTo('.veg7', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
      tlVeg777.fromTo('.veg7', { top:"52%", right:"15%", position:"absolute", scale:"0.5", }, 
      {  top:"60%", right:"-12%", position:"absolute", scale:"0.5", });




      tlVeg8.fromTo('.veg8', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
      tlVeg888.fromTo('.veg8', { top:"60%", right:"35%", position:"absolute", scale:"0.5", }, 
      {  top:"72%", right:"4%", position:"absolute", scale:"0.5", });



      tlVeg9.fromTo('.veg9', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
      tlVeg999.fromTo('.veg9', {  top:"60%", right:"45%", position:"absolute", scale:"0.5",  }, 
      {  top:"86%", right:"15%", position:"absolute", scale:"0.5",  });


      tlVeg10.fromTo('.veg10', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
      tlVeg1011.fromTo('.veg10', {  top:"60%", right:"55%", position:"absolute", scale:"0.5", }, 
      {  top:"80%", right:"21%", position:"absolute", scale:"0.5",  });
 
 


      tlVeg11.fromTo('.veg11', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
      tlVeg1111.fromTo('.veg11', { top:"50%", left:"30%", position:"absolute", scale:"0.5", }, 
      { top:"-9%", left:"30%", position:"absolute", scale:"0.5", });


      
      tlVeg12.fromTo('.veg12', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
      tlVeg1211.fromTo('.veg12', { top:"44%", left:"55%", position:"absolute", scale:"0.5", },
       { top:"-7%", left:"10%", position:"absolute", scale:"0.5", });



      tlVeg13.fromTo('.veg13', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
      tlVeg1311.fromTo('.veg13', { top:"55%", left:"55%", position:"absolute", scale:"0.5",},
       { top:"7%", left:"1%", position:"absolute", scale:"0.5", });


      tlVeg14.fromTo('.veg14', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
      tlVeg1411.fromTo('.veg14', { top:"45%", left:"45%", position:"absolute", scale:"0.5",}, 
      { top:"23%", left:"-5%", position:"absolute", scale:"0.5", });

 



      tlVeg15.fromTo('.veg15', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });

      tlVeg1511.fromTo('.veg15', { top:"30%", left:"55%", position:"absolute", scale:"0.5", }, 
      { top:"33%", left:"-9%", position:"absolute", scale:"0.5", });


      tlVeg16.fromTo('.veg16', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });

      tlVeg1611.fromTo('.veg16', { top:"40%", left:"55%", position:"absolute", scale:"0.5", },
       { top:"45%", left:"-5%", position:"absolute", scale:"0.5", });


      tlVeg17.fromTo('.veg17', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });

      tlVeg1711.fromTo('.veg17', {top:"50%", left:"55%", position:"absolute", scale:"0.5", }, 
      { top:"65%", left:"-5%", position:"absolute", scale:"0.5", });


      tlVeg18.fromTo('.veg18', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });

      tlVeg1811.fromTo('.veg18', { top:"40%", left:"55%", position:"absolute", scale:"0.5", }, 
      { top:"70%", left:"1%", position:"absolute", scale:"0.5",});


      tlVeg19.fromTo('.veg19', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });


      tlVeg1911.fromTo('.veg19', { top:"20%", left:"55%", position:"absolute", scale:"0.5", }, 
      { top:"75%", left:"3%", position:"absolute", scale:"0.5", });



      tlVeg20.fromTo('.veg20', { rotate: 0 }, { rotate: -360, duration: 15, repeat: -1, });
      tlVeg2011.fromTo('.veg20', { top:"30%", left:"55%", position:"absolute", scale:"0.5", },
       { top:"85%", left:"25%", position:"absolute", scale:"0.5", });

  

      LineRotateTL.add(tlROund, 0)


      .add(tlVeg111, 0)
      .add(tlVeg222, 0)
      .add(tlVeg333, 0)
      .add(tlVeg444, 0)
      .add(tlVeg555, 0)
      .add(tlVeg666, 0)
      .add(tlVeg777, 0)
      .add(tlVeg888, 0)
      .add(tlVeg999, 0)
      .add(tlVeg1011, 0)


      .add(tlVeg1111, 0)
      .add(tlVeg1211, 0)
      .add(tlVeg1311, 0)
      .add(tlVeg1411, 0)
      .add(tlVeg1511, 0)
      .add(tlVeg1611, 0)
      .add(tlVeg1711, 0)
      .add(tlVeg1811, 0)
      .add(tlVeg1911, 0)
      .add(tlVeg2011, 0)
 

      .add(tlVeg1, 1)
        .add(tlVeg2, 0)
        .add(tlVeg3, 0)
        .add(tlVeg4, 0)
        .add(tlVeg5, 0)
        .add(tlVeg6, 0)
        .add(tlVeg7, 0)
        .add(tlVeg8, 0)
        .add(tlVeg9, 0)
        .add(tlVeg10, 0)
        .add(tlVeg11, 0)
        .add(tlVeg12, 0)
        .add(tlVeg13, 0)
        .add(tlVeg14, 0)
        .add(tlVeg15, 0)
        .add(tlVeg16, 0)
        .add(tlVeg17, 0)
        .add(tlVeg18, 0)
        .add(tlVeg19, 0)
        .add(tlVeg20, 0)

 

      return LineRotateTL;

    
    };
   
    // Invoke the function to get the Timeline instance
    const LineRotateTimeline = LineRotateTLL();

    ScrollTrigger.create({
      trigger: letsEatRef.current,
      start: 'top top',
      animation: LineRotateTimeline,
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
            smooth: 6,
            effects: true,
        });
    }, main);
 


    
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
              <div className="insideRound">
                <div className="round1">

                  <div className="veg1"> <img src='veg-image-1.svg'></img> </div>
                  <div className="veg2"> <img src='veg-image-2.svg'></img></div>
                  <div className="veg3"> <img src='veg-image-3.svg'></img></div>
                  <div className="veg4"> <img src='veg-image-4.svg'></img></div>

                  <div className="veg5"> <img src='veg-image-5.svg'></img> </div>
                  <div className="veg6"> <img src='veg-image-6.svg'></img></div>
                  <div className="veg7"> <img src='veg-image-7.svg'></img></div>
                  <div className="veg8"> <img src='veg-image-8.svg'></img></div>

                  <div className="veg9"> <img src='veg-image-9.svg'></img></div>
                  <div className="veg10"> <img src='veg-image-10.svg'></img></div>

                  <div className="veg11"> <img src='veg-image-11.svg'></img> </div>
                  <div className="veg12"> <img src='veg-image-12.svg'></img></div>
                  <div className="veg13"> <img src='veg-image-13.svg'></img></div>
                  <div className="veg14"> <img src='veg-image-14.svg'></img></div>

                  <div className="veg15"> <img src='veg-image-15.svg'></img> </div>
                  <div className="veg16"> <img src='veg-image-16.svg'></img></div>
                  <div className="veg17"> <img src='veg-image-17.svg'></img></div>
                  <div className="veg18"> <img src='veg-image-18.svg'></img></div>

                  <div className="veg19"> <img src='veg-image-19.svg'></img></div>
                  <div className="veg20"> <img src='veg-image-20.svg'></img></div>




                </div>
              </div>
            </div>



            <div className="deleveryAnimation">



            </div>

            <div className="bookTable">
              <p className="tittleText" >Do you have dinner plans ?</p>
              <p className="tittleTextSmall">Great atmosphere for dining in</p>
              <div className="bookTbleBtn tittleTextSmall">Book Table</div>
            </div>

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
<path id='path' d="M1390.4 180.305C1013.07 352.034 292.58 165.892 4 137.065V169.868C195.714 196.706 1018.72 441.107 1400.49 214.599C1937.07 -103.769 2523.19 162.91 2688 189.251V159.431C2359.06 104.262 2186.14 -181.857 1390.4 180.305Z" fill="#000"/>
</g>
 
</svg>


            </div>
          </div>
        </div>
      </div>



      <div className="container mx-auto">

        <div className="dishesBg">


          <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div >
              <div className="dish-item">
                <div className="blackBgCover">
                  <div className="dishImage">
                    <img src='dish1.svg'></img>
                  </div>
                  <div className="pricing">
                  </div>
                </div>
              </div>
            </div>

            <div >
              <div className="dish-item">
                <div className="blackBgCover">
                  <div className="dishImage">
                    <img src='dish1.svg'></img>
                  </div>
                  <div className="pricing">
                  </div>
                </div>
              </div>
            </div>

            <div >
              <div className="dish-item">
                <div className="blackBgCover">
                  <div className="dishImage">
                    <img src='dish1.svg'></img>
                  </div>
                  <div className="pricing">
                  </div>
                </div>
              </div>
            </div>

            <div >
              <div className="dish-item">
                <div className="blackBgCover">
                  <div className="dishImage">
                    <img src='dish1.svg'></img>
                  </div>
                  <div className="pricing">
                  </div>
                </div>
              </div>
            </div>

            

          </div>

        </div>
      </div>

 <Footer />
</div>
</div>

</div>

    </>
  )
}











