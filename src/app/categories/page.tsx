"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Categories: React.FC = () => {
  return (
    <ul className=" w-full flex flex-col h-full overflow-hidden">
      <motion.li
        className=" w-full flex justify-center items-center bg-[#D8B4FE] h-[20vh] relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute right-0">
          <Image
            height={200}
            width={200}
            alt="category"
            src="/photos.png"
            className="translate-x-[40%]"
          />
        </div>
        <p className=" font-abasan text-2xl text-black text-opacity-70">
          گیاهان آپارتمانی
        </p>
      </motion.li>
      <motion.li
        className=" w-full flex justify-center items-center bg-[#FECACA] h-[20vh] relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-abasan text-2xl text-black text-opacity-70 text-center">
          گیاهان<br></br> فضای باز
        </p>
        <div className="absolute left-0">
          <Image
            height={200}
            width={200}
            alt="category"
            src="/gardenII.png"
            className="-translate-x-[40%]"
          />
        </div>
      </motion.li>
      <motion.li
        className=" w-full flex justify-center items-center bg-[#FDE68A] h-[20vh] relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute right-0">
          <Image
            height={200}
            width={200}
            alt="category"
            src="/cactus.png"
            className="translate-x-[40%]"
          />
        </div>
        <p className="font-abasan text-2xl text-black text-opacity-70">
          کاکتوس‌ها
        </p>
      </motion.li>
      <motion.li
        className=" w-full flex justify-center items-center bg-[#93C5FD] h-[20vh] relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute left-0">
          <Image
            height={200}
            width={200}
            alt="category"
            src="/peacelily.png"
            className="-translate-x-[40%]"
          />
        </div>
        <p className="font-abasan text-2xl text-black text-opacity-70 text-center">
          گیاهان <br></br>تصفیه‌کننده هوا
        </p>
      </motion.li>
      <motion.li
        className=" w-full flex justify-center items-center bg-[#A7F3D0] h-[20vh] relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute right-0">
          <Image
            height={200}
            width={200}
            alt="category"
            src="/philodendron.png"
            className="translate-x-[40%]"
          />
        </div>
        <p className="font-abasan text-2xl text-black text-opacity-70">
          گیاهان کم نور
        </p>
      </motion.li>
    </ul>
  );
};

export default Categories;
