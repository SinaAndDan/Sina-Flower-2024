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
import PcNav from "../components/MainPage/PcNav";

interface Plant {
  id: string;
  name: string;
  price: number;
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

const Cart: React.FC = () => {
  const router = useRouter();

  const [boughtPro, setBoughtPro] = useState<Plant[]>([]);

  useEffect(() => {
    const fetchBoughts = async () => {
      const { data, error } = await supabase.from("plants").select("*");

      if (error) {
        console.error("Error fetching plants:", error);
      } else {
        setBoughtPro(data as Plant[]);
      }
    };
    fetchBoughts();
  }, []);

  const backToMainPage = () => {
    router.push("/");
  };
  return (
    <>
      <PcNav />
      <div className="sm:px-0 bg-gray relative">
        <div className="flex items-center justify-between pt-5 container mx-auto px-2">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.7 }}
            className="bg-loginInput rounded-full w-10 h-10 flex items-center justify-center sm:hidden"
            onClick={backToMainPage}
          >
            <GrFormNext className="w-8 h-8 text-greenlogIn cursor-pointer translate-x-px" />
          </motion.button>
          <h6 className="font-yekan text-2xl">سبد خرید</h6>
          <span className="bg-loginInput rounded-full w-10 h-10 flex items-center justify-center sm:hidden">
            <BiSolidBasket className="w-6 h-6 text-greenlogIn cursor-pointer translate-x-px" />
          </span>
        </div>
        <ul className="flex flex-col gap-y-10 mt-10 h-full container mx-auto px-2 pb-32">
          {boughtPro.map((plant) => (
            <Link href={`/products/${plant.id}`} key={plant.id}>
              <li className="flex items-center justify-between bg-white h-56">
                <div className="flex flex-col justify-between px-5 w-1/2 h-44 font-yekan">
                  <p className="text-2xl font-parastoo">{plant.name}</p>
                  <div className="flex items-center">
                    <p className="text-black text-opacity-70 ">نظرها</p>
                    <span className="flex items-center text-black text-opacity-70 px-1">
                      (۴.۲
                      <FaStar className=" text-[#DAA520]" />)
                    </span>
                  </div>
                  <p className="font-yekan text-2xl font-semibold">
                    {toPersianNumber(plant.price)}
                    <span className="text-xs px-1"> تومان</span>
                  </p>
                  <div className="flex items-center gap-x-2">
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
                    <p className="font-yekan">۱</p>
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
                    className="rounded-tr-2xl pl-4 object-cover ml-auto"
                  />
                </div>
              </li>
            </Link>
          ))}
        </ul>
        <div className="fixed bg-white min-h-[80px] bottom-0 w-full flex items-center px-2 font-yekan">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex flex-col px-5">
              <p className="text-black text-opacity-60">مجموع خرید</p>
              <p className="text-2xl font-bold">
                ۲۳۰۰۰۰
                <span className="text-xs mx-1 font-medium">تومان</span>
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.7 }}
              className="w-44 py-3 ml-4 bg-greenlogIn rounded-2xl text-white"
            >
              ادامه
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
