import React from "react";
import Image from "next/image";
import { TiWeatherSunny } from "react-icons/ti";
import { PiHeartbeatLight } from "react-icons/pi";
import { IoRemoveOutline } from "react-icons/io5";
import { supabase } from "../../../../lib/supabaseClient";
import { motion } from "motion/react";
import Link from "next/link";
import { FavoriteCardProps } from "src/types/favoritecard";
import { useLanguage } from "src/app/context/LanguageContext";
import { Exo_2 } from "next/font/google";

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400"],
});

const FavoriteCard: React.FC<FavoriteCardProps> = ({ flower, onRemove }) => {
  const { content, language } = useLanguage();
  const removeHandler = async (id: string) => {
    const { error } = await supabase
      .from("plants")
      .update({ favorite: false })
      .eq("id", id);

    if (error) {
      console.error("Error removing item:", error);
    } else {
      console.log("Item removed successfully");
      onRemove(); // Call the parent function to remove the item from the state
      resetFavorites();
    }
  };

  const resetFavorites = async () => {
    const { error } = await supabase
      .from("plants")
      .update({ favorite: true }) // Set 'favorite' to true
      .neq("favorite", true); // Only update items where 'favorite' is not already true

    if (error) {
      console.error("Error updating favorites:", error);
    } else {
      console.log("Favorites updated successfully");
    }
  };

  setTimeout(resetFavorites, 10000);

  const fontClass = language !== "pe" ? exo.className : "font-yekan";

  return (
    <Link
      className="flex items-start h-fit w-full relative"
      href={`/products/${flower.id}`}
    >
      <div className="flex-shrink-0 my-auto">
        <Image
          width={100}
          height={100}
          src={flower.picture}
          alt="favorite"
          className={` object-cover w-24 h-32 md:h-36 lg:w-32 lg:h-40 ${
            language === "pe" ? "rounded-tr-2xl" : "rounded-tl-2xl"
          }`}
        />
      </div>

      <div
        className={`mt-4 text-sm font-parastoo ${
          language === "pe" ? "pr-5" : "pl-5"
        }`}
      >
        <p className={`text-lg lg:text-2xl font-bold ${fontClass}`}>
          {language === "pe" ? flower.name_pe : flower.name_en}
        </p>
        <p
          className={`text-black text-opacity-60 mt-2 lg:text-lg ${fontClass}`}
        >
          {content.suitableForEverySeason}
        </p>
        <div className="flex items-center mt-5 space-x-3">
          <div
            className={`flex items-center ${language === "pe" && "space-x-3"}`}
          >
            <i className="bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow rounded-full lg:w-8 lg:h-8 w-7 h-7 flex items-center justify-center">
              <TiWeatherSunny className="lg:w-6 lg:h-6 w-5 h-5 text-white" />
            </i>
            <p
              className={`text-black text-opacity-70 text-nowrap px-1 ${fontClass}`}
            >
              {content.needSunlight}
            </p>
          </div>
          <div className="flex items-center">
            <i className="bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow rounded-full lg:w-8 lg:h-8 w-7 h-7 flex items-center justify-center">
              <PiHeartbeatLight className="lg:w-6 lg:h-6 w-5 h-5 text-white" />
            </i>
            <p
              className={`font-yekan text-black text-opacity-70 text-nowrap mx-1 ${fontClass}`}
            >
              {content.needLight}
            </p>
          </div>
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`absolute top-0 bg-[#333333] cursor-pointer w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center ${
          language === "pe"
            ? "left-0 rounded-br-lg rounded-tl-2xl"
            : "right-0 rounded-tr-lg rounded-bl-2xl"
        }`}
      >
        <i
          onClick={(event) => {
            event.stopPropagation();
            event.preventDefault();
            removeHandler(flower.id);
          }}
        >
          <IoRemoveOutline className="lg:w-8 lg:h-8 w-6 h-6 text-white " />
        </i>
      </motion.div>
    </Link>
  );
};

export default FavoriteCard;
