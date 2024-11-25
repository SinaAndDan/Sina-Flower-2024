"use client";

import { BiCategory } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from "next/link";

type CategoryProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};
const Header: React.FC<CategoryProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <nav className="bg-white border-gray-200 h-screen w-20 fixed overflow-y-auto  md:hidden z-50">
      <div className="flex flex-col h-[50%] justify-between pt-12 ">
        <Link className="flex items-center justify-center" href="/categories">
          <BiCategory className="w-8 h-8 text-black text-opacity-80 " />
        </Link>
        <div className="flex flex-col z-40">
          <button
            className="flex relative"
            onClick={() => setSelectedCategory("پیشنهادی")}
          >
            <motion.span
              className={`absolute w-3 h-10 bg-gradient-to-t from-[#0f4a1e] via-[#1f7853] to-[#1e8e63] rounded-3xl -right-1.5 top-1/2 -translate-y-1/2 ${
                selectedCategory === "پیشنهادی" ? "" : "hidden"
              }`}
              animate={{
                opacity: selectedCategory === "پیشنهادی" ? 20 : 0,
                y: selectedCategory === "پیشنهادی" ? -20 : 100,
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <div
              className={`rotate-90 text-black font-extrabold ${
                selectedCategory === "پیشنهادی" ? "" : "text-opacity-50"
              }`}
            >
              پیشنهادی
            </div>
          </button>
          <button
            className="flex relative mt-20"
            onClick={() => setSelectedCategory("فیکوس")}
          >
            <motion.span
              className={`absolute w-3 h-10 bg-gradient-to-t from-[#0f4a1e] via-[#1f7853] to-[#1e8e63] rounded-3xl -right-1.5 top-1/2 -translate-y-1/2 ${
                selectedCategory === "فیکوس" ? "" : "hidden"
              }`}
              animate={{
                opacity: selectedCategory === "فیکوس" ? 1 : 0,
                y:
                  selectedCategory === "فیکوس"
                    ? -20
                    : selectedCategory === "کاکتوس" // Check for previous category
                    ? 100 // If coming from the bottom button
                    : -100, // If coming from the top button
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>

            <div
              className={`rotate-90 text-black font-extrabold ${
                selectedCategory === "فیکوس" ? "" : "text-opacity-50"
              }`}
            >
              فیکوس
            </div>
          </button>
          <button
            className="flex relative mt-20"
            onClick={() => setSelectedCategory("کاکتوس")}
          >
            <motion.span
              className={`absolute w-3 h-10 bg-gradient-to-t from-[#0f4a1e] via-[#1f7853] to-[#1e8e63] rounded-3xl -right-1.5 top-1/2 -translate-y-1/2 ${
                selectedCategory === "کاکتوس" ? "" : "hidden"
              }`}
              animate={{
                opacity: selectedCategory === "کاکتوس" ? 1 : 0,
                y: selectedCategory === "کاکتوس" ? -20 : -100,
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <div
              className={`rotate-90 text-black font-extrabold ${
                selectedCategory === "کاکتوس" ? "" : "text-opacity-50"
              }`}
            >
              کاکتوس
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
