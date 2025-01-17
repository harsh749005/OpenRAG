import React from "react";
import SpotlightCard from "../components/reactBits/SpotlightCard";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.jpg";
import GradientText from "../components/reactBits/GradientText";
const Founders = () => {
  return (
    <div className="w-[90%] h-max pb-2 md:w-[80%] lg:h-[120vh] m-auto">
      <SpotlightCard
        className="w-full h-full flex "
        spotlightColor="rgba(255, 255, 255, 0.25)"
      >
        <div className=" ">
          <GradientText
            colors={["#AD49BD", "#C86BCF", "#8C2C99", "#F06292", "#6759FF"]}
            animationSpeed={3}
            showBorder={false}
            className="text-2xl md:text-4xl  text-left text-white p-2 sm:mt-0  lg:text-center lg:mt-40"
          >
            Book a 1-on-1 onboarding
          </GradientText>
       
          <p className="text-gray-300 mt-16 font-sans">
            Get up and running as fast as possible with the personalised <br />
            onboarding call We'll show you how everything works and <br />
            and how you can get started with Unititled .
          </p>
          {/* <GradientText
            colors={["#AD49BD", "#C86BCF", "#8C2C99", "#F06292", "#6759FF"]}
            animationSpeed={3}
            showBorder={true}
            className=" font-bold mt-7 px-10 py-3"
          >
            Book Now
          </GradientText> */}
          <button className="b-white px-5 mt-7 py-2 font-extrabold text-xl rounded-full bg-[#F06292] text-white hover:text-black hover:bg-white transition-all duration-500">
          Book Now
      </button>
          {/* <button className="text-black font-bold mt-7 px-10 py-3 bg-white rounded-full"></button> */}
        </div>
        <div className=" flex-1 h-max relative p-12 lg:flex hidden">
          <div className="w-64 h-64 absolute top-52 bg-white p-2 rounded-xl cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-300">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={image1}
              alt=""
            />
          </div>
          <div className="w-64 h-64 absolute left-72 top-96 bg-white p-2 rounded-xl cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-300">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={image2}
              alt=""
            />
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default Founders;
