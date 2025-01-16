import React, { useState } from 'react'
import './styles/HamburgerMenu.css'

import { Link } from 'react-router-dom'
const HamburgerMenu = ({closeMenu}) => {
  
  
  return (
    <div className='z-50 absolute sm:left-6 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-black  w-72  p-5 md:hidden h-max  items-center flex flex-col gap-5  rounded-lg border-2 border-gray-700 '>
    <div className=' w-full flex justify-end pr-5 p-2 mt-2'>
        <img onClick={closeMenu} src="" alt="" className='cursor-pointer'/>
    </div>
      <ul className="w-full flex flex-col gap-5 justify-between items-center lg:text-xl font-medium ">
            <li   className='hamburgerMenuLi rounded  w-full p-2 text-center hover:bg-gray-800  cursor-pointer'>
              <Link
                onClick={closeMenu}              
                to="/OpenRAG"
                className="hamburgerMenua cursor-pointer text-gray-300 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li  className='w-full hamburgerMenuLi rounded p-2 text-center hover:bg-gray-800  cursor-pointer'>
              <Link
                onClick={closeMenu}                
                to="/OpenRAG/events"
                 className="hamburgerMenua cursor-pointer text-gray-300 hover:text-white"
              >
                Events
              </Link>
            </li>
            <li  className='hamburgerMenuLi rounded  w-full  p-2 text-center hover:bg-gray-800  cursor-pointer'>
              <Link
                onClick={closeMenu}
                to="/OpenRAG/blogs"
                 className="hamburgerMenua cursor-pointer text-gray-300 hover:text-white"
              >
                Blogs
              </Link>
            </li>
            <li  className='hamburgerMenuLi rounded  w-full  p-2 text-center hover:bg-gray-800  cursor-pointer'>
              <Link
                onClick={closeMenu}
                to="/OpenRAG/products"
                 className="hamburgerMenua cursor-pointer text-gray-300 hover:text-white"
              >
                Products
              </Link>
            </li>
            <li  className='hamburgerMenuLi rounded  w-full  p-2 text-center hover:bg-gray-800  cursor-pointer'>
              <Link
                onClick={closeMenu}
                to="/OpenRAG/FAQ"
                 className="hamburgerMenua cursor-pointer text-gray-300 hover:text-white"
              >
                FAQs
              </Link>
            </li>
          </ul>
          <Link to="/OpenRAG/get-in-touch"  className='rounded md:hidden bg-gray-800 p-2 w-full   font-medium text-lg mb-10'>
          <button onClick={closeMenu} className="rounded md:hidden bg-gray-800 w-full text-gray-300 hover:text-white font-medium text-lg ">
            GET IN TOUCH
          </button>
          </Link>
    </div>
  )
}

export default HamburgerMenu
