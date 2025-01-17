import React, { useRef} from "react";

import VariableProximity from "../components/reactBits/VariableProximity";

import BlogCard from "../components/BlogCard";
const Blogs = () => {
  const containerRef = useRef(null);

  return (
    <div className="w-full h-[300vh] md:h-[200vh] bg-black pt-36">
        
      <div className="w-[90%] h-full bg-black pb-12 m-auto flex flex-col gap-2">
        <div
          ref={containerRef}
          style={{ position: "relative" }}
          className="w-max h-max"
        >
          <VariableProximity
            label={"Blogs"}
            className={
              "variable-proximity-demo text-white text-[12vw] md:text-[8vw] cursor-pointer"
            }
            fromFontVariationSettings="'wght' 500, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff="linear"
          />
        </div>
        <div className=" w-max h-max flex flex-col items-center gap-5 md:w-full md:flex-row md:flex md:items-center md:gap-5 md:flex-wrap">
       <BlogCard/>
       <BlogCard/>
       <BlogCard/>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
