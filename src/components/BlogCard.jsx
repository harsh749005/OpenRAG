import React, { useEffect, useRef, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import SpotlightCard from "../components/reactBits/SpotlightCard";
import { Link } from "react-router-dom";
const BlogCard = () => {
  const containerRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
        <SpotlightCard
          className="w-80 h-96 cursor-pointer rounded-md"
          spotlightColor="rgba(255, 255, 255, 0.25)"
        >
          <div className="flex flex-col gap-5 bg-transparent">
            <div className="flex items-center justify-between bg-transparent">
              <p className="text-gray-300 font-sans text-[12px] bg-transparent">
                Sep 28, 2024 • 2 min read
              </p>
              
              <IoMdShare className="text-gray-300 cursor-pointer bg-transparent"/>
              
            </div>
            <Link to='/OpenRAG/readblogs' className="flex flex-col gap-5 bg-transparent">
              <h1 className="text-white font-medium font-sans text-xl bg-transparent">
                Alert‼️ ANNOUNCEMENT coming your way&nbsp;💥💥
              </h1>
              <p className="font-sans text-lg text-gray-300 bg-transparent">
                Hey everyone! since the past one month we have been working on
                it and today is the day, where all the things are getting
                revealed to...
              </p>
            </Link>
            <div className="pt-8 flex items-center justify-between bg-transparent">
              <div className="flex gap-4 items-center bg-transparent">
                <IoEyeOutline className="text-gray-300 cursor-pointer bg-transparent" />
                <BiCommentDetail className="text-gray-300 cursor-pointer bg-transparent" />
              </div>
              <div className="w-max h-max" onClick={handleClick}>
                {clicked ? (
                  <FaHeart
                    className="text-red-400 cursor-pointer transition-all duration-500  ease-linear"
                    style={{ opacity: clicked ? "10" : "0" }}
                  />
                ) : (
                  <FaRegHeart className="text-red-400 cursor-pointer transition-all duration-500 ease-linear" />
                )}
                {/* <FaRegHeart className="text-red-500 cursor-pointer" /> */}
              </div>
            </div>
          </div>
        </SpotlightCard> 
    </>
  );
};

export default BlogCard;
