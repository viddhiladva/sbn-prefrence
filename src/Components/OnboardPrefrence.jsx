import React from "react";
import { MdDirectionsBoat } from "react-icons/md";
import { FaStarOfLife } from "react-icons/fa6";

const OnboardPrefrence = () => {
  return (
    <>
      <div className="bg-custom-blue flex items-center rounded-md">
        <div className="my-3 flex"> 
          <MdDirectionsBoat className="text-xl mx-3 text-white" />
          <p className="text-white text-md font-semibold">
            Onboard Preferences
          </p>
        </div>
      </div>
      <div className="mt-10 mx-3">
        <div className="font-md text-gray-600 font-semibold">
          Select your onboard preferences and customize your seabourn experience
          (club Member selections are saved from previous sailings):
        </div>
      </div>
      <div className=" flex items-center mt-5 mb-10 mx-3 text-gray-600 font-semibold">
        <FaStarOfLife className=" text-[7px] text-red-500" />
        <div className="flex ml-2">Required field</div>
      </div>
    </>
  );
};

export default OnboardPrefrence;
