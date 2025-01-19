import React, { useEffect, useRef, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import SpotlightCard from "../components/reactBits/SpotlightCard";
import { Link } from "react-router-dom";
import data from './blogs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; 

const BlogCard = () => {
  const containerRef = useRef(null);
  const handleShare = (id) => {
    navigator.clipboard.writeText(`https://harsh749005.github.io/OpenRAG/readblogs/${id}`);
    showToast('Link copied')

  }
  const [clicked, setClicked] = useState(false);
  const [dataID,setdataID] = useState();
  const handleClick = (id) => {
    setdataID(data[id-1].id);
    console.log(dataID);
    setClicked(!clicked)
  };

  const showToast = (message) => {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    };
  return (
    <>
    {
        data.map((blog)=>(
<SpotlightCard
key={blog.id}
          className="w-[90vw] md:w-80 md:h-96 cursor-pointer rounded-md "
          spotlightColor="rgba(255, 255, 255, 0.25)"
        >
          <div className="flex flex-col gap-5 bg-transparent">
            <div className="flex items-center justify-between bg-transparent">
              <p className="text-gray-300 font-sans text-[12px] bg-transparent">
                Sep 28, 2024 • 2 min read
              </p>
              
              <IoMdShare onClick={()=>handleShare(blog.id)} className="text-gray-300 cursor-pointer bg-transparent"/>
              
            </div>
            <Link to={`/OpenRAG/readblogs/${blog.id}`} className="flex flex-col gap-5 bg-transparent">
              <h1 className="text-white font-medium font-sans text-xl bg-transparent">
                {blog.title}
              </h1>
              <p className="font-sans text-lg text-gray-300 bg-transparent line-clamp-6">
                {blog.content}
              </p>
            </Link>
            <div className="pt-8 xl:pt-2 flex items-center justify-between bg-transparent">
              <div className="flex gap-4 items-center bg-transparent">
                <IoEyeOutline className="text-gray-300 cursor-pointer bg-transparent" />
                <BiCommentDetail className="text-gray-300 cursor-pointer bg-transparent" />
              </div>
              <div className="w-max h-max " onClick={()=>handleClick(blog.id)}>
                {dataID === blog.id && clicked? (
                  <FaHeart
                    className="text-red-400 cursor-pointer transition-all duration-500  ease-linear"
                    // style={{ opacity: dataID === blog.id  ? "10" : "0" }}
                  />
                ) : (
                  <FaRegHeart  className="text-red-400 cursor-pointer transition-all duration-500 ease-linear" />
                )}
                {/* <FaRegHeart className="text-red-500 cursor-pointer" /> */}
              </div>
            </div>
          </div>
        </SpotlightCard> 
        ))
    }
        <ToastContainer/>
    </>
  );
};

export default BlogCard;
