import React from "react";
import Image from "next/image";
import HeroBackgroundPicture from "../../../../public/background.png";

const Hero = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-11/12 mt-10">
        <Image
          src={HeroBackgroundPicture}
          alt="Card Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
