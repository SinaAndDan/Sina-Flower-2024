"use client";

import { motion } from "motion/react";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Category = {
  id: number;
  bgColor: string;
  image: string;
  imagePosition: "right" | "left";
  text: string;
};

type CategoryProps = {
  categories: Category[];
};

const Category: React.FC<CategoryProps> = ({ categories }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleExpand = (index: number) => {
    setIsAnimating(true);
    setActiveIndex(index);

    setTimeout(() => {
      setIsAnimating(false);
      router.push("/");
    }, 400);
  };
  return (
    <ul className="w-full flex flex-col h-full overflow-hidden cursor-pointer">
      {categories.map((category) => (
        <motion.li
          key={category.id}
          className={`w-full flex justify-center items-center h-[20vh] relative`}
          style={{ backgroundColor: category.bgColor }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onClick={(e) => {
            if (isAnimating) {
              e.preventDefault();
            } else {
              handleExpand(category.id);
            }
          }}
        >
          <motion.div
            animate={
              activeIndex === category.id ? { scale: 1.2 } : { scale: 1 }
            }
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
            animate={
              activeIndex === category.id ? { scale: 1.2 } : { scale: 1 }
            }
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="font-abasan md:text-4xl text-2xl text-black text-opacity-70 text-center leading-4 md:leading-6"
            dangerouslySetInnerHTML={{ __html: category.text }}
          ></motion.p>
        </motion.li>
      ))}
    </ul>
  );
};

export default Category;
