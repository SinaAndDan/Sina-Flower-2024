"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MdLock, MdMail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { useRouter } from "next/navigation";

const SignInPage: React.FC = () => {
  const router = useRouter();

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for error or success message
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission prevented.");

    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.status === 200) {
        // On successful registration, redirect or show success message
        setMessage("ثبت نام با موفقیت انجام شد");
        router.push("/account/profile"); // Redirect to sign in page
      } else {
        // Show error message from the backend
        setMessage(data.msg || "Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred during registration.");
    }
  };

  const backToMainPage = () => {
    router.push("/");
  };

  return (
    <div className="mt-20 font-sahel">
      <span
        className="mx-3 bg-loginInput rounded-full w-10 h-10 flex items-center justify-center sm:hidden"
        onClick={backToMainPage}
      >
        <GrFormNext className="w-8 h-8 text-greenlogIn cursor-pointer translate-x-px" />
      </span>
      <div>
        <Image
          width={150}
          height={150}
          src="/sideimgVI.png"
          alt="Full Screen Image"
          className="-z-20 absolute left-0 sm:w-40 sm:h-40 md:min-w-[200px] md:min-h-[200px]"
          priority={true} // Optional: Loads the image with high priority
        />
        <div className="flex flex-col container md:max-w-[60vw] xl:max-w-[50vw] sm:mx-auto items-center">
          <div className="text-greenlogIn text-2xl mt-10 font-sahel pl-16 sm:pl-0">
            ثبت نام
          </div>
          <p className="text-greenlogIn text-opacity-65 mt-3 text-sm font-sahel pl-16 sm:pl-0">
            حساب جدید بسازید
          </p>
          <form className="font-yekan w-full px-6" onSubmit={handleSubmit}>
            <div className="w-full relative mt-20 lg:max-w-[70%] 2xl:max-w-[50%] mx-auto">
              <input
                type="text"
                className=" bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-9 rounded-lg active:outline-greenlogIn focus:outline-greenlogIn focus:transition-opacity md:h-[40px]"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="نام کاربری"
                required
              />
              <div
                className="absolute inset-y-0 right-2 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <IoPerson className="text-greenlogIn" />
              </div>
            </div>
            <div className="w-full relative mt-3 lg:max-w-[70%] 2xl:max-w-[50%] mx-auto">
              <input
                type="email"
                className=" bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-9 rounded-lg active:outline-greenlogIn focus:outline-greenlogIn focus:transition-opacity	md:h-[40px]"
                value={formData.email}
                onChange={handleChange}
                placeholder="ایمیل"
                required
              />
              <div
                className="absolute inset-y-0 right-2 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <MdMail className="text-greenlogIn" />
              </div>
            </div>
            <div className="w-full relative mt-3 lg:max-w-[70%] 2xl:max-w-[50%] mx-auto">
              <input
                className=" bg-loginInput text-greenlogIn w-full placeholder:text-greenlogIn py-1 px-9 rounded-lg  active:outline-greenlogIn focus:outline-greenlogIn md:h-[40px]"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="کلمه عبور"
                required
              />
              <div
                className="absolute inset-y-0 right-2 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <MdLock className="text-greenlogIn" />
              </div>
            </div>
            <div className="flex flex-col w-full mt-5 md:mt-10 lg:max-w-[70%] 2xl:max-w-[50%] mx-auto">
              <button className="w-full bg-gradient-to-t from-[#0f4a1e] via-[#1f7853] to-[#1e8e63] text-white py-2 rounded-3xl font-yekan md:h-[40px]">
                ثبت نام
              </button>
            </div>
            <div className="flex justify-between mt-2 md:mt-5"></div>
            {message && (
              <div className="mt-3 text-center text-red-600">{message}</div>
            )}
            <div className="flex justify-between mt-5 lg:max-w-[70%] 2xl:max-w-[50%] mx-auto">
              <div className="flex items-center">
                <input
                  id="rememberMe"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-green bg-greenlogIn rounded-full accent-greenlogIn"
                />
                <label
                  htmlFor="rememberMe"
                  className="ms-2 font-medium text-xs text-greenlogIn"
                >
                  مرا بخاطر بسپار
                </label>
              </div>
              <p className="text-xs text-greenlogIn font-bold">فراموشی رمز؟</p>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full mt-6 flex items-center justify-between">
        {/* Continue with Google section */}
      </div>
      <p className="text-sm font-light text-center mt-4 text-black text-opacity-80 font-yekan">
        قبلا ثبت نام کرده اید؟
        <a
          href="/account/signin"
          className="text-greenlogIn font-extrabold hover:underline mx-1"
        >
          ورود
        </a>
      </p>
    </div>
  );
};

export default SignInPage;
