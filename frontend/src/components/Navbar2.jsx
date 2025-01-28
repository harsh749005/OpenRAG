import React, { useRef } from "react";
import Section from "./Section";
import "./styles/Navbar2.css";
const Navbar2 = () => {
  const navref = useRef(null);
  const handleClose = () => {
    ref.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <header className=" flex sticky  top-0 z-10">
        <h1 className="text-white w-max">Logo</h1>
        <nav
          ref={navref}
          className="navbar flex-1 h-screen bg-black flex justify-between px-5 md:px-10 items-center pt-2 pb-2"
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <button className="btn md:hidden">X</button>
          <div className="hamburger md:hidden flex flex-col justify-center items-center gap-2 w-12 h-12 bg-black">
            <div className="line1 bg-white h-[2.5px] w-6"></div>
            <div className="line2 bg-white h-[2.5px] w-6"></div>
          </div>
        </nav>
      </header>
      <Section />
    </>
  );
};

export default Navbar2;
