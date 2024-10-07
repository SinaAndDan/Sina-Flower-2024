"use client";

import React from "react";
import Image from "next/image";
import { GrFormNext } from "react-icons/gr";
import { MdKeyboardDoubleArrowDown, MdLock, MdSave } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { useRouter } from "next/navigation";

const ProfilePage: React.FC = () => {
  const router = useRouter();
  const backToAccount = () => {
    router.push("/account");
  };

  const goForEdit = () => {
    router.push("/account/profile/edit");
  };

  return (
    <div className="flex flex-col h-screen font-yekan">
      <div className="flex items-center justify-center w-full min-h-52 bg-greenlogIn rounded-br-xl relative">
        <button
          className="bg-loginInput rounded-full w-8 h-8 flex items-center justify-center absolute right-4 top-4"
          onClick={backToAccount}
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
        <button
          className=" bg-greenlogIn rounded-full w-12 h-12 flex items-center justify-center absolute left-0 -bottom-6"
          onClick={goForEdit}
        >
          <MdKeyboardDoubleArrowDown className="w-8 h-8 text-white" />
        </button>
      </div>
      <div className="font-yekan w-full px-6 mt-12">
        <div>
          <p className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
            نام و نام خانوادگی
          </p>
          <p className=" text-greenlogIn py-1 ">علی علیزاده</p>
        </div>
        <div>
          <p className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">
            شماره تلفن
          </p>
          <p className=" text-greenlogIn py-1 ">۰۹۱۲۱۱۱۱۱۱۱</p>
        </div>
        <div>
          <p className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">
            شهر
          </p>
          <p className=" text-greenlogIn py-1 ">تهران</p>
        </div>
        <div>
          <p className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">
            ایمیل
          </p>
          <p className=" text-greenlogIn py-1 ">mmdzare1986@gmail.com</p>
        </div>
        <div>
          <p className="block mb-1 mt-4 text-sm font-medium text-gray-900 dark:text-white">
            رمز عبور
          </p>
          <p className=" text-greenlogIn py-1 ">********</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
