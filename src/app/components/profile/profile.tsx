import React from "react";
import Image from "next/image";
import { GrFormNext } from "react-icons/gr";
import { MdKeyboardDoubleArrowDown, MdLock } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

const ProfilePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center w-full min-h-52 bg-greenlogIn rounded-br-xl relative">
        <span className="flex flex-col items-center rounded-full w-20 h-20 my-12">
          <Image
            width={200}
            height={200}
            src="/login.jpg"
            alt="Full Screen Image"
            className="p-0.5 w-20 h-20 rounded-full"
            priority={true} // Optional: Loads the image with high priority
          />
          <div className="flex items-center justify-center">
            <p className="text-white">Active</p>
            <span className="w-2 h-2 bg-blue rounded-full mx-1"></span>
          </div>
        </span>
        <span className=" bg-greenlogIn rounded-r-full w-12 h-12 flex items-center justify-center absolute left-0 -bottom-8">
          <MdKeyboardDoubleArrowDown className="w-8 h-8 text-white" />
        </span>
      </div>
      <form className="font-yekan w-full px-6 mt-12">
        <div>
          <label
            htmlFor="full_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            نام و نام خانوادگی
          </label>
          <input
            type="text"
            id="full_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
