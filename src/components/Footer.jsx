import React from "react";
import Logo from "../assets/svg/logo";
import linkedin from "../assets/images/linkedin.png";
import medium from "../assets/images/medium.jpg";
import instagram from "../assets/images/instagram.png";
import "./styles/Footer.css";
import { Link } from "react-router-dom";


const Footer = () => {
  const scrollToTop = () => {
    window.reload();
  };
  return (
    <div className="w-[80%] m-auto pt-20 md:pt-56 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 md:w-12 md:h-12 p-2 border-[1px] md:border-2 border-white rounded-lg cursor-pointer hover:scale-150 transition-all duration-500">
            <img className="w-full h-full object-cover" src={linkedin} alt="" />
          </div>
          <div className="w-8 h-8 md:w-12 md:h-12 p-2 border-[1px] md:border-2 border-white rounded-lg cursor-pointer hover:scale-150 transition-all duration-500">
            <img className="w-full h-full object-cover" src={medium} alt="" />
          </div>
          <div className="w-8 h-8 md:w-12 md:h-12  border-[1px] md:border-2 border-white rounded-lg bg-white cursor-pointer hover:scale-150 transition-all duration-500">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={instagram}
              alt=""
            />
          </div>
        </div>
        <Link
        onClick={scrollToTop}
          to="/OpenRAG/get-in-touch"
          className="b-white text-lg px-3 py-2 md:px-5 md:py-2 font-extrabold md:text-xl rounded-full bg-[#F06292] text-white hover:text-black hover:bg-white transition-all duration-500"
        >
          GET IN TOUCH
        </Link>
      </div>
      <div className="overflow-hidden marquee text-white text-[20vw] font-bold pb-5 md:pb-0">OPENRAG</div>
    </div>
  );
};

export default Footer;
