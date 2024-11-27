"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";

const PcNav: React.FC = () => {
  const pathname = usePathname();
  const getLinkClass = (path: string) => {
    console.log(path);
    return pathname === path ? "text-green" : "text-black";
  };
  console.log(pathname);
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

        {/* Centered Navbar Items */}
        <div className="flex-1 flex justify-center">
          <ul className="font-medium flex p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/favorites"
                className={`${getLinkClass(
                  "/favorites"
                )} block py-2 px-3 rounded md:border-0  md:p-0 `}
              >
                مورد علاقه ها
              </Link>
            </li>
            <li>
              <Link
                href="/cart"
                className={`${getLinkClass(
                  "/cart"
                )} block py-2 px-3 rounded md:border-0  md:p-0 `}
              >
                سبد خرید
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className={`${getLinkClass(
                  "/categories"
                )} block py-2 px-3 rounded md:border-0  md:p-0 `}
              >
                دسته بندی
              </Link>
            </li>
          </ul>
        </div>

        {/* Separate ثبت نام at the end */}
        <div>
          <ul className="font-medium flex p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="flex items-center justify-center mx-4">
              <IoSearch className="w-6 h-6 text-black text-opacity-80" />
            </li>
            <li className="bg-gradient-to-tl from-[#004d00] to-[#00a86b] text-white rounded-2xl py-2 px-6">
              <Link
                href="/account/signin"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                ثبت نام
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default PcNav;
