import React from "react";
import { backToHomeArrow } from "../Components/ReactIcon";

const Navbar = () => {
  return (
    <>
        <div className="h-12 bg-gray-100 w-full fixed top-0 z-10">
          <div className="flex items-center pt-2.5 ml-2 font-semibold">
            {backToHomeArrow}
            <span className="ml-2">Home</span>
          </div>
        </div>
    </>
  );
};

export default Navbar;
