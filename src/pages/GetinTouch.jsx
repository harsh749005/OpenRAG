import React, { useRef } from "react";
import VariableProximity from "../components/reactBits/VariableProximity";

const GetinTouch = () => {
  const containerRef = useRef(null);
  return (
    <div
      className="w-full pt-20  bg-black relative"
      ref={containerRef}
      style={{ position: "relative" }}
    >
      <div className="w-[800px] m-auto">
        <div className="w-full h-max m-auto">
          <VariableProximity
            label={"GET IN "}
            className={
              "variable-proximity-demo text-white text-[8vw] cursor-pointer"
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
              "variable-proximity-demo text-white text-[8vw] cursor-pointer"
            }
            fromFontVariationSettings="'wght' 300, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="exponential"
          />
        </div>
        <div className="w-full flex flex-col gap-10 mt-5">
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-white w-max font-bold text-2xl font-sans"
            >
              Name*
            </label>
            <input
              required
              type="text"
              className="w-full bg-transparent text-white font-sans outline-none text-xl px-2 py-4 border-b-2 border-[#565656]"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-white w-max font-bold text-2xl font-sans"
            >
              Email Address *
            </label>
            <input
              required
              type="text"
              className="w-full bg-transparent text-white font-sans outline-none text-xl px-2 py-4 border-b-2 border-[#565656]"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <label
              htmlFor="name"
              className="text-white w-max font-bold text-2xl font-sans"
            >
              Where did you hear about us?
            </label>
            <div className="flex items-center gap-4">
              <input
                required
                type="button"
                value="Linkedin"
                className="w-max cursor-pointer border-2  rounded-full bg-transparent text-white font-sans outline-none text-xl font-medium px-4 py-2"
              />
              <input
                required
                type="button"
                value="Referral"
                className="w-max cursor-pointer border-2  rounded-full bg-transparent text-white font-sans outline-none text-xl font-medium px-4 py-2"
              />
              <input
                required
                type="button"
                value="Other"
                className="w-max cursor-pointer border-2  rounded-full bg-transparent text-white font-sans outline-none text-xl font-medium px-4 py-2"
              />
            </div>
          </div>
          <button className="w-max px-8 py-4 font-extrabold text-2xl rounded-full bg-[#F06292] text-white hover:text-black hover:bg-white transition-all duration-500">
            SUBMIT
          </button>
        </div>

      </div>
    </div>
  );
};

export default GetinTouch;
