import React, { useEffect, useRef, useState } from "react";
import VariableProximity from "../components/reactBits/VariableProximity";
import { IoMdAdd } from "react-icons/io";
import "./styles/Events.css";
import founder1 from "../assets/images/founderMeet1.png";
import founder2 from "../assets/images/founderMeet2.png";
import founder from "../assets/images/image1.png";
import cofounder from "../assets/images/image2.jpg";
const Events = () => {
  const containerRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null);
  const [BottomPosition, setBottomPosition] = useState(0);

  const handleToggle = (id) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };
  const ref = useRef(null);
  useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    setBottomPosition(Math.floor(rect.bottom - 20));
    console.log(BottomPosition);
    console.log(selectedId);
  }, [selectedId]);
  return (
    <div className="w-full h-[300vh] md:h-[200vh] bg-black pt-36">
      <div className="w-[90%] h-full pl-2 pr-2 bg-black m-auto flex flex-col gap-2">
        {/* heading */}
        <div
          ref={containerRef}
          style={{ position: "relative" }}
          className="w-max h-max"
        >
          <VariableProximity
            label={"Events"}
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
        
          className={`cursor-pointer w-full h-[68px] md:h-12  flex flex-col items-center gap-2 relative  overflow-${
            selectedId === 1 ? "auto" : "hidden"
          } px-4`}
        >
          <div
            onClick={() => handleToggle(1)}
            className=" absolute z-10 w-full  top-0 bg-black flex items-center justify-between"
          >
            <h1 className="text-lg text-white md:text-4xl">
              1. AI FOR INDIA: A pan India generativeAI Hackathon{" "}
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
            ref={ref}
            style={{
              top: selectedId === 1 ? "80px" : "0px",
              opacity: selectedId === 1 ? "100" : "0",
            }}
            className=" w-full absolute transition-all duration-700  ease-linear  text-white "
          >
            <p className="text-xl text-gray-100 ">
              Events Date: 3rd July 2024 - 7th July 2024
            </p>
            <ul className="list-disc flex flex-col gap-2 mt-2 relative">
              <li className="">
                GenAl Expert Sessions: Participants gained insights from
                <span className="founderName bg-emerald-300 cursor-pointer px-2 text-black font-bold">
                  Mr. Subham Ojha{" "}
                  <div className="founderImg w-60 h-80 border-4 border-white rounded-xl">
                    <img
                      src={founder1}
                      alt=""
                      className=" w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </span>{" "}
                , Founder of CX Guru and a renowned GenAl Expert, during our
                featured speaker session on Generative Al.
              </li>
              <li>
                1:1 Mentoring with another GenAl Expert{" "}
                <span className="founderName bg-emerald-300 cursor-pointer px-2 text-black font-bold">
                  Mr.Etibar Aliyev{" "}
                  <div className="founderImg2 w-60 h-80 border-4 border-white rounded-xl">
                    <img
                      src={founder2}
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </span>{" "}
                : Attendees received personalized mentoring from another dynamic
                founder of a leading GenAl startup, providing guidance on how to
                excel in this field.
              </li>
              <li>
                Prizes and Opportunities: Winners received certificates and
                internship opportunities with our startups. Additionally, they
                were featured on OpenRAG and AxamineAl's official Instagram and
                Linkedin handles.
              </li>
              <li>
                Learning and Networking: Participants enhanced their skills and
                expanded their professional networks in the Al community.
              </li>
              <li>
                Recognition and Exposure: Attendees showcased their work and got
                recognized on major social media platforms.
              </li>
              <li>
                Success Stories: Over 120 registrations, development of 10+
                GenAl models, and multiple submissions marked the success of the
                hackathon.
              </li>
            </ul>
          </div>
        </div>
        {/* 2 */}
        <div
          style={{ top: `${selectedId === 1 ? BottomPosition + "px" : "0px"}` }}
          className={`cursor-pointer w-full h-[68px] md:h-12 ease-linear flex flex-col items-center gap-2 relative  transition-all duration-700   overflow-${
            selectedId === 2 ? "auto" : "hidden"
          } px-4`}
        >
          <div
            onClick={() => handleToggle(2)}
            className="z-20 absolute w-full top-0 bg-black flex items-center justify-between"
          >
            <h1 className="text-lg text-white md:text-4xl">2. Intellectra </h1>
            <div
              style={{ rotate: selectedId === 2 ? "45deg" : "0deg" }}
              className="transition-all duration-500 ease-linear "
            >
              {selectedId === 2 ? (
                <IoMdAdd className=" text-white text-2xl md:text-4xl " />
              ) : (
                <IoMdAdd className=" text-white text-2xl md:text-4xl" />
              )}
            </div>
          </div>
          <div
            style={{ top: selectedId === 2 ? "80px" : "10px",opacity:selectedId === 2 ? "100" : "0" }}
            className='w-full absolute transition-all duration-700  ease-linear  text-white '
          >
            <p className="text-xl text-gray-100 ">
              Events Date: 3rd July 2024 - 7th July 2024
            </p>
            <ul className="list-disc flex flex-col gap-2 mt-2">
              <p className="font-bold">
                SPONSORS :{" "}
                <span className="bg-emerald-300 text-black font-bold text-lg px-2 w-max ">
                  {" "}
                  DAMNSOCIAL
                </span>
              </p>
              <li className="">
                This generative AI and machine learning session drew over{" "}
                <span className="bg-emerald-300 text-black font-bold text-lg px-2 w-max ">
                  {" "}
                  200 attendees
                </span>
                , cementing OpenRAG’s reputation within the community. The
                session provided an introduction to NLP and Generative AI and
                diving deep into the world and maths behind the Large Language
                Models , empowering attendees to take their first steps into AI.
                Session conducted by the{" "}
                <span className="cofounderName bg-emerald-300 text-black font-bold text-lg px-2 w-max ">
                  CO-FOUNDER
                  <div className="cofounderImg1 w-60 h-80 border-4 border-white rounded-xl">
                    <img
                      src={cofounder}
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </span>
                and
                <span className="cofounderName bg-emerald-300 text-black font-bold text-lg px-2 w-max ">
                  FOUNDER
                  <div className="cofounderImg2 w-60 h-80 border-4 border-white rounded-xl">
                    <img
                      src={founder}
                      alt=""
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </span>
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
          className={`cursor-pointer w-full h-[68px] md:h-12  ease-linear  flex flex-col items-center gap-2 relative  transition-all duration-700   overflow-${
            selectedId === 3 ? "auto" : "hidden"
          } px-4`}
        >
          <div
            onClick={() => handleToggle(3)}
            className="z-20 absolute w-full top-0 bg-black flex items-center justify-between"
          >
            <h1 className="text-lg text-white md:text-4xl">
              3. AI FOR INDIA: A pan India generativeAI Hackathon{" "}
            </h1>
            <div
              style={{ rotate: selectedId === 3 ? "45deg" : "0deg" }}
              className="transition-all duration-500 ease-linear "
            >
              {selectedId === 3 ? (
                <IoMdAdd className=" text-white text-2xl md:text-4xl  " />
              ) : (
                <IoMdAdd className=" text-white text-2xl md:text-4xl " />
              )}
            </div>
          </div>
          <div
            style={{ top: selectedId === 3 ? "80px" : "10px",opacity:selectedId === 3? 100 : 0 }}
            className=' w-full absolute transition-all duration-700  ease-linear text-white '
          >
            <p className="text-xl text-gray-100 ">
              Events Date: 3rd July 2024 - 7th July 2024
            </p>
            <ul className="list-disc flex flex-col gap-2 mt-2">
              <li className="">
                GenAl Expert Sessions: Participants gained insights from Mr.
                Subham Ojha, Founder of CX Guru and a renowned GenAl Expert,
                during our featured speaker session on Generative Al.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
