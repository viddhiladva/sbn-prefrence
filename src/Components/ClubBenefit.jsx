import React from "react";
import { PiShieldCheckeredFill } from "react-icons/pi";


const ClubBenefit = () => {
  return (
    <>
      <div className="bg-custom-blue flex items-center rounded-md">
        <div className="my-3 flex">
        <PiShieldCheckeredFill className="text-xl mx-3 text-white" />
        <p className="text-white text-md font-semibold">Club Benefit Preferences</p>
        </div>
      </div>
      <div className="mt-10 mx-3">
            <div className="text-custom-blue font-bold">
                Guest : Tim Willbey
            </div>
        </div>
        <div className="mt-5 mb-10 mx-3 text-gray-600 font-semibold">
        As a Club Member, loyality points and more sailings will score you <span className="text-custom-blue underline">special benefits</span>  including Shore Excursion discounts, laundry, and spa days.
        </div>
    </>
  );
};

export default ClubBenefit;
