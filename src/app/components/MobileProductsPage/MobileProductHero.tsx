import React from "react";
import BackIcon from "../Icons/SVG/back-svgrepo-com.svg"; // Notice there's no curly braces
import Image from "next/image";
const MobileProductHero = () => {
  return (
    <div className="h-screen m-0">
      <div className="flex  justify-between   items-center mt-16 ml-4 ">
        <Image src={BackIcon} alt="" height={50} className="" />
        <div className="mx-auto text-center "> گل رز قرمز</div>
      </div>
    </div>
  );
};

export default MobileProductHero;
