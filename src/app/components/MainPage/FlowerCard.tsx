"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductCardProps } from "src/types/productcard";
import { useGlobalContext } from "../../context/GlobalContext";
import { Poppins } from "next/font/google";
import { useState } from "react";

const toPersianNumber = (num: number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return num
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const FlowerCard: React.FC<ProductCardProps> = ({ flower }) => {
  const { language, startLoading, stopLoading } = useGlobalContext(); const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    startLoading(); // Start loading state

    const animationDuration = 500; // Match animation duration
    setTimeout(() => {
      router.push(`/products/${flower.id}`);
      stopLoading(); // Stop loading after navigation
    }, animationDuration);
  };



  return (
    <div
      className="group relative overflow-hidden rounded-xl transition-transform duration-500"
      tabIndex={0} // Makes the card focusable
    >
      <a
        href={`/products/${flower.id}`}
        dir={language === "pe" ? "rtl" : "ltr"}
        className="block"
        onClick={handleClick}
      >
        {/* Image */}
        <Image
          className="w-full h-auto object-cover mb-3 rounded-t-2xl transition-transform duration-500 group-focus-within:scale-105"
          src={flower.picture}
          alt={language === "pe" ? flower.name_pe : flower.name_en}
          width="300"
          height="300"
        />
        {/* Content */}
        <div className="flex flex-col justify-between mb-2 px-5">
          <span
            className={`bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow text-white rounded-xl md:rounded-2xl text-xs md:text-sm px-5 py-1 w-fit ${language === "pe" ? "font-yekan" : poppins.className
              }`}
          >
            {language === "pe" ? flower.category_pe : flower.category_en}
          </span>
          <h3
            className={`text-xl font-semibold font-parastoo text-start flex-grow mt-3 text-nowrap ${language === "pe" ? "font-yekan lg:text-2xl" : poppins.className
              }`}
          >
            {language === "pe" ? flower.name_pe : flower.name_en}
          </h3>
          <div className="flex w-full justify-between items-center content-center mt-3">
            <p
              className={`text-black text-opacity-70 text-sm md:text-base ${language === "pe" ? "font-yekan" : poppins.className
                }`}
            >
              {language === "pe" ? flower.type_pe : flower.type_en}
            </p>
            <div
              className={`flex items-center text-green ${language === "pe"
                ? "flex-row font-yekan"
                : poppins.className + " flex-row-reverse"
                }`}
            >
              <p className={`text-xl font-semibold`}>
                {language === "pe"
                  ? toPersianNumber(flower.price_pe)
                  : flower.price_en}
              </p>
              <span
                className={`mx-0.5 text-xl ${language === "pe" ? "mt-1 text-xs" : ""
                  }`}
              >
                {language === "pe" ? "تومان" : "$"}
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default FlowerCard;
function startLoading() {
  throw new Error("Function not implemented.");
}

function stopLoading() {
  throw new Error("Function not implemented.");
}

