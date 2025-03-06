"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiSolidBasket } from "react-icons/bi";
import { GrFormNext } from "react-icons/gr";
import { supabase } from "../../../lib/supabaseClient";
import Image from "next/image";
import { AiOutlineLine, AiOutlinePlus } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";
import Link from "next/link";
import PcNav from "../../../components/MainPage/PcNav";
import Loading from "../../../components/Layout/Loading";
import { useLanguage } from "../../../context/GlobalContext";
import { Exo_2, Roboto_Slab } from "next/font/google";

interface Plant {
  id: string;
  name_pe: string;
  name_en: string;
  price_pe: number;
  price_en: number;
  picture: string;
  width: number;
  height: number;
}

const toPersianNumber = (num: number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  // Convert the number to a string, and replace each digit with the corresponding Persian one.
  return num
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["400"],
});

const Cart: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { content, language } = useLanguage();
  const router = useRouter();

  const [boughtPro, setBoughtPro] = useState<Plant[]>([]);

  useEffect(() => {
    const fetchBoughts = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("plants").select("*");

      if (error) {
        console.error("Error fetching plants:", error);
      } else {
        setBoughtPro(data as Plant[]);
      }
      setLoading(false);
    };
    fetchBoughts();
  }, []);

  const backToMainPage = () => {
    router.push("/");
  };
  const fontClass = language !== "pe" ? exo.className : "font-yekan";

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <PcNav />
      <div className="sm:px-0 bg-gray relative">
        <div className="flex items-center pt-5 justify-between container mx-auto px-2 sm:px-0">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.7 }}
            className="bg-loginInput rounded-full w-10 h-10 flex items-center justify-center sm:hidden"
            onClick={backToMainPage}
          >
            <GrFormNext
              className={`w-8 h-8 text-greenlogIn cursor-pointer ${language !== "pe"
                ? "rotate-180 -translate-x-px"
                : "translate-x-px"
                }`}
            />
          </motion.button>
          <h2
            className={`text-4xl mt-0 sm:mt-12 font-extrabold ${language === "pe" ? "font-yekan" : roboto.className
              }`}
          >
            {content.cartTitle}
          </h2>
          <span className="bg-loginInput rounded-full w-10 h-10 flex items-center justify-center sm:hidden">
            <BiSolidBasket className="w-6 h-6 text-greenlogIn cursor-pointer translate-x-px" />
          </span>
        </div>
        <ul className="flex flex-col lg:grid grid-cols-2 2xl:grid-cols-3 gap-5 sm:gap-x-16 xl:gap-x-20  gap-y-10 mt-10 h-full container mx-auto px-2 pb-32">
          {boughtPro.map((plant) => (
            <Link href={`/products/${plant.id}`} key={plant.id}>
              <li
                className={`flex items-center justify-between bg-white h-56 ${language === "pe" ? "rounded-tr-2xl" : "rounded-tl-2xl"
                  }`}
              >
                <div className="flex flex-col justify-between px-5 w-1/2 h-44 font-yekan">
                  <p className={`text-lg lg:text-2xl font-bold ${fontClass}`}>
                    {language === "pe" ? plant.name_pe : plant.name_en}
                  </p>
                  <div className="flex items-center">
                    <p
                      className={`text-black text-opacity-60 lg:text-lg ${fontClass}`}
                    >
                      {content.reviews}
                    </p>
                    <span
                      className={`flex items-center text-black text-opacity-60 lg:text-lg px-1 ${fontClass}`}
                    >
                      ({content.stars}
                      <FaStar className=" text-[#DAA520]" />)
                    </span>
                  </div>
                  <p className={`text-2xl font-semibold ${fontClass}`}>
                    {language === "pe"
                      ? toPersianNumber(plant.price_pe)
                      : plant.price_en}
                    <span className="text-xs px-1">{content.monetaryUnit}</span>
                  </p>
                  <div
                    className={`flex items-center gap-x-2 ${language !== "pe" && "flex-row-reverse justify-end"
                      }`}
                  >
                    <motion.i
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.7 }}
                      className="bg-loginInput rounded-full w-6 h-6 flex items-center justify-center"
                      onClick={(event) => {
                        event.stopPropagation();
                        event.preventDefault();
                      }}
                    >
                      <AiOutlinePlus />
                    </motion.i>
                    <p className={fontClass}>{content.quantity}</p>
                    <motion.i
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.7 }}
                      className="bg-loginInput rounded-full w-6 h-6 flex items-center justify-center"
                      onClick={(event) => {
                        event.stopPropagation();
                        event.preventDefault();
                      }}
                    >
                      <AiOutlineLine />
                    </motion.i>
                  </div>
                </div>

                <div className="w-44 h-52">
                  <Image
                    height={500}
                    width={500}
                    src={plant.picture}
                    alt="item"
                    className={`object-cover ml-auto ${language === "pe"
                      ? "pl-4 rounded-tr-2xl"
                      : "pr-4 rounded-tl-2xl"
                      }`}
                  />
                </div>
              </li>
            </Link>
          ))}
        </ul>
        <div className="fixed bg-white min-h-[80px] bottom-0 w-full flex items-center px-2 font-yekan">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex flex-col px-5">
              <p className={`text-black text-opacity-60 ${fontClass}`}>
                {content.total}
              </p>
              <p className={`text-2xl font-bold ${fontClass}`}>
                {content.totalCost}
                <span className="text-xs mx-1 font-medium">
                  {content.monetaryUnit}
                </span>
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.7 }}
              className={`w-44 py-3 ml-4 bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow rounded-2xl text-white ${fontClass}`}
            >
              {content.proceed}
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
