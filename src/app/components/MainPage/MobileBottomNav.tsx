import Link from "next/link";
import React from "react";
import { BsBag } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { PiPlant } from "react-icons/pi";
import { SlHeart } from "react-icons/sl";

const MobileBottomNav: React.FC = () => {
  return (
    <div className="w-full min-h-[60px] bg-green rounded-full z-20 fixed bottom-0 flex justify-between items-center px-7">
      <Link href={`/login`} className="flex flex-col items-center">
        <GoPerson className="w-7 h-7 text-white text-opacity-70" />
        {/* <span className="w-1 h-1 bg-white rounded-full mt-1"></span> */}
      </Link>
      <div className="flex flex-col items-center">
        <BsBag className="w-7 h-7 text-white text-opacity-70" />
        {/* <span className="w-1 h-1 bg-white rounded-full mt-1"></span> */}
      </div>

      <div className="flex flex-col items-center">
        <SlHeart className="w-7 h-7 text-white text-opacity-70" />
        {/* <span className="w-1 h-1 bg-white rounded-full mt-1"></span> */}
      </div>

      <div className="flex flex-col items-center">
        <PiPlant className="w-7 h-7 text-white" />
        <span className="w-1 h-1 bg-white rounded-full mt-1"></span>
      </div>
    </div>
  );
};

export default MobileBottomNav;
