import React from "react";

import glow from "../assets/glow.avif";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div className="relative h-max pb-10 md:overflow-hidden pt-5 md:pt-16 md:h-screen">
          <div className="absolute inset-0 md:w-full md:h-full overflow-hidden md:rotate-0 w-72 h-72 m-auto top-[120px]">
            <img src={glow} className="absolute md:top-[120px] w-[90%] h-[90%]" alt="" />
            <div className="absolute  inset-0 bg-gradient-to-t from-black via-black/50 md:w-full md:h-full w-[90%] h-[90%] to-transparent " />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 pt-20 pb-16 relative z-10">
            <div className="text-center flex flex-col gap-5">
              <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold text-white mb-6">
                <span className="block text-[#AD49BD]"> Domain-Specific</span>
                Generative AI for the Future
              </h1>
              <p className="sm:text-[12px] md:text-xl font-sans text-gray-400 max-w-2xl mx-auto mb-8">
                Experience the future of AI with our domain-specific models,
                designed to provide precision and efficiency in solving
                real-world problems across various sectors.
              </p>
              <div className="flex justify-center gap-4">
                <Link to='/OpenRAG/get-in-touch' target="_self" className="px-4 py-1  md:px-8 md:py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </Link>
                <Link to='/OpenRAG/products' target="_self" className="px-4 py-1  md:px-8 md:py-3 bg-transparent text-white rounded-lg font-semibold border border-white hover:bg-white/10 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default HeroSection
