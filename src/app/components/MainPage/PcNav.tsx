"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { useLanguage } from "src/app/context/LanguageContext";

const PcNav: React.FC = () => {
  const [searchButton, setSearchButton] = useState(false);
  const { content, setLanguage } = useLanguage();

  const pathname = usePathname();
  const getLinkClass = (path: string) => {
    console.log(path);
    return pathname === path ? "text-green" : "text-black";
  };
  console.log(pathname);

  const searchButtonHandler = () => {
    setSearchButton((prevSearchButton) => !prevSearchButton);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 hidden md:block font-yekan">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/" className="flex space-x-3 rtl:space-x-reverse">
          <Image
            src="/golesina.png"
            className="h-8"
            width={50}
            height={50}
            alt="Logo"
          />
        </Link>

        <div className="flex justify-center">
          <ul className="font-medium flex p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/favorites"
                className={`${getLinkClass(
                  "/favorites"
                )} block py-2 px-3 rounded md:border-0  md:p-0 `}
              >
                {content.favorites}
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className={`${getLinkClass(
                  "/cart"
                )} block py-2 px-3 rounded md:border-0  md:p-0 `}
              >
                {content.cart}
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className={`${getLinkClass(
                  "/categories"
                )} block py-2 px-3 rounded md:border-0  md:p-0 `}
              >
                {content.category}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="font-medium flex p-4 md:p-0 mt-4 rounded-lg bg-gray-50 rtl:space-x-reverse md:mt-0 ">
            <li className="flex items-center justify-center mx-4 min-w-[30vw] xl:min-w-[20vw]">
              <form
                className="flex items-center justify-end w-full"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <select onChange={(e) => setLanguage(e.target.value)}>
                  <option value="pe">Persian</option>
                  <option value="en">English</option>
                </select>
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <motion.div
                  className={`relative w-full ${!searchButton && "hidden"}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: searchButton ? 1 : 0,
                    scale: searchButton ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-darkGray text-gray text-sm rounded-lg block w-full ps-6 p-2.5 placeholder:text-gray focus:outline-none"
                    placeholder={content.search}
                    maxLength={25}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg"
                  onClick={searchButtonHandler}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6 text-darkGray"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </motion.button>
              </form>
            </li>
            <li className="bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow ease-in-out hover:from-[#004d00] hover:via-[#003300] hover:to-[#002200] text-white rounded-2xl py-2 px-6">
              <Link
                href="/account/signin"
                className="block py-2 px-3 text-gray-900 rounded  md:p-0 "
              >
                {content.signIn}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PcNav;
