import React, { useLayoutEffect, useEffect, useRef } from 'react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
 import { ScrollSmoother } from 'gsap/ScrollSmoother';
import gsap from 'gsap';

import SplitText from 'gsap/dist/SplitText';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger,  ScrollSmoother,SplitText);

 

export default function About() {


  const main = useRef();
  const smoother = useRef();


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


  useEffect(() => {
 
    const movingUp = gsap.timeline();

    movingUp.from('.backgrond-food', { y: 400, opacity: 0 });
    movingUp.to('.backgrond-food', { duration: 2, y: 0, opacity: 1 });


    var tl = gsap.timeline(),

      mySplitText = new SplitText("#textAnim", { type: "words,chars" }),
      chars = mySplitText.chars; //an array of all the divs that wrap each character

    gsap.set("#textAnim", { perspective: 400 });

    console.log(chars);

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01
    });

    const abouPageLoad = gsap.timeline();


    abouPageLoad.add(movingUp, 0);
    abouPageLoad.add(tl, 0.5);


    abouPageLoad.play();

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


      <div className="container mx-auto ">
        <div className="middleSection">
   
            <p className=' headingSize'>About Us page</p>


            <div className="aboutPage">


              <div className="aboutContent">

                <h1 id='textAnim'>

                  Welcome to Oasis Indian restaurant and takeaway, boasting innovative modern ambience and situated in the heart of a busy nightspot making it a favourite with the locals and outsiders.

                  <br></br>
                  A restaurant with a huge reputation with its warm welcome, great atmosphere and exquisite food. At Oasis we present wonderful dishes that emphasise both taste and texture, enjoy exotic flavours and subtle tastes of India’s finest cuisine, consider our home your home as you experience our hospitality and the authentically prepared dishes we present you with. Fragrant, pungent and warm spices from all over India are blended into our dishes exacting the traditional Indian dishes with only fresh ingredients used to tempt your appetite, each dish boasts its own flavour and aroma.

                </h1>

 
            </div>



            </div>
        </div>

          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}