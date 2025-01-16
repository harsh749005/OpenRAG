import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Squares from "../components/reactBits/Squares";
import Cards from "./Cards";
import Work from "./Work";
import './styles/Section.css';

// Register the ScrollTrigger plugin with gsap
gsap.registerPlugin(ScrollTrigger);

const Section = () => {
  useEffect(() => {
    // Make sure gsap is available and ScrollTrigger is working
    if (gsap) {
      // Animation for box1
      gsap.to(".box", {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: ".box", // Target the .box div for scroll
          start: "top 15%", // Start when the top of the box hits 85% of the viewport
          end: "bottom 15%", // End when the bottom of the box hits 15% of the viewport
          scrub: 1, // Smooth animation linked to scroll
          markers: true, // Debugging markers to show start and end points
        },
      });
      // gsap.to(".card", {
      //   scale: 0.7,
      //   opacity: 0,
      //   scrollTrigger: {
      //     trigger: ".card", // Target the .box div for scroll
      //     start: "top 15%", // Start when the top of the box hits 85% of the viewport
      //     end: "bottom 15%", // End when the bottom of the box hits 15% of the viewport
      //     scrub: 1, // Smooth animation linked to scroll
      //     markers: true, // Debugging markers to show start and end points
      //   },
      // });

    }
  }, []);

  return (
    <div className="container w-[100%] h-[300vh] relative ">
      <Squares
        className="container"
        speed={0.5}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#3A3B3B"
        hoverFillColor="#222"
      />
      <div className="  w-full h-[100vh] absolute top-[0px] pt-[300px] mb-5 md:mb-0">
        <div className=" box   content w-full text-center flex flex-col gap-5 ">
          <h1 className=" text-3xl md:text-8xl font-bold text-white mb-6">
            <span className=" block text-[#AD49BD]"> Revolutionizing</span>
            the Generative AI 
          </h1>
          <p className="sm:mb-- sm:text-[12px] md:text-xl text-gray-400 max-w-2xl mx-auto md:mb-8">
            OpenRAG is at the forefront of revolutionizing the way solutions
            have been getting developed, utilizing cutting-edge technology to
            drive actionable results and empower your life.
          </p>
        </div>
        {/* Second box */}
    <>
      <Cards/>
    </>
     
      </div>
    </div>
  );
};

export default Section;
