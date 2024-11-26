"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    bgColor: "#D8B4FE",
    text: "گیاهان<br></br>آپارتمانی",
    image: "/photos.png",
    imagePosition: "right",
  },
  {
    bgColor: "#FECACA",
    text: "گیاهان<br></br> فضای باز",
    image: "/gardenII.png",
    imagePosition: "left",
  },
  {
    bgColor: "#FDE68A",
    text: "کاکتوس‌ها",
    image: "/cactus.png",
    imagePosition: "right",
  },
  {
    bgColor: "#93C5FD",
    text: "گیاهان <br></br>تصفیه‌کننده هوا",
    image: "/peacelily.png",
    imagePosition: "left",
  },
  {
    bgColor: "#A7F3D0",
    text: "گیاهان<br></br> کم نور",
    image: "/philodendron.png",
    imagePosition: "right",
  },
];

const Categories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ul className=" w-full flex flex-col h-full overflow-hidden">
      {categories.map((category, index) => (
        <motion.li
          key={index}
          onClick={() => handleExpand(index)}
          className={`w-full flex justify-center items-center h-[20vh] relative`}
          style={{ backgroundColor: category.bgColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={activeIndex === index ? { scale: 1.5 } : { scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`absolute ${
              category.imagePosition === "right" ? "right-0" : "left-0"
            }`}
          >
            <Image
              height={200}
              width={200}
              alt="category"
              src={category.image}
              className={`${
                category.imagePosition === "right"
                  ? "translate-x-[40%] md:translate-x-0"
                  : "-translate-x-[40%] md:translate-x-0"
              }`}
            />
          </motion.div>
          <motion.p
            animate={activeIndex === index ? { scale: 1.5 } : { scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="font-abasan md:text-4xl text-2xl text-black text-opacity-70 text-center leading-4 md:leading-6"
            dangerouslySetInnerHTML={{ __html: category.text }}
          ></motion.p>
        </motion.li>
      ))}
    </ul>
  );
};

export default Categories;
