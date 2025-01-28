import React, { useState,useEffect } from 'react'
import './styles/HamburgerMenu.css'
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'
const HamburgerMenu = ({closeMenu}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // Function to track scroll position
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Get current scroll position
    };
    // Attach the event listener to track scroll position
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      // Clean up event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div style={{
      top: `${scrollPosition + 320}px`, // Adjust positioning based on scroll position
    }} className='z-[11111] absolute sm:left-6 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] md:left-[25rem] md:w-96 bg-black  w-72  p-5 lg:hidden h-max  items-center flex flex-col gap-5  rounded-lg border-2 border-gray-700 '>
    <div className=' w-full flex justify-end pr-5 p-2 mt-2'>
    <IoCloseOutline onClick={closeMenu} className='text-2xl' />
        <img  src="" alt="" className='cursor-pointer'/>
    </div>
      <ul className="w-full flex flex-col gap-5 justify-between items-center lg:text-xl font-medium ">
            <li   className='hamburgerMenuLi rounded  w-full p-2 text-center hover:bg-gray-800  cursor-pointer'>
              <Link
                onClick={closeMenu}              
                to="/"
                className="hamburgerMenua cursor-pointer text-gray-300 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li  className='w-full hamburgerMenuLi rounded p-2 text-center hover:bg-gray-800  cursor-pointer'>
              <Link
                onClick={closeMenu}                
                to="/events"
                 className="hamburgerMenua cursor-pointer text-gray-300 hover:text-white"
              >
                Events
              </Link>
            </li>
            <li  className='hamburgerMenuLi rounded  w-full  p-2 text-center hover:bg-gray-800  cursor-pointer'>
              <Link
                onClick={closeMenu}
                to="/blogs"
                 className="hamburgerMenua cursor-pointer text-gray-300 hover:text-white"
              >
                Blogs
              </Link>
            </li>
            <li  className='hamburgerMenuLi rounded  w-full  p-2 text-center hover:bg-gray-800  cursor-pointer'>
              <Link
                onClick={closeMenu}
                to="/products"
                 className="hamburgerMenua cursor-pointer text-gray-300 hover:text-white"
              >
                Products
              </Link>
            </li>
            <li  className='hamburgerMenuLi rounded  w-full  p-2 text-center hover:bg-gray-800  cursor-pointer'>
              <Link
                onClick={closeMenu}
                to="/FAQ"
                 className="hamburgerMenua cursor-pointer text-gray-300 hover:text-white"
              >
                FAQs
              </Link>
            </li>
            <li  className='hamburgerMenuLi rounded  w-full  p-2 text-center hover:bg-gray-800  cursor-pointer'>
              <Link
                onClick={closeMenu}
                to="/AboutUs"
                 className="hamburgerMenua cursor-pointer text-gray-300 hover:text-white"
              >
                About Us
              </Link>
            </li>
          </ul>
          <Link to="/get-in-touch"  className='rounded lg:hidden bg-gray-800 p-2 w-full   font-medium text-lg mb-10'>
          <button onClick={closeMenu} className="rounded lg:hidden bg-gray-800 w-full text-gray-300 hover:text-white font-medium text-lg ">
            GET IN TOUCH
          </button>
          </Link>
    </div>
  )
}

export default HamburgerMenu
