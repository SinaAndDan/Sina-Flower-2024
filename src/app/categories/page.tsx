"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    bgColor: "#D8B4FE",
    text: "گیاهان<br></br>آپارتمانی",
    image: "/photos.png",
    slug: "indoor-plants",
    imagePosition: "right",
    stSubCategory: "کم نور",
    ndSubCategory: "تصفیه کننده هوا",
    rdSubCategory: "گرمسیری",
  },
  {
    bgColor: "#FECACA",
    text: "گل‌های شاخه‌ای",
    image: "/branch.png",
    slug: "indoor-plants",
    stSubCategory: "شاخه‌های گلدار",
    ndSubCategory: "پیچک‌های گلدار",
    rdSubCategory: "گل‌های شاخه‌ای",
    imagePosition: "left",
  },
  {
    bgColor: "#FDE68A",
    text: "کاکتوس‌ها",
    image: "/cactus.png",
    slug: "indoor-plants",
    imagePosition: "right",
    stSubCategory: "ساکولنت‌های بیابانی",
    ndSubCategory: "کاکتوس‌ها",
    rdSubCategory: "مینیاتوری",
  },

  {
    bgColor: "#A7F3D0",
    text: "گیاهان برگی",
    image: "/Foliage.png",
    slug: "indoor-plants",

    imagePosition: "left",
    stSubCategory: "کم نور",
    ndSubCategory: "گرمسیری ",
    rdSubCategory: "تصفیه کننده هوا",
  },
  {
    bgColor: "#93C5FD",
    text: "تنگ گیاهی",
    image: "/plantbowl.png",

    slug: "indoor-plants",
    imagePosition: "right",
    stSubCategory: "آکواریوم‌های ماهی بتا",
    ndSubCategory: "کیت‌های آکواسکپینگ",
    rdSubCategory: "آکواریوم‌های میگو و گیاه",
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
        <Link href={"/"} key={index}>
          <motion.li
            onClick={() => handleExpand(index)}
            className={`w-full flex justify-center items-center h-[20vh] relative`}
            style={{ backgroundColor: category.bgColor }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={activeIndex === index ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
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
              animate={activeIndex === index ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="font-abasan md:text-4xl text-2xl text-black text-opacity-70 text-center leading-4 md:leading-6"
              dangerouslySetInnerHTML={{ __html: category.text }}
            ></motion.p>
          </motion.li>
        </Link>
      ))}
    </ul>
  );
};

export default Categories;
