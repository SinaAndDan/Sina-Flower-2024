import React from "react";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import ficus from "../../../../public/ficus.png";

const DetailHero: React.FC = () => {
  return (
    <div className="container mx-auto sm:px-0 px-2 w-full bg-gray-200 relative notched-corner">
      <div className="w-full content-notch">
        <div className="pt-4">
          <IoArrowForward className="w-10 h-10 text-gray-800" />
        </div>
        <div className="h-full px-4 pb-6 mt-3 flex justify-between">
          <div className="flex flex-col justify-around">
            <h5 className="font-bold font-abasan text-2xl sm:text-4xl md:text-5xl xl:text-7xl">
              فیکوس لیراتا
            </h5>
            <div className="">
              <p className="opacity-65 text-xs sm:text-base md:text-lg xl:text-xl">
                کتگوری
              </p>
              <p className="text-green-500 font-semibold text-base sm:text-lg md:text-2xl xl:text-3xl">
                داخلی
              </p>
            </div>
            <div className="">
              <p className="opacity-65 text-xs sm:text-base md:text-lg xl:text-xl">
                نوع
              </p>
              <p className="text-green-500 font-semibold text-base sm:text-lg md:text-2xl xl:text-3xl">
                کوچک
              </p>
            </div>
            <div className="">
              <p className="opacity-65 text-xs sm:text-base md:text-lg xl:text-xl">
                گیاه
              </p>
              <p className="text-green-500 font-semibold text-base sm:text-lg md:text-2xl xl:text-3xl">
                فیکوس
              </p>
            </div>
          </div>
          <Image
            width={500}
            height={200}
            src={ficus}
            alt="هیجی"
            className="md:w-full lg:w-1/2 saturate-150 shadow-gray-100 image-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
