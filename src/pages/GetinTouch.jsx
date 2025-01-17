import React, { useEffect, useRef } from "react";
import VariableProximity from "../components/reactBits/VariableProximity";

const GetinTouch = () => {
  const containerRef = useRef(null);
;
  return (
    <div
      className="w-[100vw] lg:w-full h-[200vh] md:h-[100%] pt-20  bg-black relative " // height of the container applied pervious it was not set
      ref={containerRef}
      style={{ position: "relative" }}
    >
      <div className="w-full lg:w-[60vw] m-auto">
        <div className="w-full h-max m-auto px-4">
          <VariableProximity
            label={"GET IN "}
            className={
              "variable-proximity-demo text-white text-[12vw] md:text-[8vw] cursor-pointer"
            }
            fromFontVariationSettings="'wght' 500, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="exponential"
          />
          <VariableProximity
            label={"TOUCH"}
            className={
              "variable-proximity-demo text-white text-[12vw] md:text-[8vw] cursor-pointer"
            }
            fromFontVariationSettings="'wght' 300, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="exponential"
          />
        </div>
        <div className="w-full flex flex-col gap-10 mt-5 px-4">
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-white w-max font-bold text-lg md:text-2xl font-sans"
            >
              Name*
            </label>
            <input
              required
              type="text"
              className=" w-[90vw] md:w-full bg-transparent text-white font-sans outline-none text-lg md:text-xl px-2 py-4 border-b-2 border-[#565656]"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-white w-max font-bold text-lg md:text-2xl font-sans"
            >
              Email Address *
            </label>
            <input
              required
              type="text"
              className="w-[90vw] md:w-full bg-transparent text-white font-sans outline-none text-xl px-2 py-4 border-b-2 border-[#565656]"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <label
              htmlFor="name"
              className="text-white w-max font-bold text-lg md:text-2xl font-sans"
            >
              Where did you hear about us?
            </label>
            <div className="flex items-center gap-4">
              <input
                required
                type="button"
                value="Linkedin"
                className="w-max cursor-pointer border-2  rounded-full bg-transparent text-white font-sans outline-none text-md px-4 py-1 md:text-xl font-medium md:px-4 md:py-2"
              />
              <input
                required
                type="button"
                value="Referral"
                className="w-max cursor-pointer border-2  rounded-full bg-transparent text-white font-sans outline-none text-md px-4 py-1 md:text-xl font-medium md:px-4 md:py-2"
              />
              <input
                required
                type="button"
                value="Other"
                className="w-max cursor-pointer border-2  rounded-full bg-transparent text-white font-sans outline-none text-md px-4 py-1 md:text-xl font-medium md:px-4 md:py-2"
              />
            </div>
          </div>
          <button className="w-max px-4 py-2 text-lg md:px-8 md:py-4 font-extrabold md:text-2xl rounded-full bg-[#F06292] text-white hover:text-black hover:bg-white transition-all duration-500">
            SUBMIT
          </button>
        </div>

      </div>
    </div>
  );
};

export default GetinTouch;
