import React, { useEffect, useRef, useState } from "react";

import { IoEyeOutline } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa";
import SpotlightCard from "../components/reactBits/SpotlightCard";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
const ReadBlogs = () => {
  const containerRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="w-full  bg-black pt-36">
      <div className="w-[80%] h-full bg-black pb-12 m-auto flex flex-col gap-2">
        <div className="w-full h-full">
          <SpotlightCard
            className="w-full h-full rounded-md"
            spotlightColor="rgba(255, 255, 255, 0.25)"
          >
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between ">
                <p className="text-gray-300 font-sans text-[12px]">
                  Sep 28, 2024 • 2 min read
                </p>

                <IoMdShare className="text-gray-300 cursor-pointer" />
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-white font-medium font-sans text-4xl">
                  Alert‼️ ANNOUNCEMENT coming your way&nbsp;💥💥
                </h1>
                <p className=" w-full h-full font-sans text-lg text-gray-300 ">
                  Hey everyone!! This blog is going to be a quite different as
                  in this blog I am going to tell you about Nisharg
                  Nargund(Myself) and my mate{" "}<br/>
                  <Link
                  target="_blank"
                    to="https://medium.com/@mitulgoswami1212"
                    className="px-2 bg-red-400 text-black"
                  >
                    Mitul Goswami 's
                  </Link>{" "}
                  new startup named OpenRAG . From past one year we have been
                  working in the field of Artificial Intelligence and Machine
                  Learning as a team. The main aim behind this was to develop
                  advanced RAG Systems to solve real life issues along with
                  creating an environment where everyone should be familiar with
                  RAG techniques and new updates on GenerativeAI and in the
                  field of Large Language Models. Our goal is to aware the
                  audience with latest and unexplored technologies with our
                  social media account. You can follow us and stay aware about
                  the Updates in the field of LLMs, get more familiar with
                  chatbot industries and new technologies coming up. SUBSCRIBE
                  and GET IN TOUCH with us through filling the form given on the
                  website. THANK YOU
                </p>
              </div>
              
              <div className="w-max  flex items-center gap-6 py-2 px-2">
                   <GrFacebookOption className="text-gray-300 scale-110 transition-all ease-linear hover:text-white cursor-pointer"/>
                   <FaXTwitter className="text-gray-300 scale-110 transition-all ease-linear hover:text-white cursor-pointer"/>
                   <RiLinkedinFill  className="text-gray-300 scale-110 transition-all ease-linear hover:text-white cursor-pointer"/>
                   <FaLink className="text-gray-300 scale-110 transition-all ease-linear hover:text-white cursor-pointer"/>
                </div>
                <hr className="bg-white"/>
              <div className="pt-6 flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <IoEyeOutline className="text-gray-300 cursor-pointer" /><p className="text-sm text-gray-300">20 views</p>
                  <BiCommentDetail className="text-gray-300 cursor-pointer" /> <p className="text-sm text-gray-300">0 comments</p>
                </div>
                
                <div className="w-max h-max" onClick={handleClick}>
                  {clicked ? (
                    <FaHeart
                      className="text-red-500 cursor-pointer transition-all duration-500 ease-linear"
                      style={{ opacity: clicked ? "10" : "0" }}
                    />
                  ) : (
                    <FaRegHeart className="text-red-500 cursor-pointer transition-all duration-500 ease-linear" />
                  )}
                  {/* <FaRegHeart className="text-red-500 cursor-pointer" /> */}
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
        <div className="w-full bg-black pt-10 ">
                  <div className="flex items-center justify-between">
                    <h1 className="text-gray-300 text-lg">Recent Posts</h1>
                    <Link className="text-gray-300 hover:text-white cursor-pointer" to='/blogs'>see more</Link>
                  </div>
        <div className="w-full h-full bg-black flex items-center gap-4 flex-wrap pt-10">
                  <BlogCard/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBlogs;
