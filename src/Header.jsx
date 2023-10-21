import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import gsap from 'gsap';
import { Power3 } from 'gsap';


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
   

  
  const toggleNavigation = () => {
    setIsOpen(!isOpen);

    const mbileNavOpenDekstop = document.querySelector('.mbileNavOpenDekstop');
    const menuItems = document.querySelectorAll('.menuItems');

    const tl = gsap.timeline();

    if (isOpen) {
      tl.fromTo(
        mbileNavOpenDekstop,
        { opacity: 0, skewX: 55, translateX: 1500, y: -250 },
        { opacity: 1, ease: 'expo.out', duration: 1.5, translateX: 0, skewX: 0, y: 0 , display:"inline-block",}
      );

      tl.fromTo('.menuItems', { translateX: 500, y: -700 }, { translateX: 0, y: 0, stagger: 0.2, ease: 'expo.out', duration: 1 });
    } else {
      tl.fromTo('.menuItems', { translateX: 0, y: 0 }, { translateX: 1000, y: -700, stagger: 0.1, ease: 'expo.out', duration: 1 });
      tl.fromTo(
        mbileNavOpenDekstop,
        { delay: 0, opacity: 1, skewX: 0, translateX: 0, y: 0 },
        { opacity: 0, ease: 'expo.out', y: -1000, duration: 0.5, translateX: 1000, skewX: 50 }
      );
    }
  };



  return (
    < >
    <div id="loader">
      <div className="loader_box">
      </div>
    </div>
      <div className="container mx-auto" style={{ zIndex: "9", position: "relative", }}>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <NavLink
              to="/"
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <img src='/oasis-logo.svg'></img>
            </NavLink>


            <nav className="dekstopnNav md:ml-auto flex flex-wrap items-center text-base justify-center pr-20">

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
                    Order
                  </NavLink>

                </li>

                <li className=' '>


                  <NavLink
                    to="/offer"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    offer
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

            <div className="mobileNavIcon" onClick={toggleNavigation}>
              <div className="iconlayer1" id='OpenMobileNav'>
                <img src='menu-icon.svg'></img>
              </div>
            </div>
          </div>
        </header>



        <div className="mbileNavOpenDekstop">
          <div className="mbileNavOpenDekstopInside extrafont">        
                 
            <ul>
                <li className='menuItems '  onClick={toggleNavigation}>
                  <NavLink  
                    to="/"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li className='menuItems '  onClick={toggleNavigation}>
                  <NavLink  
                    to="/about"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li className='menuItems '  onClick={toggleNavigation}>
                  <NavLink  
                    to="/dishes"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    Dishes
                  </NavLink>

                </li>

                <li className='menuItems '  onClick={toggleNavigation}>

                  <NavLink  
                    to="/order"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    Order
                  </NavLink>

                </li>

                <li className='menuItems '  onClick={toggleNavigation}>


                  <NavLink  
                    to="/offer"
                    className={({ isActive }) =>
                      `nav-btn block py-2 pr-4 pl-3 duration-200 ${isActive ? "navbtnActive" : "navbtnColor"}  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:navbtnHover lg:p-0`
                    }
                  >
                    offer
                  </NavLink>

                </li>

                <li className='menuItems '  onClick={toggleNavigation}>
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

          </div>
        </div>
      </div>
    </ >
  )
}
