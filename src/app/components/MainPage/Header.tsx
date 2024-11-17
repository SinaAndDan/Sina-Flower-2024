"use client";

import { BiCategory } from "react-icons/bi";

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
        <div className="flex items-center justify-center">
          <BiCategory className="w-8 h-8 text-black text-opacity-80 " />
        </div>
        <div className="flex flex-col z-40">
          <button
            className="flex relative"
            onClick={() => setSelectedCategory("پیشنهادی")}
          >
            <span
              className={`absolute w-3 h-10 bg-green rounded-3xl -right-1.5 top-1/2 -translate-y-1/2 ${
                selectedCategory === "پیشنهادی" ? "" : "hidden"
              }`}
            ></span>
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
            <span
              className={`absolute w-3 h-10 bg-green rounded-3xl -right-1.5 top-1/2 -translate-y-1/2 ${
                selectedCategory === "فیکوس" ? "" : "hidden"
              }`}
            ></span>
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
            <span
              className={`absolute w-3 h-10 bg-green rounded-3xl -right-1.5 top-1/2 -translate-y-1/2 ${
                selectedCategory === "کاکتوس" ? "" : "hidden"
              }`}
            ></span>
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
