import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import glow from "../assets/glow.avif";
import ShinyText from "../components/reactBits/ShinyText";
import Logo from "../assets/svg/logo";
import { Link } from "react-router-dom";
const Navbar = ({toggleMenu}) => {
  const scrollToTop = () => {
    window.reload();
  };
  return (
    <>
    {/*  bg-white/5 backdrop-blur-md border-b border-white/10*/}
      <nav className="sm:m-3 md:m-5 fixed w-[100vw] bg-white/5 backdrop-blur-md border-b border-white/10 z-50">
        <div className="w-[90%] mx-auto  sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:px-1 md:px-8">
            {/* Logo and brand */}
            <div className="flex items-center">
              {/* <Brain className="h-8 w-8 text-white" /> */}
              <div className="flex gap-2 items-center cursor-pointer">
                <Logo/>
                <p className="h-max w-max text-white font-bold text-lg">OpenRAG</p>
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
              onClick={scrollToTop}
                to="/OpenRAG"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
              onClick={scrollToTop}
                to="/OpenRAG/events"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Events
              </Link>
              <Link
              onClick={scrollToTop}
                to="/OpenRAG/blogs"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
              onClick={scrollToTop}
                to="/OpenRAG/products"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
              onClick={scrollToTop}
                to="/OpenRAG/FAQ"
                className="text-gray-300 hover:text-white transition-colors"
              >
                FAQs
              </Link>
            </div>
            {/* <button className="  px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Sign In
                    </button> #1F1E1E*/} 
            <Link to='/OpenRAG/get-in-touch' className="hidden md:block w-max h-max hover:bg-[#1F1E1E] rounded-lg transition-all duration-300">

            <ShinyText
              text="GET IN TOUCH"
              disabled={false}
              speed={3}
              className="custom-class border-2 rounded-lg p-2 px-4 cursor-pointer border-slate-800 "
              />
              </Link>

            {/* Mobile menu button */}
            <div className="w-4 h-4 sm:hidden  ">
              <GiHamburgerMenu onClick={toggleMenu} className="w-full h-full text-white"/>
            </div>
            {/* <div className="md:hidden">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="text-white hover:text-white/80 transition-colors"
                    >
                      {isMenuOpen ? <X className="h-6 w-6" /> : "ji"}
                    </button>
                  </div> */}
          </div>

          {/* Mobile navigation */}
          {/* {isMenuOpen && (
                  <div className="md:hidden bg-white/10 backdrop-blur-lg rounded-lg mt-2 border border-white/10">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      <a href="#" className="block px-3 py-2 text-white/90 hover:text-white transition-colors">Home</a>
                      <a href="#" className="block px-3 py-2 text-white/90 hover:text-white transition-colors">Events</a>
                      <a href="#" className="block px-3 py-2 text-white/90 hover:text-white transition-colors">Blog</a>
                      <a href="#" className="block px-3 py-2 text-white/90 hover:text-white transition-colors">Products</a>
                      <button className="w-full mt-2 px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Sign In
                      </button>
                    </div>
                  </div>
                )} */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
