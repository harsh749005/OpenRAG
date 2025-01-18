import React from "react";
import SpotlightCard from "../components/reactBits/SpotlightCard";
import CountUp from "../components/reactBits/Count";
import AnimatedContent from "../components/reactBits/Animated";
const Feature = () => {
  return (
    <>
      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={.5}
        threshold={0.2}
      >
        <div class="flex flex-col gap-6 p-2 justify-center md:flex md:flex-row md:justify-center md:gap-6 md:p-5 ">
          <SpotlightCard
            className="cursor-pointer rounded-md "
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <div class="text-white text-4xl md:text-xl lg:text-4xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#AD49BD]">
              <CountUp
                from={0}
                to={5}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </div>
            <div class=" text-lg md:text-sm lg:text-lg text-white font-semibold mt-2">
              Cutting-Edge Products
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="cursor-pointer rounded-md"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <div class="text-white text-4xl md:text-xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#AD49BD]">
              <CountUp
                from={0}
                to={1000}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </div>
            <div class="text-lg md:text-sm lg:text-lg text-white font-semibold mt-2">
              Data Processed Per Day
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="cursor-pointer rounded-md "
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <div class=" pr-4  text-white text-4xl md:text-xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#AD49BD]">
              <h1>Global</h1>
            <div class="text-lg  lg:text-lg text-white font-semibold mt-2">Presence</div>
            </div>
          </SpotlightCard>

          <SpotlightCard
            className="cursor-pointer rounded-md"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <div class="text-white text-4xl md:text-xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-[#AD49BD]">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </div>
            <div class="text-lg md:text-sm lg:text-lg text-white font-semibold mt-2">
              Successful Implementations
            </div>
          </SpotlightCard>
        </div>
      </AnimatedContent>
    </>
  );
};

export default Feature;
