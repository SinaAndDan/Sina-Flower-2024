import React from "react";
import { MdOutlineWaterDrop } from "react-icons/md";
import { PiHeartbeatLight } from "react-icons/pi";
import { TiWeatherSunny } from "react-icons/ti";
import { WiCelsius } from "react-icons/wi";

const Maintaining: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 my-8">
      <div className="flex items-center">
        <div className="bg-darkGray w-fit p-1 rounded-2xl">
          <TiWeatherSunny className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col px-3 text-sm sm:text-base">
          <p className="text-green font-bold lg:text-2xl">۳۲٪</p>
          <p className="opacity-75 lg:text-xl lg:opacity-60">نور</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-darkGray w-fit p-1 rounded-2xl">
          <PiHeartbeatLight className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col px-3 text-sm sm:text-base">
          <p className="text-green font-bold lg:text-2xl">۹۶٪</p>
          <p className="opacity-75 lg:text-xl lg:opacity-60">سلامتی</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-darkGray w-fit p-1 rounded-2xl flex items-center">
          <WiCelsius className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col px-3 text-sm sm:text-base">
          <p className="text-green font-bold lg:text-2xl">℃ ۲۳</p>
          <p className="opacity-75 lg:text-xl lg:opacity-60">دما</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-darkGray w-fit p-1 rounded-2xl">
          <MdOutlineWaterDrop className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col px-3 text-sm sm:text-base">
          <p className="text-green font-bold lg:text-2xl">۵۲٪</p>
          <p className="opacity-75 lg:text-xl lg:opacity-60">آب دهی</p>
        </div>
      </div>
    </div>
  );
};

export default Maintaining;
