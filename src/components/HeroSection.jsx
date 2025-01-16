import React from "react";

import glow from "../assets/glow.avif";

const HeroSection = () => {
  return (
    <>
      <div className="relative overflow-hidden pt-16 h-screen">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img src={glow} className="absolute top-[120px]" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
            <div className="text-center flex flex-col gap-5">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
                <span className="block text-[#AD49BD]"> Domain-Specifice</span>
                Generative AI for the Future
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Experience the future of AI with our domain-specific models,
                designed to provide precision and efficiency in solving
                real-world problems across various sectors.
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-3 bg-transparent text-white rounded-lg font-semibold border border-white hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default HeroSection
