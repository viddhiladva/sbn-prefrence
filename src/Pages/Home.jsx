import React from "react";
import Navbar from "../Components/Navbar";
import beach from "../Assets/beach.jpg";
import ClubBenefit from "../Components/ClubBenefit";
import OnboardPrefrence from "../Components/OnboardPrefrence";
import SuiteArragement from "../Components/SuiteArragement";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-h-full bg-white pt-12">
        <div className="h-[200px] w-full flex bg-[rgb(244,240,229)]">
          <div className="w-1/2 text-custom-blue text-2xl italic flex justify-center items-center font-bold">
            Curate the perfect vacation
          </div>
          <div className="relative w-1/2 h-[200px]">
            <img
              src={beach}
              alt="Beach"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(244,240,229)] opacity-100 to-transparent"></div>
          </div>
        </div>

        <div className="m-10">
          <div className="text-custom-blue text-3xl font-serif font-semibold">
            Preference
          </div>
          <div className="mt-4 text-md font-semibold text-justify">
            As a Seabourn Club member, you may choose from the benefits listed
            below to enjoy during your cruise. You may want to make your
            selection now as certain benefits offer Seabourn Club Savings on
            purchases. Please check the box next to the benefit you would like
            to receive and click Save Preferences to continue. These selections
            apply to all linked bookings and cover your entire stay on board.
            Any changes you make now will overwrite previous selections.
            <br />
            <br />
            If you choose not to make your benefit selection at this time, you
            may still do so while you are shopping from the Seabourn Club
            Benefits tab, or you will be reminded again at checkout.
            <br />
            <br />
            Jump to:
          </div>

          <div className="text-custom-blue text-md font-bold mt-5">
            <div>
              <a href="">Club Benefit Preferences</a>
            </div>
            <div className="mt-5">
              <a href="">Onboard Preferences</a>
            </div>
          </div>
        </div>
        <hr className="mx-10 border border-gray-300" />
        <div className="m-10">
          <ClubBenefit />
        </div>
        <hr className="mx-10 border border-gray-300" />
        <div className="m-10">
          <OnboardPrefrence />
        </div>
        <div className="mx-10">
            <SuiteArragement/>
        </div>
        <div className="m-10">

        </div>
      </div>
    </>
  );
};

export default Home;
