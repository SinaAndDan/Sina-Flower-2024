import { Exo_2 } from "next/font/google";
import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { GiGroundSprout } from "react-icons/gi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TiWeatherSunny } from "react-icons/ti";
import { useGlobalContext } from "context/GlobalContext";
import { PlantProps } from "../../types/plant";

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400"],
});

const Maintaining: React.FC<{ selectedProduct: PlantProps | null }> = ({
  selectedProduct,
}) => {
  const { language } = useGlobalContext();
  const getLocalizedValue = (peValue?: string, enValue?: string) => {
    return language === "pe" ? peValue : enValue;
  };
  const fontClass = language === "pe" ? "font-yekan" : exo.className;

  const renderIcon = (
    maintain_th_pe: string | undefined,
    maintain_th_en: string | undefined
  ) => {
    if (
      selectedProduct?.maintain_th_pe === "خاک و زهکشی" ||
      selectedProduct?.maintain_th_en === "Soil & Drainage"
    ) {
      return <GiGroundSprout className="sm:w-12 sm:h-12 w-8 h-8 text-white" />;
    }
    return null;
  };

  return (
    <div className={`grid grid-cols-2 gap-4 my-8 ${fontClass}`}>
      <div className="flex items-center">
        <div className="w-fit p-1 rounded-2xl bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow">
          <MdOutlineWaterDrop className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col px-3 text-sm sm:text-base">
          <p className="text-green font-bold text-xs sm:text-xl lg:text-2xl">
            {getLocalizedValue(
              selectedProduct?.maintain_st_pe_value,
              selectedProduct?.maintain_st_en_value
            )}
          </p>
          <p className="opacity-75 sm:text-lg lg:text-xl lg:opacity-60">
            {getLocalizedValue(
              selectedProduct?.maintain_st_pe,
              selectedProduct?.maintain_st_en
            )}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-fit p-1 rounded-2xl bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow">
          <TiWeatherSunny className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
        </div>
        <div className="flex flex-col px-3 text-sm sm:text-base">
          <p className="text-green font-bold text-xs sm:text-xl lg:text-2xl">
            {getLocalizedValue(
              selectedProduct?.maintain_nd_pe_value,
              selectedProduct?.maintain_nd_en_value
            )}
          </p>
          <p className="opacity-75 sm:text-lg lg:text-xl lg:opacity-60">
            {getLocalizedValue(
              selectedProduct?.maintain_nd_pe,
              selectedProduct?.maintain_nd_en
            )}
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
          <p className="text-green font-bold text-xs sm:text-xl lg:text-2xl">
            {getLocalizedValue(
              selectedProduct?.maintain_rd_pe_value,
              selectedProduct?.maintain_rd_en_value
            )}
          </p>
          <p className="opacity-75 sm:text-lg lg:text-xl lg:opacity-60">
            {getLocalizedValue(
              selectedProduct?.maintain_rd_pe,
              selectedProduct?.maintain_rd_en
            )}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div
          className="w-fit p-1 rounded-2xl bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow
"
        >
          {renderIcon(
            selectedProduct?.maintain_th_pe,
            selectedProduct?.maintain_th_en
          )}
        </div>
        <div className="flex flex-col px-3 text-sm sm:text-base">
          <p className="text-green font-bold text-xs sm:text-xl lg:text-2xl">
            {getLocalizedValue(
              selectedProduct?.maintain_th_pe_value,
              selectedProduct?.maintain_th_en_value
            )}
          </p>
          <p className="opacity-75 sm:text-lg lg:text-xl lg:opacity-60">
            {getLocalizedValue(
              selectedProduct?.maintain_th_pe,
              selectedProduct?.maintain_th_en
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintaining;
