import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ShinyText from "../components/reactBits/ShinyText";
import Logo from "../assets/svg/Logo";
import { Link } from "react-router-dom";
const Navbar = ({toggleMenu}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    {/*  bg-white/5 backdrop-blur-md border-b border-white/10*/}
      <nav className="sm:m-3 md:m-5 fixed w-[100vw] bg-white/5 backdrop-blur-md border-b border-white/10 z-50">
        <div className="w-[90%] mx-auto  sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:px-1 ">
            {/* Logo and brand */}
            <div className="flex items-center">
              {/* <Brain className="h-8 w-8 text-white" /> */}
              <div className="flex gap-2 items-center cursor-pointer">
                <Logo/>
                <p className="h-max w-max text-white font-bold text-lg">OpenRAG</p>
              </div>
            </div>

            {/* Desktop navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
               
                to="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
              onClick={scrollToTop}
                to="/events"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Events
              </Link>
            
              <Link
              onClick={scrollToTop}
                to="/products"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Products
              </Link>
              <Link
             onClick={scrollToTop}
                to="/FAQ"
                className="text-gray-300 hover:text-white transition-colors"
              >
                FAQs
              </Link>
              <Link
             onClick={scrollToTop}
                to="/AboutUs"
                className="text-gray-300 hover:text-white transition-colors"
              >
                AboutUs
              </Link>
            </div>
          
            <Link to='/get-in-touch' className="hidden lg:block w-max h-max hover:bg-[#1F1E1E] rounded-lg transition-all duration-300">

            <ShinyText
              text="GET IN TOUCH"
              disabled={false}
              speed={3}
              className="custom-class border-2 rounded-lg p-2 px-4 cursor-pointer border-slate-800 "
              />
              </Link>

            {/* Mobile menu button */}
            <div className="w-4 h-4 lg:hidden  ">
              <GiHamburgerMenu onClick={toggleMenu} className="w-full h-full text-white"/>
            </div>
     
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
