import React, { useRef, useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import { IoIosBed } from "react-icons/io";
import { PiStoolFill } from "react-icons/pi";
import { PiToiletFill } from "react-icons/pi";
import { TbBath } from "react-icons/tb";
import { LuBed } from "react-icons/lu";

const SuiteArrangement = () => {
  return (
    <>
      <div className="text-custom-blue font-bold uppercase text-md">
        <div>Suite Arrangements</div>
        <hr className="border border-gray-300 mt-1" />
      </div>
      <div className="mt-7 text-gray-500">
        <div className="bg-[rgb(251,249,248)] rounded-md">
          <div className=" flex items-center pt-5 m-5">
            <FaStarOfLife className="text-[7px] text-red-600 m-1" />
            <div className="font-semibold ">Bed Preference :</div>
          </div>
          <div>
            <form className="flex flex-col sm:flex-row text-gray-400 pb-5 text-sm">
              <div className="bg-white border-0 shadow-md rounded-lg w-auto sm:w-1/2 flex items-center justify-between lg:mx-5 sm:mx-auto my-3 sm:my-0 py-2 px-4">
                <div className="flex">
                  <input type="radio" name="bed" className="mx-3" />
                  <label>One Queen</label>
                </div>
                <IoIosBed className="" />
              </div>
              <div className="bg-white shadow-md rounded-md w-full sm:w-1/2 flex items-center justify-between my-3 sm:my-0 py-2 px-4 lg:mx-5">
                <div className="flex">
                  <input type="radio" name="bed" className="mx-3" />
                  <label>2 Twins (not available with all suites)</label>
                </div>
                <div className="flex ml-1">
                  <IoIosBed />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-[rgb(251,249,248)] rounded-md mt-8 pt-5 lg:pl-5">
          <p className="font-semibold max-sm:px-4">Bedding requests</p>
          <p className="pt-4 max-sm:px-4">
            While Seabourn aims to fulfill requests, we cannot guarantee
            accommodation
          </p>

          <div>
            <form className="w-full flex text-gray-400 text-sm">
              <div className="bg-white shadow-md rounded-lg w-full md:w-1/2 flex items-center justify-between my-5 py-2 lg:px-4">
                <div className="w-full text-gray-600">
                  <div className="flex justify-between">
                    <div>
                      <input type="checkbox" className="max-sm:ml-3"/>
                      <label className="max-sm:ml-1 ml-1">Bedding requests</label>
                    </div>
                    <IoIosBed className="max-sm:mr-1 mr-1" />
                  </div>
                  <input
                    type="text"
                    placeholder="Bedding request comments"
                    className="border border-gray-300 pl-2 py-1 text-[11px] italic text-gray-300 w-full mt-3"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-[hsl(20,27%,98%)] rounded-md mt-8 pt-5">
          <div className="pl-5 font-semibold sm:    ">
            Extra equipment? (Select all that apply)
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:p-5 gap-5">
              <div className="bg-white shadow-md rounded-lg w-full flex items-center justify-between py-2 px-4">
                <div className="flex">
                  <input type="checkbox" name="bed" className="mx-3" />
                  <label>Bath Seat</label>
                </div>
                <PiStoolFill className="text-xl" />
              </div>
              <div className="bg-white shadow-md rounded-lg w-full flex items-center justify-between py-2 px-4">
                <div className="flex">
                  <input type="checkbox" name="bed" className="mx-3" />
                  <label>Raised Toilet Seat</label>
                </div>
                <PiToiletFill className="text-xl" />
              </div>
              <div className="bg-white shadow-md rounded-lg w-full flex items-center justify-between py-2 px-4">
                <div className="flex">
                  <input type="checkbox" name="bed" className="mx-3" />
                  <label>Shower Stool</label>
                </div>
                <TbBath className="text-xl" />
              </div>
              <div className="bg-white shadow-md rounded-lg w-full flex items-center justify-between px-4">
                <div className="flex">
                  <input type="checkbox" name="bed" className="mx-3" />
                  <label>Cot / Crib under 2 years-infant</label>
                </div>
                <LuBed className="ml-5 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuiteArrangement;
