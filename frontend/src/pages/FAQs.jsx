import React, { useEffect, useRef, useState } from "react";
import VariableProximity from "../components/reactBits/VariableProximity";
import { IoMdAdd } from "react-icons/io";
import "./styles/Events.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; 

const FAQs = () => {
      const containerRef = useRef(null);
      const [selectedId, setSelectedId] = useState(null);
      const [BottomPosition, setBottomPosition] = useState(0);
    
      const handleToggle = (id) => {
        setSelectedId((prevId) => (prevId === id ? null : id));
      };
      const ref = useRef(null);
      
      useEffect(() => {
        const rect = ref.current.getBoundingClientRect();
        setBottomPosition(Math.floor(rect.bottom - 100));
        console.log(BottomPosition);
        console.log(selectedId);
      }, [selectedId]);

      const openGmail = () => {
        const recipient = 'nisarg.nargund@gmail.com';
        const subject = 'Inquiry';
        const body = 'Hi there, I would like to ask about...';
        navigator.clipboard.writeText('nisarg.nargund@gmail.com');
        showToast('Mail ID Copied')
        // const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        const gmailUrl = 'https://mail.google.com/mail/u/0/#inbox?compose=new'
        setInterval(
          () => {
            window.open(gmailUrl, '_blank')
          },
          1000 // 1 minute
        )
        ; // Opens Gmail in a new tab
      }
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
    <div className="w-full h-[300vh] md:h-[200vh] bg-black pt-36">
          <div className="w-[90%] pl-2 pr-2 h-full bg-black m-auto flex flex-col gap-2">
            {/* heading */}
            <div
              ref={containerRef}
              style={{ position: "relative" }}
              className="w-max h-max"
            >
              <VariableProximity
                label={"FAQs"}
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
            {/* 1 */}
            <div
              className={`cursor-pointer w-full h-[68px] md:h-16  flex flex-col items-center gap-2 relative  overflow-${
                selectedId === 1 ? "auto" : "hidden"
              } px-4`}
            >
              <div
                onClick={() => handleToggle(1)}
                className="absolute z-10 w-full top-0 bg-black flex items-center justify-between"
              >
                <h1 className="text-lg  md:text-2xl lg:text-4xl text-white">
                  1. What does OpenRAG do?{" "}
                </h1>
                <div
                  style={{ rotate: selectedId === 1 ? "45deg" : "0deg" }}
                  className="transition-all duration-500 ease-linear "
                >
                  {selectedId === 1 ? (
                    <IoMdAdd className=" text-white text-2xl md:text-4xl " />
                  ) : (
                    <IoMdAdd className=" text-white text-2xl md:text-4xl" />
                  )}
                </div>
              </div>
              <div
                
                style={{
                  top: selectedId === 1 ? "80px" : "0px",
                  opacity: selectedId === 1 ? "100" : "0",
                }}
                className=" w-full absolute transition-all duration-700  ease-linear  text-white "
              >
                <p className="text-xl text-gray-100 ">
                  {""}
                </p>
                <ul ref={ref} className="list-disc flex flex-col gap-2 mt-2 relative">
                  <li className="">
                  OpenRAG is dedicated to democratize generativeAI. So, we develop RAGbots, generativeAI agents and tools that are customizable, scalable and capable of solving the problems of individuals. Additionally, OpenRAG is dedicated to advance generative community by conducting and organizing sessions, workshops and hackathons.  
                  </li>

              
                </ul>
              </div>
            </div>
            {/* 2 */}
            <div
              style={{ top: `${selectedId === 1 ? BottomPosition + "px" : "0px"}` }}
              className={`cursor-pointer w-full h-24  md:h-16 ease-linear flex flex-col items-center gap-2 relative  transition-all duration-700   overflow-${
                selectedId === 2 ? "auto" : "hidden"
              } px-4`}
            >
              <div
                onClick={() => handleToggle(2)}
                className="z-20 absolute w-full top-0  bg-black  flex items-center justify-between"
              >
                <h1 className="text-lg  md:text-2xl lg:text-4xl text-white">2. What are the generativeAI events conducted by OpenRAG? </h1>
                <div
                  style={{ rotate: selectedId === 2 ? "45deg" : "0deg" }}
                  className="transition-all duration-500 ease-linear "
                >
                  {selectedId === 2 ? (
                    <IoMdAdd className=" text-white  text-2xl md:text-4xl" />
                  ) : (
                    <IoMdAdd className=" text-white  text-2xl md:text-4xl" />
                  )}
                </div>
              </div>
              <div
                style={{ top: selectedId === 2 ? "80px" : "10px",opacity: selectedId === 2 ? "100" : "0" }}
                className='w-full absolute transition-all duration-700  ease-linear  text-white '
              >
                <p className="text-xl text-gray-100 ">
                  {""}
                </p>
                <ul className="list-disc flex flex-col gap-2  md:mt-2">
                 
                  <li className="mt-8 md:mt-0">
                  OpenRAG has conducted two sessions and one hackathons i.e. two individually and hackathon in collabration with another startup Axamine ai nationwide.  We got bumper responses from all of three events and the participation was above the limit.{" "}
                    
                  </li>
                </ul>
              </div>
            </div>
            {/* 3 */}
            <div
              style={{
                top:
                  selectedId === null || selectedId === 3
                    ? "0px"
                    : BottomPosition + "px",
              }}
              className={`cursor-pointer w-full h-[68px] md:h-16  ease-linear  flex flex-col items-center gap-2 relative  transition-all duration-700   overflow-${
                selectedId === 3 ? "auto" : "hidden"
              } px-4`}
            >
              <div
                onClick={() => handleToggle(3)}
                className="z-20 absolute w-full top-0 bg-black flex items-center justify-between"
              >
                <h1 className="text-lg  md:text-2xl lg:text-4xl text-white">
                  3. How can you join OpenRAG?{" "}
                </h1>
                <div
                  style={{ rotate: selectedId === 3 ? "45deg" : "0deg" }}
                  className="transition-all duration-500 ease-linear "
                >
                  {selectedId === 3 ? (
                    <IoMdAdd className="text-white  text-2xl md:text-4xl" />
                  ) : (
                    <IoMdAdd className=" text-white  text-2xl md:text-4xl" />
                  )}
                </div>
              </div>
              <div
                style={{ top: selectedId === 3 ? "80px" : "10px",opacity: selectedId === 3 ? "100" : "0"  }}
                className='w-full absolute transition-all duration-700  ease-linear text-white '
              >
                <p className="text-xl text-gray-100 ">
                  {""}
                </p>
                <ul className="list-disc flex flex-col gap-2 mt-2">
                  <li className="">
                  The person who wants to join  OpenRAG, needs to be passionate to work dedicated to the given timelines and should be good at generativeAI. If all the qualities mentioned above matches to you, kindly mail our founder Nisharg Nargund your CV and your itnroduction along with a e-mail subject, "Aiming to Join OpenRAG".<br/>
                  <p className="flex items-center mt-4">Email I'd:<p onClick={openGmail} className="w-max font-bold ml-1 text-emerald-300 px-2 cursor-pointer"> nisarg.nargund@gmail.com</p></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
           <ToastContainer/>
        </div>
  )
}

export default FAQs
