"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { supabase } from "../../../lib/supabaseClient";

type Category = {
  name: string;
  image?: string;
};

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from("categories").select("*");
      if (error) {
        setError(error.message);
      } else {
        setCategories(data);
      }
    };

    fetchCategories();
  }, []);

  console.log();

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
            className="translate-x-[40%] md:translate-x-0"
          />
        </div>
        <p className="font-abasan md:text-4xl text-2xl text-black text-opacity-70">
          گیاهان <br></br>آپارتمانی
        </p>
      </motion.li>
      <motion.li
        className=" w-full flex justify-center items-center bg-[#FECACA] h-[20vh] relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-abasan md:text-4xl text-2xl text-black text-opacity-70 text-center">
          گیاهان<br></br> فضای باز
        </p>
        <div className="absolute left-0">
          <Image
            height={200}
            width={200}
            alt="category"
            src="/gardenII.png"
            className="-translate-x-[40%] md:translate-x-0"
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
            className="translate-x-[40%] md:translate-x-0"
          />
        </div>
        <p className="font-abasan md:text-4xl text-2xl text-black text-opacity-70">
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
            className="-translate-x-[40%] md:translate-x-0"
          />
        </div>
        <p className="font-abasan md:text-4xl text-2xl text-black text-opacity-70 text-center">
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
            className="translate-x-[40%] md:translate-x-0"
          />
        </div>
        <p className="font-abasan md:text-4xl text-2xl text-black text-opacity-70">
          گیاهان<br></br> کم نور
        </p>
      </motion.li>
    </ul>
  );
};

export default Categories;
