import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { ScrollTrigger } from  "gsap/dist/ScrollTrigger"
import gsap from 'gsap';
 
gsap.registerPlugin(ScrollTrigger );

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

 
  useEffect(() => {

  const tigerNavIconTLL = () => {
    const tigerNavIconTL = gsap.timeline( );
    const naviconViewTL = gsap.timeline();
    const navIndicatorTL = gsap.timeline();
    const navIndicatorTL1 = gsap.timeline();
     
    naviconViewTL.fromTo('.mobileNavIcon', { x: 250 }, { x: 0, duration: 1.3 });
   
    navIndicatorTL.fromTo('.navIndicator', { scale: 1, position:"absolute", }, { scale: 70, duration: 0.1, position:"absolute",  });  
    navIndicatorTL1.fromTo('.navIndicator', { scale: 70, display:"none" }, { scale: 1, duration: 1.2, position:"absolute", display:"inline-block", 
    top:"55px", right:"50px", position:"fixed" });
   tigerNavIconTL.add(naviconViewTL, 0)
                  .add(navIndicatorTL, 0)
                .add(navIndicatorTL1, 0);
            return tigerNavIconTL;
  };

  const tigerNavIconPlay = tigerNavIconTLL();



  const triggerElement = document.querySelector('.tiggerNavIcon');  

  ScrollTrigger.create({
    trigger: triggerElement,
    start: 'top top', 
    animation:  tigerNavIconPlay,  
  }); 

    
}, [isOpen]);

  useEffect(() => {
  
 
    const mbileNavOpenDekstop = document.querySelector('.mbileNavOpenDekstop');
    const menuItems = document.querySelectorAll('.mbileNavOpenDekstopInside li');

    // GSAP Animation
    const tl = gsap.timeline();

    if (isOpen) {
      // Open animation
      tl.fromTo(
        mbileNavOpenDekstop,
        { opacity: 0, skewX:55,  translateX:1500, y:-250, },
        { opacity: 1, ease: "expo.out", duration: 1.5 , translateX:0,  skewX:0, y:0, }
      );

      tl.fromTo(".menuItems", {       
        translateX:500, y:-700,},
      {translateX:0, y:0,
        stagger: 0.2,  ease: "expo.out", duration: 1 ,
      }     
      );
  
    } else { 

      tl.fromTo(".menuItems",{translateX:0, y:0,},{translateX:1000, y:-700, stagger: 0.1,  ease: "expo.out", duration: 1,});
      tl.fromTo(
        mbileNavOpenDekstop,
        { delay:0, opacity: 1, skewX:0,  translateX:0, y:0,},
        {  opacity: 0,  ease: "expo.out",
        y: -1000, duration: 0.5 , translateX:1000,  skewX:50,   }
      );
    }    
  }, [isOpen]);



  return (
    < >
      <div className="container mx-auto" style={{ zIndex: "9", position: "relative", }}>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <NavLink
              to="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <img src='/oasis-logo.svg'></img>
            </NavLink>


            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center pr-20">

              <ul>
                <li className=' '>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li className=' '>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li className=' '>
                  <NavLink
                    to="/dishes"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    Dishes
                  </NavLink>

                </li>

                <li className=' '>

                  <NavLink
                    to="/order"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    Order Online
                  </NavLink>

                </li>
 
                <li className=' '>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>

              </ul>
            </nav>



<div className="navIndicator">  </div>
            <div className="mobileNavIcon" onClick={toggleNavigation}>
              <div className="iconlayer1" id='OpenMobileNav'>
                <img src='menu-icon.svg'></img>
              </div>
            </div>



          </div>
        </header>
<div className="tiggerNavIcon"></div>


        <div className="mbileNavOpenDekstop">
          <div className="mbileNavOpenDekstopInside extrafont">        
                 
               <ul>
                <li className='menuItems '>
                  <NavLink  onClick={toggleNavigation}
                    to="/"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li className='menuItems '>
                  <NavLink onClick={toggleNavigation}
                    to="/about"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li className='menuItems '>
                  <NavLink onClick={toggleNavigation}
                    to="/dishes"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    Dishes
                  </NavLink>

                </li>

                <li className='menuItems '>
                  <NavLink onClick={toggleNavigation}
                    to="/order"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    Order
                  </NavLink>
                </li>             

                <li className='menuItems '>
                  <NavLink onClick={toggleNavigation}
                    to="/contact"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>

              </ul>

          </div>
        </div>
      </div>
    </ >
  )
}
