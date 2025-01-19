import React from "react";
import Logo from "../assets/svg/logo";
import linkedin from "../assets/images/linkedin.png";
import medium from "../assets/images/medium.jpg";
import instagram from "../assets/images/instagram.png";
import "./styles/Footer.css";
import { Link } from "react-router-dom";
import { BiArrowToTop } from "react-icons/bi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="w-[90%] m-auto pt-20 lg:pt-56 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 lg:w-12 lg:h-12 p-2 border-[1px] md:border-2 border-white rounded-lg cursor-pointer hover:scale-150 transition-all duration-500">
            <img className="w-full h-full object-cover" src={linkedin} alt="" />
          </div>
          <div className="w-8 h-8 lg:w-12 lg:h-12 p-2 border-[1px] md:border-2 border-white rounded-lg cursor-pointer hover:scale-150 transition-all duration-500">
            <img className="w-full h-full object-cover" src={medium} alt="" />
          </div>
          <div className="w-8 h-8 lg:w-12 lg:h-12  border-[1px] md:border-2 border-white rounded-lg bg-white cursor-pointer hover:scale-150 transition-all duration-500">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={instagram}
              alt=""
            />
          </div>
        </div>
        <BiArrowToTop className="text-4xl border-2 rounded-full p-1 cursor-pointer" onClick={scrollToTop}/> 
        <Link
        
          to="/OpenRAG/get-in-touch"
          className=" text-sm px-3 py-2 lg:px-5 lg:py-2 font-extrabold lg:text-xl rounded-full bg-[#F06292] text-white hover:text-black hover:bg-white transition-all duration-500"
        >
          GET IN TOUCH
        </Link>
      </div>
      <div className="overflow-hidden  text-white text-[20vw]  font-bold pb-5 md:pb-0">
        <h1 className="marquee">OPENRAG</h1>
      </div>
    </div>
  );
};

export default Footer;
