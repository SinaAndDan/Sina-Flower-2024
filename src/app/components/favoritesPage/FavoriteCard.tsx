import React from "react";
import Image from "next/image";
import { TiWeatherSunny } from "react-icons/ti";
import { PiHeartbeatLight } from "react-icons/pi";
import { IoRemoveOutline } from "react-icons/io5";

interface FlowerCardProps {
  flower: {
    id: string;
    name: string;
    price: number;
    picture: string;
    width: number;
    height: number;
  };
}

const FavoriteCard: React.FC<FlowerCardProps> = ({ flower }) => {
  return (
    <div className="flex items-start h-fit w-full relative">
      {/* Image container on the left */}
      <div className="flex-shrink-0 my-auto">
        <Image
          width={100}
          height={100}
          src={flower.picture}
          alt="favorite"
          className="rounded-tr-2xl object-cover w-24 h-32 md:h-36 lg:w-32 lg:h-40"
        />
      </div>

      {/* Text container on the right */}
      <div className="mt-4 text-sm font-parastoo px-5">
        <p className="text-lg lg:text-2xl font-bold">{flower.name}</p>
        <p className="text-black text-opacity-60 mt-2 font-yekan lg:text-lg">
          مناسب برای تمام فصل ها
        </p>
        <div className="flex items-center mt-5">
          <div className="flex items-center space-x-3">
            <TiWeatherSunny className="lg:w-8 lg:h-8 w-5 h-5 text-darkGray" />
            <p className="font-yekan text-black text-opacity-70 text-nowrap px-1">
              نیاز به آفتاب
            </p>
          </div>
          <div className="flex items-center">
            <PiHeartbeatLight className="lg:w-8 lg:h-8 w-5 h-5 text-darkGray" />
            <p className="font-yekan text-black text-opacity-70 text-nowrap mx-1">
              نیاز به نور
            </p>
          </div>
        </div>
      </div>

      {/* Optional remove icon */}
      <div className="absolute top-0 left-0 bg-[#333333] rounded-tl-2xl rounded-br-lg cursor-pointer w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center">
        <i>
          <IoRemoveOutline className="lg:w-8 lg:h-8 w-6 h-6 text-white " />
        </i>
      </div>
    </div>
  );
};

export default FavoriteCard;
