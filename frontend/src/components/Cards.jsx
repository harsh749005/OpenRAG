import React, { useState, useEffect } from "react";
import SpotlightCard from "../components/reactBits/SpotlightCard";
import GradientText from "../components/reactBits/GradientText";
import Icon1 from "../assets/svg/icon1";
import Carddata from "./Carddata"; // Renamed imported data to cardData

const Cards = () => {
  const [data, setData] = useState([]); // Kept the local state as data

  useEffect(() => {
    setData(Carddata); // Now referring to cardData from the import
  }, []);

  return (
    <div className="card flex flex-col gap-6 items-center  justify-center h-max w-full pt-4   md:flex-wrap md:pt-0 md:flex md:flex-row md:items-center md:justify-evenly md:mt-10 ">
      {data.map((item, index) => ( // item comes first, then index in map callback
        <SpotlightCard
          key={index}
          className="w-80 h-96 cursor-pointer rounded-md"
          spotlightColor="rgba(255, 255, 255, 0.25)"
        >
          <div className="flex gap-2">
            <Icon1 />
            <GradientText
              colors={["#AD49BD", "#C86BCF", "#8C2C99", "#F06292", "#6759FF"]}
              animationSpeed={3}
              showBorder={false}
              className="text-2xl font-extrabold w-60 px-2"
            >
              {item.title}
            </GradientText>
          </div>

          <p className="text-gray-300 mt-8 px-2 text-md">
            {item.description}
          </p>
          
        </SpotlightCard>
      ))}
    </div>
  );
};

export default Cards;
