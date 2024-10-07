"use client";

import React from "react";
import Image from "next/image";
import { MdKeyboardDoubleArrowDown, MdLock, MdSave } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import { useRouter } from "next/navigation";

const EditProfile: React.FC = () => {
  const router = useRouter();
  const backToProfile = () => {
    router.push("/account/profile");
  };

  return (
    <div className="flex flex-col h-screen bg-greenlogIn font-yekan">
      <div className="flex items-center justify-center w-full min-h-52  rounded-br-xl relative">
        <button
          className="bg-loginInput rounded-full w-8 h-8 flex items-center justify-center absolute right-4 top-4"
          onClick={backToProfile}
        >
          <GrFormNext className="w-6 h-6 text-greenlogIn cursor-pointer translate-x-px" />
        </button>
        <span className="flex flex-col items-center rounded-full w-20 h-20 my-12 bg-blue">
          <Image
            width={200}
            height={200}
            src="/login.jpg"
            alt="Full Screen Image"
            className="p-0.5 w-20 h-20 rounded-full"
            priority={true} // Optional: Loads the image with high priority
          />
          <div className="flex items-center justify-center mt-2">
            <p className="text-white">Active</p>
            <span className="w-2 h-2 bg-blue rounded-full"></span>
          </div>
        </span>
      </div>
      <form className="font-yekan w-full px-6 mt-12">
        <div>
          <label
            htmlFor="full_name"
            className="block mb-2 text-sm font-medium text-gray-900 font-yekan text-loginInput"
          >
            نام و نام خانوادگی
          </label>
          <input
            type="text"
            id="full_name"
            className="bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-3 rounded-lg active:outline-greenlogIn focus:outline-greenlogIn focus:transition-opacity"
            placeholder="علی علیزاده"
            required
          />
        </div>
        <div>
          <label
            htmlFor="phone_number"
            className="block mb-2 mt-5 text-sm font-medium text-gray-900 text-loginInput"
          >
            شماره تلفن
          </label>
          <input
            type="number"
            id="phone_number"
            className="bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-3 rounded-lg active:outline-greenlogIn focus:outline-greenlogIn focus:transition-opacity"
            placeholder="۰۹۱۲۱۱۱۱۱۱۱"
            required
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block mb-2 mt-5 text-sm font-medium text-gray-900 text-loginInput"
          >
            شهر
          </label>
          <select
            id="city"
            className="bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-3 rounded-lg active:outline-greenlogIn focus:outline-greenlogIn focus:transition-opacity"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 mt-5 text-sm font-medium text-gray-900 text-loginInput"
          >
            ایمیل
          </label>
          <input
            type="text"
            id="email"
            className="bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-3 rounded-lg active:outline-greenlogIn focus:outline-greenlogIn focus:transition-opacity"
            placeholder="mmdzare1986@gmail.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 mt-5 text-sm font-medium text-gray-900 text-loginInput"
          >
            رمز عبور
          </label>
          <input
            type="password"
            id="password"
            className="bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-3 rounded-lg active:outline-greenlogIn focus:outline-greenlogIn focus:transition-opacity"
            placeholder=""
            required
          />
        </div>
      </form>
      <span className="w-12 h-12 mt-auto bg-loginInput rounded-full flex items-center justify-center my-5 mx-3">
        <MdSave className="text-greenlogIn w-8 h-8 translate-x-0.5" />
      </span>
    </div>
  );
};

export default EditProfile;
