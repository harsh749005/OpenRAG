import React from "react";
import "./styles/Work.css";
import GradientText from "../components/reactBits/GradientText";
import { Link } from "react-router-dom";


const Work = () => {
  return (
    <div className="main flex md:block  w-[100%] h-max  bg-black relative overflow-hidden mb-20 ">
    
      <section className="outer  w-[100%] h-max  ">
        <div className="w-[80%] h-max m-auto flex flex-col items-center gap-2">
          <GradientText
            colors={["#AD49BD", "#C86BCF", "#8C2C99", "#F06292", "#6759FF"]}
            animationSpeed={3}
            showBorder={false}
            className="text-4xl md:text-6xl   text-white font-extrabold p-2 text-center"
          >
            Unlock the Potential of Your Data
          </GradientText>
          <p className="w-[90vw] lg:w-[60vw] sm:text-[12px] md:text-xl font-sans text-gray-400 mt-8 p-2 text-center">
            Discover how OpenRAG can accelerate your business growth with
            advanced GenAI solutions tailored to your specific needs.
          </p>
       
          <Link to="/OpenRAG/get-in-touch" className="text-sm px-4 py-2 md:px-5 md:mt-7 md:py-2 font-extrabold md:text-xl rounded-full bg-[#F06292] text-white hover:text-black hover:bg-white transition-all duration-500">
          Get Started
      </Link>
        </div>
      </section>
    </div>
  );
};

export default Work;
