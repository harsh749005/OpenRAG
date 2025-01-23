import React, { useEffect, useRef, useState } from "react";
import VariableProximity from "../components/reactBits/VariableProximity";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; 

const GetinTouch = () => {
  const backendBaseUrl = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;
  const containerRef = useRef(null);
  const [name,setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [selectedOption, setSelectedOption] = useState("");
  axios.defaults.withCredentials = true;
  const handleOption = (e) => {
    const optionValue = e.target.value;
    setSelectedOption(prevOption => prevOption === optionValue  ? '' : optionValue );
  };
  
  useEffect(()=>{
    console.log(selectedOption);
  },[selectedOption])
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
  const handleSubmit =  (e)=> {
    e.preventDefault();
    const values = {
      name,
      email,
      selectedOption,
      description,
    }
    // Send form data to your server here
    axios.defaults.withCredentials = true;
    axios.post(`${backendBaseUrl}/create`, values)
     .then((response) => {
        
        setName('');
        setEmail('');
        setSelectedOption('');
        setDescription('');
        showToast("Thank you for your message! We'll get back to you soon.");
      })
      .catch((error)=>{
        
        showToast("Failed to send message. Please try again.");
      })
    
  }
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
        <form onSubmit={handleSubmit}  className="w-full flex flex-col gap-10 mt-5 px-4">
          <div className="w-full flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-white w-max font-bold text-lg md:text-2xl font-sans"
            >
              Name*
            </label>
            <input
            value={name}
            onChange={(e)=> setName(e.target.value)}
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
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
              required
              type="email"
              className="w-[90vw] md:w-full bg-transparent text-white font-sans outline-none text-xl px-2 py-4 border-b-2 border-[#565656]"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-white w-max font-bold text-lg md:text-2xl font-sans"
            >
              Description *
            </label>
            <textarea
            style={{scrollbarWidth: "none", overflow: "hidden", resize: "none" }}
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
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
            {['LinkedIn', 'Referral', 'Other'].map((option) => (
                <input
                  key={option}
                  onClick={handleOption}
                  value={option}
                  style={{
                    backgroundColor: selectedOption === option ? "white" : "black",
                    color: selectedOption === option ? "black" : "white"
                  }}
                  required
                  type="button"
                  className="w-max cursor-pointer border-2 transition-all duration-500 ease-linear rounded-full bg-transparent text-white font-sans outline-none text-md px-4 py-1 md:text-xl font-medium md:px-4 md:py-2"
                />
              ))}
            </div>
          </div>
          <button  className="w-max px-4 py-2 text-lg md:px-8 md:py-4 font-extrabold md:text-2xl rounded-full bg-[#F06292] text-white hover:text-black hover:bg-white transition-all duration-500">
          SUBMIT
          </button>
        </form>

      </div>
     <ToastContainer/>
    </div>
  );
};

export default GetinTouch;
