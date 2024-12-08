"use client";

import { BiCategory } from "react-icons/bi";
import { motion } from "framer-motion";
import Link from "next/link";
import { SelectedCategoryProps } from "src/types/category";
import { useLanguage } from "src/app/context/LanguageContext";

const Header: React.FC<SelectedCategoryProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const { content, language } = useLanguage();
  return (
    <nav className="bg-white border-gray-200 h-screen w-20 fixed overflow-y-auto  md:hidden z-50">
      <div className="flex flex-col h-[50%] justify-between pt-12 ">
        <Link className="flex items-center justify-center" href="/categories">
          <motion.div
            whileTap={{ rotate: 360, opacity: 0.6 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <BiCategory className="w-8 h-8 text-black text-opacity-80 " />
          </motion.div>
        </Link>
        <div className="flex flex-col z-40">
          <button
            className="flex relative"
            onClick={() => setSelectedCategory(content.stSidebar)}
          >
            <motion.span
              className={`absolute w-3 h-10 bg-gradient-to-t from-[#0f4a1e] via-[#1f7853] to-[#1e8e63] rounded-3xl -right-1.5 top-1/2 -translate-y-1/2 ${
                selectedCategory === content.stSidebar ? "" : "hidden"
              }`}
              animate={{
                opacity: selectedCategory === content.stSidebar ? 20 : 0,
                y: selectedCategory === content.stSidebar ? -20 : 100,
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <div
              className={`rotate-90 text-black font-extrabold ${
                selectedCategory === content.stSidebar ? "" : "text-opacity-50"
              }`}
            >
              {content.stSidebar}
            </div>
          </button>
          <button
            className="flex relative mt-20"
            onClick={() => setSelectedCategory(content.ndSidebar)}
          >
            <motion.span
              className={`absolute w-3 h-10 bg-gradient-to-t from-[#0f4a1e] via-[#1f7853] to-[#1e8e63] rounded-3xl -right-1.5 top-1/2 -translate-y-1/2 ${
                selectedCategory === content.ndSidebar ? "" : "hidden"
              }`}
              animate={{
                opacity: selectedCategory === content.ndSidebar ? 1 : 0,
                y:
                  selectedCategory === content.ndSidebar
                    ? -20
                    : selectedCategory === content.rdSidebar // Check for previous category
                    ? 100 // If coming from the bottom button
                    : -100, // If coming from the top button
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>

            <div
              className={`rotate-90 text-black font-extrabold ${
                selectedCategory === content.ndSidebar ? "" : "text-opacity-50"
              }`}
            >
              {content.ndSidebar}
            </div>
          </button>
          <button
            className="flex relative mt-20"
            onClick={() => setSelectedCategory(content.rdSidebar)}
          >
            <motion.span
              className={`absolute w-3 h-10 bg-gradient-to-t from-[#0f4a1e] via-[#1f7853] to-[#1e8e63] rounded-3xl -right-1.5 top-1/2 -translate-y-1/2 ${
                selectedCategory === content.rdSidebar ? "" : "hidden"
              }`}
              animate={{
                opacity: selectedCategory === content.rdSidebar ? 1 : 0,
                y: selectedCategory === content.rdSidebar ? -20 : -100,
              }}
              transition={{ duration: 0.3 }}
            ></motion.span>
            <div
              className={`rotate-90 text-black font-extrabold ${
                selectedCategory === content.rdSidebar ? "" : "text-opacity-50"
              }`}
            >
              {content.rdSidebar}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
