import React, { useEffect, useRef, useState } from "react";
import VariableProximity from "../components/reactBits/VariableProximity";
import "./styles/Products.css";
import { Link } from "react-router-dom";
const Products = () => {
  const containerRef = useRef(null);
  return (
    <div className="w-full h-[200vh] bg-black pt-36 mb-20">
      <div className="w-[80%] h-full bg-black m-auto flex flex-col gap-2">
        <div
          ref={containerRef}
          style={{ position: "relative" }}
          className="w-max h-max"
        >
          <VariableProximity
            label={"Products"}
            className={
              "variable-proximity-demo text-white text-[8vw] cursor-pointer"
            }
            fromFontVariationSettings="'wght' 500, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <div className="w-full h-[100vh]  pt-10 pb-10 flex items-center justify-between">
          <div className="leftContent w-96 h-full  flex-1">
            <h1 className="text-white font-bold text-2xl font-sans">
              The LLM Playground
            </h1>
            <p className="text-white text-lg pt-5 ">
              <ul className=" list-disc text-gray-300 px-6">
                <li className="font-sans">
                  LLM playground is a simulation of all the AI models currently
                  trending in the world . where you can compare two AI models by
                  giving them coding questions or any expert question and let
                  the LLM show how capable it is.
                </li>
              </ul>
            </p>
          </div>
          <div className="w-10 h-full  pt-10 pb-10 relative flex flex-col">
            <div className="line absolute left-[50%] w-1 h-16  bg-white m-auto transition-all duration-700 ease-linear"></div>
            <Link
              to="https://langvault-web-1.onrender.com/"
              target="_blank"
              className="buttonFade absolute left-[-90%] top-[30%] bg-white px-2 py-2 rounded-md text-[#10a37f] font-bold text-xl w-max h-max z-20 "
            >
              LangVault
            </Link>
            <Link
              to="https://langvault-web-1.onrender.com/"
              target="_blank"
              className="button2Fade absolute left-[-110%] top-[75%] bg-white px-2 py-2 rounded-md text-[#10a37f] font-bold text-xl w-max h-max z-20 "
            >
              DocDynamo
            </Link>
          </div>
          <div className="rightContent w-96 h-full  flex-1 pt-72">
            <h1 className="text-white font-bold text-2xl font-sans">
              DocDynamo
            </h1>
            <p className="text-white text-lg pt-5 ">
              <ul className=" list-disc text-gray-300 px-6">
                <li className="font-sans">
                  LLM playground is a simulation of all the AI models currently
                  trending in the world . where you can compare two AI models by
                  giving them coding questions or any expert question and let
                  the LLM show how capable it is.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
