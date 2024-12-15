import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { MdOutlineWaterDrop } from "react-icons/md";
import { PiHeartbeatLight } from "react-icons/pi";
import { TiWeatherSunny } from "react-icons/ti";
import { useLanguage } from "src/app/context/LanguageContext";

const Maintaining: React.FC = () => {
  const { content } = useLanguage();
  return (
    <div className="grid grid-cols-2 gap-4 my-8">
      <div className="flex items-center">
        <div className="w-fit p-1 rounded-2xl bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow">
          <TiWeatherSunny className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col px-3 text-sm sm:text-base">
          <p className="text-green font-bold lg:text-2xl">{content.lightNum}</p>
          <p className="opacity-75 lg:text-xl lg:opacity-60">{content.light}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-fit p-1 rounded-2xl bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow">
          <PiHeartbeatLight className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col px-3 text-sm sm:text-base">
          <p className="text-green font-bold lg:text-2xl">
            {content.healthNum}
          </p>
          <p className="opacity-75 lg:text-xl lg:opacity-60">
            {content.health}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className="w-fit p-1 rounded-2xl flex items-center bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow
"
        >
          <CiTempHigh className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col px-3 text-sm sm:text-base">
          <p className="text-green font-bold lg:text-2xl">{content.deg}</p>
          <p className="opacity-75 lg:text-xl lg:opacity-60">{content.temp}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className="w-fit p-1 rounded-2xl bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow
"
        >
          <MdOutlineWaterDrop className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col px-3 text-sm sm:text-base">
          <p className="text-green font-bold lg:text-2xl">{content.waterNum}</p>
          <p className="opacity-75 lg:text-xl lg:opacity-60">{content.water}</p>
        </div>
      </div>
    </div>
  );
};

export default Maintaining;
