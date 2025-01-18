import React, { useState, useEffect } from "react";
import img from "../assets/images/img.jpg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import "./styles/Work.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "../components/reactBits/GradientText";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [amountToScroll, setAmountToScroll] = useState(0); // Store scroll value

  // useEffect(() => {
  //   const calculateScrollAmount = () => {
  //     const wrapper404 = document.querySelector(".wrapper-404");

  //     if (wrapper404) {
  //       let wrapper404Width = wrapper404.offsetWidth;
  //       let windowWidth = window.innerWidth;

  //       // Calculate the amount to scroll
  //       let amountToScroll = wrapper404Width - windowWidth;
  //       setAmountToScroll(amountToScroll);

  //       console.log(`Amount to scroll: ${amountToScroll}`); // Log for debugging
  //     }
  //   };

  //   // Calculate on initial mount
  //   calculateScrollAmount();

  //   // Add event listener to recalculate on window resize
  //   window.addEventListener("resize", calculateScrollAmount);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", calculateScrollAmount);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (amountToScroll > 0) {
  //     // Ensure the scroll amount is valid
  //     // gsap.to(".wrapper-404", {
  //     //   x: -amountToScroll, // Move horizontally based on the amountToScroll value
  //     //   duration: 3, // Animation duration
  //     //   ease: "none", // No easing for smooth scroll
  //     //   scrollTrigger: {
  //     //     trigger: ".wrapper-404", // Trigger the animation when this element is in view
  //     //     start: "top 15%", // Start the animation when the top of the element is 20% down the viewport
  //     //     end: `+=${amountToScroll} * -1`, // The distance to scroll before ending the animation
  //     //     pin: true, // Pin the section while scrolling
  //     //     scrub: true,
  //     //     invalidateOnRefresh: true,
  //     //     markers: true, // Enable scrubbing to match the scroll position both forward and backward
  //     //   },
  //     // });
  //     console.log("jo")
  //     gsap.to(".outer", {
  //       scale: 0.7,
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: ".outer", // Target the .box div for scroll
  //         start: "top 15%", // Start when the top of the box hits 85% of the viewport
  //         end: "bottom 15%", // End when the bottom of the box hits 15% of the viewport
  //         scrub: 1, // Smooth animation linked to scroll
  //         markers: true, // Debugging markers to show start and end points
  //       },
  //     });
  //   }
  // }, []); // Re-run this effect when amountToScroll changes

  return (
    <div className="main flex md:block  w-[100%] h-max  bg-black relative overflow-hidden mb-20 ">
      {/* <section className="wrapper-404 absolute  lg:top-0 w-[400vw] h-[100vh] ">
        <h1 className="cursor-pointer text-[48vw] text-white font-bold mb-10 absolute bottom-[-20%]">
          Our Work
        </h1>
        <div className="w-[200px] h-[200px] absolute top-[10%] left-[5%] ">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-[200px] h-[200px] absolute top-[5%] left-[52%] ">
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-[200px] h-[200px] absolute top-[0%] left-[30%]">
          <img
            src={img2}
            alt=""
            className="w-full h-full object-cover rounded-xl "
          />
        </div>
        <div className="w-[200px] h-[200px] absolute bottom-[10%] left-[18%]">
          <img
            src={img3}
            alt=""
            className="w-full h-full object-cover rounded-xl "
          />
        </div>
        <div className="w-[200px] h-[200px] absolute bottom-[15%] left-[40%]">
          <img
            src={img4}
            alt=""
            className="w-full h-full object-cover rounded-xl "
          />
        </div>
      </section> */}
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
       
          <Link to="/get-in-touch" className="text-sm px-4 py-2 md:px-5 md:mt-7 md:py-2 font-extrabold md:text-xl rounded-full bg-[#F06292] text-white hover:text-black hover:bg-white transition-all duration-500">
          Get Started
      </Link>
        </div>
      </section>
    </div>
  );
};

export default Work;
